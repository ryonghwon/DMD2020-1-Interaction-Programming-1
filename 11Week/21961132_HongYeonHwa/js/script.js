var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    exId = cuId;
    // exId = null;

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열로 변경.

function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    if(!el.classList.contains("selected")) {
        // selected 로 되어 있는 메뉴와 콘텐츠를 원래대로 복귀.
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
        // 현재 클릭된 탭 메뉴로 상태 변경.
        cuId = index;
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
        // ** 이벤트에 따라 변화가 일어나고 끝 부분에 값을 변경.
        exId = cuId; // ** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야 함.
    }
}
for(var i = 0; i < btnTabMenuEls.length; i++) {
    btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}
// exId = cuId;


// document.addEventListener('mousemove', function(e) {
//     let body = document.querySelector('body');
//     let circle = document.createElement('span');
//     let x = e.offsetX;
//     let y = e.offsetY;
//     circle.style.left = x + "px";
//     circle.style.top = y + "px";
//     let size = Math.random() * 100;
//     circle.style.width = 20 + size + "px";
//     circle.style.height = 20 + size + "px";
//     body.appendChild(circle);
//     setTimeout(function() {
//       circle.remove();
//     }, 1800);
//   });



  var cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector("#list"),
    btnListEl = listEl.querySelectorAll("a");
btnListEl = Array.prototype.slice.call(btnListEl);
function onMouseMoveWindow(e) {
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: e.pageY, left: e.pageX, duration: 0.1});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: e.pageY, left: e.pageX, duration: 0.3, ease: "sine.Out"});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: e.pageY, left: e.pageX, duration: 0.25, ease: "sine.Out"});
}
function onClickList(e) {
    e.preventDefault();
    var index = btnListEl.indexOf(e.currentTarget);
    console.log(index);
}
function onMouseEnterList() {
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList() {
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}
function addEvent() {
    window.addEventListener("mousemove", onMouseMoveWindow);
    for(var i = 0; i < btnListEl.length; i++){
        btnListEl[i].addEventListener("click", onClickList);
        btnListEl[i].addEventListener("mouseenter", onMouseEnterList);
        btnListEl[i].addEventListener("mouseleave", onMouseLeaveList);
    }
}
function init() {
    addEvent();
}
init();


