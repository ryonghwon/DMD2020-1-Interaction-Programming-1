//console.log("외부 JavaScript 로드");

/*
for 반복문.
*/
// 동일한 코드를 반복시키기 위한 방법(구문).
// for(초기화 변수; 증감에 따른 변수와의 조건; 반복 코드가 수행된 후 증가/감소) {
    // 반복 수행될 코드.
// }
/*
// if 조건문.
if(i < 5){
}
if(i === 1){
}
// 5 < 5 false.
// 증가하는 반복문.
for(var i = 0; i < 10; i++) {
    //반복 코드.
    // console.log(i);
    ///코드가 모두 완료되었을 때 증가시키겠다.(i++); 
    // i++ -----> i = i + 1;
}
for(var i = 0; i < 10; ++i) {
    // console.log(i);
}
// 감소하는 반복문.
for(var j = 10; j > 0; j--) {
    // console.log(j);
}
for(var j = 10; j > 0; --j) {
    // console.log(j);
}
*/

/*
var _array = ["a", "b", "c", "d", "e"];
// 배열의 첫번째 시작 순서는 0. 4.
// _array 배열의 길이 - 5.
for(var i = 0; i < 5; i++){
    console.log(i, _array[i]); // _array[0], _array[1], _array[2]... _array[4];
}
*/
/*
var _say = ["Hello", "My", "Name", "is", "rh"];
// console.log(_say.length); // 객체의 길이(개수) - 5.
var max = _say.length; // 5.
var msg = ""; // typeof msg - string.
// for(var i = 0; i < max; i++){
//     //console.log(i, _say[i]);
//     msg += _say[i];
//     // msg = msg + _say[i];
//     console.log("----> " + msg); // 문구가 만들어지는 과정을 확인할 수 있다.
// }
// // 결과값.
// console.log(msg);
for(var i = 0; i < max; i++){
    // 숫자의 조건에 따라 띄어쓰기를 연산.
    if(i > 0) {
        msg += " ";
    }
    msg += _say[i];
    if(i === max - 1) {
        msg += ".";
    }
}
console.log(msg);
*/

/*
function - 함수.

기능을 구성하는 블럭 단위.
*/
/*
// 함수를 정의하는 방법.
function name() {
    // 코드 작성.
    console.log("김용원입니다.");
}
function functionName() {
    // 코드 작성.
    console.log("함수 이름입니다.");
}
// 정의만 된 상태.

// 함수 호출(실행).
functionName();
name();
*/
/*
var a = 0;
function name() {
    //console.log("함수 안에서 -- ", a);
    a = 10;
}
console.log(a); // 0.
name();
console.log("함수 호출된 후 -- ", a); // 10.
*/

/*
scope - 유효 범위.
*/
/*
//전역 범위(전역 변수)
var a = 0;
function name() {
    //console.log("함수 안에서 -- ", a);
    // var a = 10;
    // a = 10;
    console.log("함수 안에서 -- ", a);
    // 함수의 내부에서 선언이 되었다면 해당 함수에서만 참조 가능하다.
    // 지역 범위(지역 변수)
}
function name2() {
    a = 10;
}
console.log(a); // 0.
name();
console.log("함수 호출된 후 -- ", a); // 0.

var _name = 0;
function name() {
    _name = 10;
    var name = 10;
    console.log(_name); // 전역변수.
    console.log(name); // 지역변수.
}
name();
*/

/*
method - 메서드.

객체에 함수형을 값으로 할당하여 사용가능하도록 하는 것.
*/
/*
var _obj = {
    name : function() {
        console.log("김용원입니다.");
    },
    title : "제목"
}
console.log(_obj.title); // 값 찾기.
_obj.name();
//console.log(_obj.name()); // 메서드 호출.
*/

/*
Parameter - 매개변수.

함수를 정의할 때 지역범위안에서 사용가능하도록 변수를 선언하는 것.
단, 호출되는 시점에 전달인자를 받아서 지정된 매개변수 값으로 할당할 수가 있다.
*/
/*
function msg(name) { // 매개변수.
    //var name; 함수가 정의됨과 동시에 name 이라는 변수가 선언.
    console.log(name);
}

msg(); // name 매개변수의 값을 할당하지 않은 상태로 호출.

//var name; // 값이 할당되있지 않은 상태. undefined, 변수 선언만 되어 있는 상태.

msg("김용원"); // argument. 전달인자 - 함수 호출이 이뤄질 때, 매개변수에 값을 지정하는 것.
msg("이름");
msg(1);
msg({name: "rh", key : "value"}); // 객체를 넣을 수도 있다.

// 전달인자에는 어떠한 데이터 타입도 기입이 가능하다.
// 단, 매개변수의 개수에 따라서.

msg("안녕하세요", "김용원입니다."); // 오류가 발생되진 않는다.
// 전달인자가 여러 개 있더라도, 함수가 정의될 때 매개변수가 없다면 탈락.

msg("안녕하세요", "김용원입니다.", "반갑습니다.");
// name 이라는 매개변수만 있는 상태에. 다른 값도 함께 전달인자로 넣었을 때.
// 매개변수가 없는 부분에 해당하는 값은 탈락이 된다.

// 매개변수의 유효성!
*/


/*
return - 함수 반환.

함수 내부에서 코드가 동작이 되고 모든 동작이 이뤄진 후 결과값을 함수 밖으로 출력시킬 때(반환)
*/
// 함수는 호출이 이뤄질 때 반드시 반환을 한다.
// 함수의 마지막 부분에 return 이라고 작성한 경우, 제작자가 원하는 값을 뽑아낼 수 있다.
// return 이 없다면 undefined (지정된 내용이 없다) 가 반환이 된다.

/*
function name() {
}
var me = name(); // name 이라는 함수가 호출되고 결과값을 반환.(할당)
console.log(me); // undefined.
*/
/*
function name() {
    ///// 계산.....//
    ///// 계산 결과....//
    // return 계산 결과.
    return "이름";
}
var me = name();  // name 이라는 함수가 호출되고 return 에 해당하는 결과값이 반환됨.
// console.log(me);
 
function sumPrices(param1, param2){
    var sum = param1 + param2;
    return sum;
}
var sum0 = sumPrices(); // undefined + undefined = 연산이 안되어서.... NaN(수식이 성립되지 않음)
var sum1 = sumPrices(100, 200); // 100 + 200 = 300;
var sum2 = sumPrices(400, 500); // 400 + 500 = 900;
console.log(sum0); // NaN 수식이 성립되지 않음.
console.log(sum1); // 300
console.log(sum2); // 900
var sum3 = sumPrices(1000, 2000, 3000, 4000, 5000); // 3000
console.log(sum3);
*/
/*
function getSize(size) {
    if(size > 30){
        return "large";
    }else if(size > 20){
        return "medium";
    }else{
        return "small";
    }
}
var size1 = getSize(40); // string type.
var size2 = getSize(25); // string type.
var size3 = getSize(10); // string type.
console.log(size1);
console.log(size2);
console.log(size3);
*/

var _name = "전역변수";
function getName() {
    // console.log(name); // "전역변수"
    var name = "지역변수";
    name = "지역변수";
    _name = "전역변수를 변경함";
    console.log(name); // "지역변수"
}
getName();
console.log(name); // "전역변수"