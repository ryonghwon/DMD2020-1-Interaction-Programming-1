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

// 1. 변수 a 를 선언하고 숫자 29 할당
var a = 29;
// 2. 변수 b 를 선언하고 변수 a 에 덧셈 대입으로 31 이 할당되도록 작성
var b = a + 2;
// 3. 변수 c 를 선언하고 변수 a 에 나머지 연산 대입으로 2 가 할당되도록 작성
var c = a % 3;

// 4-1. 만약 2(순서) 에서 생성된 변수를 3(순서) 에서 선언한 변수로 나누었을 때 나머지가 1 인 경우,
if( b % c == 1) {
    // 4-2. '일치합니다.' 라는 문자열이 console에 출력되도록 작성
    console.log('일치합니다.');
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

// 1. 변수 'user' 를 선언하고 새로운 객체를 생성하여 값으로 할당
var user = {};
// 2. 변수 'user' 객체의 각 원소와 값은 아래와 같이 적용
user = {
    name : "원희윤",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}

// 3-1. 만약 변수 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면
if(typeof user.job == "string"){
    // 3-2. "greeting" key의 값을 console에 출력되도록 작성
    console.log(user.greeting);
}
// 3-3. 문자가 아니라면
else {
    // 3-4. "name" key의 값을 console에 출력되도록 작성
    console.log(user.name);
}

/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

// 숫자(Num)
var num1 = 5;
var num2 = 7;
console.log(num1, num2);

console.log(5);
console.log(1.2);
console.log(5.2 + 1.3);

// 문자(String)
var string1 = "반갑습니다.";
var string2 = "원희윤입니다.";
console.log(string1, string2);

console.log("BILLY"); 
console.log("BORDERCOLLIE"); 
console.log("BILLY" + "BORDERCOLLIE");

console.log("\"BILLY\""); // escape / "BILLY"

console.log("BILLY BORDERCOLLIE".length); // 문자열 길이 / 18
console.log("BILLY\nBORDERCOLLIE"); // 정규식 줄바꿈
console.log("BILLY". indexOf("Y")); // 해당 문자의 순서 / 4

// 변수(variable)
var a = 40;
var b = 20;
console.log(a, b);

// 산술 연산자
console.log(a + b); // + (덧셈) / 60
console.log(a - b); // - (뺄셈) / 20
console.log(a * b); // * (곱하기) / 800
console.log(a / b); // / (나누기) / 2
console.log(a % b); // % (나머지) / 0

//숫자와 문자 연산
console.log("2" + "2"); // 22
console.log(2 + "3"); // 23
console.log(2 + parseInt("4")); // 6
console.log(2 + parseInt("200")); // 202
console.log(2 + parseInt("5000")); // 50O2

// 대입 연산자
var c;
c = 15;
console.log(c); // 15

// 비교 연산자
// <(미만) >(초과) <=(이하) >=(이상)
var d = 5;
var e = 8;
console.log(d < e); // true
e = 4;
console.log(d > e); // true
d = 9;
console.log(d <= e); // false
e = 10;
console.log(d >= e); // falsse

// 동등 연산자 ==
var f = "BORDERCOLLIE";
var g = "BORDERCOLLIE";
console.log(f == g); // true
f = "BILLY";
console.log(f == g); // false

// 일치 연산자 ===
// 데이터 타입까지 구분해서 비교
f = "BORDERCOLLIE";
console.log(f === g); // true
f = "1";
g = 1;
console.log(true == 1); // true
console.log(true === 1); // false

// 부정 연산자 != !==
var h = 2;
var i = "2";
console.log(h != i); // false
console.log(h !== i); // true

// 데이터 타입(Data Type)
// Number 숫자.
// String 문자열.
// Boolean 참 / 거짓.
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 -[], {} ...
// function 함수. 기능을 만드는 박스.
// NaN 수삭이 성립되지 않은 상태.

// typeof - 데이터의 타입 찾는 방법.
console.log(typeof 5); // number
console.log(typeof "WonHeeYun"); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// 오브젝트(Object)
// 색인이 포함된 데이터들의 집합
var _obj = {}; // 새로운 객체를 생성.
_obj = {
    key1 : "빌리",
    key2 : "BILLY",
    "key3" : 518
}
console.log(_obj); // key1: "빌리" / key2: "BILLY" / key3: 518
console.log(_obj.key1); // 빌리
console.log(_obj["key2"]); // BILLY
console.log(typeof _obj.key2); // string
console.log(typeof _obj.key3); // number

// 배열(Array)
var _arr = [];
_arr = ["빌리", "BILLY", 518, "보더콜리", null, true];
console.log(_arr); // "빌리", "BILLY", 518, "보더콜리", null, true
// 색인이 없고 순서로 찾기 가능
console.log(_arr[0]); // 빌리
console.log(_arr[3], _arr[2]); // 보더콜리 / 518
console.log(_arr.length); // 6
console.log(_arr[_arr.length - 5]); // BILLY

// 조건문(if)
// if(condition) { // 해당하는 조건이 ture
//     // code가 실행
// } else if(condition2) { // true
//     // code가 실행
// } else {
//     // 모든 조건이 성립되지 않을 때
//     // code가 실행
// }

var j = 5;
var k = 18;
var l;
console.log(typeof l); // undefined
if(typeof l === "undefined") {
    l = j * k; // 90
} else {
    l = j + k; // 23
}
console.log(l); // 90

l = 28;
console.log(typeof l); // number
if(typeof l === "undefined") {
    l = j * k; // 90
} else {
    l = j + k; // 23
}
console.log(l); // 23

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var user = {
    greeting: "안녕하세요!",
    name : "원희윤",
    age : "22",
    birth: "5월 28일",
    school: "계원예술대학교",
    studentid: "21961065",
}
home = "합정";
time = "1시간 20분"

hobby1 = "음악 감상";
hobby2 = "애니메이션 보기";
hobby3 = "산책하기";

like = ["강아지", "고양이", "이것저것"];
dislike = "말이 많거나 텐션이 높은 사람";

var txt1 = user.greeting + " 저는 " + user.name + "입니다.\n";
var txt2 = "현재 나이는 " + user.age + "살이고 " + "약 한달 뒤인 " + user.birth + "이 제 생일입니다.\n";
var txt3 = user.school + "에 재학중이며 " + "학번은 " + user.studentid + "입니다.\n";
var txt4 = "통학을 해서 살고있는 " + home + "에서 " + "학교까지 오는데 " + "약 " + time + "정도 소요됩니다.\n";
var txt5 = "취미는 " + hobby1 + ", " + hobby2 + ", " + hobby3 + " 등이고\n";
var txt6 = like[0] + "를 두마리 키우고 있어서 " + like[1] + "보단 " + like[0] + "를 더 좋아합니다.\n";
var txt7 = "또 " + like[2] + " 만들어보는 것을 좋아합니다.\n";
var txt8 = "제가 말수가 적어서 " + dislike + "과는 친해지기 힘들어요.\n";

var end = "하지만 친해질려고 노력은 하고 있습니다! 아무튼, 앞으로 잘 부탁드립니다:)";

console.log(txt1 + txt2 + txt3 + txt4 + txt5 + txt6 + txt7 + txt8);
if(end. indexOf("만") == 2){
    console.log(end);
} else {
    console.log("자기소개가 아님");
}

// 안녕하세요! 저는 원희윤입니다.
// 현재 나이는 22살이고 약 한달 뒤인 5월 28일이 제 생일입니다.
// 계원예술대학교에 재학중이며 학번은 21961065입니다.
// 통학을 해서 살고있는 합정에서 학교까지 오는데 약 1시간 20분정도 소요됩니다.
// 취미는 음악 감상, 애니메이션 보기, 산책하기 등이고5
// 강아지를 두마리 키우고 있어서 고양이보단 강아지를 더 좋아합니다.
// 또 이것저것 만들어보는 것을 좋아합니다.
// 제가 말수가 적어서 말이 많거나 텐션이 높은 사람과는 친해지기 힘들어요.
// 친해질려고 노력은 하고 있습니다! 아무튼, 앞으로 잘 부탁드립니다:)