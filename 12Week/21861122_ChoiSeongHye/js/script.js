var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    cursorDotEl = document.querySelector("#cursor-dot");
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),

    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

// 블럭 단위로 기능 분리.
// 이벤트 핸들러 기능.
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, // 현재 클릭 된 리스트 중에 몇번째에 해당하는 요소인지 체크.
        parentEl = el.parentElement, // 부모요소를 찾아옴.
        index = btnListItemEls.indexOf(el); // 찾아온 요소가 몇번째에 해당하는지 체크.

    // console.log(parentEl);
    // console.log(index);
    

    // 선택되어 있는 상태가 아닐 때 (비활성화 되어있는 리스트만 선별)
    if(!parentEl.classList.contains("selected")) {
        // 누르기 전에 활성화 되어있는 요소
        _cuId = index; // 현재 눌린 값이 체크
        listItemEls[_exId].classList.remove("selected");
        // parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        _exId = _cuId; // 끝나는 시점에 체크
        // 실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        _exId = _cuId;
    }
}

// -----------------
// 이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    // 크기를 이미지 갯수만큼 늘린다
    viewContainerEl.style.width = _galleryW * _max + "px";
    for (var i = 0; i < _max; i++) {
        // 너비 지정
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {
    // 1. left 자체를 이동
    // viewContainerEl.style.left = _galleryW * _cuId * -1 + "px"; // left값이 적용된다.

    // 2. transform 을 이용하여 영역은 그대로 두고 가상의 공간 안에서 이동
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)"; // 음수로 이동할 수 있도록 -1 을 곱해준다.
    viewContainerEl.style.transition = "transform 300ms ease-in-out";
}


// -----------------
// 이벤트가 바인딩되는 기능들.
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
// 초기화 기능.
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    // 클릭 이벤트를 추가 하는데, 클릭 했을 때 몇번째가 눌렸는지 체크하기 위해!
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}

// 초기화 함수 호출.
init();

// 마우스커서


function onMouseMove(e) {
    // console.log(e.clientX, e.clientY);
    // console.log(e.pageX, e.pageY);
    // 마우스의 좌표를 받아올 수 있다.
    // client - 브라우저 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
    // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 문서의 스크롤에 영향을 받아 값이 변형)
    var posX = e.clientX, posY = e.clientY;
    // 마우스 좌표의 위치 값.
    /*
    // 고정값으로 적용됨.
    cursorDotEl.style.top = posY + "px";
    cursorDotEl.style.left = posX + "px";
    cursorBGEl.style.top = posY + "px";
    cursorBGEl.style.left = posX + "px";
    progressEl.style.top = posY + "px";
    progressEl.style.left = posX + "px";
    */
    // gsap 애니메이션 처리.
    // to(param1, param2);
    // param1 - 요소를 기입,
    // param2 - gsap 문서 형식에 따라 옵션값을 기입 (object)
    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    // - 요소에서 애니메이션을 제거.

    gsap.to(cursorDotEl, {
        "top" : posY,
        "left" : posX,
        "duration" : 0.4, // s - 0.1 : 100ms, 1.0 : 1000ms
        "ease" : "sine.out" // 기본값은 linear
    });
    gsap.to(cursorBGEl, {top: posY - 16, left: posX - 17, duration: 0.6, ease: "sine.out"});
    gsap.to(progressEl, {top: posY + 16, left: posX + 17, duration: 0.25, ease: "sine.out"});
}
function onMouseEnterList(e) {
    // console.log("enter");
    if(!cursorBGEl.classList.contains("active")) {
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")) {
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList(e) {
    // console.log("leave");
    if(cursorBGEl.classList.contains("active")) {
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")) {
        progressEl.classList.remove("active");
    }
}
window.addEventListener("mousemove", onMouseMove);

for(var i = 0; i < btnListItemEls.length; i++) {
    btnListItemEls[i].addEventListener("mouseenter", onMouseEnterList);
    btnListItemEls[i].addEventListener("mouseleave", onMouseLeaveList);
}
