console.log('Content Script via Browser Action background page, version 1');
// Docs for 'onClicked' are here:
// https://developer.chrome.com/extensions/browserAction#event-onClicked

chrome.browserAction.onClicked.addListener(function() {
  //console.log('Clicked the browser action!');

  // If you want to inject a CSS file, uncomment the code below
  // For more details on this method,
  // see: https://developer.chrome.com/extensions/tabs#method-insertCSS
  // chrome.tabs.insertCSS({file: 'mystyles.css'}, function() {
  //   console.log('background script inserted mystyles.css');
  // });
});
