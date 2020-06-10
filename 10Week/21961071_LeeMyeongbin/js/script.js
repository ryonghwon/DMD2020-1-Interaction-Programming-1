/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// 요소 노드를 찾음
var Plus = document.querySelector("button#btn-plus");
var Minus = document.querySelector("button#btn-minus");
var Multiple = document.querySelector("button#btn-multiple");
var Divide = document.querySelector("button#btn-divide");
var Percent = document.querySelector("button#btn-percent");
var Reset = document.querySelector("button#btn-reset");

var Result = document.querySelector("div#result");

var radio = document.querySelectorAll("input[name=select_number]");

var ResultNum = 0;

// 1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
// 2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
// 3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.

// + (Plus)
// 변수 Plus에 클릭 이벤트 핸들러 추가
Plus.addEventListener("click", onClickPlus);

// 이벤트 함수 생성
function onClickPlus(e){
    // 기존 이벤트 동작 방지
    e.preventDefault();

    // 반복문을 통해 증가하는 값을 저장
    // 변수 i 가 radio 태그의 값보다 클때까지 1씩 증가
    for(var i = 0; i < radio.length; i++){
        // radio 태그의 배열 i 가 체크되어있다면
        if(radio[i].checked){ 
            // 0이었던 결과(ResultNum) 에 radio[i]의 값이 나오도록 한다
            ResultNum = radio[i].value;
        }
    }
    // 결과에 innerText로 ResultNum 값을 덧셈해서 출력
    Result.innerText = parseInt(Result.innerText) + parseInt(ResultNum);
}

// - (Minus)
Minus.addEventListener("click", onClickMinus);
function onClickMinus(e){
    e.preventDefault();

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            ResultNum = radio[i].value;
        }
    }
    // 결과에 innerText로 ResultNum 값을 뺄셈해서 출력
    Result.innerText = parseInt(Result.innerText) - parseInt(ResultNum);
}

// * (Multiple)
Multiple.addEventListener("click", onClickMultiple);
function onClickMultiple(e){
    e.preventDefault();

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            ResultNum = radio[i].value;
        }
    }
    // 결과에 innerText로 ResultNum 값을 곱셈해서 출력
    Result.innerText = parseInt(Result.innerText) * parseInt(ResultNum);
}

// ÷ (Divide)
Divide.addEventListener("click", onClickDivide);
function onClickDivide(e){
    e.preventDefault();

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            ResultNum = radio[i].value;
        }
    }
    // 결과에 innerText로 ResultNum 값을 나눗셈해서 출력
    Result.innerText = parseInt(Result.innerText) / parseInt(ResultNum);
}

// % (Percent)
Percent.addEventListener("click", onClickPercent);
function onClickPercent(e){
    e.preventDefault();

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            ResultNum = radio[i].value;
        }
    }
    // 결과에 innerText로 ResultNum 값의 나머지 값을 출력
    Result.innerText = parseInt(Result.innerText) % parseInt(ResultNum);
}

// 4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
// Reset 초기화
// 변수 Reset에 클릭 이벤트 핸들러 추가
Reset.addEventListener("click", onClickReset);
function onClickReset(e){
    e.preventDefault();

    // Result 내부 텍스트를 0으로 출력
    Result.innerText = 0;

    // 결과 값을 0으로 초기화
    ResultNum = 0;
}