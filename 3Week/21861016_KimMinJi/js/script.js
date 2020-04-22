console.log("외부 Javascript 로드");


/*
문제 풀이
*/


/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// 변수를 선언하고 숫자 '29'를 할당한다.
var x = 29;

// 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성한다.
var y = x + 2;

// 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성한다.
var z = x % 9;

// 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성한다.
if (y % z == 1)
{  //true.
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
// 새로운 객체 생성한다.
var user = {};

// 객체의 각 원소와 값을 적용한다.
user= {
    "name" : "김민지",
    "greeting" : "안녕하세요",
    "job" : "학생" ,
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D"
}

// 만약(if) 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting" key의 값을 console에 출력, 문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성한다.
if (typeof user.job === "string")
{
    console.log(user.greeting) // user.greeting과 user["greeting"]은 동일하다.
}
else // else는 if 조건문에 해당하지 않을때 실행된다.
{
    console.log(user.name) // 괄호 안의 user.name과 user["name"]은 동일하다.
}




/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/


// 1. 숫자(Number) 
console.log(100); // 숫자는 그대로 출력되어 100이 나올 것
console.log(1000); // 1000
console.log(10000); // 10000


// 2. 문자(String) : "", '' 사이에 작성
console.log("안녕하세요."); // 안녕하세요.
console.log("반갑습니다."); // 반갑습니다.
console.log("오랜만입니다."); // 오랜만입니다.
console.log("\"날씨는 어떤가요?\""); // Escape, "날씨는 어떤가요?"
console.log("오늘은\n날씨가\n맑습니다."); // 문자열 줄바꿈을 할 때, \n을 붙인다. 
/*
오늘은
날씨가
맑습니다.
*/

// 2-1. Escape
console.log("\"날씨는 어떤가요?\""); // Escape, "날씨는 어떤가요?"

// 2-2. 문자열 바꿈
// 문자열 줄바꿈을 할 때, \n을 붙인다. 
console.log("오늘은\n날씨가\n맑습니다.");
/*
오늘은
날씨가
맑습니다.
*/

// 2-3. 문자열 연산
console.log("귀여운" + "고양이"); // 귀여운고양이
console.log("귀여운" + " 고양이" + "~!"); // 귀여운 고양이~!
console.log(100 + 1); // 숫자가 합산되어 출력, 101
console.log(1 + "1"); // 문자열 그대로 더해짐, 11
console.log(1 + parseInt("1")); // 형변환으로 숫자 1로 인식, 2
console.log("1" + "1"); //11

// 2-4. 문자열 길이
console.log("cute cat".length); // 8

// 2-5. 문자열 순번
console.log("melon".indexOf("o")); // 3


// 3. 변수(variable)
// 변수는 한번에 선언이 가능하다.
var a = 1, b = 5, c = 10;
console.log(a); // 1
console.log(b); // 5
console.log(c); // 10

// 3-1. 변수의 응용
// 5와 10을 더하고, 5로 나누고, 5를 더한 후, 5를 곱한다.
var sum = (((b + c) / b) + b) * b;
console.log(sum); // 40


// 4. 연산자
// 4-1. 산술 연산자 : +, -, *, /, %
console.log(5 + 7); // 12
console.log(10 - 6); // 4 
console.log(4 * 12); // 48
console.log(45 / 9); // 5
console.log(81 % 2); // 1

// 4-2. 대입 연산자 : =
var d = 2;
d = 5
console.log(d); // 5

// 4-3. 비교 연산자 : <, >, <=, >=
var s = 15;
console.log(s < 20); // true
console.log(s > 30); // false
console.log(s <= 45); // true
console.log(s >= 19); // false

// 4-4. 동등 연산자 : ==
var v = 6;
var w = 6;
console.log(v == w); // true
v = "cat";
w = "dog";
console.log(v == w); //false

// 4-5. 일치 연산자 : 정확히 일치해야 true가 나온다, ===
var p = 8;
console.log(p === 8); // true
console.log(p === "8"); //false

// 4-6. 부정 연산자 : 일치하면 부정하여 false가 나온다, !=
var q = 9
console.log(q != 9); // false


// 5. 데이터 타입(Data Type)
/*
Number 숫자. ***
String 문자열. ***
Boolean 참 / 거짓. ***
undefined 값이 정의되지 않은 상태.
null 값은 적용하지만 비어있는 상태.
Object 객체 - [], {} ...
function 함수. 기능을 만드는 박스.
NaN 수식이 성립되지 않은 상태.
*/
console.log(typeof 419); //number
console.log(typeof "좋은 하루"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean


// 6. 오브젝트(Object)
var i = {}; //새로운 객체를 생성.
i = {
    name : "김민지",
    like : "cat",
    want : "money",
    age : 22
}
console.log(i); // 나열되어 나옴, {name: "김민지", like: "cat", want: "money", age: 22}
console.log(i.like); // 각 항목의 값을 찾기. cat
console.log(i["like"]); // 위와 동일. cat
console.log(typeof i.want); // string
console.log(typeof i.age); // number


// 7. 배열(Array)
var what = []; //새로운 배열 생성.
what = [1, 2, "3", "과제중", null, true];
console.log(what); // [1, 2, "3", "과제중", null, true]
// 순서: 0 1 2 3 4 5
// 색인이 없고 순서로 찾을 수 있다.
console.log(what[3]); // 과제중
console.log(what[5]); // true
console.log(what.length); // 전체 담기 데이터의 길이(개수), 6
console.log(what[what.length -1]); // 배열 객체의 마지막에 해당하는 값, true


// 8. 조건문(if)
var r = 9;
var t = 10;

// r은 t보다 작다. 
if (r < t)
{
    console.log("더 작다") // 더 작다 출력 o
}
else if (r > t)
{
    console.log("더 크다") // 출력 x
}
else
{
    console.log("같다") // 출력 x
}




/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/

var info = {};
info = {
    "name": "김민지",
    "age" : 22,
    "birthday" : "4월 19일",
    "job" : "학생",
    "univ" : "계원예술대학교",
    "major" : "디지털 미디어 디자인과",
    "grade" : 2
};

var like = [];
like = ["독서", "게임", "여유", "낮잠", "하늘색", "바다"];
var ani = [];
ani = ["고양이", "다람쥐", "토끼"];
var sns = [];
sns = ["트위터", "페이스북", "인스타그램", "카카오톡"];
var nell = [];
nell = ["기억을 걷는 시간", "멀어지다", "백색왜성"];

var me = {};
var me = {
    "goal" : "건강하기",
    "goal1" : "프로그래밍",
    "goal2" : "공부"
}

var _mj = "안녕하세요. 저는 " + info["name"] + "입니다.\n";
var _mj1 = "저의 생일은 " + info["birthday"] + "이고, 나이는 " + info["age"] + "살 입니다.\n";
var _mj2 = "저는 " + info["univ"] + " " + info["job"] + "이며, " + info["major"] + "를 다니고 있는 " + info["grade"] + "학년입니다.\n";
var _mj3 = "제가 좋아하는 것은 " + like[0] + "나 " + like[1] + "을 하면서 " + like[2] + "를 가지거나 " + like[4] + "인 " + like[5] + "를 조용히 바라보는 것입니다.\n";
var _mj4 = "동물 중에서는 " + ani[0] + ", " +ani[1] + ", " + ani[2] + "를 정말 좋아합니다.\n";
var _mj5 = "sns는 주로 " + sns[3] + "과 " + sns[0] + "를 하며, " + sns[1] + "과 " + sns[2] + "는 잘 사용하지 않는 편 입니다.\n";
var _mj6 = "최근에는 과제를 하면서 넬의 " + nell[0] + ", "+ nell[1] + ", " + nell[2] + "이라는 곡들을 듣습니다.\n"
var _mj7 = "저의 목표는 언제나 " + me["goal"] + "와 " + me["goal1"] + "을 " + me["goal2"] + "해서 잘할 수 있게 되는 것입니다.\n";
var _mj8 = "앞으로 부족한 점이 있어도 " + me["goal2"] + "하며 열심히 하겠습니다."


console.log(_mj + _mj1 + _mj2 + _mj3 + _mj4 + _mj5 + _mj6 + _mj7 + _mj8)


if (2020 > 419)
{
    console.log("감사합니다.");
}


/*
안녕하세요. 저는 김민지입니다.
저의 생일은 4월 19일이고, 나이는 22살 입니다.
저는 계원예술대학교 학생이며, 디지털 미디어 디자인과를 다니고 있는 2학년입니다.
제가 좋아하는 것은 독서나 게임을 하면서 여유를 가지거나 하늘색인 바다를 조용히 바라보는 것입니다.
동물 중에서는 고양이, 다람쥐, 토끼를 정말 좋아합니다.
sns는 주로 카카오톡과 트위터를 하며, 인스타그램과 페이스북은 잘 사용하지 않는 편입니다.
최근에는 과제를 하면서 넬의 기억을 걷는 시간, 멀어지다, 백색왜성이라는 곡들을 듣습니다.
저의 목표는 언제나 건강하기와 프로그래밍을 공부해서 잘할 수 있게 되는 것입니다.
앞으로 부족한 점이 있어도 공부하며 열심히 하겠습니다.
감사합니다.
*/