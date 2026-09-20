const api = window.lenscribeAPI;

const TRANSLATIONS = {
  en: {
    'nav.create': 'Create',
    'nav.mode.rect': 'Rectangle',
    'nav.mode.freehand': 'Freehand',
    'nav.settings': 'Settings',
    'hint.compact': 'Click "Create" to select a screen area',
    'tool.pencil': 'Pencil',
    'tool.color': 'Pencil color',
    'tool.blur': 'Blur',
    'tool.eraser': 'Eraser',
    'tool.thickness': 'Thickness',
    'settings.title': 'Settings',
    'settings.language': 'Interface language',
    'settings.language.hint': 'Changes apply immediately',
    'recognize.button': 'Recognize text',
    'placeholder.source': 'Text will appear here...',
    'placeholder.target': 'Translation...',
    'action.clear': 'Clear',
    'action.copy': 'Copy',
    'action.swap': 'Swap languages',
    'lang.ru': 'Russian',
    'lang.en': 'English',
    'lang.zh': 'Chinese',
    'lang.es': 'Spanish',
    'status.image.received': 'Image received!',
    'status.recognizing': 'Recognizing...',
    'status.recognized': 'Text recognized!',
    'status.no.text': 'No text found.',
    'status.ocr.error': 'OCR error: ',
    'status.translate.error': 'Translation error',
    'status.copied': 'Copied',
    'status.selection.cancelled': 'Selection cancelled',
    'status.mode.rect': 'Mode: rectangle',
    'status.mode.freehand': 'Mode: freehand',
    'status.capture.error': 'Capture error: ',
  },
  ru: {
    'nav.create': 'Создать',
    'nav.mode.rect': 'Прямоугольник',
    'nav.mode.freehand': 'Произвольное',
    'nav.settings': 'Настройки',
    'hint.compact': 'Нажмите «Создать», чтобы выделить область экрана',
    'tool.pencil': 'Карандаш',
    'tool.color': 'Цвет карандаша',
    'tool.blur': 'Блюр',
    'tool.eraser': 'Ластик',
    'tool.thickness': 'Толщина',
    'settings.title': 'Настройки',
    'settings.language': 'Язык интерфейса',
    'settings.language.hint': 'Изменения применяются сразу',
    'recognize.button': 'Распознать текст',
    'placeholder.source': 'Текст появится здесь...',
    'placeholder.target': 'Перевод...',
    'action.clear': 'Очистить',
    'action.copy': 'Копировать',
    'action.swap': 'Поменять языки',
    'lang.ru': 'Русский',
    'lang.en': 'Английский',
    'lang.zh': 'Китайский',
    'lang.es': 'Испанский',
    'status.image.received': 'Изображение получено!',
    'status.recognizing': 'Распознавание...',
    'status.recognized': 'Текст распознан!',
    'status.no.text': 'Текст не найден.',
    'status.ocr.error': 'Ошибка OCR: ',
    'status.translate.error': 'Ошибка перевода',
    'status.copied': 'Скопировано',
    'status.selection.cancelled': 'Выделение отменено',
    'status.mode.rect': 'Режим: прямоугольник',
    'status.mode.freehand': 'Режим: произвольное выделение',
    'status.capture.error': 'Ошибка захвата: ',
  },
  es: {
    'nav.create': 'Crear',
    'nav.mode.rect': 'Rectángulo',
    'nav.mode.freehand': 'Mano alzada',
    'nav.settings': 'Ajustes',
    'hint.compact': 'Pulsa «Crear» para seleccionar un área de la pantalla',
    'tool.pencil': 'Lápiz',
    'tool.color': 'Color del lápiz',
    'tool.blur': 'Desenfoque',
    'tool.eraser': 'Borrador',
    'tool.thickness': 'Grosor',
    'settings.title': 'Ajustes',
    'settings.language': 'Idioma de la interfaz',
    'settings.language.hint': 'Los cambios se aplican al instante',
    'recognize.button': 'Reconocer texto',
    'placeholder.source': 'El texto aparecerá aquí...',
    'placeholder.target': 'Traducción...',
    'action.clear': 'Borrar',
    'action.copy': 'Copiar',
    'action.swap': 'Intercambiar idiomas',
    'lang.ru': 'Ruso',
    'lang.en': 'Inglés',
    'lang.zh': 'Chino',
    'lang.es': 'Español',
    'status.image.received': '¡Imagen recibida!',
    'status.recognizing': 'Reconociendo...',
    'status.recognized': '¡Texto reconocido!',
    'status.no.text': 'Texto no encontrado.',
    'status.ocr.error': 'Error OCR: ',
    'status.translate.error': 'Error de traducción',
    'status.copied': 'Copiado',
    'status.selection.cancelled': 'Selección cancelada',
    'status.mode.rect': 'Modo: rectángulo',
    'status.mode.freehand': 'Modo: mano alzada',
    'status.capture.error': 'Error de captura: ',
  },
  zh: {
    'nav.create': '创建',
    'nav.mode.rect': '矩形',
    'nav.mode.freehand': '自由绘制',
    'nav.settings': '设置',
    'hint.compact': '点击「创建」选择屏幕区域',
    'tool.pencil': '铅笔',
    'tool.color': '铅笔颜色',
    'tool.blur': '模糊',
    'tool.eraser': '橡皮擦',
    'tool.thickness': '粗细',
    'settings.title': '设置',
    'settings.language': '界面语言',
    'settings.language.hint': '更改立即生效',
    'recognize.button': '识别文字',
    'placeholder.source': '文字将显示在这里...',
    'placeholder.target': '翻译...',
    'action.clear': '清除',
    'action.copy': '复制',
    'action.swap': '交换语言',
    'lang.ru': '俄语',
    'lang.en': '英语',
    'lang.zh': '中文',
    'lang.es': '西班牙语',
    'status.image.received': '已获取图像！',
    'status.recognizing': '识别中...',
    'status.recognized': '文字已识别！',
    'status.no.text': '未找到文字。',
    'status.ocr.error': 'OCR 错误：',
    'status.translate.error': '翻译错误',
    'status.copied': '已复制',
    'status.selection.cancelled': '已取消选择',
    'status.mode.rect': '模式：矩形',
    'status.mode.freehand': '模式：自由绘制',
    'status.capture.error': '捕获错误：',
  },
};

