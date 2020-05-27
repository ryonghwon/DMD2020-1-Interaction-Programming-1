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

var btn_std1 = document.querySelector("button#btn-student-number");
// console.log(btn_std1);

var span_std1 = document.querySelector("span#student-number");
// console.log(span_std1);

function onClick_std1(event){
    event.preventDefault();
    // console.log("이름이 입력되었습니다.");
    span_std1.innerText = "21961071";
    window.alert("학번이 입력되었습니다.");
}
btn_std1.addEventListener("click", onClick_std1);

// ---------------------------------------------
var btn_std2 = document.querySelector("button#btn-student-name");
// console.log(btn_std);

var span_std2 = document.querySelector("span#student-name");
// console.log(span_std);

function onClick_std2(event){
    event.preventDefault();
    // console.log("이름이 입력되었습니다.");
    span_std2.innerText = "이명빈";
    window.alert("이름이 입력되었습니다.");
}
btn_std2.addEventListener("click", onClick_std2);


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

var btn_size = document.querySelector("button#btn-window-size");
var width = window.innerWidth;
var height = window.innerHeight;
// console.log(width, height);

function onClick_size(event){
    event.preventDefault();
    console.log("윈도우 콘텐츠의 영역 width : " + width + " px, height : "+ height +" px 입니다.");
}
btn_size.addEventListener("click", onClick_size);

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

var btn_checkId = document.querySelector("button#btn-check-id");

function onClick_Id(event){
    event.preventDefault();
    var user = document.getElementById("user_id");
    var user_attri = user.value;
    // console.log(user_attri.length);
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + user_attri.length + " 입니다.")
}
btn_checkId.addEventListener("click", onClick_Id);

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btn_can = document.querySelector("button#btn-cancel");

function onClick_can(event){
    event.preventDefault();
    window.location.reload();
}
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

var btn_app = document.querySelector("button#btn-apply");

function onClick_app(event){
    event.preventDefault();
    var apply = window.confirm("가입하시겠습니까?");
    if(apply === true){
        window.alert("가입을 환영합니다!");
    }
    else{
        window.alert("가입을 취소하였습니다.");
    }
}

btn_app.addEventListener("click", onClick_app);

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btn_reset = document.querySelector("button#btn-reset");
var inId  = document.querySelector("input#user_id");
var inPass = document.querySelector("input#user_pass");

function onClick_re(event){
    event.preventDefault();
    var num = window.prompt("초기화 하시려면 100을 입력하세요.");

    if (num == 100){
        inId.setAttribute("value", "");
        inPass.setAttribute("value", "");

        console.log(inId.getAttribute("value"));
        console.log(inPass.getAttribute("value"));
    }
}
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

var btn_odd = document.querySelector("button#btn-odd");

function onClick_odd (event){
    var odd = window.prompt("숫자를 입력해주세요");
    var result = "";

    for (var i  = 0; i < odd; i++){
        if ( i % 2 == 1){
            result += i + ", "
        }
        else { 
            result += i + ".";
        }
    }
    var oddResult = document.querySelector("div#odd-result");
    oddResult.innerText = result;
}
btn_odd.addEventListener("click", onClick_odd);

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btn_city = document.querySelector("button#btn-add-city");
function onClick_city(event){
    event.preventDefault();
    var city = window.prompt("도시명을 입력하세요.");
    // if (city = ""){
    //     var city_list = document.querySelector("ul#city-list");
    //     city_list.innerText = city;
    // }
    var city_list = document.querySelector("ul#city-list");
    var newCityEl = document.createElement("li");
    city_list.appendChild(newCityEl);
    newCityEl.innerText = city;
}
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

var btn_color = document.querySelector("button#btn-color");
var sen = document.getElementsByClassName("sentence");
var time = 0;

function onClick_color(event){
    event.preventDefault();
    for(var i = 0; i <= sen.length - 1; i++){
        sen[i].style.color = "red";
        sen[time].style.color = "black";
    }
    time++;

    if(time == sen.length){
        time = 0;
    }
}
btn_color.addEventListener("click", onClick_color);

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btn_top = document.querySelector("#btn-go-top");
function onClick_top(event){
    event.preventDefault();
    // window.location.screenTop;
    window.scrollTo(0,0);
}
btn_top.addEventListener("click", onClick_top);