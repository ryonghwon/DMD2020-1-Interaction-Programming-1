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

// .querySelector();는 element 노드의 자식 노드들 중 query 에 해당하는 노드를 탐색하여 그 첫번째 노드를 반환.
// querySelectorAll();는 element 노드의 자식 노드들 중 query 에 해당하는 노드를 탐색하여 노드 목록을 반환.
// 변수 btnSNum에 button#btn-student-number 요소를 할당한다.
// .querySelector();는 첫번째 요소만 선택한다는 것에 유의한다.
var btnSNum = document.querySelector("button#btn-student-number");
// 변수 spSNum에 span#student-number 요소를 할당한다.
var spSNum = document.querySelector("span#student-number");
// 이벤트 핸들러에 해당하는 함수 ClickbtnSNum을 정의.
// 함수가 eventnum이라는 매개 변수를 가지도록 할당한다.
function ClickbtnSNum(eventnum){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    // preventDefault();는 적절하게 사용할 필요가 있음.
    eventnum.preventDefault();
    // 자신의 학번 문자열이 포함되도록 작성.
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 이벤트 호출 시 자신의 학번이 span#student-number 의 내부에 입력되도록 한다.
    spSNum.innerText = "21861016";
    // 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성.
    // 학번이 입력되었습니다.
    alert("학번이 입력되었습니다.");
}
// button#btn-student-number 요소에 클릭 이벤트 추가 및 이벤트 핸들러를 할당.
// 함수 ClickbtnSNum를 이벤트 핸들러로 할당하도록 한다.
btnSNum.addEventListener("click", ClickbtnSNum);

// 변수 btnSName에 button#btn-student-name 요소를 할당한다.
var btnSName = document.querySelector("button#btn-student-name");
// 변수 spSName에 span#student-name 요소를 할당한다.
var spSName = document.querySelector("span#student-name");
// 이벤트 핸들러에 해당하는 함수 ClickbtnSName을 정의.
// 함수가 eventname이라는 매개 변수를 가지도록 할당한다.
function ClickbtnSName(eventname){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventname.preventDefault();
    // element.innerText = "String"; 형식.
    // 이벤트 호출 시 자신의 이름이 span#student-name 의 내부에 입력되도록 한다.
    spSName.innerText = "김민지";
    // 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성.
    // 이름이 입력되었습니다.
    alert("이름이 입력되었습니다.");
}
// button#btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickbtnSName을 이벤트 핸들러로 할당하도록 한다.
btnSName.addEventListener("click", ClickbtnSName);

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

// 변수 btnWSize에 button#btn-window-size 요소를 할당한다.
var btnWSize = document.querySelector("button#btn-window-size");
// 변수 win_width에 윈도우 콘텐츠 영역의 너비 값을 할당.
// window.innerWidth;는 윈도우 콘텐츠 영역의 너비 값(pixel)을 반환한다
var win_width = window.innerWidth;
// 변수 win_height에 윈도우 콘텐츠 영역의 높이 값을 할당.
// window.innerHeight;는 윈도우 콘텐츠 영역의 높이 값(pixel)을 반환한다
var win_height = window.innerHeight;
// 이벤트 핸들러에 해당하는 함수 ClickbtnWSize를 정의.
// 함수가 eventwsize라는 매개 변수를 가지도록 할당한다.
function ClickbtnWSize(eventwsize){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventwsize.preventDefault();
    // 이벤트 호출 시 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성한다.
    // 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
    console.log("윈도우 콘텐츠의 영역 width : " + win_width + " px, height : " + win_height + " px 입니다.");
}
// button#btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickbtnWSize를 이벤트 핸들러로 할당하도록 한다.
btnWSize.addEventListener("click", ClickbtnWSize);

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

// 변수 btnCId에 button#btn-check-id 요소를 할당한다.
var btnCId = document.querySelector("button#btn-check-id");
// 이벤트 핸들러에 해당하는 함수 ClickCId를 정의.
// 함수가 eventcid라는 매개 변수를 가지도록 할당한다.
function ClickCId (eventcid){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventcid.preventDefault();
    // 이벤트 호출 시 id 가 'user_id' 인 요소를 찾아야 한다.
    // id 가 'user_id'인 요소에 접근하기 위해 getElementById();를 사용한다.
    // getElementById();는 괄호 안에 해당하는 id 요소에 접근하는 함수.
    // element = document.getElementById('id'); 형식.
    var UserId = document.getElementById('user_id');
    // 변수 value_length에 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 할당.
    var value_length = UserId.value.length;
    // value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성한다.
    // input#user_id - value 속성 값의 문자열 개수는 ____ 입니다.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + value_length + " 입니다.");
}
// button#btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickCId를 이벤트 핸들러로 할당하도록 한다.
btnCId.addEventListener("click", ClickCId);

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

