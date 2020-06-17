/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// document.getElementById("id 명");
// 작성한 id 명과 일치하는 요소를 찾고, 이를 나타내는 Element 객체를 반환한다.
// 변수 Plus에 "btn-plus" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Plus = document.getElementById("btn-plus");
// 변수 Minus에 "btn-minus" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Minus = document.getElementById("btn-minus");
// 변수 Multiple에 "btn-multiple" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Multiple = document.getElementById("btn-multiple");
// 변수 Divide에 "btn-divide" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Divide = document.getElementById("btn-divide");
// 변수 Percent에 "btn-percent" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Percent = document.getElementById("btn-percent");

// document.querySelectorAll("");
// 반환객체는 nodeList이기때문에 for문을 사용해야 한다.
// input 요소 중 select_number라는 동일한 name을 가진 요소들을 찾도록 한다.
// 변수 RadioEls에 radio input 요소들을 목록으로 반환하도록 한다.
var RadioEls = document.querySelectorAll("input[name=select_number]");

// 변수 Result에 "result" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Result = document.getElementById("result");

// 산술 연산을 진행하여 나온 값을 저장하기 위한 변수 Total을 선언하고 초기값을 0으로 설정한다.
var Total = 0;

// 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 한다.
// 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현한다.
// + 연산자 버튼
function onClickPlus(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // for 반복문을 사용한다.
    // 변수 i는 초기값으로 0을 가지며, RadioEls의 배열 길이보다 작을 때 까지 진행하고, 1씩 증가한다.
    for (var i = 0; i < RadioEls.length; i++){
        // if 문을 사용해 radio 타입 input 요소를 선택했을 때 true가 되도록 한다.
        // 여러개의 radio 타입 input 요소가 있을 때 체크할 수 있다.
        // RadioEls[i].checked
        if (RadioEls[i].checked){
            // if문이 true일 경우 산술 연산을 진행하여 나온 값을 저장하는 변수 Total에는 Total이 가진 값에 RadioEls[i]에 해당하는 값을 10진수로 변환하여 더한 값을 저장한다.
            // RadioEls[i]의 값은 배열에서 문자열의 형태로 있기 때문에 문자열을 정수형인 int로 바꾸면서 10진수의 형태가 되도록 한다.
            // 10진수일 경우 생략이 가능하다.
            // Total += parseInt(RadioEls[i].value);
            Total += parseInt(RadioEls[i].value, 10);
            // console.log(Total);
        }
    }
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
// 요소에 클릭이 발생될 때.
// 요소 노드를 찾고, 이벤트를 추가하고, 핸들로 콜백 함수를 생성하고 정의한다.
Plus.addEventListener("click", onClickPlus);

// - 연산자 버튼
function onClickMinus(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // for 반복문을 사용한다.
    // 변수 i는 초기값으로 0을 가지며, RadioEls의 배열 길이보다 작을 때 까지 진행하고, 1씩 증가한다.
    for (var i = 0; i < RadioEls.length; i++){
        // if 문을 사용해 radio 타입 input 요소를 선택했을 때 true가 되도록 한다.
        // 여러개의 radio 타입 input 요소가 있을 때 체크할 수 있다.
        // RadioEls[i].checked
        if (RadioEls[i].checked){
            // if문이 true일 경우 산술 연산을 진행하여 나온 값을 저장하는 변수 Total에는 Total이 가진 값에 RadioEls[i]에 해당하는 값을 10진수로 변환하여 뺀 값을 저장한다.
            // Total -= parseInt(RadioEls[i].value);
            Total -= parseInt(RadioEls[i].value, 10);
            // console.log(Total);
        }
    }
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
Minus.addEventListener("click", onClickMinus);

// * 연산자 버튼
function onClickMultiple(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // for 반복문을 사용한다.
    // 변수 i는 초기값으로 0을 가지며, RadioEls의 배열 길이보다 작을 때 까지 진행하고, 1씩 증가한다.
    for (var i = 0; i < RadioEls.length; i++){
        // if 문을 사용해 radio 타입 input 요소를 선택했을 때 true가 되도록 한다.
        // 여러개의 radio 타입 input 요소가 있을 때 체크할 수 있다.
        // RadioEls[i].checked
        if (RadioEls[i].checked){
            // if문이 true일 경우 산술 연산을 진행하여 나온 값을 저장하는 변수 Total에는 Total이 가진 값에 RadioEls[i]에 해당하는 값을 10진수로 변환하여 곱한 값을 저장한다.
            // Total *= parseInt(RadioEls[i].value);
            Total *= parseInt(RadioEls[i].value, 10);
            // console.log(Total);
        }
    }
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
Multiple.addEventListener("click", onClickMultiple);

// / 연산자 버튼
function onClickDivide(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // for 반복문을 사용한다.
    // 변수 i는 초기값으로 0을 가지며, RadioEls의 배열 길이보다 작을 때 까지 진행하고, 1씩 증가한다.
    for (var i = 0; i < RadioEls.length; i++){
        // if 문을 사용해 radio 타입 input 요소를 선택했을 때 true가 되도록 한다.
        // 여러개의 radio 타입 input 요소가 있을 때 체크할 수 있다.
        // RadioEls[i].checked
        if (RadioEls[i].checked){
            // if문이 true일 경우 산술 연산을 진행하여 나온 값을 저장하는 변수 Total에는 Total이 가진 값에 RadioEls[i]에 해당하는 값을 10진수로 변환하여 나눈 값을 저장한다.
            // Total /= parseInt(RadioEls[i].value);
            Total /= parseInt(RadioEls[i].value, 10);
            // console.log(Total);
        }
    }
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
Divide.addEventListener("click", onClickDivide);

// % 연산자 버튼
function onClickPercent(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // for 반복문을 사용한다.
    // 변수 i는 초기값으로 0을 가지며, RadioEls의 배열 길이보다 작을 때 까지 진행하고, 1씩 증가한다.
    for (var i = 0; i < RadioEls.length; i++){
        // if 문을 사용해 radio 타입 input 요소를 선택했을 때 true가 되도록 한다.
        // 여러개의 radio 타입 input 요소가 있을 때 체크할 수 있다.
        // RadioEls[i].checked
        if (RadioEls[i].checked){
            // if문이 true일 경우 산술 연산을 진행하여 나온 값을 저장하는 변수 Total에는 Total이 가진 값에 RadioEls[i]에 해당하는 값을 10진수로 변환하여 나눈 후의 나머지 값을 저장한다.
            // Total %= parseInt(RadioEls[i].value);
            Total %= parseInt(RadioEls[i].value, 10);
            // console.log(Total);
        }
    }
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
Percent.addEventListener("click", onClickPercent);


// reset
// 초기화 버튼을 클릭시 숫자를 0으로 초기화하도록 한다.
// 변수 Reset에 "btn-reset" 라는 id 명을 쓰고 있는 요소 노드를 반환하도록 한다.
var Reset = document.getElementById("btn-reset");
function onClickReset(evt){
    // 해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록 방지해주는 메서드.
    evt.preventDefault();
    // 초기화 버튼을 누르면 Total은 초기 값인 0으로 돌아가도록 한다.
    Total = 0;
    // 초기화 확인.
    // console.log(Total);
    // Result 요소 안에 Total 값을 기입한다.
    Result.innerText = Total;
}
Reset.addEventListener("click", onClickReset);
