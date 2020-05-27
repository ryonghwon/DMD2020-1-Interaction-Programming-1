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
var buttonbsnumber = document.querySelector("button#btn-student-number"); // button#btn-student-number 요소 노드를 반환
buttonbsnumber.addEventListener("click", onClicknumber); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

var spansnum = document.querySelector("span#student-number"); // span#student-number 요소 노드를 반환

function onClicknumber(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    spansnum.innerText = "21961067";
    alert("학번이 입력되었습니다.");
}

var buttonbsname = document.querySelector("button#btn-student-name"); // button#btn-student-name 요소 노드를 반환
buttonbsname.addEventListener("click", onClickname); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

var spansname = document.querySelector("span#student-name"); // span#student-number 요소 노드를 반환

function onClickname(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    spansname.innerText = "윤 진";
    alert("이름이 입력되었습니다.");
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
var buttonbws = document.querySelector("button#btn-window-size"); // button#btn-student-name 요소 노드를 반환
buttonbws.addEventListener("click", onClicksize); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

var winW = window.innerWidth; // 변수 winW에 윈도우 콘텐츠 영역의 너비 값 저장
var winH = window.innerHeight; // 변수 winH에 윈도우 콘텐츠 영역의 높이 값 저장

function onClicksize(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    console.log("윈도우 콘텐츠의 영역 width : " + winW + "px, height : " + winH + "px 입니다.");
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
var buttonbci = document.querySelector("button#btn-check-id"); // button#btn-check-id 요소 노드를 반환
buttonbci.addEventListener("click", onClickid); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickid(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    var bci = document.getElementById("user_id"); // 변수 bci에 id요소인 user_id를 저장.
    var bciV = bci.value; // 변수 bciV에 bci의 속성값 value를 저장.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + bciV.length + " 입니다.");
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var buttonbc = document.querySelector("button#btn-cancel"); // button#btn-cancel 요소 노드를 반환
buttonbc.addEventListener("click", onClickcancel); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickcancel(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    window.location.reload(); // 문서 새로고침.
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
var buttonba = document.querySelector("button#btn-apply"); // button#btn-apply 요소 노드를 반환
buttonba.addEventListener("click", onClickapply); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickapply(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    var apply = confirm("가입하시겠습니까?");

    if(apply === true){
        alert("가입을 환영합니다!");
    }else if (apply === false){
        alert("가입을 취소하였습니다.");
    }
    
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var buttonbr = document.querySelector("button#btn-reset"); // button#btn-reset 요소 노드를 반환
buttonbr.addEventListener("click", onClickreset); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickreset(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    var reset = prompt("초기화하시려면 100을 입력하세요.");

    if(reset == 100){ 
        var bbri = document.querySelector("input#user_id"); // 변수 bbri에 user_id를 저장.
        var bbrp = document.querySelector("input#user_pass"); // 변수 bbrp에 user_pass를 저장.
        bbri.value = null; // bbri의 value 값을 빈 값으로 초기화
        bbrp.value = null; // bbrp의 value 값을 빈 값으로 초기화
    }
}


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
var buttonbo = document.querySelector("button#btn-odd"); // button#btn-odd 요소 노드를 반환
buttonbo.addEventListener("click", onClickodd); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickodd(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    var odd = prompt("숫자를 입력해주세요.");
    var result = "";
    var divor = document.querySelector("div#odd-result");

    for(var i = 0;i <= odd; i++){
        if(i % 2 == 1){
            if(i <= odd - 2){
                result += i + ", ";
            }else{
                result += i + ".";
            }
        }   
    }
    divor.innerText = result;
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var buttonbac = document.querySelector("button#btn-add-city"); // button#btn-add-city 요소 노드를 반환
buttonbac.addEventListener("click", onClickaddcity); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickaddcity(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    var addcity = prompt("도시명을 입력하세요.");
    var cityul = document.querySelector('ul#city-list');  // ul#city-list 요소 노드를 반환
    var cityli = document.createElement("li"); // 변수 cityli에 새롭게 생성하는 요소 li를 저장.
    cityul.appendChild(cityli); // cityul의 마지막에 자식요소로  cityli를 추가.
    cityli.innerText = addcity;
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
var buttonbc = document.querySelector("button#btn-color"); // button#btn-color 요소 노드를 반환
buttonbc.addEventListener("click", onClickcolor); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당
var stc = document.getElementsByClassName('sentence'); // 변수 stc에 클래스 sentence 요소 노드를 반환.
var click = 0; // 클릭한 횟수를 담을 변수 click 선언, 초기값을 0 으로 설정.

function onClickcolor(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    
    for(var i = 0; i < stc.length; i++){ // 0부터 stc의 개수만큼 증가하는 반복문
        stc[i].style.color = 'red'; // i번째 stc 요소의 스타일 컬러를 red로 변경합니다.
        stc[click].style.color = 'black'; //i번째 stc 요소의 스타일 컬러를 black으로 변경합니다.
    }
    click++; // 클릭 횟수 증가 
    if(click == stc.length){ // 만약 클릭한 횟수가 문장의 개수와 같다면 
        click = 0; // 클릭 변수에 0을 할당하여 0번째 stc부터 재시작합니다.
    }
}

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var buttonbgt = document.querySelector("button#btn-go-top"); // button#btn-go-top 요소 노드를 반환
buttonbgt.addEventListener("click", onClickgotop); // 요소에 클릭 이벤트 추가하고 이벤트 핸들러를 할당

function onClickgotop(event){
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    scrollTo(0, 0); // 브라우저의 최상단인 스크롤 좌표 (0, 0)으로 이동.
}
