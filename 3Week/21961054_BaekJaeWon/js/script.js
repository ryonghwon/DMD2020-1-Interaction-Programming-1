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
var b; //undefined
b = a + 2;
var c; //undefined
c = a % 3;
if ( b % c == 1)
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
var user = {};
user = {
    name : "백재원",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
if (typeof user["name"] == "string")
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
 
// Number 숫자 : 자바스크립트에서 큰따옴표나 작은따옴표가 붙지않는 숫자는 숫자로 인식

// 사칙연산
console.log(1); // 1
console.log(1+1); // 2
console.log(1/1); // 1
console.log(1%2) // 1

// 복잡한 연산
console.log(Math.pow(2,5)); // 32 - 2의 5승
console.log(Math.round(2.5)); // 3 - 2.5를 반올림
console.log(Math.ceil(2.4)); // 3 - 2.4를 올림
console.log(Math.floor(2.5)); // 2 - 2.5를 내림  
console.log(Math.sqrt(16)); // 4 - 16의 제곱근   
console.log(Math.random()); // 0 ~ 1 사이의 랜덤한 숫자      


// String 문자 : "(큰 따옴표) 혹은 '(작은 따옴표) 중의 하나로 감싸야 함

// 한 줄씩 출력
console.log("이불 박근");
console.log('위험');
console.log("혜");
// \n : 한 줄씩 띄어줌
console.log("국민여러분\n이불 박근 위험 혜\n춥고 순시리고 다치면 하야 해");
// 이스케이프 - "", '', +, -, /, *, % 과 같은 기호를 문자열로 강제 인식시키려면 \를 앞에 입력
console.log("\"\+\'"); // "+'


// Variable 변수 : 값을 담는 컨테이너. 값을 유지하거나 다른 값으로 변경하는데 용이. 쉽게 말해 대명사와 같음

// string
var jaewon;
console.log(jaewon); //undefined
jaewon = "zzang";
console.log(jaewon); // zzang
var jaewon2 = "zzang2"; // 한번에 변수 선언 & 값 할당
console.log(jaewon2); // zzang2

// int
var a = 10;
var b = 2;
var c;

// 일일히 숫자를 쳐줘야 할 일을 변수를 통해 깔끔하게 간단히 해결할 수 있다.
c = a + b;
console.log(c); // 12
c = a - b;
console.log(c); // 8
c = a * b;
console.log(c); // 20
c = a / b;
console.log(c); // 5
c = a % b;
console.log(c); // 0

c = a * ((a - (b / a)) + (a * b)) - c 
console.log("결과 :" + c); // 298



// 연산자

// 산술 연산자
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);

// 문자열의 경우 연산자 중 "+"만 이용 가능 - 문자열을 서로 붙여줌
console.log("이불 박근 " + '위험' + " 혜"); // 이불 박근 위험 혜

// 대입 연산자

// = : 왼쪽 피연산자에 오른쪽 피연산자의 값을 대입함.
// += : 왼쪽 피연산자의 값에 오른쪽 피연산자의 값을 더한 후, 그 결괏값을 왼쪽 피연산자에 대입
// -= : 왼쪽 피연산자의 값에서 오른쪽 피연산자의 값을 뺀 후, 그 결괏값을 왼쪽 피연산자에 대입
// *= : 왼쪽 피연산자의 값에 오른쪽 피연산자의 값을 곱한 후, 그 결괏값을 왼쪽 피연산자에 대입
// /= : 왼쪽 피연산자의 값을 오른쪽 피연산자의 값으로 나눈 후, 그 결괏값을 왼쪽 피연산자에 대입
// %= : 왼쪽 피연산자의 값을 오른쪽 피연산자의 값으로 나눈 후, 그 나머지를 왼쪽 피연산자에 대입
var 대입 = 3;
var 연산자 = 5;
console.log(대입 -= 5); // -2
console.log(연산자 %= 3); // 2

 // 비교 연산자 : 값과 값을 비교하기 위한 연산자 - boolean 형식 값

//  == : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같으면 참을 반환함. - 동등 연산자(두 피연산자의 타입이 서로 다르면, 비교를 위해 강제로 타입을 같게 변환)
//  === : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같고, 같은 타입**이면 참을 반환함. - 일치 연산자
//  != : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않으면 참을 반환함. - 부정 연산자(두 피연산자의 타입이 서로 다르면, 비교를 위해 강제로 타입을 같게 변환)
//  !== : 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않거나, 타입이 다르면 참을 반환함. - 부정 연산자
//  > : 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 크면 참을 반환함.
//  >= : 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 크거나 같으면 참을 반환함.
//  < : 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 작으면 참을 반환함.
//  <= : 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 작거나 같으면 참을 반환함.
var x = 3, y = 5;
var a = "abc", b = "bcd";
console.log((x > y)); // false - y의 값이 x의 값보다 큼
console.log((a <= b)); // true - 알파벳 순서상 'a'가 'b'보다 먼저 나오므로 'a'가 'b'보다 작음.
console.log(x < a); // false - 타입이 달라 비교 x

// 증감 연산자

// ++x	먼저 피연산자의 값을 1 증가시킨 후에 해당 연산을 진행함.
// x++	먼저 해당 연산을 수행하고 나서, 피연산자의 값을 1 증가시킴.
// --x	먼저 피연산자의 값을 1 감소시킨 후에 해당 연산을 진행함.
// x--	먼저 해당 연산을 수행하고 나서, 피연산자의 값을 1 감소시킴.
var 증 = 3;
var 삼 = 5;
console.log(++증 + 삼); // 9
console.log(증 + 삼--); // 9


