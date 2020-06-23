var galleryEl = document.querySelector('#gallery'),
    viewEl = document.querySelector('.view'),
    viewContainerEl = viewEl.querySelector('.view-container'),
    viewItemEls = viewContainerEl.querySelectorAll('.view-item'),
    listEl = galleryEl.querySelector('.list'),
    listItemEls = listEl.querySelectorAll('li'),
    btnListItemEls = listEl.querySelectorAll('li > a'),
    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget,
        parentEl = el.parentElement,
        index = btnListItemEls.indexOf(el);
    if (!parentEl.classList.contains('selected')) {
        _cuId = index;
        listItemEls[_exId].classList.remove('selected');
        listItemEls[_cuId].classList.add('selected');
        gallerySlide();
        _exId = _cuId;
    }
}

function galleryResize() {
    viewEl.style.width = _galleryW + 'px';
    viewContainerEl.style.width = _galleryW * _max + 'px';
    for (var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + 'px';
    }
}
function gallerySlide() {
    viewContainerEl.style.transform = 'translate3d(' + _galleryW * _cuId * -1 + 'px, 0, 0)';
    viewContainerEl.style.transition = 'transform 300ms ease-in-out';
}

function addEvent() {
    for (var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener('click', onClickListItem);
    }
}
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
init();

// 커서 처리
var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress');

function onMouseMove(e) {
    var posX = e.clientX,
        posY = e.clientY;

    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    gsap.to(cursorDotEl, {
        top: posY,
        left: posX,
        duration: 0.8, //
        ease: 'sine.out', //
    });
    gsap.to(cursorBGEl, { top: posY, left: posX, duration: 0.1, ease: 'sine.out' });
    gsap.to(progressEl, { top: posY, left: posX, duration: 0.5, ease: 'sine.out' });
}
function onMouseEnterList(e) {
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}
function onMouseLeaveList(e) {
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}

window.addEventListener('mousemove', onMouseMove);

for (var i = 0; i < btnListItemEls.length; i++) {
    btnListItemEls[i].addEventListener('mouseenter', onMouseEnterList);
    btnListItemEls[i].addEventListener('mouseleave', onMouseLeaveList);
}
