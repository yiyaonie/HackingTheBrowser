let changeStyle = document.getElementById("style");
let celebrate = document.getElementById("celebrate");
let song = document.getElementById("song");

function play(){
      var audio = document.getElementById("audio");
      audio.play();
}
song.onclick = play;

document.getElementById('style').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.storage.local.set({ action: 'style' });
        console.log("send style");
    });
});

document.getElementById('celebrate').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.storage.local.set({ action: 'celebrate' });
        console.log("send celebrate");
    });
});
