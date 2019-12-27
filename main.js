const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = require(electron);

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    // file: \\dirname\mainWindow.html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true,
    }));
});