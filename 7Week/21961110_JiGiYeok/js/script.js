/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21961110_지기역";
//document.title = "텍스트"; 를 할시에 문서의 title를 텍스트로 변경하게됩니다.


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
function getSize(){ // getSize 라는 함수 선언

    var window_test = {
        winWidth : window.innerWidth,
        winHeight : window.innerHeight
    }
    // console.log(window_test);
    
    return "윈도우 콘텐츠 영역 width " + window_test.winWidth +"px, height : " + window_test.winHeight + "px 입니다." 
}

var winSize = getSize();
console.log(winSize);


/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
// title.innerText = 'Hello World';
var boxId_Title = document.getElementById("title")
boxId_Title.innerText = 'Hello World';


// console.log(title.innerText);


/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

var boxClass_Title = document.getElementsByClassName("title");
// console.log(document.getElementsByClassName("title")); Class요소들은 배열형태로 출력됨. 따라서 모든 요소들을 불러와 innerText를 해줘야한다는것을 알았습니다.

for(var i = 0; i < boxClass_Title.length;i++){
    boxClass_Title[i].innerText = "안녕하세요.";
}
// boxClass_Title인 모든 요소에게 "안녕하세요" 텍스트를 넣어줍니다.

// console.log(boxClass_Title.innerText);



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
function getRowCount(){ // 함수 getRowCount를 선언합니다.
    var _row = document.getElementsByClassName("row"); // row라는 클래스명을 가진 요소를 _row에 반환합니다.
    return _row.length; //_row 배열의 길이를 반환합니다.
}
var rowCount = getRowCount(); // 함수 getRowCount();의 값을 rowCount에 반환합니다.
console.log("row class의 개수는 " + rowCount + "개 입니다."); // 결과값을 도출합니다.

/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

//타이머 연습. 1초마다 무한정으로 콘솔에 "hello" 출력되는 함수.
//setInterval(function(){console.log("hello")}, 1000);

//
/* setInterval 함수를 이용한 문제풀이.
var count = 1;
function loop(){
    console.log(count + "번째 " + "hello");
    if(count === 10){
        clearInterval(timer);
    }
    count++;
}
var time = 1000;
var timer = setInterval(loop, time);
*/

//setTimeout 함수를 이용한 문제풀이.
var count = 1;

function setLoop(){
    console.log(count + "번째 " + "hello");
    if(count < 10){
        setTime();
    }
    count++;
}
function setTime(){
    setTimeout(setLoop, 1000);
}
setTime();

/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.
/*

// var divEl = document.createElement("div");
// divEl.innerText = "<div>안녕입니다</div>";


var scroll_Class = document.getElementsByClassName("scroll");
//window.scrollTo(0,200);
scroll_Id.scrollLeft(400);
scroll_Class.scrollTop(0);
//console.log(scroll_Class[0].getBoundingClientRect());
*/
var scroll_Id = document.getElementById("scroll"); // Id가 scoll인 요소를 scroll_Id에 반환합니다.
scroll_Id.classList.add("scroll"); //scoll_Id에 scoll이라는 클래스를 추가해줍니다.
scroll_Id.scrollTo(400, 0); // scoll_Id요소의 x좌표를 400만큼 y는 0만큼의 위치로 이동합니다.

/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
var article_Id = document.getElementById("article"); // Id가 article인 요소를 article_Id에 반환합니다.
var article_Id_01 = article_Id.firstElementChild; // article_Id의 첫번째요소를 article_Id_01에 반환합니다.
article_Id_01.classList.add("red"); //article_Id_01에 red라는 클래스를 추가합니다.
article_Id.children[2].classList.remove("row"); // article_Id의 3번째 요소의 row클래스를 삭제합니다.


//console.log(article_Id.firstElementChild); ------x
// article_Id.classList.remove(); -----------------x

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
    
    var name = prompt("이름을 입력해주세요.");
    //console.log(name);
    if(name === null){
        console.log("입력이 취소되었습니다.");
    }
    else if(name === ""){
        alert("이름을 정확히 입력해주세요.")
        console.log("이름을 정확히 입력해주세요.");
        enterName();
    }
    document.write(name);
}
enterName();
// document.body.createElement('p').innerText = enterName();
// document.body.innerHTML = enterName();

