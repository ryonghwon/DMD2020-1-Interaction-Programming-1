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

var btnStudentNumber = document.querySelector("button#btn-student-number"); // button#btn-student-number에 클릭 이벤트를 추가하고, 이벤트 핸들러를 할당할 것입니다.
var StudentNumber = document.querySelector("span#student-number");
btnStudentNumber.addEventListener("click", btnStudentNumberClick); // 버튼에 클릭 동작을 할 수 있도록  addEventListener("click")을 사용합니다.
function btnStudentNumberClick(event) 
{ // btnStudentNumberClick를 이용하여 (event)를 사용해 새롭게 함수(funstion)를 만들어 줍니다.
    event.preventDefault(); // 디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    StudentNumber.textContent = "21961111"; // 이벤트 호출 시 자신의 학번이 StudentNumbr에 출력 될 수 있도록 합니다. 
    window.alert("학번이 입력되었습니다."); // window와 alert 태그를 사용해 메시지 결과값을 경고창으로 출력합니다.
}; //버튼을 누르니 내 학번이 입력되면서 '학번이 입력되었습니다.'가 뜹니다. 앞에 #은 원래 붙어있는 건가요??

// 학번 입력 끝

var btnStudentName = document.querySelector("button#btn-student-name"); // button#btn-student-name에 클릭 이벤트를 추가하고, 이벤트 핸들러를 할당할 것입니다.
var StudentName = document.querySelector("span#student-name");
btnStudentName.addEventListener("click", btnStudentNameClick); // 버튼에 클릭 동작을 할 수 있도록  addEventListener("click")을 사용합니다.
function btnStudentNameClick(event)
{ // btnStudentNumberClick를 이용하여 (event)를 사용해 새롭게 함수를 만들어 줍니다.
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    StudentName.textContent = "최가영"; // 이벤트 호출 시 자신의 학번이 StudentNumbr에 출력 될 수 있도록 합니다.  
    window.alert("이름이 입력되었습니다."); // window와 alert 태그를 사용해 메시지 결과값을 경고창으로 출력합니다.
}; //버튼을 누르니 내 이름이 입력되면서 '이름이 입력되었습니다.'가 뜹니다!



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

var btnWindowSize = document.querySelector("button#btn-window-size"); // button#btn-window-size에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
var winWidth = window.innerWidth; // 윈도우 콘텐츠 영역의 너비 값을 변수 winWidth로 할당합니다.
var winHeight = window.innerHeight; // 윈도우 콘텐츠 영역의 높이 값을 변수 winHeight로 할당합니다.

function btnWindowSizeClick(event) 
{
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    console.log("윈도우 콘텐츠의 영역 width:" + winW + "px, height:" + winH + "px 입니다.")
}; //버튼을 누르니 콘솔에 '윈도우 콘텐츠의 영역 width : 1154 px, height :869 px 입니다.'가 입력됩니다!



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

var btnCheckId = document.querySelector("button#btn-check-id"); // button#btn-check-id에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
btnCheckId.addEventListener("click", btnCheckIdClick); // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnCheckIdClick(event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    var userId = document.getElementById("user_id"); // id를 "user_id"의 값을 갖게 한 뒤, 변수 userId에 할당합니다.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + userId.value.length + "입니다.");
}; //버튼을 누르니 콘솔에 'input#user_id - value 속성 값의 문자열 개수는 7입니다.'가 입력됩니다!



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btnCancel = document.querySelector("button#btn-cancel"); //button#btn-cancel에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
btnCancel.addEventListener("click", btnCancelClick); // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnCancelClick(event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    location.reload(); //새로고침
}; //취소 버튼을 누르니 페이지가 새로고침 되었습니다.



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

var btnApply = document.querySelector("button#btn-apply"); //button#btn-apply에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
btnApply.addEventListener("click", btnapplyClick); // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnapplyClick(event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    var Signup = confirm("가입하시겠습니까?"); //'가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
    if (Signup) { //ture, false 개념을 활용하려고 if(조건문)를 사용했습니다.
        window.alert("가입을 환영합니다!"); //확인 버튼을 누르면 '가입을 환영합니다!'가 뜹니다.
    } else {
        window.alert("가입을 취소하셨습니다."); //취소 버튼을 누르면 '가입을 환영합니다!'가 뜹니다.
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btnReset = document.querySelector("Button#btn-reset"); // button#btn-reset에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
var btnUserId = document.querySelector("input#user_id");
var btnUserPass = document.querySelector("input#user_pass");

btnReset.addEventListener("click", btnResetClick);  // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnResetClick(event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    var input100 = prompt("초기화하시려면 100을 입력하세요."); //'초기화하시려면 100을 입력하세요.'라는 내용이 다이얼로그창에 뜨도록 하고, prompt 변수로 할당합니다.
    if (input100 == 100) { //입력창에 100을 입력하면,
        btnUserId.setAttribute("value", ""); //input#user_id 요소에 빈 값으로 초기화 되도록 합니다.
        btnUserPass.setAttribute("value", ""); //input#user_pass 요소에 빈 값으로 초기화 되도록 합니다.
    } 
}; //입력창에 100을 입력하게 되면 모든 입력 요소가 초기화되도록 합니다.




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

