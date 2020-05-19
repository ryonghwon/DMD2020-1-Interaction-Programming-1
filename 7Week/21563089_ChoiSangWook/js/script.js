/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = "21563089_최상욱"

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

//1.
function getSize()
{    //2.
     winWidth = window.innerWidth;
     winHeight = window.innerHeight;
}
//3.
var winSize = getSize();
console.log("윈도우 컨텐츠 영역 whidth :" + winWidth +"px," + "height :" + winHeight + "px 입니다" );


/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.


var title_ = document.getElementById("title");
title_.innerText = "Hellp World"; // 확인



/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

// var title_1 = document.getElementsByClassName("title");
// title_1.innerText = "안녕하세요"; // 왜 적용이 안될까
// 엘리먼트를 다시보니 class 가 title 인 요소들중 가장 첫번째 class에 적용이 되어있다.

// var title2 = document.getElementsByClassName("title");
// console.log(title2); // 총 3개(length = 3) 이고 엘리먼트 찾기를 하면 배열값으로 반환되기때문에 array를 써보자

// var title2 = document.getElementsByClassName("title");
// title2[2].innerText = "안녕하세요"
// console.log(title2); // title 이름을 가진 class 중 3번째 값이 안녕하세요로 변했다. 반복문으로 하나씩 해야할것같다.

//var title2 = document.getElementsByClassName("title");
//title2[2].innerText = "안녕하세요"
// title 이름을 가진 class 중 3번째 값이 안녕하세요로 변했다. 반복문으로 하나씩 해야할것같다.

var title2 = document.getElementsByClassName("title");
for(var i = 0; i <title2.length; i++)
{
     title2[i].innerText = "안녕하세요.";
} // 3개 class 모두 "안녕하세요"가 적용이 되었는데 오류가 뜬다.
 // 조건문 중 (var i = 0; i <= title2.length; i++) i가 title2의 길이 값(3)이 같거나 크다라고 하면 
// 배열 값 기준으로 0,1,2,3 총 네개가 되어 오류 가 났었음 title 이름을 가진 class는 세개 밖에 없는데



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
// function getRowCount()
// {
//      //반환시킬 변수 새엇ㅇ
//      var count = document.getElementsByClassName("row");
//      count = count.lenth;
// }
// var rowCout = getRowCount();
// console.log(rowCout); 오류가 난다... 길이부터 찾아보자 리턴값을 써야할듯


//var count = document.getElementsByClassName("row");
//console.log(count.length); // 길이는 5 이고 함수 안에 넣어서 반환 시켜보자


function getrowcount()
{
     var count = document.getElementsByClassName("row");
     return count.length;
}
var rowcount = getrowcount(); //변수 생성 후 길이 값을 반환 받아 넣고
console.log(rowcount); // 출력 : 5

/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

// setInterval(function(){
//       console.log("interval-1");
//       }, 1000);
//       setInterval(call(hander), time) //- 1000/1초(ms)
// var count_;
// setInterval(function()
//      {
//      console.log("Hello,",count_);
//      }, 1000); // 1초 마다 뜨는지 확인 해 보자 

// window.setInterval();
//  var count_;
//  function setInterval(){
//      count_ = i; 
//      console.log("hello",count_);
//       if(i === 10){
//            clearInterval(timer); // 11되면 실행이 끝
//       }
//       i++; // 기준이 계속 증가 
//      } // 오류도 아니고 콘솔창에 뜨질 않음 잘못적은듯하다.

//  var count_ = 0;
//  setInterval(function()
//       {
//       console.log("Hello,",count_);
//       } count_++, 1000); // 1초 마다 뜨는지 확인 해 보자 



 var count_ = 0;
 function loop(){
      console.log("Hello",count_);
      if(count_ === 10)
      {
     clearInterval(timer); // 10되면 실행이 끝
      }
      count_++; // 기준이 계속 증가 
 }
 var timer = setInterval(loop,1000); 
 // 1초마다 loop 함수 호출 count_가 10이 되면 타이머 끄읕
 // 이건 다시 교수님한테 설명들어야 제대로 이해할것같다.

/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

//아이디 부터 찾아보자
var scroll1 = document.getElementById("scroll");
//클래스 추가
scroll1.classList.add("scroll");
//html scroll 클래스의 위치값 변경
window.scroll(400,0);

/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
// var article1 = document.getElementById("article");
// article1.children.add("red"); // 오류

var article1 = document.getElementById("article");
//article1.firstElementChild.add("red"); // 오류
//article1.classlist.firstElementChild.add("red"); // 오류
//article1.firstElementChild.classlist.add("red"); // 오류 classlist 에서 l 을 대문자 L로 써야했다..
article1.firstElementChild.classList.add("red");
article1.lastElementChild.classList.remove("row"); // 마지막 자식요소 삭제

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

function enterName()
{
     //window.prompt("이름을 입력해주세요"); // 시스템 다잉얼로그 창 출력
     var name1 = prompt("이름을 입력해주세요");
     //console.log(name1); // 취소 null
     //console.log(name1); // 확인 미입력 언디파인드
     if(name1 == null)
     {
          console.log("입력이 취소되었습니다.");
     }
     // else if(name1 == undefined)
     // {
     //      console.log("이름을 정확히 입력해주세요.");
     // }
     else if(name1 == "")
     {
          window.alert("이름을 정확히 입력해주세요.")
          entername();
     }
     else
     {
          //document.body(name1); //문자열 값이 index에 작성됨!.... 오류가 뜬다.
          //document.body.appendChild(name1); 오류가 뜬다. appendChild 에 대해 찾아보쟈ㅑ
          //appendChild(name1)를 사용하려면 매개변수와 같은 엘리먼트가 필요하다고한다.
          //이해는 잘 안가지만 수업 할때 다시 들어봐야겠다.
          //<script type="text/javascript" src="./js/script.js"></script> "입력값 "라고 추가가 돼 있다.
          document.body.append(name1);
     }
}

enterName();
