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
function onClickListItem(e){
      e.preventDefault();
      var el = e.currentTarget, parentEl = el.parentElement,
      index = btnListItemEls.indexOf(el);
      //console.log(parentEl)//부모 요소를 찾아옴.
      // console.log(index);
      if(!parentEl.classList.contains("selected")){
            //비활성화 되어있는 리스트만 선별,
            _cuId = index;
            listItemEls[_exId].classList.remove("selected");
            // parentEl.classList.add("selected");
            listItemEls[_cuId].classList.add("selected");
            //실제로 이미지갤러리가 움직이는 기능 호출.
            gallerySlide();

            _exId = _cuId;
      }
}

//----
//이미지 갤러리의 기능들.
function galleryResize(){
      viewEl.style.width = _galleryW + "px";
      viewContainerEl.style.width = _galleryW * _max + "px";
      for(var i = 0; i < _max; i++){
            viewItemEls[i].style.width = _galleryW + "px";
      }
}
function gallerySlide(){
      // viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
      viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
      viewContainerEl.style.transition = "transform 300ms ease-in-out";
}

//------
//이벤트가 바인딩되는 기능들
function addEvent() {
      for(var i = 0; i < _max; i++){
            btnListItemEls[i].addEventListener("click", onClickListItem);
      }
}
//초기화 기능 (unity Start와 비슷한 기능)
function init() {
      _exId = _cuId;
      _max = viewItemEls.length;
      btnListItemEls = Array.prototype.slice.call(btnListItemEls);
      galleryResize();
      addEvent();
}
init();



/* Cursor */

var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEL = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress'),
    listEl = document.querySelector('.list'),
    btnListEl = listEl.querySelectorAll('a');

btnListEl = Array.prototype.slice.call(btnListEl); // 노드 목록을 배열로 사용 가능하도록 치환.
function onMouseMove(e){
    // console.log(e.clientX, e.clientY);
    // console.log(e.pageX, e.pageY);
    // 마우스의 좌표를 받아올 수 있다.
    // clientX - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
    // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 문서의 스크롤에 영향을 받아 값이 변형)

    var posX = e.clientX, posY = e.clientY;
      //마우스 좌표의 위치 값.
      /*
      //고정값으로 적용됨
      cursorDotEl.style.top = posY + "px";
      cursorDotEl.style.left = posX + "px";
      cursorBGEl.style.top = posY + "px";
      cursorBGEl.style.left = posX + "px";
      progressEl.style.top = posY + "px";
      progressEl.style.left = posX + "px";
      */
     // gsap 애니메이션 처리.
     // to(param1,param2);
     // param1 = 요소를 기입.
     // param2 = gsap 문서 형식에 따라 옵션 값을 기입 (object)
     
     gsap.killTweensOf(cursorDotEl);
     gsap.killTweensOf(cursorBGEL);
     gsap.killTweensOf(progressEl);
     // 요소에서 애니메이션을 제거.
     
     gsap.to(cursorDotEl, {
         top: posY, 
         left: posX,
         duration: 0.1, // s - 0.1 : 100ms, 1.0 : 1000ms 
         ease: 'sine.out' // 기본값은 linear
     });
     gsap.to(cursorBGEL, {top: posY, left: posX, duration: 0.3, ease: 'sine.out'});
     gsap.to(progressEl, {top: posY, left: posX, duration: 0.3, ease: 'sine.out'});
}

function onMouseEnterList(e){
      console.log('enter');
      if(!cursorBGEL.classList.contains('active')){
          cursorBGEL.classList.add('active');
      }
      if(!progressEl.classList.contains('active')){
          progressEl.classList.add('active');
      }
  }
  function onMouseLeaveList(e){
      console.log('leave');
      if(cursorBGEL.classList.contains('active')){
          cursorBGEL.classList.remove('active');
      }
      if(progressEl.classList.contains('active')){
          progressEl.classList.remove('active');
      }
  }
  window.addEventListener('mousemove', onMouseMove);
  for(var i = 0; i < btnListEl.length; i++){
      btnListEl[i].addEventListener('mouseenter', onMouseEnterList);
      btnListEl[i].addEventListener('mouseleave', onMouseLeaveList);
  }