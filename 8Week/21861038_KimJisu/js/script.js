/*
Quest 1.
1. button#btn-student-number 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 자신의 학번이 span#student-number 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
학번이 입력되었습니다.
----------
3. button#btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
4. 3(순서) 이벤트 호출 시 자신의 이름이 span#student-name 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
이름이 입력되었습니다.
----------
*/
// Answer 1.
var bStuNum = document.querySelector("button#btn-student-number"); // button#btn-student-number 요소 불러오기
bStuNum.addEventListener("click", ClickNum); // bbStuNum 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickNum() // 클릭 이벤트(함수) 내용
{
    // 자동으로 입력하는 방법
    //var sStuNum = document.querySelector("span#student-number"); // span#student-number 요소 불러오기
    //sStuNum.innerText = "21861038"; // sStuNum 에 innerText 변수를 통해 학번 추가
    //alert("학번이 입력되었습니다."); // 학번이 입력되는 순간 "학번이 입력되었습니다." 이 쓰인 경고창 출력
    
    // 직접 입력하는 방법
    var proStuNum = prompt("학번입력"); // 직접 메세지를 입력하는 다이얼 로그 prompt 함수 창을 출력
    var sStuNum = document.querySelector("span#student-number"); // span#student-number 요소 불러오기
    sStuNum.innerText = proStuNum; // sStuNum 에 innerText 변수를 통해 proStuNum 에 적은 학번 추가
    alert("학번이 입력되었습니다."); //  // 학번이 입력되면 "학번이 입력되었습니다." 이 쓰인 경고창 출력
}

var bStuName = document.querySelector("button#btn-student-name"); // button#btn-student-name 요소 불러오기
bStuName.addEventListener("click", ClickName); // bStuName 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickName() // 클릭 이벤트(함수) 내용
{
    var sStuName = document.querySelector("span#student-name"); // span#student-name 요소 불러오기
    sStuName.innerText = "김지수"; // sStuName 에 innerText 변수를 통해 이름 추가
    alert("이름이 입력되었습니다."); // 이름이 입력되는 순간 "이름이 입력되었습니다." 이 쓰인 경고창 출력
}



/*
Quest 2.
1. button#btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 2.
var bWinSize = document.querySelector("button#btn-window-size"); // button#btn-window-size 요소 불러오기
bWinSize.addEventListener("click", ClickSize); // bWinSize 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickSize() // 클릭 이벤트(함수) 내용
{
    //window.innerWidth; // 웹 너비 값
    //window.innerHeight; // 웹 높이 값
    
    // 위의 두 가지의 코드를 바로 적용해 console 창에 문자열 결과값으로 출력 
    console.log("원도우 콘텐츠의 영역 width : " + window.innerWidth + " px, " + "height : " + window.innerHeight + " px 입니다.");
}



/*
Quest 3.
1. button#btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
input#user_id - value 속성 값의 문자열 개수는 ____ 입니다.
----------
*/
// Answer 3.
var bCheck = document.querySelector("button#btn-check-id"); // button#btn-check-id 요소 불러오기
bCheck.addEventListener("click", ClickCheck); // bCheck 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickCheck() // 클릭 이벤트(함수) 내용
{
    var idUser = document.getElementById("user_id"); // getElementById 를 통해 user_id 인 요소 찾기
    //idUser.value;
    // value 속성 값 가져오는 두 가지 방법
    // 첫번째 변수명.setAttribute("value", "값");
    // 두번째 변수명.value = "value 값"; 이 있고 두번째 방법을 사용 

    // 문제 2번처럼 코드를 바로 적용해 console 창에 문자열 결과값으로 출력
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + idUser.value.length + "개 입니다.");
}



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var bCancel = document.querySelector("button#btn-cancel"); // button#btn-cancel 요소 불러오기
bCancel.addEventListener("click", ClickCancel); // bCancel 에 addEventListener 함수를 통해 클릭 이벤트 추가
/*
function ClickCancel()
{
    preventDefault(); 
    location.reload();
}
여기서 알게 된 것은 preventDefault 함수가 꼭 있어야 하는 것...
없이 하니까 계속 오류가 났음..... 그래서 클릭 이벤트에 매개변수를 추가해서 preventDefault 함수를 써줌
*/
function ClickCancel(event) // 클릭 이벤트(함수) 내용, 매개변수 event 를 넣어줌
{
    event.preventDefault(); // 기존 이벤트를 발생하지 않게 해주는 preventDefault 함수
    location.reload(); // 버튼을 눌렀을 때 웹이 새로고침 됨
}



