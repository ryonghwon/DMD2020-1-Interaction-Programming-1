/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.
// 연산 버튼 불러오기
var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");
// 초기화 버튼 불러오기
var reset = document.getElementById("btn-reset");

// radio input 요소 목록으로 반환
var radioEls = document.querySelectorAll("input[name=select_number]");
// console.log(radioEls);

// 결과값 불러오기
var result = document.getElementById("result");
// console.log(result);

/* 연산된 값을 일시 저장할 변수 선언 - 바로 result에 innerText를 하면 연산되지 않고
   옆으로 붙기만 하기 때문에 연산해준 다음 결과값을 할당해주는 알고리즘을 써야함 */
var number = 0;

// 클릭 시 함수 호출 핸들러 할당
// 사칙연산 버튼 클릭 시
plus.addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) { // value에 checked된 radio일 경우(bool : true)
            number += parseInt(radioEls[i].value, 10);
            result.innerText = number;
        }
    }
});
minus.addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) {
            number -= parseInt(radioEls[i].value, 10);
            result.innerText = number;
        }
    }
});
multiple.addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) {
            number *= parseInt(radioEls[i].value, 10);
            result.innerText = number;
        }
    }
});
divide.addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) {
            number /= parseInt(radioEls[i].value, 10);
            result.innerText = number;
        }
    }
});
percent.addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) {
            number %= parseInt(radioEls[i].value, 10);
            result.innerText = number;
        }
    }
});

// 초기화 버튼 클릭 시
reset.addEventListener("click", function(e) {
    e.preventDefault();
    result.innerText = 0;
    number = 0;
});