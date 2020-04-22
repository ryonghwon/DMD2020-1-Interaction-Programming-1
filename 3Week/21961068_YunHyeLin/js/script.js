console.log("외부 JavaScript 로드");

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
if (b % c == 1)
{
    console.log("일치합니다.");
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
var user = {};
user = {
    name : "윤혜린",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
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
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정),
   데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

// 1. 숫자(Number)
var n = 2;
console.log(n); // 2

// 2. 문자(String)
var s = "배고파"
console.log(s); // 배고파

// 3. 변수(variable)
var v1 = "닭갈비"
var v2 =  2
var v3 = " 인분"
var final = v1 + v2 + v3;
console.log(final); // 닭갈비 2인분

// 4. 연산자 (Operator)

var a = 2;
var b = 3;
var c = 4;
console.log(a + b - c); // 2 + 3 - 4 = 1
console.log(b * c / a % b); // 3 * 4 / 2 % 3 = 0 
console.log(a > b); // 2 > 3 : false
console.log(a <= b); // 2 <= 3 : true
console.log(a === b); // false
console.log(b != c); // true

// 5. 데이터 타입(Data Type)

console.log(typeof "문자열 타입"); // string
console.log(typeof 2); // number
console.log(typeof true); // boolean

// 6. 오브젝트(Object)

var obj = {};
obj = {
    where : "계원예대 닭갈비 맛집은",
    loc : "닭갈비한마당 추천합니다.",
    com1 : "진짜 맛있어요",
    com2 : "꼭 드셔보세요"    //   배열(Array)
}

//  7. 배열(Array)

var arr = ["닭갈비", 2, " 주세요.", true, "인분"];
console.log(arr[0] + arr[1] + arr[4] + arr[2]); // 닭갈비 2인분 주세요.

// 8. 조건문(if)
if (typeof arr.where == "string")
{
    console.log(obj.where, loc); // 계원예대 닭갈비 맛집은 닭갈비한마당 추천합니다.
}



/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
   데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var info = {};
info = {
    name: "윤혜린",
    year: "1999년생",
    age: "22살",
    hometown: "천안 사람",
    hate : "호두과자",
    like1 : "노래와 ",
    like2 : "유튜브",
    like3 : "유튜브 프리미엄"
}

var word1 = ["안녕하세요 ", "제 이름은 ", "저의", "좋아하지 않습니다", " 사실 ", " 광명"];
var word2 = ["는", "으로", "이", "을", "쓰고", "이지만", "!"];
var word3 = ["모두 ", "인터랙션 프로그래밍 수업", "교수님과 ", "학우님들 ", " 파이팅"];;

var intro1 = word1[0] + word1[1] + info.name + "입니다.\n";
var intro2 = "나이는 " + info.year + word2[1] + " 올해 " + info.age + "이 되었습니다.\n";
var intro3 = "저는 " + info.hometown + word2[5] + word1[4] + info.hate + "를 그렇게 좋아하지 않습니다.\n";
var intro4 = "저는 " + info.like1 + info.like2 + "를 보는 걸 좋아해 " + info.like3 + "을 구독하고 있습니다.\n";
var intro5 = word3[0] + info.like3 + "을 구독하고" + word1[5] + " 찾으시길 바랍니다.\n";
var intro6 = "학교에서 다같이 강의실에서 " + word3[1] + "을 듣는 날이 왔으면 좋겠습니다."; 
var intro7 = word3[2, 3, 0, 4] + "!";

var sum = intro1 + intro2 + intro3 + intro4 + intro5 + intro6 + intro7

if (typeof name != "number"){
    console.log(sum);
}
else {
    console.log("다시 확인해봐 나자신...")
}

/* 
안녕하세요 제 이름은 윤혜린입니다. 
나이는 1999년 생으로 올해 22살이 되었습니다.
저는 천안 사람이지만, 사실 호두과자는 그렇게 좋아하지 않습니다.
저는 노래와 유튜브를 보는 것을 좋아해서 유튜브 프리미엄을 구독하고 있습니다.
모두 유튜브 프리미엄을 구독하고 광명 찾으시길 바랍니다.
학교에서 다같이 강의실에서 인터랙션 프로그래밍 수업을 듣는 날이 왔으면 좋겠습니다.
교수님과 학우분들 모두 파이팅 ! 
*/