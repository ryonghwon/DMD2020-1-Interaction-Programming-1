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
// 변수 선언, 배열 값 할당
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];

// Array.reverse(); 원소의 순서를 반대로 정렬
cars.reverse();

// console 출력
console.log(cars);



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
// 변수 선언, 숫자 타입의 원소값으로 이뤄진 배열 할당
var numbers = [-1, 2, 5, 10, 1, -10, 8, 4]

// 배열의 최대값, 최소값
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));



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
// getStar 라는 함수 선언, 매개변수 지정
function getStar (num) {
    // 매개변수의 전달인자 값이 숫자가 아닌 경우
    if (typeof num !== 'number') {
        console.log('숫자만 입력 가능합니다.');
        // false 를 반환
        return false;
    }

    var sum = '';
    for(var a = 1; a <= num; a++) {
        // 매개변수의 전달인자가 숫자인 경우
        if(typeof num === 'number') {
            // 전달인자의 수만큼 '*' 가 반복되는 문자열
            sum += '*';
        }
    }
    return sum;
}
getStar(0);

// 변수 선언, 전달인자 값 지정, console 출력
var star1 = getStar("text");
console.log(star1);

var star2 = getStar(5);
console.log(star2);



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
// 변수 선언, 배열 값 할당
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

// Array.unshift(); - 배열의 첫번째에 원소값을 추가
fruit.unshift('Mango');

// Array.splice(index(number), delete(number), []);
fruit.splice(3, 0, 'Cherry');

// Array.reverse(); 원소의 순서를 반대로 정렬
fruit.reverse();

// console 출력
console.log(fruit);