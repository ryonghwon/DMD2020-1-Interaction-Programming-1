/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21961054_백재원"


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
function getSize () {
    // 전역변수로 선언 후 브라우저 가로폭 세로폭 값 할당
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
}
// 함수 호출해주고 반환값 변수 winSize에 할당
var winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width : " + winWidth + " px, height : " + winHeight + " px 입니다.");


/*
Quest 3.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
// id가 title인 요소 반환 후 그 안에 Hello World 문자열 삽입
document.getElementById("title").innerText = "Hello World"; 


/*
Quest 4.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 4.
// 클래스는 같은 이름이 여러 개인게 가능하므로 객체로 반환되기 때문에 변수에 할당 후 객체 내 값을 순서대로 불러줌
var title = document.getElementsByClassName("title");
// for문을 이용해 자동으로 객체 내 모든 값에 텍스트를 추가하도록 함
for (var i = 0; i < title.length; i++)
{
    title[i].innerText = "안녕하세요";
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
// 함수 getRowCount 
function getRowCount () {
    // row 클래스 요소의 개수 반환
    return document.getElementsByClassName('row').length;
}
// 함수 호출하여 반환값 rowCount에 할당
var rowCount = getRowCount();
// 반환값 할당해준 변수 rowCount 입력하여 개수 출력 (getRowCount() 그대로 입력해도 같은 결과 출력)
console.log("row class의 개수는 " + rowCount + "개 입니다.");


/*
Quest 6.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 6.
function helloOutput() {
    console.log("hello " + count + "번");
    // count가 10이 될 때
    if (count === 10)
    {
        // timer가 실행되면 초기화
        clearInterval(timer);
    }
    // 루프 1번씩 돌때마다 count 1씩 증가
    count++;
};
// count 선언 후 초기값 1 할당
var count = 1;
// 1초마다 함수 helloOutput 값 반환
var timer = setInterval(helloOutput, 1000);


/*
Quest 7.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 7.
// classList라는 프로퍼티로 scroll 클래스를 추가
document.getElementById('scroll').classList.add('scroll');
// window(브라우저) 뿐만 아니라 .scrollTo앞에 다른 html요소를 붙여도 해당 요소의 좌표가 이동됨
document.getElementById('scroll').scrollTo(400,0);


/*
Quest 8.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 8.
// row 삭제 시 article 내 row 클래스임을 명시해주기 위해 변수로 지정
var article = document.getElementById('article')
// article의 첫번째 자식 요소(클래스)에 red 추가
article.firstElementChild.classList.add('red');
// 몇 번째 자식요소인지 지정해주기 위해 변수에 담음
var articleChild = article.getElementsByClassName('row');
// 선언해준 변수를 이용하여 세번째 자식 요소(객체 형태)를 반환하여 삭제해줌
article.removeChild(articleChild[2]);


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
    var inputName = window.prompt('이름을 입력해주세요.');
    // inputName이 null이라면 
    // 이전에 넣어본 잘못된 코드 : if (!inputName)
    if (inputName === null)
    {
        console.log('입력이 취소되었습니다.');
    }
    // inputName이 "빈 문자열" 이라면
    else if (inputName === "")
    {
        console.log('이름을 정확히 입력해주세요.');
        enterName();
    }
    // 이외의 inputName의 경우
    else if (inputName)
    {
        // 자동적으로 body 맨 아래부분에 작성됨
        document.write(inputName);
    }
}
enterName()
/* 마지막 9번 문제 해결은 하였는데, 약간 헷갈리는 부분이 있어 질문드립니다. 함수 enterName안의 마지막 else if문 조건에 (inputName)이라고 입력해 여차저차 풀긴 했습니다만
    이게 if문의 조건으로 들어가면 불리언 타입으로 값이 반환되는건지? 궁금합니다. window.prompt()는 문자열 타입으로 반환된다고 생각했는데 if문에 변수 이름만 넣어도
    조건으로써 성립하는 걸 보니 true of false 로도 반환되는 건가 궁금해서요. 아니면 그냥 프롬프트에 어떤 문자열 타입 값이든 입력해도(입력하지 않아도) 참이다 이런 뜻이니까
    결국 else if로 안적고 else로만 적어도 두가지 모두 똑같은 결과가 나오는 형식이 되는건가요?? 답해주세요!!!
*/