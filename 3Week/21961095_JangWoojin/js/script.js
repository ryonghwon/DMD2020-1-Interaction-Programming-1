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
var a = 29; // 변수 a를 선언하고 숫자 29를 할당합니다.
var b = a + 2; // 변수 b를 선언하고 덧셈 대입을 이용하여 31이 할당되기 위해 앞에서 선언한 변수 a에 숫자 2를 더합니다.
var c = a % 3; // 변수 c를 선언하고 나머지 연산 대입으로 2를 할당하도록 하기 위해 앞에서 선언한 변수 a에 3으로 나눈 나머지값을 구합니다.
if (b % c == 1) {
  // 변수 a(29)에 2를 더하여 나온 변수b(31)에 변수 a(29)를 3으로 나눈 나머지값(2)을 나눈 나머지 값이 1일 경우.
  console.log("일치합니다."); // 콘솔에 "일치합니다"를 출력합니다. 결과값은 1이 되므로 콘솔에 출력
} else {
  console.log("일치하지 않습니다."); // 일치하지 않을 경우 "일치하지 않습니다."를 출력합니다.
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
var user = {
  name: "장우진",
  greeting: "안녕하세요",
  job: "학생",
  school: "계원예술대학교",
  major: "디지털미디어디자인",
  grade: 2,
  class: "D",
};
if (typeof user.job === "string") {
  // user객체 "job" key의 값의 데이터 타입이 문자라면
  console.log(user.greeting); // 콘솔에 user객체 "greeting" key의 값을 출력합니다. // "안녕하세요"
} else {
  // user객체 "job" key의 값의 데이터 타입이 문자가 아니라면
  console.log(user.name); // 콘솔에 user객체 "name" key의 값을 출력합니다. // "장우진"
}

/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
/*
1. 숫자(Number) 자바스크립트에서는 다른 언어와 달리 숫자에서 정수와 실수 구분이 중요하지 않습니다.
2. 문자(String) 자바스크립트에서 문자를 사용시 '',""(따옴표)를 사용합니다.
3. 변수(variable) 자바스크립트에서 변수 지정시 var를 사용하며 (( var 변수명 = 변수값;  )) 형식을 사용합니다 ex) var a = 32;
4. 연산자.
산술 연산자 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)가 있습니다.
*/
var a = 1 + 2; // 3
console.log(a);
var b = 2 - 1; // 1
console.log(b);
var c = 2 * 3; // 6
console.log(c);
var d = 6 / 2; // 3
console.log(d);
var e = 7 % 3; // 1
console.log(e);
var s = "안녕" + "하세요"; // 안녕하세요
console.log(s);
var st = "Hello";
var tr = " Javascript";
console.log(st + tr); // Hello Javascirpt
// 대입연산자.
// 위에 사용한 =이 대입연산자입니다. var a = 2; 에서 =의 역할은 오른쪽 값을 왼쪽 변수에 대입해주는 역할을 합니다.
// +=, -=, /=, *=, %= 같은 복합대입연산자도 있습니다. 연산자를 줄여쓰는 용도인데 밑에 예시를 들겠습니다.
var f = 5;
f += 2; // 7 (f = f + 2; 와 같습니다.)
console.log(f);
f -= 3; // 4 (f = f - 3; 과 같습니다.)
console.log(f);
f /= 2; // 2 (f = f / 3; 과 같습니다.)
console.log(f);
f *= 5.5; // 11 (f = f * 5.5; 와 같습니다.)
console.log(f);
f %= 2; // 1 (f = f % 2; 와 같습니다. 11을 2로 나누면 몫이 5 나머지가 1입니다. 그래서 나머지인 1을 출력합니다.)
console.log(f);
// 비교연산자, 동등연산자, 일치연산자, 부정연산자.
// >, <, >=, <= 순서대로 (왼쪽이 오른쪽에 비해) 같음, 같지 않음, 큼, 작음, 크거나 같은, 작거나 같음입니다.
// == 은 값이 같음이고 ===은 값이 같고 데이터 타입도 같음입니다.
// != 은 값이 같지 않을때 true가 출력되고 !==은 값이 같지 않고 데이터도 같지 않을때 true가 출력됩니다.
var g = 10;
var h = 12;
console.log(g > h); // false
console.log(g < h); // true
console.log(g >= h); // false
console.log(g <= h); // true
var j = 10;
console.log(g == j); // true
console.log(g === j); // true
var n = "야호";
console.log(g != n); // true
console.log(g !== n); // true
/* 
- 데이터타입
Number (숫자), String (문자), Boolean (참,거짓), undefined(값이 정의되지 않음), null(값이 비어있음), NaN(숫자가 아닌 경우)
- 객체 (Object)
여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입. key, value값을 지정
var 객체 = { key1 : value1 , key2 : value2}
- 배열 (Array)
배열은 인덱스를 가지는 복수의 자료를 저장할 수 있는 자료구조
var 배열 = [a, b, c, d]
- 조건문 (if)
조건문의 조건식에 작성한 식이 참이면 연산을 진행한다. 거짓일 시 진행하지 않는다.
*/
var n1;
var n2 = null;
var n3 = 123;
var n4 = "계원";
var o1 = { name1: "계원", name2: "예술", name3: "대학교", age: 350 };
var a1 = [1, 2, 3, "장", "우", "진"];

console.log(n1); // undefined
console.log(n2); // null
console.log(typeof n3); // number
console.log(typeof n4); // string
console.log(typeof o1); // object
console.log(o1.name3); // "대학교"
console.log(a1[5]); // 진
if (typeof o1.name2 === typeof a1[4]) {
  console.log("데이터타입의 종류가 같습니다.");
} else {
  console.log("데이터타입의 종류가 같지 않습니다.");
}
/* 
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var hello = "안녕하세요";

var me = {
  name: "장우진",
  grade: 2,
  cla: "D",
  nums: 21961095,
  major: "프로그래밍",
};

var school = [
  "안양대학교",
  "계원예술대학교",
  "명지전문대학교",
  "서울예술대학교",
  "대림대학교",
];
var city = ["인천", "안양", "의왕", "부천", "광명"];
var js = "자바스크립트";

var p1 =
  hello +
  "저는 " +
  school[1] +
  " " +
  me.grade +
  "학년 " +
  me.cla +
  "반 " +
  me.name +
  "입니다.\n";

var p2 = `제가 사는 곳은 ${city[3]}입니다.\n`;
var p3 = `학교를 갈때는 ${city[3]}에서 출발해 ${city[4]}를 거치고 ${city[1]}를 거쳐서 ${city[2]}까지 옵니다.\n`;
var p4 = `학번은 ${me.nums}이고 세부전공으로는 ${me.major}을 선택했습니다.\n`;
var p5 = `${js} 공부하는 거 너무 재미있습니다. 앞으로 잘 부탁드려요!`;

if (school.length == city.length) {
  console.log(p1 + p2 + p3 + p4 + p5);
}
