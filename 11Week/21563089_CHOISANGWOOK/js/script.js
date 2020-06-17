var tabMenuEl = document.querySelector('#tab-menu'),
    btnTabMenuEl = tabMenuEl.querySelectorAll('a'),
    tabContainerEl = document.querySelector('.tab-container'),
    tabContentEl = tabContainerEl.querySelectorAll('.tab-content'),
    cuId = 0,
    exId = null;

btnTabMenuEl = Array.prototype.slice.call(btnTabMenuEl);// 배열값으로 바꿔주기 [0], [1],,,,,,

function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEl.indexOf(el);
    if(!el.classList.contains('selected')) {
        cuId = index;
        // selected 로 되어 있는 메뉴와 콘텐츠를 원래대로 
        btnTabMenuEl[exId].classList.remove('selected');
        tabContentEl[exId].classList.remove('selected');

        // 현재 클릭된 탭 메뉴로 상태 변경(탭 메뉴와 컨텐츠 내용이 바뀜)
        el.classList.add('selected');
        tabContentEl[cuId].classList.add('selected');

        // ** 이벤트에 따라 변화가 일어나고 끝 부분에 값을 변경
        exId = cuId;
        // ** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야 함
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