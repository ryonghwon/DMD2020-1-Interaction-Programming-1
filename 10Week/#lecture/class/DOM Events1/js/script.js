/* DOM Event. */

// Click Event.
// 요소에 클릭이 발생될 때.
// 요소 노드를 찾고, 이벤트를 추가하고, 핸들러 콜백 함수를 생성 정의.
var divEl = document.getElementById("div");
var _isClick = false; //클릭이 된 상태인지 체크하는 Boolean 변수.
function onClickDiv(evt) {
    evt.preventDefault();
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    divEl.classList.remove("red", "black", "blue");
    // red 라는 className, black 이라는 className 을 제거.
    if(!_isClick) {
        divEl.classList.add("red", "blue");
        // _isClick = true;
    }else{
        divEl.classList.add("black");
        // _isClick = false;
    }
    _isClick = !_isClick; // 원래의 Boolean 값에 반대되는 Boolean 값으로 할당.
    console.log(_isClick);
}
// divEl.addEventListener("click", onClickDiv);

// Double Click Event.
// dblclick
function onDblclickDiv(e) {
    e.preventDefault();
    console.log("dblclick");
    divEl.classList.toggle("style2");
    divEl.removeEventListener("dblclick", onDblclickDiv);
    // 요소 노드에 이벤트를 제거하는 방법.
    // 더블 클릭 이벤트가 한 번만 발생.
}
divEl.addEventListener("dblclick", onDblclickDiv);

var divEls = document.getElementsByTagName("div");
console.log(divEls);
// HTMLCollection [요소, 요소, ...] 을 배열로 처리해주는 컨버팅 과정.
console.log(Array.prototype.slice.call(divEls));
// [요소, 요소, ...]
divEls = Array.prototype.slice.call(divEls);
console.log(divEls);
for(var i = 0; i < divEls.length; i++) {
    // divEls[i].addEventListener("mouseover", onMouseOverDiv);
    // divEls[i].addEventListener("mouseout", onMouseOutDiv);
}
function onMouseOverDiv(e) {
    console.log("mouse over");
}
function onMouseOutDiv(e) {
    console.log("mouse out");
}

var mouseEls = document.getElementsByClassName("mouse");
mouseEls = Array.prototype.slice.call(mouseEls);
for(var i = 0; i < mouseEls.length; i++) {
    mouseEls[i].addEventListener("mouseover", onMouse);
    mouseEls[i].addEventListener("mouseout", onMouse);
}
function onMouse(e) {
    // console.log(this, e.currentTarget, e.target);
    // this - 해당 이벤트가 발생된 요소 노드.
    // event.currentTarget - 해당 이벤트가 발생된 요소 노드.
    // event.target - 이벤트가 발생될 때 마우스 커서가 위치된 요소 노드.
    var el = e.currentTarget;
    var index = mouseEls.indexOf(el);
    console.log(index);
    // 이벤트가 발생된 요소 노드의 순번.
    //console.log(e); // 발생된 이벤트의 정보 객체.
    //console.log(e.type); // 발생된 이벤트의 타입 반환.
    if(e.type === "mouseover") {
        console.log("over");
        el.classList.add("animated" + parseInt(index + 1, 10));
        // 0 번째 요소 노드일 때, animated1 클래스명이 추가.
        // 1 번째 요소 노드일 때, animated2 클래스명이 추가.
        // 2 번째 요소 노드일 때, animated3 클래스명이 추가.
    }else if(e.type === "mouseout") {
        console.log("out");
        el.classList.remove("animated" + parseInt(index + 1, 10));
        // 0 번째 요소 노드일 때, animated1 클래스명이 제거.
        // 1 번째 요소 노드일 때, animated2 클래스명이 제거.
        // 2 번째 요소 노드일 때, animated3 클래스명이 제거.
    }
}