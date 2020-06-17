/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.


var result=document.getElementById("result");
var radio = document.querySelectorAll("input[name=select_number]");
var num = 0;

// +
var plus = document.querySelector("button#btn-plus");
// console.log(plus);
plus.addEventListener("click", onClickPlus);
function onClickPlus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ //radio의 개수만큼 반복하는 for문
        if(radio[i].checked){ //조건문 : radio가 checked되어있을 경우
            // var num = 0; //값을 담아줄 변수 선언
            // num += (radio[i].value); 01234... 이렇게 문자열로 정리된다
            // result.innerText = num; 

            num += parseInt(radio[i].value ,10); //10진법으로 변환한다
            result.innerText = num; 
        }
    }
}

// -
var minus = document.querySelector("button#btn-minus");
// console.log(minus);
minus.addEventListener("click", onClickMinus);
function onClickMinus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked){ 
            num -= parseInt(radio[i].value,10); 
            result.innerText = num;
        }
    }
}

// *
var multiple = document.querySelector("button#btn-multiple");
// console.log(multiple);
multiple.addEventListener("click", onClickMultiple);
function onClickMultiple(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked){ 
            num *= parseInt(radio[i].value,10);
            result.innerText = num; 
        }
    }
}

// /
var divide = document.querySelector("button#btn-divide");
// console.log(divide);
divide.addEventListener("click", onClickDivide);
function onClickDivide(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked){
            num /= parseInt(radio[i].value,10); 
            result.innerText = num; 
        }
    }
}

// %
var percent = document.querySelector("button#btn-percent");
// console.log(percent);
percent.addEventListener("click", onClickPercent);
function onClickPercent(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked){ 
            num %= parseInt(radio[i].value,10); 
            result.innerText = num;
        }
    }
}
var reset = document.querySelector("button#btn-reset")
// console.log(reset);
reset.addEventListener("click", onClickReset);
function onClickReset(e){
    e.preventDefault();
    location.reload();
    //페이지 새로고침 = 초기화!
}
