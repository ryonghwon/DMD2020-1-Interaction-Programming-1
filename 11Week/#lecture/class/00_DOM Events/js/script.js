var divEl = document.querySelector("#div");
function onClickDiv(e) {
    e.preventDefault();
    console.log("click");
}
function onMouseOverDiv(e) {
    // div 에 해당하는 영역에만 접근.
    // 만약 하위 요소가 있다면 out 이벤트가 발생됨.(버블링)
    console.log("mouse over");
}
function onMouseOutDiv(e) {
    console.log("mouse out");
}
function onMouseEnterDiv(e) {
    // div 에 해당하는 전체 영역에 접근
    // 하위 요소가 있다고 해도 이벤트가 유지.
    console.log("mouse enter");
}
function onMouseLeaveDiv(e) {
    console.log("mouse leave");
}
divEl.addEventListener("click", onClickDiv);
// divEl.addEventListener("mouseover", onMouseOverDiv);
// divEl.addEventListener("mouseout", onMouseOutDiv);
divEl.addEventListener("mouseenter", onMouseEnterDiv);
divEl.addEventListener("mouseleave", onMouseLeaveDiv);

function onFocusInInput(e) {
    var el = e.currentTarget;
    console.log("focus in");
    // el.style.borderColor = "red";
    el.classList.add("red");
}
function onFocusOutInput(e) {
    var el = e.currentTarget;
    console.log("focus out");
    // el.style.borderColor = "#888";
    el.classList.remove("red");
}
function onKeydownInput(e) {
    var el = e.currentTarget;
    console.log("keydown", el.value);
}
function onKeypressInput(e) {
    var el = e.currentTarget;
    console.log("keypress", el.value);
}
function onKeyupInput(e) {
    var el = e.currentTarget;
    console.log("keyup", el.value);
}
var inputEls = document.querySelectorAll("input");
for(var i = 0; i < inputEls.length; i++) {
    inputEls[i].addEventListener("focusin", onFocusInInput);
    inputEls[i].addEventListener("focusout", onFocusOutInput);
    inputEls[i].addEventListener("keydown", onKeydownInput);
    inputEls[i].addEventListener("keypress", onKeypressInput);
    inputEls[i].addEventListener("keyup", onKeyupInput);
}
function onResize() {
    console.log(window.innerWidth, window.innerHeight);
}
function onScroll() {
    console.log(window.pageXOffset, window.pageYOffset);
}
window.addEventListener("resize", onResize);
window.addEventListener("scroll", onScroll);