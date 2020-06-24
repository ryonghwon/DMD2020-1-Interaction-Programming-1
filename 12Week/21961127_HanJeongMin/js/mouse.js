var cursorDotEl = document.querySelector("#cursor-dot");
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector(".list"),
    btnListEls = listEl.querySelectorAll("li");
    btnListEls = Array.prototype.slice.call(btnListEls);

function OnMouseMove(e){
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {
        top: e.pageY, left: e.pageX, duration: 0.2, ease: "sine.Out"
    });
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {
        top: e.pageY, left: e.pageX, duration: 0.2, ease: "sine.Out"
    });
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {
        top: e.pageY, left: e.pageX, duration: 0.2, ease: "sine.Out"
    });
}
function onMouseEnterList(e){
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function OnMouseLeaveList(e){
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}


window.addEventListener("mousemove", OnMouseMove);
for(var i = 0; i < btnListEls.length; i++){
    btnListEls[i].addEventListener("mouseenter", onMouseEnterList);
    btnListEls[i].addEventListener("mouseleave", OnMouseLeaveList);
}

function init() {
    addEvent();
}
init();