/*
문제 풀이.
*/

/*
Quest 1.
1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다.
2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
두번째 매개변수의 값을 찾을 수 없습니다.
----------
3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
----------
5. 작은 경우 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
----------
6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다.
 
----------
함수 호출)

compareNumbers(10) 를 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."

compareNumbers(20, 10) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."

compareNumbers(10, 20) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
----------
*/
// Answer 1.
<<<<<<< HEAD
function compareNumbers(number1, number2){
    // 조건 1.
    /*
    if(number2 === undefined) { //number2의 값을 비교 (일치 여부)
        //console.log('1');
    } 
    if (typeof number2 === "undefined") { // number2의 데이터 타입을 비교.
        //console.log('2');
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    } else {
        // 조건 2.
        if(number1 >= number2){
=======
function compareNumbers(number1, number2) {
    // 조건 1.
    /*
    if (number2 === undefined) { // number2 의 값을 비교(일치 여부)
        // console.log('1');
    }
    if (typeof number2 === "undefined") { // number2 의 데이터 타입을 비교.
        // console.log('2');
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    } else {
        // 조건 2.
        if (number1 >= number2) {
>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d
            console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
        } else {
            console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
        }
    }
    */
<<<<<<< HEAD
   if (typeof number2 === "undefined") { 
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
        return; // 함수 반환을 하기도 하지만,, 함수를 종료 시키는 기능도 포함.
        // undefined의 값이 확인된 경우, 이후의 코드를 실행하지 않음.
    } 
    if(number1 >= number2){
=======
    if (typeof number2 === "undefined") {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
        return; // 함수 반환을 하기도 하지만... 함수를 종료 시키는 기능도 포함.
        // undefined 의 값이 확인된 경우, 이후의 코드를 실행하지 않음.
    }
    if (number1 >= number2) {
>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    } else {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}
compareNumbers(10);
compareNumbers(20, 10);
compareNumbers(10, 20);


/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.
5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
6. 5(순서) 변수의 값을 console 에 출력합니다.

----------
함수 호출 예시)

getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15
getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55

getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120
getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800

getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0
----------
*/
// Answer 2.
<<<<<<< HEAD
function getTotal(num,str) {
    var result = null; // 결과값을 받아내기 위한 변수.
    if(str === "add"){
        // 1 ~ num까지 모든 수를 덧셈 연산. - 반복문.
        for (var i = 1; i <= num; i++){ // number의 값까지 반복되도록 구문 작성.
            if (i === 1){
                // 초기값을 대입.
                result = i; // 반복문이 첫번째 동작할 때, result값에 1이 대입.
            } else {
                // 이후부터 연산이 될 수 있게 코드작성.
                result += i;
                // === result = result + i;
            }
        }
        // console.log(result); // 1 ~ num까지 덧셈 연산 완료한 결과 값.
    }else if(str === "multiply"){
        // 1 ~ num까지 모든 수를 곱셈 연산.
        for (var i =1; i <= num; i++){
            if (i === 1){
                result = i;
            }else{
                result *= i;;
                // === result = result * i;
            }
        }
    }else{
=======
function getTotal(number, string) {
    var result = null; // 결과값을 받기 위한 변수.
    if (string === "add") {
        // 1 ~ number 까지의 모든 수를 덧셈 연산. - 반복문.
        for (var i = 1; i <= number; i++) { // number 의 값까지 반복되도록 구문 작성.
            if (i === 1) {
                // 초기값을 대입.
                result = i; // 반복문이 첫번 째 동작할 때, result 값에 1 이 대입.
            } else {
                // 이후부터 연산이 될 수 있게 코드작성.
                result += i;
                // result = result + i;
            }
        }
        // console.log(result); // 1 ~ number 까지 덧셈 연산 완료한 결과 값.
    } else if (string === "multiply") {
        // 1 ~ number 까지의 모든 수를 곱셈 연산.
        for (var i = 1; i <= number; i++) {
            if (i === 1) {
                result = i;
            } else {
                result *= i;
                // === result = result * i;
            }
        }
    } else {
>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d
        result = 0;
    }
    return result;
}
var totalResult = null;
totalResult = getTotal(5, "add");
console.log(totalResult);
totalResult = getTotal(10, "add");
console.log(totalResult);
totalResult = getTotal(5, "multiply");
console.log(totalResult);
totalResult = getTotal(10, "multiply");
console.log(totalResult);
totalResult = getTotal(100);
console.log(totalResult);
<<<<<<< HEAD
=======

>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d


/*
Quest 3.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
3. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
4. 3(순서) 변수의 값을 console 에 출력합니다.
* 매개변수 배열에는 숫자 이외의 타입도 할당되어 있습니다.

----------
함수 호출 예시)

getMaxValue([10, -4, 7, 100, "hello", -50]) 를 호출하여 반환하고 변수를 출력한 결과값 : 3

getMaxValue([-400, "world", 60, 0, {}, 1000]) 를 호출하여 반환하고 변수를 출력한 결과값 : 5
----------
*/
// Answer 3.
function getMaxValue(array) {
    var max = array.length; // 배열의 원소 개수.
<<<<<<< HEAD
    // 숫자를 비교하기 위한 변수 - 반복문이 동작될 때, 최대값을 비교하기 위한 변수.
    // 반복 시, maxValue와 array[?] 원소 값을 비교해서 원소 값이 크면 maxValue의 값을 대체.
    var maxValue = null; // 숫자로서 준비.
    var maxOrder = null; // 최대값인 원소의 순서를 찾기 위한 변수.
    for(var i = 0; i < max; i++){ // 배열의 반복문을 작성.
        if(typeof array[i] === "number"){ // 원소 값이 숫자인 경우에만 비교하겠다는 조건.
            if(i === 0){
                maxValue = array[i]; // 반복문 구문이 처음 실행될 때, array의 0번째 원소값을 대입.
                maxOrder = i;
            }else{
                if(maxValue < array[i]){
=======
    // 숫자를 비교하기 위한 변수 - 반복문이 동작될 때, 최대값 담아 두기 위한 변수.
    // 반복 시, maxValue 와 array[?] 원소 값을 비교해서 원소 값이 크면 maxValue 의 값을 대체.
    var maxValue = null; // null - 숫자로서 준비.
    var maxOrder = null; // 최대값인 원소의 순서를 찾기 위한 변수.
    for (var i = 0; i < max; i++) { // 배열의 반복문을 작성.
        if (typeof array[i] === "number") { // 원소 값이 숫자인 경우에만 비교하겠다는 조건.
            if (i === 0) {
                maxValue = array[i]; // 반복문 구문이 처음 실행될 때, array 의 0번째 원소값을 대입.
                maxOrder = i;
            } else {
                if (maxValue < array[i]) {
>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d
                    maxValue = array[i];
                    maxOrder = i;
                }
            }
        }
    }
    console.log(maxValue, maxOrder);
    return maxOrder;
}
var maxValueResult = null;
maxValueResult = getMaxValue([10, -4, 7, 100, "hello", -50]);
console.log(maxValueResult); // 3
maxValueResult = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(maxValueResult); // 5
<<<<<<< HEAD

function getMaxValue2(array) {
    var max = array.length; 
    var maxValue = null; 
    var maxOrder = null; 
    var isFirst = false; // Boolean 원소의 값이 숫자가 되는 처음 시점을 확인하기 위한 Boolean 변수.
    for(var i = 0; i < max; i++){ 
        if(typeof array[i] === "number"){
            if(!isFirst){ /////////////------- 첫 0번째 숫자가 아닐 때 문제가 된다.
                // isFirst라는 Boolean 상태를 비교하여 처음 숫자가 비교되는 시점에 코드 시작.
                maxValue = array[i]; 
                maxOrder = i;
                isFirst = true; // 초기값 설정이 완료된 상태로 변경.
            }else{
                if(maxValue < array[i]){
=======
function getMaxValue2(array) {
    var max = array.length;
    var maxValue = null;
    var maxOrder = null;
    var isFirst = false; // Boolean 원소의 값이 숫자가 되는 처음 시점을 확인하기 위한 Boolean 변수.
    for (var i = 0; i < max; i++) {
        if (typeof array[i] === "number") {
            if (!isFirst) { //////////// ---- 첫 0번째가 숫자가 아닐 때 문제가 된다.
                // isFirst 라는 Boolean 상태를 비교하여 처음 숫자가 비교되는 시점에 코드 시작.
                maxValue = array[i];
                maxOrder = i;
                isFirst = true; // 초기값 설정이 완료된 상태로 변경.
            } else {
                if (maxValue < array[i]) {
>>>>>>> 455b92926de32884c260cd04a5556a3f6ff4a41d
                    maxValue = array[i];
                    maxOrder = i;
                }
            }
        }
    }
    console.log(maxValue, maxOrder);
    return maxOrder;
}
maxValueResult = getMaxValue2([{}, ":)", [], 100, 2000, -1000, 10]);
console.log(maxValueResult); // 4