let uiLang = localStorage.getItem('lenscribe_uiLang') || 'en';

function t(key) {
  return (TRANSLATIONS[uiLang] && TRANSLATIONS[uiLang][key]) || TRANSLATIONS.en[key] || key;
}

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  uiLang = lang;
  localStorage.setItem('lenscribe_uiLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  updateModeButton();
}

const baseCanvas = document.getElementById('baseCanvas');
const annotationCanvas = document.getElementById('annotationCanvas');
const baseCtx = baseCanvas.getContext('2d', { willReadFrequently: true });
const aCtx = annotationCanvas.getContext('2d', { willReadFrequently: true });

const els = {
  btnCreate: document.getElementById('btnCreate'),
  btnMode: document.getElementById('btnMode'),
  btnSettings: document.getElementById('btnSettings'),
  btnPencil: document.getElementById('btnPencil'),
  btnBlur: document.getElementById('btnBlur'),
  btnEraser: document.getElementById('btnEraser'),
  pencilColor: document.getElementById('pencilColor'),
  strokeSize: document.getElementById('strokeSize'),
  sourceLang: document.getElementById('sourceLang'),
  targetLang: document.getElementById('targetLang'),
  btnSwapLang: document.getElementById('btnSwapLang'),
  btnClearSource: document.getElementById('btnClearSource'),
  btnClearTarget: document.getElementById('btnClearTarget'),
  btnCopySource: document.getElementById('btnCopySource'),
  btnCopyTarget: document.getElementById('btnCopyTarget'),
  clipboardInfo: document.getElementById('clipboardInfo'),
  mainView: document.getElementById('mainView'),
  settingsView: document.getElementById('settingsView'),
  uiLangSelect: document.getElementById('uiLangSelect'),
  canvasContainer: document.getElementById('canvasContainer'),
  canvasZoomWrap: document.getElementById('canvasZoomWrap'),
  canvasStack: document.getElementById('canvasStack'),
  strokePreview: document.getElementById('strokePreview'),
  resultText: document.getElementById('resultText'),
  translatedText: document.getElementById('translatedText'),
  btnRecognize: document.getElementById('btnRecognize'),
};

