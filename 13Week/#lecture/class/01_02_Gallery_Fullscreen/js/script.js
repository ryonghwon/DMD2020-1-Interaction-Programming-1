var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-item > img"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),

    paddleNavEl = galleryEl.querySelector(".paddle-nav"),
    btnPaddleNavEls = paddleNavEl.querySelectorAll("button.arrow"),
    btnPaddleNavPrevEl = paddleNavEl.querySelector("button.arrow.prev"),
    btnPaddleNavNextEl = paddleNavEl.querySelector("button.arrow.next"),

    _duration = 300,
    _addDuration = 200,

    _isAni = false,

    _imgOW = 1600,
    _imgOH = 1000,

    _galleryW = null,
    _galleryH = null,
    _cuId = 0,
    _exId = null,
    _max = null;


function onResize(e) {
    console.log("resize");
    //console.log(window.innerWidth, window.innerHeight);
    _galleryW = window.innerWidth;
    _galleryH = window.innerHeight;
    //console.log(_galleryW);
    // 브라우저의 가로폭, 세로높이 값을 구하여 viewContainerEl 의 width, height 에 적용.

    // 갤러리의 사이즈가 변경되도록 galleryResize() 호출.
    galleryResize();
    gallerySlide(true); //애니메이션이 없는 상태로 고정값 적용. ( translate3d() )
}
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(_isAni) return;
    if(!parentEl.classList.contains("selected")) {
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        listItemEls[_cuId].classList.add("selected");
        gallerySlide();
    }
}
function onClickPaddleNav(e) {
    e.preventDefault();
    var el = e.currentTarget;
    if(el.classList.contains("prev")) {
        console.log("이전");
        // _cuId--; // -1
        _cuId--;
        // -1 이 되었을 때 0 으로 값을 강제 변경.
        if(_cuId < 0) {
            _cuId = 0;
        }
    }else if(el.classList.contains("next")) {
        console.log("다음")
        // _cuId++; // +1 
        _cuId++;
        // 4 가 되었을 때 3 으로 값을 강제 변경.
        if(_cuId > _max - 1) {
            _cuId = _max - 1;
        }
    }
    gallerySlide();
}

function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition"); 
}

function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewEl.style.height = _galleryH + "px";
    // viewEl 에 높이 적용.
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
    for(var j = 0; j < _max; j++) {
        var imgW, imgH, imgT, imgL;

        // 가로폭 부터 적용 후 높이 계산.
        imgW = _galleryW;
        // galleryW : ? = imgOW :imgOH; (ratio)
        imgH = Math.round(imgW * _imgOH / _imgOW);
        // 브라우저 리사이즈할 때, galleryW 보다 galleryH 가 더 수치가 높아져서 여백이 생기는 구간이 발생됨.
        if(imgH <= _galleryH) {
           imgH = _galleryH; 
           // ? : galleryH = imgOW :imgOH; (ratio)
           imgW = imgH * _imgOW / _imgOH;
        }

        // 이미지를 중심으로 이동시키기 위한 공식.
        // 프레임의 가로폭의 반 - 이미지의 가로폭의 반.
        // 프레임의 세로높의 반 - 이미지의 세로높이의 반.
        imgT = Math.round(_galleryH / 2 - imgH / 2);
        imgL = Math.round(_galleryW / 2 - imgW / 2);

        viewItemImgEls[j].style.width = imgW + "px";
        viewItemImgEls[j].style.height = imgH + "px";
        viewItemImgEls[j].style.top = imgT + "px";
        viewItemImgEls[j].style.left = imgL + "px";
    }
}
function gallerySlide(b) {
    var duration = _duration + Math.abs(_cuId - _exId) * _addDuration,
    bool = (b) ? b : false;
    //===
    /*
    if(b) {
        bool = true;
    }else{
        bool = false;
    }
    */
   viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
   // 함수 안에서 2가지 기능을 사용할 때 방법. (boolean 타입을 활용)
   if(!bool) { //false.
       // 애니메이션.
       console.log("애니메이션");
       _isAni = true;    
       setNavSelected();
       viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.030, 0.515, 0.955)";
       _exId = _cuId;
   }else{
       // 정적 값을 적용.(애니메이션이 없이 고정값으로 적용되도록)
       console.log("리사이즈");
       viewContainerEl.style.removeProperty("transition");
   }
}
function setNavSelected() {
    listItemEls[_exId].classList.remove("selected");
    listItemEls[_cuId].classList.add("selected");
}

function addEvent() {
    window.addEventListener("resize", onResize);
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    for(var j = 0; j < btnPaddleNavEls.length; j++) {
        btnPaddleNavEls[j].addEventListener("click", onClickPaddleNav);
    }
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
}
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    addEvent();
    // window 에 적용된 resize 이벤트를 사용자의 조작없이 강제 실행.
    window.dispatchEvent(new Event("resize"));
}
init();