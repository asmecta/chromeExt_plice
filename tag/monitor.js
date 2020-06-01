var e = document.getElementById('xssq') || '';
var a = document.getElementById('xsyy') || '';
var CONTEXT_PATH = "\/wffz\/";
if (e) {
    setInterval(function () {
        if (Number(e.innerText) + Number(a.innerText) > 0) {
            sendMessageToBackground(Number(e.innerText));
            pDing();
        }
    }, 1000 * 10)
}

function sendMessageToBackground(message) {
    chrome.runtime.sendMessage({greeting: message}, function (response) {
        console.log(response)
    });
}

function pDing() {
    try {
        var dingEle = document.getElementById('ding');
        dingEle.src = CONTEXT_PATH + "static/music/ding.mp3";
        dingEle.load();
        dingEle.pause();
        dingEle.play();
    } catch (e) {
        console.log(e)
    }
}