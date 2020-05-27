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

var btStuNum = document.querySelector('button#btn-student-number'); //아이디가 'btn-student-number'인 버튼 요소를 변수에 할당합니다.
var StuNum = document.querySelector('span#btn-student-number'); //아이디가 'btn-student-number'인 span 요소를 변수에 할당합니다.
btStuNum.addEventListener('click', OnClickbtStuNum); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtStuNum 함수를 할당합니다.

function OnClickbtStuNum(e){ //함수 OnClickbtStuNum 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault(); //기본으로 설정되어진 기능을 차단합니다.
      btStuNum.innerText = '21961069'; //내부에 21961069 를 입력합니다.
      alert('학번이 입력되었습니다.'); // '학번이 입력되었습니다.'을 출력합니다.
}

var btStuName = document.querySelector('button#btn-student-name'); //아이디가 'btn-student-name'인 버튼 요소를 변수에 할당합니다.
var StuName = document.querySelector('span#btn-student-name'); //아이디가 'btn-student-name'인 span 요소를 변수에 할당합니다.
btStuName.addEventListener('click', OnClickbtStuName); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtStuName 함수를 할당합니다.

function OnClickbtStuName(e){ //함수 OnClickbtStuName 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      btStuName.innerText = '이다영'; //내부에 이다영 를 입력합니다.
      alert('이름이 입력되었습니다.'); // '이름이 입력되었습니다.'을 출력합니다.
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

var win_W = window.innerWidth; //변수에 브라우저의 너비 값을 할당합니다.
var win_H = window.innerHeight; //변수에 브라우저의 높이 값을 할당합니다.

var btWinSiz = document.querySelector('button#btn-window-size'); //아이디가 'btn-window-size'인 버튼 요소를 변수에 할당합니다.

btWinSiz.addEventListener('click', OnClickbtWinSiz); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtWinSiz 함수를 할당합니다.

function OnClickbtWinSiz(e){ //함수 OnClickbtWinSiz 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      console.log('윈도우 콘텐츠의 영역 width : ' + win_W + 'px, height : ' + win_H + 'px 입니다.'); //콘솔에 '윈도우 콘텐츠의 영역 width : 너비 px, height: 높이px 입니다.'를 출력합니다.
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

var btCh = document.querySelector('button#btn-check-id'); //아이디가 'btn-check-id'인 버튼 요소를 변수에 할당합니다.
btCh.addEventListener('click', OnClickbtCh); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtCh 함수를 할당합니다.


function OnClickbtCh (e){ //함수 OnClickbtCh 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      var Uid = document.getElementById('user_id').value; //아이디가 'user_id'인 요소의 value 값을 변수에 할당합니다.
      console.log('input#user_id - value 속성 값의 문자열 개수는 ' + Uid.length + '입니다.'); //값의 길이를 출력합니다.
}

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btCan = document.querySelector('button#btn-cancel'); //아이디가 'btn-cancel'인 버튼 요소를 변수에 할당합니다.
btCan.addEventListener('click', OnClickbtCan); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtCan 함수를 할당합니다.

function OnClickbtCan (e) { //함수 OnClickbtCan 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      window.location.reload(); //브라우저 창이 새로고침 됩니다.
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

var btApply = document.querySelector('button#btn-apply'); //아이디가 'btn-apply'인 버튼 요소를 변수에 할당합니다.
btApply.addEventListener('click', OnclickbtApply); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnclickbtApply 함수를 할당합니다.

function OnclickbtApply(e){ // 함수 OnclickbtApply 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      var Apply = window.confirm('가입하시겠습니까?'); //'가입하시겠습니까?' 메세지를 포함하고 있는 확인창을 변수에 할당합니다.
      if(Apply === true){ //Apply의 값이 참이면 (확인을 선택했다면)
            window.alert('가입을 환영합니다!'); //'가입을 환영합니다!'을 출력합니다.
      }else{ //Apply의 값이 참이 아니면(취소를 선택했다면)
            window.alert('가입을 취소하였습니다.'); //'가입을 취소하였습니다.'를 출력합니다.
    }
}

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var InId = document.querySelector('input#user_id'); //아이디가 'user_id'인 input 요소를 변수에 할당합니다.
var InPw = document.querySelector('input#user_pass'); //아이디가 'user_pass'인 input 요소를 변수에 할당합니다.
var btRe = document.querySelector('button#btn-reset'); //아이디가 'btn-reset'인 버튼 요소를 변수에 할당합니다.
btRe.addEventListener('click', OnClickbtRe); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtRe 함수를 할당합니다.

function OnClickbtRe (e){ //함수 OnClickbtRe 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      var reset = prompt('초기화하시려면 100을 입력하세요.'); // '초기화하시려면 100을 입력하세요.'라는 문구와 입력창이 포함된 다이얼로그 창을 reset 변수에 할당합니다.
      if (reset == 100){ //만약 100을 입력했다면
            InId.value = null; //InId의 value값을 빈 값으로 변경합니다.
            InPw.value = null; //InPw의 value값을 빈 값으로 변경합니다.
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
var Result = document.querySelector('div#odd-result'); //아이디가 'odd-result'인 div 요소를 변수에 할당합니다.
var btOdd = document.querySelector('button#btn-odd'); //아이디가 'btn-odd'인 버튼 요소를 변수에 할당합니다.
btOdd.addEventListener('click', OnClickbtOdd); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtOdd 함수를 할당합니다.

var for_result = ''; //결과 값을 담을 변수 생성

function OnClickbtOdd (e){ //함수 OnClickbtOdd 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      var odd = prompt('숫자를 입력해주세요.'); //'숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 변수에 할당합니다.
      for(var i = 0; i <= odd; i++){  //for 문으로 0부터 입력한 숫자 만큼 증가식을 사용합니다.
            if(i % 2 == 1){  //i의 값이 홀수일 때, 
                if(i <= odd - 2){ //i가 num - 2보다 작거나 같다면
                    for_result += i + ", "; //for_result에 대입연산합니다.
                }else{ 
                    for_result += i + '.'; //마지막에는 마침표를 추가합니다.
                }
            }
      }
      Result.innerText = for_result; //결과값을 입력합니다.
}

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
 
var btAddCity = document.querySelector('button#btn-add-city') //아이디가 'btn-add-city'인 버튼 요소를 변수에 할당합니다.
btAddCity.addEventListener('click', OnClickbtAddCity); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtAddCity 함수를 할당합니다.

function OnClickbtAddCity (e) { //함수 OnClickbtAddCity 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      var cityname = prompt('도시명을 입력하세요.') //'도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 변수에 할당합니다.
      var cityul = document.querySelector('ul#city-list'); //아이디가 'city-list'인 ul 요소를 변수에 할당합니다.
      var citylist = document.createElement('li'); //li cityList 변수에 할당합니다.

      cityul.appendChild(citylist); //cityul의 마지막에 자식요소로  cityList를 추가합니다.
      citylist.innerText = cityname; // cityname을 입력합니다.
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
var sentence_ = document.getElementsByClassName('sentence'); //클래스가 'sentence'인 요소들을 sentence에 할당합니다.
var btColor = document.querySelector('button#btn-color');//아이디가 'btn-color'인 버튼 요소를 변수에 할당합니다.
btColor.addEventListener('click', OnClickbtColor); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtColor 함수를 할당합니다.

var click = 0; //클릭한 횟수를 담을 변수 선언

function OnClickbtColor (e) { //함수 OnClickbtColor 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      for (var i = 0; i < sentence_.length; i++){ //for 문으로 0부터 sentence의 길이 만큼 증가식을 사용합니다.
            sentence_[i].style.color = 'red'; //i번째 sentence 요소의 스타일 컬러를 red로 변경합니다.
            sentence_[click].style.color = 'balck'; //click번째 sentence 요소의 스타일 컬러를 red로 변경합니다.
      }
      click ++; //클릭 증가
      if (click == sentence_.length){ //클릭 횟수가 문장 수와 같다면 
            click = 0; //클릭 초기화.
      }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btGoTop = document.querySelector('button#btn-go-top'); //아이디가 'btn-go-top'인 버튼 요소를 변수에 할당합니다.
btGoTop.addEventListener('click', OnClickbtGoTop); //클릭 이벤트를 추가하고 이벤트 핸들러로 OnClickbtGoTop 함수를 할당합니다.

function OnClickbtGoTop(e){ // 함수 OnClickbtGoTop 선언 후 매개변수로 e(event)를 할당합니다.
      e.preventDefault();
      scrollTo(0, 0); //스크롤이 현재 화면의 최상단으로 이동됩니다.
}