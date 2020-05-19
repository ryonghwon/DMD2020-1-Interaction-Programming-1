/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

// document.title = ""; -> title 태그 값 변경.
document.title = "21961071_이명빈";

/*
Quest 2.
1. getSize 라는 함수를 선언합니다.
2. 1(순서) 함수가 호출될 때, 윈도우 콘텐츠 영역의 가로 폭 값과 세로 높이 값을 아래의 객체 형식으로 반환합니다.
----------
객체 형식)
{ winWidth : __윈도우 콘텐츠 영역의 가로 폭 값__, winHeight : __윈도우 콘텐츠 영역의 세로 높이 값__ }
----------
3. winSize 변수를 선언, 1(순서) 함수를 호출하고 반환값을 할당받아 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 2.

// getSize 함수 선언.
function getSize(){
    // 윈도우 콘텐츠 영역의 가로 폭 값을 구하는 BOM 속성 window.innerWidth
    // 윈도우 콘텐츠 영역의 가로 폭 값을 구하는 BOM 속성 window.innerHeight
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
}
// 함수를 받을 변수 winSize 생성.
var winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width : " + winWidth + " px, height : " + winHeight + " px 입니다."); // "윈도우 콘텐츠의 영역 width : 404 px, height : 874 px 입니다."

/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

// 변수 title_id 을 생성하고 title 이라는 id를 가진 요소를 저장.
var title_id = document.getElementById("title");

// 요소 안에 텍스트 기입 : element.innerText = "String";
// id 가 'title' 인 요소에 문자열 ("Hello World") 저장.
title_id.innerText = 'Hello World';

/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

var title_class = document.getElementsByClassName("title");

// title_class.innerText = '안녕하세요'; // 문자열이 포함되지 않음.

// ClassName은 elements - 배열(복수의 목록)으로 반환.
// title_class[0].innerText = '안녕하세요'; // 문자열이 포함됨.
// console.log(title_class[0]); // <div class="title">안녕하세요</div>

// 반복문
// 배열을 담을 변수 i 가 title_class의 배열 개수보다 작을때까지 반복한다.
for (var i = 0; i < title_class.length; i++){
    title_class[i].innerText = '안녕하세요'; // class명이 'title' 인 요소들에 문자열이 포함됨.
}

/*
Quest 5.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언, getRowCount() 를 호출하고 반환값을 할당받아 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
row class의 개수는 __개 입니다.
----------
*/
// Answer 5.

// getRowCount 함수 선언.
function getRowCount(){

    // 변수 rowClass를 생성하고 class 명이 'row'인 요소를 찾는 코드 저장.
    var rowClass = document.getElementsByClassName("row");
    // rowClass 의 length를 반환. (class 명이 'row'인 요소의 개수) 
    return rowClass.length;
}
// rowCount 변수를 선언하고 getRowCount 함수 호출
var rowCount = getRowCount();
console.log("rowClass의 개수는 "+ rowCount + " 개 입니다."); // "rowClass의 개수는 4 개 입니다."

/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

// 전역 변수 : 함수를 포함해 스크립트 전체에서 접근이 유효한 변수. 
// 전역 범위 : 젼역 변수에 접근 가능한 범위

// 전역 변수 count 를 생성하고 1을 저장.
var count = 1;

// clear 할 변수로 timer을 생성하고 주기적으로 반복되는 타이머 객체 setInterval 저장.
/* 
// 형태
setInterval(function(){
    console.log("interval-1");
}, 1000);
*/
var timer = setInterval(function loop(){

    // 콘솔에 'hello' 를 출력시키도록함.
    console.log('hello');

    // 타이머를 멈추기 위해 조건문 작성
    // count 값이 10이 되면,
    if (count === 10){
        // (타이머가 발생하면) Interval을 멈춘다.
        clearInterval(timer);
    }
    // 식이 발생하면 count 값이 증가.
    count++;
}, 1000);

/* 
// clear 할 변수가 없어 10 이상으로 출력되어도 멈추지 않음.
setInterval(function loop(){

    console.log('hello');
    
    if (count === 10){
        clearInterval();
    }
    count++;
}, 1000);
*/


/*
// 콘솔 창에 "hello" 가 한 개씩 반복 출력됨.
var count;
function setLoop(){
    console.log("hello");
    if(i < 10){
        setTime();
    }
    count++;
}
function setTime(){
    count = setTimeout(setLoop, 1000);
}
setTime(); */ 



/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

var scroll_id = document.getElementById('scroll');

// element.classList.add(); - class를 추가하는 코드
scroll_id.classList.add('scroll');
// scrollTo(x,y); - 해당 좌표로 스크롤을 이동시키는 BOM 메소드
scroll_id.scrollTo(400,0);

/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.

var art_id = document.getElementById("article");

// firstElementChild - 첫번째 자식 요소
// lastElementChild - 마지막 자식 요소
// classList.add("string"); - 클래스 명 추가
// classList.remove("string"); - 클래스 명 삭제
art_id.firstElementChild.classList.add('red');
art_id.lastElementChild.classList.remove('row');

/*
Quest 9.
1. enterName 이라는 함수를 선언하고 아래와 같이 정의합니다.
2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
입력이 취소되었습니다.
----------
4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), 아래와 같은 문구의 경고창을 띄웁니다.
----------
문자열)
이름을 정확히 입력해주세요.
----------
5. 4(순서) 경우에서 경고창을 확인하면 1(순서) 함수를 다시 호출합니다.
6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7. enterName 함수를 호출합니다.
*/
// Answer 9.

function enterName(){
    var name = prompt('이름을 입력해주세요.');

    if (name === null){
        alert('입력이 취소되었습니다.');
    }
    // 조건문에 typeof name === string 을 써야할 줄 알았는데 적용이 안되고 문자열로 변경하니 적용됨.
    else if(name === ''){
        alert('이름을 정확히 입력해주세요.');
        // 함수를 호출해 이름 입력 창이 다시 뜨도록 한다.
        enterName();
    }
    else{
        // append(); - 컨텐츠를 선택된 요소 내부의 끝 부분에 삽입.
        // prepend() - 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입
        document.body.append(name); // body의 마지막 부분에 삽입됨.
        alert('입력되었습니다.');
    }
}
enterName();
