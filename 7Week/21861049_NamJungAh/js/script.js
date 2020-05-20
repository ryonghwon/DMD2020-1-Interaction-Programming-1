/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title="21861049_남정아";

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


// function getSize(){
//     var winWidth = innerWidth;
//     var winHeight = innerHeight;
//     console.log(innerWidth); 
//     console.log(innerHeight);
// }

// var winSize = new getSize();
// console.log("윈도우 콘텐츠의 영역 widht : "+ winWidth +" px,height : "+ winHeight +" px 입니다");
// //winWidth is not defined => 변수 w를 찾지 못한다..

function getSize(){
    winWidth = innerWidth;
    winHeight = innerHeight;
    console.log(innerWidth); 
    console.log(innerHeight);
}

var winSize = new getSize();
console.log("윈도우 콘텐츠의 영역 widht : "+ winWidth +" px,height : "+ winHeight +" px 입니다");

/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.


//document.getElementById.name["title"]; 콘솔창에 교안을 안보고 쳐봤는데 틀렸다..
document.getElementById("title");
//<div id="title"></div> 을 찾았다!

document.getElementById("title").innerText="helloworld";
//<div id="title">Helloworld</div>


/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

// var classTitle = document.getElementsByClassName("title");
// classTitle.innerText="안녕하세요";
//엥 적용이 안됨

var classTitle = document.getElementsByClassName("title");
console.log(classTitle.length); //3 => title 요소 확인됨

// console.log(classTitle[0]);

// classTitle[0].innerText="안녕하세요"
// //따로 배열을 불러네 innerText를 사용하면 안에 내용이 추가된다

// classTitle[1].innerText="안녕하세요"
// classTitle[2].innerText="안녕하세요"
// console.log(classTitle[1]);
// console.log(classTitle[2]);

//for문 사용
for(var i=0; i<classTitle.length; i++){
    classTitle[i].innerText="안녕하세요"
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
function getRowCount(){
    rowLength = document.getElementsByClassName("row").length;   
}
var rowCount = new getRowCount();
console.log("row class의 개수는 "+rowLength+"개 입니다.");


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

var time = 500;
var timer= setInterval(say, time);
var j=1;
//var j=0; 0으로 하니까 값이 오버로드 +1씩 된다

function say() {
    console.log("hello")
    if(j === 10){
        clearInterval(timer);
    }
    j++;
}

/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

//document.getElementById("Scroll");
//대소문자 판별이 궁금해서 콘솔에 검색해봣더니 null값이 나왔습니다. 대문자 구별을 하는 것을 확인했습니다!


var scroll = document.getElementById("scroll");

console.log(scroll);
//element.classList.add();

//scroll.classList.add(scroll);
//document.getElementById("scroll").classList.add(scroll); ??오류ㅠㅠ
scroll.classList.add("scroll");
//id 안에 class가 생성되는게 아니라 선택된 요소에 class가 추가되는거군요!!
//scroll.pageXOffset(400px, 0px); 안에 단위를 쓰면 오류가 난다

//scroll.pageXOffset(400, 0); 앗 오류
scroll.scrollTo(400,0);

/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
var article = document.getElementById("article");

//element.firstChild();
//article.firstChild(); 엇..안된다 왜지..

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
    var name = prompt("이름을 입력해주세요");
    if(name === null){
        alert("입력이 취소되었습니다.");
    }
    //if (typeof name === "undefined" )
    if(name === ""){
        alert("이름을 정확히 입력해주세요");
        enterName();
    }
console.log(name);
//마지막 부분..?
}

enterName();

