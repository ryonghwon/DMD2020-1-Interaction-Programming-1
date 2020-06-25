var galleryEl = document.querySelector("#gallery"),
    viewEl = document.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress');
    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;
    
// 블럭 단위로 기능 분리.
// 이벤트 핸들러 기능.
function onClickListItem(e){
    e.preventDefault();
    var el = e.currentTarget, 
    parentEl = el.parentElement,
    index = btnListItemEls.indexOf(el);
    //console.log(parentEl) // 부모 요소를 찾아옴. 
    //console.log(index);
    
    if(!parentEl.classList.contains('selected')){
        // 비활설화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove('selected');
        //parentEl.classList.add("selected"); 
        listItemEls[_cuId].classList.add('selected'); // 위와 기능이 동일.
        // 실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        _exId = _cuId;
    }
}

// --------
// 이미지 갤러리의 기능들.
function galleryResize(){
    viewEl.style.width = _galleryW + 'px';
    viewContainerEl.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < _max; i++){
        viewItemEls[i].style.width = _galleryW + 'px';
    }
}

// -----------
// 이벤특 바인딩 되는 기능들.
function gallerySlide(){
    //viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
    viewContainerEl.style.transform = 'translate3d('+ _galleryW *_cuId * -1 + 'px, 0, 0)';
    viewContainerEl.style.transition = 'transform 300ms ease-in-out';
}

function addEvent(){
    for(var i=0; i < _max; i++){
        btnListItemEls[i].addEventListener('click', onClickListItem);
    }
}

// --------

// 초기화 기능.
function init(){ //start와 비슷한 기능
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
// 초기화 함수 호출.
init();




function onMouseMove(e){
   // console.log(e.clientX, e.clientY);
   // console.log(e.pageX, e.pageY);
   // 마우스의 좌표를 받아올 수 있다.
   // client - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
   // page - 문서 상단을 기준으로 마수으 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 무서의 스크롤에 영향을 받아 값이 변형)
    var posX = e.clientX, 
        posY = e.clientY;
   // 마우스 좌표의 위치 값.

    // gsap 애니메이션 처리.
    // to(param1, param2);
    // param1 - 요소를 기입,
    // param2 - gsap 문서 형식에 따라 옵션값을 기입 (obcject)
    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    // -요소에서 애니메이션을 제거

    gsap.to(cursorDotEl, {
        top: posY,
        left: posX,
        duration: 0.8, 
        ease: 'sine.out', 
    });
    gsap.to(cursorBGEl, { top: posY, left: posX, duration: 0.3, ease: 'sine.out' });
    gsap.to(progressEl, { top: posY, left: posX, duration: 0.25, ease: 'sine.out' });
}
function onMouseEnterList(e) {
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}
function onMouseLeaveList(e) {
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}

window.addEventListener('mousemove', onMouseMove);

for (var i = 0; i < btnListItemEls.length; i++) {
    btnListItemEls[i].addEventListener('mouseenter', onMouseEnterList);
    btnListItemEls[i].addEventListener('mouseleave', onMouseLeaveList);
}