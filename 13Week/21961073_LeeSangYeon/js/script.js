var accordionEl = document.querySelector('#accordion'),
    viewEl = accordionEl.querySelector('.view'),
    viewItemEls = viewEl.querySelectorAll('.view-item'),
    btnCloseEls = viewEl.querySelectorAll('.btn-close'),

    _cuId = null,
    _exId = null;

viewItemEls = Array.prototype.slice.call(viewItemEls); // 노드 목록을 배열로 치환.
// 이벤트 핸들러.
function onClickViewItem(e){
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    console.log(index);
    if(!el.classList.contains('selected')){
        // selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들.
        _cuId = index;
        if(_exId !== null){
            // 처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId ;의 값은 처음에 Null 이다.
            // 따라서 null이 아닌 경우부터 이전 항목에 대한 체크가 가능하다.
            viewItemEls[_exId].classList.remove('selected');
        }
        el.classList.add('selected');
        _exId = _cuId;
    }
}
function onClickClose(e){
    e.preventDefault();

    // **********중요*********
    e.stopPropagation(); // 버블링 방지
    // 이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가(close), 부모 요소인 view-item의 이벤트가
    // 한번 더 발생되기 때문에 해당 메뉴가 다시 활성화된다.(viewItem - event)
    // <------ 버블링이 일어나기 때문에 이를 방지하기 위해 stopPropagation() 메서드를 사용해야 함.

    var el = e.currentTarget, itemEl = el.parentElement;
    // <div class="view-item selected">
    //      <div class="btn-close"></div>
    // </div>
    if(itemEl.classList.contains('selected')){
        if(_exId !== null){
            viewItemEls[_exId].classList.remove('selected');
            _cuId = null;
            _exId = null;
        }
    }
}

// 요소 노드에 추가하는 기능.
function addEvent(){
    for(var i = 0; i < viewItemEls.length; i++){
        viewItemEls[i].addEventListener('click', onClickViewItem);
        btnCloseEls[i].addEventListener('click', onClickClose);
    }
}
// 기능들을 실행하는 초기화.
function init(){
    addEvent();
}
init();