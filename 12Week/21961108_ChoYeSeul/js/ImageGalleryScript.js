var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = gallery.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),

    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

// 블럭 단위로 기능 분리.
// 이벤트 핸들러 기능.
function onClickListItem(e){
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(!parentEl.classList.contains("selected")) {
        // 비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        // parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();

        _exId = _cuId;
    }
}

//--------
// 이미지 갤러리의 기능들.
function galleryResize(){
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++){
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide(){
    // viewContainerEl.style.left = _galleryW * _cuID + "PX";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform 300ms ease-in-out";
}

//--------
// 이벤트가 바인딩되는 기능들을
function addEvent() {
    for(var i = 0; i < _max; i++){
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
//초기화 기능.
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
// 초기화 함수 호출.
init();