/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를/ 3(순서) 에서 선언한 변수로/ 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
var a = 29;
var b = a + 2;
var c = a % 3;
if(b % c == 1){
console.log('일치합니다')
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
var user = {
    "name" :  "이현준",
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school": "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class":"D",
    "key" : "value"
};
//user.job;
//user["job"];
if(typeof user["job"] == "string")
{
console.log(user.greeting);
}else
{
console.log(user.name);
}



/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
//숫자 (Number)
console.log(26); //26

//문자 (String)
console.log("문자(String)"); //문자(String)
/*
문자열(String) 연산
\n -> 정규식 줄바꿈.
문자열의 길이. - 문자열이 끝난 부분에 .length (개수)
*/  
console.log("안녕하세요." + " " + "\"이현준\"입니다.\n잘부탁드립니다.");  //안녕하세요. "이현준"입니다. 
console.log("안녕하세요.".length); //6



/*
변수(variable) 
var varialbe; //선언만 되어 있고 값이 없는 상태 - undefined.
console.log(varialbe); // undefined
varialbe = "value"; //변수에 값(문자열 "value")을 대입. 
console.log(varialbe); //"value
*/


//연산자
//1. 산술 연산자 : +, -, *, /, % 각각 더하기, 빼기, 곱하기 나누기, 나머지
console.log (1 + 1);  //2
console.log (1 - 1);  //0
console.log (1 * 2);  //2
console.log (6 / 2);  //3
console.log (7 % 2);  //1

//2. 대입 연산자 : d에 1의 값을 대입
var d; 
d = 1;  
console.log(d);  //1

//3. 비교 연산자 : <, >, <=, >= 값이 큰지 작은지 같은지를 비교
console.log(1 < 2);  //true
console.log(1 > 2);  //false
console.log(1 <= 2);  //true
console.log(1 >= 2);  //false
//4. 동등 연산자 : 두 값이 데이터 타입과 상관없이 일치하면 true or false
console.log(1 == "1");  //true
//5. 일치 연산자 : 데이터타입까지 모두 비교하여 정확히 일치하면 true or false
console.log(1 === "1"); //false
console.log(1 === 1);  //true

/*
Data Type - 데이터 타입.
*/
// Number 숫자. ***
// String 문자열. ***
// Boolean 참 / 거짓. ***
// underfined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 -> [], {} ...
// Function 함수 -> 기능을 만다는 박스.
// NaN 수식이 성립되지 않은 상태.

// typeof -> 데이터의 타입 찾는 방법.
console.log;(typeof 100); //number
console.log;(typeof "안녕하세요"); //string
console.log;(typeof true); //boolean
console.log;(typeof false); //boolean

//오브젝트(Object)
var _object = 
{
//"항목" : "값" 을 의미
"name" :  "이현준",
"greeting" : "안녕하세요",
/*
Object -> 객체.
색인(key)이 포함된 데이터들의 집합.
*/
// var _obj = {}; //새로운 객체를 생성.
// _obj = {
//     key1 : "value1",
//     key2 : "value2",
//     "key3" : 300
// }
// console.log(_obj);
// console.log(_obj.key1); //각 항목의 값을 찾기. value1
// console.log(_obj["key1"]); //위와 동일. value1
// console.log(typeof _obj.key2); //string
// console.log(typeof _obj.key3); //number
}

/*
Array -> 배열 객체. ***
*/
// var _arr = []; //새로운 배열 생성.
// _arr = [1, 2, "3", "안녕하세요", null, true];
// console.log(_arr);
// // 0 1 2 3 4 5 (0부터 시작)
// //색인이 없고 순서로 찾을 수 없다.
// console.log(_arr[0]); //1
// console.log(_arr[4]); //null
// console.log(_arr.length); // 전체 담기 데이터의 길이(개수) 6
// console.log(_arr[_arr.length - 1]); //배열 객체의 마지막에 해당하는 값.
var a = 1, b = 2, c = 3,
_arr = [a, b, c];
console.log(_arr[2]);  //3

//조건문(if)  if 안의 조건이 true 인 경우 if 조건 안의 코드가 실행, false 일 경우 else 안의 코드가 실행
if(2 > 3){
console.log ("2 < 3" ) //false -> else로 출력 or true 이면 출력
}else{
console.log("2 > 3") //true 출력 / false면 출력 x
}


/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var about = 
{
"birth" : "95년 09월 29일",
"name" : "이현준",
"major" : "프로그래밍",
"grade" : "2학년",
"quiet" : "조용한",
"funny" : "재밌는"
}
hobby = {
"hobby" : "취미" ,
"game" : "게임" ,
"music" : "음악" ,
"balling" : "볼링"
}
plan = {
"graduate" : "졸업",
"plan" : "취업"
}
study = {
"webpage" : "웹 페이지",
}
intro_01 = "안녕하세요. 저는 " + about["birth"] + "에 태어난 " + about["name"] + "입니다.\n"
intro_02 = "저는 조금 " + about["quiet"] + "성격 이고 친해지면 " + about["funny"] + "스타일입니다.\n"
intro_03 = hobby["hobby"] + "는 " + hobby["game"] + ", " +hobby["music"] + ", " +hobby["balling"] + "입니다.\n"
intro_04 = "특색있는 "+ study["webpage"] + "를 만들어보고 싶어서 " + about["major"] + "을 선택하게 되었습니다.\n"
intro_05 = about["grade"] + " 재학 중 이며, 작년 2학기에 복학 했습니다.\n"
intro_06 = plan["graduate"] + " 이후 " + plan["plan"] + "을 바로 했으면 좋겠고,\n" + "계획하고 있는 사업이 잘 되면 자영업도 해보고싶습니다.\n"
intro_07 = "이해가 바로 되진 않지만 최대한 노력해 보겠습니다.\n"
intro_08 = "잘 부탁드립니다. 감사합니다!";

if("자기소개".length < 9){
console.log(intro_01 + intro_02 + intro_03 + intro_04 + intro_05 + intro_06 + intro_07 + intro_08);
}