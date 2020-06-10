/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var PlusBtn = document.getElementById("btn-plus");
var MinusBtn = document.getElementById("btn-minus");
var MultipleBtn = document.getElementById("btn-multiple");
var DivideBtn = document.getElementById("btn-divide");
var PercentBtn = document.getElementById("btn-percent");
var ResetBtn = document.getElementById("btn-reset");

var RadioInput = document.querySelectorAll("input[name=select_number]");
var result = document.getElementById("result");
var resultVal = 0; 

PlusBtn.addEventListener("click", OnClickPlusBtn);
function OnClickPlusBtn(e){
    e.preventDefault();
    for(var i = 0; i < RadioInput.length; i++){
        if(RadioInput[i].checked){
            resultVal += parseInt(RadioInput[i].value);
        }
    }
    result.innerText = resultVal;
}

MinusBtn.addEventListener("click", OnClickMinusBtn);
function OnClickMinusBtn(e){
    e.preventDefault();
    for(var i = 0; i < RadioInput.length; i++){
        if(RadioInput[i].checked){
            resultVal -= parseInt(RadioInput[i].value);
        }
    }
    result.innerText = resultVal;
}

MultipleBtn.addEventListener("click", OnClickMultipleBtn);
function OnClickMultipleBtn(e){
    e.preventDefault();
    for(var i = 0; i < RadioInput.length; i++){
        if(RadioInput[i].checked){
            resultVal *= parseInt(RadioInput[i].value);
        }
    }
    result.innerText = resultVal;
}

DivideBtn.addEventListener("click", OnClickDivide);
function OnClickDivide(e){
    e.preventDefault();
    for(var i = 0; i < RadioInput.length; i++){
        if(RadioInput[i].checked){
            resultVal /= parseInt(RadioInput[i].value);
        }
    }
    result.innerText = resultVal;
}

PercentBtn.addEventListener("click", OnClickPercent);
function OnClickPercent(e){
    e.preventDefault();
    for(var i = 0; i < RadioInput.length;i++){
        if(RadioInput[i].checked){
            resultVal %= parseInt(RadioInput[i].value);
        }
    }
    result.innerText = resultVal;
}

ResetBtn.addEventListener("click", OnClickReset);
function OnClickReset(e){
    e.preventDefault();
    resultVal = 0;
    result.innerText = 0;
}
