/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = "21961111_최가영";




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

function getSize(){ // getSize function(함수)를 선언합니다.
    winWidth = window.innerWidth; // 'winWidth = 윈도우 콘텐츠 영역의 가로 폭 값'
    winHeight = window.innerHeight; // 'winHeight = 윈도우 콘텐츠 영역의 세로 높이 값'
}
var winSize = getSize(); // winSize 변수 선언를 합니다.
console.log("윈도우 콘텐츠의 영역 width : " + winWidth + "px, height: " + winHeight + "px 입니다."); //출력, 윈도우 콘텐츠의 영역 width : 1155px, height : 865 px 입니다.




/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var idTitle = document.getElementById("title"); 
idTitle.innerText = "Hello World";

/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

var classTitle = document.getElementsByClassName("title"); // 새롭게 classTitle을 변수 선언합니다. getElementsByClassName를 이용해 "title"을 찾아낼 것입니다.
for(var i = 0; i < classTitle.length; i++){ // for문(반복문)을 사용, classTitle 속 length가 i보다 작아질 때까지 계속 반복합니다.
    classTitle[i].innerText = '안녕하세요';
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

function getRowCount(){ // getRowCount function(함수)를 선언합니다.
    var classRow = document.getElementsByClassName('row'); // "row"인 class를 찾기 위해 위와 똑같이, 새롭게 classTitle을 변수 선언합니다. 
    return classRow.length; //반환
}
var rowCount = getRowCount(); //변수 선언을 하고, 위 진행했던 getRowCount를 불러줍니다.
console.log("row class의 개수는 " + rowCount + "개 입니다."); //출력, row class의 개수는 5개 입니다.




/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

var count = 1; // count 변수 선언, 1부터 시작

var timer = setInterval(function () {
  console.log("hello", count);
  //count++; 여기다가 넣으니.. 홀수만 출력되어 밑으로 옮겼습니다.
  if(count == 10){ //10까지
    clearInterval(timer);
    count++;
}
count++;
}, 1000); //1초마다 숫자 하나씩 올라가면서 hello 1, hello 2, hello 3 ... hello 10까지 출력!




/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

var idScroll = document.getElementById("scroll");
idScroll.classList.add("scroll");
idScroll.scrollTo(400, 0); //이미지에 영향이 되었다.





/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.

var idArticle = document.getElementById("article"); 
idArticle.firstElementChild.classList.add("red"); //첫번째 Section 1 박스가 빨간 색으로 변합니다.
var idClassname = idArticle.getElementsByClassName("row");
idArticle.removeChild(idClassname[2]); //세번째 Section 3 박스를 삭제합니다.


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

function enterName(){ //enterName.
    var username = prompt("이름을 입력해주세요.");

    if(username === null){
        console.log("입력이 취소되었습니다."); //취소 누를시 "입력이 취소되었습니다" 출력됩니다.
    }
    else if(username === ""){
        alert("이름을 정확히 입력해주세요."); //이름 입력 없이 확인 누르면 "이름을 정확히 입력해주세요" 출력됩니다.
        enterName();
    }else{
        document.write(username);
    }
}
enterName();
