var accordionEl = document.querySelector("#accordion"),
    viewEl = accordionEl.querySelector(".view"),
    viewItemEls = viewEl.querySelectorAll(".view-item"),
    btnCloseEls = viewEl.querySelectorAll(".view-item .btn-close"),


    _cuId = null,
    _exId = null;

viewItemEls = Array.prototype.slice.call(viewItemEls);
function onClickViewItem(e){
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    console.log(index);
    if(!el.classList.contains("selected")){
        _cuId = index;
        if(_exId !== null ){
            //처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId의 값은 처음에 null이다.
            //null이 아닌경우 이전항목에 대한 체크 가능
            viewItemEls[_exId].classList.remove("selected");
        }
        el.classList.add("selected");
        _exId = _cuId;
    }
}
function onClickClose(e){
    e.preventDefault();
    /*  중요    */
    // 이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가(close), 부모요소인 view-item의 이벤트가
    //한번 더 발생되기 때문에 해당 메뉴가 다시 활성화된다.
    //버블링 방지 
    e.stopPropagation();
    var el = e.currentTarget, itemEl = el.parentElement;
    if(itemEl.classList.contains("selected")){
        if(_exId !== null){
            viewItemEls[_exId].classList.remove("selected");
            _cuId = null;
            _exId = null;
        }
    }

}
// 요소노드에 이벤트를 추가하는 기능 집합
function addEvent(){
    for(var i = 0 ; i < viewItemEls.length ; i++){
        viewItemEls[i].addEventListener("click", onClickViewItem);
        btnCloseEls[i].addEventListener("click", onClickClose);
    }
}
//초기화
function init(){
    addEvent();
}
init();