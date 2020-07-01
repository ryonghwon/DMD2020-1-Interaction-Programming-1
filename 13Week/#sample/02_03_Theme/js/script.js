var htmlEl = document.documentElement,
    h1SpanEl = document.querySelector("h1#title > span"),
    modeListEl = document.querySelector(".mode ul"),
    modeItemEls = modeListEl.querySelectorAll("li"),
    btnModeEls = modeListEl.querySelectorAll("li > a"),
    _mode = "light";

function onClickMode(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, type = el.getAttribute("href").replace("#", "");
    if(!parentEl.classList.contains("selected")) {
        for(var i = 0; i < modeItemEls.length; i++) {
            modeItemEls[i].classList.remove("selected");
        }
        parentEl.classList.add("selected");
        _mode = type;
        setMode();
    }
}
function setMode() {
    htmlEl.classList.remove("mode-light", "mode-dark", "mode-red", "mode-green");
    htmlEl.classList.add("mode-" + _mode);
    h1SpanEl.innerText = _mode;
}
function addEvent() {
    for(var i = 0; i < btnModeEls.length; i++) {
        btnModeEls[i].addEventListener("click", onClickMode);
    }
}
function init() {
    setMode();
    addEvent();
}
init();