/*
Quest 1.
1. 변수 a 에 숫자 29를 대입
2. 변수 b 에 숫자 2를 대입 한 후 a(29) + b(2) = 31 숫자가 나온다
3. 변수 c d에 숫자 3을 대입 한 후 a(29) % c(2)  = 2 (나머지값 계산) 
4. 조건문을 통해 a % b == 1(a 와 비를 나눈값이 숫자 1과 동일(TRUE)했을때 아래 arlet가 실행된다.!)
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
if(b / 1 == 1)
{
    console.log("일치합니다!");
}



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
var user = {
     "name" : "최상욱",    // 콤마 필수!!!!! 이거떄문에 30분 동안 진행이 안됐었습니다...
     "greeting" : "안녕하세요",
     "job" : "학생",
     "school" : "계원예술대학교",
     "major" : "디지털미디어디자인",
     "grade" : 2,
     "class" : "D"
}
// 만약 user.job(문자열데이터 타입) 과 문자열데이터 타입이 일치하면 아래 user.greeting 값을 출력
//if(typeof user.job == typeof "String"){ 굳이 typeoof "string"안적어도됨
if(typeof user.job ===  "String"){
     console.log(user.greeting);
     
}
else{
     console.log(user.name);
}
// 만약 user.job(문자열데이터 타입) 과 문자열데이터 타입이 불일치하면 아래 user.name 값을 출력
// if(typeof user.job != typeof Number){
//      console.log(user.name)
// };



/*
JavaScript 연습하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
 var d = 1;
 var e = 2;
 var f = 3;
 var g;
 if (typeof g === "undefined"){//참일때
     g = d * e;

}else{
     c = d + f;
}
console.log(g); // 예상 output : 2 / 콘솔창과 일치

//d와 e 의 타입이 같다면 아래 연산식 실행
if(typeof d == typeof e){
     f = f + "번"   
}
console.log(f); // 예상 output : 3번 / 콘솔창과 일치


var obj;//새로운 객체를 생성
obj = {  
"key1" : 200, 
"key2" : "인터랙션", 
"key3" : 300 
}
if(obj.key1 == 100){ // false 이기 때문에 아래 조건문으로 실행!
     console.log("초코볼")
}
else if(obj.key1 == 200){
     console.log("오레오")//예상 output : 오레오 // 콘솔창과 일치
}
var Array = [obj.key1, obj.key2, obj.key3];
// console.log(Array[3])//예상 output : "인터렉션" //  output : 값 없음 콘솔창과 불일치 이유는 array는 0부터 숫자가 시작함!
   console.log(Array[1]);//예상 output : "인터렉션" // 콘솔창과 일치


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.


aa = "안녕하세요";
bb = "저는";
cc = "계원예술대학교";
dd = 7 * 2 + 1;
ee = "학번";
ff = "(21563089)";
var h;
var i;
yy = [ee, ff]
if(dd === 15){
   h = aa + " "+ bb;
          if(typeof dd != typeof string)
          i = cc + " " + dd;
     }
console.log( h + " " +i + " " + yy[0] + yy[1] +"최상욱입니다.");

// 열심히 하겠습니다~!!