/* 
변수를 선언하고 숫자 '29' 를 할당합니다.
변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다. 
*/

console.log("외부 JavaScript 로드");

// var a = 29;
// var b = 2;
// var c = 3;
// console.log(a + b);
// console.log(a % c);

var a = 29;
var b = a + 2;
var c = a - 27;

console.log(a);
console.log(b);
console.log(c % a);
if(b % c == 1);{
    console.log("일치합니다.");    
}

/*
'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.
만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting" key의 값을 console에 출력, 문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성합니다.
첫번째 key: "name" value: "본인이름 입력"
두번째 key: "greeting" value: "안녕하세요"
세번째 key: "job" value: "학생"
네번째 key: "school" value: "계원예술대학교"
다섯번째 key: "major" value: "디지털미디어디자인"
여섯번째 key: "grade" value: 2
일곱번째 key: "class" value: "D"
*/

var user = {};
user = {
    name : "전화영",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"

}
if (typeof user.job === "string"){
    console.log(user.greating);
}else{
    console.log(user.name);
}

// 1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
// 2. 값은 console.log() 를 이용하여 출력합니다.
// 3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.


//JavaScript 연습하기.

//Number - 숫자
//10 :정수 
//1.5 : 소수

console.log(10 + 1.5); //11.5
console.log(2.2 + 2.5); //4.7

//문자 (string)
console.log("안녕하세요");
console.log('전화영입니다');
console.log('안녕하세요');
console.log("\"전화영입니다\"");

// \n정규식 줄바꿈
console.log("안녕하세요.\n반갑습니다.\n저는 전화영입니다.");

//string  - 연산 +
console.log("Hello" + "world"); //HelloWorld
console.log("Hello" + " world"); //Hello World
console.log("Hello" + " " + "world" + "~~"); //Hello world~~

//숫자와 문자의 연산
console.log("1" + "1"); //11
console.log(1 + "1"); //11
console.log(1 + parseInt("1")); //2
console.log(1 + parseInt("100")); //101

//문자열의 길이
console.log("Hello world!!!!!!".length); //17

//variable - 변수
//변수 선언

var variable;
console.log(variable);

variable = "value"; //문자열 "value" 변수의 값(문자열 "value")을 대입
console.log(variable); //"value"

var variable2 ="value2";
console.log(variable2); //선언과 값의 대입을 동시에

var num = 1;
var num2 = 2;
var string = "안녕하세요";
var string2 ="반갑습니다.";

var a = 1;
var b = 10;
console.log(a + b); //11
a = 200; //변수를 재활용
console.log(a + b); //210
a = a + 200; // 200 + 200 
console.log(a + b) //410
a = a + 200; 400 + 200
console.log(a + b); //600 + 10 = 610
a += 600; //600 + 600 = 1200
console.log(a + b); //1210


//변수 응용

//100에 20을 더한후, 20으로 나누고, 10으로 뺀 후, 10을 곱한다.
var c = 100;
var d = 20;
var sum = ((c+d)/d - d) * d;
console.log("결과값 : " + sum);

//1000에 40을 더한후, 4로 나누고, 400을 밴 후, 8을 곱한다.
e = 1000;
f = 40;
g = 4;
h = 400;
i = 8;
var sum = ((e + f) / g - h) * i;
console.log("결과값 : " + sum);

//연산자
//산술
console.log(112 + 114); //226
console.log(610 - 408); //202
console.log(7 * 7); //14
console.log(14 / 2); //7
console.log(10 % 5); //0
console.log(3 % 14) //3

//대입
var a= 1
console.log(a);

//비교
//동등 연산자
var a = 3;
var b = 3;
console.log(a == b); //3 == 3 true

//> 초과 연산자
a = 3;
b = -2;
console.log(a > b); //3 > -2 true

//< 미만 연산자
a = 3;
b = -2;
console.log(a < b); //3 < -2 false
a = -5;
b = 0;
console.log(a < b); //-5 < 0 true

//>= 이상 연산자
a = 4;
b = 4;
console.log(a >= b); //4 >= 4 true
//<= 이하 연산자
a = 5;
b = 3;
console.log(a <= b); //5<= 3 flase

//문자열과 문자열 비교
var a = "Hello";
var b = "World";
console.log(a == b); // "Hello" == "World" false
a = "World";
console.log(a==b); // "World" == "World" true

//동등연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식한다.
a = 1;
b ="1";
console.log(a == b); // 1 == "1" true

//=== 엄격하게 데이터 타입까지 구분해서 비교
console.log(a === b); //1 ==="1" false
console.log(true == 1); //true
console.log(true === 1); //false

//부정 연산자 !=, !==
var a = 3;
var b = 3;
console.log( a != b); //3 != 3 false
console.log(a == b); //3 == 3 true
a = 2;
console.log(a != b); //2 != 3 true
console.log(a == b) //2 == 3 flase
var a = "a";
var b ="a";
console.log( a != b); // "a" != "a" flase
var a = "b";
console.log(a != b); //"b" != "a" true
a = 4;
b = "4";
console.log(a != b); //4 != "4" false
console.log(a !== b); //4 !== "4" true

//Object - 객체
var _obj = {};// 새로운 객체를 생성한다.
_obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : 300
}
console.log(_obj);
console.log(_obj.key1); //value1
console.log*_obj["key2"]; //value2
console.log(typeof _obj.key2); //string
console.log(typeof _obj.key3) //number

// Array - 배열 객체
var _arr =[]; //새로운 배열을 생성한다.
_arr = [1, 2, "3", "안녕하세요", null, true];
console.log (_arr); 
console.log(_arr[0]); //1
console.log(_arr[4]); //null
console.log(_arr.length); //데이터 길이의 개수 : 6
console.log(_arr[_arr.length -1]); //배열 객체의 마지막에 해당하는 값

//if - 조건문
var a = 12;
var b = 6;
var c;
console.log(typeof c); //undifined
if(typeof c === "undefined"){
    c = a * b;
}else{
    c = a + b;
}
console.log(c);

c = 100;
console.log(typeof c); //number
if(typeof c === "undefined"){
    c = a + b; 
}
console.log(c);

//자기소개
var me = {};
me = {
    name : "전화영",
    greeting : "안녕하세요?",
    school : "계원예술대학교 ",
    major : "디지털미디어디자인과 ",
    grade : " 2학년",
    job : "학생",
    age : "21",
    birthday : "6월 10일"
}

var favorit = {
    singer : "엑소, 혁오, 잔나비, 트로이시반",
    hobby : "강아지 만지기, 노래듣기"
}

var one = (me.greeting) + " 저는 " + (me.name) + " 입니다. \n";
var two = "저는 " + (me.school) + (me.major)+ (me.grade) + "에 다니고 있습니다. \n";
var three = "저는 올해 " + (me.age) + "살이고 제 생일은" + (me.birthday) + " 입니다 \n";
var four = "제가 가장 좋아하는 가수는 " + (favorit.singer) + "입니다.\n";
var five = "제 취미는 " + (favorit.hobby) + "입니다."

console.log (one + two + three + four + five);

/*
안녕하세요 저는 전화영 입니다.
저는 계원예술대학교 디지털미디어디자인과 2학년에 다니고 있습니다.
저는 올해 21살이고 제 생일은 6월 10일 입니다.
제가 가장 좋아하는 가수는 엑소, 혁오, 잔나비, 트로이시반입니다.
제 취미는 강아지 만지기, 노래듣기 입니다.
*/
