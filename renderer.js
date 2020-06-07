const TabGroup = require('electron-tabs')
const fs = require('fs')
const { shell } = require('electron')
const ipc = require('electron').ipcRenderer
var Mousetrap = require('mousetrap')

let tabGroup = new TabGroup()
const pinnedTabs = [
	{
		name: 'Dashboard',
		url: 'https://github.com/',
	},
	{
		name: 'Notifications',
		url: 'https://github.com/notifications',
	},
]

function styleTab(tab) {
	const webview = tab.webview

	fs.readFile(__dirname + '/main.css', 'utf-8', function (error, data) {
		if (!error) {
			webview.addEventListener('dom-ready', function () {
				webview.insertCSS(data)
			})
		}
	})

	webview.addEventListener('did-finish-load', function () {
		if (tab.webviewAttributes.src === pinnedTabs[0].url) {
			tab.activate()
		}
	})

	webview.addEventListener('did-stop-loading', function () {
		webview.setZoomLevel(0)
		document.getElementById('goBack').classList.remove('disabled')
		document.getElementById('goForward').classList.remove('disabled')

		if (tab.closable) {
			tab.setTitle(webview.getTitle())
		}

		if (!webview.canGoBack()) {
			document.getElementById('goBack').classList.add('disabled')
		}

		if (!webview.canGoForward()) {
			document.getElementById('goForward').classList.add('disabled')
		}

		tab.on('active', tab => {
			document.getElementById('goBack').classList.remove('disabled')
			document.getElementById('goForward').classList.remove('disabled')

			if (!webview.canGoBack()) {
				document.getElementById('goBack').classList.add('disabled')
			}

			if (!webview.canGoForward()) {
				document.getElementById('goForward').classList.add('disabled')
			}
		})
	})

	webview.addEventListener('will-navigate', function (event) {
		if (new URL(event.url).hostname !== 'github.com') {
			webview.stop()
			shell.openExternal(event.url)
			return
		}

		let tabExists = false
		tabGroup.getTabs().map(tabDetail => {
			if (tabDetail.webviewAttributes.src === event.url) {
				webview.stop()
				tabDetail.activate()
				tabExists = true
			}
		})

		if (tabExists) {
			return
		}

		if (
			!tab.closable &&
			new URL(tab.webviewAttributes.src).pathname !==
				new URL(event.url).pathname
		) {
			webview.stop()
			tabGroup.addTab({
				title: 'New Tab',
				src: event.url,
				visible: true,
				active: true,
				closable: true,
				webviewAttributes: {
					partition: 'persist:github',
				},
				ready: function (tab) {
					styleTab(tab)
				},
			})
		}
	})

	webview.addEventListener('new-window', function (event) {
		if (new URL(event.url).hostname !== 'github.com') {
			webview.stop()
			shell.openExternal(event.url)
			return
		}

		let tabExists = false
		tabGroup.getTabs().map(tabDetail => {
			if (tabDetail.webviewAttributes.src === event.url) {
				webview.stop()
				tabDetail.activate()
				tabExists = true
			}
		})

		if (tabExists) {
			return
		}

		if (
			!tab.closable &&
			new URL(tab.webviewAttributes.src).pathname !==
				new URL(event.url).pathname
		) {
			webview.stop()
			tabGroup.addTab({
				title: 'New Tab',
				src: event.url,
				visible: true,
				active: true,
				closable: true,
				webviewAttributes: {
					partition: 'persist:github',
				},
				ready: function (tab) {
					styleTab(tab)
				},
			})
		}
	})
}

tabGroup.on('tab-active', (tab, tabGroup) => {
	const currentView = tab.webview
	const goBack = document.getElementById('goBack')
	const goForward = document.getElementById('goForward')

	goBack.addEventListener('click', function () {
		if (tab.tab.classList.contains('active')) {
			currentView.goBack()
		}
	})

	goForward.addEventListener('click', function () {
		if (tab.tab.classList.contains('active')) {
			currentView.goForward()
		}
	})
})

pinnedTabs.map(tab => {
	tabGroup.addTab({
		title: tab.name,
		src: tab.url,
		visible: true,
		closable: false,
		webviewAttributes: {
			partition: 'persist:github',
		},
		ready: function (tab) {
			styleTab(tab)
		},
	})
})

ipc.on('reload', function (ev, data) {
	const activeTab = tabGroup.getActiveTab()
	activeTab.webview.reload()
})

ipc.on('close', function (ev, data) {
	const activeTab = tabGroup.getActiveTab()
	activeTab.close()
})

ipc.on('back', function (ev, data) {
	document.getElementById('goBack').click()
})

ipc.on('forward', function (ev, data) {
	document.getElementById('goForward').click()
})

ipc.on('switchtab', function (ev, data) {
	tabGroup.getTabs().map(tab => {
		if (tab.id === data - 1) {
			tab.activate()
		}
	})
})

ipc.on('newtab', function (ev, data) {
	const tab = tabGroup.addTab({
		title: 'New Tab',
		src: 'https://github.com/',
		visible: true,
		active: true,
		closable: true,
		webviewAttributes: {
			partition: 'persist:github',
		},
		ready: function (tab) {
			styleTab(tab)
		},
	})
})
