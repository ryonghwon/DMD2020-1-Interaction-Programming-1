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

//초기값 "0" 요소노드를 찾아 변수에 number에 넣어준다.
var number = document.getElementById("result");

// 현재 체크되어있는 숫자값!
var radioEls = document.querySelectorAll("input[name=select_number]");
//console.log(radioEls); // length = 5

//연산한 값을 넣을 변수
var Total = 0;

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

/*
//피연산자 숫자 요소 노드를 변수 안에 넣어준다.
var n1 = document.getElementById("radio-1");
var n2 = document.getElementById("radio-2");
var n3 = document.getElementById("radio-3");
var n4 = document.getElementById("radio-4");
var n5 = document.getElementById("radio-5");


radio class 요소 노드
var radio = document.getElementsByClassName("radio");

요소 노드의 value 값 찾기
console.log(n1.value); 
console.log(n2.value);
console.log(n3.value);
console.log(n4.value);
console.log(n5.value);

확인 완료 이상 무
*/

/*
var number = _number.innerHTML;
console.log(number);
console.log(number);   output = 0
console.log(typeof number);
값이 문자열이라 클릭시 숫자열로 먼저 치환을 해야할것같다.
 */


/*
for(var i = 0; i < radioEls.length; i++)
     {
          radioEls[i].addEventListener("change",function(event){
          //console.log("change");
          //console.log(event.currentTarget.value);
          //클릭된 숫자가 출력이됨 이 숫자를 반환 해서 피연산자 값으로 쓸수 있을까
          num = event.currentTarget.value;
          /*
          parseInt(number.value);
          parseInt(num.value); // value 를 문자열에서 숫자로 변경
          숫자열로 안바뀜...

          다른방법으로 해보자. 이벤트 함수 안에 넣어보자!
          });
     } 
*/



//먼저 input태그 중 체크된 요소가 콘솔창에 어떻게 출력되는지 확인
radiochecked = radioEls[0].checked;
console.log(radiochecked);
// output = true

// input태그 value값이 문자열이라 숫자열로 바꿔줘야한다.
radiotype = radioEls[0].value
console.log(typeof radiotype);


function onClickPlus(event){
     event.preventDefault();
     //console.log("클릭확인1");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked) // 선택된 노드 요소 True 라면
          {
          //Total += radioEls[i].value;
          Total += parseInt(radioEls[i].value);  // 체크박스 [1,2,3,4,5] 중 체크된 값과 radioEls[i].value 값을 연산해준다.
          number.innerText = Total; // 연산된 값을 "result id"를 가진 노드 요소에  출력
          }
     }
}

function onClickMainus(event){
     event.preventDefault();
     //console.log("클릭확인2");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked) 
          {
          Total -= parseInt(radioEls[i].value);  
          number.innerText = Total; 
          }
     }
}

function onClickMultiple(event){
     event.preventDefault();
     //console.log("클릭확인3");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked) 
          {
          Total *= parseInt(radioEls[i].value);  
          number.innerText = Total;
          }
     }
}

function onClickDivide(event){
     event.preventDefault();
     //console.log("클릭확인4");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked) 
          {
          Total /= parseInt(radioEls[i].value);  
          number.innerText = Total; 
          }
     }
}

function onClickPercent(event){
     event.preventDefault();
     //console.log("클릭확인5");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked)
          {
          Total %= parseInt(radioEls[i].value);  
          number.innerText = Total; 
          }
     }
}

function onClickReset(event){
     event.preventDefault();
     //console.log("클릭확인6");
     for(var i = 0; i < radioEls.length; i++)
     {
          if(radioEls[i].checked)
          {
          Total = 0; // 연산된 값을 0으로 바꾸고
          number.innerText = Total; // // 초기화된 값을 "result id"를 가진 노드 요소에 출력
          }
     }
}


plus.addEventListener("click",onClickPlus);
mainus.addEventListener("click",onClickMainus);
multiple.addEventListener("click",onClickMultiple);
divide.addEventListener("click",onClickDivide);
percent.addEventListener("click",onClickPercent);
reset.addEventListener("click",onClickReset);