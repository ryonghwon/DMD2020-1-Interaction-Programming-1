

// GALLERY
var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    
    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(!parentEl.classList.contains("selected")) {
        //비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        //parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        _exId = _cuId;
    }
}
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {
    //viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform 300ms ease-in-out";
}
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
init();


// CURSOR
var cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress");
btnListItemEls = Array.prototype.slice.call(btnListItemEls);
window.addEventListener("mousemove", onMouseMove);
function onMouseMove(e){
    var posX = e.clientX, posY = e.clientY;
    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    //요소에서 애니메이면을 제거.
    gsap.to(cursorDotEl, {
        "top" : posY, 
        "left" : posX,
        "duration" : 0.5,
        "ease" : "sine.out"
    })
    gsap.to(cursorBGEl, {
        "top" : posY, 
        "left" : posX,
        "duration" : 0.7,
        "ease" : "sine.out"
    })
    gsap.to(progressEl, {
        "top" : posY, 
        "left" : posX,
        "duration" : 0.25,
        "ease" : "sine.out"
    })
}
for(var i = 0 ; i < btnListItemEls.length ;i++){
    btnListItemEls[i].addEventListener("mouseenter", onMouseEnterList);
    btnListItemEls[i].addEventListener("mouseleave", onMouseLeaveList);
}
function onMouseEnterList(){
    //console.log("enter");
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList(){
    //console.log("leave");  
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}