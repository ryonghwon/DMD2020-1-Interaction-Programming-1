//console.log("외부 자바스크립트 로드");

/*
Quest 1.
1. button#btn-student-number 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 자신의 학번이 span#student-number 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
학번이 입력되었습니다.
----------
3. button#btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
4. 3(순서) 이벤트 호출 시 자신의 이름이 span#student-name 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
이름이 입력되었습니다.
----------
*/
// Answer 1.

var bsNum = document.querySelector("button#btn-student-number");
var sNum = document.querySelector("span#student-number");
//console.log(bsNum);
//console.log(sNum);

bsNum.addEventListener('click', onClickA);

function onClickA(event){
    
    sNum.innerHTML = "21961074";
    window.alert("학번이 입력되었습니다.");
}

var bsName = document.querySelector("button#btn-student-name");
var sName = document.querySelector("span#student-name");
//console.log(bEl);
//console.log(sEl);

bsName.addEventListener('click', onClickB);

function onClickB(event){
    sName.innerHTML = "이상원";
    window.alert("이름이 입력되었습니다.");
}



/*
Quest 2.
1. button#btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 2.
var bwSize = document.querySelector("button#btn-window-size");

bwSize.addEventListener('click', onClickC);

function onClickC(event){
    console.log("윈도우 콘텐츠의 영역 width : " + window.innerWidth + " px, height : " + window.innerHeight+" px 입니다.");
}


/*
Quest 3.
1. button#btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
input#user_id - value 속성 값의 문자열 개수는 ____ 입니다.
----------
*/
// Answer 3.
var bcId = document.querySelector("button#btn-check-id");


bcId.addEventListener('click', onClickD);

function onClickD(event){
    event.preventDefault();
    var uIdl = document.getElementById("user_id").value.length;
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + uIdl + "개 입니다.");

}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var bCancel = document.querySelector("button#btn-cancel");

bCancel.addEventListener('click', onClickE);

function onClickE(event){
    event.preventDefault();
    window.location.reload();
}


/*
Quest 5.
1. button#btn-apply 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 환영합니다!
----------
4. 사용자가 취소를 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 취소하였습니다.
----------
*/
// Answer 5.
var bApply = document.querySelector("button#btn-apply");

bApply.addEventListener('click', onClickF);

function onClickF(event){
    var app = confirm("가입하시겠습니까?");
    if(app){
        alert("가입을 환영합니다.");
    }else{
        alert("가입을 취소하였습니다.");
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var bReset = document.querySelector("button#btn-reset");
var uId = document.querySelector("input#user_id");
var uPass = document.querySelector("input#user_pass");
bReset.addEventListener('click', onClickG);

function onClickG(event){
    event.preventDefault();
    var b_reset = prompt("초기화하시려면 100을 입력하세요.");
    if(b_reset == 100){
        //uId.setAttribute("value","");
        //uPass.setAttribute("value","");
        uId.value = "";
        uPass.value = "";
        
    }
}





/*
Quest 7.
1. button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
----------
메시지)
문자열 연산 예시)
2(순서) 다이얼로그창에 입력한 숫자가 10인 경우 : 1, 3, 5, 7, 9.
2(순서) 다이얼로그창에 입력한 숫자가 5인 경우 : 1, 3, 5.
----------
*/
// Answer 7.

var bOdd = document.querySelector("button#btn-odd");
var Oddnum = document.querySelector("div#odd-result");
bOdd.addEventListener('click',onClickH)

function onClickH(event){
    event.preventDefault();
    var Odd = prompt("숫자를 입력해주세요.");
    var result = "";
    
    for(var i =0; i <= Odd; i++){
        if(i%2 == 1){
            if (i <= Odd - 2) {
            result += i + ", ";
            } else {
            result += i + ".";
            }
        }
    }
        Oddnum.innerText = result;
    }
        

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var bAC = document.querySelector("button#btn-add-city");
var ulEl = document.getElementsByTagName("ul")[0];
var newcityEl = document.createElement("li");

bAC.addEventListener('click', onClickI);

function onClickI(event){
    event.preventDefault();
    var city = prompt("도시명을 입력하세요.");
    ulEl.appendChild(newcityEl);
    newcityEl.innerText = city;
}


/*
Quest 9.
1. button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 1(순서) 이벤트 호출 시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
----------
* 예시 - p요소의 전체 개수가 4개일 때, button#btn-color 클릭 횟수에 따른 p 요소 스타일 변경
횟수 1 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 2 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
횟수 3 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'black', p요소(3) - 'red'
횟수 4 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'black'
횟수 5 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 6 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
...
...
----------
*/
// Answer 9.

var bColor = document.querySelector("button#btn-color");
var sentence = document.getElementsByClassName("sentence");
var count = 0; //마우스 클릭 횟수 담는 변수
bColor.addEventListener('click', onClickJ);

function onClickJ(event){
    event.preventDefault();
    for(var i = 0; i<=sentence.length - 1; i ++){
        sentence[i].style.color = "red";
        sentence[count].style.color = "black";
    }count++; // 클릭할때마다 변수 증가
    if (count == sentence.length) {
        count = 0;
      }
    

}




/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var bTop = document.querySelector("button#btn-go-top");

bTop.addEventListener('click', onClickK);

function onClickK(event){
    event.preventDefault();
    window.scrollTo(0,0);
}