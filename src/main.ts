import { app, BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path'; 

let window : BrowserWindow | null = null;

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 800
  });

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Emitted when the window is closed.
  window.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null
  })
});

if (window) {
  app.relaunch();
}