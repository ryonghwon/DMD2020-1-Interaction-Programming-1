/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
//console.log(document.title); // 7Week
document.title = "21861038_김지수";
//console.log(document.title); // 21861038_김지수 출력



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
function getSize()
{
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
}
var winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width : " + winWidth +  "px, height : " + winHeight + "px 입니다.");



/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var iTitle = document.getElementById("title");
iTitle.innerText = "Hello World";
console.log(iTitle); 



/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.
var cTilte = document.getElementsByClassName("title")
//cTilte.innerText = "안녕하세요.";
//console.log(cTilte[0]); // 안녕하세요. 가 넣어지지 않음...
for(var i = 0; i < cTilte.length; i++) 
{
    // 이렇게 배열 단위로 되어있으면 각 배열마다 넣어주어야 함.
    cTilte[i].innerText = "안녕하세요.";
}
console.log(cTilte);



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
function getRowCount()
{
    var cRow = document.getElementsByClassName("row");
    return cRow.length; // cRow의 개수를 반환.
}
var rowCount = getRowCount();
//console.log("row class의 개수는 " + cRow + "개 입니다.");
// cRow 가 아닌 getRowCount 를 호출하고 반환값을 할당받은 rowCount 를 써야함.
console.log("row class의 개수는 " + rowCount + "개 입니다."); // 5



/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 
함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.
var count = 0;
function loop()
{
    console.log("hello" + (count + 1));
    if(count === 9) // count 의 값이 0부터 시작함으로 9로 설정함.
    {
        // count 가 9와 일치할 때 변수 timer 를 멈춤.
        clearInterval(timer); 
    }
    count++;
}
// (loop 함수 호출,  1초마다);
var timer = setInterval(loop, 1000);



/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.
var idScroll = document.getElementById("scroll");
idScroll.classList.add("scroll"); // classList.add 를 통해 "scroll" 이라는 class 추가
//console.log(idScroll); // 이미지에 스크롤이 생김
idScroll.scrollTo(400, 0);



/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
var iArticle = document.getElementById("article");
//iArticle.firstElementChild.add("red"); 
//iArticle.lastElementChild.removeChild(); // 둘다 바로 실행이 안 됨. -> 변수 사용
var iArticleF = iArticle.firstElementChild; // 변수 생성 iArticleF, iArticle 의 firstElementChild 을 대입
iArticleF.classList.add("red"); // classList.add 를 통해 "red" 이라는 class 추가
var iArticleL = iArticle.lastElementChild; // 변수 생성 iArticleL, iArticle 의 lastElementChild 을 대입
iArticle.removeChild(iArticleL); // removeChild 를 통해 iArticle 의 삭제



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
    var name = prompt("이름을 입력해주세요."); 
    if(name === null) // 아무것도 적지 않고 취소를 눌렀을 때
    {
        console.log("입력이 취소되었습니다.");
    }
    else if(name === "") // 아무것도 적지 않고 확인을 눌렀을 때
    {
        alert("이름을 정확히 입력해주세요.");
        enterName(); // 다시 이름 입력창 호출
    }
    // 6, 7 은 이해하지 못했습니다...ㅠ.ㅠ
}
enterName();