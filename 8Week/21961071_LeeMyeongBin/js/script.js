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

// 변수 btn_std1에 id 가 btn-student-number 인 요소를 저장한다.
var btn_std1 = document.querySelector("button#btn-student-number");
// console.log(btn_std1);

// 변수 span_std1 에 id 가 student-number 인 요소를 저장한다.
var span_std1 = document.querySelector("span#student-number");
// console.log(span_std1);

// btn_std1에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_std1.addEventListener("click", onClick_std1);

// 함수 onClick_std1를 선언하고 매개변수 event를 추가한다.
function onClick_std1(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // span_std1에 내부 텍스트로 학번(21961071)을 저장한다.
    span_std1.innerText = "21961071";

    // alert 로 메세지를 경고창에 띄운다.
    window.alert("학번이 입력되었습니다.");
}

// ---------------------------------------------

// 변수 btn_std2에 id 가 btn-student-name 인 요소를 저장한다.
var btn_std2 = document.querySelector("button#btn-student-name");
// console.log(btn_std);

// 변수 span_std2 에 id 가 student-name 인 요소를 저장한다.
var span_std2 = document.querySelector("span#student-name");
// console.log(span_std);

// btn_std2에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_std2.addEventListener("click", onClick_std2);

// 함수 onClick_std2를 선언하고 매개변수 event를 추가한다.
function onClick_std2(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // span_std1에 내부 텍스트로 이름(이명빈)을 저장한다.
    span_std2.innerText = "이명빈";

    // alert 로 메세지를 경고창에 띄운다.
    window.alert("이름이 입력되었습니다.");
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

// 변수 btn_size에 id 가 btn-window-size 인 요소를 저장한다.
var btn_size = document.querySelector("button#btn-window-size");

// btn_size에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_size.addEventListener("click", onClick_size);

// 변수 width 에 현재 브라우저 화면의 innerWidth 값을 저장한다.
var width = window.innerWidth;
// 변수 height 에 현재 브라우저 화면의 innerHeight 값을 저장한다.
var height = window.innerHeight;
// console.log(width, height);

// 함수 onClick_size를 선언하고 매개변수 event를 추가한다.
function onClick_size(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 콘솔창에 width와 height 값과 함께 문구를 출력한다.
    console.log("윈도우 콘텐츠의 영역 width : " + width + " px, height : "+ height +" px 입니다.");
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

// id 가 btn-check-id인 버튼 요소를 변수 btn_checkId에 저장한다.
var btn_checkId = document.querySelector("button#btn-check-id");

// btn_checkId에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_checkId.addEventListener("click", onClick_Id);

// 함수 onClick_Id를 선언하고 매개변수 event를 추가한다.
function onClick_Id(event){
    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 변수 user 에 id 가 user_id 인 요소를 저장한다.
    var user = document.getElementById("user_id");

    // 변수 user.attri 에 변수 user의 value 값을 저장한다.
    var user_attri = user.value;
    // console.log(user_attri.length); // 7 출력.

    // 콘솔 창에 user_attri의 길이와 함께 문구가 출력되도록한다.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + user_attri.length + " 입니다.")
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

// id 가 btn-cancel인 버튼 요소를 변수 btn_can에 저장한다.
var btn_can = document.querySelector("button#btn-cancel");

// 함수 onClick_can을 선언하고 매개변수 event를 추가한다.
function onClick_can(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // location.reload 로 현재 브라우저 창이 새로고침 되도록 한다.
    window.location.reload();
}

// btn_can에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_can.addEventListener("click", onClick_can);

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

// id 가 btn-apply인 버튼 요소를 변수 btn_app에 저장한다.
var btn_app = document.querySelector("button#btn-apply");

// 함수 onClick_app을 선언하고 매개변수 event를 추가한다.
function onClick_app(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 변수 apply를 선언하고 confirm(확인 창)을 저장한다.
    var apply = window.confirm("가입하시겠습니까?");

    // 만약 apply 가 true(확인선택) 일 경우,
    if(apply === true){
        // 경고창에 "가입을 환영합니다!"를 출력.
        window.alert("가입을 환영합니다!");
    }
    // apply 가 false(취소선택) 일 경우,
    else{
        // 경고창에 "가입을 취소하였습니다."를 출력.
        window.alert("가입을 취소하였습니다.");
    }
}
// btn_app에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_app.addEventListener("click", onClick_app);

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

// id 가 btn-reset인 버튼 요소를 변수 btn_reset에 저장한다.
var btn_reset = document.querySelector("button#btn-reset");
// id 가 user_id인 인풋 요소를 변수 inId에 저장한다.
var inId  = document.querySelector("input#user_id");
// id 가 user_pass인 인풋 요소를 변수 inPass에 저장한다.
var inPass = document.querySelector("input#user_pass");

// 함수 onClick_re을 선언하고 매개변수 event를 추가한다.
function onClick_re(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 변수 num 에 prompt(입력창) 을 저장한다.
    var num = window.prompt("초기화 하시려면 100을 입력하세요.");

    // 만약 num 값이 100 일 경우
    if (num == 100){
        // inId에 "value" 와 ""(빈 값) 을 속성으로 저장한다.
        inId.setAttribute("value", "");
        // inPass에 "value" 와 ""(빈 값) 을 속성으로 저장한다.
        inPass.setAttribute("value", "");

        // 콘솔 창에 inId와 inPass의 value 값을 출력.
        console.log(inId.getAttribute("value"));
        console.log(inPass.getAttribute("value"));
    }
}
// btn_reset에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_reset.addEventListener("click", onClick_re);

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

// id 가 btn-odd인 버튼 요소를 변수 btn_odd에 저장한다.
var btn_odd = document.querySelector("button#btn-odd");

// 함수 onClick_odd을 선언하고 매개변수 event를 추가한다.
function onClick_odd (event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 변수 odd에 prompt(입력창) 을 저장한다.
    var odd = window.prompt("숫자를 입력해주세요");

    // 변수 result 에 빈 값을 저장한다.
    var result = "";

    // 반복문으로 변수 i에 값 0을 저장하고 i 가 odd 보다 작을때까지 반복한다.
    for (var i  = 0; i < odd; i++){
        // 만약 i를 2로 나눈 나머지가 1일 때 (홀수)
        if ( i % 2 == 1){
            // result에 result + i + ", "를 한 값을 저장한다.
            result += i + ", "
        }
        // 만약 i를 2로 나눈 나머지가 0일때 (짝수)
        else { 
            // result에 result + i + "."를 한 값을 저장한다.
            result += i + ".";
        }
    }
    // id 가 odd-result인 버튼 요소를 변수 oddResult에 저장한다.
    var oddResult = document.querySelector("div#odd-result");
    // oddResult의 내부 텍스트에 result 값을 저장한다.
    oddResult.innerText = result;
}
// btn_odd에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_odd.addEventListener("click", onClick_odd);

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

// id 가 btn-add-city인 버튼 요소를 변수 btn_city에 저장한다.
var btn_city = document.querySelector("button#btn-add-city");

// 함수 onClick_city를 선언하고 매개변수 event를 추가한다.
function onClick_city(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 변수 city 에 prompt(입력창) 을 저장한다.
    var city = window.prompt("도시명을 입력하세요.");

    // 조건문으로 해야하는 줄 알았는데 그럴 필요가 없었습니다..
    // if (city = ""){
    //     var city_list = document.querySelector("ul#city-list");
    //     city_list.innerText = city;
    // }
    // id 가 btn-reset인 버튼 요소를 변수 btn_reset에 저장한다.

    // id가 city-list인 ul 요소를 변수 city_list에 저장한다.
    var city_list = document.querySelector("ul#city-list");

    // 새로운 li 요소를 나타내기 위해 변수 newCityEl에 createElement로 새로운 li 요소를 저장한다.
    var newCityEl = document.createElement("li");

    // city_list의 자식 요소로 newCityEl를 저장한다.
    city_list.appendChild(newCityEl);

    // newCityEl의 내부 텍스트에 city를 저장한다.
    newCityEl.innerText = city;
}
// btn_city에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_city.addEventListener("click", onClick_city);

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

// id 가 btn-color인 버튼 요소를 변수 btn_color에 저장한다.
var btn_color = document.querySelector("button#btn-color");

// class 이름이 btn-sentence인 요소를 변수 btn_sen에 저장한다.
var sen = document.getElementsByClassName("sentence");

// 횟수를 체크할 변수 time을 선언하고 값으로 0을 저장한다.
var time = 0;

// 함수 onClick_color을 선언하고 매개변수 event를 추가한다.
function onClick_color(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 반복문으로 변수 i에 0을 저장하고 i 가 sen의 길이보다 작을때까지 반복한다.
    for(var i = 0; i <= sen.length - 1; i++){

        // 배열 i 번째 sen 요소에 스타일로 컬러 "red"를 저장한다.
        sen[i].style.color = "red";
        // 배열 time 번째 sen 요소에 스타일로 컬러 "black"를 저장한다.
        sen[time].style.color = "black";
    }
    // time (클릭 횟수) 가 증가한다.
    time++;

    // 만약 time이 sen의 길이와 같을때
    if(time == sen.length){
        // time에 0을 할당한다.
        time = 0;
    }
}
// btn_color에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_color.addEventListener("click", onClick_color);

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

// id 가 btn-go-top인 버튼 요소를 변수 btn_top에 저장한다.
var btn_top = document.querySelector("#btn-go-top");

// 함수 onClick_top을 선언하고 매개변수 event를 추가한다.
function onClick_top(event){

    // 기본 이벤트 기능을 되돌린다.
    event.preventDefault();

    // 아무런 변화가 없었다.
    // window.location.screenTop;

    // 현재 브라우저의 스크롤 x, y 값이 0인 곳으로 이동하도록 한다.
    window.scrollTo(0,0);
}
// btn_top에 클릭 이벤트를 추가하고 이벤트 헨들러를 할당한다.
btn_top.addEventListener("click", onClick_top);