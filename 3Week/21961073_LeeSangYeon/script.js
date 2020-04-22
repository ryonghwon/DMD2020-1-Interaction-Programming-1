console.log("외부 JavaScript 로드");
/*
 문제 풀이.
 */

 /*
 Quest & Answer
 1. 변수를 선언하고 숫자 '29' 를 할당합니다.
 2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
 3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
 4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
 */
 
 //1. 변수 a를 선언하고 숫자 '29' 를 대입
 var a = 29; 
 // 2. 변수 b를 하나 더 선언하고 1 에서 선언한 변수 a 와 +(덧셈 대입)을 이용하여 '31' 이 되도록 코드를 작성.
 var b = a + 2; //console창에 31 출력
 // 3. 변수c 를 하나 더 선언하고 1 에서 선언한 변수a와 %(나머지 연산 대입)을 이용해서 '2'이 할당되도록 코드를 작성.
 var c = a % 3; //console창에 27 출력

 //4. 만약 2 에서 생성한 변수b 를 3 에서 선언한 변수c 로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성.
 if( b % c == 1){ 
     //만약 b를 c으로 나누었을 때 나머지가 1이라면 console에 '일치합니다'를 출력.
     console.log('일치합니다'); 
     //console에 '일치합니다'가 출력 됨!!!!!
 } else { //그 외 나머지가 1이 아닐 시 console에 '불일치 합니다.'를 출력.
     console.log('일치하지 않습니다'); 
     //나머지가 1과 일치하기 때문에 출력되지 않았다...
 }

 /*
Quest 2 & answer
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
/*
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
*/
var user = {
    name : "이상연",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D"
}
/*
데이터 타입 *** 붙은 것 알아두면 좋은 것. 지금 제일 중요한 것.
*/
// Number 숫자 ***
// String 문자열. ***
// Boolean 참/ 거짓. ***
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 = [], {}...
// function 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

//typeof - 데이터의 타입 찾는 방법.
/*
console.log(typeof 100);
console.log(typeof "안녕하세요");
console.log(typeof true);
console.log(typeof false);
*/
//3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 
//문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)

if(typeof user.job == "string"){//만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면
    console.log(user.greeting);//conlsole창에 user 객체 'greeting' key의 값(value)을 출력
    //console에 '안녕하세요'가 출력 됨!!.
}else{//문자가 아니라면 "name" key의 값을 console에 출력
    console.log(user.name);
}//user 객체 'job' 값이 문자열(string)이기 때문에 출력되지 않음.
//다른 데이터타입 'Number'로 바꿨을 때 user 객체 'name' 값 "이상연"으로 출력 되는 것을 확인 할 수 있었음.

/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

//숫자(Number),
var a = 25;
console.log(a);

//문자(String)
var a = "이상연최고";
console.log(a);
console.log("안녕하세요1");
console.log('안녕하세요2');
console.log("안녕하세요3");
console.log("\"안녕하세요\"");

// \n - 정규식 줄바꿈.
console.log("안녕하세요.\n반갑습니다.\n저는 이상연입니다.");

//string 연산 
console.log("이상연" + "최고");
console.log("이상연" + " 최고");
console.log("이상연" + " " + "최" + "고" + "!");


/*
 변수 선언
// 형식.
/*
var variable; //선언만 되어 있고 값이 없는 상태 - 
console.log(variable); //undefined
variable = "value"; //변수에 값(문자열"value")을 대입.
console.log(variable);//"value"
*/
//변수(variable)
var l; //선언만 되어 있고 값이 없는 상태이기 때문에 
console.log(l);//undefined이 console에 출력 됨!

var l = "이상연최고";//변수에 값(문자열 "이상연최고")를 대입 
console.log(l);//"이상연최고"가 console에 출력 됨.

//산술 연산자( + - * / %)
var a = 4;
console.log(a + 10); // console에 14 가 출력됨
console.log(a - 2); //  console에 2 가 출력됨
console.log(a * 5); //  console에 20 이 출력됨  
console.log(a / 2); //  console에 2 가 출력됨
console.log(a % 3); //  console에 1 이 출력됨

