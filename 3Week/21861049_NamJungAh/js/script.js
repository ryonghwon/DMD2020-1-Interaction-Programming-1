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

var n1=29;
//1. 변수를 선언하고 숫자 '29' 를 할당 => 완료
console.log(n1);

var n2=3;
//2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당 => 완료
console.log(n1+n2);

var n3=3;
//3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당 => 완료
console.log(n1%n3);

//4. 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
n3=2;
if (n2%n3==1){
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

//1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다. => 완료
//2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다. => 완료

var user = {}; //새로운 객체를 생성
user ={
    name : "남정아",
    greeting : "안녕하세용",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    class : "D"
}

console.log(user);

/*3. 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 
"greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용) => 완료

아 객체 생성할때 string 만 ""표시를 해야하는데 number까지 ""표시를 해놔서 한참동안 오류랑 씨름했네요 ㅋㅋㅋㅋㅋㅋ
*/

console.log(typeof user.job);

if(typeof user.job=="string"){
    console.log(user.greeting);
}else if(typeof user.job=="number"){
    console.log(user.name);
}


/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
console.log(20+10);
//== 동등연산자
var a=1;
var b=1;
console.log(a==b); //1 == 1 - true

// > 초과연산자
a=3;
b=-1;
console.log(a>b); //3 > -1 - true

// < 미만연산자
a=3;
b=-1;
console.log(a<b); //3 > -1 - false

// >= 이상연산자
a=2;
b=2;
console.log(a >= b); // true

// >= 이하연산자
a=3;
b=2;
console.log(a >= b); // true

var a="hellow", b="world";
console.log(a==b);
a="world";
console.log(a==b);

a=1;
b="1";
console.log(a==b) //타입이 다르지만 true라고 나온다. => 동등 연산자는 숫자 타입을 문자열과 비교하지 못한다.

var _obj ={}; //새로운 객체를 생성
_obj ={
    key1 : "value1",
    key2 : "value2",
    key3 : "300"
}
console.log(_obj);
console.log(_obj.key1);
console.log(_obj["key1"]);
console.log(typeof _obj.key2);
console.log(typeof _obj.key3);

/*
Array - 배열 객체
*/

var _arr = []; //새로운 배열  생성
_arr = [1,2,"3", "안녕하세요", null, true];

//색인이 없고 순서로 찾을 수 있다.
console.log(_arr[0]); 
console.log(_arr[4]); 
console.log(_arr.length); //전체 담기 데이터의 길이(개수); 6

/*
if - 조건문
 */

var a=10;
var b=5;
var c;
console.log(typeof c); //undefined.
if(typeof c ==="undefined"){
   c=a*b; 
}else{
    c=a+b;
}console.log(c);

c=100;
console.log(typeof c); //number.
if(typeof c ==="undefined"){
   c=a*b; 
}else{
    c=a+b;
}console.log(c);


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/

// 자기소개.

/*안녕하세요 저는 98년생인 23살 2학년 D반 남정아입니다. 저는 유튜브 보면서 뒹구는걸 좋아해요.
1년을 휴학하고 돌아왔는데 코로나 때문에 온라인 수업을 하게 된 것은 너무 슬프지만 그래도 열심히 공부하며 무사히 졸업하고 싶습니다.
앞으로 잘 부탁드립니다!*/

//자기소개 배열 생성
var talk = {
    hi:"안녕하세요", 
    bye:"잘 부탁드립니다"};

var info = [
    myname="남정아",
    mybirth=98,
    myage=23,
    mygrade=2,
    myclass="D",
    myhobby="youtube",
];
var story= {
    myrest:1, 
    myreason:"휴학", 
    pandemic:"코로나", 
    mystudy:"공부",     
    mygraduation:"졸업"};

console.log(talk.hi+" 저는 "+info[1]+"년생 "+info[2]+"살 "+info[3]+"학년 "+info[4]+"반 "+info[0]+"입니다.");
console.log(story.myrest+"년을 "+story.myreason+"하고 돌아왔는데 "+story.pandemic+" 때문에 온라인 수업을 하게 된것은 너무 슬프지만");
console.log("그래도 열심히"+story.mystudy+"하며 무사히"+story.mygraduation+"하고 싶습니다.");
console.log("앞으로 "+talk.bye);