var btnOdd = document.querySelector("button#btn-odd"); //button#btn-odd에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
btnOdd.addEventListener("click", btnOddClick);  // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

var oddResult = document.querySelector("div#odd-result") //결과값을 입력하기 위해 oddResult 변수로 할당합니다.

function btnOddClick(event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.

    var inputNumber = prompt("숫자를 입력해주세요."); //'숫자를 입력해주세요.'라는 내용이 다이얼로그창에 뜨도록 하고, prompt 변수로 할당합니다.
    var result = ""; //먼저 빈 값을 가진 result 생성합니다.

    for (var i = 0; i <= inputNumber; i++) {
        if (i % 2 == 1) { //i가 될 값을 2로 %(나누기)하고 만약 그로 나온 나머지의 값이 '1'이 된다면,
            if (i <= inputNumber - 2){ //i가 사용자가 입력한 숫자보다 작다면,
                result += i + ", "; //reault에는 i + , 
            } else { //사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자까지 반복,
                result += i + "."; //마지막 숫자 뒤에는 .이 올 수 있도록 합니다.
            }
        }
    }
    oddResult.textContent = result;
} //6을 입력했는데 "1, 3, 5."로 홀수 결과 밑에 뜹니다.



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btnAddCity = document.querySelector("button#btn-add-city"); // button#btn-add-city에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
cityList = document.querySelector("ul#city-list");
btnAddCity.addEventListener("click", btnAddCityClick); // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnAddCityClick(event) {
  event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
  var inputCityName = prompt("도시명을 입력하세요."); //'도시명을 입력하세요.'라는 내용이 다이얼로그창에 뜨도록 하고, prompt 변수로 할당합니다.
  var CityName = document.createElement("li"); // li를 새로 만들고, 변수 CityName에 할당합니다.
  cityList.appendChild(CityName); //변수 city을 appendChild 태그를 이용해 자식으로 설정합니다.
  CityName.textContent = inputCityName; // 위에서 추가된 li에 도시명을 입력합니다.
} //뜬 창에 도시 이름을 입력하니, 도시 리스트 가장 하단에 하나씩 추가됩니다.

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

var btnColor = document.querySelector("button#btn-color"); //button#btn-color에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
var sentence = document.getElementsByClassName("sentence"); //sentence 라는 클래스 이름을 가진 모든 p 요소를 빨간색으로 바꾸기 위해 setence 클래스에 있는 요소를 변수로 할당합니다. 
var click = 0; //클릭 횟수에 따른 p요소 스타일 변경을 위해 첫 click은 첫번째(0)으로 설정합니다.
btnColor.addEventListener("click", btnColorClick);  // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnColorClick (event) {
    event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
    click++; //클릭을 누를 때마다 1씩 증가(++)하도록 합니다.
    for (var i = 0; i<= sentence.length - 1; i++) { //for(반복문)으로 i는 0, sentence가 i보다 커질 때까지
        sentence[i].style.color = "red"; //sentence의 모든 요소들을 빨간색으로 변경합니다
        sentence[click].style.color = "black" //처음엔 검정색으로 나올 수 있도록 합니다.
    };
    if (click == sentence.length) { //click과 sentence.length가 같아지면
        click = 0; //초기화됩니다.
    };
}; //처음 누르면 첫번째 문장이 검은색 나머지가 빨간색이 되었고, 두번째로 눌렀을 땐 두번째 문장이 검은색 나머지가 빨간색이 되었고 - - 이렇게 순서가 반복되었습니다!
//이 문제가 제일 어려웠습니다 ㅠㅠ...

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btnGoTop = document.querySelector("button#btn-go-top"); //button#btn-go-top에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당할 것입니다.
btnGoTop.addEventListener("click", btnGoTopClick);  // 버튼에 클릭 동작을 할 수 있도록 addEventListener("click")을 사용합니다.

function btnGoTopClick(event) {
  event.preventDefault(); //디폴트적으로 생길 수 있는 이벤트를 발생하지 않게 합니다.
  scrollTo(0, 0); //버튼에 위치값 x = 0, y = 0를 줘서 지금 보고 있는 윈도우의 맨 위로으로 이동할 수 있도록 합니다.
}; //맨위로 가기 버튼을 누르니 맨 위로 화면이 이동했습니다!! 
