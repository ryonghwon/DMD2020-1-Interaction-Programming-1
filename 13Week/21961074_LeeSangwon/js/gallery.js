var galleryEl = document.querySelector("#galleryb"),
    viewEl = galleryEl.querySelector(".viewb"),
    viewContainerEl = viewEl.querySelector(".view-containerb"),
    viewItembEls = viewContainerEl.querySelectorAll(".view-itemb"),
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-itemb > img"),
    listEl = galleryEl.querySelector(".listb"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    _isAni = false,
    _galleryW = 800,
    _cuIda = 0,
    _exIda = null,
    _max = null,
    _duration = 400,
    _addDuration = 200;

btnListItemEls = Array.prototype.slice.call(btnListItemEls);
function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
}
function onClickListItem(e) {
    e.preventDefault();
    if(_isAni) return;
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(!parentEl.classList.contains("selected")) {
        _cuIda = index;
        listItemEls[_exIda].classList.remove("selected");
        parentEl.classList.add("selected");
        gallerySlide();
    }
}
function gallerySlide(static) {
    var left = _galleryW * _cuIda * -1,
        duration = _duration + _addDuration * Math.abs(_cuIda - _exIda),
        bool = (static) ? static : false;
    viewContainerEl.style.transform = "translate3d(" + left + "px, 0, 0)";
    if(!bool) {
        _isAni = true;
        viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        _exIda = _cuIda;
    }else{
        viewContainerEl.style.removeProperty("transition");
        _isAni = false;
    }
}
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItembEls[i].style.width = _galleryW + "px";
    }
    gallerySlide(true);
}
function addEvent() {
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
function init() {
    _max = viewItembEls.length;
    _exIda = _cuIda;
    addEvent();
    galleryResize();
}
init();



