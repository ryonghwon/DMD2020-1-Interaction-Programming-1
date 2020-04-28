console.log("외부 Javascript");

/*
문제 풀이.
*/
/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
var a = 29;
var b = a + 2 ;
var c = 2 % a ;
if(b % c == 1){
console.log("일치합니다.");
}
else{
console.log("불일치합니다.");
}

/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.
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
    name : "송인",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
         }

if (typeof user.job == "string")
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

// Number - 숫자
// 정수 : 딱 떨어지는 숫자 10 , 11
// 실수 : 소수점이 있는 수. 실제 현실에서 보이는 수 10.111111 , 102.22
console.log(10);
console.log(1.5);
console.log(10.10 + 1.5);


// String - 문자, 문자열.
console.log("안녕하세요1");
console.log("\"안녕하세요\""); // 큰따음표를 하고 싶으면 \ 사용해서 적어놓기
console.log("\'안녕하세요\'"); // 작은따음표를 하고 싶으면 \ 사용해서 적어놓기
console.log("\"!\@\%\""); // 큰따음표 "" 문자 출력하고 싶을 시 escape -  \\사용하면됨.
console.log("안녕하세요\n반갑습니다.\n 저는 송인입니다.") // \n - 정규식 줄바꿈.


// Variable - 변수
var variable; //  var a; - 선언만 되어 있고 값이 없는 상태 - undefined.
console.log(variable); // undefined
var variable = "value"; // var a = "" - 문자열 "value"
console.log(variable); // "value" - 선언과 값의 대입을 동시에
var num1 = 1;
var num2 = 2;
var string1 = "안녕하세요.";
var string2 = "반갑습니다.";
console.log(string1);


//operator - 연산자
// + - * / : 더하기 , 빼기 , 곱하기 , 나누기.
// % : 나머지. - 몫 , 나머지. 몫은 탈락되고 나머지가 나오는거

// +
console.log(100+100); //200

// -
console.log(500-150); //350

// *
console.log(3*3); //9

// /
console.log(12/2); //6

// %
//console.log(5 % 10); //5  5를 10으로 나눌때 몫은 0이됨 나머지가 5가됨  5를 기준으로 10을 나눳을때 
//console.log(9 % 3); // 0  다 나누고 나서 나머지 값이 출력되는거 3곱하기 3은 9 나머지가 업음
//console.log(10 % 5); //0
//console.log(13 % 3); //1 
console.log(4 % 5);

//String 연산 + 문자열과 문자열을 합쳐주는 것
console.log("Hello" + "world");
console.log("Hello" + " world");
console.log("Hello" + " " + " world" + "~" + "!");

//예외 숫자와 문자의 연산은??
console.log(1 + 1); //  2
console.log("1" + "1"); // 11
console.log(1 + "1"); // 11
console.log(1 + parseInt("1")); // 2? 11? 문자열을 숫자로 바꿔주겠다
console.log(1 + parseInt("100")); //101
console.log(1 + parseInt("100????")); // 문자가 있어도 개네들을 탈락하고 숫자만 숫자타입으로 변경후 계산됨

// 문자열의 길이. - 문자열이 끝난 부분에 .length (갯수 계산)
console.log("Hello world~~".length); //13 문자 단어 알파벳이 몇개있는지 갯수를 찾는거

// 해당 문자의 순서.
console.log("Hello world".indexOf("h")); //문자를 기준으로 어디에 있는지 찾아줌
//order - 순서는 0부터 시작.

//대입 연산자 
// =
var a = "즐거움";
console.log(a);

//비교 연산자
// 연산자 + - * / %
// 값과 값을 비교하기 위한 연산자.

// == > < >= <=
// => // 다른 기능을 하는 명령. 구분!

//  > 초과 연산자.
// a = 3;
// b = -1;
// console.log(a > b); //3 > -1 - true

//  < 미만 연산자.
// a = 3;
// b = -1;
// console.log(a < b); //3 < -1 - false
// a = -5;
// b = 0;
// console.log(a < b); //-5 < 0 - true

//  >= 이상 연산자.
//  <= 이하 연산자.
// a = 2;
// b = 2;
// console.log(a >= b); // 2>= 2 - true
// a = 3;
// b = 2;
// console.log(a >= b); // 3>= 2 - true

// == 동등 연산자. 
// Boolean - 참 | 거짓 true | false 으로 값이 반환.
var a = 1;
var b = 1;
console.log(a == b); // 1==1 - true
// 문자열과 문자열을 비교
//  동등연산자 == (왼쪽 연산자와 오른쪽 연산자의 값이 같으면 참을 반환함.)
var a = "Hello";
var b = "World";
console.log(a == b); // "Hello" == "world" - false
a = "World"
console.log(a == b); // "world" == "world" - true

