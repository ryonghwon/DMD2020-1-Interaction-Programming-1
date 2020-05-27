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
var bsb = document.getElementById("btn-student-number");

bsb.addEventListener("click", onClickbsb );

function onClickbsb(event){
    event.preventDefault();
    bsb.textContent = "21861021";
    window.alert ("학번이 입력되었습니다.");
}

var bsn = document.getElementById("btn-student-name");

bsn.addEventListener("click", onClickbsn );

function onClickbsn(event){
    event.preventDefault();
    bsn.textContent = "김소여";
    window.alert ("이름이 입력되었습니다.");
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
var Wid = innerWidth;
var Hei = innerHeight;

var bws = document.getElementById("btn-window-size");

bws.addEventListener("click", onClickbws );

function onClickbws(event){
    event.preventDefault();
    console.log("윈도우 콘텐츠의 영역 width :" + Wid + "px, height :" + Hei + "px 입니다.");


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

var bci = document.getElementById("btn-check-id");

bci.addEventListener("click", onClickbci );

function onClickbci(event){
    event.preventDefault();
    var UserId = document.getElementById("user_id");
    var UserIdA = UserId.value;
    console.log("input#user_id - value 속성 값의 문자열 개수는" + UserIdA.length + "입니다.")
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var cancel = document.getElementById("btn-cancel");

cancel.addEventListener("click", onClickcansel );

function onClickcansel(event){
    event.preventDefault();
    location.reload();
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
var apply = document.getElementById("btn-apply");

apply.addEventListener("click", onClickapply);

function onClickapply(event){
    event.preventDefault();
    var join = confirm("가입하시겠습니까?");
    if(join){
        alert("가입을 환영합니다!");
    }else{
        alert("가입을 취소하였습니다.");
    }
    //가입하시겠습니까? 창이 반복에서 세번씩 뜨는데 왜 그런지 잘 모르겠습니다!!
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var reset = document.getElementById("btn-reset");
var Id = document.getElementById("user_id");
var Password = document.getElementById("user_pass");

reset.addEventListener("click", onClickreset);

function onClickreset(event){
    event.preventDefault();
    var hun = prompt("초기화하시려면 100을 입력하세요.");
    if (hun == 100){
        Id.setAttribute("value", "");
        Password.setAttribute("value", "");
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
var odd1 = document.getElementById("btn-odd");
var odd2 = document.getElementById("odd-result");

odd1.addEventListener("click", onClickodd1);

function onClickodd1(event){
    event.preventDefault();

    var num = prompt("숫자를 입력해주세요.");
    var result = "";

    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            if (i <= num - 2){ 
                result += i + ", ";
            } else { 
                result += i + ".";
            }
        }
    }
    odd2.textContent = result;
}

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var cityAdd = document.getElementById("btn-add-city");
var cityList = document.getElementById("city-list");

cityAdd.addEventListener("click", onClickcityAdd);

function onClickcityAdd(event){

    event.preventDefault();

    var city = prompt("도시명을 입력하세요.");
    var Listcity = document.createElement("li");
    cityList.appendChild(Listcity);
    Listcity.textContent = city;
}

//도시추가하기를 눌렀을때 이벤트가 발생하지않고 홀수 구하기를 클릭했을때 실행됩니다...



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
var Color = document.getElementById("btn-color");
var sen = document.getElementsByClassName("sentence");
var click = 0;

Color.addEventListener("click", onClickColor);

function onClickColor(event){
    event.preventDefault();
    for (var i = 0; i<= sen.length - 1; i++) {
        sen[i].style.color = "red";
        sen[click].style.color = "black"
    }
    click++
    if (click == sen.length) {
        click = 0;
    }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var top = document.getElementById("btn-go-top");

top.addEventListener("click",onClicktop);

function onClicktop(event) {
    event.preventDefault();
    scrollTo(0, 0);
} 

}

//전체적으로 위에서 입력한 클릭이벤트를 먼저 실행하지 않으면 다른 이벤트가 실행되지않습니다!ㅠㅠ 잘못한건가요??