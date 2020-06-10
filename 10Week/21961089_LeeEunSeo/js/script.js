/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var btnPlus = document.getElementById("btn-plus"); // + 버튼.
var btnMinus = document.getElementById("btn-minus"); // - 버튼.
var btnMultiple = document.getElementById("btn-multiple"); // * 버튼.
var btnDivide = document.getElementById("btn-divide"); // / 버튼.
var btnPercent = document.getElementById("btn-percent"); // % 버튼.
var btnReset = document.getElementById("btn-reset"); // 초기화 버튼.

var resultEl = document.getElementById("result"); // 결과값.
var radioEls = document.querySelectorAll("input[name=select_number]"); // radio 요소 선택.
var _result = 0; // 결과값의 초기값을 0으로 설정.

// +
btnPlus.addEventListener("click", onClickBtnPlus);
function onClickBtnPlus(evt){
    evt.preventDefault();
    for(var i = 0; i < radioEls.length; i++){
        if(radioEls[i].checked){
            _result += parseInt(radioEls[i].value, 10);
            console.log(_result);
        }
    }
    resultEl.innerText = _result;
}

// -
btnMinus.addEventListener("click", onClickBtnMinus);
function onClickBtnMinus(evt){
    evt.preventDefault();
    for(var i = 0; i < radioEls.length; i++){
        if(radioEls[i].checked){
            _result -= parseInt(radioEls[i].value, 10);
            console.log(_result);
        }
    }
    resultEl.innerText = _result;
}

// *
btnMultiple.addEventListener("click", onClickBtnMultiple);
function onClickBtnMultiple(evt){
    evt.preventDefault();
    for(var i = 0; i < radioEls.length; i++){
        if(radioEls[i].checked){
            _result *= parseInt(radioEls[i].value, 10);
            console.log(_result);
        }
    }
    resultEl.innerText = _result;
}

// /
btnDivide.addEventListener("click", onClickBtnDivide);
function onClickBtnDivide(evt){
    evt.preventDefault();
    for(var i = 0; i < radioEls.length; i++){
        if(radioEls[i].checked){
            _result /= parseInt(radioEls[i].value, 10);
            console.log(_result);
        }
    }
    resultEl.innerText = _result;
}

// %
btnPercent.addEventListener("click", onClickBtnPercent);
function onClickBtnPercent(evt){
    evt.preventDefault();
    for(var i = 0; i < radioEls.length; i++){
        if(radioEls[i].checked){
            _result %= parseInt(radioEls[i].value, 10);
            console.log(_result);
        }
    }
    resultEl.innerText = _result;
}

// 초기화.
btnReset.addEventListener("click", onClickBtnReset);
function onClickBtnReset(evt){
    evt.preventDefault();
    _result = 0;
    resultEl.innerText = _result;
}
