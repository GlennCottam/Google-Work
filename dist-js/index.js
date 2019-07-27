// const electron = require('electron');
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var config = require('./config');
var win;
function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 600,
        transparent: true,
        darkTheme: true,
        webPreferences: {
            nodeIntergration: true
        }
    });
    // Loads URL
    win.loadFile('index.html');
    // Sets Dev Mode
    if (config.devMode == true) {
        win.webContents.openDevTools();
        win.setBounds({ width: 1800 });
    }
    // Setting Auto Hide Menu
    if (config.autoHideMenu == true) {
        win.setAutoHideMenuBar(true);
    }
    win.on('closed', function () {
        win = null;
    });
}
// Run App
app.on('ready', createWindow);
// All Windows Closed
app.on('windows-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// Window Activated
app.on('activate', function () {
    if (window === null) {
        createWindow();
    }
});
