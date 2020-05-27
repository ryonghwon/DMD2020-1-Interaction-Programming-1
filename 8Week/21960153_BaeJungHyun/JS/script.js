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
var btnSNumber = document.querySelector("button#btn-student-number");
var spanSNumber = document.querySelector("span#student-number");

btnSNumber.addEventListener("click", onClickbtnSNumber); 

function onClickbtnSNumber(event)
{
    event.preventDefault();
    spanSNumber.innerText = "21961053";
    alert ("학번이 입력되었습니다.");
}


var btnSName = document.querySelector("button#btn-student-name");
var spanSName = document.querySelector("span#student-name");

btnSName.addEventListener("click", onClickbtnSName); 

function onClickbtnSName(event)
{
    event.preventDefault();
    spanSName.innerText = "배정현";
    alert ("이름이 입력되었습니다.");
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
var WSwidth = window.innerWidth;
var WSheight = window.innerHeight;

var btnWS = document.querySelector("button#btn-window-size");
btnWS.addEventListener("click", onClickbtnWS); 

function onClickbtnWS(event)
{
    event.preventDefault();
    console.log("윈도우 콘텐츠의 영역 width : " + WSwidth + "px, height : " + WSheight + "px 입니다.");
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
var btnCI = document.querySelector("button#btn-check-id");
btnCI.addEventListener("click", onClickbtnCI); 

function onClickbtnCI(event)
{
    event.preventDefault();
    var userid = document.getElementById("user_id");
    var useridattri = userid.value;
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + useridattri.length + " 입니다.");
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnC = document.querySelector("button#btn-cancel");
btnC.addEventListener("click", onClickbtnC); 

function onClickbtnC(event)
{
    event.preventDefault();
    window.location.reload();
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
var btnA = document.querySelector("button#btn-apply");
btnA.addEventListener("click", onClickbtnA); 

function onClickbtnA(event)
{
    event.preventDefault();
    var applyE = window.confirm("가입하시겠습니까?");
    if(applyE === true){
        alert("가입을 환영합니다!")
    }
    else if(applyE === false){
        alert("가입을 취소하였습니다.")
    }
}



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnR = document.querySelector("button#btn-reset");
btnR.addEventListener("click", onClickbtnR); 

function onClickbtnR(event)
{
    event.preventDefault();
    var resetE = window.prompt("초기화하시려면 100을 입력하세요.");
    if(resetE == 100){
        var inpID = document.querySelector("input#user_id");
        var inpUP = document.querySelector("input#user_pass"); 
        inpID.setAttribute("value", "");
        inpUP.setAttribute("value", "");
    }
}

// console.log(inpID.getAttribute("value"));
// console.log(inpUP.getAttribute("value"));


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
var btnO = document.querySelector("button#btn-odd");
btnO.addEventListener("click", onClickbtnO); 

function onClickbtnO(event)
{
    event.preventDefault();
    var oddE = window.prompt("숫자를 입력해주세요.");
    var result = "";
    for(var i = 1; i<= oddE; i++){
        if(i < oddE -1){
            result += i + ", ";
        }else{
            result += i +".";
        }
        i += 1;
    }
}

// console.log(result);


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnAC = document.querySelector("button#btn-add-city");
btnAC.addEventListener("click", onClickbtnAC); 

// function onClickbtnAC(event)
// {
//     event.preventDefault();
//     var cityE = window.prompt("도시명을 입력하세요.");
//     var Cli = document.querySelector("ul#city-list");
//     Cli.innerText = cityE;
// }

function onClickbtnAC(event)
{
    event.preventDefault();
    var cityE = window.prompt("도시명을 입력하세요.");
    var Cul = document.querySelector("ul#city-list");
    var Cli = document.createElement("li");
    Cli.innerText = cityE;
    Cul.appendChild(Cli);
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
var btnGT = document.querySelector("button#btn-go-top");
btnGT.addEventListener("click", onClickbtnGT); 

function onClickbtnGT(event)
{
    event.preventDefault();
    window.scrollTo(0, 0);
}