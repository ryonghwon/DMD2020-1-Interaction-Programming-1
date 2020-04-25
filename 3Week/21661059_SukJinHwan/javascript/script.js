console.log("외부 JavaScript 로드");


/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
var a = 29;

var b = a + 2;

var c = a % 27;

if (b % c == 1)
{
    console.log("일치합니다.");
}




/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
----------
첫번째 key: "name" value: "본인이름 입력"
두번째 key: "greeting" value: "안녕하세요"
세번째 key: "job" value: "학생"
네번째 key: "school" value: "계원예술대학교"
다섯번째 key: "major" value: "디지털미디어디자인"
여섯번째 key: "grade" value: 2
일곱번째 key: "class" value: "D"
----------
*/
// Answer 2.

var user = {};

    user = {

    name : "석진환",

    greeting : "안녕하세요",

    job : "학생",

    school : "계원예술대학교",

    major : "디지털미디어디자인",

    grade : 2,

    class : "D"
         }

if (typeof user.job === "string")
    {
        console.log(user.greeting);
    }
    else
    {
        console.log(user.name);
    }


/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

/* 
number- 숫자
*/
console.log(10);
console.log(1.5);
console.log(10.10);
// 정수,실수.
// 10 - 딱떨어지는 수.
// 10.11111 - 소수점이 있는 수. 셀제현실에서 보이는수
/* 

 /*
비교 연산자.
*/

// == > < >= <=
// ==> // 다른기능을 하는 명령 .구분!

// == : 동등 연산자.
 var a = 1;
 var b = 1;
 console.log(a == b); // 1 == 1 - 참

 // > : 초과 연산자.
 var a = 3;
 var b = -1;
 console.log(a > b); // true

// < : 미만 연산자.
 var a = 3;
 var b = -1;
 console.log(a < b); // false
 var a = -5;
 var b = 0;
 console.log(a < b); // true

// >= : 이상 연산자.
// <= : 이하 연산자.
 var a = 2;
 var b = 2;
 console.log(a >= b); // true
 var a = 3;
 var b = 2;
 console.log(a >= b); // true
 
 var a = 2;
 var b = 2;
 console.log(a <= b); // true
 var a = 3;
 var b = 2;
console.log(a <= b); //false

// 문자열과 문자열을 비교
// == : 동등 연산자
 var a = "Hello";
 var b = "World";
 console.log(a == b);//false
 a = "World";
 console.log(a == b); // true
 a = 1;
 b = "1";
 console.log(a == b);  //true
// 동등연산자는 숫자타입을 문자열과 비교하면 문자열로 인식

// 일치 연산자.
// === 엄격하게 테이터 타입까지 구분해서 비교
 console.log(a === b); //false
 console.log(true == 1); //true
 console.log(true === 1); //false

// 부등 연산자(부정).

// != !==

 var a = 1;
 var b = 1;
 console.log(a != b); // false
 console.log(a == b); // true
 a = 2;
 console.log(a != b); // true
 console.log(a == b); // false

  var a = "a";
  var b = "a";
  console.log(a != b); // false
  a = "b";
  console.log(a != b); // true
  a = 1;
  b = "2";
  console.log(a != b);// true
  console.log(a !== b);// true

/* 
operator - 연산자.
+ - * / : 더하기 빼기 곱하기 나누기
% : 나머지. -몫,나머지
*/

// +
console.log(100 + 100);

// -
console.log(500 - 150);

// *
console.log(3 * 3);

// /
console.log(12 / 2);

// % (중요)
 console.log(5 % 10); // 5 - 5 / 10 : 10 * 0(몫) 나머지 5
 console.log(9 % 3);
 console.log(10 % 5);
 console.log(13 % 3);

 /*
string - 문자,문자열
*/
 console.log("안녕하세요1");
 console.log('안녕하세요1');
 console.log("안녕하세요3'");
 console.log("\"안녕하세요\ "); // \ escape

 // \n - 정규식 줄바꿈 
 console.log("안녕하세요 \n 반갑습니다 \n 저는 석진환입니다.");

 // string 연산 +
 console.log("Hello" + "World");
 console.log("Hello" + " World");
 console.log("Hello" + "" +"World"+ "~"+"!" );

 // 숫자와 문자의 연산은??
 console.log(1 + 1); //2
 console.log("1" + "1"); //11
 console.log(1 + "1"); //2? //11?
 console.log(1 + parseInt("1")); //2
 console.log(1 + parseInt("100")); //101
 console.log(1 + parseInt("100????")); //101

