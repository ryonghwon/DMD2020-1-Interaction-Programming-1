// 21961071 이명빈
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

// cars 라는 변수를 생성하고 배열을 값으로 할당한다.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
console.log(cars); // ["Tesla", "Audi", "Volvo", "Benz"] 출력.

// Benz, Volvo, Audi, Tesla. 순으로 출력하기 위해 원소의 순서를 반대로 정렬하는 reverse 를 사용한다.
cars.reverse();
console.log(cars); // ["Benz", "Volvo", "Audi", "Tesla"] 출력.



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

// numbers 라는 변수를 생성하고 원소 값을 할당한다.
var numbers = [-2, 10, 2, 0, 6, 4, 8];

// 배열의 원소 값 중 최댓값, 최솟값을 출력하기 위해 Math 를 활용한다.
// null : 기준 값을 지정해줌 / 입력하지 않을 시 infinity, -infinity 가 출력됨.

// 최댓값을 구하는 메소드 max(); 사용
console.log(Math.max.apply(null,numbers)); // 10 출력.
// 최솟값을 구하는 메소드 max(); 사용
console.log(Math.min.apply(null, numbers)); // -2 출력.


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

// 함수 getStar 을 호출하고 매개변수로 num1 을 지정한다.
function getStar(num1){

    // 만약 num1의 데이터 타입이 number(숫자 타입)이 아니라면
    if (typeof num1 !== 'number') {
        // "숫자만 입력 가능합니다." 를 출력한다.
        console.log("숫자만 입력 가능합니다.");
        // false 를 반환한다.
        return false;
    }
    
    // 변수 s 를 생성하고 값을 할당한다.
    // 매개 변수의 반환값을 하나로 통일시키기 위함.
    var s = '';
    
    // 매개변수 num1의 전달 인자 값이 숫자가 아닐 경우 전달인자의 수만큼 '*' 가 반복되는 문자열을 출력시키기 위해 for 반복문 사용.
    // 변수 i가 num1 보다 작을 경우 i를 증가 반복 시킨다.
    for(var i = 1; i < num1; i++){
        // 변수 s = s + '*' 
        s += '*';
    }
    // s 를 반환한다.
    return s;
}    

// 변수 star1을 생성하고 함수 getStar("text")를 호출한다.
var star1 = getStar("text"); // "숫자만 입력 가능합니다." 출력
// 변수 star1을 출력한다.
console.log(star1); // false 출력.

// 변수 star1을 생성하고 함수 getStar(5)를 호출한다.
var star2 = getStar(5);
// 변수 star2를 출력한다.
console.log(star2); // ***** 출력.



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

//  변수 fruit를 생성하고 배열 값을 할당한다.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

// 'Mango'를 배열의 첫번째(0번째) 요소에 추가하기 위해 메소드 .unshift(); 를 활용한다.
fruit.unshift('Mango');
console.log(fruit); // ["Mango", "Apple", "Orange", "Grape", "Melon"] 출력.

// 'Cherry'를 'Orange' 요소 뒤에 추가하기 위해 메소드 .splice(); 를 활용한다.
// .splice( 3번째, 0개 삭제, "추가하고자 하는 단어");
fruit.splice(3, 0, "Cherry");
console.log(fruit); //  ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"] 출력.

// 배열의 순서를 반대로 바꾸기 위해 메소드 .reverse(); 사용.
fruit.reverse();
console.log(fruit); //  ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"] 출력.


