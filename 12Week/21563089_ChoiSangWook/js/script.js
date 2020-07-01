var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    
    _galleryW = 800,
    _cuId = 0,
    _exId = null,
    _max = null;

//블럭 단위로 기능 분리.
//이벤트 핸들러 기능.
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(!parentEl.classList.contains("selected")) {
        //비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        //parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        _exId = _cuId;
    }
}

//----------
//이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {
    //viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform 300ms ease-in-out";
}

//----------
//이벤트가 바인딩되는 기능들.
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
//초기화 기능.
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
// 초기화 함수 호출.
init();





// 마우스 커서


var cursorDotEl = document.querySelector("#cursor-dot"),
     cursorBGEl = document.querySelector("#cursor-bg"),
     progressEl = document.querySelector("#progress"),
     btnListEls = listEl.querySelectorAll("a"),

btnListEls = Array.prototype.slice.call(btnListEls); // 노드 목록을 배열로 사용 가능토록 치환

function onMouseMove(e){
     //console.log(e.clientX, e.clientY); // 마우스 커서 위치값
     //console.log(e.pageX, e.pageY); // 마우스 커서 위치값
     // client - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤 영향 X)
     // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤 영향 O)

     // 마우스 좌표 위치값 가져오기
     // "px" 꼭 넣어야함
     /* 고정값으로 적용되있음 gsap 때문에
     var posX = e.clientX, posY = e.clientY;
     cursorDotEl.style.top = posY + "px";
     cursorDotEl.style.left = posX + "px";
     cursorBGEl.style.top = posY + "px";
     cursorBGEl.style.left = posX + "px";
     progressEl.style.top = posY + "px";
     progressEl.style.left = posX + "px";
     */
    //gsap 애니메이션 처리.
    //to(param1, parma2);
    //parma1 - 요소를 기입
    //parma2 - gsap 문서형식에 따라 옵션값을 기입(object-객체)


//      요소에서 에니메이션을 제거
//     gsap.killTweenOf(cursorDotEl);
//     gsap.killTweenOf(cursorBGEl);
//     gsap.killTweenOf(progressEl);

    
     //위치값
    var posX = e.clientX, posY = e.clientY;

    gsap.to(cursorDotEl,{
         "top" : posY,
          "left" : posX,
       "duration" : 0.1,
       "ease" : "sine.out"
}); // s - 0.1 : 100ms, 1.0 : 1000ms
     
     gsap.to(cursorBGEl,{      
           "top" : posY,
     "left" : posX,
     "duration" : 0.3,
     "ease" : "sine.out"
});
gsap.to(progressEl, {
     "top" : posY,
     "left" : posX,
     "duration" : 0.6,
     "ease" : "sine.out"
});
}

window.addEventListener("mousemove", onMouseMove);

function onMouseEnterList(e){
     //console.log("enter");
     if(!cursorBGEl.classList.contains("active")){   // ! active 가 없을때
          cursorBGEl.classList.add("active"); // active 를 추가시켜주겠다.
     }
     if(!progressEl.classList.contains("active")){   // ! active 가 없을때
          progressEl.classList.add("active"); // active 를 추가시켜주겠다.
     }
}

function onMouseLeaveList(e){
     //console.log("leave");
     if(cursorBGEl.classList.contains("active")) // 위에랑 추가와 삭제 반복
     {
          cursorBGEl.classList.remove("active");
     }
     if(progressEl.classList.contains("active")){   // ! active 가 없을때
          progressEl.classList.remove("active"); // active 를 추가시켜주겠다.
     }
}

for(var i = 0; i < btnListEls.length; i++)
{
     btnListEls[i].addEventListener("mouseenter", onMouseEnterList);
     btnListEls[i].addEventListener("mouseleave", onMouseLeaveList);
}