const LANG_OCR = { ru: 'rus', en: 'eng', zh: 'chi_sim', es: 'spa' };
const EDGE_PAD = 100;
const EXPAND_STEP = 120;
const EDGE_TRIGGER = 24;

let currentImage = new Image();
let isDrawing = false;
let lastPoint = null;
let tool = 'pencil';
let selectionMode = localStorage.getItem('lenscribe_selectionMode') || 'rect';
let zoom = Number(localStorage.getItem('lenscribe_zoom')) || 1;
let settingsOpen = false;
let recognizing = false;
let hasImage = false;
let imgX = 0;
let imgY = 0;

function setStatus(text) {
  els.clipboardInfo.textContent = text;
  els.clipboardInfo.classList.add('visible');
  clearTimeout(setStatus._t);
  setStatus._t = setTimeout(() => els.clipboardInfo.classList.remove('visible'), 3000);
}

function updateModeButton() {
  const free = selectionMode === 'freehand';
  els.btnMode.classList.toggle('active-mode', free);
  els.btnMode.title = free ? t('nav.mode.freehand') : t('nav.mode.rect');
  els.btnMode.textContent = free ? t('nav.mode.freehand') : t('nav.mode.rect');
}

function applyZoom() {
  zoom = Math.min(3, Math.max(0.5, zoom));
  els.canvasZoomWrap.style.transform = `scale(${zoom})`;
  localStorage.setItem('lenscribe_zoom', String(zoom));
}

function setTool(name) {
  tool = name;
  els.btnPencil.classList.toggle('active', name === 'pencil');
  els.btnBlur.classList.toggle('active', name === 'blur');
  els.btnEraser.classList.toggle('active', name === 'eraser');
}

function enterFullMode() {
  document.body.classList.remove('compact-mode');
  document.body.classList.add('full-mode');
  window.resizeTo(900, 600);
  if (api.resizeWindow) api.resizeWindow(900, 600, 700, 500);
}

function stayCompact() {
  document.body.classList.add('compact-mode');
  document.body.classList.remove('full-mode');
  window.resizeTo(400, 500);
  if (api.resizeWindow) api.resizeWindow(400, 500, 380, 420);
}

function syncStackSize() {
  els.canvasStack.style.width = baseCanvas.width + 'px';
  els.canvasStack.style.height = baseCanvas.height + 'px';
}

function canvasPoint(e) {
  const rect = annotationCanvas.getBoundingClientRect();
  const scaleX = annotationCanvas.width / rect.width;
  const scaleY = annotationCanvas.height / rect.height;
  return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
}

function copyCanvas(src, dx, dy, nw, nh) {
  const tmp = document.createElement('canvas');
  tmp.width = nw;
  tmp.height = nh;
  tmp.getContext('2d').drawImage(src, dx, dy);
  return tmp;
}

function expandCanvases(addLeft, addTop, addRight, addBottom) {
  if (!addLeft && !addTop && !addRight && !addBottom) return;
  const nw = baseCanvas.width + addLeft + addRight;
  const nh = baseCanvas.height + addTop + addBottom;
  const b = copyCanvas(baseCanvas, addLeft, addTop, nw, nh);
  const a = copyCanvas(annotationCanvas, addLeft, addTop, nw, nh);
  baseCanvas.width = nw;
  baseCanvas.height = nh;
  baseCtx.drawImage(b, 0, 0);
  annotationCanvas.width = nw;
  annotationCanvas.height = nh;
  aCtx.drawImage(a, 0, 0);
  imgX += addLeft;
  imgY += addTop;
  syncStackSize();
}

function ensureRoom(x, y, radius) {
  let addLeft = 0, addTop = 0, addRight = 0, addBottom = 0;
  if (x - radius < EDGE_TRIGGER) addLeft = EXPAND_STEP;
  if (y - radius < EDGE_TRIGGER) addTop = EXPAND_STEP;
  if (x + radius > baseCanvas.width - EDGE_TRIGGER) addRight = EXPAND_STEP;
  if (y + radius > baseCanvas.height - EDGE_TRIGGER) addBottom = EXPAND_STEP;
  if (addLeft || addTop || addRight || addBottom) {
    expandCanvases(addLeft, addTop, addRight, addBottom);
    if (lastPoint) {
      lastPoint.x += addLeft;
      lastPoint.y += addTop;
    }
    return { x: x + addLeft, y: y + addTop };
  }
  return { x, y };
}

