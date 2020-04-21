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

var a = 29; //변수 a를 선언하고 숫자 '29' 를 할당
var b = a + 2; //변수 b를 선언하고 a와 2를 더해 '31' 이 할당되도록
var c = a % 3; //변수 c를 선언하고 a에 나머지 연산을 사용했을 때 '2'가 할당되도록

if (b % c == 1) { //만약 b를 c로 나누었을 때 나머지가 1이 이라면
    console.log("일치합니다."); //Q1-4. console에 일치합니다. 출력 .
} //나머지가 1이므로 일치합니다. 출력됨.
else { //나머지가 1이 아니라면
    console.log("일치하지 않습니다."); //console에 일치하지 않습니다. 출력 .
} //나머지가 1이므로 출력되지 않음.

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

var user = { //변수 user 선언
    name : "이다영",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
};

if (typeof user.job == "string"){ //만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면
    console.log(user.greeting); //"greeting" key의 값을 console에 출력
} //console에 '안녕하세요'가 출력되었다.
else { //문자가 아니라면 
    console.log(user.name); //"name" key의 값을 console에 출력
}


console.log("-------------연습--------------");
/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

// 1. Number 숫자 _ 정수, 실수
console.log(13); //7
console.log(5.4213); //5.4213

//연산자 + 더하기 - 빼기 * 곱하기 / 나누기 % 나누기 후 몫을 제외한 나머지 값
console.log(1.3 + 2.5); // 3.8
console.log(500 - 25); // 475
console.log(7 * 30); // 210
console.log(28 / 4); //7
console.log(23 % 5); //3 


/* -------------------------------------------- */

// 2. String 문자, 문자열
console.log("Hello World!"); //Hello World!
console.log("너무 너무 졸려요"); //너무 너무 졸려요

//(escape)로 기호 입력 가능하도록 함
console.log("\"기호 입력하기\""); //"기호 입력하기"
console.log('\'작은 쉼표도 가능\''); //'기호 입력하기'
console.log("\! \@ \% \\"); //! @ % \

// \n 정규식 줄바꿈
console.log("오늘은\n비가\n내려서\n파전을\n해먹었습니다.");
/*오늘은
비가
내려서 
파전을
해먹었습니다 */

//string 연산
console.log("바람이" + "분다"); //바람이분다
console.log("바람이" + " 분다"); //바람이 분다
console.log("바람이" + " " + "분다" + " 휭~" + "!"); //바람이 분다 휭~!

//숫자 + 문자 연산
console.log(2 + 1); //3
console.log("2" + "1"); //21
console.log(2 + "1"); //21
//parseInt 문자열을 정수로
console.log(1 + parseInt("1")); //2
console.log(1 + parseInt("100")); //101
console.log(1 + parseInt("100????")); //101

//문자열의 길이,개수를 나타낼 때 - 문자열이 끝난 부분에 .length
console.log("햄치즈토스트는 맛있다".length); //11

//해당 문자의 순서를 나타낼 때. 순서는 0부터 시작함. "이" = 0
console.log("이건 몇번째 단어일까요".indexOf("건")); //1

/* -------------------------------------------- */

//3. Variable 변수

//Data Type - 데이터 타입.
// Number 숫자. ***
// String 문자열. ***
// Boolean 참 / 거짓. ***
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 - {}
// Array 배열객체 - []
// Function 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

var variable; // 선언만 하고 값은 없는 상태 - undefined
console.log(variable); //undefined 출력
variable = "value"; //변수 variable 에 값 "value"(문자열) 대입
console.log(variable); //value 출력

var variable2 = "value2" //선언 + 값 동시 대입
console.log(variable2); //value2 출력

var num1 = 3;
var num2 = 5;
var string1 = "안녕하세요";
var string2 = "반갑습니다!";

var x = 1;
var y = 100;

console.log(x + y); //101
x = 12; //변수 재활용
console.log(x +  y); // 112
x = x + 150; //12 + 150 = 162
console.log(x + y) // 162 + 100 = 262
x += 300; //x = x + 300; 162 + 300 = 462
console.log(x + y); //462 + 100 = 562
x -= 200; //x = x - 200; 462 - 200 = 262
console.log(x + y); //262 + 100 = 362

console.log(string1 + string2); //안녕하세요반갑습니다!
string1 += " "; // "안녕하세요" + " " = "안녕하세요 "
console.log(string1 + string2); //안녕하세요 반갑습니다!

//변수의 응용
// 100에 5을 더한 후, 5로 나누고, 5를 뺀 후, 5를 곱한다.
var t1 = 100
var t2 = 5
var sum = ((t1 + t2) / t2 - t2) * t2;
console.log("결과값 : " + sum); //결과값 : 80

// 30에 9를 빼고, 7로 나누고, 30을 곱하고, 67을 더한다.
var tt1 = 30
var tt2 = 9
var tt3 = 7
var tt4 = 67
var sum = ((tt1 - tt2) / tt3 * tt1) + tt4
console.log("결과값 : " + sum); //결과값 : 157

// typeof - 데이터의 타입 찾는 방법.
console.log(typeof 12); //number
console.log(typeof "반가워요"); //string
console.log(typeof true); //boolean 
console.log(typeof false); //boolean

