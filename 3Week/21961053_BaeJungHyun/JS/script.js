// Quest 1.
var a = 29;

var b = a + 2;

var c = a % 3;

if (b % c == 1);{
    console.log("일치합니다.");    
}


// Quest 2.
var user = {};

user = {
    name: "배정현",
    greeting: "안녕하세요",
    job: "학생",
    school: "계원예술대학교",
    major: "디지털미디어디자인",
    grade: 2,
    class: "D"
}

if(typeof user.job === "string"){
    console.log(user.greeting);    
}else{ 
    console.log(user.name);   
}


// JavaScript 연습하기.

// 숫자(Number)
    // 정수: 딱 떨어지는 숫자. 
    console.log(1); // 1
    // 실수: 소수점이 있는 수, 현실을 반영한 수
    console.log(1.5); // 1.5


// 문자(String)
    // 큰 따옴표(")와 작은 따옴표(')로 감싸야 한다.
    console.log("안녕하세요"); // 안녕하세요
    // 숫자를 감싸면 문자가 된다
    console.log(typeof "1"); // string
    // \n을 사용하면 문자열 줄바꿈을 할 수 있다.
    console.log('모여봐요!\n동물의 숲'); // 모여봐요
                                        // 동물의 숲
    // 문자의 연산이 가능하다.
    console.log("쭈니,"+"잭슨,"+'사이다'); // 쭈니,잭슨,사이다
    // 문자의 길이 계산이 가능하다. 문자열 뒷 부분에 .length을 작성하면 된다.
    console.log("쭈니야 우리 마을 와".length); // 11
    // 문자의 순번을 알 수 있다. 문자열 뒷 부분에 .indexOf을 작성하면 된다.
    console.log("쭈니야 우리 마을 와".indexOf("우")); // 4


// 변수(variable)
    // 변하는 수, 값을 저장할 수 있는 메모리의 공간을 의미한다.
    var a; // 변수 a를 선언했다.
    console.log(a); // 값이 없어서 아무것도 나오지 않는다.
    var a = 1; // a에 1의 값을 대입했다.
    console.log(a); // 1
    var a = 3; // a의 값을 3으로 바꿔 대입하였다.
    console.log(a); // 3


// 연산자(Operator)

    // 산술 연산자
        // 값을 산술하기 위한 연산자.
        console.log(214 + 201); // 415
        console.log(813 - 423); // 390
        console.log(2 * 9); // 18
        console.log(66 / 3); // 22
        console.log(10 % 2); // 0
        console.log(10 % 3); // 1


    // 대입 연산자
        // 값을 대입하기 위한 연산자.
        var a = 606;
        console.log(a); // 606


    // 비교 연산자
        // 값과 값을 비교하기 위한 연산자.

        // == 동등연산자
        var a = 6;
        var b = 6;
        console.log(a == b); // 6 == 6 - true
        var a = 3
        var b = 7;
        console.log(a == b); // 3 == 7 - false

        // 초과 연산자.
        a = 7;
        b = 2;
        console.log(a > b); // 7 > 2 - true
        a = -1;
        b = 3;
        console.log(a > b); // -1 > 3 - false

        // < 미만 연산자.
        a = 2;
        b = 8;
        console.log (a < b); // 2 < 8 - true
        a = 7;
        b = 0;
        console.log(a < b); // 7 < 0 - false

        // >= 이상 연산자.
        a = 9;
        b = 1;
        console.log(a >= b); // 9 >= 1 - true
        a = 7;
        b = 7;
        console.log(a >= b); // 7 >= 7 - true
        a = 3;
        b = 5;
        console.log(a >= b); // 3 >= 5 - false

        // <= 이하 연산자.
        a = 3;
        b = 5;
        console.log(a <= b); // 3 <= 5 - true
        a = 5;
        b = 5;
        console.log(a <= b); // 5 <= 5 - true
        a = 8;
        b = 4;
        console.log(a <= b); // 8 <= 4 - false

        
    // 동등 연산자. 
        // == 동등 연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식.  
        var a = "NCT";
        var b = "DREAM";
        console.log(a == b); // "NCT" == "DREAM" - false
        var a = "DREAM";
        console.log(a == b); // "DREAM" == "DREAM" - true
        var a = 127;
        var b = "127";
        console.log(a == b); // 127 == "127" - true    


    //일치 연산자.
        // === 엄격하게 데이터 타입까지 구분해서 비교.
        var a = 127;
        var b = "127";
        console.log(a === b); // 127 === "127" - false
        var a = "127";
        console.log(true == 1); // "127" === "127" - true


    // 부등(부정) 연산자.
        // !=, !== 
        var a = 7;
        var b = 7;
        console.log(a != b); // 7 != 7 - false
        console.log(a == b); // 7 == 7 - true
        var a = 5;
        console.log(a != b); // 5 != 7 - true
        console.log(a == b); // 5 == 7 - false
        var a = "n";
        var b = "n";
        console.log(a != b); // "n" != "n" - false
        console.log(a == b); // "n" == "n" - true
        var a = "t";
        console.log( a != b); //"t" != "n" - true
        console.log(a == b); // "t" == "n" - false
        a = 7;
        b = "7";
        console.log(a != b); // 7 != "7" - false
        console.log(a !== b); // 7 !== "7" - true


