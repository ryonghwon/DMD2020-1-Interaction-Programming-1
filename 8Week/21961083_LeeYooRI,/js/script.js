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

var stNumBtn = document.getElementById("btn-student-number"),
stNum = document.getElementById("student-number");

stNumBtn.addEventListener("click", onClickstNum); //클릭 이벤트를 추가합니다.
e.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
function onClickstNum(e) {   //매개변수 이벤트를 할당합니다.
  stNum.textContent = "21961083";   //내부에 학번을 입력합니다.
  alert("학번이 입력되었습니다.");   //경고창으로 "학번이 입력되었습니다."를 출력합니다.
}

var stNameBtn = document.getElementById("btn-student-name"),
  stName = document.getElementById("student-name");

sNameBtn.addEventListener("click", onClickstName);   //클릭 이벤트를 추가합니다.
function onClickstName(e) {    //매개변수 이벤트를 할당합니다.
  e.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
  sName.textContent = "이유림";   //내부에 이름을 입력합니다
  alert("이름이 입력되었습니다.");   //경고창으로 "이름이 입력되었습니다."를 출력합니다.
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

var btnWsize = document.querySelector("button#btn-window-size"); // button#btn-window-size 요소를 변수 btnWsize에 할당.

var winH = window.innerHeight;   //윈도우의 높이값을 변수 winH에 할당.
var winW = window.innerWidth;   //윈도우의 가로값을 변수 winW에 할당.

btnWsize.addEventListener("click", onClickbtnWsize);   //btnWsize에 클릭 이벤트와 이벤트 핸들러를 추가 후 클릭시마다 이벤트 발생.
function onClickbtnWsize(event){   //함수 onClickbtnWsize를 선언 후 매개변수로 event 할당.
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
    console.log("윈도우 콘텐츠의 영역 width : " + winW + "px, height : " + winH + "px 입니다.");   //콘솔에 "윈도우 콘텐츠의 영역 width : px, height: px 입니다."를 출력합니다.
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

var btnCId = document.querySelector("button#btn-check-id");   //button#btn-check-id 요소를 btnCId에 할당합니다.
btnCId.addEventListener("click", onClickBtnCId);   //btnCId에 클릭 이벤트와 이벤트 핸들러를 추가후 클릭시 실행.
function onClickBtnCId(event){   //함수 onClickBtnCId를 선언 후  매개변수로 event 할당.
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
    var uIdCount = document.getElementById("user_id");    //uIdCount 변수를 생성후 아이디가 'user_id'인 요소의 value값 길이를 할당합니다.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + uIdCount + " 입니다."); // 콘솔에 value 속성 값의 문자열 개수를 문자열로 출력합니다.
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btnCancel = document.querySelector("button#btn-cancel");   //button#btn-cancel 요소를 변수 btnCancel에 할당.
btnCancel.addEventListener("click", onCbtnCancel);   //btnCancel에 클릭 이벤트와 이벤트 핸들러를 추가 후 클릭시 함수 onClickbtnCancel을 실행.
function onCbtnCancel(event){   //함수 onCbtnCancel를 생성 후 매개변수로 event 할당.
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
    window.location.reload();   //브라우저를 새로고침합니다.
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

var btnApply = document.querySelector("button#btn-apply");   //button#btn-apply 요소를 변수 btnApply에 할당합니다.
btnApply.addEventListener("click", onClickbtnApply);   //btnApply에 클릭 이벤트와 이벤트 핸들러를 추가후 클릭시 함수 onClickbtnApply 실행.
function onClickbtnApply(event){   //함수 onClickbtnApply를 생성후 매개변수로 event 할당.
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
    var applyJ = window.confirm("가입하시겠습니까?");   //"가입하시겠습니까?"라는 메세지를 포함한 확인창을 변수 applyIn에 할당 및 출력.
    if(applyJ === true){   //확인창을 확인 선택한 경우
        window.alert("가입을 환영합니다!");   //경고창으로 "가입을 환영합니다!"를 출력.
    }else if(applyJ === false){   //확인창을 취소 선택한 경우
        window.alert("가입을 취소하였습니다.")   //경고창으로 "가입을 취소하였습니다."를 출력.
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btnReset = document.querySelector("button#btn-reset");   //button#btn-reset 요소를 변수 btnReset에 할당.
btnReset.addEventListener("click", onClickbtnReset);   //btnReset에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnReset을 실행합니다.

var inUId = document.querySelector("input#user_id");   //input#user_id 요소를 변수 inUId에 할당.
var inUId = document.querySelector("input#user_pass");   //input#user_pass 요소를 변수 inUPw에 할당.

function onClickbtnReset(event){   //함수 onClickbtnReset를 생성후 매개변수로 event 할당.
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
    var reset = window.prompt("초기화하시려면 100을 입력하세요.");   //"초기화하시려면 100을 입력하세요."라는 메세지를 포함한 다이얼로그창을 변수 reset에 할당 및 출력.
    if(reset == 100){   //resetOk가 100이 입력이 되었을 경우.
        inUId.value = null;   //inUId의 value값을 null로 변경.
        inUId.value = null;   //inUId의 value값을 null로 변경.
    }
}


/*
Quest 7.
1. button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 
    div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
----------
메시지)
문자열 연산 예시)
2(순서) 다이얼로그창에 입력한 숫자가 10인 경우 : 1, 3, 5, 7, 9.
2(순서) 다이얼로그창에 입력한 숫자가 5인 경우 : 1, 3, 5.
----------
*/
// Answer 7.

var btnOdd = document.querySelector("button#btn-odd");   //button#btn-odd 요소를 변수 btnOdd에 할당.
btnOdd.addEventListener("click", onCBOdd);   //btnOdd에 클릭 이벤트와 이벤트 핸들러를 추가후 클릭시 함수 onCBOdd을 실행.
event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.
function onCBOdd(event){   //함수 onCBOdd를 생성후 매개변수로 event 할당.
    var OddResult = window.prompt("숫자를 입력해주세요.");   //"숫자를 입력해주세요."라는 메세지를 포함한 다이얼로그창을 변수 OddResult에 할당 및 출력.
    var Result = ""; // 문자열로 합산할 변수 Result를 생성후 초기값으로 "" 할당.
    for(var i = 1; i <= OddResult; i++){ // for문으로 변수 i 초기값 1, i가 OddResult보다 크거나 같으면 for문 종료.
        if(i <= OddResult - 2){   
            Result += i + ", ";  //if문 i가 사용자가 입력한 값보다 -2보다 작을시, Result에 "result + i,"를 대입연산합니다.
        }else{   
            Result += i + ".";   //마지막 홀수열에는 Result에 i와 문자열 "."를 합산해줍니다.
        }
        i += 1;   //i에 + 1씩 더해줌으로써 +2씩 증가.
    }
    divOddResult.innerText = Result; // 변수 divOddResult에 Result 값을 텍스트로 기입해 보여줍니다.
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btnAddCity = document.querySelector("button#btn-add-city");   //button#btn-add-city 요소를 변수 btnAddCity에 할당.
btnAddCity.addEventListener("click", onCBAddCity);   //btnAddCity에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onCBAddCity을 실행합니다.

function onCBAddCity(event){   //함수 onCBAddCity를 생성 후 매개변수로 event 할당.
    event.preventDefault();  //기본으로 설정된 이벤트를 차단합니다.
    var city = window.prompt("도시명을 입력하세요.");  //"도시명을 입력하세요."라는 메세지가 포함된 다이얼로그창을 변수 city에 할당 및 출력.
    var ulCityList = document.querySelector("ul#city-list");  //ul#city-list 요소를 변수 ulCityList에 할당.
    var newCityEl = document.createElement("li");   //li 요소를 생성 후 변수 newCityEl에 할당.

    ulCityList.appendChild(newItemEl);   //ulCityList 마지막에 newCityEl 추가.
    newCityEl.innerText = city;   //내부에 city를 입력.
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
var btnColor = document.querySelector('button#btn-color');   //아이디가 'btn-color'인 버튼 요소를 btnColor 변수에 할당합니다.
var stc = document.getElementsByClassName('sentence');   // 클래스가 'sentence'인 요소들을 senten 변수에 할당합니다.

var click = 0;   //클릭한 횟수를 담을 변수 click을 선언후 0 할당.

btnColor.addEventListener('click', colorChange);   //btnColor 클릭 이벤트를 추가하고 이벤트 핸들러로 colorChange 함수를 할당합니다.
function colorChange(event){   //함수 colorChange 선언 후 매개변수로 event 할당.
    
    event.preventDefault();   //기본으로 설정된 이벤트를 차단합니다.

    for(var i = 0; i < stc.length; i++){   //0부터 senten의 개수만큼 증가하는 반복문
        stc[i].style.color = 'red';   //i번째 senten 요소의 스타일 컬러를 red로 변경합니다.
        stc[click].style.color = 'black'   //i번째 senten 요소의 스타일 컬러를 black으로 변경합니다.
    }
    click++; 

    if(click == stc.length){  
        click = 0;   //클릭한 횟수가 문장의 개수와 같으면 클릭 변수에 0을 할당하여 0번째 senten부터 재시작합니다.
    }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btnGoTop = document.querySelector("button#btn-go-top");   //button#btn-go-top 요소를 변수 btnGoTop에 할당합니다.
btnGoTop.addEventListener("click", onClickbtnGoTop);   //btnGoTop에 클릭 이벤트와 이벤트 핸들러를 추가후 클릭시 함수 onClickbtnGoTop 할당.

function onClickbtnGoTop(event){   //함수 onClickbtnGoTop를 생성후 매개변수로 event를 할당.
    event.preventDefault();  //기본으로 설정된 이벤트를 차단합니다.
    window.scrollTo(0, 0);   //브라우저의 최상단 좌표(0,0)으로 이동.
}