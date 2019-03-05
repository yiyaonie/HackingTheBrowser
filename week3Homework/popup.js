let changeStyle = document.getElementById("style");
let celebrate = document.getElementById("celebrate");

function play(){
      var audio = document.getElementById("audio");
      audio.play();
}

document.getElementById('style').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
      console.log("click style popup")
      var tab = activeTabs[0];
      chrome.tabs.sendMessage(tab.id, "style");
    });
});

document.getElementById('celebrate').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
      console.log("click celebrate popup");
      var tab = activeTabs[0];
      chrome.tabs.sendMessage(tab.id, "celebrate");
    });
    play();
});
