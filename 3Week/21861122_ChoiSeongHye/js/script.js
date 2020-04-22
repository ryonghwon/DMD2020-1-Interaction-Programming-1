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
 var b = a + 2; // 29 + 2 = 31
 // console.log(b); // 31 출력
 var c = a % 9; // 29 % 9 = 2
 // console.log(c); // 2 출력
 if (b % c == 1) // 31 % 2 = 1
 {
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
 var user = {}; //
 user = {
    "name" : "최성혜",
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D"
 }
if (typeof user["job"] === "string")
{
    console.log(user["greeting"]); // "job"의 값의 데이터 타입은 문자이기 때문에 "greeting"의 값인 "안녕하세요"가 출력.
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

var num1 = 10;
var string1 = "10"; // string 타입은 " " 사이에 입력
console.log(num1 + string1); // a는 숫자 10, b는 문자 "10"이라 더해도 20이 되지 않고 1010 출력
console.log(num1 + 10); // 20

console.log(num1 * 3); // 문자 "10" * 3 = 30
console.log(string1 / 2); // 5
console.log("Hi" * 3); // HiHiHi가 출력 될 줄 알았지만 수식이 성립되지 않은 상태인 NaN 출력

num1 = 20; // 변수  num1 재활용
console.log(num1 / 10); // 20 / 10 = 2
console.log(num1 % 6); // 20 % 6 = 2
console.log(((num1 % 6) - 1) * 5); // 5

console.log(num1 == "20"); // 동등연산자 true
console.log(num1 === "20"); // 일치연산자 false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(0 === -0); // false로 예상 했으나 true 출력
console.log(NaN === NaN); // false
console.log(NaN == NaN); // true로 예상 했으나 false 출력

var num2 = 5;
console.log(num2 == 5); // true
console.log(num2 === 5); // true
console.log(num1 < num2); // false
console.log(num1 > num2); // true
console.log(num1 <= num2); // false
console.log(num1 >= num2); // true
console.log("5" >= num2); // true
console.log(num2 != 5); // false
console.log(num2 != "5") // false
console.log(num2 !== "5") // true

var c = {};
c = {
    "year" : 2020,
    "month" : "April",
    "date" : "19th",
    "day" : "Sunday",
    "time" : 2302
}

console.log(c);
console.log(typeof c["time"]); // number
console.log(c["year"] == 2020); // true
console.log(c["year"] + c["time"]); // 4322

var d = "학번";
var e = [];
e = ["K", "A", "Y", "W", "O", "N", 18, d];
console.log(e);
console.log(e.length); // 8
console.log(e.length - 1); // 7
console.log(e[6] + " " + e[7]); // 18 학번

if (c["month"] === "April")
{
    console.log("일치합니다."); // 출력 
}

if (e[6] <= 17)
{
    console.log("18 > 17"); // 출력 X
}
else 
{
    console.log("18은 17보다 큽니다."); // 출력 
}

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개. 

var int = {};
int = {
	"stu" : 18,
	"dent" : "학번",
	"name" : "최성혜",
	"age" : "살",
	"eng" : "영어"
};
var major = [];
var dream = [];
var take = [];
major = ["계원예술대학교", "건축디자인과", "디지털미디어디자인과", "전공", "과제"];
dream = ["외국", "일","꿈"];
take = ["학년", "휴학", "복학"];
var eng = "영어";
var goal = {};
goal = {
	"weak" : "부족한",
	"learn" : "배워",
	"self": "스스로",
	"imp" : "발전"
};

var introduce1 = "안녕하세요. 저는 " + int["stu"] + int["dent"] + " " + int["name"] + "입니다. \n";
var introduce2 = 97 + "년생 " + 24 + int["age"] + "이며 " + 21 + int["age"] + "때 " + major[0] + " " + major[1] + "를 다니다 관두고 오고싶었던 " + major[2] + "에 오게 되었습니다. \n" ;
var introduce3 = "먼 훗날 "+ dream[0] + "에서 " + dream[1] + "을 하는게 " + dream[2] + "이기 때문에 " + 1 + take[0] + "을 마친 후 작년에 " + take[1] + "을 하고 " + eng + "공부를 했습니다. \n";
var introduce4 = "사실 " + take[1] + "을 하는 동안 " + major[3] + "지식을 많이 잊은것 같아 " + take[2] + "하기가 무서웠는데, \n";
var introduce5 = "막상 " + take[2] + "하고 " + major[4] + "를 하다 보니 잊고 있던 " + major[3] + " 지식들이 새록새록 떠올랐습니다.\n";
var introduce6 = goal["weak"] + "점이 너무나도 많지만 앞으로 " + goal["learn"] + "나가며 " + goal["self"] + "를 " + goal["imp"] + "시키고 싶습니다.";
 
console.log(introduce1 + introduce2 + introduce3 + introduce4 + introduce5 + introduce6);

var bye = "잘 부탁 드립니다!"
if (bye.length === 10);
{
	console.log(bye);
}


/*
안녕하세요 저는 18학번 최성혜입니다.
97년생 24살이며 21살때 계원예술대학교의 건축디자인과를 다니다 관두고
오고싶었던 디지털미디어디자인과에 오게되었습니다.
먼 훗날 외국에서 일을 하는게 꿈이기 때문에 1학년을 마친 후 작년에 휴학을 하고 영어 공부를 했습니다. 
사실 휴학을 하는 동안 전공지식을 많이 잊은것 같아 복학 하기가 무서웠는데,
막상 복학하고 과제를 하다 보니 잊고 있던 전공 지식들이 새록새록 떠올랐습니다.
부족한 점이 너무나도 많지만 앞으로 배워나가며 스스로를 발전 시키고 싶습니다.
잘 부탁 드립니다!
*/
