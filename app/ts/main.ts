const { app, BrowserWindow } = require('electron')

function createWindow () {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('app/index.html')
  win.webContents.openDevTools()
  BrowserWindow({icon:'https://media.tenor.com/images/5eaf8c1efe1469db56d9e694d5cee765/tenor.png'});
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})