function compositeLayers() {
  const out = document.createElement('canvas');
  out.width = baseCanvas.width;
  out.height = baseCanvas.height;
  const ctx = out.getContext('2d');
  ctx.drawImage(baseCanvas, 0, 0);
  ctx.drawImage(annotationCanvas, 0, 0);
  return out;
}

function trimCanvas(src) {
  const ctx = src.getContext('2d');
  const { width, height } = src;
  if (!width || !height) return src;
  const { data } = ctx.getImageData(0, 0, width, height);
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 0) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return src;
  const tw = maxX - minX + 1;
  const th = maxY - minY + 1;
  const out = document.createElement('canvas');
  out.width = tw;
  out.height = th;
  out.getContext('2d').drawImage(src, minX, minY, tw, th, 0, 0, tw, th);
  return out;
}

function exportImage() {
  return trimCanvas(compositeLayers()).toDataURL('image/png');
}

async function copyComposite() {
  if (!hasImage) return;
  await api.copyImageToClipboard(exportImage());
}

function strokeSizeValue() {
  return parseInt(els.strokeSize.value, 10) || 5;
}

function paintPencil(from, to) {
  aCtx.save();
  aCtx.globalCompositeOperation = 'source-over';
  aCtx.filter = 'none';
  aCtx.strokeStyle = els.pencilColor.value;
  aCtx.lineWidth = strokeSizeValue();
  aCtx.lineCap = 'round';
  aCtx.lineJoin = 'round';
  aCtx.beginPath();
  aCtx.moveTo(from.x, from.y);
  aCtx.lineTo(to.x, to.y);
  aCtx.stroke();
  aCtx.restore();
}

function paintEraser(from, to) {
  aCtx.save();
  aCtx.globalCompositeOperation = 'destination-out';
  aCtx.filter = 'none';
  aCtx.strokeStyle = '#000';
  aCtx.lineWidth = Math.max(8, strokeSizeValue() * 2);
  aCtx.lineCap = 'round';
  aCtx.lineJoin = 'round';
  aCtx.beginPath();
  aCtx.moveTo(from.x, from.y);
  aCtx.lineTo(to.x, to.y);
  aCtx.stroke();
  aCtx.restore();
}

function paintBlurDot(x, y) {
  const r = Math.max(8, strokeSizeValue() * 2);
  const pad = 12;
  const sx = Math.max(0, Math.floor(x - r - pad));
  const sy = Math.max(0, Math.floor(y - r - pad));
  const sw = Math.min(baseCanvas.width - sx, Math.ceil((r + pad) * 2));
  const sh = Math.min(baseCanvas.height - sy, Math.ceil((r + pad) * 2));
  if (sw <= 0 || sh <= 0) return;

  const tmp = document.createElement('canvas');
  tmp.width = sw;
  tmp.height = sh;
  const tctx = tmp.getContext('2d');
  tctx.filter = 'blur(5px)';
  tctx.drawImage(baseCanvas, sx, sy, sw, sh, 0, 0, sw, sh);

  aCtx.save();
  aCtx.globalCompositeOperation = 'source-over';
  aCtx.beginPath();
  aCtx.arc(x, y, r, 0, Math.PI * 2);
  aCtx.clip();
  aCtx.globalAlpha = 0.85;
  aCtx.drawImage(tmp, sx, sy);
  aCtx.restore();
}

function interpolate(from, to, cb) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy);
  const step = Math.max(2, strokeSizeValue() / 2);
  if (dist < step) {
    cb(to.x, to.y);
    return;
  }
  const n = Math.ceil(dist / step);
  for (let i = 1; i <= n; i++) {
    cb(from.x + (dx * i) / n, from.y + (dy * i) / n);
  }
}

