/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 
   연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.


// 각 연산자의 요소 노드를 찾아 변수 안에 넣어준다.
var plus = document.getElementById("btn-plus");
var mainus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");
var reset = document.getElementById("btn-reset");

/*
요소 노드를 제대로 찾았는지 확인
console.log(plus.innerHTML);
console.log(mainus.innerHTML);
console.log(multiple.innerHTML);
console.log(divide.innerHTML);
console.log(percent.innerHTML);
console.log(reset.innerHTML);

확인 완료 이상 무
*/

//피연산자 숫자 요소 노드를 변수 안에 넣어준다.
var n1 = document.getElementById("radio-1");
var n2 = document.getElementById("radio-2");
var n3 = document.getElementById("radio-3");
var n4 = document.getElementById("radio-4");
var n5 = document.getElementById("radio-5");

/*
요소 노드의 value 값 찾기
console.log(n1.value); 
console.log(n2.value);
console.log(n3.value);
console.log(n4.value);
console.log(n5.value);

확인 완료 이상 무

*/

// radio class 요소 노드
var radio = document.getElementsByClassName("radio");



//초기값 "0" 요소노드를 찾아 변수에 number에 넣어준다.
var _number = document.getElementById("result");
var number = _number.innerHTML;
//console.log(number);   output = 0



function onClickPlus(event){
     event.preventDefault();
     //console.log("클릭확인1");
    //
}

function onClickMainus(event){
     event.preventDefault();
     //console.log("클릭확인2");
}

function onClickMultiple(event){
     event.preventDefault();
     //console.log("클릭확인3");
}

function onClickDivide(event){
     event.preventDefault();
     //console.log("클릭확인4");
}

function onClickPercent(event){
     event.preventDefault();
     //console.log("클릭확인5");
}

function onClickReset(event){
     event.preventDefault();
     //console.log("클릭확인6");
}


plus.addEventListener("click",onClickPlus);
mainus.addEventListener("click",onClickMainus);
multiple.addEventListener("click",onClickMultiple);
divide.addEventListener("click",onClickDivide);
percent.addEventListener("click",onClickPercent);
reset.addEventListener("click",onClickReset);