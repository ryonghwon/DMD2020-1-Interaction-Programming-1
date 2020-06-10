/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// <button id="btn-plus">+</button><button id="btn-minus">-</button><button id="btn-multiple">*</button><button id="btn-divide">/</button><button id="btn-percent">%</button><button id="btn-reset">초기화</button>
var plusEl = document.querySelector("button#btn-plus");
var minusEl  = document.querySelector("button#btn-minus");
var multipleEl = document.querySelector("button#btn-multiple");
var diviedEl  = document.querySelector("button#btn-divide");
var percentEl = document.querySelector("button#btn-percent")
var resetEl = document.querySelector("button#btn-reset");

var radio = document.querySelectorAll("input[name=select_number]");
var resultEl = document.querySelector("div#result");
var resultValue = 0;

plusEl.addEventListener('click', onclickPlus);

function onclickPlus(evt){
    evt.preventDefault();
    for(var i = 0; i < radio.length; i ++){
        if(radio[i].checked){
            resultValue += parseInt(radio[i].value);
            //console.log(valueEl);
            resultEl.innerText = resultValue;
        }
    }
}

minusEl.addEventListener('click', onclickMinus);

function onclickMinus(evt){
    evt.preventDefault();
    for(var i = 0; i < radio.length; i ++){
        if(radio[i].checked){
            resultValue -= parseInt(radio[i].value);
            //console.log(valueEl);
            resultEl.innerText = resultValue;
        }
    }
}

multipleEl.addEventListener('click', onclickMultiple);

function onclickMultiple(evt){
    evt.preventDefault();
    for(var i = 0; i < radio.length; i ++){
        if(radio[i].checked){
            resultValue *= parseInt(radio[i].value);
            //console.log(valueEl);
            resultEl.innerText = resultValue;
        }
    }
}

diviedEl.addEventListener('click', onclickDivied);

function onclickDivied(evt){
    evt.preventDefault();
    for(var i = 0; i < radio.length; i ++){
        if(radio[i].checked){
            resultValue /= parseInt(radio[i].value);
            //console.log(valueEl);
            resultEl.innerText = resultValue;
        }
    }
}

percentEl.addEventListener('click', onclickPercent);

function onclickPercent(evt){
    evt.preventDefault();
    for(var i = 0; i < radio.length; i ++){
        if(radio[i].checked){
            resultValue %= parseInt(radio[i].value);
            //console.log(valueEl);
            resultEl.innerText = resultValue;
        }
    }
}

resetEl.addEventListener('click', onclickReset);

function onclickReset(evt){
    evt.preventDefault();
    resultEl.innerText = 0;
}