//대입 연산자(=,+=,=+,*=,/=,%=)
//= : 왼쪽 값에 오른쪽 값을 대입 
var s = 25
//+= : 두 값을 더한 후 그 결과값을 왼쪽 값에 대입.  
console.log(s += 4)
//-= : 두 값을 뺀 후 그 결과값을 왼쪽 값에 대입. 
console.log(s -= 4)
//*= : 두 값을 더한 후 그 결과값을 왼쪽 값에 대입. 
console.log(s *= 5)
// /= : 두 값을 나눈 후 그 결과값을 왼쪽 값에 대입.
console.log(s /= 5)
//%= : 두 값을 나눈 나머지 값을 왼쪽 값에 대입.
console.log(s %=10)


//비교 연산자(==, !=, >, <, >=, <=)

var y = 25 
//== : 왼쪽 값과 오른쪽 값이 같으면 true
console.log(y == 25) // 값이 같으므로 true.
//!= : 왼쪽 값과 오른쪽 값이 같지 않으면 true
console.log(y != 24) // 값이 같지 않으므로 true.
//> :  왼쪽 값이 오른쪽 값보다 크면 true
console.log(y > 30) // 오른쪽 값이 더 크므로 false.
//< :  왼쪽 값보다 오른쪽 값이 크면 true
console.log(y < 30) // 오른쪽 값이 더 크므로 true.
//>= : 왼쪽 값이 오른쪽 값보다 크거나 같으면 true
console.log(y >= 20) // 왼쪽값이 더 크거나 같으므로 true.
//<= : 왼쪽 값이 오른쪽 값보다 작거나 같으면 true
console.log(y <= 20) // 왼쪽값이 더 크므로 false.

//일치 연산자, 동등연산자 ==
/*
var a = "Hello";
var b = "World";
console.log(a == b); //"Hello" == "World" - false
a = "World";
console.log(a == b); //"World" == "World" - true
a = 1;
b = "1";
console.log(a == b); //1 == "1" - true ?
//동등 연산ㄴ자는 숫자 타입을 문자열과 비교하면 문자열로 인식.

// 일치 연산자.
// === 엄격하게 데이터 타입까지 구분해서 비교.
//console.log(a === b); //1 === "1" - fales
console.log(true == 1); //true
console.log(true === 1); //false
*/
var a = 1;
var b = 1;
var c = '1';
console.log(a == b); //1 == 1 - true
console.log(b == c); //1 == 1 - true
console.log(a === c); // === 1 - false
console.log(true == 1); //true
console.log(true === 4); //false


//부정 연산자
// !=, !==
//!= : 동등연산자 부정, !== : 일치연산자 부정 
var a = 1;
var b = "1";
console.log(a != b); //1 != 1 - false
console.log(a !== b); //1 !== 1 - true
console.log(a !== 10); //1 !==10 - true


//데이터 타입
// Number 숫자 ***
// String 문자열. ***
// Boolean 참/ 거짓. ***
// undefined 값이 정의되지 않은 상태.
// null 값은 적용하지만 비어있는 상태.
// Object 객체 = [], {}...
// function 함수 - 기능을 만드는 박스.
// NaN 수식이 성립되지 않은 상태.

//typeof - 데이터의 타입 찾는 방법.

console.log(typeof 25); //Number - 25 출력
console.log(typeof "이상연최고"); //string - "이상연최고" 출력
console.log(typeof true); // Boolean- true 출력
console.log(typeof false); // Boolean- false 출력

//오브젝트(Object)
/*
Object - 객체.
색인이 포함된 데이터들의 집합.
*/
var lsy = {}; // 새로운 객체를 생성.
lsy = {
    name : "이상연",
    favorite : "죠르디",
    hate : "가지"
}
console.log(lsy);
console.log(lsy.name);//name 값 출력
console.log(lsy["name"]); //위와 동일하게 name 값 출력
console.log(lsy.favorite); //favorite 값 출력
console.log(typeof lsy.hate); //string


//배열(Array)
var _arr = []; //새로우 배열 생성.
_arr = ["펩시", 2, "3", "안녕하세요", "죠르디", null, false];
// 0 1 2 3 4 5
//색인이 없고 순서로 찾을 수 있다.
console.log(_arr[0]);//"펩시"
console.log(_arr[4]);//죠르디
console.log(_arr.length)//전체 담기 데이터의 길이( 개수)); 7
console.log(_arr[_arr.length - 1]);//배열 객체의 마지막에 해당하는 값.

