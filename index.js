const { app, BrowserWindow, ipcMain, screen, clipboard, nativeImage } = require('electron');
const path = require('path');
const screenshot = require('screenshot-desktop');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    minWidth: 380,
    minHeight: 420,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    frame: true,
    title: 'Lenscribe',
  });

  mainWindow.setMenu(null);
  mainWindow.loadFile('index.html');
}

function showMainWindow() {
  if (!mainWindow) return;
  if (!mainWindow.isVisible()) mainWindow.show();
  mainWindow.focus();
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

let overlayWindow = null;

ipcMain.handle('START_SELECTION', async (_event, payload = {}) => {
  if (overlayWindow) return;
  if (mainWindow) mainWindow.hide();

  const mode = payload.mode === 'freehand' ? 'freehand' : 'rect';
  const lang = typeof payload.lang === 'string' ? payload.lang : 'en';

  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height, x, y } = primaryDisplay.bounds;

  overlayWindow = new BrowserWindow({
    width, height, x, y, transparent: true, frame: false,
    alwaysOnTop: true, skipTaskbar: true, focusable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  overlayWindow.loadFile('overlay.html', { query: { mode, lang } });
});

ipcMain.on('SELECTION_DONE', async (_event, rect) => {
  if (overlayWindow) {
    overlayWindow.close();
    overlayWindow = null;
  }

  let image = null;
  try {
    const imgBuffer = await screenshot({ format: 'png' });
    image = `data:image/png;base64,${imgBuffer.toString('base64')}`;
  } catch (err) {
    console.error(err);
  }

  showMainWindow();
  mainWindow.webContents.send('PERFORM_CROP', { ...rect, image });
});

ipcMain.on('SELECTION_CANCELLED', () => {
  if (overlayWindow) {
    overlayWindow.close();
    overlayWindow = null;
  }
  showMainWindow();
  mainWindow.webContents.send('CAPTURE_CANCELLED');
});

ipcMain.handle('RESIZE_WINDOW', (_event, payload) => {
  if (!mainWindow || !payload) return;
  const { width, height, minWidth, minHeight } = payload;
  if (minWidth && minHeight) {
    mainWindow.setMinimumSize(minWidth, minHeight);
  }
  if (width && height) {
    mainWindow.setSize(width, height);
  }
});

ipcMain.handle('capture-screen', async () => {
  try {
    const imgBuffer = await screenshot({ format: 'png' });
    return `data:image/png;base64,${imgBuffer.toString('base64')}`;
  } catch (err) {
    throw new Error('Ошибка захвата: ' + err.message);
  }
});

ipcMain.handle('COPY_IMAGE_TO_CLIPBOARD', async (event, imageBase64) => {
  try {
    const image = nativeImage.createFromDataURL(imageBase64);
    clipboard.writeImage(image);
    return { success: true };
  } catch (err) {
    throw new Error('Не удалось скопировать изображение в буфер обмена.');
  }
});