function drawOnCanvas(imageDataUrl) {
  return new Promise((resolve, reject) => {
    currentImage.onload = () => {
      const imgW = currentImage.width;
      const imgH = currentImage.height;
      imgX = EDGE_PAD;
      imgY = EDGE_PAD;
      const w = imgW + EDGE_PAD * 2;
      const h = imgH + EDGE_PAD * 2;
      baseCanvas.width = w;
      baseCanvas.height = h;
      annotationCanvas.width = w;
      annotationCanvas.height = h;
      baseCtx.clearRect(0, 0, w, h);
      aCtx.clearRect(0, 0, w, h);
      baseCtx.drawImage(currentImage, imgX, imgY);
      hasImage = true;
      syncStackSize();
      copyComposite().then(() => {
        setStatus(t('status.image.received'));
        recognizeText();
      });
      resolve();
    };
    currentImage.onerror = reject;
    currentImage.src = imageDataUrl;
  });
}

async function recognizeText() {
  if (!hasImage || recognizing) return;
  recognizing = true;
  setStatus(t('status.recognizing'));

  try {
    const dataUrl = exportImage();
    const src = els.sourceLang.value;
    const tessLang = LANG_OCR[src] || 'eng';
    const langs = tessLang === 'eng' ? 'eng+rus' : `${tessLang}+eng`;

    const Tesseract = await import(
      'https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.esm.min.js'
    ).then((m) => m.default || m);

    const result = await Tesseract.recognize(dataUrl, langs);
    const text = (result?.data?.text || '').trim();

    if (text) {
      els.resultText.value = text;
      setStatus(t('status.recognized'));
      detectAndSetSourceLang(text);
      translateText();
    } else {
      setStatus(t('status.no.text'));
    }
  } catch (e) {
    console.error(e);
    setStatus(t('status.ocr.error') + (e.message || e));
  } finally {
    recognizing = false;
  }
}

function detectAndSetSourceLang(text) {
  const lang = detectLang(text);
  if (lang && els.sourceLang.value !== lang) {
    els.sourceLang.value = lang;
    return true;
  }
  return false;
}

function detectLang(text) {
  if (/[\u4e00-\u9fff]/.test(text)) return 'zh';
  if (/[\u0400-\u04FF]/.test(text)) return 'ru';
  if (/[áéíóúñü¿¡]/i.test(text)) return 'es';
  return 'en';
}

