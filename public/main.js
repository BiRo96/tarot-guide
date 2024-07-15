const { app } = require('electron')
const { BrowserWindow } = require('electron/main');

require('@electron/remote/main').initialize()

function createWindow() {
    const win = new BrowserWindow({
        width: 1725,
        height: 800,
        webPreferences: {
            enableRemoteModule: true
        },
        autoHideMenuBar: true, 
    })

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

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