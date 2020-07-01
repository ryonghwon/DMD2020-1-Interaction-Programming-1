var accordionEl = document.querySelector("#accordion"),
    viewEl = accordionEl.querySelector(".view"),
    viewItemEls = viewEl.querySelectorAll(".view-item"),

    _cuId = null,
    _exId = null;

viewItemEls = Array.prototype.slice.call(viewItemEls); //요소 노드 목록을 배열로 치환
// 이벤트 핸들러
function onClickViewItem(e){
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    console.log(index);
}

//요소 노드에 이벤트를 추가하는 기능 집합
function addEvent(){
    for(var i = 0; i < viewItemEls.length; i++){
        viewItemEls[i].addEventListener("click", onClickViewItem);
    }
}
//기능들을 실행하는 초기화
function init(){
    addEvent();
}
init;