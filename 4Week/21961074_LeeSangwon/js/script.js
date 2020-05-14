console.log("외부 자바스크립트 로드");

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


// function compareNumbers(num1, num2){

//     if(typeof num2 === "undefined"){ // 2번째 값을 지정을 안했다면
//         console.log("두번째 매개변수의 값을 찾을 수 없습니다.") // 이게뜬다
//     }

//     if(num1 >= num2){ //첫번째가 2번째보다 크거나 같으면
//         console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."); //이게뜨고
//     }else if(num1 < num2){ // 첫번째가 2번째보다 작으면
//         console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");  // 이게 뜬다.
//     }
// }
// compareNumbers(10);
// compareNumbers(20, 10);
// compareNumbers(10, 20);


//수업시간 복습
/*
function compareNumbers(num1,num2){
    // if(num2 === "undefined"){ // num2 의 값을 비교 (일치 여부)
    //     console.log('1');
    // }
    if(typeof num2 === "undefined"){ // num2의 데이터 타입을 비교.
        //console.log('2');
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    } else{
        //조건 2.
        if ((num1 >= num2)){
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
        } else {
            console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
        }
    }
}
*/
function compareNumbers(num1,num2){
    if(typeof num2 === "undefined"){
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
        return; // 함수 반환을 하기도 하지만 ... 함수를 종료 시키는 기능도 포함.
        // undefined 의 갑시 확인된 경우, 이후의 코드를 실행하지 않음.
    }
    if (num1 >= num2){
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    } else {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}
compareNumbers(10);
compareNumbers(20,10);
compareNumbers(10, 20);



// function msg(name){ //매개변수.
//     //var name; 함수가 정의됨과 동시에 name 이라는 변수가 선언.
//     console.log(name);
// }
// msg(); // name 매개변수의 값이 할당하지 않은 상태로 호출.
// //var name; //값이 할당되있지 않은 상태. undefined, 변수 선언만 되어 있는 상태.

// msg("이상원"); // argument - 전달인자 : 함수 호출이 이뤄질 때, 매개변수에 값을 지정하는 것.
// msg("이름");
// msg(1);
// msg({name: "sangwon", key : "value"}); //객체를 넣을 수도 있다.


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

/*
function getTotal(num, string){ //2개의 매개변수를 지정
    var sum = 0;  
    if(string === "add"){ // 2번째 문자값이 "add" 이면 
        for(var i=1; i<=num; i++){ // 반복문을 사용해서 num의 값까지 반복
            sum = sum += i; // 0부터 지정한 num의 값까지 더하면 반복이 멈춤
        }
    }else if(string === "multiply"){ // 2번째 문자값이 "multply" 이면
        var sum = 1; //0부터 곱하면 모든 값이 0이됩니다
        for(var i = 1; i <= num; i++){ //0부터 num까지 반복
            sum = sum *= i; // 곱해준다
        }
    }else{
        sum = 0; //다른 모든 경우에는 0이다
    }
    return sum; //결과값 반환
}
var result;
result = getTotal(5, "add"); 
console.log(result); //15
result = getTotal(10, "add");
console.log(result); //55
result = getTotal(5, "multiply");
console.log(result); //120
result = getTotal(10, "multiply");
console.log(result); //3628800
result = getTotal(100); //지정해준건 문자밖에 없어서 100을 호출?하면 다른 경우에 지정한 0 이 뜬다
console.log(result); //0

*/

function getTotal(number, string){
    var result = null; // 결과값을 받기 위한 변수.
    if (string === "add"){
        // 1 ~ number 까지의 모든 수를 덧셈 연산.
        for (var i = 1; i <= number; i++){// number 의 값까지 반복되도록 구문 작성.
            if (i === 1){
                // 초기값을 대입.
                result = i; // 반복문이 첫번째 동작할 때, result 값에 1이 대입.
            }else{
                // 이후부터 연산이 될 수 있게.
                result += i;
                // result = result + i;
            }
        }
        //console.log(result); //1 ~ number 까지 덧셈 연산 완료한 결과 값.
    } else if (string === "multiply"){
        //1 ~number 까지의 모든 수를 곱셈 연산.
        for (var i = 1; i <= number; i++){
            if ( i === 1){
                result = i;
            } else{
                result *= i;
                // === result = result * i;
            }
        }
    } else {
        result = 0;
        //0
    }
    return result;
}
var totalResult = null;
totalResult = getTotal(5, "add")
console.log(totalResult);
totalResult = getTotal(10, "add")
console.log(totalResult);
totalResult = getTotal(10, "multiply")
console.log(totalResult);
totalResult = getTotal(100)
console.log(totalResult);






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
/*
function getMaxValue(arr){
    var maxnum = arr[0]; //배열의 첫번째 순서부터 뭐가 제일큰지 알기위해 maxnum 변수를 지정
    var num = 0; //제일 큰수가 몇번째인지 알기위해서 변수를 지정
    for(var i=0; i < arr.length; i++){ //제일 큰수가 몇번째인지 알려면 반복을 해줘야겠죠? 
        if(maxnum < arr[i]){ //만약에 [0]번째의 값이 i의 값보다 작으면으로 시작해서
            maxnum = arr[i]; // 쭉쭉 반복해서 제일 큰 값의 위치를 찾아주면
            num = i; // num은 그 위치 값입니다
        }
    }
    return  num; //결과를 반환해서
}

var test;

test = getMaxValue([10, -4, 7, 100, "hello", -50]); //3
console.log(test);
test = getMaxValue([-400, "world", 60, 0, {}, 1000]) //5
console.log(test);

*/

function getMaxValue(array){
    var max = array.length; // 배열의 원소 개수.
    // 숫자를 비교하기 위한 변수 - 반복문이 동작될 때, 최대값을 담아두기 위한 변수.
    // 반복 시 , maxValue 와 array[?] 원소 값을 비교해서 원소 값이 크면 maxValue 의 값을 대체.
    var maxValue = null; // 숫자로서 준비.
    var maxOrder = null; // 최대값인 원소의 순서를 찾기 위한 변수.
    for(var i = 0; i < max; i++){ // 배열의 반복문을 작성.
        if (typeof array[i] === "number"){
            if (i === 0){
                maxValue = array[i]; // 반복문 구문이 처음 실행될 때, array 의 0번째 원소값을 대입.
                maxOrder = i;
            } else {
                if(maxValue < array[i]) {
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
console.log(maxValueResult);
maxValueResult = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log(maxValueResult);




function getMaxValue2(array){
    var max = array.length; // 배열의 원소 개수.
    // 숫자를 비교하기 위한 변수 - 반복문이 동작될 때, 최대값을 담아두기 위한 변수.
    // 반복 시 , maxValue 와 array[?] 원소 값을 비교해서 원소 값이 크면 maxValue 의 값을 대체.
    var maxValue = null; // 숫자로서 준비.
    var maxOrder = null; // 최대값인 원소의 순서를 찾기 위한 변수.
    var isfirst = false; //Boolean 원소의 값이 숫자가 되는 처음 시점을 확인하기 위한 boolean 변수.
    for(var i = 0; i < max; i++){ // 배열의 반복문을 작성.
        if (typeof array[i] === "number"){
            if (!isfirst){ ///////// ----- 첫 0번째 숫자가 아닐 때 문제가 된다.
                // isfirst 라는 boolean 상태를 비교하여 처음 숫자가 비교되는 시점에 코드 시작.
                maxValue = array[i]; // 반복문 구문이 처음 실행될 때, array 의 0번째 원소값을 대입.
                maxOrder = i;
                isfirst = true; // 초기값 설정이 완료된 상태로 변경.
            } else {
                if(maxValue < array[i]) {
                    maxValue = array[i];
                    maxOrder = i;
                }
            }
        }
    }
    console.log(maxValue, maxOrder);
    return maxOrder;
}


maxValueResult = getMaxValue2([{}, ":)", 100, 20000, -1000, 10]);
console.log(maxValueResult);