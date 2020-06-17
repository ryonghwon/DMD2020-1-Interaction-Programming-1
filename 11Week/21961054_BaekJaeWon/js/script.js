var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    exId = cuId;
    // exId = null;

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열로 변경.

function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    if(!el.classList.contains("selected")) {
        // selected 로 되어 있는 메뉴와 콘텐츠를 원래대로 복귀.
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
        // 현재 클릭된 탭 메뉴로 상태 변경.
        cuId = index;
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
        // ** 이벤트에 따라 변화가 일어나고 끝 부분에 값을 변경.
        exId = cuId; // ** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야 함.
    }
}
for(var i = 0; i < btnTabMenuEls.length; i++) {
    btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}
// exId = cuId;


// 내가 넣은 부분
// 하다가 헷갈려서 중단....
var tipMenuEls = document.querySelectorAll("#tips-menu");
var tipEls = document.querySelectorAll('#tips');
window.onload = function onClickTabTips(e) {
    e.preventDefault();
    for (var i = 0; tipMenuEls.length > i; i++) {
        if (tipMenuEls[i]) {
            tipEls[i].classList.add("background-white");
        }
    }
}
tipMenuEls[i].addEventListener("click", onClickTabTips);
// 질문
// 두번째 메뉴에서 tips 01 02 03 클릭하면 3가지 중 각각 해당하는 article의 background color를 white로 변경시키고 싶은데 잘 안되네요..ㅠㅠ 알려주시면 감사하겠습니다!!

/*
rh :
JavaScript - (기능)
- tips 01, 02, 03 을 눌렀을 때(클릭 이벤트) article 요소에 각 케이스 마다의 클래스를 추가하거나 제거합니다.
CSS - (화면)
- article.tips-01 하위 항목에 대한 background-color 스타일 적용.(tips 01 일 때 적용되는 스타일 준비)
- article.tips-02 하위 항목에 대한 background-color 스타일 적용.(tips 02 일 때 적용되는 스타일 준비)
- article.tips-03 하위 항목에 대한 background-color 스타일 적용.(tips 03 일 때 적용되는 스타일 준비)

CSS 준비된 클래스 규칙에 따라서 JavaScript 에서 현재 클릭한 버튼의 케이스(타입)를 확인하여 tips-01 클래스를 추가하거나 tips-01 클래스를 제거하나거 하면 제어가 가능합니다.
*/