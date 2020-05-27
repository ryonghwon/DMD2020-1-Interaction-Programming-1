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
/*
var btnStuNum = document.getElementById("btn-student-number"); // btn-student-number 의 id 값을 가진 객체를 반환

var StuNum = document.getElementById("student-number"); 

btnStuNum.click();
btnStuNum.addEventListener("click", onClickbtnSnumber);
*/
/*
var btnStuNum = document.querySelector
("button#btn-student-number");
btnStuNum.addEventListener("click", function(event){
    console.log(event);
    event.preventDefault();
    console.log("학번이 입력되었습니다.");
});

var btnStuName = document.querySelector("button#btn-student-name");
btnStuNum.addEventListener("click", function(event){
    console.log(event);
    event.preventDefault();
    console.log("이름이 입력되었습니다.");
});
*/

var btnStuNum = document.querySelector("button#btn-student-number"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnStuNum 할당

var StuNum = document.querySelector("span#student-number"); // 학번이 입력될 요소 변수 StuNum으로 할당
/*
btnStuNum.addEventListener("click", onClickbtnSnumber); // btnStuNum에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당
*/

btnStuNum.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    StuNum.innerHTML = "21961031"; // 변수 StuNum 안에 학번 입력 
    window.alert("학번이 입력되었습니다."); // 경고창 출력
});

// 학번 입력 끝

var btnStuName = document.querySelector("button#btn-student-name"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnStuName 할당

var StuName = document.querySelector("span#student-name"); // 이름이 입력될 요소 변수 StuName으로 할당

btnStuName.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    StuName.innerHTML = "김현민"; // 변수 StuName 안에 학번 입력 
    window.alert("이름이 입력되었습니다."); // 경고창 출력
});

// 이름 입력 끝

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

var btnWinSize = document.querySelector("button#btn-window-size"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnWinSize 할당

var winW = window.innerWidth;
var winH = window.innerHeight; 
// 윈도우 콘텐츠 영역의 너비값과 높이값을 각각 winW, winH 변수로 할당

btnWinSize.addEventListener("click",function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    console.log("윈도우 콘텐츠의 영역 width : " + winW + "px, height : " + winH + "px 입니다."); // 콘솔에 윈도우 콘텐츠 영역의 너비값과 높이값을 문자열로 출력
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

var btnCheckId = document.querySelector("button#btn-check-id"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnCheckId 할당

btnCheckId.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var userId = document.getElementById("user_id"); // user_id의 값을 가진 id객체를 변수 userId에 할당
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + userId.value.length + "입니다."); // input#user_id - value 속성 값의 문자열 개수 출력
});

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btnCancel = document.querySelector("button#btn-cancel"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnCancel 할당

btnCancel.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    location.reload(); // 문서 새로고침
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

var btnApply = document.querySelector("button#btn-apply"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnApply 할당

btnApply.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var confirmSign = window.confirm("가입하시겠습니까?"); // 메시지가 포함된 확인창을 출력하고 이를 변수 confirmSign으로 할당.
    if(confirmSign === true) {
        window.alert("가입을 환영합니다!"); // 확인창에서 확인을 선택했을 때 메시지 출력하도록 하는 조건문 작성
    }
    if(confirmSign === false) {
        window.alert("가입을 취소하였습니다."); // 확인창에서 취소를 선택했을 때 메시지 출력하도록 하는 조건문 작성
    }
});


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btnReset = document.querySelector("button#btn-reset"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnReset 할당

var uId = document.querySelector("input#user_id"); 
var uPw = document.querySelector("input#user_pass");
// value 속성을 빈값으로 초기화하도록 하는 id값들을 각각 변수 uId, uPw로 할당.

btnReset.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var confirmReset = window.prompt("초기화하시려면 100을 입력하세요."); // 메시지와 입력창이 포함된 다이얼로그창을 출력하고 이를 변수 confirmReset으로 할당
    if(confirmReset == "100") {
        uId.value = null;
        uPw.value = null;
        // 입력창에 100을 입력하고 확인을 눌렀을 때 uId와 uPw의 value 속성이 빈 값으로 초기화
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

var btnOdd = document.querySelector("button#btn-odd"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnOdd 할당

var OddResult = document.querySelector("div#odd-result"); // 문자열 연산 결과를 입력할 변수 OddResult 할당

btnOdd.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var confirmOdd = window.prompt("숫자를 입력해주세요."); // 메시지와 입력창이 포함된 다이얼로그창을 출력하고 이를 변수 confirmOdd로 할당
    var OddValue = ""; // 출력값
    for (var i = 1; i <= confirmOdd; i++){
        //조건이 참이면 남아있는 내용은 실행되지 않음.
        if(i % 2 == 0) continue;
        OddValue += i + ". ";
        // 홀수의 숫자만 문자열 연산
    }
    OddResult.innerHTML = OddValue; // OddResult의 내부에 입력
});

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btnAddCity = document.querySelector("button#btn-add-city"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnAddCity 할당

var CityName = document.querySelector("ul#city-list"); // 도시명 문자열을 추가시킬 부모요소를 변수 CityName 으로 할당

btnAddCity.addEventListener("click", function(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var confirmCityName = window.prompt("도시명을 입력하세요."); // 메시지와 입력창이 포함된 다이얼로그창을 출력하고 이를 변수 confirmCityName 으로 할당
    // CityName.innerHTML = "<li>" + confirmCityName + "</li>"; // 기존의 값이 사라지고 새로운 값이 추가됨.
    // element.appendChild(); 를 이용하여 노드 추가.
    var newLi =  document.createElement("li");
    // 노드 추가를 위해 li 요소를 새로 생성하여 변수 newLi로 할당.
    CityName.appendChild(newLi);
    // CityName에 newLi 추가
    newLi.innerHTML = confirmCityName; // newLi에 confirmCityName을 작성.
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

var btnColor = document.querySelector("button#btn-color"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnColor 할당

var sentence = document.getElementsByClassName("sentence"); // sentence라는 클래스 이름을 가진 요소를 반환하는 변수 sentence 할당

var clickCheck = 0; // 클릭된 횟수를 저장할 변수 clickCheck 에 초기값으로 0 할당

btnColor.addEventListener("click", function (event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    /*
    console.log(sentence.style);
    */
    for(var i = 0; i < sentence.length; i++){
        sentence[i].style.color = "red";
        sentence[clickCheck].style.color = "black";
        // sentence의 요소중 i번째의 컬러를 "red"로 변경하고 clickCheck의 값의 컬러를 "black"으로 변경하는 반복문을 작성 (i의 범위는 0부터 시작해서 sentence의 length까지) 
    }
    clickCheck++; // 클릭된 횟수를 증가
    if(clickCheck == sentence.length){
        clickCheck = 0;
        // clickCheck와 sentence.length가 같을 때 0으로 재할당하여 다시 시작
    }
});

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btnGoTop = document.querySelector("button#btn-go-top"); // 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 변수 btnGoTop 할당

btnGoTop.addEventListener("click", function (event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    window.scrollTo(0, 0); // 스크롤이 최상단으로 이동하도록 함
});



