console.log("외부 자바스크립트 로드");

// Quest 1.


// 변수를 선언하고 숫자 '29' 를 할당합니다.
//var a = 29;

// 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
//var b = a + 2;
//console.log(b);

// 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
//var c = a % 3
//console.log(c);

// 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.

//if(b % c == 1){
    //console.log("일치합니다");
//}


// Quest 2.


// 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user = {};

// 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.
user = {
    name : "이상원",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D"
}

// 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting" key의 값을 console에 출력, 문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성합니다.
if(typeof user.job === "string"){
    console.log(user.greeting)
}else{
    console.log(user.name);
}


//JavaScript 연습하기
//1.숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.

//[1] 숫자
/*
Number - 숫자.
*/

//10
//1.5
//10.10
//console.log(10);
//console.log(1.5);
//console.log(10.10 + 1.5);
//정수 , 실수.
// 10 - 딱 떨어지는 수.
//10.11111 - 소수점이 있는 수.

/*
Operator - 연산자.
+ _ * / : 더하기 , 빼기, 곱하기, 나누기.
% 나머지. - 몫, 나머지.
*/

// +
//console.log(100 + 100); //200

// -
//console.log(500 - 150); //350

// *
//console.log(3 * 3); //9

//  / 
//console.log(12 / 2); //6

//  %
// console.log(5 % 10); //5 - 5 / 10 10 * 0(몫) 나머지 5
// console.log(9 % 3); //0
// console.log(10 % 5); //0
// console.log(13 % 3) //1

//[2] 문자
/* 
String - 문자, 문자열.
*/

// console.log("안녕하세요");
// console.log('안녕하세요');
// console.log("안녕하세요'");
// console.log("\"안녕하세요\""); //escape. \ 
// console.log('\'안녕하세요\''); //escape.
// console.log("\!\@\%"); //escape.

// \n - 정규식 줄바꿈.
// console.log("안녕하세요\n반갑습니다\n저는 이상원입니다");

// String 연산 *
// console.log("Hello" + "world");
// console.log("Hello" + " world");
// console.log("Hello" + " " + "world" + "~" + "!!");

// 숫자와 문자의 연산은??
// console.log(1 + 1); //2
// console.log("1" + "1"); //11
// console.log(1 + "1"); //11
// console.log(1 + parseInt("1")); //2
// console.log(1 + parseInt("100"));
// console.log(1 + parseInt("100????")); //101 parseInt - 문자는 무시하고 숫자만 받아옴

// 문자열의 길이. - 문자열이 끝난 부분에  .length
//console.log("Hello world~!".length); //13.

// 해당 문자의 순서.
//console.log("Hello world".indexOf("H")); //0
// order - 순서는 0부터 시작.

/* 
[3] variable - 변수.
*/

// 변수 선언
// 형식.
// var variable; // 선언만 되어 있고 값이 없는 상태 - undefined.
// console.log(variable); //undefined
// variable = "value"; //변수에 값(문자열 "value")을 대입.
// console.log(variable); //"value"

// var variable2 = "value2";
// console.log(variable2); //선언과 값의 대입을 동시에.

// var num1 = 1;
// var num2 = 2;
// var string1 = "안녕하세요.";
// var string2 = "반갑습니다."; 
 
// var a = 1;
// var b = 10;
// console.log(a + b); //11
// a = 100; // 변수를 재활용.
// console.log(a + b); //110 
// a = a + 200; // 100 + 200 = 300

//변수의 응용
// 100에 10을 더한 후, 10으로 나누고, 10으로 뺀 후, 10을 곱한다.
// var a = 100;
// var b = 10;
// var sum = ((a + b) / b - b) * b;
// console.log("결과값 : " + sum);
// 200에 20을 더한 후, 20으로 나누고, 20으로 뺀 후, 20을 곱한다.
// var a = 200;
// var b = 20;
// var sum = ((a + b) / b - b) * b;
// console.log("결과값 : " + sum);

//[4] 연산자

// 연산자 + - * / %
// 값과 값을 비교하기 위한 연산자.
// Boolean - 참 | 거짓  true | false 으로 값이 반환.

// == > < >= <=
// => // 다른 기능을 하는 명령. 구분 필수!

// == 동등연산자
// var a = 1;
// var b = 1;
// console.log(a == b); // 1 == 1 - true

// > 초과 연산자.
// a = 3;
// b = -1;
// console.log(a > b); // 3 > -1 - true

// < 미만 연산자.
// console.log(a < b); // 3 < -1 - false
// a = -5;
// b = 0;
// console.log(a < b); // -5 < 0 - true

// >= 이상 연산자.

// a = 2;
// b = 2;
// console.log(a >= b); //2 >= 2 - true
// a = 3;
// b = 2;
// console.log(a >= b); //3 >= 2 - true

// <= 이하 연산자.
// a = 2;
// b = 2;
// console.log(a <= b); //2 <= 2 - true
// a = 3;
// b = 2;
// console.log(a <= b); //3 <= 2 - false

