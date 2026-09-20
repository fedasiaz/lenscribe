const canvas = document.getElementById('overlayCanvas');
const ctx = canvas.getContext('2d');
const hint = document.getElementById('hint');

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode') === 'freehand' ? 'freehand' : 'rect';
const lang = params.get('lang') || 'en';

const OVERLAY_TEXTS = {
  en: {
    rect: 'Hold LMB and drag to select an area · Esc — cancel',
    freehand: 'Hold LMB and draw around an area · Esc — cancel',
  },
  ru: {
    rect: 'Зажмите ЛКМ и выделите область · Esc — отмена',
    freehand: 'Зажмите ЛКМ и обведите область · Esc — отмена',
  },
  es: {
    rect: 'Mantén pulsado y arrastra para seleccionar · Esc — cancelar',
    freehand: 'Mantén pulsado y dibuja alrededor del área · Esc — cancelar',
  },
  zh: {
    rect: '按住鼠标左键拖动选择区域 · Esc — 取消',
    freehand: '按住鼠标左键圈出区域 · Esc — 取消',
  },
};

if (hint) {
  const dict = OVERLAY_TEXTS[lang] || OVERLAY_TEXTS.en;
  hint.textContent = dict[mode];
}

let isDown = false;
let startAbsX = 0;
let startAbsY = 0;
let currentAbsX = 0;
let currentAbsY = 0;
let points = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redraw();
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function toAbs(e) {
  return {
    x: window.screenX + e.clientX,
    y: window.screenY + e.clientY,
  };
}

function toRel(absX, absY) {
  return {
    x: absX - window.screenX,
    y: absY - window.screenY,
  };
}

function scalePoint(absX, absY) {
  const scale = window.devicePixelRatio || 1;
  return {
    x: Math.round(absX * scale),
    y: Math.round(absY * scale),
  };
}

canvas.addEventListener('mousedown', (e) => {
  isDown = true;
  const abs = toAbs(e);
  startAbsX = abs.x;
  startAbsY = abs.y;
  currentAbsX = abs.x;
  currentAbsY = abs.y;
  points = [abs];
  redraw();
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  const abs = toAbs(e);
  currentAbsX = abs.x;
  currentAbsY = abs.y;
  if (mode === 'freehand') {
    const last = points[points.length - 1];
    const dx = abs.x - last.x;
    const dy = abs.y - last.y;
    if (dx * dx + dy * dy >= 4) points.push(abs);
  }
  redraw();
});

canvas.addEventListener('mouseup', (e) => {
  if (!isDown) return;
  isDown = false;
  const end = toAbs(e);
  currentAbsX = end.x;
  currentAbsY = end.y;

  if (mode === 'freehand') {
    points.push(end);
    finishFreehand();
  } else {
    finishRect(end);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.lenscribeAPI.cancelSelection();
  }
});

function finishRect(end) {
  const finalX = Math.min(startAbsX, end.x);
  const finalY = Math.min(startAbsY, end.y);
  const width = Math.abs(end.x - startAbsX);
  const height = Math.abs(end.y - startAbsY);

  if (width > 10 && height > 10) {
    const scale = window.devicePixelRatio || 1;
    window.lenscribeAPI.sendSelectionRect({
      mode: 'rect',
      x: Math.round(finalX * scale),
      y: Math.round(finalY * scale),
      width: Math.round(width * scale),
      height: Math.round(height * scale),
    });
  } else {
    window.lenscribeAPI.cancelSelection();
  }
}

function finishFreehand() {
  if (points.length < 8) {
    window.lenscribeAPI.cancelSelection();
    return;
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const scaled = points.map((p) => {
    const s = scalePoint(p.x, p.y);
    minX = Math.min(minX, s.x);
    minY = Math.min(minY, s.y);
    maxX = Math.max(maxX, s.x);
    maxY = Math.max(maxY, s.y);
    return s;
  });

  const width = maxX - minX;
  const height = maxY - minY;
  if (width < 10 || height < 10) {
    window.lenscribeAPI.cancelSelection();
    return;
  }

  window.lenscribeAPI.sendSelectionRect({
    mode: 'freehand',
    x: minX,
    y: minY,
    width,
    height,
    points: scaled,
  });
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!isDown && mode === 'rect') return;
  if (mode === 'freehand' && points.length < 2 && !isDown) return;

  if (mode === 'freehand') {
    drawFreehand();
  } else if (isDown) {
    drawRect();
  }
}

function drawRect() {
  const a = toRel(startAbsX, startAbsY);
  const b = toRel(currentAbsX, currentAbsY);
  const relX = Math.min(a.x, b.x);
  const relY = Math.min(a.y, b.y);
  const w = Math.abs(b.x - a.x);
  const h = Math.abs(b.y - a.y);

  ctx.clearRect(relX, relY, w, h);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.strokeRect(relX, relY, w, h);
}

function drawFreehand() {
  if (points.length < 2) return;

  ctx.save();
  ctx.beginPath();
  points.forEach((p, i) => {
    const r = toRel(p.x, p.y);
    if (i === 0) ctx.moveTo(r.x, r.y);
    else ctx.lineTo(r.x, r.y);
  });
  ctx.closePath();

  ctx.globalCompositeOperation = 'destination-out';
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.restore();
}