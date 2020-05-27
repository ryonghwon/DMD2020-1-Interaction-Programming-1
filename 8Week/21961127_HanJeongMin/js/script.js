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

//학번 검색
//document.querySelector - element 노드의 자식 노드들 중 query 에 해당하는 노드를 탐색하여 그 첫번째 노드를 반환한다.
var buttonum = document.querySelector("button#btn-student-number"); // button#btn-student-number을 buttonum에 넣습니다
buttonum.addEventListener("click", onClickbtnum); // 이벤트 핸들러를 할당하고 (function의)onClickbtn을 불러옵니다

var mynumber = document.querySelector("span#student-number"); // span#student-number 를 mynumber에 할당합니다 

    function onClickbtnum(){
    mynumber.innerText = "21961127"; // 버튼을 누를시 학번(21961127) 기입
    window.alert("학번이 입력되었습니다."); // 경고창 출력
    }

//이름 검색
var buttonanme = document.querySelector("button#btn-student-name"); // button#btn-student-name을 buttonanme에 넣습니다
buttonanme.addEventListener("click", onClickbtname); // 이벤트 핸들러를 할당하고 (function의)onClickbtname을 불러옵니다

var myname = document.querySelector("span#student-name"); // span#student-name 를 myname에 할당합니다

    function onClickbtname(){
    myname.innerText = "한정민";  // 버튼을 누를시 한정민 이름 기입
    window.alert("이름이 입력되었습니다"); // 경고창 출력
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

//window.innerHeight - 윈도우 콘텐츠 영역의 높이 값(pixel)을 반환한다.
//window.innerWidth - 윈도우 콘텐츠 영역의 너비 값(pixel)을 반환한다.
var Hei = window.innerHeight; // 변수에 높이를 반환
var Wid = window.innerWidth; // 변수에 너비 반환

var btwindowsize = document.querySelector("button#btn-window-size"); // button#btn-window-size를 btwindowsize에 넣습니다
btwindowsize.addEventListener("click", onCwin); // 이벤트 핸들러를 할당하고 (function의)onCwin을 불러옵니다

function onCwin(){ 
    console.log("윈도우 콘텐츠의 영역 width : " + Wid + "px, height : " + Hei + "px 입니다."); // 콘솔에 너비와 높이 출력
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

var userbutton = document.querySelector("button#btn-check-id"); // button#btn-check-id를 userbutton에 넣습니다
userbutton.addEventListener("click", value); // 이벤트 핸들러를 할당하고 (function의)value을 불러옵니다

//계속 사라지는 오류 / event.preventDefault(); - 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
function value(stop){ // 함수를 생성해 한번만 동작하도록 지시 (stop) // 
    stop.preventDefault(); // 한번만 작동(여러번 작동 방지)

    //document.getElementById(); - id를 찾아야하기때문에
    var userI = document.getElementById("user_id"); // user_id를 찾아 userI에 넣습니다
    var userINew = userI.value; // var userI를 넣을 새로운 변수를 생성합니다
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + userINew.length + " 입니다.");
    // userINew만 입력시 입력된 ""의 값을 그대로 출력하기 때문에 .length 개수 출력을 합니다
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var newbr = document.querySelector("button#btn-cancel"); // button#btn-cancel를 newbr에 넣습니다
newbr.addEventListener("click", playnewbr); // 이벤트 핸들러를 할당하고 (function의)playnewbr을 불러옵니다

function playnewbr(){
    window.location.reload(); // 브라우저를 새로고침합니다
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

var apply = document.querySelector("button#btn-apply"); // button#btn-apply를 apply에 넣습니다
apply.addEventListener("click", buttonApply); // 이벤트 핸들러를 할당하고 (function의)buttonApply을 불러옵니다

function buttonApply(){ 
    var chack = window.confirm("가입하시겠습니까?"); // "가입하시겠습니까?"를 실행시키는 이벤트를 함수 chack에 할당합니다

    if(chack == true){ // 확인을 눌렀을때
        window.alert("가입을 환영합니다!"); // 경고창에 "가입을 환영합니다"
    }
    else // 취소를 눌렀을때
    {
        window.alert("가입을 취소하였습니다.") // 경고창에 "가입을 취소하였습니다."
    }
}

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var newevent = document.querySelector("button#btn-reset"); // button#btn-reset를 newevent에 넣습니다
newevent.addEventListener("click", clickNewE); // 이벤트 핸들러를 할당하고 (function의)clickNewE을 불러옵니다

var userId = document.querySelector("input#user_id"); // input#user_id를 userId에 넣습니다
var userPs = document.querySelector("input#user_pass"); // input#user_pass를 userPs에 넣습니다
//console.log(userId);

function clickNewE(){ 
    var ThisTrue = window.prompt("초기화하시려면 100을 입력하세요."); // "초기화하시려면 100을 입력하세요."를 실행시키는 이벤트를 함수 ThisTrue에 할당합니다
    if(ThisTrue == 100){ // ThisTrue가 100이라면
        
        userId.setAttribute("value", ""); // input#user_id의 내용을 " "의 상태로 
        userPs.setAttribute("value", ""); // input#user_pass의 내용을 " "의 상태로

        //element.getElementsByClassName();
        //userId 중 value 를 포함하고 있는 userId 노드 목록을 반환한다.
        console.log(userId.getElementsByClassName("value"));
        console.log(userPs.getElementsByClassName("value"));
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

var ButtonOdd = document.querySelector("button#btn-odd"); // button#btn-odd를 ButtonOdd에 넣습니다
ButtonOdd.addEventListener("click", NewOdd); // 이벤트 핸들러를 할당하고 (function의)NewOdd을 불러옵니다

function NewOdd(){
    var WindowOdd = window.prompt("숫자를 입력해주세요."); // "숫자를 입력해주세요."경고창을 띄우며 windowOdd에 할당합니다
    // console.log(OddResult);
    var None = ""; // ""를 빈 함수 None에 할당합니다
    for(var i = 1; i <= WindowOdd; i++){ // 경고창에 입력한 WindowOdd 값이 같아지면 1씩 증가합니다
        if(i <= WindowOdd-2){ // i가 입력된 값보다 -2일때
            None += i + ", "; // None에 i,를 더한다
            
        }
        else
        { 
        None += i + "."; // 마지막이라면 i.
        }
        i += 1; // i+1+1이므로 홀수계산
    }

    var NewOdd = document.querySelector("div#odd-result"); // div#odd-result를 NewOdd에 넣습니다
    //console.log(None)
    NewOdd.innerText = None; // div#odd-result에 위의 None을 넣습니다
}

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var buttonCity = document.querySelector("button#btn-add-city"); // button#btn-add-city를 buttonCity에 넣습니다
buttonCity.addEventListener("click", clickCity); // 이벤트 핸들러를 할당하고 (function의)clickCity을 불러옵니다

function clickCity()
{
    var cityname = window.prompt("도시명을 입력하세요."); // 경고창 "도시명을 입력하세요." 띄운뒤 cityname에 할당

    var citylist = document.querySelector("ul#city-list"); // ul#city-list를 citylist에 넣습니다

    var namedd = document.createElement("li"); // namedd에 li요소를 추가합니다
    //console.log(namedd);

    citylist.appendChild(namedd); // ul#city-list에 li추가
    namedd.innerText = cityname; // 텍스트 입력가능 / li에 입력
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

var Color = document.querySelector("button#btn-color"); // button#btn-color를 Color에 넣습니다

Color.addEventListener("click", red); // 이벤트 핸들러를 할당하고 (function의)red을 불러옵니다

var Colorvalue = document.getElementsByClassName("sentence"); // sentence를 Colorvalue에 넣습니다
var sum = 0;

function red(event){ 
    event.preventDefault(); // 한번만 작동(여러번 작동 방지)
    
    for(var i = 0; i <= Colorvalue.length-1; i++){ // 1씩 증가시키는 for문 사용
        Colorvalue[i].style.color = "red"; // 전체 레드적용
    }
    
    console.log(sum);
    if(sum <= Colorvalue.length-1){ // sum값이 Colorvalue값과 같거나 작을때 
        sum++;  // 1씩 더합니다
    }else{ 
        sum = 1; // if가 아니라면 1 고정
    } 
    Colorvalue[sum-1].style.color = "black"; // 1씩 더한값에서 -1해 0부터 시작하도록함//검정색 변화

    /* for(var i = 0; i <= Colorvalue; i++){
        Colorvalue[i].style.color = "red";
    } */
    /* for(var i = 0; i <= Colorvalue.length; i++){
        Colorvalue[i].style.color = "red";
        event.preventDefault();
    } */
    /* for(var i = 0; i <= Colorvalue.length; i++){
        Colorvalue[i].style.color = "red";
        return Colorvalue;
    } */

    /* for(var i = 0; i <= Colorvalue.length -1; i++){
        Colorvalue[i].style.color = "red";
    }
    if(sum == 0){
        Colorvalue[sum].style.color = "black";
        sum += 1;
    }
    else if(sum == 1){
        Colorvalue[sum].style.color = "black";
        sum += 1;
    }
    else if(sum == 2){
        Colorvalue[sum].style.color = "black";
        sum += 1;
    }
    else if(sum == 3){
        Colorvalue[sum].style.color = "black";
        sum += 1;
    }
    return sum; */
}

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var bottontop = document.querySelector("button#btn-go-top"); // button#btn-go-top를 bottontop에 넣습니다

bottontop.addEventListener("click", clickTop); // 이벤트 핸들러를 할당하고 (function의)clickTop을 불러옵니다

function clickTop(event){ // 함수 onClickbtnGoTop를 생성하고 매개변수로 event를 넣어줍니다.
    event.preventDefault(); // 한번만 작동(여러번 작동 방지)
    window.scrollTo(0, 0); // 윈도우의 (0,0)위치로 이동합니다( 상단 )
}
