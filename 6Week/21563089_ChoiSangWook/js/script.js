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
var cars = ["Tesla", "Audi", "Volvo", "Benz"];

// 지우고 추가하는 방법은 안된다.
// cars.pop();
// cars.push("fff"); // 

//수정을 통해서 바꿔보자.
// 0 을 기준으로 4개를 삭제하고 "Benz", "Volvo", "Audi", "Tesla" 로 변경 
cars.splice(0,4,"Benz", "Volvo", "Audi", "Tesla");
console.log(cars); // output : "Benz", "Volvo", "Audi", "Tesla"

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

var numbers = [-1, 2, 5, 10, 1, -10, 8, 4]
// 값을 순서대로 정렬 후 가장 첫번째 값과 끝의 값을 출력해보자!

/*
numbers.sort(); // output : [1, 22, 4, 42, 5, 545, 55, 6] 실패
이유 : 비교 함수를 전달하지 않았을때는 숫자 데이터는 문자열로 변환된 후 유니코드 기준으로 정렬되기 때문!!
*/

// 함수를 활용해서 정렬 시켜 보자!
// 왼쪽에서 오른쪽 
numbers.sort(function(left,right){
     return left - right;
});
console.log(numbers);
/* 오른쪽에서 왼쪽 
numbers.sort(function(left,right){
     return right - left;
});
console.log(numbers);
*/
//조건 2.
console.log(numbers[7]); // output : -10
//조건 3.
console.log(numbers[0]); // output : 10




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


function getstar(a){
     var starr = ""; // 데이터 타입 값을 받을 변수 생성
     if(typeof a !== typeof 123){ 
          console.log("숫자만 입력 가능합니다.")
          return false;
     }
     for(var i = 1; i <= a; i++){ 
          starr += "*"; // 반복문이 실행 될때마다 * 하나가 계속 생김 전달인자가 5면 * 다섯개!
      } return starr;

}
//조건 2
//getstar("3"); // output : 숫자만 입력 가능합니다.  출력확인 완료
var star1 = getstar("text"); 
console.log(star1);// output : false  
var star2 = getstar(5); 
console.log(star2); // output : ***** 숫자 만큼 별이 출력됨 




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
//1.
var fruit = ["Apple", "Orange", "Grape", "Melon"];
//2.
fruit.unshift("Mango"); // 배열 맨 앞에 원소값 추가.
console.log(fruit[0]); //output : "Mango"
//3.
fruit.splice(3, 0, "Cherry"); // 2번째 원소에 원소값을 추가.
console.log(fruit); // output : ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
//4.
fruit.reverse(); // 배열 뒤집기(반대로)
console.log(fruit); // output : ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango]
