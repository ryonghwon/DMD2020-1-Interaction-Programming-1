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
var num1 = 29; //변수 num1을 선언하고 숫자 29를 할당
var num2 = num1 + 2; //변수 num2를 선언하고 num1에 2를 더하여 할당값이 31이 되도록
var num3 = num1 % 3; //변수 num3을 선언하고 num1에서 27을 빼 2를 할당하도록

if( num2 % num3 == 1){ //만약 num2를 num3으로 나누었을 때 나머지가 1이라면
    console.log('일치합니다'); //콘솔창에 '일치합니다'를 출력
    //결과 : 콘솔창에 '일치합니다'가 출력 되었다.
} else { //나머지가 1이 아니라면
    console.log('일치하지 않습니다'); //콘솔창에 '일치하지 않습니다'를 출력
    //나머지가 1과 일치하기 때문에 출력되지 않음
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
// Answer 2.
var user = { //변수 'user'를 선언하여 객체 생성
    name : "이유정", // key : value ,
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 1, //
    class : "D"
}

if(typeof user.job == "string"){ //만약 user 객체 'job' key의 값(value)이 문자(string) 타입이라면
    console.log(user.greeting); //콘솔창에 user 객체 'greeting' key의 값(value)을 출력
    //결과 : 콘솔창에 '안녕하세요'가 출력되었다.
} else { //문자타입이 아니라면
    console.log(user.name); //콘솔창에 user 객체 'name' key의 값(value)을 출력
    // 결과 : user 객체의 key 'job'의 값(value)이 문자(string) 타입이므로 출력되지 않는다.
}


/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

var num4 = 10;
var str1 = '20';
var str2 = '문자열 변수입니다.'

console.log(typeof num4); // number 
console.log(typeof str1); //string

console.log(num4 + 12); // 숫자 + 숫자 = 숫자
console.log(num4 + "12"); // 숫자 + 문자열 = 문자열 1012
console.log(num4 + str1); // 숫자 + 문자열 = 문자열 1020

console.log(num4 * 5); // 숫자 10 * 5 = 50
console.log(str1 / 2); // 20 / 2 = 10

console.log(str2.length); //str2의 길이 = 10
console.log('줄바꿈은 \n이렇게 합니다.'); //줄바꿈 시 역슬라이드(\)n을 사용합니다.

num4 = 15; // 변수 num4에 새로운 값 할당
//산술 연산자 + - * / %
console.log(num4 + 20); //35
console.log(num4 - 10); //5
console.log(num4 * 10); //150
console.log(num4 / 3); //5
console.log(num4 % 2) //나머지 1
console.log(((num4 * 4) / 2 ) - 10); //20

//대입연산자
// 왼쪽 값과 오른쪽 값을 산술하여 왼쪽 값에 대입한다.
num5 = 10; //새로운 변수 생성
console.log(num5 += 10); //num5 = num + 10 = 20
console.log(num5 -= 5); //num5 = num5 - 5 = 15
console.log(num5 *= 3); //num5 = num5 * 3 = 45
console.log(num5 /= 3); //num5 = num5 / 3 = 15
console.log(num5 %= 2); //num5 = num5 % 2 = 1

//동등,일치 연산자 ==, ===
num5 = 10; //새로운 값 할당
console.log(num5 == 10); //true
console.log(num5 == '10'); //true
console.log(num5 === 10); //true
console.log(num5 === '10'); //false
console.log(true == 1); //true;
console.log(true === 1); //false;
console.log(true == -1); //false;

//비교연산자 >, <, >=, <=
console.log(num5 >= 5); //true
console.log(num5 > 11); //false
console.log(num5 <= 10); //true
console.log(num5 < 10); //false

//부정연산자 
console.log(num5 != 20); //true
console.log(num5 != 10); //false
console.log(num5 !== '10'); //true
console.log(num5 !== 10); //false

//데이터타입
/*
Number (숫자)
String (문자)
Boolean (true, false)
undefined 값이 정의되지 않은 상태
null 값은 정용하지만 빈 상태
object {} [] 객체 
NaN 수식이 성립되지 않은 상태
*/
var a;
console.log(a); //undefined

var a = null;
console.log(a); //null

var a = [ 'hello', 2020, 'good', 'day']
var b = {
    hello : '안녕',
    year : '2020',
    good : '좋은',
    day :'날'
}
console.log(typeof a); //object
console.log(typeof b); //object

var c = false
console.log(typeof c); //boolean


var c = 10;
console.log(typeof c); //number

var c = 'hello'
console.log(typeof c); //string

//배열
var a = [ 'hello', 2020, 'good', 'day']
console.log(a); // ["hello", 2020, "good", "day"]
console.log(a.length); //4
console.log(a[0]); // hello
console.log(a[1]); //2020
console.log(typeof a[1]); //number

//if 조건문
var age = 22;
if (age >= 20){
    console.log('성인입니다.');
}else{
    console.log('미성년입니다.');
}




/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var user = {
    greeting: '안녕하세요.',
    name : '이유정',
    age : 22,
    birthY: 1999,
    birthM: 7,
    birthD: 2
}

var uni = ['계원예술대학교', 19, '디지털미디어디자인'];
var mbti = 'isfj';
var title = '게으른';
var title2 = '완벽주의자';

var location1 = '서울시';
var location2 = '광진구';

var pers = '낯'
var wish = '다가와주면 좋아합니다.'

var impression1 = '차가워 보인다'
var impression2 = '차갑지 않아요'


var int1 = `${user.greeting} 제 이름은 ${user.name}입니다.\n`
var int2 = `저는 ${user.birthY}년 ${user.birthM}월 ${user.birthD}일에 태어난 ${user.age}살 입니다.\n`
var int3 = `현재 ${uni[0]}의 ${uni[1]}학번 ${uni[2]}과에 재학중이고,\n${location1} ${location2}에서 살고 있습니다.\n`
var int4 = `저의 mbti는 ${mbti}이고, '${title} ${title2}'입니다.\n`
var int5 = `${pers}을 많이 가립니다. 하지만 ${wish}\n`
var int6 = `첫인상이 ${impression1}라는 말은 많이 듣지만 전혀 ${impression2}..!`

console.log(int1 + int2 + int3 + int4 + int5 + int6);
/*
 안녕하세요. 제 이름은 이유정입니다.
 저는 1999년 7월 2일에 태어난 22살 입니다.
 현재 계원예술대학교의 19학번 디지털미디어디자인과에 재학중이고, 
 서울시 광진구에서 살고 있습니다.
 저의 mbti는 isfj이고, '완벽주의자'입니다.
 낯을 많이 가리지만 동기들이랑 꼭 친해지고 싶어요.
*/

var end = "앞으로 잘 부탁드립니다!"

if(end.length == 13){
    console.log(end); //앞으로 잘 부탁드립니다!
}
