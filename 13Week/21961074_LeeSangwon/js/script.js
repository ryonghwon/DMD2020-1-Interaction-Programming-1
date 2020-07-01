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
function timer_test(){
    location.href = "/index.html"
}

function init() {
    htmlEl.classList.remove("preload");
    addEvent();
}
init();




var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress');
 
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
    console.log("enter");
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}
function onMouseLeaveList(e) {
    console.log("leave");
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}

window.addEventListener('mousemove', onMouseMove);



var spanEl = document.querySelectorAll('span');



$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


  