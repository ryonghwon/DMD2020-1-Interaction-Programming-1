var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    
    _duration = 300, // 기본 속도
    _addDuration = 200, // 추가 속도

    _isAni = false,

    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

//블럭 단위로 기능 분리.
//이벤트 핸들러 기능.
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(_isAni) return;
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
function onTransitionEnd(e){
    console.log("Transition 완료");
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
    // 애니메이션이 완료 후 버튼이 클릭 가능한 상태.
}

//----------
//이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {

    // 속도.
    console.log(_exId, _cuId, _cuId - _exId);
    // 만약에 0번째(exId) 상태인 경우, 1번째를 클릭했을 때, 0-1 1만큼의 갭이 발생
    // 만약에 0번째(edId) 상태인 경우, 3번째를 클릭했을 때, 0-3 3만큼의 갭이 발생 + 추가 시간을 더함

    // 절대값 (얼마나 떨어져(갭의 차이가) 있는지 찾기 위해서).
    // Math.abs(0 - 3); // -3 -> 3.
    // Math.abs(3 - 0); // 3 -> 3.



    var duration = _duration + Math.abs(_cuId - _exId) * _addDuration;
    // console.log(duration);
    _isAni = true;
    // 애니메이션이 되는 중에는 썸네일을 클릭해도 이동되지 않도록 막기 위한 Boolean 변수

    //viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform " + duration + "ms ease-in-out";
    //
}

//----------
//이벤트가 바인딩되는 기능들.
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    // viewContainerEl 의 transition 이 끝나는 시점을 찾아 이벤트를 발생 시켜준다.
    // transitionend - transition 스타일이 있는 경우, 모든 움직임이 완료될 때 이벤트.
    // webkitTransitionend - transitionend의 크로스 브라우징 방법 (-webkit- 엔진에서 사용되는 이벤트)
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionend", onTransitionEnd);
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