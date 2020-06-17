/*
var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    exId = cuId;
    //exId = null;

    btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); //배열로 변경
    
    function oncClickTabMenu(e){
        e.preventDefault();
        var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
        if(!el.classList.contains("selected")){
            // selected로 되어 있는 메뉴와 콘텐츠를 원래대로 복귀
            btnTabMenuEls[exId].classList.remove("selected");
            tabContentEls[exId].classList.remove("selected");
            // 현재 클릭된 탭 메뉴로 상태 변경 
            cuId = index;
            el.classList.add("selected");
            tabContentEls[cuId].classList.add("selected");
            exId = cuId; // ****** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야함
        }
    }
    for(var i = 0; i < btnTabMenuEls.length; i++){
        btnTabMenuEls[i].addEventListener("click", oncClickTabMenu);
    }
    */
   var tabMenuEl = document.querySelector('#tab-menu'),
    btnTabMenuEl = tabMenuEl.querySelectorAll('a'),
    tabContainerEl = document.querySelector('.tab-container'),
    tabContentEl = tabContainerEl.querySelectorAll('.tab-content'),
    cuId = 0,
    exId = null;

btnTabMenuEl = Array.prototype.slice.call(btnTabMenuEl);
function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEl.indexOf(el);
    if(!el.classList.contains('selected')) {
        cuId = index;
        btnTabMenuEl[exId].classList.remove('selected');
        tabContentEl[exId].classList.remove('selected');
        el.classList.add('selected');
        tabContentEl[cuId].classList.add('selected');
        exId = cuId;
    }
}
function addEvent() {
    for(var i = 0; i < btnTabMenuEl.length; i++) {
        btnTabMenuEl[i].addEventListener("click", onClickTabMenu);
    }
}
function init() {
    exId = cuId;
    addEvent();
}
init();