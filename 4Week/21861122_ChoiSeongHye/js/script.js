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

function compareNumbers(num1, num2) {
    if(typeof num2 === "undefined"){
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }
    if(num1 >= num2) {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    if(num1 < num2) {
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

function getTotal(number, string) {
    if(string === "add"){
        // var result = 1; // 초기값을 1로 주자 결과값에 +1 이 되어 출력됨.
        var result = 0;
        for(var i = 1; i <= number; i++){
            // var result = 0; // for 반복문 안에서 변수를 선언하자 새로운 값이 대입 되더라도 0으로 돌아가는 것이 반복 됨.
            result += i;
        }
    }
    else if(string === "multifly") {
        // var result = 0; // 초기값을 0으로 주자 결과값이 0만 출력 됨. 0은 무엇을 곱해도 0이기 때문이다.
        var result = 1; 
        for(var i = 1; i <= number; i++){
            result *= i;
        }
    }
    else {
        result = 0;
    }
    return "getTotal(" + number + ", \"" + string + "\") 를 호출하여 반환하고 변수를 출력한 결과값 : " + result;
}
var result1 = getTotal(10, "add");
console.log(result1); // 55
result1 = getTotal(3, "add");
console.log(result1); // 6 

var result2 = getTotal(10, "multifly");
console.log(result2); // 3628800
result2 = getTotal(5, "multifly");
console.log(result2); // 120

var result3 = getTotal(5, "nothing");
console.log(result3); // 0


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

function getMaxValue (array) {
    var max = 0;
    for(var j = 0; j < array.length; j++){
        if(typeof array[j] === "number"){ // 숫자일 경우에만 실행
            if(max < array[j]) { 
                max = array[j]; // 가장 큰 숫자를 저장
                var a = j; // 위의 숫자가 배열 속에서 해당하는 순서를 저장
            }
        }
    }
    return "geMaxValue([" + array + "]) 를 호출하여 반환하고 변수를 출력한 결과값 : " + a;
}

var result4 = getMaxValue([10, -4, 7, 100, "hello", -50]);
console.log(result4); // 3
var result5 = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(result5); // 5