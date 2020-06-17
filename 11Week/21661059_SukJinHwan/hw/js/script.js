  
/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.
var plus = document.getElementById("btn-plus");
//console.log(plus.innerHTML);
var minus = document.getElementById("btn-minus");
//console.log(mainus.innerHTML);
var multiple = document.getElementById("btn-multiple");
//console.log(multiple.innerHTML);
var divide = document.getElementById("btn-divide");
//console.log(divide.innerHTML);
var percent = document.getElementById("btn-percent");
//console.log(percent.innerHTML);
var reset = document.getElementById('btn-reset');
//console.log(reset.innerHTML);
var radio = document.querySelectorAll('input[name="select_number"]');

var result = document.getElementById('result');

var resultvalue = 0;



plus.addEventListener('click', btnPlus);

function btnPlus(evt)
{
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked)
        { 
            
            resultvalue = radio[i].value; 
            //console.log(plus);
        }
    }

    result.innerText = parseInt(result.innerText) + parseInt(resultvalue);
}

minus.addEventListener('click', btnMinus);
function btnMinus(evt)
{
    for(var i = 0; i < radio.length; i++)
    { 
        if(radio[i].checked)
        {
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) - parseInt(resultvalue);
}
multiple.addEventListener('click', btnMultiple);
function btnMultiple(evt)
{
    for(var i = 0; i < radio.length; i++)
    {
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) * parseInt(resultvalue);
}
divide.addEventListener('click', btnDivide);
function btnDivide(evt)
{
    for(var i = 0; i < radio.length; i++)
    {
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) / parseInt(resultvalue);
}
percent.addEventListener('click', btnPercent);
function btnPercent(evt)
{
    for(var i = 0; i < radio.length; i++)
    {
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) % parseInt(resultvalue);
}


reset.addEventListener('click', btnReset);
function btnReset(evt)
{

    result.innerText = 0;
}
// 정상작동