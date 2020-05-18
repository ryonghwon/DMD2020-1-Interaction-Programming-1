/*
문제 풀이.
*/

/*
Quest 1.
1. cars 라는 변수를 선언하고 아래의 배열을 값으로 할당합니다.
----------
배열)
['Tesla', 'Audi', 'Volvo', 'Benz']
----------
2. cars 배열의 원소값들을 이용하여 아래와 같은 문자열로 console 에 출력되도록 작성합니다.
----------
문자열)
Benz, Volvo, Audi, Tesla.
----------
*/
// Answer 1.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
//반복문.
<<<<<<< HEAD
var max = cars.length; // cars 배열의 개수 - 4
/*
for(var i = 0; i < max; i++){
=======
var max = cars.length; // cars 배열의 개수. - 4
/*
for(var i = 0; i < max; i++) {
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
    console.log(cars[i]);
}
*/
// 방법 1.
var result = "";
<<<<<<< HEAD
for(var i = max - 1; i >= 0; i--){
    if (i < max - 1){
        result += ", ";
    }
    result += cars[i];
    if (i === 0){
        result += ".";
    }
}
//console.log(result)

// 방법 2.
result = "";
cars.reverse(); // 원소값을 반대로 정렬.
for(var i = 0; i < max; i++){
    if(i>0){
        result += ", ";
    }
    result += cars[i];
    if(i === max - 1){
=======
for(var i = max - 1; i >= 0; i--) {
    if (i < max - 1) {
        result += ", ";
    }
    result += cars[i];
    if (i === 0) {
        result += ".";
    }
}
//console.log(result);

// 방법 2.
result = "";
cars.reverse(); // 원소값을 반대로 정렬.
for(var i = 0; i < max; i++) {
    if(i > 0) {
        result += ", ";
    }
    result += cars[i];
    if(i === max - 1) {
        result += ".";
    }
}
// console.log(result);

// for ... in 반복문. (객체를 반복시킬 때 사용)
/*
for(var _원소순서(색인-key)_ in _배열(객체)_) {
}
*/
result = "";
for(var i in cars) {
    // console.log(i); // 0, 1, 2, 3 - 문자열 타입으로 값이 설정됨.
    // console.log(cars[i]); // 각 원소들의 값.
    i = parseInt(i, 10); // number 타입으로 치환. parseInt(치환하려는 값, 진법);
    if(i > 0) {
        result += ", ";
    }
    result += cars[i];
    if(i === max - 1) {
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
        result += ".";
    }
}
console.log(result);

// for ... in 반복문. (객체를 반복시킬 때 사용)
/*
for (var _원소순서(색인-key)_ in _배열(객체)_){
}
*/
result = "";
for(var i in cars){
    //console.log(i); // 0,1,2,3
    //console.log(cars[i]); // 각 원소들의 값.
    i = parseInt(i, 10); // number 타입으로 치환. parseInt(치환하려는 값, 진법);
    console.log(i);
    if(i > 0){
        result += ", ";
    }
    result += cars[i];
    if(i === max - 1){
        result += ".";
    }
}
console.log(result);

/*
Quest 2.
1. numbers 라는 변수를 선언하고 숫자 타입의 원소값들로 이뤄진 배열을 할당합니다.
----------
배열 예시)
[-1, 2, 5, 10, 1, -10, 8, 4]
----------
2. 1(순서) 에서 선언한 변수의 배열 원소값 중 가장 큰 숫자를 console 에 출력되도록 작성합니다.
3. 1(순서) 에서 선언한 변수의 배열 원소값 중 가장 작은 숫자를 console 에 출력되도록 작성합니다.
*/
// Answer 2.
var numbers = [-1, 2, 5, 10, 1, -10, 8, 4];
// Math 수학.
// call.
<<<<<<< HEAD
Math.min(-10, 1); // 최소값. -10
Math.max(-1, 10); // 최대값. 10
// apply(this, {}); // 객체가 있다면 객체들을 this 의 값으로 할당.
var max = Math.max.apply(null, numbers)
console.log(max);
var min = Math.min.apply(null, numbers);
console.log(min)

=======
// Math.min(-10, 1); // 최소값. -10
// Math.max(-1, 10); // 최대값. 10
// apply(this, {}); // 객체가 있다면 객체들을 this 의 값으로 할당.
var max = Math.max.apply(null, numbers);
console.log(max);
var min = Math.min.apply(null, numbers);
console.log(min);
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0


/*
Quest 3.
1. getStar 라는 함수를 선언하고, 1개의 매개변수(숫자 타입)를 지정합니다.
2. 1(순서) 함수가 호출될 때, 매개변수의 전달인자 값이 숫자가 아닌 경우, 아래와 같이 console 에 출력되도록 작성하고 false 를 반환합니다.
----------
숫자만 입력 가능합니다.
----------
3. 1(순서) 함수가 호출될 때, 매개변수의 전달인자가 숫자인 경우 전달인자의 수만큼 '*' 가 반복되는 문자열을 결과값으로 반환합니다.
4. star1 변수를 선언, getStar("text") 를 호출하고 반환값을 할당받아 아래와 같은 결과값이 console 에 출력되도록 작성합니다.
----------
getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
----------
5.  star2 변수를 선언, getStar(5) 를 호출하고 반환값을 할당받아 아래와 같은 결과값이 console 에 출력되도록 작성합니다.
----------
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
----------
*/
// Answer 3.
function getStar(number){
<<<<<<< HEAD
    if(typeof number !== "number") { // 매개변수가 숫자타입이 아닌 경우
        console.log("숫자만 입력 가능합니다.")
        return false; // 함수에서 반환이 되는 시점 부터는 코드가 실행되지 않음.
        console.log("반환 이후 실행.....");
=======
    if(typeof number !== "number") { // 매개변수가 숫자타입이 아닌 경우.
        console.log("숫자만 입력 가능합니다.");
        return false; // 함수에서 반환이 되는 시점 부터는 내부의 코드가 실행되지 않는다.
        console.log("반환 이후 실행...");
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
    }
    var result = "";
    for(var i = 0; i < number; i++){
        result += "*";
    }
    return result;
}
var star1 = getStar("text");
console.log(star1);
var star2 = getStar(5);
console.log(star2);
var star3 = getStar(100);
console.log(star3);
<<<<<<< HEAD

/*
\n - 줄바꿈

*****
****
***
**
*

*/
=======
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0

/*
\n

*****
****
***
**
*

*/


/*
Quest 4.
1. fruit 라는 변수를 선언하고 아래의 배열을 값으로 할당합니다.
----------
['Apple', 'Orange', 'Grape', 'Melon']
----------
2. 'Mango' 라는 문자열을 fruit 배열 객체의 첫 번째에 요소로 추가합니다.
3. fruit 배열 객체의 ‘Orange' 요소 뒤에 'Cherry' 라는 문자열을 요소로 추가합니다.
4. fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/
// Answer 4.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift("Mango");
fruit.splice(3, 0, "Cherry");
fruit.reverse();
<<<<<<< HEAD
console.log(fruit);

=======
console.log(fruit);
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
