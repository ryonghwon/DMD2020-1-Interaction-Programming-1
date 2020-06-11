/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 
현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.
var plus = document.getElementById("btn-plus"); //+
var minus = document.getElementById("btn-minus");//-
var multiple = document.getElementById("btn-multiple");//*
var divide = document.getElementById("btn-divide");// /
var percent = document.getElementById("btn-percent");//%

var RadioEls = document.querySelectorAll("input[name=select_number]");
//라디오 버튼들
var Result = document.getElementById("result");

var Sum = 0;
 // 연산누적 결과값

var Reset = document.getElementById('btn-reset');
//초기화

plus.addEventListener("click",function(e) //버튼을 눌렀을때 코드를 실행한다 
{  e.preventDefault();
    for(var i = 0; i <RadioEls.length; i++)
    {
        if(RadioEls[i].checked)//숫자 체크할경우 
        { Sum += parseInt(RadioEls[i].value);}//숫자와 + 연산하여 결과값을 sum에 넣어준다 
    }
    Result.innerText = Sum;//결과값을 텍스트에 기입한다 

});

minus.addEventListener("click",function(e) //버튼을 눌렀을때 코드를 실행한다 
{  e.preventDefault();
    for(var i = 0; i <RadioEls.length; i++)
    {
        if(RadioEls[i].checked)//숫자 체크할경우 
        { Sum -= parseInt(RadioEls[i].value);}//숫자와 - 연산하여 결과값을 sum에 넣어준다 
    }
    Result.innerText = Sum;//결과값을 텍스트에 기입한다 

});

multiple.addEventListener("click",function(e) //버튼을 눌렀을때 코드를 실행한다 
{  e.preventDefault();
    for(var i = 0; i <RadioEls.length; i++)
    {
        if(RadioEls[i].checked)//숫자 체크할경우 
        { Sum *= parseInt(RadioEls[i].value);}//숫자와 * 연산하여 결과값을 sum에 넣어준다 
    }
    Result.innerText = Sum;//결과값을 텍스트에 기입한다 

});

divide.addEventListener("click",function(e) //버튼을 눌렀을때 코드를 실행한다 
{  e.preventDefault();
    for(var i = 0; i <RadioEls.length; i++)
    {
        if(RadioEls[i].checked)//숫자 체크할경우 
        { Sum /= parseInt(RadioEls[i].value);}//숫자와 / 연산하여 결과값을 sum에 넣어준다 
    }
    Result.innerText = Sum;//결과값을 텍스트에 기입한다 

});

percent.addEventListener("click",function(e) //버튼을 눌렀을때 코드를 실행한다 
{  e.preventDefault();
    for(var i = 0; i <RadioEls.length; i++)
    {
        if(RadioEls[i].checked)//숫자 체크할경우 
        { Sum %= parseInt(RadioEls[i].value);}//숫자와 % 연산하여 결과값을 sum에 넣어준다 
    }
    Result.innerText = Sum;//결과값을 텍스트에 기입한다 

});

Reset.addEventListener('click', function(e)//초기화버튼 누를시
{    e.preventDefault();
  
     sum = 0;//결과값을 0으로 
     Result.innerText = 0; //결과값을 기입하는 텍스트 또한 0으로 



});

