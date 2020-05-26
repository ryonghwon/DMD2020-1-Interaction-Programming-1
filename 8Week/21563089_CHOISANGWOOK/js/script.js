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

// 노드 요소를 찾아와 변수값으로 넣는다
var bottonEl = document.getElementById("btn-student-number"); //학번 버튼 위치
var spanEl = document.getElementById("student-number"); //학번 입력 위치

var botton2El = document.getElementById("btn-student-name"); //학번 버튼 위치
var span2El = document.getElementById("student-name"); //학번 입력 위치



// 이벤트 핸들러 함수를 정의
// 클릭하면 아래 함수 호출!
function Click(evernt)
  {
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록  
     spanEl.innerText = "21563089";
     alert("학번이 입력되었습니다.")
       //console.log("확인용");
  }
bottonEl.addEventListener("click",Click); // 학번 이벤트 함수 호출

// 이벤트 핸들러 함수를 정의
// 클릭하면 아래 함수 호출!
function Click2(evernt)
  {
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록  
     span2El.innerText = "최상욱";
     alert("이름이 입력되었습니다.")
       //console.log("확인용");
  }
botton2El.addEventListener("click",Click2); // 이름 이벤트 함수 호출





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

// id값으로 요소를 찾아서 변수값으로 넣는다.
var bws = document.getElementById("btn-window-size"); 

var wh = window.innerHeight; // 현재 윈도우 넓이 값을 변수안에 넣기
var ww = window.innerWidth; // 현재 윈도우 높이 값을 변수안에 넣기

//이벤트 핸들러 함수 정의
function windows(event)
{    
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     console.log("윈도우 콘텐츠 영역 width :" + ww +"px , height : " + wh +"px 입니다");
}
//호출
bws.addEventListener("click",windows); 




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

// var bhi = document.getElementById("btn-check-id"); //btn-check-id 를 찾아서 변수값으로 넣는다.

//  function idcheck(event)
//  {    
     
//       var bui = document.getElementById("user_id"); //  id가 "user_id" 인 요소를 찾아 bui 변수 값에 넣는다.
//       var bui1 = bui.value; //bui 의 value 값을 bui1에 넣는다.
      
//       //console.log(bid);
//       console.log("input#user_id - value 속성 값의 문자열 개수는" + bui1 + "입니다.");
//  }

// bhi.addEventListener("click",idcheck); 

// 자꾸 이벤트 함수 호출 후 콘솔창에 출력된 값이 사라진다. 새로고침 됨

// event.preventDefault(); 이 코드를 빼먹었구나


var bhi = document.getElementById("btn-check-id"); //btn-check-id 를 찾아서 변수값으로 넣는다.

 function idcheck(event)
 {    
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
      var bui = document.getElementById("user_id"); //  id가 "user_id" 인 요소를 찾아 bui 변수 값에 넣는다.
      var bui1 = bui.value; //bui 의 value 값을 bui1에 넣는다.
      
      //console.log(bid);
      console.log("input#user_id - value 속성 값의 문자열 개수는" + bui1.length + "입니다.");
 }

bhi.addEventListener("click",idcheck); 




/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

// 요소를 찾아서 변수값에 넣고
var bc = document.getElementById("btn-cancel");

//이벤트 핸들러 함수 정의
function cancel(event)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     // 클릭시 새로고침(작성했던 내용 사라짐)
     window.location.reload();
}
// 이벤트 부착
bc.addEventListener("click",cancel); 

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
var btnapply = document.getElementById("btn-apply");

function apply(event)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     var name1 = confirm("가입하시겠습니까?");
      if(name1 == true) // 확인 누르면
      {
          alert("가입을 환영합니다.")
          //console.log("가입확인");
      }
      else // 취소 누르면
      {
           alert("가입을 취소하였습니다.")
          //console.log("취소확인");
      }
}

btnapply.addEventListener("click",apply); 

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnreset = document.getElementById("btn-reset");

var inputreset1 = document.getElementById("user_id"); // id 값을 받아와 변수에 넣음
var inputreset2 = document.getElementById("user_pass");// pass  값을 받아와 변수에 넣음

function reset(event)
{    
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     var reset1 = prompt("초기화하시려면 100을 입력하세요."); // 다이얼로그 창 출력
     if(reset1 == 100)//입력값이 100 이라면
     {
          //inputreset1.removeAttribute("inputreset1"); 
          //inputreset2.removeAttribute("inputreset1");
          inputreset1.setAttribute("value",""); // 값을 "" 빈값으로 변경
          inputreset2.setAttribute("value","");  // 값을 "" 빈값으로 변경
          // console.log(inputreset1.getAttribute("value"));
          // console.log(inputreset2.getAttribute("value"));
     }
     else // 그외 취소나, 다른값
      {
           alert("초기화를 종료하였습니다");
      }
     
}

btnreset.addEventListener("click",reset); 
//재확인 필요




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

