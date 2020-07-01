// var navEl = document.querySelectorAll('nav > ul > li');
// var sectionEl = document.querySelectorAll('section');
// cuId = 0,
// exId = null;
// // console.log(navEls);
// // console.log(sectionEls);

// navEl = Array.prototype.slice.call(navEl);
// function onClickNavEl (e) {
//     e.preventDefault();
//     var el = e.currentTarget, index = sectionEl.indexOf(el);
//     if(!el.classList.contains('selected')) {
//         cuId = index;
//         section[exId].classList.remove('selected');
//         navEl[exId].classList.remove('selected');
//         el.classList.add('selected');
//         navEl[cuId].classList.add('selected');
//         exId = cuId;
//     }
// }
// function addEvent() {
//     for(var i = 0; i < navEl.length; i++) {
//         navEl[i].addEventListener('click', onClickNavEl);
//     }
// }
// function init() {
//     exId = cuId;
//     addEvent();
// }
// init();