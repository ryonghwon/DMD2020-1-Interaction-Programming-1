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

//1. 변수를 선언하고 숫자 '29' 를 할당합니다.
var a = 29;

//2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
var b = a + 2 ; //31

// 3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
var c = a % 27 ; //2

// 4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
if ( 31 % 2 == 1 ) ;
console.log ( "일치합니다" ) ;


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
// 1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
var user =  {} ;

// 2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
user = {
    name : "김소여" ,
    greeting : "안녕하세요" ,
    job : "학생" , 
    school : "계원예술대학교" ,
    major : "디지털미디어디자인" ,
    grade : 2 ,
    class : "D" 
    }

    // 3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고,
    // 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)
    if ( typeof user.job == "string" ){
    console.log ( user.greeting )
    }
    else{
        console.log ( user.name )
    };


/*
JavaScript 연습하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등에 대해 익히고 연습합니다.
2. 값은 console.log() 를 이용하여 출력합니다.
3. 자신이 연습 작성한 코드 실행 출력 시 예상되는 값은 주석을 이용하여 작성합니다.
*/
// 연습.

var a = 99 ;
var b = 23 ;
console.log ( a + b ); //합 : 122
console.log ( a - b ); //차 : 76
console.log ( a * b ); //곱 :2277
console.log ( a / b ); //몫 : 4.304347826086956
console.log ( a % b ); //나머지 : 7

if ( a > b )
console.log ( "true" )
else
console.log ( " false" ); // a가 b보다 큰 수이므로 "true"가 출력된다.



var c = "야옹야옹" ;
var d = " 고양이" ;
console.log ( c + d ) ; //야옹야옹 고양이
console.log("야옹야옹\n고양이") ; // \n <<정규식 줄바꿈 

console.log(typeof a); //number
console.log(typeof c); //string

var flower = {
    red : "rose" ,
    yellow : "sunflower" ,
    violet  : "lavender" ,
    howmany : 3
    };

    console.log ( flower ) ; //오브젝트 전체 출력
    console.log ( flower.red ); // rose 출력

    var week = [ "monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday" , 7 ]; 
console.log( week[0]); //monday
console.log(week[4]); //friday
console.log(week.length) //8
console.log(week[week.length - 1]); //7
    

/*
자기소개하기.
1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.

me = {
    name : "김소여" ,
    greeting : "안녕하세요?" , 
    school : "계원예술대학교" ,
    major1 : "디지털미디어디자인과" ,
    major2 : "프로그래밍" ,
    birthyear : 99 ,
    birthday : "11월 29일" 
    }

    var fruit = "오렌지" ;
    var age = 22 ;
    var home = "화성시" ;

    var singer = [ "오마이걸" , "여자친구" , "러블리즈" ];
    var hob = {
        hob1 : "드로잉" ,
        hob2 : "게임" ,
        hob3 : "노래부르기"
        }

    var fir = (me.greeting) + "제 이름은 " + (user.name) + "입니다! \n" ;
    var sec = "저는 " + (me.birthyear) + "년에 태어난 " + (age) + "살이고요, " + "생일은 " + (me.birthday) + "입니다. \n"
    var thi = "어렸을 때부터 그림그리기도 좋아했고 컴퓨터에도 관심이 많았던 저는 스무살에 " + (me.school) + " " + (me.major1) + "에 입학했습니다. \n"
    var fou = (me.major2) + "은 고등학생 때까지 저에게 낯선 학문이였지만 1학년 때 배워보고 너무 재미있어서 세부전공으로 택하게 되었습니다. \n"
    var fif = "저는 " + (home) + "에서 왔습니다." + "제 취미는 " + (hob.hob1) + "," + (hob.hob2) + "," + (hob.hob3) + "입니다.\n" + "그 중에서도 요즘은 " + (hob.hob3) + "을 즐겨합니다.\n"
    var six = "제가 좋아하는 것을 소개하겠습니다.\n" + "저는 요즘 과일 중에 " + (fruit) + "가 제일 좋습니다.거의 매일 먹어요. \n"
    var sev = "좋아하는 가수는 " + ( singer[0]) + "," + ( singer[1]) + "," + ( singer[2]) + "입니다. \n청순하면서도 힘있는 걸그룹 노래를 굉장히 좋아합니다. \n"
    var eig = "여러가지를 연습하고 써보고 싶어서 뭔가 많이 썼더니 TMI가 많아졌네요!\n어려운 감도 없지않아 있지만 제가 하고싶어서 \n결정한 길인만큼열심히, 그리고 즐겁게 배우겠습니다!"

    console.log ( fir + sec + thi + fou + fif + six + sev + eig );

// 안녕하세요?제 이름은 김소여입니다! 
// 저는 99년에 태어난 22살이고요, 생일은 11월 29일입니다. 
// 어렸을 때부터 그림그리기도 좋아했고 컴퓨터에도 관심이 많았던 저는 스무살에 계원예술대학교 디지털미디어디자인과에 입학했습니다. 
// 프로그래밍은 고등학생 때까지 저에게 낯선 학문이였지만 1학년 때 배워보고 너무 재미있어서 세부전공으로 택하게 되었습니다. 
// 저는 화성시에서 왔습니다.제 취미는 드로잉,게임,노래부르기입니다.
// 그 중에서도 요즘은 노래부르기을 즐겨합니다.
// 제가 좋아하는 것을 소개하겠습니다.
// 저는 요즘 과일 중에 오렌지가 제일 좋습니다.거의 매일 먹어요. 
// 좋아하는 가수는 오마이걸,여자친구,러블리즈입니다. 
// 청순하면서도 힘있는 걸그룹 노래를 굉장히 좋아합니다. 
// 여러가지를 연습하고 써보고 싶어서 뭔가 많이 썼더니 TMI가 많아졌네요!
// 어려운 감도 없지않아 있지만 제가 하고싶어서 
// 결정한 길인만큼열심히, 그리고 즐겁게 배우겠습니다!