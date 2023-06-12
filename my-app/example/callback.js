const url = "http://facebook.com"

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        callback(script);
    }
    document.head.append(script)
}

loadScript(url, function (script) {
    console.log("hello", script);
})