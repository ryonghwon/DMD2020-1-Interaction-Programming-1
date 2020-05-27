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
// button#btn-student-number 요소 찾아 변수로 할당
var btnSnum = document.querySelector("button#btn-student-number ");
// span#student-number 요소 찾아 변수로 할당
var sNum = document.querySelector("span#student-number")
// 클릭 이벤트 추가
btnSnum.addEventListener('click', function(e){
    sNum.innerText = "21961054";
    alert("학번이 입력되었습니다.");
});
// button#btn-student-name 요소 찾아 변수로 할당
var btnSname = document.querySelector("button#btn-student-name");
// span#student-name 요소 찾아 변수로 할당
var sName = document.querySelector("span#student-name")
// 클릭 이벤트 추가
btnSname.addEventListener('click', function(){
    sName.innerText = "백재원";
    alert("이름이 입력되었습니다.");
});


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
// button#btn-window-size 요소 찾아 변수로 할당
var btnWsize = document.querySelector("button#btn-window-size");
// 클릭 이벤트 추가
btnWsize.addEventListener('click', function(){
    console.log("윈도우 콘텐츠의 영역 width : " + window.innerWidth + "px, height : " + window.innerHeight + "px 입니다.");
});


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
// button#btn-check-id 요소 찾아 변수로 할당
var btnCid = document.querySelector("button#btn-check-id");
// 'user_id' 인 요소의 value 속성값 찾아 변수로 할당
var userIdValue = document.querySelector("input#user_id").getAttribute('value');
// 클릭 이벤트 추가
btnCid.addEventListener('click', function(e){
    // 기본으로 정의된 이벤트 발생 막음
    e.preventDefault();
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + userIdValue.length + " 입니다.");
});


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
// button#btn-cancel 요소 찾아 변수로 할당
var btnCancel = document.querySelector("button#btn-cancel");
// 클릭 이벤트 추가
btnCancel.addEventListener('click', function(e){
    // 기본으로 정의된 이벤트 발생 막음
    e.preventDefault();
    window.location.reload();
});

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
// button#btn-apply 요소 찾아 변수로 할당
var btnApply = document.querySelector("button#btn-apply");
// 클릭 이벤트 추가
btnApply.addEventListener('click', function(e){
    // 기본으로 정의된 이벤트 발생 막음 - 새로고침
    e.preventDefault();
    // 확인창 출력 후 bool형 값 변수 할당
    var btnApplyConf = window.confirm("가입하시겠습니까?");
    // 확인이면
    if (btnApplyConf === true) {
        alert("가입을 환영합니다!");
    }
    // 취소면
    else if (btnApplyConf === false) {
        alert("가입을 취소하였습니다.");
    }
});


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
// button#btn-reset 요소 찾아 변수로 할당
var btnReset = document.querySelector("button#btn-reset");
// 'user_id' 인 요소의 value 속성값 찾아 변수로 할당
var userId = document.querySelector("input#user_id");
// 'user_pass' 인 요소의 value 속성값 찾아 변수로 할당
var userPass = document.querySelector("input#user_pass");

// 클릭 이벤트 추가
btnReset.addEventListener('click', function(e){
    // 기본으로 정의된 이벤트 발생 막음 - 새로고침
    e.preventDefault();
    // 다이얼로그 출력 후 bool형 값 변수 할당
    var btnResetInput = window.prompt('초기화하시려면 100을 입력하세요.');
    // 100을 입력했다면
    if (btnResetInput === "100") {
        // input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화
        userId.removeAttribute('value');
        userPass.removeAttribute('value');
    }
});


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
// button#btn-odd 요소 찾아 변수로 할당
var btnOdd = document.querySelector("button#btn-odd");
// div#odd-result 요소 찾아 변수로 할당
var oddResult = document.querySelector("div#odd-result");
// 클릭 이벤트 추가
btnOdd.addEventListener('click', function(){
    // 다이얼로그 출력 후 bool형 값 변수 할당
    var btnOddInput = window.prompt('숫자를 입력해주세요.');
    // 0부터 해당 숫자까지이므로 i 최대값에 맥시멈 값도 포함
    for (var i = 1; i <= btnOddInput; i++) {
        // 입력한 수 바로 이전 홀수까지는 쉼표 붙여 입력
        // innerText 사용 경우 공백 표현 안돼 HTML 사용
        if (i <= btnOddInput - 2) {
            oddResult.innerHTML += i + ", ";
        }
        // 이외의 경우(마지막)에는 온점 입력
        else {
            oddResult.innerHTML += i + ".";
        }
        i++;
    }
});

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
// button#btn-add-city 요소 찾아 변수로 할당
var btnAddCity = document.querySelector("button#btn-add-city");
// ul#city-list 요소 찾아 변수로 할당
var ulCityList = document.querySelector("ul#city-list");
// 클릭 이벤트 추가
btnAddCity.addEventListener('click', function(){
    // 다이얼로그 출력 후 bool형 값 변수 할당
    var btnAddCityInput = window.prompt('도시명을 입력하세요.');
    // li 요소 새로 생성 후 해당 값 변수 할당
    var ulCityLi = document.createElement("li");
    // 새로 생성한 Li에 입력값 할당
    ulCityLi.innerText = btnAddCityInput;
    // 입력값 생긴 Li를 ul#city-list의 자식으로 맞아주기
    ulCityList.appendChild(ulCityLi);
});


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
// button#btn-color 요소 찾아 변수로 할당
var btnColor = document.querySelector("button#btn-color");
// 클릭한 횟수 저장할 변수 선언 후 초기값 0 할당
var clickNum = 0;
// 클릭 이벤트 추가
btnColor.addEventListener('click', function(){
    // sentence란 이름의 클래스 찾아 변수로 할당
    var PsenColor = document.getElementsByClassName('sentence');
    // console.log(PsenColor); // 배열인지 확인하려고...
    // 클래스는 여러개이므로 배열 형태로 나타나기 때문에 요소 하나하나 적용해줘야 함
    for (var i = 0; i < PsenColor.length; i++) {
        // 빨간색 적용
        PsenColor[i].style.color = "#ff0000";
        // 현재 클릭한 횟수와 동일한 순서값에 있는 배열 요소만 검은색 적용
        PsenColor[clickNum].style.color = "#000000";
    }
    // for문 끝난 후 클릭 횟수 1 증가
    clickNum++;
    // 배열이 한 바퀴 다 돌면
    if (clickNum == PsenColor.length) {
        // 클릭 횟수(배열 요소의 순서값) 초기화
        clickNum = 0;
    }
});


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
// button#btn-go-top 요소 찾아 변수로 할당
var btnGoTop = document.querySelector("button#btn-go-top");
// 클릭 이벤트 추가
btnGoTop.addEventListener('click', function(){
    // 화면 최상단으로 이동
    window.scrollTo(0, 0);
});
