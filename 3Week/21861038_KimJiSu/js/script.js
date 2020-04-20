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
// 1. 변수 a를 선언하고 29 할당
var a = 29;

// 2. 변수 b를 선언하고 a + 2를 b에 대입
var b;
b = a + 2;
// 확인용 console.log(b = a + 2); -> 31

// 3. 변수 c를 선언하고 a % 3을 c에 대입
var c;
c = a % 3;
// 확인용 console.log(c = a % 3); -> 2

// 4. b는 31, c는 2 이므로 나머지 연산을 하면 1이 나오며 조건절과 같음
if( b % c == 1)
{
    console.log('일치합니다.');
}


/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 
문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)

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
// 1. 변수 user를 선언하고 {}(객체) 할당 
var user = {};

// 2. 위 원소 적용
user = {
    "name" : "김지수",
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D"
}

// 3. 
if(typeof user["job"] === "string")
{
    console.log(user["greeting"]);
}
else
{
    console.log(user["name"]);
}

/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

console.log(10); // 10
console.log(10.5); // 10.5
console.log(10 + 10.5); // 20.5 정수와 실수 계산 가능

var num1 = 10; // 변수 num1에 숫자 10 대입
var str1 = "Hello"; // 변수 str1에 문자 "Hi" 대입, 문자(string)는 무조건 "  "(따옴표) 안에 써야함

console.log(num1); // 10
console.log(num1 + 2); // 10 + 2 -> 12
console.log(num1 - 2); // 10 - 2 -> 8
console.log(num1 * 2); // 10 * 2 -> 20
console.log(num1 / 2); // 10 / 2 -> 5
console.log(num1 % 2); // 10 % 2 -> 0, 숫자는 당연히 산술 연산 가능
console.log(str1); // Hello
console.log(num1 + str1); // 10Hello, 숫자와 문자는 더하기 산술 연산 가능
console.log(str1 * 2) // HelloHello 인줄 알았으나 NaN으로 수식이 성립되지 않음, 위의 것을 보면 더하기만 가능한 듯
console.log(str1 + "안녕하세요"); // Hello안녕하세요, 문자 값이 있는 변수와 문자는 연산 가능

console.log("\"안녕하세요~!\""); // 안녕하세요~!, \(escape)로 특수문자 가능
console.log("안녕\n하세요") // 안녕 \n(줄바꿈) 하세요

console.log(num1 == "10"); // true 
console.log(num1 === "10"); // false
console.log(num1 != "10") // false
console.log(num1 !== "10") // true












/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.