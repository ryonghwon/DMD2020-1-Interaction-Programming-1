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