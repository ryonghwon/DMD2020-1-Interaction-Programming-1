var 
  cursorDotEl = document.querySelector("#cursor-dot");
  cursorBGEl = document.querySelector("#cursor-bg"),
  progressEl = document.querySelector("#progress"),
  listEl = document.querySelector(".list"),
  btnListEls = listEl.querySelectorAll("a");

btnListEls = Array.prototype.slice.call(btnListEls);

function onMouseMove(e) {
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: e.clientY, left: e.clientX, duration: 0.3, ease: "sine.out"});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: e.clientY - 15, left: e.clientX -15, duration: 0.5, ease: "sine.out"});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: e.clientY + 15, left: e.clientX + 15, duration: 2.5, ease: "sine.out"});
}
function onMouseEnterList(e) {
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList(e) {
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}
window.addEventListener("mousemove", onMouseMove);

for(var i = 0; i < btnListEls.length; i++){
    btnListEls[i].addEventListener("mouseenter", onMouseEnterList);
    btnListEls[i].addEventListener("mouseleave", onMouseLeaveList);
}