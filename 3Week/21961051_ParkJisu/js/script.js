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
var c = a % 3;
if(b % c == 1){
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
var user = {};
user = {
    name : "박지수",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D"
};
if(typeof user.job === "string"){
    console.log(user.greeting);
}
else{
    console.log(user.name);
}


/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

// Number - 숫자.
console.log(22); // 22
console.log(2.2); // 2.2
console.log(22 + 2.2) // 24.2

// String - 문자
console.log("안녕하세용");
console.log("\"안녕하세요\""); // console.log("\! \@ \%") //escape
console.log("안녕하세요\n반갑습니다.\n저는 박지수입니다."); // \n 정규식줄바꿈
console.log("안녕하세요".length); // .length 문자열길이 - 5 출력
console.log("안녕하세요".indexOf("녕")); // .indexOf 해당문자순서 - 1 출력 
// order - 순서는 0부터 시작.

// 산술연산자
// +
console.log(10 + 10); //20
// -
console.log(20 - 10); //10
// *
console.log(11 * 2); //22
// /
console.log(6 / 3); //2
// %
console.log(7 % 3); //1

//대입연산자
// =
var a = 10;
var b = 20;
console.log(a);
console.log(b);

// 비교연산자
var c = 12;
var d = 20;
// <
console.log(c < d); // true
// >
console.log(c > d); // false
// <=
console.log(c <= d); // true
// >=
console.log(d >= c); // true

// 동등연산자
var e = "안녕";
var f = "하세요";
console.log(e == f); // false
var f = "안녕";
console.log(e == f); // true
var g = 1;
var h = "1";
console.log(g == h); // true - 동등 연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식.

// 일치연산자 - 엄격하게 데이터타입까지 비교
console.log(g === h); // 1 === "1" - false
console.log(true == 1); //true
console.log(true === 1); //false

// 부정연산자 - 동등연산자와 반대
// !=, !==
var i = 10;
var j = 10;
console.log(i != j); // 10 !== 10 - false
console.log(i == j); // 10 == 10 - true
var j ="10";
console.log(i !== j); // 10 != "10" - true

// Data Type - 데이터타입
// Number 숫자. ★★★
// String 문자열. ★★★
// Boolean 참 / 거짓. ★★★
// Undefined 값이 정의되지 않은 상태.
// Null 값은 적용하지만 비어있는 상태.
// Object 객체 - [], {} ...
// function 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

// typeof - 데이터의 타입 찾는 방법.
console.log(typeof 100); //number
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean

// Object - 객체
var _obj = {}; //새로운 객체 생성.
_obj = {
    "key1" : "value1",
    "key2" : "value2",
    "key3" : 200
}
console.log(_obj);
console.log(_obj.key1); //각 항목의 값을 찾기. value1
console.log(_obj["key1"]) // 위와 동일. value1
console.log(typeof _obj.key2); //string 
console.log(typeof _obj.key3); //number

// Array - 배열 객체
var _arr = []; //새로운 배열 생성
_arr = [1, 2, "3", "안녕하세요", null, true, false];
console.log(_arr);
// 0 1 2 3 4 5
// 색인이 없고 순서로 찾을 수 있다.
console.log(_arr[0]); //1
console.log(_arr[4]); //null
console.log(_arr.length) //전체 담긴 데이터의 길이 (개수)
console.log(_arr[_arr.length - 1]); //배열 객체의 마지막에 해당하는 값.

// if - 조건문
// 비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자. - 조건을 확인하기 위해서 비교.
var z = 10;
var y = 2;
var x;
console.log(typeof x); //undefined.
if(typeof x === "undefined") { //true
    x = z * y;
}else{
    x = z + y;
}
console.log(x);

x = 20;
console.log(typeof x); //number
if(typeof x === "undefined"){
    x = z * y;
}else{ //false.
    x = z + y;
}
console.log(x);

/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var me = {
    greeting : "안녕하세요.",
    name : "박지수",
    birth : "1999.09.29",
    age : "22",
    major : "디지털미디어디자인",
    grade : "2학년"
};
var hobby = "영화보기, 음악듣기, 루미큐브";
var food = "햄버거, 매운 음식, 버터프레첼";
var mbti = "istp";
var mbti1 = "\'만능 재주꾼\'";
var pers = "무미건조";
var pers2 = "낯";
var pers3 = "말도 많고 장난도 잘 치는 편입니다."

var one = (me.greeting) + "저는 " + (me.name) + " 입니다.\n" + (me.birth) + "에 태어나 올해로 " + (me.age) + "살 입니다.\n";
var two = "현재 " + (me.major) + "에 재학중이며 " + (me.grade) + "입니다.\n";
var three = "평소에 쉴 때 " + (hobby) + "를 주로 하며 좋아하는 음식은 " + (food) + "입니다.\n";
var four = "제 mbti는 " + mbti + "이고 저는 잘 모르겠지만 " + mbti1 + "유형입니다.\n";
var five = "어찌보면 " + pers + "하고 " + pers2 + "도 많이 가리지만, 친해지면 " + pers3 ;
var six = "남은 학기동안 잘 부탁드리고 열심히 하겠습니다!"

console.log(one + two + three + four + five + six);





