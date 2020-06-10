/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var Plus = document.getElementById("btn-plus");
var Minus = document.getElementById("btn-minus");
var Multiple = document.getElementById("btn-multiple");
var Divide = document.getElementById("btn-divide");
var Percent = document.getElementById("btn-percent");
var Reset = document.getElementById("btn-reset");
// var Values = document.getElementsByName("select_number");

var Radio = document.querySelectorAll('input[name = "select_number"]');

//결과값
var ResultSum = 0;

//연산될 결과를 출력
var Result = document.getElementById("result");


// Plus
Plus.addEventListener("click", onPlus);
function onPlus(e){
    e.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            ResultSum += parseInt(Radio[i].value, 10);
        }
    }
    Result.innerText = ResultSum;
}

// Minus
Minus.addEventListener("click", onMinus);
function onMinus(e){
    e.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            ResultSum -= parseInt(Radio[i].value, 10);
        }
    }
    Result.innerText = ResultSum;
}

// Multiple
Multiple.addEventListener("click", onMultiple);
function onMultiple(e){
    e.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            ResultSum *= parseInt(Radio[i].value, 10);
        }
    }
    Result.innerText = ResultSum;
}

// Divide
Divide.addEventListener("click", onDivide);
function onDivide(e){
    e.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            ResultSum /= parseInt(Radio[i].value, 10);
        }
    }
    Result.innerText = ResultSum;
}

// Percent
Percent.addEventListener("click", onPercent);
function onPercent(e){
    e.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            ResultSum %= parseInt(Radio[i].value, 10);
        }
    }
    Result.innerText = ResultSum;
}

//Reset
Reset.addEventListener("click", onReset);
function onReset(e){
    e.preventDefault();
    ResultSum = 0;
    Result.innerText = ResultSum;
}