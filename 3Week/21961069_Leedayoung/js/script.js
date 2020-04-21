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

//대입연산자 += -= *= /= %=
console.log(t += 5); //t = t + 5 = 20
console.log(t -= 6); //t = t - 6 = 14
console.log(t *= 7); //t = t * 7 = 98
console.log(t /= 2); //t = t / 3 = 49
console.log(t %= 7); //t = t % 2 = 0

//부등(부정) 연산자. !=, !==
t = 15 
console.log(t != 15); //false
console.log(t != 23); //true
console.log(t !== '15'); //true
console.log(t !== 15); //false


// 5. Data Type - 데이터 타입.
// Number 숫자. ***
// String 문자열. ***
// Boolean 참 / 거짓. ***
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 - {}
// Array 배열객체 - []
// Function 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.
// typeof - 데이터의 타입 찾는 방법.
console.log(typeof 12); //number
console.log(typeof "반가워요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean


/* -------------------------------------------- */




/* -------------------------------------------- */
/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.


