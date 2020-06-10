/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// 연산자 id를 쓰고 있는 요소 노드를 반환.
var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");

// radio input 요소 목록으로 반환.
var radio = document.querySelectorAll("input[name=select_number]");
// result 요소 노드 반환.
var result = document.getElementById("result");

// 연산된 값이 들어갈 변수 생성.
var num = 0;

// 클릭이벤트 생성.
plus.addEventListener("click", onClickPlus);
function onClickPlus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복
        if(radio[i].checked){ // radio의 i번째가 체크되면
            num += parseInt(radio[i].value); // 체크된 값을 기본 10진법으로 정수로 변환하여 + 연산
            result.innerText = num; // 연산된 값을 텍스트로 출력
        }
    }
}

// 연산기호만 바뀌고 이하동문.
minus.addEventListener("click", onClickMinus);
function onClickMinus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            num -= parseInt(radio[i].value);
            result.innerText = num;
        }
    }
}

multiple.addEventListener("click", onClickMultiple);
function onClickMultiple(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            num *= parseInt(radio[i].value);
            result.innerText = num;
        }
    }
}

divide.addEventListener("click", onClickDivide);
function onClickDivide(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            num /= parseInt(radio[i].value);
            result.innerText = num;
        }
    }
}

percent.addEventListener("click", onClickPercent);
function onClickPercent(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            num %= parseInt(radio[i].value);
            result.innerText = num;
        }
    }
}

// reset 요소 노드 반환
var reset = document.querySelector("button#btn-reset")
// reset변수에 클릭이벤트 생성
reset.addEventListener("click", onClickReset);
function onClickReset(e){
    e.preventDefault();
    result.innerText = 0; // 클릭하면 0 출력 (초기화)
}