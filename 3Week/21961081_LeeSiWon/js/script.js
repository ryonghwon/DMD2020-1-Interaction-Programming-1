console.log("외부 자바스크립트 로드");

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.

//변수 a를 선언하고 29 할당.
var a = 29;

//변수 b를 선언하고, a 변수와 덧셈 대입을 이용하여 31이 할당되도록 코드를 작성함.
var b = a + 2;

//변수 c를 선언하고, a 변수와 나머지 연산 대입을 이용해서 2가 할당되도록 코드를 작성함.
//a(29)에서 27을 빼 c에 2가 할당되도록 하거나, a(29에서)를 3으로 나눠 나머지인 2가 할당되도록 작성할 수 있음.
var c = a - 27;
console.log(c); //정상적으로 출력되는 것을 확인함.
var c = a % 3;
console.log(c); //정상적으로 출력되는 것을 확인함.

//변수 b를 변수 c로 나누었을 때 나머지가 1인 경우 '일치합니다.' 문자를 출력함
if (b % c == 1) {
    console.log("일치합니다."); //정상적으로 출력되는 것을 확인함.
}

// ----------------------------------------------------------------------------------------------------------------

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

//변수 user를 선언하고, 객체의 각 원소와 값을 적용함.
var user = {
    name : "이시원",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}

//만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고,
//문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)

if (typeof user.job === "string") {console.log(user.greeting);}
else {console.log(user.name);} //"안녕하세요" 가 정상적으로 출력되는 것을 확인함.


// ----------------------------------------------------------------------------------------------------------------


/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.


//Number - 숫자.

console.log(10); //10 - 정수. 딱 떨어지는 수.
console.log(1.5); //10.1111 - 실수. 소수점이 있는 수. 실제 현실에서 보이는 수 (수치 등)
console.log(10.10 + 1.5); //11.6으로 출력됨.

// Operator - 연산자
// + - * /     더하기 빼기 곱하기 나누기
// %          나머지 - 나눗셈 후 몫이 나옴

console.log(100 + 100); //200
console.log(500 - 150); //350
console.log(3 * 3); //9
console.log(12 / 2); //6
console.log(10 % 3); //1

console.log(5 % 10); //값이 5로 나옴...? 몫은 0 나머지는 5 이런 형식의 연산은 그냥 앞의 숫자가 나머지가 되고 몫은 0이 된다고 함




//String - 문자. 문자열

console.log("안녕하세요");
// "안녕하세요" <쌍따옴표도 포함해서 출력하고 싶으면 console.log(" \"안녕하세요"\ ") <역슬래시 쓰면 됨. 원화 모양 키

// \n    - 정규식 줄바꿈
console.log("안녕하세요\n반갑습니다.\n저는 이시원입니다.");


//String 연산 < + 더하기만 있음.
console.log("Hello" + "world"); //Helloworld
console.log("Hello" + " world"); //Hello world
console.log("Hello" + " " + "world"); //Hello world

//문자열의 길이. - 문자열이 끝난 부분에 .length
console.log("Hello world".length); //11

//해당 문자의 순서  (순서는 0부터 시작.)
console.log("hello world".indexOf("h")); //0




// var 변수
// var a = 1;
// var b = 2;
// a + b = 3

// 자바가 인식할 수 있는 데이터유형: 
// Boolean         true / false
//  Number         -1 0 1 2 3 4 5
//  String         "hello" "안녕" "123"
//  undefined      아무것도 값이 없음. 아직 선언되지 않음
//  null           숫자가 담겨져 있는 것처럼만 보이는 타입
//  1              Boolean의 true로 간주
//  1이 아닌 수    Boolean의 false로 간주
//  NaN           성립이 되지 않는 수, 계산할 수 없음을 의미함

//이것을 어떻게 알아보느냐? typeof 로 알 수 있음
// typeof 1   <Number
// "1"        String
// []         Array
// {}         object

//var a = null;   값이 없는 상태. 의도해서 값이 없는 상태로 만든 것
//var a;          값이 정의되지 않은 상태 (선언만 해 놓음)




