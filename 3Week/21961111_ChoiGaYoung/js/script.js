/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다. */
var a = 29;
// 2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
var b = a + 2;
// 3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
var c = 29 % 3;
// 4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
if (b % c == 1){
    console.log("일치합니다.");
}



/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다. */
var user = {};
// 2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
user = {
    name : "최가영",
    greeting : "안녕하세요.",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : 2,
    calss : "D"
};
// 3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
if (typeof user.job === "string") {
    console.log(user.greeting);
}
else {
    console.log(user.name);
}



/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다. */
//숫자
var a = 1;
var b = 2;

//문자
console.log("안녕하세요?") // 안녕하세요?
console.log('반갑습니다!') // 반갑습니다!

//변수
var c = 10;
var d = 20;
console.log(c * d); //200
var c = 50; //재활용 가능
console.log(c * d); //1000

//연산자
console.log(a + b); // 덧셈, 2
console.log(a + 0.2); // 1.2
console.log(a - b); // 뺄셈, 1
console.log(a * b); // 곱셈, 2
console.log(a / b); // 나눗셈, 0.5
console.log(a % b); // 나머지, 1
console.log(a ** b); // 거듭제곱, 1
console.log(a + "안녕하세요"); // 숫자+문자, 1안녕하세요
console.log("가나다라" + "마바사아"); // 문자+문자, 가나다라마바사아

console.log(a > b); // 비교(초과), 1 < 2, true
console.log(a < b); // 비교(미만), 1 < 2, true
console.log(a >= b); // 비교(이상), 1 >= 2, false
console.log(a <= b); // 비교(이하), 1 <= 2, true
console.log(a == b); // 동등, 1 == 2, false
console.log(a === b); // 일치(엄격), 1 == 2, false
console.log(a != b); // 부등(두 값이 다를 경우 참), 1 != 2, true

//데이터타입
/* 
숫자 (Number)
문자 (String) 
불리언 (Boolean) 
존재하지 않는 (값이 없는 undefined, 값은 있는 null)
객체 (Object)
함수 (function)
수식이 성립 안 되는 (NaN)
*/
//type of : 어떤 데이터 타입인지 찾을 수 있다.
console.log(typeof 1); // number
console.log(typeof "가나다"); // string
console.log(typeof true); // boolean

//오브젝트 
var Object = {};
Object = {
    이름 : "최가영",
    성별 : "여자",
    나이 : "21",
    혈액형 : "AB"
}
console.log(Object.혈액형); //AB


//조건문(if)
var e = 5;
var f = 2;
if(e > f){
    console.log("true"); //참일 때 출력
}
else{
    console.log("false"); //조건이 성립되지 않을 때 출력
} // 5 > 2, true

//배열, []을 이용해서 순서로 이용
//var Array = [];
var Array = ["안녕하세요", "반갑습니다", "최가영입니다", "잘부탁드립니다"];
console.log(Array[1]); //0부터 3까지, 순차적으로 나오기에, 1에 해당하는 "반갑습니다"가 출력된다.
console.log(Array[3]); //"잘부탁드립니다" 출력



/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/

// 자기소개
var profile = {
    이름 : "최가영",
    나이 : 21,
    혈액형 : "AB",
    학력 : "계원예술대학교",
    학과 : "디지털미디어디자인학과",
    애완동물 : "고양이",
    첫째 : "삐비니",
    둘째 : "콩이",
    셋째 : "루루"
};

var fav1 = "음악감상";
var fav2 = "영화감상";
var number = "2196" + "1111";
var highschool = "영상" + "제작과";
var cert = 6 + 3;
var netflix = ["종이의집", "마리안", "블랙미러", "블랙썸머"];

//안녕하세요. 제 이름은 최가영이고, 21살, 혈액형은 AB형입니다.
var prf1 = "안녕하세요." + " " + "제 이름은" + " " + profile.이름 + "이고," + " " + profile.나이 + "살, 혈액형은 " + profile.혈액형 + "형입니다.";
//제 고등학교 전공은 영상제작과에 다녔으며, 보유 자격증은 9개입니다.
var prf2 = "제 고등학교 전공은 " + highschool + "에 다녔으며, 보유 자격증은 " + cert + "개입니다.";
//현재 계원예술대학교에 재학하고 있으며, 학과는 디지털미디어디자인학과이고, 학번은 21961111입니다.
var prf3 = "현재 " + profile.학력 + "에 재학하고 있으며, 학과는 " + profile.학과 + "이고, 학번은 " + number + "입니다.";
//제가 키우는 애완동물은 고양이이며, 삐비니와 콩이와 루루 세마리입니다.
var prf4 = "제가 키우는 애완동물은 " + profile.애완동물 + "이며, " + profile.첫째 + "와 " + profile.둘째 + "와 " + profile.셋째 + " 세마리입니다.";
//제 취미는 음악감상과 영화감상인데, 특히 넷플릭스를 자주 이용합니다. 제가 넷플릭스에서 좋아하는 작품은 범죄 드라마 종이의 집, 공포 드라마 마리안과 블랙썸머, 반전 드라마 블랙미러입니다.
var prf5 = "제 취미는 " + fav1 + "과 " + fav2 + "인데, 특히 넷플릭스를 자주 이용합니다. 제가 넷플릭스에서 좋아하는 작품은 범죄 드라마 " + netflix[0] + ", 공포 드라마 " + netflix[1] + "과 " + netflix[3] + ", 반전 드라마 " + netflix[2] + "입니다.";


console.log(prf1 + prf2 + prf3 + prf4 + prf5);