//var odd = document.getElementById("btn-odd");
//function odd1(event)
//{
    // event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     //var odd2 = prompt("숫자를 입력해주세요."); // 다이얼로그 창 출력
     // var odd3 = "1"; // 문자값을 집어넣을 변수 선언 홀수 기본값 1 셋팅
     // for(var i = 1; i<=odd2; ++i)
     // {
     //      if(i < odd2)
     //      {
     //           //var odd4 = i + 2;
     //           i += 2;
     //           odd3 += "," + i;
     //      }
     //      else
     //      {
     //           odd3 += ".";
     //           console.log(odd3);
     //                }
     // }
     // var odd3 = odd2 / 2;
     // //console.log(typeof odd3);
     // var odd4 = 0.0;
     // odd4 = odd2 / 3 ;
     // console.log(typeof odd3);
     //  if(typeof odd3 == typeof int)
     //  {
     //       console.log("정수")
     //  }
     //  else
     //  {
     //       console.log("그외")
     //  }
//}
//odd.addEventListener("click",odd1); 
//실패작


var odd = document.getElementById("btn-odd"); // 클릭 버튼
var odd5 = document.querySelector("div#odd-result"); // 홀수값 넣는곳  
//getElementById로 찾아봤는데 안찾아져서 다른방법을 써봤다. 이게 더 짧고 편한것같기도

function odd1(event)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     var odd2 = prompt("숫자를 입력해주세요."); // 다이얼로그 창 출력
     var odd3 = "1"; // 문자값을 집어넣을 변수 선언 홀수 기본값 1 셋팅
     for(var i = 1; i<=odd2;)
     {
           if(i < odd2)
           {
                //var odd4 = i + 2;
                i += 2;
                odd3 += "," + i; // 기본값 1, + ,3 + ,5  ...... odd2 값까지
           }
           else
           {
                odd3 += "."; // 위 조건문이 해당하지않을경우 마지막에 . 을 넣고 끝낸다.
                //console.log(odd3);
                break;
                     }
     }
     odd5.innerText = odd3; // 반복문이 종료되면 odd5변수 값에 넣는다.
}

odd.addEventListener("click",odd1); 






/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var add1 = document.querySelector("button#btn-add-city"); // 버튼

function add2(event)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     var add4 = prompt("도시명을 입력하세요"); // 다이얼로그 창 출력
     
     var city = document.querySelector("ul#city-list"); //ul#city-list 값을 city 변수에 넣고
     //city.innerhtml ="<li>add4</li>";
    //city.appendChild("<li>add4</li>");
     var city2 = document.createElement("li"); // li태그 생성 값을 city2에 넣고 
     city.appendChild(city2);//ul#city-list - 아래 li 가 생성되고
     city2.innerText = add4;// 생성된 li 에 add4(입력값)을 넣음
    //확인완료
}

add1.addEventListener("click",add2); // 클릭으로 이벤트 호출

/*
Quest 9.
1. button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 1(순서) 이벤트 호출 시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 
     색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black'
     )에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
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

var color1 = document.getElementById("btn-color"); ;// 버튼
//var color5 = color4.querySelector("p.sentence");
//var colorlist = document.querySelector("div#sentence"); // p 태그 리스트 
var count = 0; // 횟수

function color2(evernt)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     //colorlist[1].style.Color = "red";
     //color3[4].style.color = "red";
     
     //color5[3].style.color = "black";
     //color5[0].classlist.toggle("red"); // add, remove 반복
     //color5[0].classlist.toggle("red", true); // add
     //color5[0].classlist.toggle("red", false); // remove


     var color3 = document.getElementsByClassName("sentence"); // 클래스
     var color4 = document.getElementsByClassName("section"); // 클래스
     color4[1].style.color = "red"; // p 태그 부모인 div 의 색을 우선 변경해준다.
     
     /*
     for(var count = 0; i<=color3.length; ++count)
     {
          color3[i].style.color = "red";   
     } // 반복문으로 하니까 한번에 다 생겨버림

     */
     // 되긴하는데 초기화가 안된다..
     
     if(count == 0)
     {
          color3[count].style.color = "black";
          count += 1; // 클릭할때 마다 카운트 올라감
          //console.log(count);
     }
     else if(count == 1)
     {
          color3[count].style.color = "black";
          count += 1; // 클릭할때 마다 카운트 올라감
     }
     else if(count == 2)
     {
          color3[count].style.color = "black";
          count += 1; // 클릭할때 마다 카운트 올라감
     }
     else if(count == 3)
     {
          color3[count].style.color = "black";
          count += 1; // 클릭할때 마다 카운트 올라감
     }
     else
     {
          count = 1; // 다시 돌아가기
          color3[count].style.color = "black";
     }
     //최선입니다...
}
color1.addEventListener("click",color2); // 클릭으로 이벤트 호출



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var top = document.getElementById("btn-go-top");

function top1(event)
{
     event.preventDefault(); //태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록
     scrollTo(0, 0); // x,y 값을 0 으로 입력함으로써 상단으로 이동
}

top.addEventListener("click",top1); // 클릭으로 이벤트 호출