// Data Type 자료형 : 프로그램에서 다룰 수 있는 값의 종류

// Number 숫자
console.log(0.1+0.2); // 0.30000000000000004 - 자바스크립트의 Number는 '64비트 형식 IEEE 754 값'으로 정의되어 이상한 값이 나오는 경우가 있다.
// String 문자열
console.log("안녕하세요")
// Boolean 참 / 거짓
var t = 3;
var f = 5;
var istrue = t >= f;
console.log(istrue); //false
// undefined 값이 정의되지 않은 상태
var ud;
console.log(ud); //undefined
// null 타입이 정의되지 않은 상태
var str = null;   // object 타입의 null 값
// Object 객체 : 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합
// 자바스크립트에선 숫자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체(but 이들도 값이 정해진 객체로 취급되어, 객체로서의 특징도 함께 가짐)
var dmd = "인터렉션"; // 객체도 많은 값을 가지는 변수의 하나
// function 함수 : 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다.
/* 함수의 형식**
function 함수명( [인자...[,인자]] ){
    코드
    return 반환값
 }
 */
// NaN : Not a Number. 수식이 성립되지 않은 상태
var nan = "백재원" * 2;
console.log(nan);

// typeof - 뒤에 입력된 것의 자료형을 알려줌
console.log(typeof 1); //number
console.log(typeof "백재원"); //string
console.log(typeof true); //boolean



// Object 객체 : 색인이 포함된 데이터(이름(name)과 값(value)으로 구성된 프로퍼티(property))들의 집합

var 객 = {};
객 = {
    객1 : "체1",
    객2 : "체2",
    객3 : "체3",
}
console.log(객); // {객1: "체1", 객2: "체2", 객3: "체3"}
console.log(객.객1); // 체1
console.log(객["객3"]); // 체3



// Array : 이름과 인덱스로 참조되는 정렬된 값의 집합
// element : 배열을 구성하는 각각의 값
// index : 배열에서의 위치를 가리키는 숫자

// 배열 리터럴을 이용하는 방법
var arrLit = [1, true, "JavaScript"]; 
// Array 객체의 생성자를 이용하는 방법            
var arrObj = Array(1, true, "JavaScript");  
// new 연산자를 이용한 Array 객체 생성 방법
var arrNewObj = new Array(1, true, "JavaScript"); 

console.log(arrLit[2]); // JavaScript         
console.log(arrObj[1]); // true       
console.log(arrNewObj[0]); // 1        


// 제어문 - if 조건문 : 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문

var x = 1; y = 3; z = "백재원";
if(typeof x == z)
{
    console.log("올라잇");
}
else if(typeof y == z)
{
    console.log("대추라잇");
}
else(typeof z == "string")
{
    console.log("대박"); // 일치
}


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개
var 나 = {};
나 = {
    name : "백재원",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
console.log("☆★☆★☆★☆★☆★☆자기소개★☆★☆★☆★☆★☆★");
console.log(나.greeting + " 제 이름은 " + 나.name + "입니다.");
console.log("저는 " + 나.school + " " + 나.major + " " + (20 % 9) + "학년 " + 나.class + "반 " + 나.job + " 입니다.");
console.log("저는 생각하고 끄적이고 그림 그리고 유튜브 보는걸 좋아합니다.")
var a = 2;
var b = "2";
console.log("제가 " + "유제품을 " + "좋아하는 것은 " + (a == b) + "이고");
console.log("제가 " + "어패류를 " + "좋아하는 것은 " + (a === b) + "입니다.");
var obj = ["학생", "교수님"]
var realobj = prompt("학생인가요 교수님이신가요", "입력해주세요");

if (realobj == obj[0])
{
    console.log("<< ");
    console.log("친구들을 화상으로만 만나서 얼굴을 직접 보지 못해 아쉬운데");
    console.log("혹시 만났을때 어색하더라도");
    console.log("남은 시간 잘 보낼 수 있게 즐겁게 지내도록 노력해볼게요");
    console.log("개강파티는 못했어도 종강파티는 해보아요");
    console.log("감사합니다 D반님들 저를 예쁘게 봐주십쇼");
    console.log(">> ");
}
else if (realobj == obj[1])
{
    console.log("<< ");
    console.log("프로그래밍이라는 분야를 배울 기회에 바로 지금이다 라는 생각에 이 반에 들어왔는데")
    console.log("배우면 배울수록 재밌기도 하고")
    console.log("점점 말이 없어지며 집순이가 되가는 기분이 듭니다")
    console.log("많이 여쭤보고 지식을 쌓고 싶은데 숫기가 없어서")
    console.log("질문을 적극적으로 많이 못드려서 아쉽습니다 ㅜ")
    console.log("앞으로 더 많고 심도있는 질문 해볼 수 있도록 더 공부해보겠습니다")
    console.log("많이 가르쳐주세요 감사합니다")
    console.log(">> ");
}
console.log("☆★☆★☆★☆★☆★☆자기소개★☆★☆★☆★☆★☆★");
// 질문:
// 자바스크립트에서 객체 (object), 함수(function) 이 두가지의 개념이 잘 이해가 되지 않아서 다시 한번 구체적으로 설명해주시면 감사하겠습니다!!


