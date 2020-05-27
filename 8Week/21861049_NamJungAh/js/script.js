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

// var a = document.querySelector("button#btn-student-number");
// console.log(a);
// button#btn-student-number 요소 노드만 반환하기 성공!

var number = document.querySelector("button#btn-student-number");
//[학번출력] 버튼 노드
var numberSpan = document.querySelector("span#student-number");
//학번이 적혀질 span 요소 노드
//console.log(numberSpan);

number.addEventListener("click", NumberLog);

//callback 함수 
function NumberLog(whatever){
    numberSpan.innerText = "21861049";
    console.log("학번이 입력되었습니다.");
}


//원래는 name이라는 변수명으로 진행했었는데 오류가 나서 다른 이름으로 변경하니까 실행이 되네요
var myname = document.querySelector("button#btn-student-name");
var mynameSpan = document.getElementById("student-name");
//console.log(nameSpan);

myname.addEventListener("click", function NameLog(event){
    mynameSpan.innerText = "남정아";
    console.log("이름이 입력되었습니다.");
});

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

var windowSize = document.querySelector("button#btn-window-size");
// [윈도우사이즈 호출하기] 버튼 요소 노드 반환
var width = window.innerWidth;
var height = window.innerWidth;

windowSize.addEventListener("click",function(){
    console.log("윈도우 콘텐츠의 영역 width : "+width+" px, height : "+height+" px 입니다.");
});

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
var checkid = document.querySelector("button#btn-check-id");
//var userid = document.getElementById("user_id");

// function useridLength(event){
//     console.log("input#user_id - value 속성 값의 문자열 개수는 " + userid.length + " 입니다.");
// }

// checkid.addEventListener("click",useridLength);
//undefineded가 뜨면서 바로 창이 닫힌다...
//document.getElementById("user_id"); => user_id의 요소 노드는 가져왔지만 그 값은 가져오지 않는다


//var userid = document.getElementById("user_id").value;
//밖에 작성하면 함수가 작동하면서 변경될 수 있는 값이 반영되지 않습니다

function useridLength(coffee){
    coffee.preventDefault(); 
    var userid = document.getElementById("user_id").value;
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + userid.length + " 입니다.");
}

checkid.addEventListener("click",useridLength);
// 뭐임 창이 계속 꺼져
//  Submit하면 창이 refresh되어서 창이 꺼진다. => event.preventDefault(); 를 사용하면 정보가 입력되지 않아서 콘솔창을 유지할 수 있따 


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var cancel = document.querySelector("button#btn-cancel");
// [취소] 버튼

cancel.addEventListener("click", function(refresh){window.location.reload();})



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

var join = document.querySelector("button#btn-apply");
// [가입] 버튼

function joinIn (welcome){
    //alert("test");

    var choose = window.confirm("가입하시겠습니까?");
        if (choose === true){
            alert("가입을 환영합니다!");
        }else{
            alert("가입을 취소하였습니다.");
        }
    welcome.preventDefault(); 
}

join.addEventListener("click", joinIn);

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var reset = document.querySelector("button#btn-reset");
function ReallyReset(reset){
    var hundred= prompt("초기화하시려면 100을 입력하세요.")
    if(hundred ==="100"){
        //document.getElementById("user_id").value; => 초기화한 후에 봐도 값이 남아있음.
        document.getElementById("user_id").value = "";
        document.getElementById("user_pass").value = "";
        
    }else{
        alert("100이 아닌 값을 입력하셨어요. 초기화를 취소합니다.")
    }
    reset.preventDefault(); 
}

reset.addEventListener("click", ReallyReset);

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

var odd = document.querySelector("button#btn-odd");
function oddOrEven(odd){
    var inputNumber= prompt("숫자를 입력해주세요");
    var value = ""
    for (var i = 1; i<=inputNumber; i++){
        if (i % 2 != 0){
            value += i+",";
            // if(i===inputNumber){
            //     value += i + ".";
            // }
        }

    }
    console.log(inputNumber+"까지의 홀수는 "+value);
}

odd.addEventListener("click",oddOrEven);


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

// var city = document.querySelector("button#btn-add-city");

// city.addEventListener("click", function(){
//     var inputCity = prompt("도시명을 입력하세요.");
//     inputCity.class
// });

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



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.


