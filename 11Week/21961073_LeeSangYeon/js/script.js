/* 
var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    exId = null;

btnTabMenuEls =Array.prototype.slice.call(btnTabMenuEls);//배열로 변경.
function onClickTabMenu(e){
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    //console.log(index)
    if(!el.classList.contains("selected")){
        // selected 로 되어있는 메뉴와 콘텐츠를 원래대로 복귀
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
        //현재 클릭된 탭 메뉴로 상태 변꼉
        cuId = index;
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
        exId = cuId; //******다음번 클릭이 도ㅚㄹ 때, 이전에 선택된 index값을 확인하여 복귀시킬 수 있돍ㄱ 꼭 버ㅕㄴ경해야 함
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

