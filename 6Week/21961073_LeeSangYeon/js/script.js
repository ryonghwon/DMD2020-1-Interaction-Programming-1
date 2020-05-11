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
// Answer 1
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
cars.reverse(); 
function lsy(){ //새로운 함수 lsy 생성
    var carr = []; // 변수 carr 생성 - [] <-- cars의 변수들이 증가 +  누적되는 공간을 만들어 줌
    for(var i = 0; i < cars.length; i++){ // 새로운 변수 i 생성, i가 for문으로 인해 증가하여 cars의 배열의 숫자보다 커지면 for문 종료
        if(i < cars.length-1){
            carr += cars[i] + ", "; // cars의 각 배열 뒤에 ", "가 출력되도록 함
        }else{
            carr += cars[i] + "."; // cars의 배열 뒤에 "."가 출력되도록 함
        }
    }
   return carr;
}
// Benz, Volvo, Audi, Tesla. 
console.log(lsy()); // Benz, Volvo, Audi, Tesla. - 출력





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
var numbers = [-1, 2, 5, 10, 1, -10, 8, 4];
// var number과 [-1, 2, 5, 10, 1, -10, 8, 4]; 이 같기 때문에 둘 다 사용해 보았습니다.
// 6주차 수업 복습
console.log(Math.max.apply(null,[-1, 2, 5, 10, 1, -10, 8, 4])); // 10
console.log(Math.min.apply(null, numbers)); // -10

// 4주차 수업 복습
function maxmin(numbers) {// getMaxValue 함수를 선언. 매개변수(배열타입) 지정.
    // 최대값을 담아줄 high 라는 변수를 생성한 뒤 값을 [0]으로 설정.
      var high = numbers[0]; 
    // 최소값을 담아줄 row 라는 변수를 생성한 뒤 값을  [0]으로 설정.
      var row = numbers[0]; 
    //for문을 사용. 새로운 변수 l 을 생성한 후, 값 0 지정. 증감 연산으로 인해 값이 되는 것을 볼 수 있을 것.
      for (var l = 0; l < numbers.length; l++) { 
        if (numbers[l] > high) {
            high = numbers[l]; // 최대값 저장

        }else if(numbers[l] < row) {
            row = numbers[l]; // 최소값 저장

        }
        mxm_number = "가장 큰 숫자는 " + high + "," + " 가장 작은 숫자는 " + row + " 입니다.";
        
      }
      return mxm_number; // 최대값+최소값 반환
    }
    var bbm = maxmin(numbers);
    console.log(bbm); 
    


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
function getStar(num){ // getStar 라는 함수를 선언하고, 1개의 매개변수(숫자 타입)를 지정
    if(typeof num !=='number'){ // 함수가 호출될 때, 매개변수의 전달인자 값이 숫자가 아닌 경우
    console.log("숫자만 입력 가능합니다."); // //console 에 "숫자만 입력 가능합니다." 출력
    return false; //false - 출력
}else{ // 함수가 호출될 때, 매개변수의 전달인자가 숫자인 경우
var i = 1; // 변수 i을 선언
var s = ""; // '*' 가 반복될 문자열(string) " " 지정
    for(i; i <= num; i++) { // num이 i보다 크거나 같으면 증가
        s += "*"; // s 에 * 대입.
        }   
        return s; // s - 출력
    }
}
var star1 = getStar("text"); // star1 변수를 선언한 뒤, getStar("text") 호출
console.log(star1); // 숫자만 입력 가능합니다., false - 출력
var star2 = getStar(5); // star2 변수를 선언한 뒤, getStar(5) 호출
console.log(star2); // ***** - 출력



    


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
// Answer 4

//fruit 라는 변수를 선언하고 배열 값 ['Apple', 'Orange', 'Grape', 'Melon'] 지정

//fruit 라는 변수를 선언하고 배열 값 ['Apple', 'Orange', 'Grape', 'Melon'] 지정
var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; 
// unshift 사용
// 'Mango' 라는 문자열을 fruit 배열 객체의 첫 번째에 요소로 추가
fruit.unshift('Mango');
console.log(fruit); // ["Mango", "Apple", "Orange", "Grape", "Melon"] 출력
// splice 사용
// fruit 배열 객체의 ‘Orange' 요소 뒤에 'Cherry' 라는 문자열을 요소로 추가
fruit.splice(3, 0, "Cherry");
console.log(fruit); // ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"] 출력
// reverse 사용
// fruit 배열 객체의 요소 순서를 반대로 변경
fruit.reverse(); 
console.log(fruit); // ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"] 출력