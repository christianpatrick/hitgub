// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu')
const menu = require('./menu.js')
const { autoUpdater } = require('electron-updater')
const windowStateKeeper = require('electron-window-state')

let mainWindow, mainWindowState

try {
	require('electron-reloader')(module)
} catch (_) {}

function createWindow() {
	mainWindowState = windowStateKeeper({
		defaultWidth: 1200,
		defaultHeight: 700,
	})

	// Create the browser window.
	mainWindow = new BrowserWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		width: mainWindowState.width,
		height: mainWindowState.height,
		minWidth: 1200,
		minHeight: 700,
		titleBarStyle: 'hidden',
		trafficLightPosition: { x: 15, y: 35 },
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			webviewTag: true,
			affinity: 'githubProcess',
		},
	})

	// and load the index.html of the app.
	mainWindow.loadFile('index.html')

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()
}

contextMenu({
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Unpin Tab',
			visible:
				params.linkURL.length && params.linkURL.includes('#pinned'),
			click: () => {
				browserWindow.webContents.send('unpintab', params.linkURL)
			},
		},
		{
			label: 'Pin Tab',
			visible:
				params.linkURL.length && params.linkURL.includes('#unpinned'),
			click: () => {
				browserWindow.webContents.send('pintab', params.linkURL)
			},
		},
	],
})

app.whenReady().then(() => {
	menu.createMenu()
	createWindow()
	autoUpdater.checkForUpdatesAndNotify()

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})

	ipcMain.on('rebuild-menu', (event, titles) => {
		menu.createMenu(titles)
	})

	mainWindowState.manage(mainWindow)
})
