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

//변수 a에 29를 할당했습니다.
var a = 29;
//변수 b를 선언하고 변수 a에 덧셈 대입을 이용해서 결과가 31이 할당되는 식을 작성했습니다.
var b = a + 2;
//변수 c를 선언하고 변수 a에 나머지 연산 대입을 이용해서 결과가 2가 할당되는 식을 작성했습니다.
var c = 29 % 3;
//변수 b에서 변수 c로 나누었을 때 나머지가 1인 경우 '일치합니다.'라는 문자열이 console에 출력되도록 했습니다.
if (b % c == 1){
    console.log('일치합니다.');
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

//변수 'user'를 선언하고 새로운 객체를 생성하였습니다.
var user = {};
// 보기와 같은 값을 할당합니다.
user = {
    name : "김현민",
    greeting : "안녕하세요.",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    calss : "D"
};
//"job" key 값의 데이터 타입이 문자라면 "greeting" key의 출력값을 console에 출력하도록, 문자가 아니라면 "name" key의 값을 console에 출력하도록 작성했습니다.

if (typeof user.job === "string") {
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

//      숫자 (Number)
console.log(11); // 11
console.log(1.1); // 1.1 

//      문자 (String)
console.log("Hello World!"); // Hello World!
console.log('Hello World!'); // Hello World!

//escape.
console.log("Hello \"Hyunmin\" World!") // Hello "Hyunmin" World!

//문자열 줄바꿈.
console.log("Hello\nHyunmin\nWorld!") // Hello(줄바꿈)Hyunmin(줄바꿈)World!

//      연산자 (Operator)


// 1. 산술 연산자 : 숫자 값(리터럴 또는 변수)을 피연산자로 받아 하나의 숫자 값을 반환합니다. 표준 산술 연산자는 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)입니다.

//1-1. 덧셈 (+) : 숫자 피연산자를 더한 값, 또는 문자열을 연결한 값을 생성합니다.
//Number + Number -> 합
console.log(1 + 5); // 6
//Boolean + Number -> 합
console.log(true + 2); // 3
//Boolean + Boolean -> 합
console.log(false + false); // 0
console.log(true + true); // 2
console.log(true + false); //1
//Number + String -> 연결
console.log(10 + "Ten"); // "10Ten"
//String + Boolean -> 연결
console.log("Ten" + true); // "Tentrue"
//String + String -> 연결
console.log("Ten" + "nis"); // "Tennis"

//1-2. 뺄셈 (-) : 두 개의 피연산자를 뺀 값을 생성합니다.
console.log(10 - 1); // 9
console.log(1 - 10); // -9
console.log("Ten" - 10); // NaN (Not a Number)

//1-3. 나눗셈 (/) : 왼쪽 피연산자를 피제수로, 오른쪽 피연산자를 제수로 한 몫을 생성합니다.
console.log(1 / 2); // 0.5, Javascript에서는 0.5 Java에선 0
console.log(1.0 / 2.0); // 0.5
console.log(2.0 / 0); // Infinity
console.log(2.0 / -0.0); // -Infinity 

//1-4. 곱셈 (*) : 두 연산자의 곱을 생성합니다.
console.log(4 * 5); // 20 
console.log(-4 * 5); // -20
console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity
console.log("Ten" * 10); // NaN

//1-5. 나머지 (%) : 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 반환합니다. 결과는 항상 피제수의 부호를 따라갑니다. 
console.log(12 % 5); // 2
console.log(-1 % 2); // -1
console.log(NaN % 2); // NaN
console.log(1 % 2); // 1
console.log(2 % 3); // 2
console.log(-4 % 2); // 0
console.log(5.5 % 2); // 1.5

//1-6. 거듭제곱 (**) : 첫 번째 피연산자를 밑으로, 두 번째 피연산자를 지수로 한 값을 생성합니다. 거듭제곱 연산자는 우결합성을 가집니다. 따라서 a ** b ** c 는 a ** (b ** c)와 같습니다.
console.log(2 ** 3); // 8
console.log(4 ** 2); // 16
console.log(3 ** 1.5); // ?
console.log(10 ** -1); // 0.1
console.log(2 ** 3 ** 2); // 512
console.log(2 ** (3 ** 2)); // 512
console.log((2 ** 3) ** 2); // 64
console.log(-(2 ** 3)); // -8
console.log((-2) ** 3); // -8
//JavaScript는 비트 연산자 ^도 가지고 있지만 **와 ^는 다릅니다. 예를 들어 2 ** 3 === 8 이지만 2 ^ 3 ===1 입니다.

//1-7. 증가 (++) : 피연산자를 증가(1을 덧셈) 시키고, 그 값을 반환합니다. 피연산자의 뒤에 붙여 (ex)x++ 접미사로 사용한 경우 증가하기 전의 값을 반환합니다. (ex)++x 접두사로 사용한 경우 증가한 후의 값을 반환합니다.
// 접미사
var a = 3;
b = a++; 
console.log(b); // 3
// 접두사
var a = 3;
b = ++a;
console.log(b); // 4

//1-8. 감소 (--) : 피연산자를 감소(1을 뺄셈) 시키고, 그 값을 반환합니다. 피연산자의 뒤에 붙여 (ex)x-- 접미사로 사용한 경우 감소하기 전의 값을 반환합니다. (ex)--x 접두사로 사용한 경우 증가한 후의 값을 반환합니다.  
// 접미사
var a = 3;
b = a--; 
console.log(b); // 3
// 접두사
var a = 3;
b = --a;
console.log(b); // 2

//1-9. 단항 부정 (-) : 피연산자의 앞에 위치하며 부호를 뒤집습니다.
var a = 3;
b = -a;
console.log(b); // -3
//단항 부정 연산자는 숫자가 아닌 값을 숫자로 변환합니다.
var a = "4";
b = -a; 
console.log(b); // -4
var a = "hyunmin";
b = -a;
console.log(b); // NaN

//1-10. 단항 양부호 (+) : 피연산자의 앞에 위치하며 피연산자의 값 그대로 평가되지만, 값이 숫자가 아닐 경우 숫자로 변환을 시도합니다. 단항 부정 연산자도 숫자가 아닌 값을 변환할 수 있지만, 단항 양부호가 속도도 제일 빠르고 다른 연산도 수행하지 않으므로 선호해야 할 방법입니다. 문자열로 표현한 정수 및 부동소수점은 실수, 문자열이 아닌 true, false, null도 변환할 수 있습니다. 10진수와 16진수 정수 모두 지원합니다. 어떤 값을 분석할 수 없으면 NaN으로 평가됩니다.
console.log(+3); // 3
console.log(+"3"); // 3
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0


// 2. 대입 연산자 : 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당합니다. 기본 대입연산자는 등호(=) 입니다.

x = 5;
y = 10;
z = 25;

//2-1. 덧셈 대입 : 변수에 오른쪽 피연산자의 값을 더하고 결과를 변수에 할당합니다.
foo = "foo";
bar = 5;
baz = true;
hm = "hyunmin";

//Number + Number -> 합
console.log(bar += 2); // 7
//Boolean + Number -> 합
console.log(baz += 2); // 3
//Boolean + Boolean -> 합
baz = true;
console.log(baz += false); // 1
//Number + String -> 연결
bar = 5;
console.log(bar += "foo"); // "5foo"
//String + Boolean -> 연결
console.log(foo += true); // "footrue"
//String + String -> 연결
console.log(hm += "Kim"); // "hyunminKim"

//2-2. 뺄셈 대입 : 변수에서 오른쪽 피연산자의 값을 빼고 결과를 변수에 할당합니다.
bar = 5;
console.log(bar -= 2); // 3
bar = 5;
console.log(bar -= "foo"); // NaN

//2-3. 곱셈 대입 : 변수에 오른쪽 피연산자의 값을 곱하고 결과를 변수에 할당합니다.
bar = 5;
console.log(bar *= 5); // 25
bar = 5;
console.log(bar *= "foo"); // NaN

//2-4. 나눗셈 대입 : 변수를 오른쪽 피연산자로 나누고 결과를 변수에 할당합니다.
bar = 5;
console.log(bar /= 2); // 2.5
bar = 5;
console.log(bar /= 0); // Infinity

// 3. 비교 연산자 : JavaScript는 엄격한 비교와 형변환 비교 두가지의 비교 방법을 모두 가지고 있습니다. 엄격(일치) 비교(===)는 두 피연산자가 같은 자료형에, 그 내용도 일치해야만 참입니다. 추상(동등) 비교(==)는 비교 전에 두 피연산자를 동일한 자료형으로 변환합니다. 관계 추상 비교(<=)의 경우 원시값으로 바꾸고 같은 자료형으로 다시 바꾼 후 비교를 수행합니다.

//3-1. 동등 연산자 (==) : 두 피연산자의 자료형이 같지 않은 경우 같아지도록 변환한 후 엄격 비교를 수행합니다.
console.log(1 == 1); // true
console.log("1" == 1); // true
console.log(1 == "1"); // true
console.log(0 == false); // true
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(null == undefined); // true

//3-2. 부등 연산자 (!=) : 두 피연산자가 같지 않은 경우 참을 반환합니다. 피연산자의 자료형이 일치하지 않는 경우 적절한 자료형으로의 변환을 시도합니다.
console.log(1 != 2); // true
console.log(1 != "1"); // false
console.log(1 != true); // false

//3-3. 일치 연산자 (===) : 자료형 변환 없이 두 연산자가 엄격히 같은지 판별합니다.
console.log(5 === 5); // true
console.log(5 === "5"); // false

//3-4. 초과 연산자 (>) : 왼쪽 피연산자가 오른쪽 피연산자보다 큰 경우 참을 반환합니다.
console.log(1000 > 999); // true

//3-5. 이상 연산자 (>=) : 왼쪽 피연산자가 오른쪽 피연산자보다 크거나 같을 경우 참을 반환합니다.
console.log(1004 >= 1004); // true
console.log(1004 >= 1003); // true

//3-6. 미만 연산자 (<) : 왼쪽 피연산자가 오른쪽 피연산자보다 작을 경우 참을 반환합니다.
console.log(999 < 1000); // true

//3-7. 이하 연산자 (<=) : 왼쪽 피연산자가 오른쪽 피연산자보다 작거나 같을 경우 참을 반환합니다.
console.log(999 <= 1000); // true
console.log(1000 <= 1000); // true


// 4. 논리 연산자 : 논리 연산자는 보통 Boolean 값과 함께 쓰이며 불리언 값을 반환합니다. 그런데, &&과 || 연산자는 사실 피연산자의 중 하나의 값을 반환합니다. 그러므로 불리언 외의 다른 값과 함께 사용하면 불리언 값이 아닌 것을 반환할 수 있습니다. 

// 논리 AND (&&) : expr1 && expr2 : expr1을 true로 변환할 수 있는 경우 expr2을 반환하고 그렇지 않으면 expr1을 반환합니다. 
// 논리 OR (||) : expr1 || expr2 : expr1을 true로 변환할 수 있으면 expr1을 반환하고 그렇지 않으면 expr2를 반환합니다.
// 논리 NOT (!) : !expr : 단일 피연산자를 true로 변환할 수 있으면 false를 반환합니다. 그렇지 않으면 true를 반환합니다.
var a = 5;
var b = -1;

console.log(a > 0 && b > 0); // a > 0 그리고 b > 0 -> false
console.log(a > 0 || b > 0); // a > 0 또는 b > 0 -> true
console.log(!(a > 0 || b > 0)); // ! (a > 0 또는 b > 0 -> true) - > false 


//      변수 (variable) : 말그대로 변하는 수 입니다. 데이터가 변합니다. 변수의 이름을 정할때는 한국어, 중국어, 일본어, 특수문자 ($와 _만 가능)등등 상관없지만 세계적으로 영어 대소문자와 $,_만 사용합니다. 마지막은 ;(세미콜론)으로 끝내 문장이 끝났다는 것을 컴퓨터에게 알립니다.

// var varibale (변수명) = value; (변수값)
var a = 5;
var b = 10;
console.log(a + b); // 15
var a = "hello";
//var 선언 이후에는 var 를 사용하지 않아도 됩니다.
a = "HELLO~";
//변수는 무수히 많은 재활용이 가능합니다.
a = a + "WORLD!";
a += ":^)";

var a = 300, b = 20, c = 10, d = 30, e = 2;
var sum = ( ( ( a + b ) / c) - d ) * e; // ( ( ( 300 + 20 ) / 10 ) - 30 ) * 2 = 4
console.log(sum); // 4


//      자료형 (Data Type) 

// Boolean (불리언) : true | false 로 출력
// Number (숫자) : -1 0 1 2 3 4 5... 
// String (문자열) : "a" "b" "c"...
// undefined : 변수를 만들어 놓았는데 아무 값도 집어넣지 않았을 때 자동으로 undefined (정해지지않음) 이 됩니다.
// null : 빈 값을 변수에 의도적으로 넣은 것입니다. 기존에 있는 값을 지울 때 사용합니다.
// NaN (Not a Number) : 성립이 되지 않는 수, 계산할 수 없음을 의미합니다.

//type of : 어떤 자료형인지 알고 싶을 때 사용할 수 있습니다.
console.log(typeof 1); // number
console.log(typeof "1"); // string
console.log(typeof {}); // object
console.log(typeof true); // boolean


//      객체 (Object)  
var me = {
    firstname : "KIM",
    lastname : "HYUNMIN"
}
console.log(me); // {firstname: "KIM", lastname: "HYUNMIN"}
//키(Key)와 값(Value) : 속성에서 firstname, lastname과 같은 것을 객체의 키(Key)라고 부르고 "KIM", "HYUNMIN"과 같은 것을 객체의 값(Value)라고 부릅니다. 속성은 Key:Value의 관계로 이루어져있습니다. 
//Key는 문자열마 가능하고 속성명은 따옴표가 없어도 됩니다. Key에 띄어쓰기가 들어간 경우에는 반드시 따옴표로 감싸줘야 합니다.
//Value는 문자열이어도 되고 숫자여도 되고 객체여도 됩니다. 

console.log(me.firstname); // KIM
console.log(me.lastname); // HYUNMIN
console.log(me["firstname"]); // KIM
console.log(me["lastname"]); // HYUNMIN

var me = {
    name : {
        firstname : "KIM",
        lastname : "HYUNMIN"
    }
}
console.log(me.name.firstname); // KIM
console.log(me);


//      조건문 (if) : if 안의 조건이 true 인 경우 if 조건 안의 코드가 실행되고 if 안의 조건이 false 인 경우 else 안의 코드가 실행됩니다.

var a = 10;
var b = 5;
var c = "answer";
if (typeof c === "string") {
    c = a * b;
}
else {
    c = a - b;
}
console.log(c); 


//      배열 (Array) : [] 로 감싸서 나타내고, 객체 리터럴처럼 안에는 무엇이든지 다 들어갈 수 있습니다. 배열 안에 배열이 들어가도 되고 배열 안에 객체가 들어가도 됩니다. 배열 안에 들어간 것들을 요소(item)라고 부릅니다. 객체의 속성처럼 쉼표로 구분하면 됩니다.

var a = 10;
var b = "apple";
var c = null;
var d = a;
var _array = [a, b, c, d];
console.log(_array[4]);

var _arr = ["HYUNMIN", "KIM", 25];
console.log(_arr[0]); // JavaScript에서는 0이 첫번째이다. -> HYUNMIN
console.log(_arr[2]); // 25
console.log(_arr.length); // 3



/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var me = {
    name : "김현민",
    birth : "1996년",
    college : "계원예술대학교",
    major : "디지털미디어디자인과",
    deepmajor : "프로그래밍반",
    dream : " Developer"
}
var sports = ["축구", "야구", "종합격투기", "F1"];
var player = ["네드베드", "델피에로", "마르키시오", "디발라", "이동국", "이재성"];
var song = ["First Snow", "Encounter", "I don't mind"];
var movie = ["인생은 아름다워", "이터널 선샤인", "마더", "파수꾼", "라라랜드"];

var blank = " ";
var tofriend = "겉모습만 보면 다가가기 힘들게 생겼다는 말을 많이 듣지만 친해지면 구사 언어의 80퍼센트가 드립과 밈일 정도로 편해질 것입니다. 언제나 열려있는 사람입니다. 같은 반이 된 동기 여러분, 편하게 다가와주세요! 물론 저도 다가가겠습니다! 일단 대면강의를 하게 된다면요...\n"
var tofriendlie = "친해지기 싫습니다.\n"
var toprof = "1년동안 열심히 하겠습니다 김용원교수님! 특히나 웹코딩에 관심이 많은만큼 더 많이 물어보고 배우겠습니다. 감사합니다!\n"
var toproflie = "열심히 하지 않겠습니다.\n"

var sen1 = "안녕하세요. 제 이름은 " + me.name + "입니다. " + me.birth + "에 태어나 올해로 " + 2 + 5 + "살입니다.\n";
var sen2 = "현재 " + me.college + blank + me.major + " 2학년 " + me.deepmajor + "에 재학중입니다.\n";
var sen3 = "1학년때 코딩에 흥미를 가지게 되어 " + me.deepmajor + "에 오게 되었습니다. 지금 당장은 Front-End" + me.dream + "가 되고 싶습니다. 그리고 더 나아가 Back-End" + me.dream + "가 될 능력을 갖춰 Full Stack" + me.dream + "가 되고 싶습니다.\n";
var sen4 = "스포츠를 좋아합니다. " + sports + "을 좋아하고 그 중에서도 " + sports[0] + "를 가장 좋아합니다.\n";
var sen5 = "좋아하는 팀은 유벤투스와 전북현대이며 특히 좋아하는 선수는 " + player + "입니다.\n";
var sen6 = "존경하는 인물이자 가장 좋아하는 가수는 " + "B" + "o" + "A" + "이고 BoA의 노래중 " + song + "를 요즘 즐겨 듣습니다.\n";
var sen7 = "또 영화를 아주 좋아하는데 인생영화를 5개 꼽자면 " + movie + "입니다.\n";
if (typeof tofriend === "string") {
    sen8 = tofriend;
}
else {
    sen8 = tofriendlie;
}
if (typeof toproflie === "number") {
    sen9 = toproflie;
}
else {
    sen9 = toprof;
}
var sen10 = ( 2000 + (4 * 5) ) + "년" + blank + 2 ** 2 + "월" + blank + ( (9 / 3) * 7 ) + "일" + blank + me.name + blank + "작성."

console.log(sen1 + sen2 + sen3 + sen4 + sen5 + sen6 + sen7 + sen8 + sen9 + sen10);


/*
안녕하세요. 저는 김현민입니다. 1996년에 태어나 올해로 25살 입니다. 
현재 계원예술대학교 디지털미디어디자인과 2학년 프로그래밍반에 재학중입니다.
1학년때 코딩에 흥미를 가지게 되어 프로그래밍반에 오게되었습니다. 지금 당장은 Front-End Developer가 되고 싶습니다. 그리고 더 나아가 Back-End Developer가 될 능력을 갖춰 Full Stack Developer가 되고 싶습니다. 
스포츠를 좋아합니다. 축구, 야구, 종합격투기, F1을 좋아하고 그 중에서도 축구를 가장 좋아합니다. 
좋아하는 팀은 유벤투스와 전북현대이며 특히 좋아하는 선수는 네드베드, 델피에로, 디발라, 마르키시오, 이동국, 이재성 입니다.
존경하는 인물이자 가장 좋아하는 가수는 BoA 이고 BoA의 노래중 First Snow, Encounter, I don't mind 를 요즘 가장 즐겨 듣습니다.
또 영화를 아주 좋아하는데 인생영화 5개를 꼽자면 인생은 아름다워, 이터널 선샤인, 마더, 파수꾼, 라라랜드 입니다.
겉모습만 보면 다가가기 힘들게 생겼다는 말을 많이 듣지만 친해지면 구사 언어의 80퍼센트가 드립과 밈일 정도로 편해질 것입니다. 언제나 열려있는 사람입니다. 같은 반이 된 동기 여러분, 편하게 다가와주세요! 물론 저도 다가가겠습니다! 일단 대면강의를 하게 된다면요...
1년동안 열심히 하겠습니다 김용원교수님! 특히나 웹코딩에 관심이 많은만큼 더 많이 물어보고 배우겠습니다. 감사합니다!
*/


