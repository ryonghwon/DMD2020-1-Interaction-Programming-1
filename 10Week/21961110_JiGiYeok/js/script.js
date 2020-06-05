/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.


/* 산술연산자 버튼 변수 반환.*/
var plus = document.getElementById("btn-plus");
var minus = document.getElementById("btn-minus");
var multiple = document.getElementById("btn-multiple");
var divide = document.getElementById("btn-divide");
var percent = document.getElementById("btn-percent");


/*라디오 버튼과 result 아이디를 가진 요소 불러오고 반환. */
var radioEls = document.querySelectorAll("input[name=select_number]");
var Result = document.getElementById("result");

var Num = 0; // 연산 누적 결과값.


// var status = 0; // status라는 값을 기입하여 초기상태와 연산이 눌러진 후를 비교해 보려 했습니다.
    
// 라디오 버튼에 이벤트 change를 주려 했지만 클릭시에 해당 라디오 변수 내에서 연산이 되어 실패하였습니다.
// function checkRadio(e){
//     if(status == 0){
//         Result.innerText = e.currentTarget.value;
//         // Num = parseInt(Result.innerText, 10); // Num 값은 change 될 때 마다 바뀜.
//     }
// }

// for(var i = 0; i < radioEls.length; i++) {
// radioEls[i].addEventListener("change", checkRadio);
// }


plus.addEventListener("click", function(e){ // plus 버튼을 눌렀을때.
    e.preventDefault();
    // status = 1;
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked){ // radioEls 각 숫자마다 체크가 될 때 마다.
            Num += parseInt(radioEls[i].value, 10); // Num 변수에 radioEls의 value 값을 10진수의 숫자값으로 변경하여 + 연산합니다.
            Result.innerText = Num; // 그후 Num 값을 Result 에 텍스트로 기입해줍니다.
            //console.log(Num);
        }
    }
    
    
});
minus.addEventListener("click", function(e){
    e.preventDefault();
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked){
            Num -= parseInt(radioEls[i].value, 10);
            Result.innerText = Num;
            //console.log(Num);
        }
    }
});
multiple.addEventListener("click", function(e){
    e.preventDefault();
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked){
            Num *= parseInt(radioEls[i].value, 10);
            Result.innerText = Num;
            //console.log(Num);
        }
    }
});
divide.addEventListener("click", function(e){
    e.preventDefault();
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked){
            Num /= parseInt(radioEls[i].value, 10);
            Result.innerText = Num;
            //console.log(Num);
        }
    }
});
percent.addEventListener("click", function(e){
    e.preventDefault();
    for(var i = 0; i < radioEls.length; i++) {
        if(radioEls[i].checked){
            Num %= parseInt(radioEls[i].value, 10);
            Result.innerText = Num;
            //console.log(Num);
        }
    }
});

// 초기화.
var Reset = document.getElementById("btn-reset");

Reset.addEventListener("click", function(e){
    e.preventDefault();
    Result.innerText = 0; // Result에 텍스트를 0을 기입해서 보이는 부분을 초기화시킵니다.
    Num = 0; // Num 변수를 0으로 초기화 시킵니다.
});