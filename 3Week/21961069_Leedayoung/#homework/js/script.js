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

if (b % c == 1) {
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

var user = {
    name : "이다영",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
};

if (typeof user.job == String){
    console.log(user.greeting);
}
else {
    console.log(user.name);
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

//3. Variable 변수

/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.


