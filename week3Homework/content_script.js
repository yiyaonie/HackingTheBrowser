chrome.storage.onChanged.addListener(function(changes) {
    var action = changes['action'];
    if(action.newValue === 'style') {
        // YOUR CODE HERE
        console.log("change style");
        let allH = document.querySelectorAll("h1");
        allH.appendChild("Happy New Year!");
        allH.style.color = "red";

        let allH2 = document.querySelectorAll("h2");
        allH2.appendChild("🐷🎎");
        allH2.style.color = "red";
    }

    if(action.newValue === 'celebrate') {
        // YOUR CODE HERE
        console.log("celebrate");
        var celebrate1 = document.createElement("img");
        celebrate1.src = "images/celebrate1.gif";

        var celebrate2 = document.createElement("img");
        celebrate2.src = "images/celebrate2.gif";
    }

});
