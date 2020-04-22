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

// 1. 변수를 선언하고 숫자 '29' 를 할당합니다.
var a = 29;
// 2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
var b = a + 2; //console.log(b); -> 31
//3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
var c = a % 9; //console.log(c); -> 2
//4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
if (b % c == 1){
    console.log("일치합니다");
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

//1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user = {};
//2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
user = {
    name : "황재연",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}
//3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
if(typeof user.job == "string"){
    console.log(user.greeting)
}else{
    console.log(user.name)
}

/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

var a = 4;
var b = 2;
var c = 4;

console.log(a); // 4
console.log(b); // 2

console.log(a + b); // 6
console.log(a - c); // 0
console.log(a * b); // 8
console.log(a / c); // 1
console.log(a % b); // 0

if(a > b){
    console.log(true)
}else{
    console.log(false)
}
// a(4)가 b(2)보다 크면 true 출력, 작으면 false 출력 -> a(4)가 b(2)보다 크기 떄문에 true 출력

if(b == c) {
    console.log(true)
}else{
    console.log(false)
}
// b(2)가 c(4)와 같으면 true 출력, 다르면 false 출력 -> b(2)와 c(4)는 다르기 때문에 false 출력

var d = "황재연입니다.";
var e = "잘부탁드립니다.";
var f = " ";
console.log(d + e); //황재연입니다.잘부탁드립니다.
console.log(d + f + e); //황재연입니다. 잘부탁드립니다.
console.log("황재연입니다. \n 잘부탁드립니다."); //황재연입니다. (줄바꿈) 잘부탁드립니다.

var _car = {
    korea : "HYUNDAI",
    Germany : "BMW",
    Country : 2
}
console.log(_car); //{Korea: "HYUNDAI", Germany: "BMW", Country: 2}
console.log(_car.korea); //HYUNDAI
console.log(typeof _car.Germany); //string
console.log(typeof _car.Country); //number

var _girlgroupe = ["Lovelyz", "Omygirl", "Gfriend", 3];
console.log(_girlgroupe); //["Lovelyz", "Omygirl", "Gfriend", 3]
console.log(_girlgroupe[0]); //Lovelyz
console.log(_girlgroupe[2]); //Gfriend
console.log(_girlgroupe.length); //4
console.log(_girlgroupe[_girlgroupe.length - 1]); //3

/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

Hwang = {
    name : "황재연",
    greeting : "안녕하세요.",
    school : "계원예술대학교",
    major : "디지털미디어디자인과",
    major2 : "프로그래밍",
    birth : "1997년 6월 7일",
    fin : "감사합니다"
}

var army = ["운전병", "가평", "전역"];

var space = " ";

var favorite = ["빵", "초밥", "차", "여행", "비행기"];

var hob = {
    hob1 : "제빵",
    hob2 : "비행시뮬레이션",
    hob3 : "디자인"
}

var _especially = ["유료기체", "장비", "애드온"];

var int1 = (Hwang.greeting) + (space) + (Hwang.school) + (space) + (Hwang.major) + "에 재학중인" + (space) + (Hwang.name) + "입니다. \n";
var int2 = "저는" + (Hwang.birth) + "에 태어났고," + "좋아하는건" + (space) + (favorite) + "입니다. \n";
var int3 = "취미는" + (space) + (hob.hob1) + "과" + (space) + (hob.hob2) + "이며" + (space) + "특히" + (space) + (hob.hob2) + "를 좋아합니다 \n";
var int4 = "오죽하면" + (space) + "알바비가 들어오면" + (space) + (_especially) + "에 거의 다 쓸정도입니다 \n";
var int5 = (Hwang.school) + "에 입학한 계기는" + (space) + (army[1]) + "에서" + (space) + (army[0]) + "으로 복무하던 중" + (space) + (army[2]) + "을 앞두고 진로를 고민하면서 \n";
var int6 = (hob.hob3) + "을 좀 더 배우고 싶은 고민에 정보를 찾았고" + (space) + (Hwang.school) + (space) + (Hwang.major) + "가 본인이 원했던 학교임을 알고 입학했습니다. \n"
var int7 = "수업 중" + (Hwang.major2) + "과목에 흥미를 느껴 세부전공까지" + (Hwang.major2) + "을 선택했습니다. \n"
var int8 = (Hwang.school) + "를 다니는 동안" + (Hwang.major2) + "관련 지식을 많이 습득하고 싶습니다." + (space) + (Hwang.fin);

alert("경고! TMI 주의");
console.log(int1 + int2 + int3 + int4 + int5 + int6 + int7 + int8);

//안녕하세요. 계원예술대학교 디지털미디어디자인과에 재학중인 황재연입니다.
//저는 1997년 6월 7일에 태어났고, 좋아하는건 빵, 초밥, 차, 여행, 비행기입니다.
//취미는 제빵과 비행시뮬레이션이며 특히 비행시뮬레이션을 좋아합니다.
//오죽하면 알바비가 들어오면 유료기체, 장비, 애드온에 거의 다 쓸정도입니다.
//계원예술대학교에 입학한 계기는 가평에서 운전병으로 복무하던 중 전역을 앞두고 진로를 고민하면서
//디자인을 좀 더 배우고 싶은 고민에 정보를 찾았고 계원예술대학교 디지털미디어디자인과가 본인이 원했던 학교임을 알고 입학했습니다.
//수업 중 프로그래밍과목애 흥미를 느껴 세부전공까지 프로그래밍을 선택했습니다.
//계원예술대학교를 다니는 동안 프로그래밍 관련 지식을 많이 습득하고 싶습니다. 감사합니다 