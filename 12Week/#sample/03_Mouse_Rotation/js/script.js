var figureEl = document.querySelector("#figure"),
    figureImgEl = figureEl.querySelector("img"),
    degree = 10;

function onMouseMoveFigure(e) {
    var x = e.clientX - figureEl.getBoundingClientRect().left + window.pageXOffset,
        y = e.clientY - figureEl.getBoundingClientRect().top + window.pageYOffset,
        rotX = getRange(y, 0, e.currentTarget.getBoundingClientRect().height, degree * -1, degree),
        rotY = getRange(x, 0, e.currentTarget.getBoundingClientRect().width, degree * -1, degree);
    gsap.killTweensOf(figureImgEl);
    gsap.to(figureImgEl, {rotationX: rotX, rotationY: rotY, duration: 0.2});
}
function onMouseLeaveFigure(e) {
    gsap.killTweensOf(figureImgEl);
    gsap.to(figureImgEl, {rotationX: 0, rotationY: 0, duration: 0.4, ease: "sine.out"});
}

function getRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function addEvent() {
    figureEl.addEventListener("mousemove", onMouseMoveFigure);
    figureEl.addEventListener("mouseleave", onMouseLeaveFigure);
}
function init() {
    addEvent();
}
init();