// 변수 btnCanc에 button#btn-cancel 요소를 할당한다.
var btnCanc = document.querySelector("button#btn-cancel");
// 이벤트 핸들러에 해당하는 함수 ClickCancel을 정의.
// 함수가 eventcancel이라는 매개 변수를 가지도록 할당한다.
function ClickCancel(eventcancel){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventcancel.preventDefault();
    // 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성한다.
    // window.location.reload();는 현재 문서를 새로 고침한다.
    // window. 생략가능.
    location.reload();
}
// button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickCancel를 이벤트 핸들러로 할당하도록 한다.
btnCanc.addEventListener("click", ClickCancel);

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

// 변수 btnApply에 button#btn-apply 요소를 할당한다.
var btnApply = document.querySelector("button#btn-apply");
// 이벤트 핸들러에 해당하는 함수 ClickApply를 정의.
// 함수가 eventapply이라는 매개 변수를 가지도록 할당한다.
function ClickApply(eventapply){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventapply.preventDefault();
    // 변수 join에 메세지와 ‘확인’, ‘취소’ 버튼을 포함하고 있는 다이얼로그 창을 할당.
    // 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력한다.
    // window.confirm();
    // window. 생략가능.
    var join = confirm('가입하시겠습니까?');
    // 사용자가 확인을 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성한다.
    // 가입을 환영합니다!
    if (join){
        alert("가입을 환영합니다!");
    }
    // 사용자가 취소를 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성한다.
    if(!join){
        alert("가입을 취소하였습니다.");
    }
}
// button#btn-apply 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickApply를 이벤트 핸들러로 할당하도록 한다.
btnApply.addEventListener("click", ClickApply);

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

// 변수 btnReset에 button#btn-reset 요소를 할당한다.
var btnReset = document.querySelector("button#btn-reset");
// 변수 inputId에 input#user_id 요소를 할당한다.
var inputId = document.querySelector("input#user_id");
// 변수 inputPass에 input#user_pass 요소를 할당한다.
var inputPass = document.querySelector("input#user_pass");
// 이벤트 핸들러에 해당하는 함수 ClickReset을 정의.
// 함수가 eventreset이라는 매개 변수를 가지도록 할당한다.
function ClickReset(eventreset){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventreset.preventDefault();
    // window.prompt('초기화하시려면 100을 입력하세요.');
    // window. 생략가능.
    // 변수 reset에 메시지 + 입력가능한 인풋(프롬프트), 확인 / 취소 버튼을 포함하고 있는 다이얼로그 창을 할당.
    var reset = prompt('초기화하시려면 100을 입력하세요.');
    // 사용자가 100을 정확하게 입력할 경우
    if(reset == 100){
        // input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성.
        // 빈값과 Null 차이에 유의할 것. 
        inputId.value = "";
        inputPass.value = "";
    }
}
// button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickReset을 이벤트 핸들러로 할당하도록 한다.
btnReset.addEventListener("click", ClickReset);


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

// 변수 btnOdd에 button#btn-odd 요소를 할당한다.
var btnOdd= document.querySelector("button#btn-odd");
// div#odd-result 의 내부에 입력될 수 있도록 작성하기 위해 div_OddResult에 div#odd-result 요소를 할당한다.
var div_OddResult = document.querySelector("div#odd-result");
// 문자열 연산하여 결과을 담기 위한 변수 outcome을 선언하고, 초기 값을 빈값으로 설정한다.
var outcome = "";
// 이벤트 핸들러에 해당하는 함수 ClickOdd를 정의.
// 함수가 eventodd라는 매개 변수를 가지도록 할당한다.
function ClickOdd(eventodd){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventodd.preventDefault();
    // window.prompt('숫자를 입력해주세요.');
    // window. 생략가능.
    // 변수 odd에 메시지 + 입력가능한 인풋(프롬프트), 확인 / 취소 버튼을 포함하고 있는 다이얼로그 창을 할당.
    var odd = prompt('숫자를 입력해주세요.');
    // for 반복문을 활용하여 변수 n이 입력된 값보다 작거나 같을 때 까지 진행되고, 1씩 증가하도록 한다.
    for (var n = 0; n <= odd; n++){
        // 변수 n을 2로 나누었을 때, 나머지가 1일 경우.
        if (n % 2 == 1){
            // length 이용해보려 했으나 실패
            // if(n < n.length-2){
            //     outcome += n + ", ";
            // }
            // if(n < n.length-1){
            //     outcome += n + ".";
            // }
            
            // n <= odd-3으로 조건절 작성시 결과값 중 맨 뒷 값이 아님에도 .이 붙어 나오게 되어 수정한다.
            // n < odd - 1로 설정하여 n이 odd - 1 보다 작다면 , 가 붙도록 한다.
            if (n < odd - 1){
                // outcome = outcome + n + ", ";
                outcome += n + ", ";
            }
            // else를 이용해 나머지의 경우에는 .이 붙도록 한다.
            else{
                // outcome = outcome + n + ". ";
                outcome += n + ".";
            }
        }
    }
    // 결과 문자열이 포함되도록 작성.
    // 요소 안에 텍스트 기입.
    // element.innerText = "String"; 형식.
    // 이벤트 호출 시 결과를 담은 변수 outcome을 div#odd-result 의 내부에 입력되도록 한다.
    div_OddResult.innerText = outcome;
}
// button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickOdd를 이벤트 핸들러로 할당하도록 한다.
btnOdd.addEventListener("click", ClickOdd);

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

