/**
 * Listens for the app launching then creates the window
 *
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({
        type: 'panel',
        url: "https://developer.mozilla.org/"
    }, function (newWindow) {
        // Uncomment and write code if need new custom UI
        // chrome.tabs.executeScript(newWindow.tabs[0].id, {
            // code: 'document.write("hello world");'
        // });
    });
});