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

var cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; // 1. cars 라는 변수 선언 후 배열 객체.
 // console.log(cars); // Array(4).
 // 문자열 형태로 Benz - Volvo - Audi - Tesla 순서, 즉 cars 배열 원소를 반대 순서로 console창 창에 출력되도록.
 cars.reverse(); //  cars의 원소 순서를 반대로 정렬
// console.log(cars); ->  ["Benz", "Volvo", "Audi", "Tesla"]. 문자열로만 나오도록 하려면?
/*1차시도
var text; // 값을 담아줄 새로운 공간을 만들기 위한 변수 생성.
for(var i =0; i < cars.length; i++){
    text = text + cars[i];
}
console.log(text); // undefinedBenzVolvoAudiTesla 출력
*/
var text =""; // 나왔던 undefinded 해결하기 위해.? 근데 왜 나오는지는 모르겠습니다. text 변수의 타입이 정해지지 않아 생긴 것 같기도..합니다..,.,.,.
            // 콘솔 창에서 보이지 않게 하기 위해 문자열형의 빈칸으로 진행.
for(var i =0; i < cars.length; i++){ 
    // for 반복문 (새로운 변수 i 생성, 초기값은 0 (0을 설정한 이유가 배열의 첫번째를 부르기 위해선 cars[0] 부터 시작하게 하기 위함); 조건절(cars 배열의 길이가 i보다 클 시(true) for문 실행.); 반복할 때마다 i는 1씩 증가. )
    
    if(i < cars.length-1){ // if 조건문 (i가 cars 배열의 길이의 -1 보다 작을시 if문의 조건절 실행.)
        text = text + cars[i] + ", "; // 조건절; text(새로운 공간) = text + cars의 i번째 + ", ".
    }
    else{ // 그 외 경우에는 (cars 배열의 가장 마지막.)
        text = text + cars[i] + "."; // 마지막 부분에는 .
    }
}
 
console.log(text); // Benz, Volvo, Audi, Tesla.


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

var numbers = [-1, 2, 5, 10, 1, -10, 8, 4]; //1. numbers 라는 변수를 선언하고 배열 할당.
// console.log(Math.max.apply(numbers)); //2. 가장 큰 숫자 -> 최대값 구하기 :  -Infinity.
// Infinity가 무엇인지 궁금해 검색- 자바스크립트에서 표현할 수 있는 양의 수를 넘는 무한대를 나타내는 값?
// 또는 어떤 수를 0으로 나누었을때 나오는 값이기도 함.
// - 가 붙은건 음의 무한대를 뜻함. 그러나 왜 null을 넣어야만 하는지는 잘 모르겠습니다.

console.log(Math.max.apply(null,numbers)); // 10. 
console.log(Math.min.apply(null,numbers)); // -10.




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
function getStar(num) // 1. getStar 라는 함수 선언 후 매개변수 지정.
{  
    var u; // 함수를 반환하기 위해 새로 만든 변수 u. 
    var n = ""; // 값을 담아줄 새로운 공간을 만들기 위한 변수 생성.
    if(typeof num != "number") // 2. if 조건문 (num 변수의 데이터 타입이 숫자가 아니라면(부정)),
    {
       u = false; // u는 false를 반환. 정확히 false를 '반환' 한다는 의미가 이게 맞는지, 아니면 함수의 반환처럼 새롭게 진행하는건지 잘 모르겠습니다..,
       console.log("숫자만 입력 가능합니다."); // console 창에 "숫자만 입력 가능합니다" 출력.
    } else if(typeof num === "number") // 3. else if 조건문 (num 변수의 데이터 타입이 숫자라면),
    {
       for(var i = 0; i < num; i++) // for 반복문 (i 변수 생성, 초기값 0; i가 num 변수보다 작을 시(true) for문 실행; 반복할 때마다 i는 1씩 증가).
       {
            n = n + "*"; //
       }
       u = n; // u는 n을 반환.
    }
    return u; // 함수 반환.
}
var star1 = getStar("text"); // 4. star1 변수 선언 후 초기값은 getStar("text") 호출 후 반환값을 할당.
console.log(star1); // 변수 출력한 결과값 ; false.

var star2 = getStar(5); // 5. star2 변수를 선언, getStar(5) 를 호출하고 반환값을 할당
console.log(star2); // 변수 출력한 결과값 ; *****.



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

var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; // 1.
fruit.unshift('Mango'); // 2. Array의 Method 이용 - 추가 메서드인 .unshift 이용.
// console.log(fruit); // ["Mango", "Apple", "Orange", "Grape", "Melon"]
// 3. 요소 수정 및 추가? 수정 메서드인 .splice(index(), delete(), value) 사용. -->
fruit.splice(3,0,"Cherry");
//console.log(fruit); // ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
fruit.reverse(); // 4. 배열 요소 순서 반대 변경 메서드 : .reverse 사용.
console.log(fruit); //["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]

// 이번 과제는 전체적으로 지금까지 배웠던 문제들을 복습하는 문제인 것 같아 재정비하면서 헷갈렸던 부분들을 정리하는 시간이었던 것 같습니다.
// 아직 정말 많이 고민해야하고 확실하지 않은 부분이 많아 복습을 더 철저히 해보겠습니다. 감사합니다..:)