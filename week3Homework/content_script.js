chrome.runtime.onMessage.addListener(function(message) {
  /// message == "whatever"
  if(message == "style"){
    console.log("change style");
    $("h1").text("新年快乐 Happy New Year!")
    $("h1").css('color','red');

    $("h2").text("猪年快乐 🐷🎎")
    $("h2").css('color','red');

    // $("body").css('background-color','red');
  }
  if(message == "celebrate"){
    console.log("celebrate");
    var imgURL = chrome.extension.getURL("images/celebrate1.gif");
    var imgURL2 = chrome.extension.getURL("images/celebrate2.gif");

    $("<img alt='celebrate' src = 'chrome-extension://mbnknpamglcaepfcgcjklcoaalbgmnil/images/celebrate1.gif'>").appendTo("body").addClass("celebrate1");
    document.getElementsByClassName("celebrate1").src = imgURL;

    $("<img alt='celebrate' src = 'chrome-extension://mbnknpamglcaepfcgcjklcoaalbgmnil/images/celebrate2.gif'>").appendTo("body").addClass("celebrate2");
    document.getElementsByClassName("celebrate2").src = imgURL2;

    $(".celebrate1").css({'position':'fixed','bottom':'0','left':'0','height':'200px','width':'auto'});
    $(".celebrate2").css({'position':'fixed','bottom':'0','right':'0','height':'200px','width':'auto'});
  }
});
