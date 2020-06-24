var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-item > img"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    _isAni = false,
    _galleryW = 500,
    _cuId = 0,
    _exId = null,
    _max = null;
    _duration = 400,
    _addDuration = 200,
    
    cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    btnListEl = listEl.querySelectorAll("a");

function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
}

// 블럭 단위로 기능 분리.
// 이벤트 핸들러 기능.
function onClickListItem(e) {
    e.preventDefault();
    // if(_isAni) return;
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl); // 부모 요소를 찾아옴
    // console.log(index); // 이미지 순서 넘버
    if(!parentEl.classList.contains("selected")) {
        //비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        // parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        _exId = _cuId
        // 실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
    }
}
//------------------
// 이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
    gallerySlide(true);
}
function gallerySlide(static) {
    var left = _galleryW * _cuId * -1,
        duration = _duration + _addDuration * Math.abs(_cuId - _exId),
        bool = (static) ? static : false;
    viewContainerEl.style.transform = "translate3d(" + left + "px, 0, 0)";
    if(!bool) {
        _isAni = true;
        viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        _exId = _cuId;
    }else{
        viewContainerEl.style.removeProperty("transition");
        _isAni = false;
    }
}
//------------------
// 이벤트가 바인딩되는 기능들.
function addEvent() {
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
// 초기화 기능.
function init() {
    _max = viewItemEls.length;
    _exId = _cuId;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    addEvent();
    galleryResize();
}
init();

// 마우스커서이벤트
btnListEl = Array.prototype.slice.call(btnListEl);
function onMouseMove(e){
    var posX = e.clientX, posY = e.clientY;

    gsap.to(cursorDotEl,{
        "top": posY,
        "left": posX,
        "duration": 0.5,
        "ease" : "sine.out"
    });
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.3, ease: "sine.out"});
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25, ease: "sine.out"});
}
function onMouseEnterList() {
    console.log("enter");
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList() {
    console.log("leave");
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}
window.addEventListener("mousemove", onMouseMove);
for(var i = 0; i < btnListEl.length; i++){
    btnListEl[i].addEventListener("mouseenter", onMouseEnterList);
    btnListEl[i].addEventListener("mouseleave", onMouseLeaveList);
}