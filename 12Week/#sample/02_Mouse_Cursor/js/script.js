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