const electron = require('electron')
const url = require('url')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let janela

function createWindow () {
  
  janela = new BrowserWindow({width: 800, height: 600})
  janela.setMenu(null);

  //janela.loadURL("http://www.schoolofnet.com")
  janela.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file'
  }));

  //janela.webContents.openDevTools();
 
  janela.on('before-quit', function () {
    console.log('Bye Bye..');
  })

  janela.on('closed', function () {
    janela = null
  })

  //dialog.showMessageBox(janela, {
  //  type: 'none',
  //  message: 'Hello from dialog',
  //  title: 'SON',
  //  buttons: []
  //  //options
  //})

  dialog.showOpenDialog(janela, {
    title: 'Select a new file',
    buttonLabel: 'SON'
  })

  dialog.showErrorBox('Title error', 'Content')

  dialog.showSaveDialog(janela, {
    title: 'Save Dialog',
    buttonLabel: 'Save Here'
  })

  /* let menuTemplate = [
    {
      label: 'Menu 1',
    },
    {
      label: 'Menu 2',
      submenu: [
        {
          label: 'Submenu 1',
          click: function(item, janela, event){
            dialog.showMessageBox(janela,{
              title: 'Other Menu',
              message: 'HIII SUB MENU',
              buttons: []
            })
          }
        }
      ]
    }
  ];

  const menu1 = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu1); */

  const menu = new Menu();

  menu.append(new MenuItem({
    label: 'Menu 1'
  }));
  menu.append(new MenuItem({
    label: 'Menu 2'
  }));

  Menu.setApplicationMenu(menu);

}

app.on('ready', createWindow)