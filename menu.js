const { app, Menu, shell, clipboard } = require('electron')

var PACKAGE = require('./package.json')
var github = PACKAGE.github
var author = PACKAGE.author

//include specific js files
// const prefsJS = require('./prefs.js')

module.exports = {
	createMenu: function createMenu() {
		const template = [
			{
				label: 'Edit',
				submenu: [
					{
						label: 'Undo',
						accelerator: 'CmdOrCtrl+Z',
						role: 'undo',
					},
					{
						label: 'Redo',
						accelerator: 'Shift+CmdOrCtrl+Z',
						role: 'redo',
					},
					{
						type: 'separator',
					},
					{
						label: 'Cut',
						accelerator: 'CmdOrCtrl+X',
						role: 'cut',
					},
					{
						label: 'Copy',
						accelerator: 'CmdOrCtrl+C',
						role: 'copy',
					},
					{
						label: 'Paste',
						accelerator: 'CmdOrCtrl+V',
						role: 'paste',
					},
					{
						label: 'Select All',
						accelerator: 'CmdOrCtrl+A',
						role: 'selectall',
					},
				],
			},
			{
				label: 'View',
				submenu: [
					{
						label: 'Back',
						accelerator: 'CmdOrCtrl+Left',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.webContents.send('back')
							}
						},
					},
					{
						label: 'Forward',
						accelerator: 'CmdOrCtrl+Right',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.webContents.send('forward')
							}
						},
					},
					{
						label: 'Reload',
						accelerator: 'CmdOrCtrl+R',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.webContents.send('reload')
							}
						},
					},
					{
						label: 'Restart App',
						accelerator: 'Shift+CmdOrCtrl+R',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.reload()
							}
						},
					},
				],
			},
			{
				label: 'Window',
				role: 'window',
				submenu: [
					{
						label: 'Minimize',
						accelerator: 'CmdOrCtrl+M',
						role: 'minimize',
					},
					{
						label: 'Close',
						accelerator: 'CmdOrCtrl+W',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.webContents.send('close')
							}
						},
					},
					{
						type: 'separator',
					},
					{
						label: 'New Tab',
						accelerator: 'CmdOrCtrl+T',
						click: (item, focusedWindow) => {
							if (focusedWindow) {
								focusedWindow.webContents.send('newtab')
							}
						},
					},
					{
						type: 'separator',
					},
				],
			},
			{
				label: 'Help',
				role: 'help',
				submenu: [
					{
						label: 'Built by ' + author,
						click: () => {
							shell.openExternal('https://github.com/' + github)
						},
					},
					{
						label: 'Have an Issue?',
						click: () => {
							shell.openExternal(
								'https://github.com/' + github + '/issues'
							)
						},
					},
				],
			},
		]

		if (process.platform === 'darwin') {
			template.unshift({
				label: app.getName(),
				submenu: [
					{
						role: 'about',
					},
					// {
					// 	type: 'separator',
					// },
					// {
					// 	label: 'Preferences...',
					// 	accelerator: 'Command+,',
					// 	click: () => {
					// 		prefsJS.preferences()
					// 	},
					// },
					{
						type: 'separator',
					},
					{
						label: 'Services',
						role: 'services',
						submenu: [],
					},
					{
						type: 'separator',
					},
					{
						label: 'Hide App',
						accelerator: 'Command+H',
						role: 'hide',
					},
					{
						label: 'Hide Others',
						accelerator: 'Command+Shift+H',
						role: 'hideothers',
					},
					{
						label: 'Show All',
						role: 'unhide',
					},
					{
						type: 'separator',
					},
					{
						label: 'Quit',
						accelerator: 'Command+Q',
						click: () => {
							app.quit()
						},
					},
				],
			})
		}

		let windowMenu = template[2]

		if (process.platform === 'darwin') {
			windowMenu = template[3]
		}

		for (let tab = 1; tab < 10; tab++) {
			windowMenu.submenu.push({
				label: `Tab ${tab}`,
				accelerator: `CmdOrCtrl+${tab}`,
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						focusedWindow.webContents.send('switchtab', tab)
					}
				},
			})
		}

		if (process.platform === 'darwin') {
			windowMenu.submenu.push(
				{
					type: 'separator',
				},
				{
					label: 'Bring All to Front',
					role: 'front',
				}
			)
		}

		const menu = Menu.buildFromTemplate(template)
		Menu.setApplicationMenu(menu)
	},
}
