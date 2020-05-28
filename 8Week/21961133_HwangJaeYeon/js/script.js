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
var buttonEl = document.getElementById("btn-student-number"); //이벤트 헨들러 추가
var spanEl = document.getElementById("student-number"); //위의 값이 내부에 입력 (학번)

function onMouseDown(evernt){
    event.preventDefault();
    spanEl.innerText = "21961133";
    alert("학번이 입력되었습니다")
}
buttonEl.addEventListener("mousedown",onMouseDown); //학번 이벤트 발생

var button2El = document.getElementById("btn-student-name"); //이벤트 헨들러 추가
var span2El = document.getElementById("student-name"); //위의 값이 내부에 입력 (학번)

function onMouseDown2(evernt){
    event.preventDefault();
    span2El.innerText = "황재연";
    alert("이름이 입력되었습니다")
}
button2El.addEventListener("mousedown",onMouseDown2); //이름 이벤트 발생

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
var ws = document.getElementById("btn-window-size");

var wh = window.innerHeight;
var ww = window.innerWidth;

function windows(event){
    event.preventDefault();
    console.log("윈도우 콘텐츠의 영역 width :" + ww + "px, height :" + wh + "px 입니다.");
}
ws.addEventListener("mousedown", windows);

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
var ui = document.getElementById("btn-check-id");

function idcheck(event){
    event.preventDefault();
    var uid = document.getElementById("user_id");
    var uidc = uid.value;

    console.log("input#user_id - value 속성 값의 문자열 개수는" + uidc.length + "입니다.");
}

//uid.addEventListener("mousedown", idcheck); -> 오타로 인한 오류발생
ui.addEventListener("mousedown", idcheck);


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var bk = document.getElementById("btn-cancel");

function cancel(event){
    event.preventDefault();
    window.location.reload();
}

bk.addEventListener("mousedown", cancel);

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
var btnapply = document.getElementById("btn-apply");

function apply(event){
    event.preventDefault();
    var name1 = confirm("가입하시겠습니까?");
    if(name1 == true){
        alert("가입을 환영합니다.")
    }else{
        alert("가입을 취소합니다.")
    }
}

btnapply.addEventListener("mousedown", apply);

//var name1 = comfirm("가입하시겠습니까?"); -> 오타로 인한 오류발생

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var bts = document.getElementById("btn-reset");

function reset(event){
    event.preventDefault();
    var set1 = prompt("초기화하시려면 100을 입력하세요");
    if(reset == 100){
        var inputset = document.getElementById("user_id");
        var inputset2 = document.getElementById("user_pass");
        inputset.setAttribute("value", "");
        inputset2.setAttribute("value", "");
    }else{
        alert("초기화를 종료")
    }
}

bts.addEventListener("mousedown", reset);

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
var odd = document.getElementById("btn-odd");

function odda(event){
    var inputNumber = prompt("숫자를 입력해주세요");
    var value = ""
    for(var i = 1; i<=inputNumber; i++){
        if(i % 2 != 0){
            value += i+ ",";
        }
    }
    console.log(inputNumber + "까지의 홀수는" + value);
}
odd.addEventListener("mousedown", odda);

//var odd = document.querySelector("btn-odd"); -> addEventListener를 찾지 못하는 오류발생
//getElementById로 변경 후 결과값 출력 완료.


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var addc = document.getElementById("btn-add-city");
var addcli = document.getElementById("ulcity-list");

addc.addEventListener("mousedown", function(){
    var inputcity = prompt("도시명을 입력하세요");
    var create = document.createElement("li");
    addcli.appendChild(create);
    create.innerText = inputcity;
});

//var inputcity = prompt("도시명을 입력하세요"); 이후 오류발생
//querySelector로 변경해봤지만 오히려 addc.addEventListener("mousedown", function(){ 인식 오류 발생
//원인을 못찾겠습니다... 죄송합니다...


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
var color = document.getElementById("btn-color");
var count = 0;

function color2(event){
    event.preventDefault();

    var color3 = document.getElementsByClassName("sentence");
    var color4 = document.getElementsByClassName("section");
    color4[1].style.color = "red";

    if(count == 0){
        color3[count].style.color = "black";
        count += 1;
    }else if(count == 1){
        color3[count].style.color = "black";
        count += 1;
    }else if(count == 3){
        color3[count].style.color = "black";
        count += 1;
    }else if(count == 3){
        color3[count].style.color = "black";
        count += 1;
    }else{
        count += 1;
        color3[count].style.color = "black";
    }
}
color.addEventListener("mousedown",color2);


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var gotop = document.getElementById("btn-go-top");

gotop.addEventListener("mousedown", clickgotop);

function clickgotop(event){
    event.preventDefault();
    window.scrollTo(0, 0);
}

