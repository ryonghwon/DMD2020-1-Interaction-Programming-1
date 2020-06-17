var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0; // 현재 체크된 인덱스 번호를 찾기 위함.
    exId = cuId; // 이전 id.
    // exId = null

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열로 치환.

function onClickTabMenu(e){
    e.preventDefault(); // a 태그의 # 방지.
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    // console.log(index); // 클릭 시 0~3의 번호가 뜸.
    if(!el.classList.contains("selected")){ // selected를 포함하지 않는다면.
        // selected로 되어 있는 메뉴와 콘텐츠를 원래대로 복귀.
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
        // 현재 클릭된 탭 메뉴로 상태 변경.
        cuId = index; // 1
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
        // ** 이벤트에 따라 변화가 일어나므로 끝 부분에 값을 변경해주어야 함.
        exId = cuId; // ** 다음 번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야 함.
                     // 1번이 눌린 후 exId가 cuId로 변경이 되어야 순환 구조가 만들어짐.
    }
}
for(var i = 0; i < btnTabMenuEls.length; i++){
    btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}