a = 1;
b = "1";
console.log(a == b) // 1 == "1" - true ?
//  동등연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식하게 된다

//  일치 연산자.
//  === 엄격하게 데이터 타입까지 구분해서 비교 (왼쪽 연산자와 오른쪽 피연산자의 값이 같고 같은 타입이면 참을 반환함.)
console.log(a === b); // 1 === "1" - false
// console.log(true == 1); //true
// console.log(true === 1); //false

//부등(부정) 연산자.
// != !==
var a = 1;
var b = 1;
console.log(a != b); //1 != 1 - false
console.log(a == b); //1 == 1 - false
a = 2; 
console.log(a != b); //2 != 1 - true
console.log(a == b); //2 == 1 - false
var a = "a";
var b = "a";
console.log(a != b); //"a" != "a" - false
var a = "b";
console.log(a != b); //"b" != "a" - true
a = 2;
b = "2";
console.log(a != b); //2 != "2" - false
console.log(a !== b); //2 !== "2" - true

/* 
Data Type - 데이터 타입.
*/
// Number 숫자.
// String 문자열.
// Boolean 참 / 거짓.
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있느 상태.
// Object 객체 - [],{},...
// funtion 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

//typeof - 데이터의 타입 찾는 방법.
console.log(typeof 100); // number
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean

/*
Object - 객체.
색인이 포함된 데이터들의 집합.
*/
var _obj = {}; //새로운 객체를 생성.
_obj = {
    key1 : "value1" ,
    key2 : "value2" ,
    "key3" : 300
}
console.log(_obj);
console.log(_obj.key1); // 각 항목의 값을 찾기 .  value1
console.log(_obj["key1"]); // 위와 동일. value1
console.log(typeof _obj.key2); // string 
console.log(typeof _obj.key3); // number 

/*
Array - 배열 객체.
*/
var _arr = []; //새로운 배열 생성.
_arr = [1,2,"3","안녕하세요",null,true];
console.log(_arr);
//  0 1 2 3 4 5
// 색인이 없고 순서로 찾을 수 있다.
// console.log(_arr[0]); //1
// console.log(_arr[4]); //null
// console.log(_arr.length); //전체 담기 데이터의 길이(개수); 6
// console.log(_arr[_arr.length - 1]) //배열 객체의 마지막에 해당하는 값

/*
if - 조건문.
*/
// 비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자 - 조건을 확인하기 위해서 비교.
// if(condition) {//해당되는 조건이 true.
//     // code 가 실행.
// }
// else if(condition2){//true
//     // code 가 실행.
// }
// else{
//     // 모든 조건이 성립되이 않을 때.
//     // code 가 실행.
// }

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
if(typeof c === "undefined"){//true.
     c = a * b;
}else{//false.
     c = a + b;
}
console.log(c);

/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var inn = {} ;
inn = { 
    name : "송인",
    school : "계원예술대학교 ",
    major : "디지털미디어디자인학과",
    grade : 2 ,
    class : "D",
    age : "24",
}
var family = [" 형"," 동생"," 부모님"];
var city = [" 서울시" ," 서초구", " 방배동"];
var study = "js"
var innn = " 열심히 듣겠습니다! 잘부탁드립니다~!"

var in_ = "안녕하세요 " + "저는 " + inn.name + "입니다!\n";
var in__= "현재 " + inn.school + inn.major + "에 다니고 있으며 " + inn.grade +"학년 " + inn.class +"반" + " 학생 입니다\n" + "아!" + " 그리고" + " 저는 " + (20 + 4) + "살" + " 입니다.\n";
var in___ = "저의 " + "가족은" + family[2] + family[1] + family[0] + " 총 " + ( 5 % 32) + "명" + " 입니다\n"
var in____ = "저는" + city[0] + city[1] + city[2] + "에 살고 있습니다.\n";
var in_____="이번 " + inn.grade + "학년 " + study + " 수업" + innn ;


if
(family == city )
{
    console.log(in_);
}
else
{
console.log(in_ + in__ + in___ + in____ + in_____);
}

//안녕하세요 저는 송인입니다!
//현재 계원예술대학교 디지털미디어디자인학과에 다니고 있으며 2학년 D반 학생 입니다
//아! 그리고 저는 24살 입니다.
//저의 가족은 부모님 동생 형 총 5명 입니다
//저는 서울시 서초구 방배동에 살고 있습니다.
//이번 2학년 js 수업 열심히 듣겠습니다! 잘부탁드립니다~!


