/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

// document.title(21961108_조예슬);
// document.title = 21961108_조예슬;
document.title = '21961108_조예슬';


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

function getSize(){
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
}

var winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width : " + winWidth + "px, height : " + winHeight + "px 입니다.")

/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

// spanEl.innerText = "반갑습니다.";


var idTitle = document.getElementById('title');
idTitle.innerText = "Hello World";



/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

// 변수 classTitle을 먼저 선언하고 title이라는 class를 가진 요소들을 찾음.
var classTitle = document.getElementsByClassName('title');

// 아래 식을 사용하면 한 번밖에 안쓰임. 요소들이 아닌 요소에 쓰여지는 것임.
// classTitle.innerText = "안녕하세요.";

// 따라서, for문을 사용하여 (class가 title인) 요소들에 문자열이 포함되게 하였음.
i = classTitle.length;
for(var a = 0; a < i; a++){
    classTitle[a].innerText = "안녕하세요";
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


/* 첫번째 방법 */
// function getRowCount(){
//     var classRow = document.getElementsByClassName('row');
//     var sum = 0;
//     for(var x = 0; x < classRow.length; x++){
//         sum = x;
//     }
//  var Answer = "row class의 개수는 " + sum + "개 입니다."
//  console.log(Answer);
// }
// console.log(getRowCount());


/* 두번째 방법 */

function getRowCount(){
    var classRow = document.getElementsByClassName('row');
    x = classRow.length -1;
    return x;
}
console.log("row class의 개수는 " + getRowCount() + "개 입니다.");


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

var count = 0;

var timer = setInterval(function(){
        console.log("hello", count);
        if(count == 10){
            clearInterval(timer);
        }
        count++;
    }, 1000); 
    




/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

// var divEl = document.createElement("div");
// var idScroll = document.getElementsById("scroll");
// idScroll.ClassList.add('scroll');

var idScroll = document.getElementById('scroll');
idScroll.classList.add('scroll');
// var X = idScroll.pageXOffset;
// var Y = idScroll.pageYOffset;



/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.

var idArticle = document.getElementById("article");
var idArticleFirst = idArticle.firstElementChild;
idArticleFirst.classList.add("red");

var idArticleLast = idArticle.lastElementChild;
idArticle.removeChild(idArticleLast);


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
    //prompt
   var prompt = window.prompt("이름을 입력해주세요.");
    if(prompt === null){
        console.log("입력이 취소되었습니다.");
    }else if(prompt === ""){
        alert('이름을 정확히 입력해주세요.');
    }else{
        document.write(prompt);
    }
    // }else if(prompt == String){
    //     var span = document.createElement("span");
    //     element.innerText = String;
    // }
}
// console.log(enterName());
enterName();

// JavaScript 공간에 새로운 div 요소를 생성.
// var spanEl = document.createElement("span");
// console.log(spanEl);
//<span></span>
// element.innerText = "String";
// 요소 안에 텍스트 기입.
// divEl.innerText = "안녕하세요";
// spanEl.innerText = "반갑습니다.";
// <div>안녕하세요.</div>
// <span>반갑습니다.</span>
