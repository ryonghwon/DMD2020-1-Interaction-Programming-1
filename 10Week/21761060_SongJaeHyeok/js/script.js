/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var plus = document.getElementById("btn-plus"),
    minus = document.getElementById("btn-minus"),
    multiple = document.getElementById("btn-multiple"),
    divide = document.getElementById("btn-divide"),
    percent = document.getElementById("btn-percent"),
    reset = document.getElementById("btn-reset"),
    result = document.getElementById("result"),
    ////name이 select_number인 input을 radioEls에 대입
    radioEls = document.querySelectorAll("input[name=select_number]"),
    num = 0;



//plus버튼을 눌렀을때 이벤트가 실행
plus.addEventListener("click", calculatePlus)
function calculatePlus(){
    //radioEls은 목록이여서 for반복문을 사용
    for(var i = 0 ; i < radioEls.length ; i++){
        if (radioEls[i].checked) {
            //해당radioEls[i]에서 나온 값을 parseInt를 사용하여 숫자로 변환
            num = num + parseInt(radioEls[i].value,10);
            //num의 값을 result안에다가 넣음
            result.innerText = num;
        }
    }
}
minus.addEventListener("click", calculateMinus)
function calculateMinus(){
    for(var i = 0 ; i < radioEls.length ; i++){
        if (radioEls[i].checked) {
            num = num - parseInt(radioEls[i].value,10);
            result.innerText = num;
        }
    }
}
multiple.addEventListener("click", calculateMultiple)
function calculateMultiple(){
    for(var i = 0 ; i < radioEls.length ; i++){
        if (radioEls[i].checked) {
            num = num * parseInt(radioEls[i].value,10);
            result.innerText = num;
        }
    }
}
divide.addEventListener("click", calculateDivide)
function calculateDivide(){
    for(var i = 0 ; i < radioEls.length ; i++){
        if (radioEls[i].checked) {
            num = num / parseInt(radioEls[i].value,10);
            result.innerText = num;
        }
    }
}
percent.addEventListener("click", calculatePercent)
function calculatePercent(){
    for(var i = 0 ; i < radioEls.length ; i++){
        if (radioEls[i].checked) {
            num = num % parseInt(radioEls[i].value,10);
            result.innerText = num;
        }
    }
}
reset.addEventListener("click", resultReset)
function resultReset(){
    result.innerText = 0;
}


