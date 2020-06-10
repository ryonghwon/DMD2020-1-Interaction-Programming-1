/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 
radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/

// Answer.

//연산자(+, -, *, /, %) 
var Plus = document.getElementById("btn-plus");  // +
var Minus = document.getElementById("btn-minus");  // -
var Multiple = document.getElementById("btn-multiple");  // *
var Divide = document.getElementById("btn-divide");  // /
var Percent = document.getElementById("btn-percent");  // %
var Reset = document.getElementById("btn-reset"); // 초기화

var Radio = document.querySelectorAll('input[name = "select_number"]');

//결과값
var Num = 0;

//연산 후의 값 출력
var Result = document.getElementById("result");

// +(Pluse) 버튼
Plus.addEventListener("click", onPlus);
function onPlus(event){
    event.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){ //클릭할 때 마다 
            Num += parseInt(Radio[i].value, 10); //숫자를 계산하여 
            
        }
        Result.innerText = Num; //텍스트로 기입합니다
        //console.log(Num);
    }
}

// -(Minus) 버튼
Minus.addEventListener("click", onMinus);
function onMinus(event){
    event.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            Num -= parseInt(Radio[i].value, 10);
            
        }
        Result.innerText = Num;
        //console.log(Num);
    }
}

// *(Miltiple) 버튼 
Multiple.addEventListener("click", onMultiple);
function onMultiple(event){
    event.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            Num *= parseInt(Radio[i].value, 10);
            
        }
        Result.innerText = Num;
        //console.log(Num);
    }
}

// /(Divide) 버튼
Divide.addEventListener("click", onDivide);
function onDivide(event){
    event.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            Num /= parseInt(Radio[i].value, 10);
            
        }
        Result.innerText = Num;
        //console.log(Num);
    }
}

// %(Percent) 버튼
Percent.addEventListener("click", onPercent);
function onPercent(event){
    event.preventDefault();
    for(var i = 0; i < Radio.length; i++){
        if(Radio[i].checked){
            Num %= parseInt(Radio[i].value, 10);
            
        }
        Result.innerText = Num;
        //console.log(Num);
    }
}

// Reset(초기화) 버튼
Reset.addEventListener("click", onReset);
function onReset(event){
    event.preventDefault();
    Num = 0; //변수를 0으로 초기화
    Result.innerText = Num; 
}