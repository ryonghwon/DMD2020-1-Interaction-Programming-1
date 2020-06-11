/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var btnPlusEl = document.getElementById("btn-plus");
var btnMinusEl = document.getElementById("btn-minus");
var btnMultipleEl = document.getElementById("btn-multiple");
var btnDivideEl = document.getElementById("btn-divide");
var btnPercentEl = document.getElementById("btn-percent");
var btnResetEl = document.getElementById("btn-reset");
var divResultEl = document.getElementById("result");

var radioEls = document.querySelectorAll("input[name=select_number]");


var _result = 0;

// plus
btnPlusEl.addEventListener("click", onClickbtnPlus);
function onClickbtnPlus(e) {
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked) {
            _result += parseInt(radioEls[i].value, 10);
            // console.log(_result);
        }
    }
    divResultEl.innerText = _result;
}

// minus
btnMinusEl.addEventListener("click", onClickbtnMinus);
function onClickbtnMinus(e) {
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked) {
            _result -= parseInt(radioEls[i].value, 10);
            // console.log(_result);
        }
    }
    divResultEl.innerText = _result;
}

// multiple
btnMultipleEl.addEventListener("click", onClickbtnMultiple);
function onClickbtnMultiple(e) {
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked) {
            _result *= parseInt(radioEls[i].value, 10);
            // console.log(_result);
        }
    }
    divResultEl.innerText = _result;
}

// divide
btnDivideEl.addEventListener("click", onClickbtnDivide);
function onClickbtnDivide(e) {
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked) {
            _result /= parseInt(radioEls[i].value, 10);
            // console.log(_result);
        }
    }
    divResultEl.innerText = _result;
}

// percent
btnPercentEl.addEventListener("click", onClickbtnPercent);
function onClickbtnPercent(e) {
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked) {
            _result %= parseInt(radioEls[i].value, 10);
            // console.log(_result);
        }
    }
    divResultEl.innerText = _result;
}


// 초기화
btnResetEl.addEventListener("click", onClickbtnReset);

function onClickbtnReset(e) {
    // e.preventDefault();
    _result = 0;
    divResultEl.innerText = _result;
} 