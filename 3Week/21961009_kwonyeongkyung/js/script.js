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

//1. 
var a = 29;

//2. 
var b = a + 2;

//3.
var c = a % 9;

//4.
if (b % c ==1)
{
    console.log("일치합니다");
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

// 1.
var user = {};

// 2.
user = {
      "name" : "권영경",
      "greeting" : "안녕하세요",
      "job" : "학생",
      "school" : "계원예술대학교",
      "major" : "디지털 미디어 디자인",
      "grade" : 2,
      "class" : "D",
        };

// 3.
if (typeof user["job"] === "string")
{
    console.log(user["greeting"]); //안녕하세요
}
else 
{
    console.log(user["name"]); //권영경
}

/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.



//1. 숫자.

console.log(3); //3
console.log(7); //7

//2. 문자.

//일반 
console.log("삐용아 안녕");
console.log("멍멍");

//""
console.log("\"삐용아 안녕\"");
console.log("\"멍멍\"");

//줄 바꿈 \n
console.log("삐용아 안녕 \n멍멍")
console.log("멍멍\n삐용아 안녕")

//문자열 길이 .length
console.log("삐용아 안녕, 멍멍".length); //10

//문자 순서 .indexOF

//3. 연산자(산술, 대입, 문자)

//산술
var a = 3;
var b = 6;
var c = 9;
var d = 12;

console.log(a + b); //9
console.log(d - c); //3
console.log(b * d); //72
console.log(d / b); //2
console.log(a % c); //3
console.log(((a + b) / c - b) * b); //-30
console.log(((c + b) / a + d) * -3); //-51

//문자
var e = "삐용아 안녕";
var f = " 멍멍";
console.log(e + f);

//대입 =
var g = "삐용아 안녕"
g = "멍멍";
console.log(g);

//비교 >, <, <=, >=
console.log(a === c); //false
console.log(a > d); //false
console.log(b < c); //true
console.log(a <= b); //true
console.log(c >= d); //false

//동등  ==
a = 5;
b = 5;
console.log(a == b); //true

//일치 ===

//부정

//4. 데이터 타입(Data Type) 
//5. 오브젝트(Object) 
//6. 배열(Array) 
//7. 조건문(if)


console.log();
console.log()

/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var int = {};
int = {
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털 미디어 디자인",
    "grade" : 2,
    "class" : "D",
    "name" : "권영경"
};
var family = {};
var family = [];
family = [" 엄마", ", 아빠", ", 언니", ", 나", ", 삐용이", ", 외할머니", ", 친할머니"];
var hobby = {};
hobby = {
    "hobby" : "취미",
    "drawing" : "손 그림",
    "pen" : " 펜 드로잉",
    "crayon" : " 크레파스"
};
var dream = [];
dream = [" 꿈", "3D", "게임 그래픽", "디자이너" , "1-2", "오브젝트", "제작", "구성", "흥미"];

var intro1 = "안녕하세요!" + " 교수님!"
var intro2 = "저는" + " " + int["school"] + " " + int["major"] +"과" + " " +int["grade"] + "학년" + " " + int["class"] + "반" + " " + int["name"] + "입니다!"
var intro3 = "가족은" + family[0] + family[1] + family[2] + family[3] + family[4] + family[5] + family[6] +" 구성되어있으며" + " 제" + " 서열은" + " 꼴찌입니다.."
var intro4 = "제 " + hobby["hobby"] + "는 " + hobby["drawing"] + "입니다" + " 그 중에서도" + hobby["pen"] + "과" + hobby["crayon"] + "를" + " 좋아합니다"
var intro5 = "제" + dream[0] + "은 " + dream[1] + " " + dream[2] + " " + dream[3] + "입니다"
var intro6 = dream[4] + "학기 " + dream[1] + "디자인 수업에서 " + dream[5] + "를 이용하여" + " 화면" + dream[6] + " 및 " + dream[7] + "에 " + dream[8] + "를 느껴 정하게 되었습니다"
var intro7 = "제가 코딩을 잘 하진 않지만 "

console.log(intro1, intro2, intro3, intro4, intro5, intro6);