/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

// document.title 속성으로 문서의 제목을 가져오거나 변경할 수 있다.
document.title = "21861016_김민지";


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

// getSize 라는 함수 선언.
function getSize (){
    // window.innerWidth는 윈도우 브라우저 화면의 가로 너비를 의미.
    winWidth = window.innerWidth;
    // window.innerHeight는 윈도우 브라우저 화면의 세로 높이를 의미.
    winHeight = window.innerHeight;
}

// winSize 변수를 선언하고 getSize() 호출.
var winSize = getSize();

// 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성.
// 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
// 출력 결과. 
// 윈도우 콘텐츠의 영역 width : 1920 px, height : 969 px 입니다.
console.log("윈도우 콘텐츠의 영역 width : " + winWidth + " px, height : " + winHeight + " px 입니다.");


/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

// id 가 'title'인 요소에 접근하기 위해 getElementById();를 사용한다.
// getElementById();는 괄호 안에 해당하는 id 요소에 접근하는 함수.
// element = document.getElementById(id); 형식.
var id_title = document.getElementById('title');

// 'Hello World' 문자열이 포함되도록 작성.
// 요소 안에 텍스트 기입.
// element.innerText = 'String'; 형식.
id_title.innerText = 'Hello World';


/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.

// class는 id와는 달리 전달인자의 값과 동일한 class 이름의 요소들을 반환.
// element = document.getElementsByClassName(class); 형식.
// getElementsByClassName()는 반환되는 객체가 복수일 수 있으므로 배열(복수의 목록)로 반환하여, 원소 순서에 따라 요소를 검색할 수 있다.
// [element, element, ..., element] 배열
var class_title = document.getElementsByClassName('title');

// for문을 사용해 클래스 이름이 title인 원소 개수만큼 반복되도록 한다.
// 변수 class_title에는 title이라는 class명을 가진 객체가 배열의 형태로 들어간다.
// 변수 a는 초기값을 0으로 설정하며 배열의 인덱스는 0부터 시작하기 때문에 class_title 배열의 길이보다 작을 때 까지 for 반복문이 진행되고, 후위증가로 1씩 증가한다.
for (var a = 0; a < class_title.length; a++){
    // class_title의 인덱스를 활용하고 '안녕하세요.' 문자열이 포함되도록 한다.
    // 요소 안에 텍스트 기입.
    // element.innerText = 'String'; 형식.
    class_title[a].innerText = '안녕하세요.';
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

// getRowCount 라는 함수 선언.
function getRowCount (){
    // 'row' 라는 이름을 가진 class 를 찾도록 한다.
    var class_row = document.getElementsByClassName('row');
    // 요소의 개수를 반환.
    return class_row.length;
}

// rowCount 변수를 선언하고 getRowCount()를 호출.
var rowCount = getRowCount();

// 아래와 같이 console 에 출력되도록 작성한다.
// row class의 개수는 __개 입니다.
// 출력 결과. row class의 개수는 5개 입니다.
console.log("row class의 개수는 " + rowCount + "개 입니다.");


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.

// 전역 범위에 count 변수를 생성.
// count는 출력 번호를 출력하기 위해 초기값을 1으로 한다.
var count = 1;

// 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성한다.
// setInterval()는 일정 시간 간격으로 함수가 주기적으로 실행.
var timer = setInterval(function(){
    // 'hello' 라는 문자열과 출력 번호를 함께 출력.
    console.log('hello', count);
    // if문을 활용해 출력 번호가 10번이 되면 해당 기능이 실행되지 않도록 작성한다.
    if(count == 10){
        // 타이머가 발생되면 초기화.
        // 괄호 안에 아무것도 적지 않을 경우 함수가 계속 실행된다.
        clearInterval(timer);
    }
    // count++는 1씩 증가.
    // 1초마다 코드 실행.
    count++;}, 1000);


/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.

// id 가 'scroll'인 요소에 접근하기 위해 getElementById();를 사용한다.
var id_scroll = document.getElementById('scroll');

// 'scroll' 이라는 class 를 추가한다.
// element 객체의 classList 객체에 하나 이상의 class 를 추가하는 메서드.
// element.classList.add();
id_scroll.classList.add('scroll');

// 위치를 x : 400px, y : 0px 로 좌표이동한다.
// element.scrollTo(x, y);
// 단위(px) 함께 작성 시 오류 발생.
id_scroll.scrollTo(400, 0);

/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.

// id 가 'article'인 요소에 접근하기 위해 getElementById();를 사용한다.
var id_article = document.getElementById('article');

// element.firstElementChild는 element 객체의 첫번째 element 객체를 반환한다
// 요소의 자식중 첫번째 요소에 'red' 라는 class 를 추가한다.
id_article.firstElementChild.classList.add('red');

// 요소의 자식 중 세번째 요소(.row)를 삭제한다.
// id 가 'article'인 요소에서 'row'라는 class를 가진 요소에 접근.
var class_row = id_article.getElementsByClassName("row");

// element 노드의 자식 노드들 중 node 를 삭제한다
// element.removeChild(node)
// row라는 class 이름을 가진 요소중 세번째 요소를 삭제한다.
// 인덱스는 0부터 시작하는 것을 유의할 것.
id_article.removeChild(class_row[2]);



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

// enterName 이라는 함수를 선언.
function enterName(){
    // '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 시스템 다이얼로그창을 출력.
    var name = prompt('이름을 입력해주세요.');
    
    // 사용자가 취소를 누른 경우 진행.
    if (name == null){
        // console 에 출력되도록 작성.
        console.log("입력이 취소되었습니다.");
    }
    // 사용자가 문자를 입력하지 않고 확인을 클릭할 경우 진행.
    else if (name == ""){
        // 경고창을 띄운다.
        alert("이름을 정확히 입력해주세요.");
        // 경고창을 확인하면 1(순서) 함수를 다시 호출한다.
        enterName();
    }
    // 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우 진행.
    else{
        // 입력된 사항을 body(화면)의 마지막 부분에 출력.
        // document 하위 객체 중 body 에 전달된 String 문자열을 출력한다.
        document.write(name);
    }
}
// enterName 함수를 호출한다.
enterName();