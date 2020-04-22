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
var a = 29; // 1. 변수 a를 선언하고 숫자 29를 할당.
var b = a + 2; // 2. 변수 b를 선언하고 a 값인 29에 2를 더하여 결과값에 31이 할당되도록 함.
var c = a % 3; // 3. 변수 c를 선언하고 a를 3으로 나누어 (몫이 9이고 나머지가 2) 결과값에 2가 할당되도록 함.
if (b % c == 1) { // 4. 변수 b를 c로 나누었을 때 나머지가 1과 같다면 Console에 "일치합니다."라는 문자열을 출력. 31을 2로 나눈 나머지는 1이므로 "일치합니다."를 출력할 것임.
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
user = {
    name: "이은서",
    greeting: "안녕하세요",
    job: "학생",
    school: "계원예술대학교",
    major: "디지털미디어디자인",
    grade: 2,
    class: "D"
}
if (typeof user.job === "string") { // "user" 객체의 "job"의 값인 "학생"의 데이터 타입이 문자열이라면
    console.log(user.greeting); // console에 "user" 객체의 "greeting"의 값인 "안녕하세요"를 출력. "학생"은 문자열이므로 "안녕하세요"가 출력될 것임.
}
else { // "user" 객체의 "job"의 값인 "학생"의 데이터 타입이 문자열이 아니라면
    console.log(user.name); // console에 "user" 객체의 "name"의 값인 "이은서"를 출력. "학생"은 문자열이므로 "이은서"가 출력되지 않을 것임.
}



/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
// 숫자 (Number)
var a = 3;
console.log(a); // 3

// 문자 (String)
var a = "랄라랄라";
var b = "흥얼흥얼";
console.log(a + b); // 랄라랄라흥얼흥얼
console.log(a, b); // 궁금해서 출력해봤더니 "랄라랄라 흥얼흥얼"로 출력됨.

// 변수 (Variable)
var a = 30;
var b = 6;
var c = 4;
var sum = a + b + c; // 30 + 6 + 4 = 40
console.log("계 : " + sum); // 계 : 40

// 연산자 (Operator)
var a = 10;
var b = 4;
console.log(a * b - 5); // 10 * 4 - 5 = 35
console.log(a > b); // true
console.log(a <= b); // false
var a = 3;
var b = 3;
console.log(a != b); // false
console.log(a == b); // true
a = 2;
console.log(a != b); // true
console.log(a == b); // false

// 데이터 타입 (Data Type)
var a = "41";
var b = 41;
console.log(a == b); // true. 숫자 타입을 문자열과 비교하면 문자열로 인식.
console.log(a === b); // false. 데이터 타입은 다르므로 거짓으로 판별.
var a = {};
console.log(typeof a); // object

// 오브젝트 (Object)
a = {
    city: "seoul",
    station: "samseong",
    building: "coex"
}
console.log(a); // {city: "seoul", station: "samseong", building: "coex"}
console.log(a.city); // seoul
console.log(a["station"]); // samseong
console.log(typeof a.building); // coex

// 배열 (Array)
a = [5, 6, "7", "어쩌구", false]
console.log(a[3]); // 어쩌구
console.log(a[0]); // 5
console.log(typeof a[2]); // string
console.log(a.length); // 5
console.log(a[a.length - 1]); // false

// 조건문 (if)
var a = "12";
if (typeof a === "number") {
    console.log("딸기 아이스크림 주세요!");
}
else if (typeof a === "string") { // "12"는 문자열의 데이터 타입을 가지므로 "초코 아이스크림 주세요!"를 출력.
    console.log("초코 아이스크림 주세요!");
}
else {
    console.log("아이스크림 안 주나요 ㅠ");
}



/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

my = {name: "이은서", year: 99, home: "운정", city: "산본"}
say = [" ", "입니다", "저는", ".", "제", "있지만", "있습니다"]
word = ["좋겠습니다", "건강한", "다들"]

var ment1 = "안녕하세요 " + say[2] + say[0] + my.name + say[1] + say[3];
var ment2 = say[4] + " 나이는 " + my.year + " 빠른년생" + say[1] + say[3];
var ment3 = say[2] + say[0] + my.home + "신도시에 살고 " + say[5] + " 현재는 " + my.city + "에서 자취하고 " + say[6] + say[3];
var ment4 = "언제가 될지는 모르겠지만 " + word[2] + say[0] + word[1] + " 모습으로 만날 수 있으면 " + word[0] + say[3];

if (typeof my === "object") {
    // console.log("안녕하세요 " + say[2] + say[0] + my.name + say[1] + " 나이는 " + my.year + " 빠른년생" + say[1]);
    console.log(ment1 + "\n" + ment2 + "\n" + ment3 + "\n" + ment4 + "\n" + "뿅");
}
else {
    console.log("하하 이게 실행될 리는 없다!");
}

/*
안녕하세요 저는 이은서입니다.
제 나이는 99 빠른년생입니다.
저는 운정신도시에 살고 있지만 현재는 산본에서 자취하고 있습니다.
언제가 될지는 모르겠지만 다들 건강한 모습으로 만날 수 있으면 좋겠습니다.
뿅
*/
