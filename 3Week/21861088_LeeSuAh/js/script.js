console.log("외부 Javascript 로드")

/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 
console 에 출력되도록 작성합니다.
*/
// Answer 1.
var num1 = 29;
var num2 = num1 + 2; //31
var num3 = num1 % 27; // 2
var num4 = num2 % num3;
if(num4 === 1){
    console.log("일치합니다.")
}


/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 
console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
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
    "name" : "이수아",
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D"
}
if(typeof user.job == "string"){
    console.log(user.greeting);
}else{
    console.log(user.name)
}

/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
//정수 > 딱 떨어지는 숫자
var num5 = 1
console.log(num5+num5); //2
//실수 > 소수점이 있는 수, 현실을 반영한 수
var num6 = 1.5;
var num7 = 2;
console.log(num6+num7); //3.5

//문자(string)
var string1 = "이수아 "
var string2 = "2"
console.log(string1+string2); //이수아 2
console.log(string2+num7); //22

//연산자 (산술)
console.log (num1 + num2); // 더하기 60
console.log (num7 - num2); // 빼기 -29
console.log (num7 * num5); // 곱하기 2
console.log (num7 / num5); // 나누기 2
console.log (num5 % num3); // 나머지 1

//연산자 대입 
num5 = 3; // 왼쪽의 피연산자에 오른쪽 피연산자를 대입

//연산자 비교 (> , >=, == , <=, <)
if(num5 > num6){ //비교연산자로 왼쪽과 오른쪽 크기 비교해서 왼쪽이 더 큼  
    console.log("YES");
}

//연산자 동등
var string3 = "3"
if(num5 == string3){
    console.log("OK");
}else{
    console.log("NO");
} //OK출력

//연산자 일치
if(num5 === string3){ 
    console.log("OKAY"); 
}else{
    console.log("NOPE");
} //NOPE출력

//연산자 부정
console.log(num5 != string3); //false
console.log(num5 !== string3); //true

//데이터 타입
console.log(typeof 1); //number
console.log(typeof num); //string
console.log(typeof true); //Boolean

//오브젝트
var obj = {};
obj = {
    key1 : "이수아",
    key2 : "21861088",
    "key3" : 61088
}
console.log(obj); // {key1: "이수아", key2:"21861088", key3: 21861088}
console.log(obj.key1); //이수아
console.log(obj["key2"]) //21861088
console.log(typeof obj.key2); //string
console.log(typeof obj.key3); //number

//배열
var a = [];
a = ["이수아", 2, 1, 8, "61088", null, true];
console.log(a);// (7)["이수아", 2, 1, 8, "61088", null, true]
console.log(a[0]); //0부터 시작 "이수아"
console.log(a[6]); //true
console.log(a.length); // 7
console.log(a[a.length -3]); //61088

//조건문
if(num5 === string3){
    console.log("true")
}else{
    console.log("false")
} //false

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 
오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

var self = {};
var h = [];
h = ["안녕하세요", "저는", "입니다", "제", "에"]
self = {
    name : "이수아",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    "학번" : "21861088",
    grade : "2학년",
    birth : "1999.06.21",
    class : "프로그래밍"
}

var hobby = [];
hobby = ["그림그리기", "게임하기", "책읽기", "노래부르기", "요리하기"];
var favorite= [];
favorite= ["오마이걸", "레드벨벳", "마라탕", "샌드위치"];
var s = " ";

var fir = (h[0]) + s + (h[1]) + s + (self.학번) + s + (self.name) + (h[2]) + ".  \n " ;
var sec = (h[1]) + s + (self.birth) + (h[4]) + s + "태어났으며" + s + (self.school) + s + (self.major) + "학과" + (h[4]) + s + "다니고" + s + "있습니다. \n";
var thr = (h[1]) + s + (self.grade) + s + (self.class) + "과" + (h[2]) + ". \n";
var four = (h[3]) + s + "취미는" + s + (hobby[0]) + "와" + s + (hobby[1]) + "이며" + s + "그 외로" + s + (hobby[2]) + "," + s + (hobby[3]) + "," + s + (hobby[4]) + "가" 
+ s + "있습니다. \n" ;
if(typeof self.name == 'string'){
        var five = "이 중 제일 자신있는 취미는 요리입니다. \n";
}else{
    console.log("nope");
}
var six = "제가" + s + "제일" + s + "좋아하는 가수는" + s + (favorite[0]) + "과" + s + (favorite[1]) + (h[2]) + ". \n" ;
var sev = "제일" + s + "좋아하는" + s + "요리는" + s + (favorite[2]) + "과" + s + (favorite[3]) + (h[2]) + ". \n"
if(a[1] == 2){
    console.log(fir + sec + thr + four + five + six + sev + "한 학기동안 열심히 하겠습니다! 잘부탁드립니다!");
}else{
    console.log("잘부탁드립니다!");
}
/* 안녕하세요 저는 21861088 이수아입니다.
저는 1999.06.21에 태어났으며 계원예술대학교 디지털미디어디자인학과에 다니고 있습니다.
저는 2학년 프로그래밍과입니다. 
제 취미는 그림그리기와 게임하기이며 그 외로 책읽기, 노래부르기, 요리하기가 있습니다.
이 중 제일 자신있는 취미는 요리입니다.
제가 제일 좋아하는 가수는 오마이걸과 레드벨벳입니다.
제일 좋아하는 요리는 마라탕과 샌드위치입니다.
한 학기동안 열심히 하겠습니다! 잘부탁드립니다!*/
