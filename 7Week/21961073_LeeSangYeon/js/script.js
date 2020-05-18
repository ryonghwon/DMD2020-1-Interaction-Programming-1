/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = "21961073_이상연";

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
function getSize(){ // getSize 라는 함수를 선언
    winWidth = window.innerWidth; // 윈도우 콘텐츠 영역의 가로 폭 값
    winHeight = window.innerHeight; // 윈도우 콘텐츠 영역의 세로 높이 값
}
var winSize = getSize();
console.log("윈도우 콘텐츠의 영역  width : " +  winWidth + "px," +  " height: " + winHeight + " px 입니다.");



/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var titleId = document.getElementById('title'); //id부분을 소문자로 적으니 적용되지 않았습니다.
titleId.innerText = 'Hello World';




/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.
// 새로운 변수 titleClass 생성 후, document.getElementsByClassName('title') 지정
var titleClass = document.getElementsByClassName('title');
//var titleClass[0] = document.getElementsByClassName('안녕하세요.'); // error
//titleClass.innerText = '안녕하세요';     
// 페이지에 적용이 되지 않아서 골머리를 앓던 중, length의 l을 L로 작성한 것을 알아 수정 하니 오류 해결.
//for문으로 새로운 변수 i 생성 후 0 지정. i 보다 titleClass.length가 클 때 i는 반복, 작아지면 for문 종료
for(var i = 0; i < titleClass.length; i++){
    titleClass[i].innerText = '안녕하세요'; //'title' -> '안녕하세요' 로 변경.
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
function getRowCount(){ // getRowCount 이라는 함수를 선언
     var rowClass = document.getElementsByClassName('row'); //'row' 라는 이름을 가진 class 를 찾고
     //return rowClass;
     return rowClass.length; //요소의 개수이니 뒤에 length를 붙여줘야 반환된다. // 요소의 개수를 반환
}
var rowCount = getRowCount(); // rowCount 변수를 선언, getRowCount() 를 호출
console.log("row class의 개수는 " + rowCount + "개 입니다.") // console.log에 "row class의 개수는 5개 입니다." 출력


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.
   
var count = 1;
// 전역범위란, 전역 변수에 접근할 수 있는 범위를 전역 범위
var _timer = setInterval(function(){
    // console에 hello가 출력되지만 번호가 함께 출력되는 것이 아닌 좌측에 작게 카운트 되다 10에서 멈춘다.
    // console.log('hello') 

    // console.log에 count를 추가하여 콘
    console.log('hello', count); 
    // if(i == 10){   //수업시간에 적었던 것 그대로 붙여넣으니 적용이 안 되는 것이었다. 
    // i라는 변수는 어디에도 없기 때문에 건너 뛰고 count만 진행된다.
    if( count == 10){  
        clearInterval(_timer)}
        count++;

}, 1000); // 1초마다 코드 실행.

//function setInterval(){ // 참고 식
   // console.log("Loop");
    //if(i < 10){
       // setInterval();
    //}
    //i++;
    //setInterval(function()
//{console.log("hello");}, 1000);
/*
var _timer;
i = 0;
function setLoop(){
    console.log("Loop");
    if(i < 10){
        setTime();
    }
    i++;

    */


/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.

// window 객체의 메서드 중 하나. 문서를 해당 좌표로 스크롤 이동.
// window.scroolTo(x, y); //숫자로 입력ㄱ
window.scroolTo(0, 0); // 문서를 최상단으로 이동
//window.scroolTo(0, 500);  - document에 적용해보자!
*/
// Answer 7.
var scrollId = document.getElementById('scroll');
//document.scrollTo(0, 500);
//요소의 위치...? 자식요소가 없으니 ElementChild는 생략될 것으로 예상됨.
scrollId.classList.add('scroll');
scrollId.scrollTo(400, 0);


//element.classList
//element 객체의 class 속성의 값을 담고 있는 DOMTokenList 객체를 반환한다.




/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
// 교안을 보고 풀어보았습니다.
// 아무 변화가 없었던 이유 : getElementById()의 () 안에 값을 입력해주지 않았기 때문이다.
// 아무 변화가 없었던 이유2 : 식 뒤에 ;을 붙이지 않았다. 아직도 이런 실수를...
// 오류가 난 이유 : getElementById() 앞에 document.를 입력해주지 않아서.. error
// LastElementChild.classList 오류가 뜸.... - last로 수정. 

var articleId = document.getElementById('article');
articleId.firstElementChild.classList.add('red');
articleId.lastElementChild.classList.remove('row');


// element.firstElementChild element - 객체의 첫번째 element 객체를 반환한다.
// element.lastElementChild element - 객체의 마지막 element 객체를 반환한다

// element.classList.add();
// element.classList.add(class1, class2, ...);
// element 객체의 classList 객체에 하나 이상의 class 를 추가하는 메서드.
// element.classList.remove();
// element.classList.remove(class1, class2, ...);
// element 객체의 classList 객체에 하나 이상의 class 를 삭제하는 메서드.



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

// 9번은 교안을 봐도 잘 모르겠어서 비워둡니다... 

function enterName(){ // enterName 이라는 함수를 선언
    var realName = prompt('이름을 입력해주세요.'); // '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력

    if(realName === null){
        console.log("입력이 취소되었습니다."); //console에 "입력이 취소되었습니다."출력
    }
    else if(realName === ""){
        console.log("이름을 정확히 입력해주세요.");
        enterName();// console에 "입력을 정확히 입력해주세요."출력
    }

        else{
         document.write(realName);
        }
    }
    enterName();

// document.write();
// document.write(‘hello’);
// document 하위 객체 중 body 에 전달된 String 문자열을 출력한다.

