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
var btnStuNum = document.querySelector('button#btn-student-number'); // 아이디가 'btn-student-number'인 버튼 요소를 btnStuNum 변수에 할당합니다.
var spanNum = document.querySelector('span#student-number'); // 아이디가 'student-number'인 span 요소를 spanNum 변수에 할당합니다.
btnStuNum.addEventListener('click', OnbtnStuNum); // spanNum에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnbtnStuNum 함수를 할당합니다.
function OnbtnStuNum(e){ // 함수 OnbtnStuNum 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    spanNum.innerText = '21961086'; // spanNum의 내부에 '21961086'을 입력합니다.
    alert('학번이 입력되었습니다.'); // 경고창으로 '학번이 입력되었습니다.'을 출력합니다.
}

var btnName = document.querySelector('button#btn-student-name'); // 아이디가 'btn-student-name'인 버튼 요소를 btnName 변수에 할당합니다.
var spanName = document.querySelector('span#student-name'); // 아이디가 'student-name'인 span 요소를 spanName 변수에 할당합니다.
btnName.addEventListener('click', OnbtnName); // btnName에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnbtnName 함수를 할당합니다.
function OnbtnName(e){  // 함수 OnbtnName 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    spanName.innerText = '이유정'; // spanName 내부에 '이유정'을 입력합니다.
    alert('이름이 입력되었습니다.'); // 경고창으로 '이름이 입력되었습니다.'을 출력합니다.
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
var btnWinSize = document.querySelector('button#btn-window-size'); // 아이디가 'btn-window-size'인 버튼 요소를 btnWinSize 변수에 할당합니다.
btnWinSize.addEventListener('click', WinSize); // btnWinSize에 클릭 이벤트를 추가하고 이벤트 핸들러로 WinSize 함수를 할당합니다.
function WinSize(e){ // 함수 WinSize 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var winW = window.innerWidth; // 변수 winW에 브라우저의 너비 값을 할당합니다.
    var winH = window.innerHeight; // 변수 winH에 브라우저의 높이 값을 할당합니다.
    console.log(`윈도우 콘텐츠의 영역 width : ${winW}px, height:${winH}px 입니다.`); // 콘솔창에 '윈도우 콘텐츠의 영역 width : 너비 px, height: 높이px 입니다.'를 출력합니다.
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
var btnCheckId = document.querySelector('button#btn-check-id'); // 아이디가 'btn-check-id'인 버튼 요소를 btnCheckId 변수에 할당합니다.
btnCheckId.addEventListener('click', OnCheckId); // btnCheckId에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnCheckId 함수를 할당합니다.
function OnCheckId(e){ // 함수 OnCheckId 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var UserIdCount = document.getElementById('user_id').value.length; // UserIdCount 변수를 생성하고 아이디가 'user_id'인 요소의 value값 길이를 할당합니다.
    console.log(`input#user_id - value 속성 값의 문자열 개수는 ${UserIdCount} 입니다.`); // 콘솔창에 'input#user_id - value 속성 값의 문자열 개수는 $(UserIdCount) 입니다.' 를 출력합니다.
}



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancel = document.querySelector('button#btn-cancel'); // 아이디가 'btn-cancel'인 버튼 요소를 btnCancel 변수에 할당합니다.
btnCancel.addEventListener('click', OnCancel); // btnCancel에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnCancel 함수를 할당합니다.
function OnCancel(e){ // 함수 OnCancel 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    window.location.reload(); // 브라우저를 새로고침합니다.
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
var btnApply = document.querySelector('button#btn-apply'); // 아이디가 'btn-apply'인 버튼 요소를 btnApply 변수에 할당합니다.
btnApply.addEventListener('click', OnApply); // btnApply에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnApply 함수를 할당합니다.
function OnApply(e){ // 함수 OnApply 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var conf = confirm('가입하시겠습니까?'); // '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 conf 변수에 할당합니다.
    if(conf == true){ // 만약 확인(true)를 선택한 경우
        alert('가입을 환영합니다!'); // 경고창으로 '가입을 환영합니다!'을 출력합니다.
    } else if(conf == false){ // 만약 취소(false)를 선택한 경우
        alert('가입을 취소하였습니다.'); // 경고창으로 '가입을 취소하였습니다.'을 출력합니다.
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btnReset = document.querySelector('button#btn-reset'); // 아이디가 'btn-reset'인 버튼 요소를 btnReset 변수에 할당합니다.
var InputId = document.querySelector('input#user_id'); // 아이디가 'user_id'인 input 요소를 InputId에 할당합니다.
var InputPw = document.querySelector('input#user_pass'); // 아이디가 'user_pass'인 input 요소를 InputPw에 할당합니다.

btnReset.addEventListener('click', OnReset); // btnReset에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnReset 함수를 할당합니다.
function OnReset(e){ // 함수 OnReset 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var reset = prompt('초기화하시려면 100을 입력하세요.'); // '초기화하시려면 100을 입력하세요.'라는 문구와 입력창이 포함된 다이얼로그 창을 reset 변수에 할당합니다.
    if(reset == 100){ // 만약 다이얼로그에 입력된 값이 100이라면
        InputId.value = null; // InputId의 value값을 빈 값으로 변경합니다.
        InputPw.value = null; // InputPw의 value값을 빈 값으로 변경합니다.
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
var btnOdd = document.querySelector('button#btn-odd'); // 아이디가 'btn-odd'인 버튼 요소를 btnOdd 변수에 할당합니다.
var oddResult = document.querySelector('div#odd-result'); // 아이디가 'odd-result'인 div 요소를 oddResult 변수에 할당합니다.
var result = ''; // 결과 값을 담을 result 변수 생성후 문자열 ''을 할당합니다.

btnOdd.addEventListener('click', OnOdd);  // btnOdd에 클릭 이벤트를 추가하고 이벤트 핸들러로 OnOdd 함수를 할당합니다.
function OnOdd(e){ // 함수 OnOdd 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var num = prompt('숫자를 입력해주세요.'); //'숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 num 변수에 할당합니다.

    for(var i = 0; i <= num; i++){ // 반복문으로 0부터 다이얼로그창에 입력돈 숫자(num) 만큼 증가식을 사용합니다.
        if(i % 2 == 1){ // i의 값을 2로 나누었을 때 나머지가 1이라면 (홀수)
            if(i <= num -2){ // i가 num - 2보다 작거나 같다면
                result += i + ", "; // result에 "result + i,"를 대입연산합니다.
            }else{ // 마지막 요소(홀수)에는
                result += i + '.'; // result에 'result + i."를 대입연산합니다.
            }
        }
    }
    oddResult.innerText = result; // oddResult요소의 내부에 결과값을 입력합니다.
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnCity = document.querySelector('button#btn-add-city'); // 아이디가 'btn-add-city'인 버튼 요소를 btnCity 변수에 할당합니다.
btnCity.addEventListener('click', AddCity); // btnCity 클릭 이벤트를 추가하고 이벤트 핸들러로 AddCity 함수를 할당합니다.

function AddCity(e){ // 함수 AddCity 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    var city = prompt('도시명을 입력하세요.'); // '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그 입력창을 city 변수에 할당합니다.
    var cityUl = document.querySelector('ul#city-list'); // 아이디가 'city-list'인 ul요소를 cityUl 변수에 할당합니다.
    var cityList = document.createElement('li'); // li 요소를 cityList 변수에 할당합니다.

    cityUl.appendChild(cityList); // cityUl의 마지막에 자식요소로  cityList를 추가합니다.
    cityList.innerText = city; // cityList요소의 내부에 city를 입력합니다.
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
var btnColor = document.querySelector('button#btn-color'); // 아이디가 'btn-color'인 버튼 요소를 btnColor 변수에 할당합니다.
var senten = document.getElementsByClassName('sentence'); // 클래스가 'sentence'인 요소들을 senten 변수에 할당합니다.
var click = 0; // 클릭한 횟수를 담을 변수 click을 선언 후 초기 값 0 을 할당합니다.

btnColor.addEventListener('click', colorChange); // btnColor 클릭 이벤트를 추가하고 이벤트 핸들러로 colorChange 함수를 할당합니다.

function colorChange(e){ // 함수 colorChange 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    for(var i = 0; i < senten.length; i++){ // 0부터 senten의 개수만큼 증가하는 반복문
        senten[i].style.color = 'red'; // i번째 senten 요소의 스타일 컬러를 red로 변경합니다.
        senten[click].style.color = 'black' //i번째 senten 요소의 스타일 컬러를 black으로 변경합니다.
    }
    click++; // 클릭 횟수 증가 
    if(click == senten.length){ // 만약 클릭한 횟수가 문장의 개수와 같다면 
        click = 0; // 클릭 변수에 0을 할당하여 0번째 senten부터 재시작합니다.
    }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnTop = document.querySelector('button#btn-go-top'); // 아이디가 'btn-go-top'인 버튼 요소를 btnTop 변수에 할당합니다.
btnTop.addEventListener('click', GoTop); // btnTop 클릭 이벤트를 추가하고 이벤트 핸들러로 GoTop 함수를 할당합니다.

function GoTop(e){ // 함수 GoTop 선언 후 매개변수로 e(event)를 할당합니다.
    e.preventDefault(); // 기본으로 설정되어진 기능을 차단합니다.
    scrollTo(0, 0); // 브라우저의 최상단인 스크롤 좌표 (0, 0)으로 이동합니다.
}

