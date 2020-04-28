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
var c = a % 9;
if (b % c == 1)
{
    console.log("일치합니다.")
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
    name : "백혜린",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
};

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

// Number 숫자
console.log(2); //2
console.log(2.2); //2.2
console.log(2.2 + 10); //12.2

// String 문자
console.log("안녕하세요"); //안녕하세요
console.log("안녕하세요2'"); //안녕하세요2'
console.log("\"안녕하세요\""); //"안녕하세요"

// String 연산 +
console.log("Hello" + "world"); //Helloworld
console.log("Hello" + " world"); //Hello world
console.log("Hello" + " " + "world" + "~" + "!!"); //Hello word~!!

// \n 정규식 줄바꿈
console.log("안녕하세요.\n반갑습니다.\n저는 백혜린입니다.");

// 문자열의 길이 .length
console.log("안녕하세요".length); //5

// 문자의 순서 .indexOf (0부터 시작)
console.log("안녕하세요".indexOf("요")); //4

// variable 변수
var a = 1;
var b = 5;
console.log(a + b); //6
a = 100; //변수를 재활용
console.log(a + b); //105
a = a + 200; //300
console.log(a + b); //305
a += 300; //600
console.log(a + b); //605
a -= 400; //200
console.log(a + b); //205

var a = "Hello";
var b = "World";
console.log(a + b); //"HelloWorld"
a += " "; //"Hello "
console.log(a + b); //"Hello World"

var a = 20;
var b = 5;
var sum = ((a + b) / b - b) * b;
console.log("결과값 : " + sum); //결과값 : 5

// 산술 연산자
console.log(100 + 260); //360
console.log (300 - 150); //150
console.log(5 * 5); //25
console.log(26 / 2); //13
console.log(25 % 4); //1
console.log(4 % 13); //4

// 대입 연산자
var a = 0;
console.log(a); //0

// 비교 연산자
// == 동등 연산자
var a = 2;
var b = 2;
console.log(a == b); //true

// > 초과 연산자
a = 2;
b = 0;
console.log(a > b); //true

// < 미만 연산자
a = 5;
b = 2;
console.log(a < b); //false

// >= 이상 연산자
a = 1;
b = 1;
console.log(a >= b); //true

// <= 이하 연산자
a = 2;
b = 1;
console.log(a <= b); //false

// 문자열과 문자열을 비교
var a = "Hello";
var b = "Wolrd";
console.log(a == b); //false

a = "Wolrd";
console.log(a == b); //true 

// 동등연산자 ==
a = 1;
b = "1";
console.log(a == b); //true

// 일치 연산자 === 엄격하게 데이터 타입까지 구분해서 비교
console.log(a === b); //false
console.log(true == 1); //true
console.log(true === 1); //false

// 부등(부정)연산자 !=, !==
var a = 2;
var b = 2;
console.log(a != b); //false
console.log(a == b); //true

var a = "a";
var b = "a";
console.log(a != b); //flase

a = 1;
b = "2";
console.log(a != b); //true

// Data Type 데이터 타입
/*  
    Number 숫자.
    String 문자열.
    Boolean 참 / 거짓.
    undefinde 값이 정의되지 않은 상태.
    null 값은 적용하지만 비어있는 상태.
    Object 객체 - [], {} ...
    Function 함수 - 기능을 만드는 박스.
    NaN 수식이 성립되지 않은 상태. 
*/
// 데이터의 타입 찾는 방법 typeof
console.log(typeof 100); //numbr
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean

// Object 객체
var _obj = {}; //새로운 객체를 생성
_obj = {
     key1 : "value1",
     key2 : "value2",
     key3 : 100
}
console.log(_obj);
console.log(_obj.key1); //value1
console.log(_obj["key1"]); //value1 (위와 동일)
console.log(typeof _obj.key2); //string
console.log(typeof _obj.key3); //number


// Array 배열 객체
var _arr = []; //새로운 배열 생성
_arr = [1, 2, "3", "안녕하세요", null, true];
console.log(_arr[1]); //2
console.log(_arr[3]); //안녕하세요
console.log(_arr.length) //6
console.log(_arr[_arr.length - 1]); //true (배열 객체의 마지막에 해당하는 값)

// if 조건문
var a = 5;
var b = 5;
var c;
console.log(typeof c); //undefined
if(typeof c === "undefined")
{
     c = a * b;
}
else
{
     c = a + b;
}
console.log(c); //25

c = 120;
console.log(typeof c); //number
if(typeof c === "undefined")
{
     c = a * b;
}
else
{
     c = a + b;
}
console.log(c); //10


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var _b = {};
_b = {
    name : "백혜린",
    school : "계원예술대학교",
    major : "디지털미디어디자인과",
    grade : "2학년",
    age : 23,
};

_fav = { 
    1 : "음악 감상, 그림",
    2 : "영화, 공연, 전시" 
};

var txt1 = "안녕하세요! " + "제 이름은 " + (_b.name) + "이고, " + (_b.age) + "살입니다.\n";
var txt2 = "현재 " + (_b.school) + " " + (_b.major) + " " + (_b.grade) + "에 재학중입니다. \n";
var txt3 = "취미는 " + _fav[1] + " 등 여러가지가 있지만 그 중에서도 혼자 " + _fav[2] + "를 보러 다니는 것을 가장 좋아합니다. \n";
var txt4 = "아직은 많이 부족하지만 열심히 배워 좋은 결과물을 만들어 낼 수 있도록 노력하겠습니다. \n" ;
var txt5 = "감사합니다:)";

if (typeof txt5 == "string")
{
    console.log(txt1 + txt2 + txt3 + txt4 + txt5);
}
else
{
    console.log("다시");
}

/* 
안녕하세요! 제 이름은 백혜린이고, 23살입니다.
현재 계원예술대학교 디지털미디어디자인과 2학년에 재학중입니다.
취미는 음악감상, 그림 등 여러가지가 있지만 그 중에서도 혼자 영화, 공연, 전시를 보러 다니는 것을 가장 좋아합니다.
아직은 많이 부족하지만 열심히 배워 좋은 결과물을 만들어 낼 수 있도록 노력하겠습니다.
감사합니다:)
*/