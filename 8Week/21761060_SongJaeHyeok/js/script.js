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
var btnNumber = document.getElementById("btn-student-number"),
    studentNumber = document.getElementById("student-number");

//btn-student-number 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당했습니다.
btnNumber.addEventListener ("click", _number);

function _number(){
    //student-number 내부에 학번이 입력되고, 경고창을 출력하였습니다.
    studentNumber.innerText = "21761060";
    alert("학번이 입력되었습니다.");
}

var btnName = document.getElementById("btn-student-name"),
    studentName = document.getElementById("student-name");

//btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당했습니다.
btnName.addEventListener ("click", _name);

function _name(){
    //student-name 내부에 이름이 입력되고, 경고창을 출력하였습니다.
    studentName.innerText = "송재혁";
    alert("이름이 입력되었습니다.");
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
var btnWinSize = document.getElementById("btn-window-size");

//btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당했습니다.
btnWinSize.addEventListener ("click", _size);

function _size(){
    //윈도우 콘텐츠 영역의 너비 값과 높이 값을 콘솔창에 출력되도록하였습니다.
    console.log("윈도우 콘텐츠의 영역 width :" + window.innerWidth + "px, height :" + window.innerHeight + "px 입니다.");
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
var btnId = document.getElementById("btn-check-id");
    

//btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당했습니다.
btnId.addEventListener ("click",_Id);

function _Id(){
    //id가 user_id 인 요소를 찾고 value 속성의 값의 문자열 개수를 콘솔창에 출력하였습니다.
    var idLength = document.getElementById("user_id").value.length;
    console.log("input#user_id - value 속성 값의 문자열 개수는" + idLength + "입니다."); 
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancel = document.getElementById("btn-cancel");
//btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당했습니다.
btnCancel.addEventListener ("click", _cancel);

function _cancel(e){
    //고유기능을 막고 새로고침이 되도록 하였습니다.
    e.preventDefault();
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
var btnApply = document.getElementById("btn-apply");
btnApply.addEventListener ("click", _apply);

function _apply (e){
    e.preventDefault();
    //가입하시겠습니까? 라는 메세지를 포함하고있는 확인창을 출력하였습니다.
    var join = confirm("가입하시겠습니까?");
    //join이 true면 '가입을 환영합니다!' 라는 경고창을, 아니라면 '가입을 취소하였습니다.' 라는 경고창을 출력하였습니다.
    if(join){
        alert("가입을 환영합니다!");
    }else{
        alert("가입을 취소하였습니다.");
    }
}

/*   --*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnReset = document.getElementById("btn-reset");

btnReset.addEventListener ("click", _reset);
function _reset (e){
    e.preventDefault();
    //'초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력하였습니다.
    var reset = prompt("초기화하시려면 100을 입력하세요.");
    //100을 입력하면 input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 하였습니다.
    if(reset == "100"){
        document.getElementById("user_id").value = "";
        document.getElementById("user_pass").value = "";
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

var btnOdd = document.getElementById("btn-odd"),
    oddResult =  document.getElementById("odd-result");

btnOdd.addEventListener ("click", _odd);

function _odd(){
    //이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력했습니다.
   var _num = prompt("숫자를 입력해주세요.");

   //else문에 사용할 변수 _ans를 만들었습니다.
   var _ans= 1;

   //만약 0을 입력했으면 0이 나오도록 하였습니다.
   if(_num == 0){
        oddResult.innerText = 0 + ".";
   }
   //0이 아니라면 반복문을 실행시켰습니다,
   else{
        //_ans를 1이라 설정하였기때문에 i의 초기값을 3이라 설정하여 1, 2가 입력되면 반복문이 실행이 안되어 1 이 출력되고 
        //3이상의 숫자가 입력될시 반복문을 실행시켰습니다.
        for(var i = 3 ; i<=_num ; i++){
            //숫자를 2로 나누었을때 나머지가 0이 아니라면 홀수인점을 감안하여 조건문을 작성하였습니다.
            if(i % 2 == 1){
                //반복문이 계속 입력값까지 실행되며 홀수일때 그 숫자를 _ans뒤에 계속 추가시켰습니다. 
                _ans = _ans + ", " + i;
            }
        }
        //반복문이 끝나면 뒤에 _ans뒤에 .를 추가하였습니다
        _ans += "."
        oddResult.innerText = _ans;
   }
    
}

//여러 방법이 있겠지만 제 코드는 긴것같습니다.

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnCity = document.getElementById("btn-add-city");

btnCity.addEventListener ("click", _city);

function _city(){
    //이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력했습니다.
   var _cityName = prompt("도시명을 입력하세요.");  

   //id가 city-list인 ul을 가져왔습니다.
   var _cityList = document.getElementById("city-list");
   //li를 추가시킬 변수_cityPlus를 만들었습니다. 
   var _cityPlus = document.createElement("li");
   //_cityPlus에 _city에서 입력된 값을 넣었습니다.
   _cityPlus.innerHTML = _cityName;
    //_cityList에 _cityPlus의 값을 맨 뒤에 넣었습니다.
   _cityList.appendChild(_cityPlus);
   
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
//지역변수로 설정하게되면 a = 0 이 반복되어 전역변수로 만들었습니다.
var a = 0,
    btnColor = document.getElementById("btn-color");

btnColor.addEventListener ("click", _color);

function _color(){

    var _colorChange = document.getElementsByClassName("sentence");
    
    //맨 처음 모든 색 스타일을 red로 변경시켰습니다.
    for(var i = 0 ; i < _colorChange.length ; i++){
         _colorChange[i].style.color = "red";
    }
    //그 후 a번째 해당하는 색 스타일을 black으로 만들었습니다.
    _colorChange[a].style.color = "black";
    //클릭 횟수에 따라 달라져야하기때문에 a++을 추가하였고 a가 계속 커지는것을 방지하기위해 조건문을 사용하였습니다.
    a++
    if(a == _colorChange.length){
      a = 0;
    }
 }



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnTop = document.getElementById("btn-go-top");
btnTop.addEventListener ("click", _top);

function _top (){
    //이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 하였습니다.
   window.scrollTo(0, 0);
}

