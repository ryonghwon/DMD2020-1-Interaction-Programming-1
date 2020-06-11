var btnMenuEl = document.querySelector("#btn-menu"),
    sideMenuEl = document.querySelector("#side-menu"),
    btnCloseEl = document.querySelector("#btn-close"),
    sideMenuItemEl = sideMenuEl.querySelectorAll("li"),
    _isOpen = false,
    _isAni = false;

function onClickBtnMenu(e){
    e.preventDefault();
    if(_isOpen || _isAni) return;
    if(!_isOpen){
        _isOpen = true;
        _isAni = true;
        sideMenuEl.classList.add("open");
        setTimeout(function(){
            _isAni = false;
            for(var i = 0; i < sideMenuItemEl.length; i++){
                addAni(i);
            }
        }, 380);
    }
}
function onClickBtnClose(e){
    e.preventDefault();
    if(!_isOpen || _isAni) return;
    if(_isOpen){
        _isOpen = false;
        _isAni = true;
        sideMenuEl.classList.remove("open");
        setTimeout(function(){
            _isAni = false;
            for(var i = 0; i < sideMenuItemEl.length; i++){
            sideMenuItemEl[i].classList.remove("ani");
            }
        }, 400);
    }
}
function addAni(id){
    setTimeout(function(){
        sideMenuItemEl[id].classList.add("ani");
    }, 40 * id);
}
function addEvent() {
    btnMenuEl.addEventListener("click", onClickBtnMenu);
    btnCloseEl.addEventListener("click", onClickBtnClose);
}
function init() {
    addEvent();
}
init();