// 데이터 타입(Data Type)  
    // Number 숫자.
    // String 문자열.
    // Boolean 참 / 거짓
    // undefined 값이 정의되지 않은 상태.
    // null 값은 적용하지만 비어있는 상태.
    // Object 객체 - [], {} ...
    // Function 함수 - 기능을 만드는 박스.
    // NaN 수식이 성립되지 않은 상태.

    // typeof - 데이터의 타입 찾는 방법.
    console.log(typeof 777); // number
    console.log(typeof "안녕"); // string
    console.log(typeof true); // boolean
    console.log(typeof false); // boolean


// 객체(Object)
    //색인이 포함된 데이터들의 집합.
     var obj = {}; // 새로운 객페를 생성.
    obj = {
        name : "배정현",
        age : 20, // 숫자는 "" 상관없음
        취미 : "노래 듣기"
    }
    console.log(obj);
    console.log(obj.취미); // 노래 듣기
    console.log(obj["취미"]); // 노래 듣기
    console.log(typeof obj.name); // string
    console.log(typeof obj.age); // number


// Array - 배열 객체.
    var _arr = []; // 새로운 배열 생성
    _arr = [1, 5, "7", "안녕", null, true, false]; //색인이 없고 순서로 찾을 수 있다.
    console.log(_arr[0]); // 1
    console.log(_arr[3]); // 안녕
    console.log(_arr[5]); // true
    console.log(_arr.length) // 전체 담기 데이터 길이(개수) - 7
    console.log(_arr[_arr.length - 3]); // 배열 객체의 마지막에 해당하는 값. - null


// if - 조건문.
    //비교 연산자, 동등 연산자, 일치 연산자, 부등 연산자. - 조건을 확인하기 위해서 비교.

    var a = 127;
    var b = 3;
    var c;
    console.log(typeof c); //undifined
    if(typeof c === "string"){ //false
        c = a * b;
    }else{ 
        c = a + b;
    }
    console.log(c); // 130

    var c = 7;
    if(a >= b){ // true
        a = b * c;
    }else{
        a = b - c;
    }
    console.log(a); // 21


//자기소개하기.
    var a = 10;
    var b = 2;

    var profile = {
        이름 : "배정현",
        학교 : "계원예술대학교",
        학과 : "디지털미디어디자인학과",
        학년 : "2학년",
        나이 : a * b,
        생일 : "1월 13일",
    };
    var hello = "안녕하세요.";
    var spacing = " ";
    var interest = "보드 타기";
    var hobby = ["노래 듣기","넷플릭스 보기"];
    var netflix = ["엘리트들","가십걸"];
    var mbti = "ENFJ";
    var tarot = "타로";
    var bye = "감사합니다."

    var profile_1 = hello + spacing + "제 이름은" + spacing + profile.이름 + "입니다. \n";
    var profile_2 = "저는" + spacing + profile.학교 + spacing + profile.학과 + spacing + profile.학년 + "에 재학 중입니다. \n";
    var profile_3 = "제 나이는" + spacing + profile.나이 +"이고 생일은" + spacing + profile.생일 + "입니다. \n";
    var profile_4 = "제가 요즘 가장 관심 있는 건" + spacing + interest + "이며, 시작한 지는 한 달 정도 되었습니다. \n";
    var profile_5 = "제 취미는" + spacing + hobby[0] + "와" + hobby[1] + "인데 요즘 넷플릭스에서 자주 보는 작품은" + netflix[0] + "과" + netflix[1] + "입니다. \n";
    var profile_6 = "저의 MBTI는" + spacing + mbti + "이며, 이러한 심리 상담이나" + spacing + tarot + spacing + "보는 것을 좋아합니다. \n";
    var profile_7 = bye;

    if(a <= b){ // false
        profile_ = profile_1 + profile_7;
    }else{
        profile_ = profile_1 + profile_2 + profile_3 + profile_4 + profile_5 + profile_6 + profile_7;
    }
    console.log(profile_); 

    // 안녕하세요. 제 이름은 배정현입니다. 
    // 저는 계원예술대학교 디지털미디어디자인학과 2학년에 재학 중입니다. 
    // 제 나이는 20이고 생일은 1월 13일입니다. 
    // 제가 요즘 가장 관심 있는 건 보드 타기이며, 시작한 지는 한 달 정도 되었습니다. 
    // 제 취미는 노래 듣기와넷플릭스 보기인데 요즘 넷플릭스에서 자주 보는 작품은엘리트들과가십걸입니다. 
    // 저의 MBTI는 ENFJ이며, 이러한 심리 상담이나 타로 보는 것을 좋아합니다. 
    // 감사합니다.