/* -------------------------------------------- */

// 4. 연산자  
var t = 15 

// 연산자 + - * / %
// 값과 값을 비교하기 위한 연산자.
console.log(t + 25); //40
console.log(t - 10); //5
console.log(t * 5); //75
console.log(t / 3); //5
console.log(t % 2) //1
console.log(((t * 4) / 2 ) - 30); //0

// 비교 연산자. 다른 기능을 하는 명령. 구분!  > < >= <=
console.log(t >= 6); //true 이상연산자
console.log(t > 17); //false 초과연산자
console.log(t <= 16); //true 이하연산자
console.log(t < 11); //false  미만연산자

// 동등 연산자. == 
console.log(t == 15); //true
console.log(t == "15"); //true
console.log(string1 == string2); //"안녕하세요 " == "반갑습니다!"false
string1 = "반갑습니다!";
console.log(string1 == string2); //"반갑습니다!" == "반갑습니다!" true


//일치 연산자. 엄격하게 데이터 타입까지 구분해서 비교. ===  ***
console.log(t === 15); //true
console.log(t === "15"); //false


//부등(부정) 연산자. !=, !==
console.log(t != 15); //false
console.log(t != 23); //true
console.log(t !== '15'); //true
console.log(t !== 15); //false

/* -------------------------------------------- */

// 5. Object - 객체. 색인이 포함된 데이터들의 집합. {}

var ob = {}; //새로운 객체를 생성
ob = {
    key1 : "춥고",
    key2 : " 배고프고",
    "key3" : 123
}
console.log(ob);
console.log(ob.key1); //춥고
console.log(ob["key1"]); //춥고
console.log(typeof ob.key2); //string
console.log(typeof ob.key3); //number

/* -------------------------------------------- */
// 6. Array - 배열 객체. []
var ar = []; //새로운 배열을 생성
ar = [1, 2, 3, "바질", "로즈마리", null, true];
console.log(ar); // 0 1 2 3 4 5 6 색인이 없다. 순서로 찾을 수 있다.
console.log(ar[0]); //1
console.log(ar[3]); //"바질"
console.log(ar.length) //전체 담긴 데이터의 길이(개수) : 7
console.log(ar[ar.length - 1]); // 배열 객체의 마지막에 해당하는 값 true

/* -------------------------------------------- */
//7. if - 조건문
//비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자. - 조건을 확인하기 위해서 비교.
var i = 30;
var i2 = 5;
var i3;
console.log(typeof i3); //undefined
if(typeof i3 === "undefined") { //변수 c 가 undefined면
    i3 = i * i2; //a*b를 c에 대입한다.
}else{ //아니면
    i3 = i + i2; //a+b를 c에 대입한다.
}
console.log(i3); // 150

i3 = 150;
console.log(typeof i3); //number
if(typeof i3 === "undefined"){//true.
    i3 = i * i2;
}else if(typeof c === "string"){//true.
    i3 = i - i2;
}else if(typeof c === "boolean"){//true.
    i3 = i % i2;
}else if(typeof c === "object"){//true.
    i3 = i / i2;
}else{//false.
    i3 = i + i2;
}
console.log(i3); // 35


var if1 = 3;
var if2 = if1 + 30; //33
var if3 = if2 % 8; //1

console.log(if3 * 3 ); //3

console.log("-------------연습 끝--------------");
/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.


var lee = {
    name : "이다영",
    age : 21,
    greeting : "안녕하세요."
}
var greeting2 = "올해 열심히 배워서 능숙하게 코딩을 할 수 있게 되면 좋겠습니다. "
var greeting3 = "노력하겠습니다. ";
var greeting4 = "잘 부탁드립니다!";
var school = ["계원예술대학교", "디지털미디어디자인과", "D반", "프로그래밍"];
var grade = 2;
var home = "인천";
var hobby = ["노래 듣기", "게임하기"];
var singer = ["새소년", "쏜애플"]
var game = ["롤", "스타듀밸리"]
var birth = {
    M : 7,
    D : 22
}
var in1 = lee.greeting + "저는 " + lee.name + "입니다.";
var in1_ = "올해 " + lee.age + "살이며, " + "생일은" + birth.M + "월 " + birth.D + "일생이고, 현재" + home + "에 살고 있습니다.";
var in2 = school[0] + " " + school[1] + " " + grade + "학년" + school[2] + "입니다.";
var in2_ = school[3] + " 수업을 듣고 관심이 생겨서" + school[3] + "을 세부전공으로 선택했습니다.";
var in3 = "취미는 " + hobby[0] + "와 " + hobby[1] + "입니다";
var in4 = "좋아하는 가수(밴드)는 " + singer[0] + "와 " + singer[1] + "이고,"
var in5 = "즐겨하는 게임은 " + game[0] + game[1] + "입니다";
var in6 = greeting2 + greeting3 + greeting4

if (typeof lee.name == "string") {
    console.log(in1 + "\n" + in2 + "\n" + in3 + "\n" + in4 + "\n" + in5 + "\n" + in6);
}
else {
    console.log("실패;")
}