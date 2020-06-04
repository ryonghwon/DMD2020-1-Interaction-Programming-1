/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

var result = document.getElementById("result"); // 연산된 결과를 담을 result변수를 지정합니다
var plusBtn = document.getElementById("btn-plus");
var minusBtn = document.getElementById("btn-minus");
var multipleBtn = document.getElementById("btn-multiple");
var divideBtn = document.getElementById("btn-divide");
var percentBtn = document.getElementById("btn-percent");
var resetBtn = document.getElementById("btn-reset");

var values = document.getElementsByName("select_number"); // 인풋요소의 네임을 변수로 지정합니다
var radioValue;
//console.log(result.innerText);

plusBtn.addEventListener("click", function () {
  // 클릭 이벤트 함수로 클릭기능을 부가합니다
  for (var i = 0; i < values.length; i++) {
    // 반복문으로 values변수 안에 담긴 인풋요소들의 수만큼 반복합니다.
    if (values[i].checked) {
      // 만약 i번째 인풋요소가 체크되어 있다면
      radioValue = values[i].value; // i번째 인풋요소의 밸류값을 radioValue변수에 담습니다.
    }
  }
  result.innerText = parseInt(result.innerText) + parseInt(radioValue);
  // 현재 result변수안의 값을 int정수로 바꾸고 위의 반목문에서 나온 값 radioValue 또한 int정수로 바꿔주어 서로 더합니다
  // 그리고 그 값을 result.innerText에 저장하여 값을 출력합니다
});

minusBtn.addEventListener("click", function () {
  for (var i = 0; i < values.length; i++) {
    if (values[i].checked) {
      radioValue = values[i].value;
    }
  }
  result.innerText = parseInt(result.innerText) - parseInt(radioValue);
});

multipleBtn.addEventListener("click", function () {
  for (var i = 0; i < values.length; i++) {
    if (values[i].checked) {
      radioValue = values[i].value;
    }
  }
  result.innerText = parseInt(result.innerText) * parseInt(radioValue);
});

divideBtn.addEventListener("click", function () {
  for (var i = 0; i < values.length; i++) {
    if (values[i].checked) {
      radioValue = values[i].value;
    }
  }
  result.innerText = parseInt(result.innerText) / parseInt(radioValue);
});

percentBtn.addEventListener("click", function () {
  for (var i = 0; i < values.length; i++) {
    if (values[i].checked) {
      radioValue = values[i].value;
    }
  }
  result.innerText = parseInt(result.innerText) % parseInt(radioValue);
});

resetBtn.addEventListener("click", function () {
  result.innerText = 0; //리셋 버튼이 눌리면 0을 출력합니다
});
