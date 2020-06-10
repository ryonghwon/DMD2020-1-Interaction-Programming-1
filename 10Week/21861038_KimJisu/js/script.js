/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 
   radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.
var bPlus = document.getElementById("btn-plus");         // +
var bMinus = document.getElementById("btn-minus");       // -
var bMultiple = document.getElementById("btn-multiple"); //*
var bDivide = document.getElementById("btn-divide");     // /
var bPercent = document.getElementById("btn-percent");   // %
var bReset = document.getElementById("btn-reset");       // 초기화

var radioInputs = document.querySelectorAll("input[name=select-numbers]"); // radio 타입 input 요소 5개
var result = document.getElementById("result");          // 결과값

var resultNum = 0; // 계산 결과값


function onClickPlus(e) // +
{
   e.preventDefault(); // 기존 이벤트 작동 X
   for(var i = 0; i < radioInputs.length; i++) // i 가 radioInputs 의 길이보다 작을 때
   {
      if(radioInputs[i].checked) // i 번의 radioInputs 가 체크되면
      {
         resultNum += parseInt(radioInputs[i].value, 10); // i 번의 radioInputs 의 값을 10진수 숫자로 변경하여 계산
         result.innerText = resultNum; // result 에 resultNum 의 계산 결과를 innerText 사용해 텍스트로 기입
      }
   }
}
bPlus.addEventListener("click", onClickPlus);


function onClickMinus(e) // -
{
   e.preventDefault();
   if(radioInputs[i].checked)
      {
         resultNum -= parseInt(radioInputs[i].value, 10);
         result.innerText = resultNum;
      }
}
bMinus.addEventListener("click", onClickMinus);


function onClickMultiple(e) // *
{
   e.preventDefault();
   if(radioInputs[i].checked)
      {
         resultNum *= parseInt(radioInputs[i].value, 10);
         result.innerText = resultNum;
      }
}
bMultiple.addEventListener("click", onClickMultiple);


function onClickDivide(e) // /
{
   e.preventDefault();
   if(radioInputs[i].checked)
      {
         resultNum /= parseInt(radioInputs[i].value, 10);
         result.innerText = resultNum;
      }
}
bDivide.addEventListener("click", onClickDivide);


function onClickPercent(e) // %
{
   e.preventDefault();
   if(radioInputs[i].checked)
      {
         resultNum %= parseInt(radioInputs[i].value, 10);
         result.innerText = resultNum;
      }
}
bPercent.addEventListener("click", onClickPercent);


function onClickReset(e) // 초기화
{
   e.preventDefault();
   //result = 0; // 바로 될 줄 알았는데 X
   result.innerText = 0; // result 도 위와 같이 innerText 사용해 기입
   resultNum = 0; // 계산 결과값도 초기화
}
bReset.addEventListener("click", onClickReset);