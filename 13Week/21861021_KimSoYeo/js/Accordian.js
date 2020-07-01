var htmlEl = document.documentElement,
    accordianEl = document.querySelector("#accordion"),
    viewItemEls = accordianEl.querySelectorAll(".view-item"),
    btnCloseEls = accordianEl.querySelectorAll(".view-item > .btn-close"),
    _cuId = null,
    _exId = null,
    _timer;

viewItemEls = Array.prototype.slice.call(viewItemEls);
function onResize() {
    clearInterval(_timer);
    htmlEl.classList.add("on-resize");
    _timer = setTimeout(function() {
        htmlEl.classList.remove("on-resize");
    }, 1);
}
function onClickViewItem(e) {
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    if(!el.classList.contains("selected")) {
        _cuId = index;
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        el.classList.add("selected");
        _exId = _cuId;
    }
}
function onClickClose(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = e.currentTarget, itemEl = el.parentElement;
    if(itemEl.classList.contains("selected")) {
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        _cuId = null;
        _exId = _cuId;
    }
}
function addEvent() {
    window.addEventListener("resize", onResize);
    for(var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener("click", onClickViewItem);
    }
    for(var j = 0; j < btnCloseEls.length; j++) {
        btnCloseEls[j].addEventListener("click", onClickClose);
    }
}
function init() {
    htmlEl.classList.remove("preload");
    addEvent();
}
init();