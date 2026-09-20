const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('lenscribeAPI', {
  captureScreen: () => ipcRenderer.invoke('capture-screen'),
  startSelection: (mode, lang) =>
    ipcRenderer.invoke('START_SELECTION', {
      mode: mode || 'rect',
      lang: lang || 'en',
    }),
  onSelectionDone: (callback) =>
    ipcRenderer.on('PERFORM_CROP', (event, rect) => callback(rect)),
  onSelectionCancelled: (callback) =>
    ipcRenderer.on('CAPTURE_CANCELLED', () => callback()),
  sendSelectionRect: (rect) => ipcRenderer.send('SELECTION_DONE', rect),
  cancelSelection: () => ipcRenderer.send('SELECTION_CANCELLED'),
  copyImageToClipboard: (imageBase64) =>
    ipcRenderer.invoke('COPY_IMAGE_TO_CLIPBOARD', imageBase64),
  resizeWindow: (width, height, minWidth, minHeight) =>
    ipcRenderer.invoke('RESIZE_WINDOW', { width, height, minWidth, minHeight }),
});