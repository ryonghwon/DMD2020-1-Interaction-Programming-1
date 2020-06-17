/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.
// 각 연산자, 초기화
var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");
var reset = document.getElementById("btn-reset");

// 체크될 radio
var radio = document.querySelectorAll("input[name='select_number']");

// 초기값
var result = document.getElementById("result");

// 연산값
var number = 0;

// 이벤트 리스너로 클릭 이벤트 생성
plus.addEventListener("click", onClickPlus);
function onClickPlus(e){
    // for 반복문 사용
    for(var i = 0; i < radio.length; i++){
        // i값이 체크되어 있을 때
        if(radio[i].checked){
            // 연산값(number)에 i값만큼 더해라
            number += parseInt(radio[i].value);
        }
    }
    // 연산값 출력
    result.innerText = number;
}

minus.addEventListener("click", onClickMinus);
function onClickMinus(e){

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            number -= parseInt(radio[i].value);
        }
    }
    result.innerText = number;
}

multiple.addEventListener("click", onClickMultiple);
function onClickMultiple(e){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            number *= parseInt(radio[i].value);
        }
    }
    result.innerText = number;
}

divide.addEventListener("click", onClickDivide);
function onClickDivide(e){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            number /= parseInt(radio[i].value);
        }
    }
    result.innerText = number;
}

percent.addEventListener("click", onClickPercent);
function onClickPercent(e){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            number %= parseInt(radio[i].value);
        }
    }
    result.innerText = number;
}

reset.addEventListener("click", onClickReset);
function onClickReset(e){
    // 초기화값 0
    number = 0;
    result.innerText = number;
}