// const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const config = require('./config');

let win;

function createWindow()
{
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
    if(config.devMode == true)
    {
        win.webContents.openDevTools();
        win.setBounds({width: 1800});
    }

    // Setting Auto Hide Menu
    if(config.autoHideMenu == true)
    {
        win.setAutoHideMenuBar(true);
    }

    win.on('closed', () =>
    {
        win = null;
    });
}


// Run App
app.on('ready', createWindow);

// All Windows Closed
app.on('windows-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

// Window Activated
app.on('activate', () => {
    if(window === null)
    {
        createWindow();
    }
});

