/*
 Quest 1.)

1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
 */

//1. 변수를 선언하고 숫자 '29' 를 할당합니다.
 var a = 29;
//console 출력
console.log(a);

 //2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 덧셈 대입을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
 var b = (a + 2);
//console 출력
console.log(b);

 //3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 나머지 연산 대입을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
 var c = (a - 27);
 //console 출력
console.log(c);

 //4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 
 //나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
 if(b % c == 1)
 {
     console.log("'일치합니다'");
 }
 
/* 
 Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.

첫번째 key: "name" value: "본인이름 입력"
두번째 key: "greeting" value: "안녕하세요"
세번째 key: "job" value: "학생"
네번째 key: "school" value: "계원예술대학교"
다섯번째 key: "major" value: "디지털미디어디자인"
여섯번째 key: "grade" value: 2
일곱번째 key: "class" value: "D"

3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting" key의 값을 console에 출력, 문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성합니다. 
*/

//1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user = {};

//2. 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용합니다.
user ={
    key1 : "한정민",
    key2 : "안녕하세요",
    key3 : "학생",
    key4 : "계원예술대학교",
    key5 : "디지털미디어디자인",
    key6 : 2,
    key7 : "D"
}

console.log(user);
console.log(user.key1);
console.log(user.key2);
console.log(user.key3);
console.log(user.key4);
console.log(user.key5);
console.log(user.key6);
console.log(user.key7);

/* 
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 
문자 타입이라면 "greeting" key의 값을 console에 출력, 
문자 타입이 아니라면 "name" key의 값을 console에 출력되도록 조건문을 작성합니다. 
 */

console.log( typeof user.key1); // string  
console.log( typeof user.key2); // string 
console.log( typeof user.key3); // string  
console.log( typeof user.key4); // string  
console.log( typeof user.key5); // string  
console.log( typeof user.key6); // string  
console.log( typeof user.key7); //number 