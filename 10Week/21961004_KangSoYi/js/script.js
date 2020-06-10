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
var result = document.getElementById("result");
var values = document.getElementsByName("select_number");

var radioValue;

//plus
function onClickPlus(e) {
    e.preventDefault();
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        radioValue = values[i].value;}
    }
      result.innerText = parseInt(result.innerText) + parseInt(radioValue);
}
plus.addEventListener("click",onClickPlus);

//minus
function onClickMinus(e) {
    e.preventDefault();
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        radioValue = values[i].value;}
    }
      result.innerText = parseInt(result.innerText) - parseInt(radioValue);
}
minus.addEventListener("click",onClickMinus);

//multiple
function onClickMultiple(e) {
    e.preventDefault();
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        radioValue = values[i].value;}
    }
      result.innerText = parseInt(result.innerText) * parseInt(radioValue);
}
multiple.addEventListener("click",onClickMultiple);


//divide
function onClickDivide(e) {
    e.preventDefault();
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        radioValue = values[i].value;}
    }
      result.innerText = parseInt(result.innerText) / parseInt(radioValue);
}
divide.addEventListener("click",onClickDivide);


//percent
function onClickPercent(e) {
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        radioValue = values[i].value;}
    }
      result.innerText = parseInt(result.innerText) % parseInt(radioValue);
}
percent.addEventListener("click",onClickPercent);


//reset
function onClickRest(e) {
    e.preventDefault();
    result.innerText = 0;
}
reset.addEventListener("click", onClickRest);

