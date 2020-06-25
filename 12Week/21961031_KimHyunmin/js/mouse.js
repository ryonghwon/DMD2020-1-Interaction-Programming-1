/* 마우스 */ 
var cursorDotEl = document.querySelector("#cursor-dot");
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector(".list"),
    btnListEls = listEl.querySelectorAll("a");

btnListEls = Array.prototype.slice.call(btnListEls); // 노드 목록을 배열로 사용 가능하도록 치환.
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
        "duration" : 0.2, // s - 0.1 : 100ms, 1.0 : 1000ms
        "ease" : "sine.out" // 기본값은 linear
    });
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 2.5, ease: "circ.out"});
    gsap.to(progressEl, {top: posY, left: posX, duration: 2.5, ease: "circ.out"});
}
function onMouseEnterList(e) {
    console.log("enter");
    if(!cursorBGEl.classList.contains("active")) {
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")) {
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList(e) {
    console.log("leave");
    if(cursorBGEl.classList.contains("active")) {
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")) {
        progressEl.classList.remove("active");
    }
}
window.addEventListener("mousemove", onMouseMove);
for(var i = 0; i < btnListEls.length; i++) {
    btnListEls[i].addEventListener("mouseenter", onMouseEnterList);
    btnListEls[i].addEventListener("mouseleave", onMouseLeaveList);
}