// 문자열과 문자열을 비교
// 동등연산자 == 
// var a = "Hello";
// var b = "world";
// console.log(a == b); // "Hello" == "world" - false
// a = "world";
// console.log(a == b); // "world" == "world" - true

// a = 1;
// b = "1";
// console.log(a == b); // 1 == "1" - true
//동등연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식.

//일치연산자.
// === 엄격하게 데이터 타입까지 구분해서 비교.
// console.log(a === b); //1 === "1" - false
//console.log(true == 1); //true
//console.log(true === 1); //false

//부등(부정) 연산자.
// !=. !==
// var a = 1;
// var b = 1;
// console.log(a != b); //1 != 1 - false.
// console.log(a == b); // 1== 1 - true
// a = 2;
// console.log(a != b); //2 != 1 - true
// console.log(a == b); //2 == 1 - false
// var a = "a";
// var b = "a";
// console.log(a != b); // "a" != "a" - false
// var a = "b";
// console.log(a != b); // "b" != "a" - true
// a = 2;
// b = "2";
// console.log(a != b); // 2 != "2" - - false
// console.log(a !== b); // 2 != "2" - true 타입이 다른경우는 꼭 !== 사용 

/* 
[5] Data Type - 데이터 타입.
*/
// Number 숫자. *** 중요
// String 문자열. *** 중요
// Boolean 참 / 거짓. *** 중요
// Undefined 값이 없는 상태.
// Null 값은 적용하지만 비어있는 상태.
// Object 객체 - [], {} ...
// function 함수. 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

// typeof - 데이터의 타입 찾는 방법.
/* 
console.log(typeof 100); //number
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
*/

/* [6]Object - 객체 색인이 포함된 데이터들의 집합.
*/
// var _obj = {}; // 새로운 객체를 생성.
// _obj = {
//     key1 : "value1",
//     key2 : "value2",
//     "key3" : 300
// }
// console.log(_obj);
// console.log(_obj.key1); // 각 항목의 값을 찾기.
// console.log(_obj["key1"]) //위와 동일. value1
// console.log(typeof _obj.key2); // string
// console.log(typeof _obj.key3); // number

/* 
[7]Array - 배열 객체.
*/
// var _arr = []; //새로운 배열 생성.
// _arr = [1, 2, "3", "안녕하세요", null, true, false];
// console.log(_arr);
// //0 1 2 3 4 5
// // 색인이 없고 순서로 찾을 수 있다,.
// console.log(_arr[0]); //1
// console.log(_arr[4]); //null
// console.log(_arr.length); // 전체 담긴 데이터의 길이(개수) : 6
// console.log(_arr[_arr.length - 1]); //배열 객체의 마지막에 해당하는 값.

/* 
[8]if - 조건문.
*/
//비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자. - 조건을 확인하기 위해서 비교.
// if(condition){ //해당하는 조건이 true.
//     //code 가 실행 ...
// }else if(condition2){ //true
//     //code 가 실행 ...
// }else{
//     //모든 조건이 성립되지 않을때
//     //code 가 실행 ...
// }

// var a = 10;
// var b = 5;
// var c;
// console.log(typeof c); //undefined.
// if(typeof c === "undefined"){ //true.
//     c = a * b;
// }else{
//     c = a + b;
// }
// console.log(c);

// c = 100;
// console.log(typeof c); //number
// if(typeof c === "undefined"){ //true.
//     c = a * b;
// }else{//false.
//     c = a + b;
// }
// console.log(c);

// 3. 자기소개하기.
// 1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
// 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
// 2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
// 3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.

info = {
    name : "이상원",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D반"
}

var adress = [" 대한민국", " 경기도", " 하남시" , "의왕시", " 내손동"];
var hobby = ["요리", "노래방", "운동", "넷플릭스", "여행"];

var a = "010";
var b = "9256";
var c = "1428";

var string1 = "열심히 하지 않겠습니다."
var string2 = "열심히 하겠습니다."


console.log("안녕하세요" + " " + info.school + " " + info.major + "\n재학중인 " + info.grade + info.class +" "+info.name + "입니다.")
console.log("제 본가는" + adress[0] + adress[1] + adress[2] + "이며" +"\n현재는 "+ adress[3] + adress[4]+ "에서 살고있습니다.")

if(adress.length == hobby.length)
{
    console.log("제 전화번호는 "+ a + b + c + "입니다");
}

console.log("요즘 제 취미는 " + hobby[0]+ "이며 " + "\n쉬는날에는 보통 " + hobby[1]+"에 가거나 " + hobby[3] + "를 봅니다.")
console.log("이번년도 꿈은 " + hobby[2]+"을 열심히 해서" + "\n여름에 바다로 " +hobby[4] + "을 가는것입니다." )


if(typeof adress[2] === "number")
{
    console.log(string1)
}
else{
    console.log(string2);
}