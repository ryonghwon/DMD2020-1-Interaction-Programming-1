/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");
var reset = document.getElementById("btn-reset");

var radio = document.querySelectorAll("input[name=select_number]");
var resultanswer = 0; //계산되어 나올 숫자 초기값은 0으로 지정

//Plus (+)
plus.addEventListener("click", onPlus);
function onPlus(event){
    event.preventDefault();
    for(var i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            resultanswer += parseInt(radio[i].value);
        }
    result.innerText = resultanswer;
    }
}

//Minus (-)
minus.addEventListener("click", onMinus);
function onMinus(event){
    event.preventDefault();
    for(var i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            resultanswer -= parseInt(radio[i].value);
        }
    result.innerText = resultanswer;
    }
}

//Multiple (*)
multiple.addEventListener("click", onMultiple);
function onMultiple(event){
    event.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultanswer *= parseInt(radio[i].value);
        }
    }
    result.innerText = resultanswer;
}

//Divide (/)
divide.addEventListener("click", onDivide);
function onDivide(event){
    event.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultanswer /= parseInt(radio[i].value);
        }
    }
    result.innerText = resultanswer;
}

//Percent (%)
percent.addEventListener("click", onPercent);
function onPercent(event){
    event.preventDefault();
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultanswer %= parseInt(radio[i].value);
        }
    }
    result.innerText = resultanswer;
}

//Reset (0)
reset.addEventListener('click', onReset);
function onReset(event){
    resultvalue = 0;
    result.innerText = resultanswer;
}