const TabGroup = require('electron-tabs')
const fs = require('fs')
const { shell } = require('electron')
const ipc = require('electron').ipcRenderer
const Store = require('electron-store')

let tabGroup = new TabGroup()
const pinnedTabs = [
	{
		name: 'Login',
		url: 'https://github.com/login',
	},
]

const store = new Store()
const storedTabs = store.get('tabs')

if (!storedTabs) {
	store.set('tabs', pinnedTabs)
}

function truncate(str, n = 30) {
	return str.length > n ? str.substr(0, n - 1) + '...' : str
}

function updateAppMenu(tabGroup) {
	let tabTitles = []
	let allTabs = tabGroup.getTabs()
	allTabs.sort((a, b) => (a.id > b.id ? 1 : -1))

	allTabs.map(tab => {
		tabTitles.push(truncate(tab.title))
	})

	ipc.send('rebuild-menu', tabTitles)
}

function processNav(tab, event) {
	const webview = tab.webview

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
		} else if (
			new URL(tabDetail.webviewAttributes.src).pathname ===
			new URL(event.url).pathname
		) {
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
}

function savedTabState(tabGroup) {
	let pinnedTabs = []

	let allTabs = tabGroup.getTabs()
	allTabs.sort((a, b) => (a.id > b.id ? 1 : -1))

	allTabs.map(tab => {
		pinnedTabs.push({
			name: tab.title,
			url: tab.webviewAttributes.src,
			closable: tab.closable,
		})
	})

	store.set('tabs', pinnedTabs)
}

function loadStoredTabs(reload = false) {
	const storedTabs = store.get('tabs')

	if (reload) {
		let allTabs = tabGroup.getTabs()

		allTabs.map(tab => {
			tab.close(true)
		})
	}

	storedTabs.map(tab => {
		tabGroup.addTab({
			title: tab.name,
			src: tab.url,
			visible: true,
			active: false,
			closable: tab.closable,
			webviewAttributes: {
				partition: 'persist:github',
			},
			ready: function (tab) {
				styleTab(tab)
			},
		})
	})
}

function updateTabDetails(tab) {
	let originalEl = tab.tab.getElementsByClassName('etabs-tab-title')[0]
	let newEl = document.createElement('a')
	newEl.innerHTML = originalEl.innerHTML
	newEl.textContent = tab.title
	newEl.className = originalEl.className
	newEl.href =
		tab.webviewAttributes.src + (tab.closable ? '#unpinned' : '#pinned')
	originalEl.parentNode.replaceChild(newEl, originalEl)

	tab.tab
		.getElementsByClassName('etabs-tab-title')[0]
		.addEventListener('click', function (event) {
			event.preventDefault()
		})
}

function styleTab(tab) {
	updateTabDetails(tab)

	const webview = tab.webview

	webview.addEventListener('will-navigate', function (event) {
		processNav(tab, event)
	})

	webview.addEventListener('new-window', function (event) {
		processNav(tab, event)
	})

	webview.addEventListener('did-finish-load', function (event) {
		if (tab.webviewAttributes.src === storedTabs[0].url) {
			tab.activate()
		}

		if (
			event.target.src === 'https://github.com/login' ||
			event.target.src === 'https://github.com/sessions/two-factor'
		) {
			document.getElementsByClassName('etabs-tabgroup')[0].style.display =
				'none'
			document.getElementById('goBack').style.display = 'none'
			document.getElementById('goForward').style.display = 'none'
		} else {
			document.getElementsByClassName('etabs-tabgroup')[0].style.display =
				'block'
			document.getElementById('goBack').style.display = 'block'
			document.getElementById('goForward').style.display = 'block'
		}

		updateAppMenu(tabGroup)
	})

	webview.addEventListener('did-stop-loading', function () {
		webview.setZoomLevel(0)
		document.getElementById('goBack').classList.remove('disabled')
		document.getElementById('goForward').classList.remove('disabled')

		tab.setTitle(webview.getTitle())

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

		updateTabDetails(tab)
	})

	fs.readFile(__dirname + '/main.css', 'utf-8', function (error, data) {
		if (!error) {
			webview.addEventListener('dom-ready', function () {
				webview.insertCSS(data)
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

	tab.on('title-changed', tab => {
		updateAppMenu(tabGroup)
	})

	tab.on('close', tab => {
		updateAppMenu(tabGroup)
	})
})

loadStoredTabs()

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

ipc.on('pintab', function (ev, data) {
	const thisTab = data.replace('#unpinned', '')
	tabGroup.eachTab(tab => {
		if (tab.webviewAttributes.src === thisTab) {
			tab.closable = false
			tab.tab.getElementsByClassName('etabs-tab-buttons')[0].style.display = "none"
			tab.tab.getElementsByClassName('etabs-tab-title')[0].href = tab.tab.getElementsByClassName('etabs-tab-title')[0].href.replace("#unpinned", "#pinned")
		}
	})
	savedTabState(tabGroup)
})

ipc.on('unpintab', function (ev, data) {
	const thisTab = data.replace('#pinned', '')
	tabGroup.eachTab(tab => {
		if (tab.webviewAttributes.src === thisTab) {
			tab.closable = true
			tab.tab.getElementsByClassName('etabs-tab-buttons')[0].style.display = "block"
			tab.tab.getElementsByClassName('etabs-tab-title')[0].href = tab.tab.getElementsByClassName('etabs-tab-title')[0].href.replace("#pinned", "#unpinned")

			if (!tab.tab.getElementsByClassName('etabs-tab-buttons')[0].innerHTML) {
				tab.tab.getElementsByClassName('etabs-tab-buttons')[0].innerHTML = `<button class="etabs-tab-button-close">×</button>`
			}
		}
	})
	savedTabState(tabGroup)
})
