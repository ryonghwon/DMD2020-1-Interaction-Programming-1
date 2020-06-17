var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    //exId = null; // 초기값이 무엇인지 모르기 때문에 null 로 쓴 것
    exId = cuId;

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열로 변경(치환)
function onClickTabMenu(e)
{
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    //console.log(index);
    if(!el.classList.contains("selected"))
    {
        // selected 로 되어 있는 메뉴와 콘텐츠를 원래대로 복귀
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
        // 현재 클릭된 탭 메뉴로 상태 변경
        cuId = index;
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
        // 여기에도 써야 이벤트에 따라 변화가 일어나고 끝 부분에 값을 변경
        exId = cuId; // 다음번 클릭이 될 때 이전에 선택된 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야함
    }
}
for(var i = 0; i < btnTabMenuEls.length; i++)
{
    btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}
exId = cuId; // 여기만 쓰면 처음할 때만 바뀜