//Alt + Z : Toggle Word Wrap
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
//1. 변수(a)를 선언, 29 할당
var a = 29;

//2. 변수(b) 하나 더 선언, 변수(a)와 덧셈 대입하여 31 되도록 함
var b = 2;
console.log("결과값 : " + (a + b));

//3. 변수(c) 하나 더 선언, 나머지 연산 대입(-, *, /, %)을 이용하여 2 되도록 함
var c = 56
var sum = (a * b) - c;
console.log("결과값 : " + sum);

//4. 만약 2에서 생성한 변수(b)를 3에서 선언한 변수(c)로 나누었을 때 나머지가 1인 경우, "일치합니다."라는 문자열 console 에 출력
if (b % c === 1){
    // 조건이 성립할 때 "일치합니다" console 출력
    console.log("일치합니다.");
}else{
    // 조건이 성립하지 않을 때 "불일치합니다" console 출력
    console.log("불일치합니다.");
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
//1. 'user' 변수 선언, 새로운 객체 생성
var user = {};
//2.
user = {
    name : "최예빈",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
//3. 'user' 객체 "job" key의 값을 확인하여 데이터 타입이 문자라면
console.log(typeof user.job);
if (typeof user.job === "string"){
    // "greeting" key의 값을 console에 출력
    console.log(user.greeting);
}

/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
// 숫자(Number)
console.log(1); //1

// 문자(String)
console.log("HelloWorld"); //HelloWorld

// 변수(variable)
var variable = "value";
console.log(variable); // "value"

// 연산자(산술, 대입, 비교, 동등, 일치, 부정)
//산술
console.log("Hello" + " " + "World" + "~!"); //Hello World~!

// 대입 + 산술
var a = 300, b = 20, c = 10, d = 30, e = 40; // 끝나는 부분에만 세미콜론
var sum = (((a + b) / c) - d) * e;
console.log("결과값 : " + sum); // (((300 + 20) / 10) - 30) * 40

// 비교
a = 2;
b = 2;
console.log(a >= b); // true

// 동등
var a = "Hello";
var b = "World";
console.log(a == b); // "Hello" == "World" - false

// 일치
a = 1;
b = "1";
console.log(a === b); // 1 == "1" - false

// 부정
a = 2;
b = "2";
console.log(a != b); //2 != "2" - false
console.log(a !== b); //2 != "2" - true

// 데이터 타입(Data Type)
// Number 숫자 ***
// String 문자열 ***
// Boolean 참 / 거짓 ***
// undefined 값이 정의되지 않은 상태
// null 값은 적용하지만 비어 있는 상태
// Object 객체 - [], {} ...
// Function 함수 - 기능을 만드는 박스
// NaN 수식이 성립되지 않은 상태

// typeof - 데이터 타입 찾는 방법
console.log(typeof 100); //number
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean

// 오브젝트(Object)
var _obj = {}; //새로운 객체를 생성
_obj = {
    key1 : "value1",
    key2 : "value2",
    "key3" : 300
}
console.log(_obj);
console.log(_obj.key1); // 각 항목의 값을 찾기
console.log(_obj["key1"]); // 위와 동일 value1
console.log(typeof _obj.key2); //string
console.log(typeof _obj.key3); //number

// 배열(Array)
var _arr = []; //새로운 배열 생성
_arr = [1, 2, "3", "안녕하세요", null, true];
console.log(_arr);
// 0 1 2 3 4 5 (순서는 0부터 시작)
// 색인이 없고 순서로 찾을 수 있다
console.log(_arr[0]); //1
console.log(_arr[4]); //null
console.log(_arr.length) //전체 담기 데이터의 길이(개수); 6
console.log(_arr[_arr.length - 1]); //배열 객체의 마지막에 해당하는 값

// 조건문(if)
var a = 10;
var b = 5;
var c;
console.log(typeof c); //undefined
if(typeof c === "undefined") { //true
    c = a * b;
}else{
    c = a * b;
}
console.log(c);

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var 
    obj = 
    {
    Hello : "안녕하세요.",
    MBTI : "ISTJ",
    Grade : "2학년",
    Class : "D반",
    Age : "스물한 살",
    Major : "유니티와 HTML"
    };
    
a = (obj.Hello) + " " + (obj.Grade) + " " + (obj.Class) + " " + "최예빈입니다.";
b = (1000 + 1000) + "년 " + (3 * 3) + "월 " + (20-3) + "일에 태어나 " + (obj.Age) + "입니다.";
c = " FPS 온라인 게임과 넷플릭스를 보는 것이 제 취미입니다.";
d = ["데드 바이 데이라이트", "레인보우 식스 시즈", "오버워치", "스타듀 밸리"];
e = "등의 온라인 게임들을 좋아합니다.";
f = "그중에서도 " + d[0] + "를 가장 좋아합니다."
g = "제 MBTI는 " + (obj.MBTI) +"입니다. " + "\'청렴결백한 논리주의자\' 유형이라고 합니다.";
h = "아직 정확한 진로는 모르겠지만, " + (obj.Major) + "이 재미있어서 프로그래밍 반에 오게 되었습니다."
i = "JavaScript를 이 주 조금 넘게 접했지만 재미있어서 오길 잘했다고 생각했습니다."
j = "얼른 상황이 나아져서 교수님과 학교 강의실에서 배우고 싶습니다."
k = "이번 학기 잘 부탁드립니다, 교수님!"
    
if(typeof c === "string") { //true
    console.log(a, b, c, d, e, f, g, h, i, j, k);
}

/*
안녕하세요. 2학년 D반 최예빈입니다.
2000년 9월 17일에 태어나 스물한 살입니다. 
FPS 온라인 게임과 넷플릭스를 보는 것이 제 취미입니다.
["데드 바이 데이라이트", "레인보우 식스 시즈", "오버워치", "스타듀 밸리"]
등의 온라인 게임들을 좋아합니다.
그중에서도 데드 바이 데이라이트를 가장 좋아합니다.
제 MBTI는 ISTJ입니다. '청렴결백한 논리주의자' 유형이라고 합니다.
아직 정확한 진로는 모르겠지만, 유니티와 HTML이 재미있어서 프로그래밍 반에 오게 되었습니다.
JavaScript를 이 주 조금 넘게 접했지만 재미있어서 오길 잘했다고 생각했습니다.
얼른 상황이 나아져서 교수님과 학교 강의실에서 배우고 싶습니다.
이번 학기 잘 부탁드립니다, 교수님!
*/

