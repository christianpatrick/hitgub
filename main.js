// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu')
const menu = require('./menu.js')
const { autoUpdater } = require('electron-updater')

let mainWindow

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
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
	mainWindow.webContents.openDevTools()
}

contextMenu({
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Rainbow',
			// Only show it when right-clicking images
			visible: params.mediaType === 'image',
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
})