//조건문(if)
var a = "이상연최고";
console.log(typeof a);
if(a == "죠르디귀여워..."){
    console.log(a)
}
else{
    console.log("어려워...")

}

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var mymy = {}; // 새로운 객체를 생성.
mymy = {
    name : "이상연",
    university : "계원예술대학교",
    major : "디지털미디어디자인과",
    major2 : "프로그래밍",
    affil : "D",
    grade : 2,
}
favorite = ["죠르디", "민트초코" ];
hate = ["가지", "그린티" ];
fam = ["엄마,","아버지,","큰오빠,","작은오빠,", "쁨이"];
bbm = ["이쁨", "토이푸들", "3개월", "앉아", "엎드려"]
insta = ["SNS", "인스타그램", "@xvibim"];
space = [" "];
hello = "smile";

var _lsy1 = "안녕하세요. " + mymy.name + "입니다. \n";
var _lsy2 = "저는" + " " + mymy.university +  "에 재학 중이며" + space + mymy.major + "에서" + space + mymy.major2 + "을 전공하고 있습니다. \n";
var _lsy3 = "20" + (10 + 9) + "년도에" + " " + "입학" + " " + "했으며" + " " + "학번은" + 2196 + "1073" + " " + "입니다.";
var _lsy4 = "저는" + " " + "현재" + " " + mymy.grade + "학년" + " " + mymy.affil + "반" + "에 소속되어 있으며" + " " + "과대를 맡고 있습니다.\n";
var _lsy = "저는 " + "니니즈의 " + favorite[0] + "를 좋아하고 " + favorite[favorite.length - 1] + "를 좋아합니다." + space + "그리고 " + hate[0] + "와 " + hate[hate.length - 1] + "를 싫어합니다. \n";
var _lsy5 = "저의" + " " + "가족 구성원은" + " " + fam[0]  +  fam[1]  + fam[2] + " " + fam[3] + " " + fam[4] + "로 구성되어 있습니다.\n";
var _lsy6 = "요즘 저의 관심사는" + space + fam[4] + "입니다." + fam[4] + "는" + space + bbm[1] + "이고" + " " + "이제 막 " + bbm[2] + "이 되었습니다. \n";
var _lsy7 = fam[4] + "의 풀네임은" + space + bbm[0] + "이고 " + "이름처럼 예쁘고 귀엽지만 그렇지 못한 태도를 가지고 있습니다." + " " + "그래도 요즘" + space + bbm[3] + space + bbm[4] + "는 할 줄 압니다. \n";
var _lsy8 = fam[4] + " 사진을 " + insta[0] + " " + insta[1] + "에 업로드 하는 것이 요즘 저의 취미 입니다. " + insta[2] + "를 팔로우 하시면 " + "귀여운 " + fam[4] + space + "사진을 보실 수 있습니다. \n";
if(hello == "smillllllle"){
    console.log("웃으며 안녕")
}else{
    console.log(_lsy1 + _lsy2 + _lsy3 + _lsy4 +_lsy + _lsy5 + _lsy6 +_lsy7 + _lsy8);

}
/* 안녕하세요. 이상연입니다. 
저는 계원예술대학교에 재학 중이며 디지털미디어디자인과에서 프로그래밍을 전공하고 있습니다. 
2019년도에 입학 했으며 학번은21961073 입니다.저는 현재 2학년 D반에 소속되어 있으며 과대를 맡고 있습니다.
저는 니니즈의 죠르디를 좋아하고 민트초코를 좋아합니다. 그리고 가지와 그린티를 싫어합니다. 
저의 가족 구성원은 엄마,아버지,큰오빠, 작은오빠, 쁨이로 구성되어 있습니다.
요즘 저의 관심사는 쁨이입니다.쁨이는 토이푸들이고 이제 막 3개월이 되었습니다. 
쁨이의 풀네임은 이쁨이고 이름처럼 예쁘고 귀엽지만 그렇지 못한 태도를 가지고 있습니다. 그래도 요즘 앉아 엎드려는 할 줄 압니다. 
쁨이 사진을 SNS 인스타그램에 업로드 하는 것이 요즘 저의 취미 입니다. @xvibim를 팔로우 하시면 귀여운 쁨이 사진을 보실 수 있습니다. 
*/