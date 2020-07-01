var htmlEl = document.documentElement,
    checkBoxEl = document.querySelector("input[name=switch]"),
    _isDarkMode = false;

function onChangeCheckBox(e) {
    var el = e.currentTarget;
    _isDarkMode = el.checked;
    if(_isDarkMode){
        htmlEl.classList.add("mode-dark");
    }else{
        htmlEl.classList.remove("mode-dark");
    }
}
function addEvent() {
    checkBoxEl.addEventListener("change", onChangeCheckBox);
}
function init() {
    addEvent();
}
init();