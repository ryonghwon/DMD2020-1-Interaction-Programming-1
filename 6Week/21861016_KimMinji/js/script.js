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
// cars 라는 변수를 선언한 후, 배열을 값으로 할당할 것.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
// 원소의 순서를 반대로 정렬하는 Array.reverse();를 이용하여 작성할 것.
cars.reverse();
// 원소의 순서가 반대로 정렬된 변수 cars를 문자열의 형태인 Benz, Volvo, Audi, Tesla.로 console에 출력해볼것.

// 1-1. 인덱스를 활용한 간단한 출력.
// 배열 안의 원소에는 인덱스가 부여되어 있어 인덱스를 통해 출력한다.
// 인덱스의 순서는 0부터 시작하므로 배열의 마지막 인덱스는 배열의 원소 수 - 1이므로 3까지다.
// Benz, Volvo, Audi, Tesla.
console.log(cars[0] + ", " + cars[1] + ", " + cars[2] + ", " + cars[3] + ".");

// 1-2. for 반복문, if 조건문을 활용한 출력.
// 답을 구하기 위해 변수 answer를 선언.
// 문자열이기 때문에 초기값으로 ""를 설정한다.
var answer = "";
// 변수 i의 초기값을 0으로 설정하고, i가 cars의 배열의 길이보도 작을 때까지 후위증가 연산자를 통해 1씩 증가시킨다.
for (var i = 0; i < cars.length; i++){
    // if 조건문을 통해 i가 cars의 배열 길이-1 보다 작으면 그 인덱스에 해당하는 원소값과 ,를 더한 값을 answer에 대입한다. 
    if (i < cars.length-1){
        answer += cars[i] + ", ";
    }
    // 나머지인 else는 cars의 배열 길이-1과 같을 경우에 해당하므로 원소 값과 .를 더한 값을 answer에 대입한다.
    else{
        answer += cars[i] + ".";
    }
}
// answer를 출력.
// Benz, Volvo, Audi, Tesla.
console.log(answer);



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
// numbers 라는 변수를 선언한 후, 숫자 타입의 원소 값들로 이뤄진 배열을 할당할 것.
var numbers = [-1, 2, 5, 10, 1, -10, 8, 4];
// 선언한 변수의 배열 원소값중 가장 큰 순자를 console에 출력할 것.
// 원소값 중 최대값을 반환하는 Math.max.apply() 활용.
console.log(Math.max.apply(null,numbers)); // 10
// 원소값 중 최소값을 반환하는 Math.min.apply() 활용.
console.log(Math.min.apply(null,numbers)); // -10



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
// getStar 라는 함수를 선언하고, 1개의 매개 변수(숫자 타입)를 지정할 것.
function getStar (number){
    // if 조건문을 활용한 매개변수의 전달인자 값이 숫자가 아닌 경우 
    if (typeof number !== "number"){
        // 숫자만 입력 가능합니다.를 출력할 것.
        console.log("숫자만 입력 가능합니다.");
        // false를 반환할 것.
        return false;
    }
    // else if 조건문을 활용한 매개변수의 전달인자 값이 숫자인 경우
    else if (typeof number === "number"){
        // 값을 출력하기 위한 변수 a 선언.
        var a = "";
        // for 반복문을 통해 i의 초기값을 0으로 설정하고 number(전달인자)의 수만큼 *가 반복되어 더해져 a에 대입되도록 설정.
        for (i = 0; i < number; i++){
            // a = a + "*";
            a += "*";
        }
        // a의 값을 반환할 것.
        return a;
    }
}
// star1 변수를 선언, getStar("text") 를 호출하고 반환값을 할당받을 것.
var star1 = getStar("text");
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false가 출력되도록 할 것.
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false를 출력하려면 문자열로 인식하도록 \"text\"로 작성.
// "text"의 타입이 숫자가 아니기 때문에 숫자만 입력 가능합니다. 가 함께 출력된다.
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
console.log("getStar(\"text\") 를 호출하여 반환하고 변수를 출력한 결과값 : " + star1);
// star2 변수를 선언, getStar(5) 를 호출하고 반환값을 할당받을 것.
var star2 = getStar(5);
// getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****이 출력되도록 할 것.
// 5는 숫자이기 때문에 5만큼 *가 반복된다. *****
// getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
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
// fruit 라는 변수를 선언한 후, 배열을 값으로 할당할 것.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
// 'Mango' 라는 문자열을 fruit 배열 객체의 첫 번째에 요소로 추가할 것.
// 배열의 첫번째에 원소 값을 추가하는 Array.unshift();를 활용.
fruit.unshift('Mango');
// fruit의 배열을 확인하기 위해 출력해볼 것.
// ["mango", "Apple", "Orange", "Grape", "Melon"]
console.log(fruit);
// fruit 배열 객체의 ‘Orange' 요소 뒤에 'Cherry' 라는 문자열을 요소로 추가할 것.
// 문자열을 요소로 추가하기 위해 Array.splice(index(number), delete(number), []);를 활용.
// Array.splice(시작하는 시점에 대한 순서, 삭제하려고 하는 원수의 개수, []);
// 위에서 Apple 앞에 Mango 요소가 추가된 것을 유의하도록 할 것.
fruit.splice(3, 0, 'Cherry');
// fruit의 배열을 확인하기 위해 출력해볼 것.
// ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
console.log(fruit);
// fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성할 것.
// 배열 객체의 요소 순서를 반대로 정렬하는 Array.reverse();를 활용.
fruit.reverse();
// console 에 배열 출력.
// ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]
console.log(fruit);