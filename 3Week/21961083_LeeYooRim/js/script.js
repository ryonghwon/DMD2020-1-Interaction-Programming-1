console.log("외부 JavaScript 로드");


/*
- Quest 1.

//1.변수를 선언하고 숫자 '29'를 할당
var a = 29;
//2.변수를 하나 더 선언하고 1(순서)에서 선언한 변수와 덧셈 대입을 이용하여 '31'이 할당되도록 코드를 작성
var b = a + 2;
//3.변수를 하나 더 선언하고 1(순서)에서 선언한 변수와 나머지 연산 대입을 이용해서 '2'를 할당하도록 코드를 작성
var c = a % 3;
//4.만약 2(순서)에서 생성한 변수를 3(순서)에서 선언한 변수로 나누었을때 나머지가 '1'인 경우 '일치합니다.'라는 문자열이 console에 출력
if(b % c == 1){
    console.log("일치합니다.");
}
//나머지가 1이 아니라면 console에 '일치하지 않습니다.'를 출력
else{
    console.log("일치하지 않습니다.");
}
*/



/*
- Quest 2.

//1.'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당
var user = {};
//2. 'user' 객체의 각 key 와 value 는 아래 보기와 같이 적용
user = {
    name : "이유림",
    greeting : "안녕하세요! :)",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
//3. 만약 'user'객체 "job"key의 값(value)을 확인하여 데이터 타입이 문자 타입이라면 "greeting"key의 값을 console에 출력,
문자 타입이 아니라면 "name"key의 값을 console에 출력되도록 조건문을 작성
if (typeof user.job === "string"){
    console.log(user.greeting);
}else{
    console.log(user.name);
}

첫번째 key: "name" value: "본인이름 입력"
두번째 key: "greeting" value: "안녕하세요"
세번째 key: "job" value: "학생"
네번째 key: "school" value: "계원예술대학교"
다섯번째 key: "major" value: "디지털미디어디자인"
여섯번째 key: "grade" value: 2
일곱번째 key: "class" value: "D"

*/



/*
JavaScript 연습하기

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정),
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성



-숫자(Number)
console.log(4);       //4
console.log(3.4);     //3.4

-문자(String)
console.log("Hello,");     //Hello,  
console.log("World!");     //World!

-정규식 줄바꿈
console.log("Hello, \nWorld!");     //Hello,
                                    //World!

-문자열 길이
console.log("Hello,World!".length)     //12

-해당 문자 순서
console.log("Hello,World".indexOf("e"));    //1

-변수(Variable)
var a;
console.log(a);     //undefined
var a = 4;
console.log(a);     //4


-1. 산술 연산자    + - * / % 
console.log(1 + 2);     //3
console.log(2 - 1);     //1 
console.log(1 * 2);     //2 
console.log(2 / 1);     //2 
console.log(3 % 2);     //1 

-2. 대입 연산자    = 
var a;
a = 2; 
console.log(a);     //2

-3. 비교 연산자    > < >= <= 
var b = 1;
var c = 2;
//비교연산자의 양쪽 값을 비교하며 true 아니면 false 출력
console.log(b > c);     //false
console.log(c < b);     //false

-4. 동등 연산자    == 
d = 3;
e = 4;
f = 3;
console.log(d == e);    //false
console.log(d == f);    //true
//동등 연산자의 좌측 값이 정수형 1, 우측 값이 문자열 "1"일때엔 같다고 판단하여 결과값은 true 출력
a = 1;
b = "1";
console.log(a == b);    //true

-5. 일치 연산자    === 
g = 1;
h = "1";
console.log(g === h);   //false
g = "1";
console.log(g === h);   //true

-6. 부등(부정) 연산자    != !== 
console.log(1 != 2);        //true
console.log(1 !== "1");     //true


- 데이터 타입
Number  숫자
String  문자열
Boolean  참/거짓 
undefined  값이 정의되지 않은 상태
null  값은 적용하지만 비어있는 상태
Object  객채
NaN  수식이 성립되지 않은 상태


-7. 문자열 + 덧셈 
var s = "안녕";
var t = "하세요";
console.log(s + t); // 안녕하세요 - 출력
var s = "hello";
var t = " ";
var q = "world";
console.log(s + t + q); // hello world - 출력

-8. 배열
var a = ["Hi","have","some","fun"];     
console.log(a);                 //["Hi","have","some","fun"]
console.log(a.length);          //4
console.log(a[2]);              //have
console.log(typeof a[3]);       //string

-9. if 조건문
if{
        //성립할시 식 진행
}else{
        //그렇지 않을 경우
}

var a = 1;
var b = 3;
if(a > b){
    console.log(true);
}else{
    console.log(false);
}       //false

*/


/*
< 자기소개하기 >

1.숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정),
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2.값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3.데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/

var user = {};
user = {
    name : "이유림",
    age : "22",
    school : "계원예술대학교",
    department : "디지털미디어디자인",
    birth : 1999/04/28,
    grade : 2,
}

var hob = ["게임", "책 읽기", "노래방" ];
var gam = "롤, 카트, 메이플, 서든어택"
var bok = "판타지 소설";
var per = "소심하지만 다정한";
var par = "댕이, 베리, 토리";
var sat = "디저트, 맛집 탐방";
var itr = "유튜브 편집자"
var thx = "잘 부탁드립니다"

var int1 = "안녕하세요! 제 이름은 ${user.name}입니다:)!.\n"
var int2 = "전 ${user.birth}에 태어나 ${user.age}살의 나이로 ${user.school}, ${user.department}학과 ${user.grade}에 재학중입니다.\n"
var int3 = "현재 저는 ${per}, 3마리의 고양이를 키우고 있습니다.\n"
var int4 = "즐겨하는 취미는 ${hob}가기이고, 게임은${gam}를 즐겨하며 좋아하는 책은 ${bok}입니다.\n"
var int5 = "저는 낯을 많이 가리고 말수가 적은 편이며, ${per}성격입니다.\n"
var int6 = "평소 집에 있는걸 좋아하는 편이나, 주말에는 ${sat}하는 것을 즐깁니다.\n"
var int7 = "요즘 집에 있는 시간이 늘어나, 유튜브 시청을 자주 하다보니 ${itr}에 흥미가 생겨 공부하고 있습니다.\n"
var int8 = "늘 알기 쉽게 가르쳐주셔서 감사드리고, 한 학기동안 ${thx}!."


console.log(int1 + int2 + int3 + int4 + int5 + int6 + int7 + int8);

/*
안녕하세요! 제 이름은 이유림입니다:)!.
전  1999/04/28에 태어나 22살의 나이로 계원예술대학교 디지털미디어디자인학과 2학년에 재학중입니다.
현재 저는 댕이, 베리, 토리, 3마리의 고양이를 키우고 있습니다.
즐겨하는 취미는 게임, 책 읽기, 노래방가기이고, 게임은 롤, 카트, 메이플, 서든어택을 즐겨하며 좋아하는 책은 판타지소설입니다.
저는 낯을 많이 가리고 말수가 적은 편이며, 소심하지만 다정한 성격입니다.
평소 집에 있는걸 좋아하는 편이나, 주말에는 디저트, 맛집 탐방을 하는것을 즐깁니다.
요즘 집에 있는 시간이 늘어나, 유튜브 시청을 자주 하다보니 유튜브 편집자에 흥미가 생겨 공부하고 있습니다.
늘 알기 쉽게 가르쳐주셔서 감사드리고, 한 학기동안 잘 부탁드립니다!.
*/                  