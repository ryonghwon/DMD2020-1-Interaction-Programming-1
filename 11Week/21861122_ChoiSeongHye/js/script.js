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

/*
 content1
*/

var cont1H1Els = document.querySelectorAll(".lines"),
    cont1bgEl = document.querySelector("#content1bg");
// console.log(cont1H1Els);

function onmouseOvercont1H1(e) {
    // console.log("mouse over");
    cont1bgEl.style.backgroundImage = "url(../img/tab1bg2.jpg)";
}
function onmouseOutcont1H1(e) {
    // console.log("mouse out");
    cont1bgEl.style.backgroundImage = "";
}

for(var i = 0; i < cont1H1Els.length; i++) {
    // console.log(cont1H1Els[i]);
    cont1H1Els[i].addEventListener("mouseover", onmouseOvercont1H1);
    cont1H1Els[i].addEventListener("mouseout", onmouseOutcont1H1);
}

/*
 content2
*/
var cont2El = document.querySelector("#content2"),
    cont2ImgEls = cont2El.querySelectorAll("a"),
    cont2H1El = cont2El.querySelector("h1");
    cont2ImgEls = Array.prototype.slice.call(cont2ImgEls);

// console.log(cont2ImgEls);

function onmouseOvercont2Img(e) {
    e.currentTarget.classList.add("back");
    e.currentTarget.classList.remove("turn");
    cont2H1El.style.color = "#ff00c3";
}

function onmouseOutcont2Img(e) {
    e.currentTarget.classList.remove("back");
    e.currentTarget.classList.add("turn");
    cont2H1El.style.color = "#fff";
}

for(var i = 0; i < cont2ImgEls.length; i++) {
    // console.log(cont2ImgEls[i]);
    var cont2ImgElback = cont2ImgEls[i];

    cont2ImgElback.addEventListener("mouseover", onmouseOvercont2Img);
    cont2ImgElback.addEventListener("mouseout", onmouseOutcont2Img);
}

/*
 content3
*/

var cont3ImgEls = document.querySelectorAll(".memimg"),
    cont3TextEls = document.querySelectorAll(".memtext");
    // cont3ImgEls = Array.prototype.slice.call(cont3ImgEls);

    // console.log(cont3ImgEls);

function onmouseOvercont3Img(e) {
    // console.log("mouse over3");
    e.currentTarget.style.zIndex = "1";
}

for(var i = 0; i < cont3ImgEls.length; i++) {
    // console.log(cont3ImgEls[i]);
    cont3ImgEls[i].addEventListener("mouseover", onmouseOvercont3Img);
    // cont3ImgElback.addEventListener("mouseout", onmouseOutcont3Img);
}

