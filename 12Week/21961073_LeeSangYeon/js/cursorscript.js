var cursorDotEl = document.querySelector("#cursor-dot");
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector(".list"),
    btnListEls = listEl.querySelectorAll("li");

    btnListEls = Array.prototype.slice.call(btnListEls);
function OnMouseMove(e){

    var posX = e.clientX, posY = e.clientY;

    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);

    gsap.to(cursorDotEl, {
        "top": posY,
        "left": posX,
        "duration" : 0.5, 
        "ease" : "sine.out" 
    });
    gsap.to(cursorBGEl, {
        "top": posY,
        "left": posX,
        "duration" : 0.3, 
        "ease" : "sine.out" 
    })
    gsap.to(progressEl, {
        "top": posY,
        "left": posX,
        "duration" : 0.25,
        "ease" : "sine.out" 
    })
}
function onMouseEnterList(e){
    console.log("enter");
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function OnMouseLeaveList(e){
    console.log("leave");
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