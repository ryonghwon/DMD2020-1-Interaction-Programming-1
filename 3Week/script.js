/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.

2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다. 

3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.

4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.

// Answer 1.*/
var a = 29;
var b = a + 2;
var c = a % 3;
if ( b % c === 1)
{ console.log( "일치합니다" );}
else 
{ console.log( "불일치합니다" );}





//Quest 2.



/*
1. 'user' 라는변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user = { key :value };

2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.

3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 
"greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 
console에 출력되도록 작성합니다.(조건문의 문법 사용)

var user = 
{  name : "홍연화" ,greeting : "안녕하세요" , job : "학생" , school : "계원예술대학교"
   major :"디지털미디어디자인" , grade : "2" ,class : "D"};
 
if (typeof user.job === "string" ){
    console.log("안녕하세요");
}
else 
{   console.log("홍연화");  }
---------
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


var user = 
{  name : "홍연화" ,greeting : "안녕하세요" , job : "학생" , school : "계원예술대학교" ,
   major : "디지털미디어디자인" , grade : "2" ,class : "D"};
 
if (typeof user.job ==="string"){
    console.log("안녕하세요");
}
else 
{   console.log("홍연화");  }


/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

var a = 10,b = 5;
console.log (a + b);//15
console.log (a - b);//5
console.log (a * b);//50
console.log (a / b);//2
console.log (a % b);//0

var korea = "김치" ,food ="찌게";
console.log (korea + food);//김치찌게
food ="볶음밥"
console.log (korea + food);//김치볶음밥
korea = "계란간장"
console.log (korea + food);//계란간장볶음밥


var a = 4;
var b = 8;
console .log(a + b); // 12
a = 20;
console .log(a + b); // 28
a = a + 30; //50
console .log(a + b); //58
a += 100//150
console .log(a + b); //158

var a = 1; 
var b = 1;
console .log (a ==  b); // true
var a = 1;
var b = 2;
console .log (a ==  b); //false
var a = "one";
var b = "하나 ";
console .log (a ==  b);//false
console .log (a === b);//false

a = 12; 
b = 6;
console .log (a > b); //true
a = 1;
b = 0;
console .log (a < b); // false


var a = 5;
var b;
b = ++a + 1;
console .log (a);//6
console .log (b);//7
var c = 5;
var d;
d = c++ + 1;//대입 먼저  ++  나중
console .log (c);//6
console .log (d);//6


// var object = {};
// var object = { key: value };


var person = {
  name: "홍연화",number: 174, is: true
};
console.log(person.name); //홍연화
console.log(person["name"]);//홍연화

console.log(person.number);//174
console.log(person["number"]);//174

console.log(person.is);//true
console.log(person["is"]);//true


var a = 10;
var b = 5;
var c;
if (a < b) {
console.log("오류");
 c = a * b;//50
 } else if (a === b) { 
   console.log("성공");
  c = a / b; // c = 2
 } else if (a === 5) {
   console.log("오류");
   c = a % b; //c = 0
 } else if (b === 4) {
  console.log("오류");
  
 } else {
   console.log("오류");
   c = a + b;
 }
 console.log(c);


/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.


var a = " 19";
var b ="98"
var c = 23;
// var object = { key: value };
var user = 
{  name : " 홍연화" ,greeting : "안녕하세요" , job : " 학생" , school : "계원예술대학교"
    , grade : "2" ,class : "D" , major : " 프로그래밍반"};
var family =
{
    class : "오남매", major :" 셋째딸"
}
var city =
{
    home : "본가", room : " 천안"
}
var exo =
{
    grade: "인터렉션프로그래밍" ,class :" 수업" , worry: "걱정" , interest : " 흥미도" , good: " 열심히" 
    

}
var corona=
{
    later :" 대면수업" ,school:"학교", see:" 뵙겠습니다!"
}
one = user.greeting + user.major  + user.name+ "입니다 \:\)"
two = "\n올해" + a + b +"년생 " + c  +"살입니다 \n"
three =  family.class +"중"+family.major +"입니다."
four = city.home +"는" + city.room +"이라 지금"+ city.room+"에만 있네요 \:\( \n"
five = exo.grade + exo.class + "처음엔 잘 따라갈수있을까 \n" +exo.worry +"되었지만" +
exo.interest +" 생기고" +exo.good +" 해보겠습니다!!\n"
six ="얼른"+corona.later +"해서 "+corona.school+"에서" + corona.see 
if(typeof a === "number")
{
    console.log ("오류 errrrr");
}
else if (typeof b === "string")
{
    console.log(one+ two + three +four +five+ six ); 
}
else 
{
    console.log ("에러입니다 ");
}










