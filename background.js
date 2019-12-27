/**
 * Listens for the app launching then creates the window
 */
var ba = chrome.browserAction;

// Function to open the chrome extension into new chrome window
var windowNotOpenTitle = 'Open popup window';
var windowIsOpenTitle = 'Popup window is already open. Click to focus popup.';
var popupWindowId = false; //popupWindowId can be true, false, or the popup's window Id.
ba.onClicked.addListener(function () {
    let width= 1100;
    let height= 650;
    if(popupWindowId === false){
        popupWindowId = true; //Prevent user pressing the button multiple times.
        ba.setTitle({title:windowIsOpenTitle});
        chrome.windows.create({ 
            'url': 'https://github.com/', 
            'type': 'panel',
            'width': width,
            'height': height,
            'left': (screen.width/2) - (width/2),
            'top': (screen.height/2) - (height/2),
            'focused': true
        },function(win){
            popupWindowId = win.id;
        });
        return;
    }else if(typeof popupWindowId === 'number'){
        //The window is open, and the user clicked the button., Focus the window.
        chrome.windows.update(popupWindowId,{focused:true});
    }
});
