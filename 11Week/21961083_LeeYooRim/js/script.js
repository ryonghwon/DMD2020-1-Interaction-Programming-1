var tabMenuEl = document.querySelector("#tab-menu"),
    btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
    tabContentEls = document.querySelectorAll(".tab-content"),
    cuId = 0,
    exId = cuId;


btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); 

function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEls.indexOf(el);
    if(!el.classList.contains("selected")) {
       
        btnTabMenuEls[exId].classList.remove("selected");
        tabContentEls[exId].classList.remove("selected");
     
        cuId = index;
        el.classList.add("selected");
        tabContentEls[cuId].classList.add("selected");
    
        exId = cuId; 
    }
}
for(var i = 0; i < btnTabMenuEls.length; i++) {
    btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}
