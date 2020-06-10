/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// 각 변수들을 선언해 요소 노드들을 불러옵니다 
var plus = document.getElementById('btn-plus');
var minus = document.getElementById('btn-minus');
var multiple = document.getElementById('btn-multiple');
var divide = document.getElementById('btn-divide');
var percent = document.getElementById('btn-percent');
var radio = document.querySelectorAll('input[name="select_number"]');
var result = document.getElementById('result');
var reset = document.getElementById('btn-reset');

var num = 0;

// plus 클릭이벤트함수 생성
plus.addEventListener("click", onClickPlus);
function onClickPlus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복문 실행
        if(radio[i].checked){ // radio의 i번째가 체크되면 실행 
            num += parseInt(radio[i].value); // 체크된 값을 정수로 변환하여 연산
        }
    }
    result.innerText = num; // 연산된 결과값을 텍스트로 출력
}
// minus 클릭이벤트함수 생성
minus.addEventListener("click", onClickMinus);
function onClickMinus(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복문 실행
        if(radio[i].checked){ // radio의 i번째가 체크되면 실행 
            num -= parseInt(radio[i].value); // 체크된 값을 정수로 변환하여 연산
        }
    }
    result.innerText = num; // 연산된 결과값을 텍스트로 출력
}
// multiple 클릭이벤트함수 생성
multiple.addEventListener("click", onClickMultiple);
function onClickMultiple(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복문 실행
        if(radio[i].checked){ // radio의 i번째가 체크되면 실행 
            num *= parseInt(radio[i].value); // 체크된 값을 정수로 변환하여 연산
        }
    }
    result.innerText = num; // 연산된 결과값을 텍스트로 출력
}
// divide 클릭이벤트함수 생성
divide.addEventListener("click", onClickDivide);
function onClickDivide(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복문 실행
        if(radio[i].checked){ // radio의 i번째가 체크되면 실행 
            num %= parseInt(radio[i].value); // 체크된 값을 정수로 변환하여 연산
        }
    }
    result.innerText = num; // 연산된 결과값을 텍스트로 출력
}
// percent 클릭이벤트함수 생성
percent.addEventListener("click", onClickPercent);
function onClickPercent(e){
    e.preventDefault();
    for(var i = 0; i < radio.length; i++){ // radio 요소 수 만큼 반복문 실행
        if(radio[i].checked){ // radio의 i번째가 체크되면 실행 
            num %= parseInt(radio[i].value); // 체크된 값을 정수로 변환하여 연산
        }
    }
    result.innerText = num; // 연산된 결과값을 텍스트로 출력
}
// result 클릭이벤트함수 생성
reset.addEventListener("click", onClickReset);
function onClickReset(e){
    e.preventDefault();
    result.innerText = 0; // 초기화
}