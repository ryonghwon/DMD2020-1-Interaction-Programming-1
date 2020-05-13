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
console.log("Answer 1 :");
function compareNumbers(n1, n2) {
    if (typeof n2 == "undefined") {
    console.log("두번째 매개변수의 값을 찾을 수 없습니다."); // 두번째 매개변수의 값을 찾을 수 없습니다.
    } else if (n1 >= n2) {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
    } else if (n1 < n2) {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
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
function getTotal(i, s){
    var sum = null;
    if (s === "add") {
        for (var index = 1; index <= i; index++) {
            sum += index;
        } 
    } else if (s === "multiply") {
        sum = 1;
        for (var index = 1; index <= i; index++) {
            sum *= index;
        } 
    } else {
        sum = 0;
    }
    return sum;
}
console.log("Answer 2 :");
console.log(getTotal(5, "add")); // 15
console.log(getTotal(10, "add")); // 55
console.log(getTotal(5, "multiply")); // 120
console.log(getTotal(10, "multiply")); //3628800
console.log(getTotal(100)); // 0

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
console.log("Answer 3 :");
function getMaxValue(arr) {
    var max = arr[0];
    var maxOrder;
        for (var index = 0; index < arr.length; index++) {
            if (arr[index] > max) {
                max = arr[index];
                maxOrder = index;
            }
        }
    return maxOrder;
}
var arr1 = getMaxValue([10, -4, 7, 100, "hello", -50]); // 새로운 변수 arr1 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환
var arr2 = getMaxValue([-400, "world", 60, 0, {}, 1000]); // 새로운 변수 arr2 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환
console.log(arr1); // 3
console.log(arr2); // 5

/* 질문: array 배열 형식을 사용하여 풀었는데 제가 다른 내용도 따로 공부하던중 arguments라는 함수 전용 배열 객체가 있는 것을 알게 되었습니다.
정확히 어떤 개념인지 잘 몰라 아직 제가 직접 적용해보지 못했지만, 이것을 이용해서 문제 3을 해결할 수도 있을까요? */

// rh : 함수에서 arguments 라는 값을 출력해보면 위의 함수에서는 [arr] 로 확인이 됩니다.
// 만약 매개변수가 여러개 있을 때 arguments 객체를 받아오면 정의되어있는 모든 매개변수들을 arguments 배열에 담아서 사용가능합니다. 즉, 함수에 내장되어있는 변수입니다.
function test(param1, param2, param3){
    // 여기에서 arguments 를 console 에 출력해보면 arguments[param1, param2, param3] 의 형식으로 받아올 수 있습니다.
    // 그럼 마찬가지로 arguments[0]인 경우 전달된 param1 의 값을 받아오고, arguments[1]인 경우, 전달된 param2 의 값, arguments[2]인 경우, 전달된 param3 의 값을 받아올 수 있습니다.
    // 또한, 배열이기 때문에 매개변수가 몇개까지 있는지 확인할 수도 있겠죠. arguments.length
}
test(1); //arguments[0] : 1, arguments[1] : undefined, arguments[2] : undefined, arguments[3] : 없음 ...
test(1, 2); //arguments[0] : 1, arguments[1] : 2, arguments[2] : undefined, arguments[3] : 없음 ...
test(1, 2, 3); //arguments[0] : 1, arguments[1] : 2, arguments[2] : 3, arguments[3] : 없음 ...