// 문자열의 길이. - 문자열이 끝난 부분에 .length
 console.log("Hello World~~".length); //13.

// 해당 문자의 순서.
 console.log("Hello World".indexOf("h")); //0
// order -  순서는 0부터 시작
  
/*
Variable - 변수.
*/

// 변수 선언
// 형식
 var variable; //선언만 되어있고 값이 없는상태 -undefined
 console.log(variable); // undefined
 variable = "value"; // 변수에 값 (문자열 "value")을 대입
 console.log(variable); // "value"

 var variable2 = "value2";
 console.log(variable2); // 선언과 값의 대입을 동시에
 var num1 = 1;
 var num2 = 2;
 var string1 = "안녕하세요.";
 var string2 = "반갑습니다.";

  var a = 1;
  var b = 10;
  console.log(a + b); //11
  a = 100; //변수를 재활용
  console.log(a + b); //110
  a = a + 200; // 100+ 200 -300
  console.log(a + b); // 310
  a += 300; // 300 + 300 =600
  console.log(a + b); // 600 + 10 = 610
 
 var a = "Hello";
 var b = "World";
 console.log(a + b);
 a += " ";
 console.log(a + b);

  /*
Data Type - 타입.
*/

// Number : 숫자.
// String : 문자열
// Boolean : 참/거짓
// undefined : undefined 값이 정의되지 않은 상태
// null : null 값은적용하지만 비어있음
// Object 객체 : [] {}
// Function 함수: 기능을 만드는 박스
// NaN : 수식이 성립되지 않음.

// typeof - 데이터의 타입 찾는방법.

 console.log(typeof 1); // number
 console.log(typeof "안녕하세요"); // string
 console.log(typeof true); // boolean
 console.log(typeof false); // boolean

 //object - 객체.
 //색인이 포함된 데이터 들의 집합.

 
 //var _obj = {}; //새로운 객체를 생성
 _obj = {
     key1 : "value1",
     key2 : "value2",
    "key3" : 300
      }
 console.log(_obj);
 console.log(_obj.key1); //각 항목의 값을 찾기
 console.log(_obj["key1"]); //위와동일
 console.log(typeof _obj.key2);//string
 console.log(typeof _obj.key3); //number
 
  /*
 Array - 배열 객체.
 */
 
 var _arr = []; //새로운 배열 생성.
 _arr = [1, 2, "3" , "안녕하세요" , null, true];
 console.log(_arr);
 // 0 1 2 3 4 5
 // 색인이 없고 순서로 찾을수 있다.
  console.log(_arr[0]); //1
  console.log(_arr[4]); //null
  console.log(_arr.length); //전체 담기 데이터의 길이(개수); 6
  console.log(_arr[_arr.length - 1]); // 마지막번째 해당하는 원소의 값.
 
 
 /*
 if - 조건문.
 */
 // 비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자 - 조건을 확인하기 위해서 비교.
 if(condition) {//해당되는 조건이 true.
     // code 가 실행.
 }
 else if(condition2){//true
     // code 가 실행.
 }
 else{
     // 모든 조건이 성립되이 않을 때.
     // code 가 실행.
 }
 
 var a = 10;
 var b = 5;
 var c;
 console.log(typeof c); //undefined
 if(typeof c === "undefined"){//true
     c = a * b;
 }else{
     c = a + b;
 }
 console.log(c);
 
 c = 100;
 console.log(typeof c); //number


/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var _suk = {};
prof = {
    name : "석진환",
    age : "24",
    school : "계원예술대학교",
    class : "디지털미디어디자인",
    "2학년세부전공" : "프로그래밍",
    grade : 2,
    "학번" : 21661059,
}
inr = "자기소개"
since = 1997;
since2 = " 16학번";
tool = [" 플래쉬" + " html" + " 3dmax"]
var _s1 = "안녕하세요. 제 이름은 " + prof.name + " 입니다.\n";
var _s2 = "전" + since + "년생" + since2 + "입니다.\n" ;
var _s3 = "군복무가 꼬여서 늦게 복학했습니다.\n";
var _s4 = "잘기억은 안나지만 다시 기억나도록 열심히하겠습니다.\n";
var _s5 = "배웠던 프로그래밍과 관련된 툴은" + tool + "입니다.\n" ;
var _s6 = "잘부탁드립니다!\n"; 


if(inr == "자기소개"){
    console.log(_s1 + _s2 + _s3 + _s4 + _s5 + _s6 );
}else{
    console.log("따란");
}