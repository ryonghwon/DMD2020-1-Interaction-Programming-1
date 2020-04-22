console.log("외부 JavaScript 로드");


// 1. 변수를 선언하고 숫자'29'를 할당합니다.
var a = 29;
// 2. 변수를 하나 더 선언하고 1 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
var b = a + 2;
// 3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
var c = a % 3;
// 4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다. 
if( b % c == 1 ){
    // 나머지는 1과 같음으로 콘솔 창에 '일치합니다' 가 출력되었습니다.
    console.log('일치합니다');
}

// 1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user = {};
// 2. 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.
user = {
    name : "이명빈",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D"
};
// 3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting" key의 값을 console에 출력합니다.
if(typeof user.job === "string"){
    // greeting의 key 값인 "안녕하세요" 가 출력되었습니다.
    console.log(user.greeting)
}
// 문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성합니다.
else{
    // 변수 user의 객체 "job"은 문자 타입이므로 "name"의 key 값은 출력되지 않습니다.
    console.log(user.name);
}

//-------------------------------------------------------------

// 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
// 값은 console.log() 를 이용하여 출력합니다.
// 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
 
/* 
1. 숫자 (Number)
*/
// 정수와 실수로 이루어짐. 
var num1 = 1;
console.log(typeof num1); // number

/* 
2. 문자 (String)
*/
// 문자, 문자열
var str1 = "문자열 변수";
console.log(typeof str1); // string

/* 
3. 변수 (variable)
*/
// var 키워드로 선언.
// 초기 값 없이 선언된 변수는 undefined 으로 나타남 (선언만 되어있고 값은 없는 상태)
var variable;
console.log(variable); // undefined
variable = "변수";
console.log(variable); // 변수

/* 
4. 연산자 (산술, 대입, 비교, 동등, 일치, 부정)
*/
// 산술: + - * / %
// 숫자 연산
console.log(1 + 2); // + 연산자. 3 출력
console.log(2 - 1); // - 연산자. 1 출력
console.log(2 * 1); // * 연산자. 2 출력
console.log(18 / 3); // / 연산자. 6 출력
console.log(16 % 3); // 나머지 연산자. 1 출력
// 문자 연산
var str2 = "안녕하세요";
var str3 = " 이명빈";
var str4 = " 입니다";
console.log(str2 + str3 + str4); // "안녕하세요 이명빈 입니다"

// 대입: = += -= *= /= &= ^= |= 
var num2 = 5;
console.log(num2 += 5); // num2 = num2 + 5 -> 10
console.log(num2 -= 5); // num2 = num2 - 5 -> 5
console.log(num2 *= 3); // num2 = num2 * 3 -> 15
console.log(num2 /= 3); // num2 = num2 / 3 -> 5
console.log(num2 %= 3); // num2 = num2 % 3 -> 2

// 비교: < > <= >=
num2 = 5;
console.log(num2 < 10); // true
console.log(num2 > 10); // false
console.log(num2 <= 10); // true
console.log(num2 >= 1); // true

// 동등: ==
console.log(num2 == 5); // true
console.log(num2 == '5'); // true

// 일치: ===
console.log(num2 ===  5); // true
console.log(num2 === '5'); // flase -> num2는 문자열이 아닌 숫자이기 때문.

// 부정: !=
console.log(num2 != 5); // flase
console.log(num2 != 10); // true

/* 
5. 데이터 타입 (Data Type)
*/
// Number 숫자.
// String 문자열.
// Boolean 참/거짓.
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 [], {} ...
// function 함수. 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태. 

// typeof 데이터 타입을 찾는 방법.
console.log(typeof 1); // number
console.log(typeof "이명빈"); // string
console.log(typeof true); // boolean

var n;
console.log(n); // undefined

var n = null;
console.log(n); // null
 
/* 
6. 오브젝트 (Object)
*/
var _obj = {};
_obj= {
    name : "이명빈",
    major : "디지털 미디어 디자인",
    year : "2020"
}
console.log(_obj); // name "이명빈", major "디지털 미디어 디자인", year "2020" 값 출력
console.log(_obj.name); // name의 key 값 "이명빈" 출력
console.log(_obj.major); // major의 key 값 "디지털 미디어 디자인" 출력
console.log(_obj.year); // year의 key 값 "2020" 출력

/* 
7. 배열 (Array)
*/
var _arr = {};
_arr = [2, 4, "6", "hello", null, true];
console.log(_arr[0]); // 0번째 순서 값 2 출력
console.log(_arr[2]); // 2번째 순서 값 6 출력
console.log(_arr[3]); // 3번째 순서 값 "hello" 출력
console.log(_arr[5]); // 5번째 순서 값 true 출력

/* 
8. 조건문 (if)
*/
// 조건을 확인하기 위해 비교
var num3 = 1;
if (num3 % 2 == 1){
    // num3 의 값은 1로 홀수라는 조건에 부합함으로 '홀수 입니다.' 출력.
    console.log('홀수 입니다.');
}
else{
    // num3 의 값은 1로 출력되지않음.
    console.log('짝수 입니다.')
}

//-------------------------------------------------------------
// 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
// 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
var user = {
    greeting: '안녕하세요. ',
    name: ' 이명빈',
    age: 21,
    birth: ' 1월 11일',
    school: '계원예술대학교',
    grade: ' 2학년',
    class: ' D반'
}
var adj = ' 파릇파릇한 ';
var from = '인천';
var time = '왕복 3시간';
var adv = ['하루빨리', '어서', ' 벌써', ' 앞으로'];
var goal = '자취';
var begin = ' 개강';
var mate = ' 동기들';
var sentence = ' 입니다. ';

var int1 = user.greeting + "저는 " + user.school + user.grade + user.class + user.name + sentence;
var int2 = "제 생일은" + user.birth + "이고" + " 나이는" + adj + user.age + "살" + sentence;
var int3 = from + " 살고있고" + " 학교까지" + " 통학시간은" + time + sentence;
var int4 = adv[0] + goal + " 하는게" + " 목표" + sentence;
var int5 = adv[1] + begin + " 해서" + user.class + mate + "과" + " 친해지고싶어요...";
var int6 = "교수님" + adv[2] + " 4주나" + " 지났지만" + adv[3];

var end_greeting = " 잘부탁드립니다!";

console.log(int1 + int2 + int3 + int4 + int5 + int6);

if(typeof end_greeting == "string"){
    console.log(end_greeting);
}
else {
    console.log("열심히 하겠습니다!");
}

/* 
안녕하세요. 저는 계원예술대학교 2학년 D반 이명빈 입니다.
제 생일은 1월 11일 이고 나이는 파릇파릇한 21살입니다.
인천에서 살고있고 학교까지 통학 시간은 왕복 3시간 입니다.
하루빨리 자취 하는게 목표입니다.
어서 개강해서 D반 동기들과 친해지고싶어요...
교수님 벌써 4주나 지났지만 앞으로 잘부탁드립니다!
*/

// 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.