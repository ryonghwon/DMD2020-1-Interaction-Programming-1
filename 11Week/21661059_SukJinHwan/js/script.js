var tabMenuEl = document.querySelector("#tab-menu"),
btnTebMenuEls = tabMenuEl.querySelectorAll("a"),
tabContensEls = document.querySelectorAll(".tab-content"),
cuId = 0,
exId = null;

btnTebMenuEls = Array.prototype.slice.call(btnTebMenuEls);

function onClickTebMenu(e)
{
    e.preventDefault();
    var el = e.currentTarget, index = btnTebMenuEls.indexOf(el);
    if(!el.classList.contains("selected"))
    {
        btnTebMenuEls[exId].classList.remove("selected");
        tabContensEls[exId].classList.remove("selected");

        cuId = index;
        el.classList.add("selected");
        tabContensEls[cuId].classList.add("selected");
        exId = cuId;
    }
}
for(var i = 0; i < btnTebMenuEls.length; i++){
    btnTebMenuEls[i].addEventListener("click", onClickTebMenu);
}
exId = cuId;