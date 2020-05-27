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

// id가 'btn-student-number'인 button 요소를 새로운 변수 bSNumber에 지정.
var bSNumber = document.querySelector('button#btn-student-number');
// id가 'student-number' 인 span 요소를 새로운 변수 spanNumber 에 지정.
var spanNumber = document.querySelector('span#student-number');
// bSNumber에 click event를 추가하고 이벤트 핸들러로 새로운 함수 clickbtNumber 지정.
bSNumber.addEventListener('click', clickbtNumber);
// 함수 clickbtNumber 에 매개변수 btnevt 지정
function clickbtNumber(btnevt){
    btnevt.preventDefault();
    //spanNumber 내부에 21961073(학번) 입력
    spanNumber.innerText = '21961073';
    alert('학번이 입력되었습니다.'); // 경고창으로 '학번이 입력되었습니다.'을 출력 됨.
}

//id가 'btn-student-name'인 button 요소를 새로운 변수 btnName에 지정.
var btnName = document.querySelector('button#btn-student-name');
//id가 'student-name' 인 span 요소를 새로운 변수 spanName에 지정.
var spanName = document.querySelector('span#student-name');
// btnName에 click event를 추가하고 이벤트 핸들러로 새로운 함수 clickbtName 지정.
btnName.addEventListener('click', clickbtName);
// 함수 clickbtName 에 매개변수 btnevt 지정
function clickbtName(btnevt){
    btnevt.preventDefault();
    spanName.innerText = '이상연'; // spanName 내부에 '이상연'을 입력
    alert('이름이 입력되었습니다.'); // 경고창으로 '이름이 입력되었습니다.'을 출력
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

var btnWinSize = document.querySelector('button#btn-window-size'); 
btnWinSize.addEventListener('click', WinSize); 
function WinSize(btnevt){ 
    btnevt.preventDefault(); 
    var winwidth = window.innerWidth; // 변수 winwidth에 브라우저의 너비 값
    var winheight = window.innerHeight; // 변수 winheight에 브라우저의 높이 값
    console.log("윈도우 콘텐츠의 영역 width :" + winwidth + "px, height :" + winheight + "px 입니다.")
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

var checkId = document.querySelector("button#btn-check-id");
checkId.addEventListener('click', Clickcheck);
function Clickcheck(btnevt) {
    btnevt.preventDefault();
    var userId = document.getElementById("user_id");
    var userIdAttri = userId.value;
    console.log("input#user_id - value 속성 값의 문자열 개수는" + userIdAttri.length + "입니다."); 
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btnCancel = document.querySelector('button#btn-cancel'); 
btnCancel.addEventListener('click', clickCancel); 
function clickCancel(btnevt){ 
    btnevt.preventDefault(); 
    location.reload(); // 브라우저 새로 고침.
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
var apply = document.querySelector("button#btn-apply");

apply.addEventListener("click",clickApply);

function clickApply(btnevt) {
    btnevt.preventDefault();
    var join = confirm("가입하시겠습니까?");
    if (join === true) {// 확인을 선택한 경우 true 
        alert("가입을 환영합니다!");
    } else if(join === false){// 취소를 선택한 경우 false
        alert("가입을 취소하셨습니다.");
    }
}



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btnReset = document.querySelector('button#btn-reset'); 
var ipuserId = document.querySelector('input#user_id'); 
var inuserPw = document.querySelector('input#user_pass'); 

btnReset.addEventListener('click', OnReset); 
function OnReset(btnevt){ 
    btnevt.preventDefault(); 
    // 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화
    var reset = prompt('초기화 하시려면 100을 입력하세요.'); 
    if(reset == 100){ // 만약 입력된 값이 100이라면
        ipuserId.value = ""; 
        inuserPw.value = ""; 
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
var btnOdd = document.querySelector('button#btn-odd'); 
var oddResult = document.querySelector('div#odd-result'); 
var result = '';

btnOdd.addEventListener('click', clickOdd); 
function clickOdd(btnevt){
    btnevt.preventDefault(); 
    // 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력
    var num = prompt('숫자를 입력해주세요.');

    for(var i = 0; i <= num; i++){ // for반복문 사용
        if(i % 2 == 1){ // i를 2로 나누었을 때 나머지가 1이라면 (홀수)
            if(i <= num - 2){ // i가 num - 2보다 작거나 같다면
                result += i + ", "; // result에 "result + i,"
            }else{ // 마지막 요소(홀수)에는
                result += i + '.'; // result에 'result + i."
            }
        }
    }
    oddResult.innerText = result;
}

//너무 어려웠습니다...


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var addCity = document.querySelector("button#btn-add-city");
var cityList = document.querySelector("ul#city-list");

addCity.addEventListener('click',clickaddCity);

function clickaddCity (btnevt) {
    btnevt.preventDefault();
    //새로운 변수 city 에 prompt(입력창) 지정. // 페이지에서 입력 가능한 창이 나온다.
    var city = prompt("도시명을 입력하세요."); 
    var plusCity = document.createElement("li");
    cityList.appendChild(plusCity);
    plusCity.textContent = city;
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
var btnColor = document.querySelector("button#btn-color");
var sen = document.getElementsByClassName("sentence");
var click = 0;

btnColor.addEventListener('click',clickbtnColor);

function clickbtnColor(btnevt){
    btnevt.preventDefault();
    // for 반복문. 새로운 변수 i 생성 후, 0 지정. i 가 sen의 길이보다 작을 때까지 반복하고 반복이 끝나면 for문 종료
    for(var i = 0; i < sen.length - 1; i++){ 
            //sen = i;
            //i = 'red';
            //click = 'black';
            sen[i].style.color = '#ff0000'; // red
            sen[click].style.color = '#000000';  // black
    }
    click++; // 클릭 수 증가

    // 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서
    // 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.

    if(click == sen.length){ // 클릭 횟수와 sen의 길이가 같을 때
        click = 0; // click은 0
    }
       
    }
 // 결과가 어떻게 되는 것인지 잘 모르겠습니다... 레드에서 블랙으로 바뀌는 것인지... 제대로 한 것인지.. 페이지에서 분명 변화가 있어야 될 것 같은데
 // 아무런 반응이 없습니다.. 여기까지인 듯 합니다..
 // btnColor.addEventListener('click',clickbtnColor); 을 지정해주지 않아서,,, 작동이 되지 않았던 것이었습니다..





/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btngoTop = document.querySelector(" button#btn-go-top");
btngoTop.addEventListener("click",clickbtngoTop);

function clickbtngoTop(btnevt)
{
    btnevt.preventDefault();
    window.scrollTo(0, 0); // 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단인 스크롤 좌표 (0, 0)으로 이동
}