/*
Quest 5.
1. button#btn-apply 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 환영합니다!
----------
4. 사용자가 취소를 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 취소하였습니다.
----------
*/
// Answer 5.
var bApply = document.querySelector("button#btn-apply"); // button#btn-apply 요소 불러오기
bApply.addEventListener("click", ClickApply); // bApply 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickApply(event) // 클릭 이벤트(함수) 내용, 매개변수 event 를 넣어줌
{
    event.preventDefault(); // 기존 이벤트를 발생하지 않게 해주는 preventDefault 함수
    var yesno = confirm("가입하시겠습니까?"); // 확인과 취소 버튼이 있는 다이얼 로그 confirm 함수 창을 출력
    if(yesno) // 확인 버튼을 눌렀을 때, yesno : true
    {
        alert("가입을 환영합니다!"); // "가입을 환영합니다!" 을 경고창으로 출력
    }
    else // 취소 버튼을 눌렀을 때, !yesno : false
    {
        alert("가입을 취소하였습니다."); // "가입을 취소하였습니다." 을 경고창으로 출력
    }
}



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.



/*
Quest 7.
1. button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
----------
메시지)
문자열 연산 예시)
2(순서) 다이얼로그창에 입력한 숫자가 10인 경우 : 1, 3, 5, 7, 9.
2(순서) 다이얼로그창에 입력한 숫자가 5인 경우 : 1, 3, 5.
----------
*/
// Answer 7.



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var bCity = document.querySelector("button#btn-add-city"); // button#btn-add-city 요소 불러오기
bCity.addEventListener("click", ClickCity); // bCity 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickCity(event) // 클릭 이벤트(함수) 내용, 매개변수 event 를 넣어줌
{
    event.preventDefault(); // 기존 이벤트를 발생하지 않게 해주는 preventDefault 함수
    var proCity = prompt("도시명을 입력하세요"); // 직접 메세지를 입력하는 다이얼 로그 prompt 함수 창을 출력
    var ulCity = document.querySelector("ul#city-list"); // ul#city-list 요소 불러오기
    //ulCity.li.innerText = vCity; // 바로 될 줄 알고 썼음... 결과적으로 안됨...

    // ul#city-list 자식인 li 요소에 도시명 문자열이 추가 임으로
    var liCity = document.createElement("li"); // createElement 를 통해 li 추가
    ulCity.appendChild(liCity); // ul#city-list 에 새로운 li 을 추가하기 위해 appendChild 함수 사용
    liCity.innerText = proCity; // liCity 에 innerText 변수를 통해 proCity 에 적은 도시 추가
}



/*
Quest 9.
1. button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 1(순서) 이벤트 호출 시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
----------
* 예시 - p요소의 전체 개수가 4개일 때, button#btn-color 클릭 횟수에 따른 p 요소 스타일 변경

횟수 1 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 2 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
횟수 3 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'black', p요소(3) - 'red'
횟수 4 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'black'
횟수 5 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 6 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
...
...
----------
*/
// Answer 9.



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var bGotop = document.querySelector("button#btn-go-top"); // button#btn-go-top 요소 불러오기
bGotop.addEventListener("click", ClickGoTop); // bGotop 에 addEventListener 함수를 통해 클릭 이벤트 추가
function ClickGoTop(event) // 클릭 이벤트(함수) 내용, 매개변수 event 를 넣어줌
{
    event.preventDefault(); // 기존 이벤트를 발생하지 않게 해주는 preventDefault 함수
    window.scrollTo(0, 0); // scrollTo 함수에는 x, y 값이 들어감, 0, 0 일때 문서 최상단로 이동 가능
}