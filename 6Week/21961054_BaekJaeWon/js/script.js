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
console.log("< 문제 1 >")
// 변수 cars 선언 후 아래 배열 값으로 할당
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
// 배열 객체 요소 순서 반대로 변경
cars.reverse();
// 쉽표와 띄어쓰기까지 포함한 결과값을 할당시킬 문자열형 변수 _cars 선언
var _cars = "";
// 배열 순서대로 하나하나씩 출력도 가능하지만 for문을 사용하여 알고리즘에 따라 자동으로 출력되도록 해보았다.
// 배열 cars의 길이만큼 반복 실행
for (var i = 0; i < cars.length; i++) 
{
    // 마지막 요소 출력 시엔 쉽표와 띄어쓰기 생략하기 위해 조건문 이용
    // // 배열 길이 - 1(즉, 배열의 마지막 순서일 때)가 i보다 클 때(배열이 끝나기 전에)
    if (i < cars.length - 1)
    {
        // _cars에 "요소 + " 할당
        _cars += cars[i] + "," + " ";
    }
    // 배열 길이 - 1(즉, 배열의 마지막 순서일 때)가 i와 같을 때
    else if (i == cars.length - 1)
    {
        // _cars에 "요소."만 할당
        _cars += cars[i] + ".";
    }
}
// 결과 출력
console.log(_cars);


/*
### Quest 2.
1. numbers 라는 변수를 선언하고 숫자 타입의 원소값들로 이뤄진 배열을 할당합니다.
----------
배열 예시)
[-1, 2, 5, 10, 1, -10, 8, 4]
----------
2. 1(순서) 에서 선언한 변수의 배열 원소값 중 가장 큰 숫자를 console 에 출력되도록 작성합니다.
3. 1(순서) 에서 선언한 변수의 배열 원소값 중 가장 작은 숫자를 console 에 출력되도록 작성합니다.
*/
// Answer 2.
console.log("< 문제 2 >")
// 변수 numbers 선언 후 아래 배열 값으로 할당
var numbers = [10, -100, 1000, 62.3569, -10000, 0, 1.1];

// 방법 1 (기존의 for문을 이용한 방법)
// var max = numbers[0];
// var min = numbers[0];
// for (var i = 0; i < numbers.length; i++)
// {
//     if (numbers[i] > max)
//     {
//         max = numbers[i];
//     }
//     if (numbers[i] < min)
//     {
//         min = numbers[i];
//     }
// }
// console.log("최댓값 = " + max);
// console.log("최솟값 = " + min);

// 방법 2
// Math 개념의 max&min 프로퍼티 사용하여 null과 배열 비교해주어 각 값 출력
console.log("최댓값 = " + Math.max.apply(null, numbers));
console.log("최솟값 = " + Math.min.apply(null, numbers));
// 주의할 점 : .apply를 꼭 붙여주어야 숫자 배열을 파라미터(매개변수)로 전달 가능함.


/*
### Quest 3.
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
console.log("< 문제 3 >")
// 함수 getStar 선언 후 매개변수에 num 할당
function getStar(num)
{
    // if문에선 string, else if문에선 boolean 형식으로 쓰일 변수 star 선언
    var star;
    // 매개변수 num의 전달인자의 데이터 타입이 number라면
    if (typeof num == "number")
    {
        // 초기값 빈 문자열 할당
        star = "";
        // 임의의 변수 i 선언 후 초기값 0으로 할당하여 i가 num 전달인자의 수만큼 될때까지 i값을 증가시키며 반복
        for (var i = 0; i < num; i++)
        {
            // 조건이 참인 동안 star에 "*" 문자열 추가
            star += "*";
        }
    }
    // 매개변수 num의 전달인자의 데이터 타입이 number가 아니라면
    else if (typeof num != "number")
    {
        // 아래 문구 출력
        console.log("숫자만 입력 가능합니다.");
        // 변수 star에 값 false 할당
        star = false;
    }
    // star 반환
    return star;
}
// 매개변수에 전달인자 "text"를 할당시켰을 때의 반환값 할당받은 변수 star1 선언
// 전달인자 할당으로 인해 "숫자만 입력 가능합니다." 도 출력됨
var star1 = getStar("text");
// 매개변수에 전달인자 5를 할당시켰을 때의 반환값 할당받은 변수 star2 선언
var star2 = getStar(5);
// 결과 출력
console.log("getStar(\"text\") 를 호출하여 반환하고 변수를 출력한 결과값 : " + star1);
console.log("getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : " + star2);


/*
### Quest 4.
1. fruit 라는 변수를 선언하고 아래의 배열을 값으로 할당합니다.
----------
['Apple', 'Orange', 'Grape', 'Melon']
----------
2. 'Mango' 라는 문자열을 fruit 배열 객체의 첫 번째에 요소로 추가합니다.
3. fruit 배열 객체의 ‘Orange' 요소 뒤에 'Cherry' 라는 문자열을 요소로 추가합니다.
4. fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/
// Answer 4.
console.log("< 문제 4 >")
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
// 문자열 Mango를 fruit 배열 객체의 첫 번째에 요소로 추가
fruit.unshift('Mango');
// ‘Orange' 요소 뒤에 'Cherry' 라는 문자열을 요소로 추가
// 쓰는법 : Array.splice(index(number - 추가시킬 순서), delete(number - 삭제할 원소 개수), []);
fruit.splice(3, 0, 'Cherry');
// fruit 배열 객체 요소 순서 반대로 변경
fruit.reverse()
// 결과 출력
console.log(fruit);
// 끗 !~!

/* 지난번 과제할 때 이해했던 것도 새로운 과제를 하면 또 다시 깨닫고 새롭게 알고 하는 것 같습니다. 제 머리가 나빠서 그런가요? ㅎ
   프로그래밍 문제를 푸는 건 의도한 대로 나오면 기쁘고 안나오면 그건 그것대로 새로운 걸 알 수 있으니까 또 재밌고 해서 좋은 것 같습니다.
   공부를 하면서 모르는게 더 생기면 많이 질문하도록 할게요. ㅎㅎ
*/