async function translateText() {
  const text = els.resultText.value.trim();
  if (!text) {
    els.translatedText.value = '';
    return;
  }

  const sl = els.sourceLang.value;
  const tl = els.targetLang.value;
  if (sl === tl) {
    els.translatedText.value = text;
    return;
  }

  const url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=` +
    encodeURIComponent(text);

  try {
    const res = await fetch(url);
    const data = await res.json();
    const translated = (data[0] || []).map((row) => row[0]).join('');
    els.translatedText.value = translated;
  } catch (e) {
    setStatus(t('status.translate.error'));
  }
}

function cropImage(dataUrl, selection) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const mode = selection.mode || 'rect';
      const sx = Math.round(selection.x);
      const sy = Math.round(selection.y);
      const sw = Math.round(selection.width);
      const sh = Math.round(selection.height);

      const out = document.createElement('canvas');
      out.width = Math.max(1, sw);
      out.height = Math.max(1, sh);
      const octx = out.getContext('2d');

      if (mode === 'freehand' && Array.isArray(selection.points) && selection.points.length > 2) {
        octx.save();
        octx.beginPath();
        selection.points.forEach((p, i) => {
          const px = p.x - sx;
          const py = p.y - sy;
          if (i === 0) octx.moveTo(px, py);
          else octx.lineTo(px, py);
        });
        octx.closePath();
        octx.clip();
        octx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
        octx.restore();
      } else {
        octx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
      }

      resolve(out.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function toggleSettings() {
  settingsOpen = !settingsOpen;
  els.settingsView.hidden = !settingsOpen;
  els.mainView.hidden = settingsOpen;
  els.btnSettings.classList.toggle('active-mode', settingsOpen);
  document.body.classList.toggle('settings-open', settingsOpen);
}

els.resultText.addEventListener('input', () => {
  detectAndSetSourceLang(els.resultText.value);
  clearTimeout(translateText._t);
  translateText._t = setTimeout(translateText, 400);
});

els.sourceLang.addEventListener('change', translateText);
els.targetLang.addEventListener('change', translateText);

annotationCanvas.addEventListener('mousedown', (e) => {
  if (!hasImage) return;
  isDrawing = true;
  let p = canvasPoint(e);
  p = ensureRoom(p.x, p.y, strokeSizeValue() * 2);
  lastPoint = p;
  if (tool === 'blur') paintBlurDot(p.x, p.y);
  else if (tool === 'eraser') paintEraser(p, p);
  else paintPencil(p, p);
});

annotationCanvas.addEventListener('mousemove', (e) => {
  if (!isDrawing || !hasImage) return;
  let p = canvasPoint(e);
  p = ensureRoom(p.x, p.y, strokeSizeValue() * 2);
  const from = lastPoint || p;
  if (tool === 'blur') interpolate(from, p, paintBlurDot);
  else if (tool === 'eraser') paintEraser(from, p);
  else paintPencil(from, p);
  lastPoint = p;
});

function endStroke() {
  if (!isDrawing) return;
  isDrawing = false;
  lastPoint = null;
  copyComposite();
}

annotationCanvas.addEventListener('mouseup', endStroke);
annotationCanvas.addEventListener('mouseleave', endStroke);

els.canvasContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  zoom = Math.round((zoom + delta) * 10) / 10;
  applyZoom();
}, { passive: false });

els.strokeSize.addEventListener('input', () => {
  let actualSize = strokeSizeValue();
  if (tool === 'eraser' || tool === 'blur') {
    actualSize *= 2;
  }
  const size = actualSize * zoom;
  els.strokePreview.style.width = size + 'px';
  els.strokePreview.style.height = size + 'px';
  els.strokePreview.style.display = 'block';

  clearTimeout(els.strokePreview._t);
  els.strokePreview._t = setTimeout(() => {
    els.strokePreview.style.display = 'none';
  }, 600);
});

els.btnPencil.addEventListener('click', () => setTool('pencil'));
els.btnBlur.addEventListener('click', () => setTool('blur'));
els.btnEraser.addEventListener('click', () => setTool('eraser'));

els.pencilColor.addEventListener('input', () => setTool('pencil'));

els.btnCreate.addEventListener('click', () => {
  if (settingsOpen) toggleSettings();
  api.startSelection(selectionMode, uiLang);
});

els.btnMode.addEventListener('click', () => {
  selectionMode = selectionMode === 'rect' ? 'freehand' : 'rect';
  localStorage.setItem('lenscribe_selectionMode', selectionMode);
  updateModeButton();
  setStatus(t(selectionMode === 'freehand' ? 'status.mode.freehand' : 'status.mode.rect'));
});

els.btnSettings.addEventListener('click', toggleSettings);

els.uiLangSelect.addEventListener('change', () => {
  applyLanguage(els.uiLangSelect.value);
});

api.onSelectionDone(async (selection) => {
  enterFullMode();

  try {
    const fullImage = selection.image || (await api.captureScreen());
    const cropped = await cropImage(fullImage, selection);
    await drawOnCanvas(cropped);
  } catch (e) {
    console.error(e);
    setStatus(t('status.capture.error') + e.message);
  }
});

api.onSelectionCancelled(() => {
  if (!hasImage) stayCompact();
  setStatus(t('status.selection.cancelled'));
});

els.btnSwapLang.addEventListener('click', () => {
  const src = els.sourceLang.value;
  els.sourceLang.value = els.targetLang.value;
  els.targetLang.value = src;
  const tmp = els.resultText.value;
  els.resultText.value = els.translatedText.value;
  els.translatedText.value = tmp;
});

els.btnClearSource.addEventListener('click', () => {
  els.resultText.value = '';
  els.translatedText.value = '';
});
els.btnClearTarget.addEventListener('click', () => {
  els.translatedText.value = '';
});
els.btnCopySource.addEventListener('click', () => {
  navigator.clipboard.writeText(els.resultText.value);
  setStatus(t('status.copied'));
});
els.btnCopyTarget.addEventListener('click', () => {
  navigator.clipboard.writeText(els.translatedText.value);
  setStatus(t('status.copied'));
});

els.btnRecognize.addEventListener('click', recognizeText);

applyLanguage(uiLang);
els.uiLangSelect.value = uiLang;
applyZoom();