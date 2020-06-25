var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    
    _duration = 300,
    _addDuration = 200,

    _isAni = false,

    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(_isAni) return;
    if(!parentEl.classList.contains("selected")) {
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        listItemEls[_cuId].classList.add("selected");
        gallerySlide();
        _exId = _cuId;
    }
}
function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition"); 
}

function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {
    var duration = _duration + Math.abs(_cuId - _exId) * _addDuration;
    _isAni = true;
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.030, 0.515, 0.955)";
}
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
}
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
init();