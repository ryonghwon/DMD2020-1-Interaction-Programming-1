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

var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
//Array.reverse(); //원소의 순서를 반대로 정렬

console.log(cars);
cars.reverse();
console.log("reverse: " + cars);

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


// //numbers 변수 선언
// var numbers =[-1, 2, 5, 10, 1, -10, 8, 4]; //숫자 타입의 원소값들로 이루어진 배열 할당
// var max = numbers.length;

//     //각 배열의 갯수를 구하는 for문 
//     for(var i=0; i<max; i++)
//     {
//         if(numbers[i] > i ){
//             var maxValue = numbers[i];
//             var maxcount = i;
//         }
//     }
//     console.log("최대값 "+ maxValue+" : "+maxcount);

//뭔가 이상해서 문제 다시 읽고 보니 배열 중 큰 값과 작은 값만 찾도록 하는거였군요...!!

//Array.reduce();

var numbers =[-1, 2, 5, 10, 1, -10, 8, 4];

var max=Math.max.apply(null, numbers);
console.log(max);

var min=Math.min.apply(null, numbers);
console.log(min);

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

function getStar(number){
    if(typeof number!=="number"){
        console.log("숫자만 입력 가능합니다");
        return false;
    }else if (typeof number=="number"){
        var sstar="반복 문자열 : ";
        for(var i=1; i<=number; i++){//입력될 숫자만큼 for문을 통해 반복해라 ex) 5 => 5번 반복
            sstar += "*";
        }
    }
    return sstar;

}
var star1 = getStar("text");
console.log(star1);

var star2 = getStar(5);
console.log(star2);

// var star3 = getStar(true);
// console.log(star3) //false가 뜬다!



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

var fruit=['Apple', 'Orange', 'Grape', 'Melon']; 
console.log(fruit);

fruit.unshift("Mango");
console.log("배열 앞에 Mango 추가하기 : "+fruit);

fruit.splice(3,0,"Cherry");
console.log("중간에 Orange 추가하기 : "+fruit);

fruit.reverse();
console.log("반대로 출력하기 : "+fruit);




