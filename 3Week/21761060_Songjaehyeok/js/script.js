/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를/ 3(순서) 에서 선언한 변수로/ 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
    var a = 29,
        b = a + 2,
        c = a % 3;
    if(b % c == 1){
        console.log("일치합니다")
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
        "name" :  "송재혁",
        "greeting" : "안녕하세요",
        "job" : "학생",
        "school": "계원예술대학교",
        "major" : "디지털미디어디자인",
        "grade" : 2,
        "class":"D"
    };
    if(typeof user["job"] == "string"){
        console.log(user.greeting);
    }else{
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
    console.log(1); //1

//문자 (String)
    console.log("문자(String)"); //문자(String)

    /*
    변수(variable) , 대입 연산자 
    변수를 만들고자 할 때는 var 다음 만들고자하는 변수 명을 적는다.
    */
    var a; 
    //a에다가 1의 값을 대입, 위에서 변수를 선언했기 때문에 var을 한번 더 안써도된다.
    a = 1;  
    console.log(a);  //1
 


//연산자
//산술 연산자  +, -, *, /, % 각각 더하기, 빼기, 곱하기 나누기, 나머지
    console.log (1 + 1);  //2
    console.log (1 - 1);  //0
    console.log (1 * 2);  //2
    console.log (4 / 2);  //2
    console.log (5 % 2);  //1

/*
    문자열(String) 연산
    ""안 띄어쓰기도 포함하여 출력된다.
    줄바꿈은 \n 을 사용하며, ""는 "앞에 \를 붙히면된다.  
    문자의 양을 구하고싶을떄에는 뒤에 length를 추가한다.
*/  
    console.log("안녕하세요." + " " + "\"송재혁\"입니다.");  //안녕하세요. "송재혁"입니다. 
    console.log("안녕하세요.".length); //6
    

// 비교 연산자 <, >, <=, >= 값이 큰지 작은지 같은지를 비교
    console.log(1 < 2);  //true
    console.log(1 > 2);  //false
    console.log(1 <= 2);  //true
    console.log(1 >= 2);  //false
//동등 연산자   두 값이 데이터 타입과 상관없이 일치하면 true 아니면 false
    console.log(0 == "0");  //true
//일치 연산자 데이터타입까지 모두 비교하여 정확히 일치하면 true 아니면 false
    console.log(0 === "0"); //false
    console.log(0 === 0);  //true

/* 
데이터 타입
    Boolean  ->  true, false
    Number  ->  -1, 0 ,1 ,2 ...
    String  ->  "a", "b", "c" ...
    undefine  -> 값이 정의되지 않은 상태
    null  -> 값이 정의되어있지만 비어있는 상태
    NaN  -> 성립이 되지 않는 수, 계산 할 수 없음을 의미
*/
console.log(typeof true); //boolean
console.log(typeof 1);  //number
console.log(typeof"hello");  //string
console.log(typeof undefined);  //undefined

//오브젝트(Object)
var _object = 
{
    //"항목" : "깂" 을 의미
    "name" :  "송재혁",
    "greeting" : "안녕하세요",
}

//배열(Array)
    var a = 1, 
        b = 2,
        c = 3,
        _array = [a, b, c];
 console.log(_array[2]);  //3

 //조건문(if)  if 안의 조건이 true 인 경우 if 조건 안의 코드가 실행, false 일 경우 else 안의 코드가 실행
 if(1 < 2){
     console.log ("2는 1보다 크다." ) //2는 1보다 크다.
 }else{
     console.log("1 > 2였다면 이 콘솔이 출력된다.") //1 > 2였다면 이 콘솔이 출력된다.
 }


/*
자기소개하기.

1. 숫자(Number), 문자(String), 변수(variable), 연산자(산술, 대입, 비교, 동등, 일치, 부정), 데이터 타입(Data Type), 오브젝트(Object), 배열(Array), 조건문(if) 등을 이용하여 장문의 자기소개를 합니다.
2. 값은 console.log() 를 이용하여 문서 실행시 자기소개가 한꺼번에 출력되도록 합니다.
3. 데이터 형식, 연산 등에서 잘 모르는 부분은 주석을 이용하여 질문을 합니다.
*/
// 자기소개.
var about = {
        "birth" : "98년 12월 31일",
        "name" : "송재혁",
        "major" : "프로그래밍",
        "grade" : "2학년",
        "positive" : "긍정적" ,
        "smiling" : "웃는" 
    },
    hobby = {
        "hobby" : "취미" ,
        "cook" : "요리" ,
        "game" : "게임" ,
        "music" : "음악" ,
        "soccer" : "축구"
    },
    plan = {
        "graduate" : "졸업",
        "plan_1" : "취업",
        "plan_2" : "여행"
    },
    study = {
        "3D" : "3D",
        "web" : "웹코딩",
    },
    intro_1 = "안녕하세요. 저는 " + about["birth"] + "에 태어난 " + about["name"] + "입니다.\n",
    intro_2 = hobby["hobby"] + "는 " + hobby["cook"] + ", " +hobby["game"] + ", " +hobby["music"] + ", " +hobby["soccer"] + "입니다.\n"
    intro_3 = "낯을 약간 가리만 항상 " + about["positive"] + "이고 잘 " + about["smiling"] + "성격입니다.\n"
    intro_4 = study["3D"] + "와 " + study["web"] + "에 관심이 많아 " + about["major"] + "에 오게 되었습니다.\n",
    intro_5 = "1학년을 마치고 군대를 갔다와 " + about["grade"] + "으로 바로 복학했습니다.\n",
    intro_6 = "휴학기간동안 전공공부를 많이 잊어서 앞으로 공부를 열심히해야 할 것 같습니다.\n",
    intro_7 = plan["graduate"] + " 후 " + plan["plan_1"] + "과 " + plan["plan_2"] +" 등 많은 길을 열어두고 생각하고 있으며 " + about["grade"] + "동안 구체화시켜 정하려합니다.\n",
    intro_8 = "전체적으로 부족하고 느립니다.수업을 들으며 툴사용능력과 디자인능력을 발전시키는게 목표 중 하나입니다.\n",
    intro_9 = "잘 부탁드립니다!!";

if("자기소개!".length < 10){
    console.log(intro_1 + intro_2 + intro_3 + intro_4 + intro_5 + intro_6 + intro_7 + intro_8 + intro_9);
}

/*
    안녕하세요.저는 98년 12월 31일에 태어난 송재혁입니다!
    취미는 요리, 게임, 음악, 축구입니다.낯을 약간 가리지만 항상 긍정적이고 잘 웃는성격입니다.
    3D와 웹코딩에 관심이 많아 프로그래밍에 오게 되었습니다.
    1학년을 마치고 군대를 갔다와 2학년으로 바로 복학했습니다.
    휴학기간동안 전공공부를 많이 잊어서 앞으로 공부를 열심히해야 할 것 같습니다.
    졸업 후 취업과 여행 등 많은 길을 열어두고 생각하고 있으며 2학년동안 구체화시켜 정하려합니다.
    다들 잘 부탁드립니다!!!
*/