// 변수 btnAdd에 button#btn-add-city 요소를 할당한다.
var btnAdd= document.querySelector("button#btn-add-city");
// 이벤트 핸들러에 해당하는 함수 ClickAdd를 정의.
// 함수가 eventadd라는 매개 변수를 가지도록 할당한다.
function ClickAdd(eventadd){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventadd.preventDefault();
    // 변수 add에 메시지 + 입력가능한 인풋(프롬프트), 확인 / 취소 버튼을 포함하고 있는 다이얼로그 창을 할당.
    // 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력.
    var add = prompt('도시명을 입력하세요.');
    // 변수 addUl에 ul#city-list 요소를 할당한다.
    var addUl = document.querySelector("ul#city-list");
    // 변수 addLi에 li 요소가 새로 생성되는 것을 할당한다.
    // document.createElement();
    var addLi = document.createElement("li");
    // 사용자가 값을 입력할 때 그 값이 빈값이 아닌 경우 실행된다.
    if(add != ""){
        // addUl의 마지막 부분에 addLi 요소를 추가한다.
        // element.appendChild();
        addUl.appendChild(addLi);
        // 요소 안에 텍스트 기입.
        // element.innerText = "String"; 형식.
        // 이벤트 호출 시 li 요소에 도시명 문자열이 추가되도록 한다.
        addLi.innerText = add;
    }
}
// button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickAdd를 이벤트 핸들러로 할당하도록 한다.
btnAdd.addEventListener("click", ClickAdd);

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

// 변수 btnColor에 button#btn-color 요소를 할당한다.
var btnColor= document.querySelector("button#btn-color");
// 동일한 class 이름의 요소들을 반환.
// element = document.getElementsByClassName(class); 형식.
// getElementsByClassName()는 반환되는 객체가 복수일 수 있으므로 배열(복수의 목록)로 반환하여, 원소 순서에 따라 요소를 검색할 수 있다.
// [element, element, ..., element] 배열
var sentence = document.getElementsByClassName("sentence");
// 클릭된 횟수를 체크하기 위해 변수 clicknum을 선언하고 초기값으로 0을 할당한다.
var clicknum = 0;
// 이벤트 핸들러에 해당하는 함수 ClickColor를 정의.
// 함수가 eventcolor라는 매개 변수를 가지도록 할당한다.
function ClickColor(eventcolor){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventcolor.preventDefault();
    // for 문을 활용해 변수 i의 초기값을 0으로 설정하고, 배열의 길이보다 작을 때까지 진행되면서 1씩 증가하도록 한다.
    for (var i = 0; i < sentence.length; i++){
        // index요소들의 색상을 빨간 색으로 변경한다.
        // 0부터 시작.
        sentence[i].style.color = "red";
        // 클릭한 횟수에 해당하는 index 요소의 색상을 검은 색으로 변경한다.
        // 0부터 시작.
        sentence[clicknum].style.color = "black";
    }
    // for 문 위에 작성시, 버튼을 누르면 두번째 p요소부터 검은색이 된다.
    clicknum++;
    // 실패.
    // clicknum이 배열의 길이보다 크거나 같다는 가정을 내세워 만들어보았으나 제대로 작동하지 않는다.
    // if (clicknum >= sentence.length){
    //     for(var j = sentence.length; j > 0; j--){
    //         sentence[clicknum - j].style.color = "black";
    //     }
    // }
    // clicknum이 sentence의 배열 길이와 값이 같을 경우를 활용하여 if문을 작성한다.
    if(clicknum == sentence.length){
        // clicknum의 값을 0으로 할당되게 하여 계속 반복될 수 있도록 한다.
        clicknum = 0;
    }
}
// button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickColor를 이벤트 핸들러로 할당하도록 한다.
btnColor.addEventListener("click", ClickColor);

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

// 변수 btnGoTop에 button#btn-go-top 요소를 할당한다.
var btnGoTop= document.querySelector("button#btn-go-top");
// 이벤트 핸들러에 해당하는 함수 ClickGoTop을 정의.
// 함수가 eventgotop이라는 매개 변수를 가지도록 할당한다.
function ClickGoTop(eventgotop){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    eventgotop.preventDefault();
    // 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성한다.
    // 문서를 입력한 위치(x, y) 좌표로 스크롤한다.
    // window.scrollTo(x, y);
    // window. 생략가능.
    scrollTo(0, 0);
}
// button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickGoTop을 이벤트 핸들러로 할당하도록 한다.
btnGoTop.addEventListener("click", ClickGoTop);