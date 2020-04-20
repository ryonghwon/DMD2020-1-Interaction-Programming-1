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
//1. 변수를 a 선언, 값 29 할당
var a = 29;
//console.log(a);

//2. 변수 b 선언, a에 덧셈 대입 사용하여 값이 31이 되도록 할당 
var b = a + 2;
//console.log(b);

//3.변수 c 선언, a에 나머지 연산을 사용하여 값이 2가 되도록 할당 
var c = a % 9;
//console.log(c);

//4.b를 c로 나누었을때 나머지가 1일 경우 "일치합니다." 문자열 출력
if (b % c == 1)
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
//1. 'user' 라는 변수를 선언
var user = {};

//2.객체를 생성하여 보기의 원소와 값으로 할당
user = {
    "name" : "강소이",
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D"
 }

//3. 만약 'user' 객체 "job"의 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성
if (typeof user["job"] === "string")
{
    console.log(user["greeting"]); //안녕하세요.
}
//4. 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성
else
{
    console.log(user["name"]);//강소이
}




/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

var a = 5;
var b = 10;
var c = "5";
var e = 55;

//산술 연산자
console.log(a + b); //15
console.log(a - b); //-5
console.log(a * b); //50
console.log(a / b); //0.5
console.log(a % b); //5


//숫자+숫자 산술연산자와 숫자+문자 연산자
console.log(a + b); //15
console.log(a + c); //55

//비교 연산자
console.log(a == 5); //true
console.log(a === 5); //true

//a+c의 값은 5"5" e의 값은 숫자 55일때 동등, 일치 연산자
console.log(a + c == e) //ture
console.log(a + c === e) //false

//부등 연산자
console.log(a != b); //ture
console.log(a == b); //false

//오브젝트
_obj = {
    key1 : "v1",
    key2 : "v2",
    key3 : 100
}
console.log(_obj); //{key1: "v1", key2: "v2", key3: 100}
console.log(_obj.key1); //v1
console.log(_obj["key1"]); //v1
console.log(typeof _obj.key2); //string
console.log(typeof _obj.key3); //number

//배열
var _arr = [];
_arr = [ "안녕하세요","반갑습니다","디지털미디어디자인학과",2,"학년","강소이입니다."];
console.log(_arr[0]); //안녕하세요
console.log(_arr[2]); //반갑습니다.
console.log(_arr.length); //6
console.log(_arr[_arr.length - 1 ]); //강소이입니다.

//조건문
//변수 a,b,c에 값을 할당
var a = "피자 좋아하세요?"
var b = "네";
var c = "아니요";

//a의 값을 표시한다. 피자 좋아하세요?
console.log(a);

//만약 c의 값이 "아니요"이면 그대로 출력
if(c == "아니요") {
    console.log(c);
//다른 답이면 "네"를 출력한다
}else {
    console.log(b);
}


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var _arr = [];
_arr = ["안녕하세요"," 강소이입니다."," 디지털미디어디자인학과"," 2학년"," 반갑습니다."];
//띄어쓰기를 하고 싶은데 어떻게 해야 할 지 몰라서 문자열 앞에 공백을 붙었습니다...
a = _arr[0]+_arr[2]+_arr[3]+_arr[1]+_arr[4]


console.log(a); 





