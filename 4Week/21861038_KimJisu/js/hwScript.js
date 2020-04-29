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
function compareNumbers(num1, num2) // 매개변수 2개 생성
{
    if(num2 === undefined) // 조건 1, undefined -> 값 지정이 되어 있지 않음.
    {
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.");
    }
    else if(num1 >= num2) // 조건 2
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    }
    else if(num1 <= num2) // 조건 3
    {
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
}
compareNumbers(10);     // 조건 1 : 매개변수 n1 에만 값을 넣었을 때
compareNumbers(20, 10); // 조건 2 : n1이 n2보다 크거나 같을 때, n1에 10을 넣었을 때도 같은 결과가 출력되었다.
compareNumbers(10, 20); // 조건 3 : n1이 n2보다 작을 때

// 매개변수의 타입은 매개변수에 전달인자를 넣을 때 정해진다... 가 맞나요?



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
function getTotal(num3, str1)
{
    var sum = 0; // 조건 1-1과 1-2를 위해 쓴 변수로 범위 안에 있는 숫자를 모두 합하거나 곱한 값을 저장한다. 
    if(str1 === "add") // 조건 1-1
    {
        for(var i1 = 0; i1 <= num3; i1++) // 반복할 범위를 num3인 이유는 num3의 값이 변할 때마다 바로 적용시키기 위해서이다.
        {
            sum += i1;
            /*
            num3가 5일 때
            i1 -> 0
            sum = 0 + 0;
            i1 -> 1
            sum = 0 + 1;
            i1 -> 2
            sum = 1 + 2;
            i1 -> 3
            sum = 3 + 3;
            i1 -> 4
            sum = 6 + 4;
            i1 -> 5
            sum = 10 + 5; 이므로
            sum은 최종적으로 15가 대입된다.
            */
        }
        //console.log(sum); 처음에 계산 후 바로 값을 확인하기 위해 썼다.
    }
    else if(str1 === "multiply") // 조건 1-2
    {
        sum = 1; // 변수는 재사용이 가능하며 1을 대입한 이유는 0을 곱하면 계속 0이 나오기 때문이다.
        for(var i2 = 1; i2 <= num3; i2++) // sum과 같은 이유로 i2의 초기값 또한 1로 설정했다.
        {
            sum *= i2;
            /*
            num3가 5일 때
            i2 -> 1
            sum = 1 * 1;
            i2 -> 2
            sum = 1 * 2;
            i2 -> 3
            sum = 2 * 3;
            i2 -> 4
            sum = 6 * 4;
            i2 -> 5
            sum = 24 * 5; 이므로
            sum은 최종적으로 120이 대입된다.
            */
        }
        //console.log(sum); 처음에 계산 후 바로 값을 확인하기 위해 썼다.
    }
    else if(str1 === undefined) // 조건 1-3, 조건 1-1, 1-2는 모두 두 개의 매개변수 값이 있음으로 첫번째 매개변수에만 값을 넣으면 성립된다.
    {
        sum = 0; // 재사용 하여 값을 0으로 넣어줬다.
        //console.log(sum); 처음에 값을 바로 확인하기 위해 썼다.
    }
    return sum; // 값을 반환받기 위해 return을 썼다.
}
/*
getTotal(5, "add");
getTotal(10, "add");

getTotal(5, "multiply");
getTotal(10, "multiply");

getTotal(100);
처음에 계산 후 바로 값을 확인하기 위해 썼다.


var return1 = getTotal(3, "add"); // 변수를 생성하고 매개변수 (전달인자)값을 지정했다.
console.log("조건 1-1의 값 " + return1); // 변수 return1의 값 출력

var return2 = getTotal(5, "multiply"); // 변수를 생성하고 매개변수 (전달인자)값을 지정했다.
console.log("조건 1-2의 값 " + return2); // 변수 return2의 값 출력

var return3 = getTotal(); // 변수를 생성하고 매개변수 (전달인자)값을 지정했다.
console.log("조건 1-3의 값 " + return3); // 변수 return3의 값 출력

변수 재사용하면 된다...는 게 생각이 났다... 그래서!
*/
var return1 = getTotal(3, "add");
console.log("조건 1-1의 값 " + return1); // 6

var return1 = getTotal(5, "multiply");
console.log("조건 1-2의 값 " + return1); // 120

var return1 = getTotal();
console.log("조건 1-3의 값 " + return1); // 0



/*
Quest 3.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 
   1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
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
function getMaxValue(arr)

{
    var maxNum = 0; // maxNum은 배열 원소들을 비교해 가장 큰 값만 저장한다.
    for(var i3 = 0; i3 < arr.length; i3++) // arr.length는 arr이라는 배열의 원소 갯수를 의미한다. 배열을 0부터 시작하므로 <=을 쓰지 않아도 된다.
    {
        if(maxNum < arr[i3]) // maxNum이 arr[i3]보다 작을 때
        {
            maxNum = arr[i3]; // arr[i3]의 값을 maxNum에 저장하기로 했고
        }
    }
    console.log(maxNum);
}
getMaxValue([-400, "world", 60, 0, {}, 1000]);
결과적으로 1000이 나왔다.
하지만 Quest3에서 숫자 값만 비교하며, 제일 큰 값이 아닌 제일 큰 값의 순서를 원한다.
먼저 숫자 값만 나오게 해본다.
{
    var maxNum = 0;
    for(var i3 = 0; i3 < arr.length; i3++)
    {
        if(typeof arr[i3] === "number") // 숫자 타입만 나오게 arr[i3]의 타입이 "Number" 와 일치할 때 라는 조건문을 썼다.
        {
            maxNum = arr[i3]; // maxNum에 arr[i3] 값을 넣어
            console.log(maxNum); // 출력했다.
        }
    }
}
getMaxValue([-400, "world", 60, 0, {}, 1000]);
결과는 -400, 60, 0, 1000이 출력되었다.
이제 큰 값의 순서를 나오게 해본다.

{
    var maxNum = 0;
    for(var i3 = 0; i3 < arr.length; i3++)
    {
        if(typeof arr[i3] === "number")
        {
            if(maxNum < arr[i3]) // maxNum이 arr[i3]보다 작을 때
            {
                maxNum = i3; // 배열 원소 중 제일 큰 값의 순서를 넣어준다.
            }
        }
    }
    console.log(maxNum);
}
getMaxValue([-400, "world", 60, 0, {}, 1000]);
배열은 0부터 시작하므로 결과는 5가 나온다.
그래서 최종적으로
*/
function getMaxValue(arr)
{
    var maxNum = 0;
    for(var i3 = 0; i3 < arr.length; i3++)
    {
        if(typeof arr[i3] === "number")
        {
            if(maxNum < arr[i3])
            {
                maxNum = i3;
            }
        }
    } 
    return maxNum;
}
var return2 = getMaxValue([10, -4, 7, 100, "hello", -50]);
console.log("제일 큰 값의 배열 순서는 " + return2); // 3

var return2 = getMaxValue([-400, "world", 60, 0, {}, 1000]);
console.log("제일 큰 값의 배열 순서는 " + return2); // 5

var return2 = getMaxValue([-400, "world", 60, 0, {}, 2]);
console.log("제일 큰 값의 배열 순서는 " + return2); // 2