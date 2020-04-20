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
var a = 29;
var b = a + 2;
var c = a % 9;
if(b % c == 1){
    console.log('일치합니다.');
}


/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 
출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
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
    name : "윤진",
    greeting : "안녕하세요",
    job : "학생",
    school : "계원예술대학교",
    major : "디지털미디어디자인",
    grade : "2",
    class : "D"
};

if(user.job = typeof string){
    console.log(user.greeting);
}else{
    console.log(user.name);
}



/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 
데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.
var x = 98;
var y = 4;
var z = "practice"

//산술 연산자
console.log(x + y); // 98 + 4 = 102
console.log(x - y); // 98 - 4 = 94
console.log(x * y); // 98 * 4 = 392
console.log(x / y); // 98 / 4 = 24.5
console.log(x % y); // 98 % 4 = 2
console.log(x + z); // 98practice
console.log((x % y) + x); // (98 % 4) + 98 = 100

//비교 연산자 
console.log(x == y); // false
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false

//동등 연산자
var q = "Ice";
var w = "Americano";
console.log(q == w); // false
q = "Americano";
console.log(q == w); // true
q = 1;
w = "1";
console.log(q == w); // true (동등 연산자는 숫자타입을 문자열과 비교하면 문자열로 인식한다.)

//일치 연산자
console.log(q === w); // false (일치 연산자는 엄격하게 데이터타입까지 구분해서 비교한다.)

//부등(부정) 연산자
var e = 3;
var r = 3;
console.log(e != r); // false
console.log(e == r); // true
e = 4;
console.log(e != r); //true
console.log(e == r); // false

//Object 객체
var cafe={
    coffee : "americano",
    tea : "milk tea",
    cake : "cheeze cake"
};
console.log(cafe); // 위의 항목과 동일
console.log(cafe.tea); // milk tea
console.log(typeof cafe.cake); // string

//Array 배열 객체
var arr = [1, 2, "3", "hi", null]; //색인이 없고 순서로 찾을 수 있다.
console.log(arr); // 위의 항목과 동일
console.log(arr[0]); // 1 
console.log(arr[3]); // hi
console.log(arr.length); // 5 //전체 담긴 데이터의 길이(개수)
console.log(arr[arr.length - 1]); // null //배열 객체의 마지막에 해당하는 값

//데이터 타입
console.log(typeof 98); // number
console.log(typeof "hi" ); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean

//if 조건문
if(x > y){
    console.log("true")
}else{
    console.log("false")
};

if(typeof x == typeof y){
    console.log("true")
}else{
    console.log("false")
};



/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var me = {
    name : "윤진",
    greeting : "안녕하세요",
    home : "서울시",
    birthday : "98.04.16",
    age : "23", 
    major : "디지털미디어디자인과",
    grade : "2학년",
    class : "프로그래밍"
};
var fav = {
    hobby : "필름 카메라로 사진찍기, 누워서 노래듣기",
    singer : "검정치마, Childish Gambino, Jhene Aiko",
    food : "떡볶이, 피자, 밀크티",
    animal : "고양이"
};
var one = (me.greeting) + " 저는 " + (me.name) + "입니다. \n";
var two = "저는 " + (me.home) + "에서 살고 있고, 출생년도는 " + (me.birthday) + "이고 올해 23살이 되었습니다. \n";
var three = "계속 미대입시를 해왔지만 결국 정시 비실기로 19학번으로 " + (me.major) + "에 입학했습니다.\n";
var four = "1학년 때 여러과목을 배우다가 그 중 제일 흥미로웠던 " + (me.class) +"을 " + (me.grade) + " 세부전공으로 선택했습니다. \n";
var five = "저의 취미는 " + (fav.hobby) + "이고, 좋아하는 가수는 " + (fav.singer) + "입니다. \n";
var six = "좋아하는 음식은 " + (fav.food) + "이고 " + (fav.animal) + "를 좋아하지만 키우진 않습니다. 하하 \n";
var seven = "아직 초반이라 낯설고 복잡하기도 하지만 세부전공으로 프로그래밍을 선택한 만큼 열심히 배워보겠습니다. 잘 부탁 드립니다! ";

console.log(one + two + three + four + five + six + seven);

//안녕하세요 저는 윤진입니다.
//저는 서울시에서 살고 있고, 출생년도는 98.04.16이고 올해 23살이 되었습니다.
//계속 미대입시를 해왔지만 결국 정시 비실기로 19학번으로 디지털미디어디자인과에 입학했습니다.
//1학년 때 여러과목을 배우다가 그 중 제일 흥미로웠던 프로그래밍을 2학년 세부전공으로 선택했습니다.
//저의 취미는 필름 카메라로 사진찍기, 누워서 노래듣기이고, 좋아하는 가수는 검정치마, Childish Gambino, Jhene Aiko입니다.
//좋아하는 음식은 떡볶이, 피자, 밀크티이고 고양이를 좋아하지만 키우진 않습니다. 하하
//아직 초반이라 낯설고 복잡하기도 하지만 세부전공으로 프로그래밍을 선택한 만큼 열심히 배워보겠습니다. 잘 부탁 드립니다!