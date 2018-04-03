const cssFile = {
  file: './../css/main.css'
}
const jsFile = {
  file: 'main.js'
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(jsFile)
  chrome.tabs.insertCSS(cssFile)
});