//typeof - 데이터의 타입을 찾는 방법
console.log(typeof 100); //number
console.log(typeof "안녕하세요"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean


//연산자: + = * / %   값과 값을 비교하기 위한 연산자
//Boolean - 참 거짓      true false 로 값이 변함.

// ==  >  <  >=  <=           = 기호가 뒤에 오기!

var a = 1;
var b = 1;
console.log(a == b); // true
console.log(a > b); //false


//문자열과 문자열을 비교
//동등연산자 ==
var a = "Hello";
var b = "World";
console.log(a == b); // false

a = 1;
b = "1";
console.log(a == b); // 1 == "1"  -> true? 왜? -> 동등연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식.


//일치연산자. 이건 === 세번 써준다. 엄격하게 데이터 타입까지 구분해서 비교함




//부등(부정)연산자        !=, !==
var a = 1;
var b = 1;
console.log(a !=b); //1 != 1    false가 나옴
a = 2;
console.log(a !=b); // 2 != 1       true가 나옴. 이건 동등연산자랑 다르게... 숫자가 다르면 true로 치는 듯

var a = "a";
var b = "a";
console.log(a !=b); //false

var a = "b";
console.log(a !=b); //true      문자열도 됨

a = 2;
b = "2";
console.log(a != b); // 2 != "2"    false     
console.log(a !== b); // 이렇게 하면 엄격계산-> 데이터 타입이 다른 걸 알아내기 때문에 true로 나옴



//object. 객체. 색인이 포함된 데이터들의 집합

var _obj = {};     //새로운 객체를 생성
_obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
}
console.log(_obj);
console.log(_obj.key1); //각 항목의 값을 찾아 불러옴.
console.log(_obj["key1"]); //위와 동일. 찾는 방법이 두가지
console.log(typeof _obj.key2); //string



//array 배열 객체
var _arr = [];  //새로운 배열 생성
_arr = [1, 2, "3", "안녕하세요", null, true];    //색인이 없고 순서로 찾을 수 있음
//     0 1 2 3 4 5
console.log(_arr[0]); //1이 나옴

console.log(_arr.length);  //전체 담기 데이터의 길이 (개수) -> 6 -> 왜냐하면 0 1 2 3 4 5 이기 때문

console.log(_arr[_arr.length - 1]);   //배열 객체의 마지막에 해당하는 값




//if조건문
//비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자 - 조건을 확인하기 위해서 비교
/*
if(condition); { 해당하는 조건이 true일 때 이 코드를 실행함 }
else if(condition2);{ 위에서 false이면 여기로 넘어옴. 이때 여기서 true이면 이 코드를 실행 }
else { 위의 조건들이 성립되지 않을 때 이 코드를 실행}
*/
var a = 10;
var b = 5;
var c;
console.log(typeof c);    //undefined 나옴

if(typeof c === "undefined") { c = a * b; } //c의 타입이 undefined라면 연산을 진행함.
else{ c = a +b; } //타입이 맞지 않으면 이 연산을 진행함.


  // true 일 경우 if를 실행, false일 경우 else를 실행함.



// ----------------------------------------------------------------------------------------------------------------


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.



var siwon = {
    name : "이시원",
    age : 21,
    job : "대학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D",
    home : "경기도"    
}

var interest = [
    "게임",
    "음악",
    "디지털 그림",
    "일러스트"
];

var programming = "프로그래밍"

var greet = {
    yorsim : "열심히 하겠습니다.",
    butak : "잘 부탁합니다!"
}

var intro1 = "안녕하세요, 저는 " + siwon.name + "입니다. " + siwon.school + siwon.major + "과에 재학하고 있습니다.\n";
var intro2 = interest[1] + ", " + interest[2] + ", " + interest[3] + ", " + interest[4] + " 등 미디어를 이용한 활동을 좋아하고 관심이 많습니다.\n";
var intro3 = siwon.job + "를 다니던 중 " + programming + "에 흥미가 생겨 세부전공으로 " + programming + "을 선택했지만, 코딩이나 " + programming + " 언어는 난생 처음이라 조금 겁이 나기도 합니다.";
var intro4 = "하지만 열심히 배워서 두려움도 이겨내고 미숙함도 떨칠 수 있도록 노력하겠습니다.";
var intro5 = greet.yorsim + greet.butak;


if (typeof programming == "string")
{
    console.log(intro1 + intro2 + intro3 + intro4 + intro5);
}
else {console.log("프로그래밍재밌당")}


/*안녕하세요, 저는 이시원입니다. 계원예술대학교 디지털미디어디자인과에 재학하고 있습니다.
게임, 음악, 디지털 그림, 일러스트 등 미디어를 이용한 활동을 좋아하고 관심이 많습니다.
대학교를 다니던 중 프로그래밍에 흥미가 생겨 세부전공으로 프로그래밍을 선택했지만, 코딩이나 프로그래밍 언어는 난생 처음이라 조금 겁이 나기도 합니다.
하지만 열심히 배워서 두려움도 이겨내고 미숙함도 떨칠 수 있도록 노력하겠습니다.
열심히 하겠습니다. 잘 부탁합니다!
*/