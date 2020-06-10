/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var result = document.getElementById("result");
var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var reset = document.getElementById("btn-reset");
var percent = document.getElementById("btn-percent");
//var radio = document.getElementsByClassName("radio");
//var radio = document.querySelector("select-numbers");
//var radio = document.querySelectorAll("select-numbers");
//var radio = document.querySelectorAll("input[name ="select-numbers"]");
//var radio = document.querySelectorAll('input[name ="select-numbers"]');
//var radio = document.querySelectorAll('input[name ="select_numbers"]');
//var radio = document.getElementsByClassName("select_numbers");
//var radio = document.getElementsByClassName('input[name ="select_numbers"]');
var radio = document.querySelectorAll('input[name="select_number"]');
//var number = 0;
//var Num = 0;
var Num = 0;

plus.addEventListener("click", onClickplus);
function onClickplus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        //number + parseInt(radio[i].value);
        //number = parseInt(radio[i].value);
        //number += radio[i].value;
        //number = radio[i].value;
        Num = radio[i].value;
        //console.log("radio[i]")
    }
    //result.innerText = parseInt(result.innerText) + parseInt(number);
    }
    //result.innerText = number;
    //result.innerText = parseInt(result.innerText) + parseInt(number.innerText); //NaN
    //result.innerText = parseInt(result.innerText) + parseInt(number);
    //console.log(plus)
    //console.log(result.innerText = parseInt(result.innerText) + parseInt(number))// 0만 계속 출력
    result.innerText = parseInt(result.innerText) + parseInt(Num);
}

/* minus.addEventListener("click", onClickplus); //왜 플러스 눌렀는데 마이너스가... // onClickplus...
function onClickplus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) - parseInt(Num);
} */

minus.addEventListener("click", onClickminus);
function onClickminus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) - parseInt(Num);
}

multiple.addEventListener("click", onClickmultiple);
function onClickmultiple(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) * parseInt(Num);
}

divide.addEventListener("click", onClickdivide);
function onClickdivide(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) / parseInt(Num);
}

/* percent.addEventListener("click", onClickpercent);
function onClickpercent(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) %= parseInt(Num);
} */
percent.addEventListener("click", onClickpercent);
function onClickpercent(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++)
    {
    if(radio[i].checked)
    {
        Num = radio[i].value;
    }
    }
    result.innerText = parseInt(result.innerText) % parseInt(Num);
}

reset.addEventListener("click", onClickreset);
function onClickreset(e){
    e.preventDefault();
    
        Num = 0
        result.innerText = 0
}