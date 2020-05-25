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
var btnSnumber = document.querySelector("button#btn-student-number"); // button#btn-student-number 요소를 변수 btnSnumber에 할당.
btnSnumber.addEventListener("click", onClickbtnSnumber); // btnSnumber에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnSnumber을 실행합니다.

var sSnumber = document.querySelector("span#student-number"); // span#student-number 요소를 변수 sSnumber에 할당.

function onClickbtnSnumber(event){ // 함수 onClickbtnSnumber를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    sSnumber.innerText = "21961110"; // sSnumber에 "21961110"이라는 텍스트를 기입합니다.
    window.alert("학번이 입력되었습니다."); // 경고창으로 "학번이 입력되었습니다."를 출력하게 합니다. 
}

var btnSname = document.querySelector("button#btn-student-name"); // button#btn-student-name 요소를 변수 btnSname에 할당.
btnSname.addEventListener("click", onClickbtnSname); // btnSname에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnSname을 실행합니다.

var sSname = document.querySelector("span#student-name"); // span#student-name 요소를 변수 sSname에 할당.

function onClickbtnSname(event){ // 함수 onClickbtnSname를 생성하고 매개변수로 event를 넣어줍니다.
    // console.log("클릭");
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    sSname.innerText = "지기역";  // sSname에 "지기역"이라는 텍스트를 기입합니다.
    window.alert("이름이 입력되었습니다"); // 경고창으로 "이름이 입력되었습니다"를 출력하게 합니다. 
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
var winiH = window.innerHeight; // 윈도우의 콘텐츠 높이값을 변수 winiH에 할당.
var winiW = window.innerWidth; // 윈도우의 콘텐츠 가로값을 변수 winiW에 할당.

var btnWsize = document.querySelector("button#btn-window-size"); // button#btn-window-size 요소를 변수 btnWsize에 할당.
btnWsize.addEventListener("click", onClickbtnWsize); // btnWsize에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnWsize을 실행합니다.
function onClickbtnWsize(event){ // 함수 onClickbtnWsize를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    console.log("윈도우 콘텐츠의 영역 width : " + winiW + "px, height : " + winiH + "px 입니다."); // 콘솔에 윈도우 콘텐츠의 영역의 너비, 높이값을 문자열로 출력.
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
var btnCid = document.querySelector("button#btn-check-id"); // button#btn-check-id 요소를 변수 btnCid에 할당.
btnCid.addEventListener("click", onClickBtnCid); // btnCid에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickBtnCid을 실행합니다.

function onClickBtnCid(event){ // 함수 onClickBtnCid를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    var uId = document.getElementById("user_id"); // id요소인 user_id를 변수 uId에 할당.
    var uIdAttri = uId.value; // uId의 속성값 value를 변수 uIdAttri에 할당.
    // console.log(uIdAttri.length);
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + uIdAttri.length + " 입니다."); // 콘솔에 value 속성 값의 문자열 개수를 문자열로 출력.
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancel = document.querySelector("button#btn-cancel"); // button#btn-cancel 요소를 변수 btnCancel에 할당.
btnCancel.addEventListener("click", onClickbtnCancel); // btnCancel에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnCancel을 실행합니다.

function onClickbtnCancel(event){ // 함수 onClickbtnCancel를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    window.location.reload(); // 현재 브라우저를 새로고침합니다.
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
var btnApply = document.querySelector("button#btn-apply"); // button#btn-apply 요소를 변수 btnApply에 할당.
btnApply.addEventListener("click", onClickbtnApply); // btnApply에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnApply을 실행합니다.

function onClickbtnApply(event){ // 함수 onClickbtnApply를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    var applyIn = window.confirm("가입하시겠습니까?"); // "가입하시겠습니까?"라는 메세지를 포함한 확인창을 변수 applyIn에 할당 및 출력.
    if(applyIn === true){ // 확인창을 확인 눌렀을시에.
        inUId.setAttribute("value", inUId.value); // inUId의 value값을 입력값으로 세팅 // 추가로 해보았습니다.
        inUPass.setAttribute("value", inUPass.value); // inUPass의 value값을 입력값으로 세팅 // 추가로 해보았습니다.
        window.alert("가입을 환영합니다!"); // 경고창으로 "가입을 환영합니다!"를 출력.
    }else if(applyIn === false){ // 확인창을 취소 눌렀을시에.
        window.alert("가입을 취소하였습니다.") // 경고창으로 "가입을 취소하였습니다."를 출력.
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnReset = document.querySelector("button#btn-reset"); // button#btn-reset 요소를 변수 btnReset에 할당.
btnReset.addEventListener("click", onClickbtnReset); // btnReset에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnReset을 실행합니다.

var inUId = document.querySelector("input#user_id"); // input#user_id 요소를 변수 inUId에 할당.
var inUPass = document.querySelector("input#user_pass"); // input#user_pass 요소를 변수 inUPass에 할당.

function onClickbtnReset(event){ // 함수 onClickbtnReset를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    var resetOk = window.prompt("초기화하시려면 100을 입력하세요."); // "초기화하시려면 100을 입력하세요."라는 메세지를 포함한 다이얼로그창을 변수 resetOk에 할당 및 출력.
    if(resetOk == 100){ // resetOk가 100이 입력이 되었을 시.
        
        inUId.setAttribute("value", ""); // inUId의 value값을 "" <- 아무것도 없는 값으로 세팅.
        inUPass.setAttribute("value", ""); // inUPass의 value값을 "" <- 아무것도 없는 값으로 세팅.
        console.log(inUId.getAttribute("value"));
        console.log(inUPass.getAttribute("value"));
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
var btnOdd = document.querySelector("button#btn-odd"); // button#btn-odd 요소를 변수 btnOdd에 할당.
btnOdd.addEventListener("click", onClickbtnOdd); // btnOdd에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnOdd을 실행합니다.
function onClickbtnOdd(event){ // 함수 onClickbtnOdd를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    var OddResult = window.prompt("숫자를 입력해주세요."); // "숫자를 입력해주세요."라는 메세지를 포함한 다이얼로그창을 변수 OddResult에 할당 및 출력.
    // console.log(OddResult);
    var Result = ""; // 문자열로 합산할 변수 Result를 생성후 초기값으로 아무것도 없는 문자열값 "" 할당.
    for(var i = 1; i <= OddResult; i++){ // for문으로 변수 i 초기값 1,i가 OddResult(사용자가 입력한 값)보다 크거나 같아지면 for문 종료. i는 1씩 증가.
        if(i <= OddResult-2){ // if문 i가 사용자가 입력한 값보다 -2보다 작을시.
            Result += i + ", "; // Result에 Result와 i, 문자열 ", "를 합산해줍니다.
            
        }else{ // 마지막 홀수열에는 Result에 i와 문자열 "."를 합산해줍니다.
            Result += i + ".";
        }
        i += 1; // i에 + 1씩 더해줌으로써 1 싸이클당 +2씩 증가. 결과적으론 i는 1, 3, 5, 7 씩 커집니다.(홀수)
    }
    // console.log(Result);
    var divOddResult = document.querySelector("div#odd-result"); // div#odd-result 요소를 변수 divOddResult에 할당.
    divOddResult.innerText = Result; // 변수 divOddResult에 Result 값을 텍스트로 기입해 보여줍니다.
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnAddCity = document.querySelector("button#btn-add-city"); // button#btn-add-city 요소를 변수 btnAddCity에 할당.
btnAddCity.addEventListener("click", onClickbtnAddCity); // btnAddCity에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnAddCity을 실행합니다.

function onClickbtnAddCity(event){ // 함수 onClickbtnAddCity를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    var cityPrompt = window.prompt("도시명을 입력하세요."); // "도시명을 입력하세요."라는 메세지가 포함된 다이얼로그창을 변수 cityPrompt에 할당 및 출력.

    var ulCityList = document.querySelector("ul#city-list"); // ul#city-list 요소를 변수 ulCityList에 할당.
    // var ulCL_ch = ulCityList.children;

    // X // ulCL_ch.innerText = cityPrompt;

    // ulCityList.innerHTML = "<li>" + cityPrompt + "</li>"; // 아예 초기화후 도시명 추가.

    // 추가로 li를 생성하고 도시 추가하기.
    var newItemEl = document.createElement("li"); // li라는 요소를 생성한 후 변수 newItemEl에 할당.
    ulCityList.appendChild(newItemEl); // ulCityList에 마지막에 newItemEl(li요소)를 추가.
    newItemEl.innerText = cityPrompt; // 추가된 newItemEl(li요소)에 cityPrompt(입력한 도시명)을 텍스트로 기입.
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
var btnColor = document.querySelector("button#btn-color"); // button#btn-color 요소를 변수 btnColor에 할당.

btnColor.addEventListener("click", onClickbtnColor); // btnColor에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnColor을 실행합니다.
var sentence = document.getElementsByClassName("sentence"); // 클래스 sentence의 모든 배열을 변수 sentence 에 할당.
// console.log((sentence.length-1)-(sentence.length-1)); // 0번째를 불러오는 식 // X 필요 X
var plus = 0; // 클릭할 때마다 1씩 증가되게끔 배열 연산을 위한 변수 plus 생성, 초기값 0 할당.
function onClickbtnColor(event){ // 함수 onClickbtnColor를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    
    for(var i = 0; i <= sentence.length-1; i++){ // for문을 생성하고 변수 i는 초기값 0 , i가 sentence의 배열의 범위만큼보다 커지면 for문 종료. i는 1씩 증가.
        // plus += i;
        sentence[i].style.color = "#ff0000"; // sentence의 배열의 모든 항목에 스타일의 컬러 #ff0000(레드)컬러 적용.
    }
    
    console.log(plus);
    if(plus <= sentence.length-1){ // 만약 plus가 배열의 범위보다 같거나 작을때 
        plus++;  // plus에 1씩 더함.
    }else{ // 이외일시.
        plus = 1; // plus에 1값 적용.
    } 
    sentence[plus-1].style.color = "#000000"; // 초기값 0에 1이 ++되었고, 배열 0부터 검정색으로 시작해야하니 plus에 -1을 해서 배열 0번째를 불러옵니다.
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnGoTop = document.querySelector("button#btn-go-top"); // button#btn-go-top 요소를 변수 btnGoTop에 할당.

btnGoTop.addEventListener("click", onClickbtnGoTop); // btnGoTop에 클릭 이벤트와 이벤트 핸들러를 추가하고 클릭시 함수 onClickbtnGoTop을 실행합니다.

function onClickbtnGoTop(event){ // 함수 onClickbtnGoTop를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 기본으로 정의된 이벤트를 작동 못하게 합니다.
    window.scrollTo(0, 0); // 윈도우의 x와 y좌표를 0, 0 으로 스크롤 세팅함으로써 최상단으로 이동되도록 합니다.
}
