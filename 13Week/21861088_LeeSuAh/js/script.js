var accordionEl = document.querySelector("#accordion"),
    viewEl = accordionEl.querySelector(".view"),
    viewitemEls = viewEl.querySelectorAll(".view-item")
    btnCloseEls = viewEl.querySelectorAll(".view-item .btn-close"),
    cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector("#list"),
    btnListEl = listEl.querySelectorAll("a"),
    figureEl = document.querySelector("#figure"),
    figureImgEl = figureEl.querySelector("img"),

    degree = 10,
    _cuId = null,
    _exId = null;

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

    
viewitemEls = Array.prototype.slice.call(viewitemEls); // 요소 노드 목록을 배열로 치환

// 이벤트 핸들러.
function onClickViewItem(e){
    e.preventDefault();
    var el = e.currentTarget, index = viewitemEls.indexOf(el);
    console.log(index);
    if(!el.classList.contains("selected")){
        // selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들. 
        _cuId = index;
        if(_exId !== null){
            // 처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exID 의 값은 처음에 null
            viewitemEls[_exId].classList.remove("selected");
        }
        el.classList.add("selected");
        _exId = _cuId;
    }
}
function onClickClose(e){
    e.preventDefault();
    // ***중요***
    e.stopPropagation();
    // 이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가(close), 부모요소인 view-item 의 이벤트가
    // 한 번 더 발생되기 때문에 해당 메뉴가 다시 활성화 된다. (viewItem - event)
    // <---- 버블링이 일어나기 때문에  이를 방지하기 위해 stopPropagation() 매서드를 사용해야 함. ---->
    var el = e.currentTarget, itemEl = el.parentElement;
    if(itemEl.classList.contains("selected")){
        if(_exId !== null){
            viewitemEls[_exId].classList.remove("selected");
            _cuId = null;
            _exId = null;
        }
    }
    // <div class = "view-item">
    // <div class = "btn-close"></div>
    //</div>
}

function onMouseMoveFigure(e){
    var x = e.clientX - figureEl.getBoundingClientRect().left + window.pageXOffset,
        y = e.clientY - figureEl.getBoundingClientRect().top + window.pageYOffset,
        rotx = getRange(y, 0, e.currentTarget.getBoundingClientRect().height, degree * -1, degree),
        rotY = getRange(x, 0, e.currentTarget.getBoundingClientRect().width, degree * -1, degree);
    gsap.killTweensOf(figureImgEl);
    gsap.to(figureImgEl, {rotationX: rotx, rotationY: rotY, duration: 0.2});    
}

function onMouseLeaveFigure(e) {
    gsap.killTweensOf(figureImgEl);
    gsap.to(figureImgEl, {rotationX: 0, rotationY: 0, duration: 0.4, ease: "sine.out"});
}

function getRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



// 요소 노드에 이벤트를 추가하는 기능 집합.
function addEvent(){
    for(var i = 0; i < viewitemEls.length; i++){
        viewitemEls[i].addEventListener("click", onClickViewItem);
        btnCloseEls[i].addEventListener("click", onClickClose);
    }
    
    window.addEventListener("mousemove", onMouseMoveWindow);
    for(var i = 0; i < btnListEl.length; i++){
        btnListEl[i].addEventListener("click", onClickList);
        btnListEl[i].addEventListener("mouseenter", onMouseEnterList);
        btnListEl[i].addEventListener("mouseleave", onMouseLeaveList);
    }

    figureEl.addEventListener("mousemove", onMouseMoveFigure);
    figureEl.addEventListener("mouseleave", onMouseLeaveFigure);
}


// 기능들을 실행하는 초기화.
function init(){
    addEvent();
}
init();