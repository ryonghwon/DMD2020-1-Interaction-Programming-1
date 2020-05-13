console.log("외부 JavaScript 로드");

/*
논리 연산자.

&& - and (그리고)
|| - or (또는)
// 2가지 이상의 조건을 한꺼번에 성립되었는지 확인하여 코드를 진행할 때.
*/

var a = 0;
var b = 1;
var c = 2;
var d = 2;

if (a !== b) { // a 가 b 와 값이 일치하지 않을 때 - true (부등 연산자)

}
if (c === d) { // c 가 d 와 값이 일치할 때 - true (일치 연산자)

}

if (a !== b) {
    if (c === d) {
        // 2가지 조건이 모두 성립될 때.
    }
}

if (a !== b && c === d && b !== d) { // 1 - true, 2 - true 가 둘 다 성립이 되어야만 코드 동작.
    console.log("모든 조건이 성립");
}
// 논리 연산자를 이용하여 조건을 한꺼번에 비교해서 확인할 수 있다.

if (a === b || c === d) { // 1, 2의 조건 중 하나라도 성립되면 코드 동작.
    console.log("하나의 조건이라도 성립");
}

/*
switch 조건문.
*/
/*
if(조건) {
}
*/

var number = 0;
switch(number) {
    case 0 : // {
        console.log("Hello");
        break;// } // ******* break 를 지정해야만 조건별로 구분이 가능.
    case 1 :
        console.log("world");
        break;
    case 2 :
        console.log(":)");
        break;
    default : // else
        console.log("default");
        break;
}
number = 1;
if(number === 0) {
    console.log("Hello");
}else if(number === 1){
    console.log("world");
}else if(number === 2){
    console.log(":)");
}else{
    console.log("default");
}

/*
while 반복문.
*/
// while(조건){
//     // 반복.
// }

var i = 0;
while (i < 10) {
    console.log(i);
    // 증감에 대한 조건이 없으면 무한대로 반복이 된다. (주의사항)
    // 브라우저가 반복문의 지옥에 빠진다... 브라우저가 응답이 없음...
    i++; // <- 반복 코드의 마지막 부분에 증가,감소 코드를 기입해야한다. **
}
// === 
for (var i = 0; i < 10; i++) {
    console.log(i);
}

/*
Array - 배열 객체.

객체인데 색인없는(순서로 존재) 객체.
여러가지 데이터를 담을 수 있는 컨테이너 객체.
객체, 배열 객체는 사용빈도가 매우 높음.*
*/
var _arr = [0, 1, 2, 100, 2000];

function getMembers() {
    return ["rh", "yyy", "mind"];
}
var member = getMembers();
console.log(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);

// 배열 원소의 추가, 삭제, 수정, 정렬.
// Array(배열) 의 메서드

var _heros = ["Iron Man", "Hulk", "Thor", "Doctor Starage"];
console.log(_heros);
console.log(typeof _heros); // object

// 추가, 삭제.
// Array.unshift(); - 배열의 첫 번째에 원소값을 추가.
_heros.unshift("Captain America"); // 원소값 기입.
console.log(_heros);

// Array.push(); - 배열의 마지막 번째에 원소값을 추가.
_heros.push("Spider-Man"); // 원소값 기입.
console.log(_heros);

// Array.shift(); - 배열의 첫 번째 원소값을 삭제(1개만 삭제).
_heros.shift();
console.log(_heros);

// Array.pop(); - 배열의 마지막 번째 원소값을 삭제(1개만 삭제).
_heros.pop();
console.log(_heros);

// 병합.
// Array.concat();
// 배열 + 배열 = 배열 - 배열과 배열을 병합해서 하나의 배열로 만듦.
var _addHeros = ["Black Panther", "Ant-Man"]; // 새로운 다른 배열을 생성.
_heros.concat(_addHeros); // 배열 병합을 한 후에 변수에 값을 할당해줘야 함.
// _heros = _heros.concat(_addHeros);
// console.log(_heros);
var _newHeros = _heros.concat(_addHeros);
console.log(_newHeros);

// 수정. (삭제하고 값을 추가)
// Array.splice();
// Array.splice(index(number), delete(number), value);
_newHeros.splice(2, 0, "Vision"); // 2번째 원소에 원소값을 추가.
console.log(_newHeros);
_newHeros.splice(2, 1, "Loki"); // 2번째 원소에 하나의 값을 삭제하고 원소값 추가 = 수정
// _newHeros.splice(2, 1, ["Loki", "Vision"]);
console.log(_newHeros);
// splice(시작하는 시점에 대한 순서, 삭제하려고 하는 원소의 개수, [배열]);

// 정렬.
// Array.sort();
// _newHeros.sort(); // 원소의 순서 정렬(숫자, 알파벳 순서).
// console.log(_newHeros);
var _arr = ["안녕하세요", "A", 10, 0, false, {}];
// console.log(_arr);
// _arr.sort();
// console.log(_arr);

// Array.reverse(); // 원소의 순서를 반대로 정렬.
_newHeros.reverse();
console.log(_newHeros);

/*
Math 
*/
console.log(Math);
// pow(); - 제곱 Math.pow(3, 2);
// round(); * - 반올림 0.5 - 1, 0.4 - 0 정수로 만들기 위한 수학 Math.round(2.5);
// ceil(); - 올림 0.4 - 1, 0.6 - 1 정수값으로 반환. Math.ceil(0.1);
// floor(); - 내림 0.8 - 0, 0.9 - 0 정수값으로 반환. Math.floor(0.9);
// sqrt(); - 제곱근 Math.sqrt(9) - 3
// random(); * Math.random() 0 ~ 1.0 까지의 랜덤한 수 반환.
// abs(); - 절대값 Math.abs(-100 + 50);
// max(); * - Math.max(0, 10); 두가지 숫자 중 최대값 반환.
// min(); * - Math.min(-100, -1000); 두가지 숫자 중 최소값 반환.

// 배열의 최대값, 최대값.
// console.log(Math.max.apply(null, [0, -10, 100, 20000, 1000])); // 20000
// console.log(Math.min.apply(null, [-1000, -20000, 0, 10, 100])); // -20000

var _random = Math.random(); // 0 ~ 1.0 까지의 랜덤한 숫자.
console.log(_random);
// 0 ~ 100 숫자 중 랜덤 값을 찾고 싶다.
_random = _random * 100;
console.log(_random);
_random = Math.round(_random);
console.log(_random); // 0 ~ 100 의 램덤한 수.
