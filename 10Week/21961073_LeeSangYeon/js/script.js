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
//var resultvalue = 0;
var resultvalue = 0;

/*
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
*/

plus.addEventListener('click', btnPlus);
function btnPlus(evt){
    for(var i = 0; i < radio.length; i++){ // for반복문 사용. 새로운 변수 i를 생성하고 i가 radio의 길이보다 크다면 i는 증가
        if(radio[i].checked){ // 만약 radio의 [i] 요소가 체크되어 있다면
            //result + radio[i].value; // 시행되지 않음 여기에 연산자를 사용하는 것이 아닌 듯 함...
            resultvalue = radio[i].value; // resultvalue은 radio의 배열값과 같다.
            //console.log(plus);
        }
    }
    // 1만 추가되고 더 이상 추가되지 않음
    //result.innerText = resultvalue;
    //옆으로 추가되지만... 1만 추가 됨 01111 이런 식으로/... 도대체 뭐가 부족한겨..!!!
    //result.innerText = result.innerText + resultvalue;
    // result 값을 int형으로 바꾸기 위해 paraInt(문자열을 실수로 바꾸는 함수) 추가
    result.innerText = parseInt(result.innerText) + parseInt(resultvalue);
}

minus.addEventListener('click', btnMinus);
function btnMinus(evt){
    for(var i = 0; i < radio.length; i++){ 
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) - parseInt(resultvalue);
}
multiple.addEventListener('click', btnMultiple);
function btnMultiple(evt){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) * parseInt(resultvalue);
}
divide.addEventListener('click', btnDivide);
function btnDivide(evt){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) / parseInt(resultvalue);
}
percent.addEventListener('click', btnPercent);
function btnPercent(evt){
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            resultvalue = radio[i].value;
        }
    }
    result.innerText = parseInt(result.innerText) % parseInt(resultvalue);
}

//4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
reset.addEventListener('click', btnReset);
function btnReset(evt){
    //result = 0;
    result.innerText = 0;
}