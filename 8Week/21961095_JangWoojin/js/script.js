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
var sNumBtn = document.getElementById("btn-student-number"),
  sNum = document.getElementById("student-number");

sNumBtn.addEventListener("click", onClickSNum); //button#btn-student-number 요소에 클릭 이벤트를 추가합니다.

function onClickSNum(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault(); // 기본으로 정의된 이벤트를 작동하지 못하게합니다.
  sNum.textContent = "21961095"; // 학번을 span#student-number 의 내부에 입력합니다
  alert("학번이 입력되었습니다."); //메시지 결과값을 경고창으로 출력합니다
}

var sNameBtn = document.getElementById("btn-student-name"),
  sName = document.getElementById("student-name");

sNameBtn.addEventListener("click", onClickSName); // button#btn-student-name 요소에 클릭 이벤트를 추가합니다.

function onClickSName(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault(); //기본으로 정의된 이벤트를 작동하지 못하게합니다.
  sName.textContent = "장우진"; //이름을 span#student-name 의 내부에 입력합니다
  alert("이름이 입력되었습니다."); //메시지 결과값을 경고창으로 출력합니다
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

var wSizeBtn = document.getElementById("btn-window-size");

wSizeBtn.addEventListener("click", onClickWSize); // button#btn-window-size 요소에 클릭 이벤트를 추가합니다

function onClickWSize(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  console.log(
    `윈도우 콘텐츠의 영역 width : ${window.innerWidth} px, height :${window.innerHeight} px 입니다.`
  ); // 콘솔에 해당 문자열을 출력합니다. window.innerWidth을 통하여 너비값을,  window.innerHeight을 통하여 높이값을 찾아냅니다.
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

var checkIdBtn = document.getElementById("btn-check-id");
var userId = document.getElementById("user_id");

checkIdBtn.addEventListener("click", onClickCheckId); //button#btn-check-id 요소에 클릭 이벤트를 추가합니다

function onClickCheckId(e) {
  // 이벤트 핸들러를 할당합니다
  e.preventDefault();
  console.log(
    `input#user_id - value 속성 값의 문자열 개수는 ${userId.value.length} 입니다.`
  ); //콘솔에 해당 문자열을 출력합니다. userId.value.length을 통하여 id 가 'user_id' 인 요소를 찾고 value 속성 문자열의 개수를 찾습니다.
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var cancelBtn = document.getElementById("btn-cancel");

cancelBtn.addEventListener("click", onClickCancel); // button#btn-cancel 요소에 클릭 이벤트를 추가합니다

function onClickCancel(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  window.location.reload(); // 현재 브라우저를 새로고침합니다
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

var applyBtn = document.getElementById("btn-apply");

applyBtn.addEventListener("click", onClickApply); //button#btn-apply 요소에 클릭 이벤트를 추가합니다

function onClickApply(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  var cf = confirm("가입하시겠습니까?"); // '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력하고 그것의 결과값을 변수 cf에 담습니다.
  if (cf) {
    // cf의 값이 true이면 아래의 값을 출력합니다
    alert("가입을 환영합니다!");
  } else {
    // cf의 값이 false이면 아래의 값을 출력합니다
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

var resetBtn = document.getElementById("btn-reset"),
  userPw = document.getElementById("user_pass");

resetBtn.addEventListener("click", onClickReset); //button#btn-reset 요소에 클릭 이벤트를 추가합니다
function onClickReset(e) {
  //이벤트 핸들러를 할당합니다.
  e.preventDefault();
  var plz100 = prompt("초기화하시려면 100을 입력하세요."); //'초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력하고 그 결과값을 변수 plz100에 담습니다.
  if (plz100 == 100) {
    // plz100의 결과값이 100이면
    userId.value = null; //input#user_id 요소의 value 속성이 빈 값으로 초기화 됩니다
    userPw.value = null; //input#user_pass 요소의 value 속성이 빈 값으로 초기화 됩니다
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

var oddBtn = document.getElementById("btn-odd"),
  oddResult = document.getElementById("odd-result");

oddBtn.addEventListener("click", onClickOdd); // button#btn-odd 요소에 클릭 이벤트를 추가합니다

function onClickOdd(e) {
  //이벤트 핸들러를 할당합니다.
  e.preventDefault();
  var plzNum = prompt("숫자를 입력해주세요."); //'숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력하고 그 값을 변수 plzNum에 저장합니다
  var result = "";

  for (var i = 0; i <= plzNum; i++) {
    if (i % 2 == 1) {
      // i값을 2로 나누어 나머지 값이 1이면 홀수이므로 해당 조건절에 해당하는 경우에만 아래의 연산을 시작합니다
      if (i <= plzNum - 2) {
        // i값이 입력된 숫자보다 2가 작다면 (i + ", ")을 result에 저장합니다
        //(i <= plzNum)인 경우 마지막 숫자에도 쉼표가 찍히고
        //(i <= plzNum - 1)인 경우 짝수가 입력됐을 경우 마지막 숫자에 쉼표가 생깁니다
        //그래서 (i <= plzNum - 2)로 조건절을 정하여 마지막 숫자에는 마침표가 찍히게 합니다
        result += i + ", ";
      } else {
        result += i + ".";
      }
    }
  }
  oddResult.textContent = result; //문자열 결과를 div#odd-result 의 내부에 입력합니다
}

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var addCityBtn = document.getElementById("btn-add-city"),
  cityList = document.getElementById("city-list");

addCityBtn.addEventListener("click", onClickAddCity); //button#btn-add-city 요소에 클릭 이벤트를 추가합니다

function onClickAddCity(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  var plzCity = prompt("도시명을 입력하세요."); //'도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력하고 그 결과값을 변수 plzCity에 담습니다
  var city = document.createElement("li"); // 새롭게 생성하는 요소 li를 변수 city에 저장합니다.
  cityList.appendChild(city); //ul#city-list의 순서 뒤에 변수 city을 자식요소로 추가합니다
  city.textContent = plzCity; // document.createElement("li")로 생성한 변수 city에 다이얼로그로 입력된 결과값을 문자열로 추가합니다
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

var colorBtn = document.getElementById("btn-color"),
  stc = document.getElementsByClassName("sentence"),
  click = 0;

colorBtn.addEventListener("click", onClickColor); // button#btn-color 요소에 클릭 이벤트를 추가합니다

function onClickColor(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  for (var i = 0; i <= stc.length - 1; i++) {
    stc[i].style.color = "red"; //반복문을 사용하여 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다

    stc[click].style.color = "black"; //클릭한 횟수를 담은 변수 click의 값에 해당하는 순서의 p요소의 글자 색 스타일을 'black' 로 변경합니다
  }
  click++; // 한번 클릭할 때 마다 클릭한 횟수를 담은 변수 click의 값이 1씩 증가합니다

  if (click == stc.length) {
    //클릭한 횟수를 담은 변수 click의 값이 sentence 라는 클래스 이름을 가진 모든 p 요소를 담은 변수 stc의 length값과 같아지면
    click = 0; //클릭한 횟수를 담은 변수 click의 값이 0으로 초기화되어 처음부터 다시 시작합니다
  }
}

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var goTopBtn = document.getElementById("btn-go-top");

goTopBtn.addEventListener("click", onClickGoTop); //button#btn-go-top 요소에 클릭 이벤트를 추가합니다

function onClickGoTop(e) {
  //이벤트 핸들러를 할당합니다
  e.preventDefault();
  scrollTo(0, 0); //스크롤이 현재 화면의 최상단으로 이동합니다 스크롤의 x값 0, y값 0
}
