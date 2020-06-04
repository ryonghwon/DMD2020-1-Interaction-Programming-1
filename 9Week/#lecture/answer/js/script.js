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
var btnStudentNumberEl = document.querySelector("button#btn-student-number");
btnStudentNumberEl = document.getElementById("btn-student-number");
function onClickBtnStudentNumber(e) { // 핸들러(handler) 정의.
    e.preventDefault(); // 요소가 가지고 있는 기본 이벤트 동작을 방지.
    // console.log(e); // 이벤트 정보에 대한 객체(내장 매개변수 객체)
    // 클릭 이벤트가 발생되면 코드가 동작.
    var spanStudentNumberEl = document.querySelector("span#student-number");
    spanStudentNumberEl.innerText = "20200001";
    alert("학번이 입력되었습니다.");
}
btnStudentNumberEl.addEventListener("click", onClickBtnStudentNumber);

var btnStudentNameEl = document.querySelector("button#btn-student-name");
function onClickBtnStudentName(e) {
    e.preventDefault();
    var spanStudentNameEl = document.querySelector("span#student-name");
    spanStudentNameEl.innerHTML = "<b>김용원</b>";
    alert("이름이 입력되었습니다.");
}
btnStudentNameEl.addEventListener("click", onClickBtnStudentName);


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
var btnWinSizeEl = document.querySelector("button#btn-window-size");
function onClickBtnWinSize(e) {
    e.preventDefault();
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var result = "윈도우 콘텐츠의 영역 width : " + winWidth + "px, height : " + winHeight + "px 입니다.";
    console.log(result);
}
btnWinSizeEl.addEventListener("click", onClickBtnWinSize);



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
var btnCheckIdEl = document.querySelector("button#btn-check-id");
function onClickBtnCheckId(e) {
    e.preventDefault();
    var userIdEl = document.getElementById("user_id");
    var value = userIdEl.value; // input 요소에서 value 값을 찾는 걸 주로 사용되기 때문에 해당 방법으로 찾을 수 있다. - 현재 input 에서 값이 변경되면 해당 값을 반환.
    value = userIdEl.getAttribute("value"); // 문서 속성에 기입된 값을 반환.
    // console.log(value.length); // 문자열의 개수 구하기.
    var max = value.length;
    var result = "input#user_id - value 속성 값의 문자열 개수는 " + max + " 입니다.";
    console.log(result);
}
btnCheckIdEl.addEventListener("click", onClickBtnCheckId);


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancelEl = document.querySelector("button#btn-cancel");
function onClickBtnCancel(e) {
    e.preventDefault();
    // window.location.reload();
    location.reload(); // 현재 문서를 새로 고침.
}
btnCancelEl.addEventListener("click", onClickBtnCancel);


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
var btnApplyEl = document.querySelector("button#btn-apply");
function onClickBtnApply(e) {
    e.preventDefault();
    var isApply = confirm("가입하시겠습니까?");
    console.log(isApply);
    if(isApply) { // true 인 경우. (확인)
        alert("가입을 환영합니다!");
    }else{ // false 인 경우. (취소)
        alert("가입을 취소하였습니다.");
    }
    /*
    // (Boolean일 때 조건문 표기법)
    if(!isApply) { // false.
    }else{ // true.
    }
    */
}
btnApplyEl.addEventListener("click", onClickBtnApply);



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnResetEl = document.querySelector("button#btn-reset");
function onClickBtnReset(e) {
    e.preventDefault();
    var number = prompt("초기화하시려면 100을 입력하세요.");
    // prompt - 취소 : null, 확인 : 현재 입력된 문자열 값. // 데이터 타입이 무조건 문자열.
    // if(number == 100) { // 문자열 100 이라도 true 가 됨.
    // }
    // if(number === 100) { // false - prompt 의 숫자가 100 이지만 문자열 타입의 데이터 이기 때문에 false.
    // }
    if(parseInt(number, 10) === 100) {
        // parseInt(값(문자열), 진법); 
        // parseInt("100") - 기본이 10진법.
        // parseInt("100", 10); 문자열 "100" 을 숫자(10진번의) 타입으로 변경한다.
        // parseInt("100", 2); 문자열 "100" 을 2진법의 숫자로 변경.
        var userIdEl = document.querySelector("input#user_id");
        var userPassEl = document.querySelector("input#user_pass");
        userIdEl.value = "";
        userPassEl.value = "";
    }
}
btnResetEl.addEventListener("click", onClickBtnReset);



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
var btnOddEl = document.querySelector("button#btn-odd");
function onClickBtnOdd(e) {
    e.preventDefault();
    var number = prompt("숫자를 입력해주세요.");

    // "안녕하세요.";
    // parseInt("안녕하세요.", 10) -> NaN
    if(number !== null && number !== "" && parseInt(number, 10) !== NaN) {
        number = parseInt(number, 10);
        // 0 부터 number 까지의 반복문.
        var result = "";
        for(var i = 0; i <= number; i++) {
            if(i % 2 === 1) { // 홀수.
                if(result !== "") { // result 의 값이 빈 문자열이 아닌 경우, 홀수 여부를 한번은 확인하여 연산이 이뤄짐.
                    result += ", ";
                }
                result += i;
            }else{ //짝수.
            }
            if(i === number) {
                result += ".";
            }
        }
        var oddResultEl = document.querySelector("div#odd-result");
        oddResultEl.innerText = result;
    }
}
btnOddEl.addEventListener("click", onClickBtnOdd);



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.



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


