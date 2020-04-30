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

function CompareNumbers(a, b){ // 1. CompareNumbers 함수 선언 후 a, b 2개의 매개변수 지정.
 

    if (typeof b == "undefined") // if 조건문 사용, 2. 조건 1 : 만약 두번째 매개변수인 b의 데이터 타입이 undefined일 때 (할당되지 않은 상태일 때)
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
        // "두번째 매개변수의 값을 찾을 수 없습니다" 출력.
    }
    else if(a >= b) // 3. 그렇지 않은 경우(값이 할당된 경우) else if로 넘어간 후 4. 조건 2 : 첫번째 매개변수의 전달인자 값(a) >= 두번째 매개변수의 전달인자 값(b) 일 때. 
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
        // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다." 출력.
    }
    else if(a < b) // 5. 그렇지 않은 경우 else if로 넘어간 후 첫번째 매개변수의 전달인자 값(a) < 두번째 매개변수의 전달이자 값(b) 일 때,
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
        // "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다." 출력.
    }
        
}
CompareNumbers(10); 
// 함수 호출 , 첫번째 매개변수에 할당된 전달인자의 값만 있는 경우 -> "두번째 매개변수의 값을 찾을 수 없습니다." 출력.
CompareNumbers(20, 10); 
// 함수 호출 -> a = 20, b = 10인 경우로, if 절을 지나 else if 절로 이동 후 20 >=10 = true 이므로 "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다." 출력.
CompareNumbers(10, 20); 
// 함수 호출 -> a = 10, b = 20인 경우로, if - else if - else if 절로 이동 후 10 < 10 = true 이므로 "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다." 출력.

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
function getTotal(num,str){ // 1. getTotal 함수 선언, s,i 2개의 매개변수 지정.

    var sum = 0;

    if (str === "add"){ // 조건 1-1. if 절 사용- 두번째 매개변수(str)의 전달인자 값이 "add" 일 경우.
        
        // 증가하는 for 반복문 사용.
        for(var i = 0;  i <= num; i++){ // 초기값 0인 변수 i 생성 ; i가 num보다 작거나 같을경우.
        
        sum = sum + i; // sum = o + i(0,1,2,..)
        // 반복 코드.
        // sum = 0 + i(1,2,3...)
        // 코드가 모두 완료되었을 때 증가.(i++)
        }
    }   

     else if (str === "multiply"){ // 조건 1-2. else if 절 사용 - 두번째 매개변수(str)의 전달인자 값이 "multiply" 일 경우. 
            
            // sum = 0; //곱셈에서 *0 은 언제나 0이므로 0에서 1로 수정
            sum = 1; // 다시 sum의 초기값을 수정.

            // 증가하는 for 반복문 사용.
            for(var i = 1; i <= num; i++){ // 초기값 1인 변수 i 생성 ; i가 nim보다 작거나 같을 경우.

                sum = sum * i;
                // 반복 코드.
                // sum = 1 * i(1,2,3...)
                // 코드가 모두 완료되었을 때 증가.(i++)
            }

        }

    else{ // 그외 나머지의 경우
        sum = 0; //sum = 0.
    }

    return sum; // sum 결과 값을 반환.
    }
    
    
console.log(getTotal(5, "add"));
console.log(getTotal(10, "add"));
console.log(getTotal(5, "multiply"));
console.log(getTotal(10, "multiply"));
console.log(getTotal(100));

// 첫번째 결과 15,55,0,0,0 만 출력 됨.
// 쓰는 도중 생겼던 오타 및 multoply 경우의 else if 에서 sum = 0; 으로 했던 실수 발견, sum의 초기값이 if절에서 변동되었던 것을 발견.
// 곱셈에서 *0 은 언제나 0이므로 0에서 1로 수정.(sum = 1;)




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

function getMaxValue(arr){ // 1. getMaxValue 함수 선언함과 동시에 arr이란 매개변수 지정.

var max = arr[0]; // 숫자 값들을 비교하여 숫자가 가장 큰 경우: 최댓값 구하는 알고리즘 사용 ->  max 변수 선언, 초기값 = arr[0];
var n = 0; // 최댓값일 경우의 배열의 순번. 
for (var i = 0; i < arr.length; i++){ // 2. 반복문 for의 사용. i라는 변수 생성 및 초기값 0 ; i는 arr배열의 길이보다 작을 경우 조건문 실행 ; 이후 i = i + 1 .
    if(arr[i] >= max){ // if 조건문 사용. arr 배열의 i번째가 max 값보다 크거나 같을 경우. i의 초기값은 0, 이므로 0부터 시작하여 max와 비교. 
        max = arr[i]; // max = arr[i]
        n = i; // 나왔던 i값은 새로운 공간의 변수인 n으로 지정.
        }
    
    }
    return n; // n 결과 값을 반환.  가장 큰 값의 길이, 즉 순서를 알아야하므로 max가 아닌 i값인 n의 결과값을 반환해야함.
}    
var Final; // Final이라는 새로운 변수 생성.
Final = getMaxValue([10, -4, 7, 100, "hello", -50]); // 함수에 매개변수 지정.
console.log(Final); //  변수의 값 console창에 출력. 100이 가장 크므로 4번째인 3 출력.
Final = getMaxValue([-400, "world", 60, 0, {}, 1000]); // 함수에 매개변수 지정.
console.log(Final); // 변수의 값 console창에 출력. 1000이 가장 크므로 5번째닌 5 출력.
