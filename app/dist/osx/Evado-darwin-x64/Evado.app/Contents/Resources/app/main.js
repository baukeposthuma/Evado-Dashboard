const {app, BrowserWindow} = require('electron')

let win

function createWindow () {
	win = new BrowserWindow({width: 1200, height: 800, minHeight: 600, minWidth: 800, titleBarStyle: 'hidden-inset'})
	win.loadURL(`file://${__dirname}/index.html`)
	win.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
 		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow()
	}
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
