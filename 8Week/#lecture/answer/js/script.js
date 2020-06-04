/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "20200001_김용원"; // set.


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
function getSize() {
    var winWidth = window.innerWidth; // 브라우저 윈도우의 가로 너비.
    var winHeight = window.innerHeight; // 브라우저 윈도우의 세로 높이.
    return { "winWidth" : window.innerWidth, winHeight : winHeight } // 함수 호출 시 객체 반환.
    console.log("함수 반환 이후 코드는 동작하지 않음.");
}
var winSize = getSize(); // 함수에서 반환된 객체가 값으로 할당.
// console.log(winSize);
var result = "윈도우 콘텐츠의 영역 width : " + winSize.winWidth + " px, height : " + winSize["winHeight"] + " px 입니다.";
console.log(result);


/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEl = document.getElementById("title");
titleEl.innerText = "Hello World"; // 요소에 텍스트만 기입
titleEl.innerHTML = "Hello World"; // 요소에 텍스트 기입
titleEl.innerHTML = "<span><b>Hello World</b></span>"; // 요소에 HTML 형식의 텍스트 기입.

var html = "";
html += "<div class=\"class\">";
html +=     "<span>";
html +=         "안녕하세요";
html +=     "</span>";
for(var i = 0; i < 5; i++) {
    html += "<span>";
    html +=     "안녕하세요" + i;    
    html += "</span>";
}
html += "</div>";
titleEl.innerHTML = html;
// console.log(html);

// var spanEl = document.createElement("span");
// spanEl.innerText = "Hello World";
// titleEl.appendChild(spanEl);


/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.
// id 는 문서에서 오로지 1개만 존재 가능.
// class 는 문서에서 한개 이상 존재 가능.
var classEls = document.getElementsByClassName("title"); // 찾아온 클래스 요소들이 배열로 반환.
// console.log(classEls);
// getElements~ 로 찾아온 반환 요소들에 접근하기 위해서는 반복문을 사용해야 함.
for(var i = 0; i < classEls.length; i++) {
    var classEl = classEls[i]; // 각 요소 노드 접근.
    classEls[i].innerText = "안녕하세요."; // 새로운 문자열이 요소에 기입.
    classEls[i].innerHTML = "안녕하세요.";
    classEl.innerText = "안녕하세요.";
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
function getRowCount() {
    var rowEls = document.getElementsByClassName("row");
    var rowCount = rowEls.length;
    return rowCount;
}
var rowCount = getRowCount();
// console.log(rowCount);
var result = "row class의 개수는 " + rowCount + "개 입니다.";
console.log(result);


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.
var _count = 0;
var _time = 1000;
function onCount() { // 타이머 callback 에 해당하는 핸들러 정의
    _count++; // count 변수에 + 1 연산.
    console.log("hello", _count);
    if(_count >= 10) {
        clearInterval(timer); // 타이머의 초기화.
    }
    // clearInterval(timer);
}
// var timer = setInterval(onCount, _time);
// var timer = setInterval(function() {
//    code...
// }, 1000);
// setInterval(callback, time);
// time - 1000 : 1초, 10000 : 10초 ms 단위



/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.
var scrollEl = document.getElementById("scroll");
scrollEl.classList.add("scroll");
setTimeout(function() {
    scrollEl.scrollTo(400, 500);
}, 10); // index.html 이 로드된 후 스크롤 이동이 되지 않을 수 있기 때문에 약간의 딜레이를 주는 방법.



/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다. - 0
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다. - 2
*/
// Answer 8.
var articleEl = document.getElementById("article");
var rowEls = articleEl.getElementsByClassName("row");
rowEls = articleEl.querySelectorAll(".row");
// console.log(rowEls);
rowEls[0].classList.add("red"); // 클래스를 추가하는 방법.
articleEl.removeChild(rowEls[2]); // 자식 요소를 삭제하는 방법.



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
function enterName() {
    var name = prompt("이름을 입력해주세요.");
    // console.log(name);
    if(name === null) {
        console.log("입력이 취소되었습니다.");
        return; // 이후의 코드가 동작하지 않도록 반환.
    }
    if(name === "") { // 입력창에 빈 문자열 값이 있는 경우.
        alert("이름을 정확히 입력해주세요.");
        enterName();
    }else{
        // 입력창에 문자열 값이 있는 경우.
        document.write(name); // body 요소의 마지막 부분에 문자열 출력.
    }
}
enterName();