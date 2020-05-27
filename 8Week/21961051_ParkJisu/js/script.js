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
var btnSnumber = document.querySelector("button#btn-student-number"); // button#btn-student-number요소를 변수 btnSnumber에 할당
btnSnumber.addEventListener("click", onClickA); // 클릭 이벤트 추가, 이벤트 핸들러 할당
var spanSnumber = document.querySelector("span#student-number"); // span#student-number요소를 변수 spanSnumber에 할당
function onClickA(event){ // onClickA 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    spanSnumber.innerText = "21961051"; // 텍스트 기입
    window.alert("학번이 입력되었습니다."); // 메세지 담긴 경고창 출력
}
var btnSname = document.querySelector("button#btn-student-name"); // button#btn-student-name요소를 변수 btnSname에 할당
btnSname.addEventListener("click", onClickB); // 클릭 이벤트 추가, 이벤트 핸들러 할당
var spanSname = document.querySelector("span#student-name"); // span#student-name요소를 변수 spanSname에 할당
function onClickB(event){ // onClickB 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    spanSname.innerText = "박지수"; // 텍스트 기입
    window.alert("이름이 입력되었습니다."); // 메세지 담긴 경고창 출력
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
var btnWsize = document.querySelector("button#btn-window-size"); // button#btn-window-size요소를 변수 btnWsize에 할당
btnWsize.addEventListener("click", onClickC); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickC(event){ // onClickC 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var winW = window.innerWidth; // 변수 winW에 윈도우 콘텐츠 영역의 너비 값 할당
    var winH = window.innerHeight; // 변수 winH에 윈도우 콘텐츠 영역의 높이 값 할당
    console.log("윈도우 콘텐츠의 영역 width : " + winW + "px, height : " + winH + "px 입니다."); // 콘솔창 출력
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
var btnCid = document.querySelector("button#btn-check-id"); // button#btn-check-id요소를 변수 btnCid에 할당
btnCid.addEventListener("click", onClickD); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickD(event){ // onClickD 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var user_id = document.getElementById("user_id").value.length; // 변수 user_id에 user_id 속성값의 문자열 개수 할당
    console.log("input#user_id - value 속성 값의 문자열 개수는" + user_id + "입니다."); // 콘솔창 출력
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnC = document.querySelector("button#btn-cancel"); // button#btn-cancel요소를 변수 btnC에 할당
btnC.addEventListener("click", onClickE); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickE(event){ // onClickE 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    window.location.reload(); // 현재 브라우저 새로고침
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
var btnA = document.querySelector("button#btn-apply"); // button#btn-apply요소를 변수 btnA에 할당
btnA.addEventListener("click", onClickF); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickF(event){ // onClickF 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var con = window.confirm("가입하시겠습니까?"); // 메세지 적힌 확인창을 변수 con에 할당
    if (con){ // con이 true라면
        alert("가입을 환영합니다!"); // 이 문구가 적힌 경고창 출력
    }
    else if(!con){ // con이 false라면
        alert("가입을 취소하였습니다."); // 이 문구가 적힌 경고창 출력
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnR = document.querySelector("button#btn-reset"); // button#btn-reset요소를 변수 btnR에 할당
var id = document.querySelector("input#user_id"); // input#user_id 요소를 변수 id에 할당
var pass = document.querySelector("input#user_pass"); // input#user_pass 요소를 변수 pass에 할당
btnR.addEventListener("click", onClickG); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickG(e){ // onClickF 함수 생성, 매개변수 e 할당
    e.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var pro = window.prompt("초기화하시려면 100을 입력하세요."); // 메세지 담긴 다이얼로그창을 변수 pro에 할당
    if (pro == 100){ // prd에 100이 입력되었을 때
        id.value = null; // id 속성을 빈 값으로 변경
        pass.value = null; // pass 속성을 빈 값으로 변경
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
var btnO = document.querySelector("button#btn-odd"); // button#btn-odd요소를 변수 btnO에 할당
var oddR = document.querySelector("div#odd-result"); // div#odd-result요소를 변수 oddR에 할당
var result = ""; // 결과값 담을 변수 result 생성
btnO.addEventListener("click", onClickH); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickH(event){ // onClickH 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var pro = window.prompt("숫자를 입력해주세요."); // 메세지 담긴 다이얼로그창을 변수 pro에 할당
    for(i = 0; i <= pro; i++){ // 반복문을 사용하여 i가 pro 숫자만큼 증가
        if(i % 2 == 1){ // i를 2로 나눴을때 나머지가 1이라면
            if(i <= pro -2){ // i가 pro-2보다 작거나 같다면
            result += i + ", "; // 결과값 result에 result+i, 를 대입
            }else{ // 마지막 요소는
                result += i + "."; // 결과값 result에 result+i. 를 대입
            }   
        }
    }
    oddR.innerText = result; // 변수 oddR에 result값 텍스트 기입
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnAcity = document.querySelector("button#btn-add-city"); // button#btn-add-city요소를 변수 btnAcity에 할당
btnAcity.addEventListener("click", onClickI); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickI(event){ // onClickI 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    var pro = window.prompt("도시명을 입력하세요.") // 메세지 담긴 다이얼로그창을 변수 pro에 할당
    var clUl = document.querySelector("ul#city-list"); // ul#city-list요소를 변수 clUl에 할당
    var clLi = document.createElement("li"); // li 요소를 변수 clLi에 할당
    clUl.appendChild(clLi); // clUl에 마지막 자식요소로 clLi 추가
    clLi.innerText = pro; // clLi에 pro값 텍스트 기입
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
var btnC = document.querySelector("button#btn-color"); // button#btn-color요소를 변수 btnC에 할당
var sen = document.getElementsByClassName("sentence"); // sentence 이름을 가진 클래스 요소를 변수 sen에 할당
var click = 0; // 클릭 횟수가 담길 변수 click 생성
btnC.addEventListener("click", onClickJ); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickJ(event){ // onClickJ 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    for(i = 0; i < sen.length; i++){ // 반복문을 사용하여 i가 변수 sen 개수만큼 증가
        sen[i].style.color = "red"; // 변수 sen의 i번째 요소를 red로 색상 변경
        sen[click].style.color = "black"; // 변수 sen의 클릭 된 숫자일때 black으로 색상 변경
    }
    click++; // 클릭 횟수 증가
    if(click == sen.length){ // click 횟수가 sen 개수와 같아지면
        click = 0; // 다시 0으로 돌아가 반복됨
    }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnGtop = document.querySelector("button#btn-go-top"); // button#btn-go-top요소를 변수 btnGtop에 할당
btnGtop.addEventListener("click", onClickK); // 클릭 이벤트 추가, 이벤트 핸들러 할당
function onClickK(event){ // onClickK 함수 생성, 매개변수 event 할당
    event.preventDefault(); // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지
    window.scrollTo(0, 0); // x, y 좌표 0, 0으로 스크롤 이동
}

