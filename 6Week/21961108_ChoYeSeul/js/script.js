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

// 변수 cars를 선언하고 ['Tesla', 'Audi', 'Volvo', 'Benz'] 배열을 값으로 할당.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz']; 

// 먼저 변수 cars를 뒤집어준다. 문자열로 빼기 전 한번 뒤집어 주는 것임.
cars.reverse();

// 함수 X를 선언해준다.
function X(){
    //그 안에 하나의 배열을 만들어준다.
    var _cars = [];
    for(var i = 0; i < cars.length; i++){
        if(i < cars.length-1){
        _cars += cars[i] + ",";
        }
        else{
            _cars += cars[i] + ".";
        }
    }
    // 문자열로 빠진 원소들이 나열되어 return된다.
    return _cars;
}

// 그냥 뒤집어서 출력을 하면 배열로 출력이 된다.
// cars.reverse();

// Benz, Volvo, Audi, Tesla. 출력됨.
console.log(X());


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

// numbers 라는 변수 선언하고 예시에 있는 배열 할당.
var numbers = [-1, 2, 5, 10, 1, -10, 8, 4];

// 변수 Max(최댓값을 담을 변수)를 선언, 기본값을 맨 첫번째 원소로 설정. 앞으로 쭉 첫번째와 뒷순서 원소들을 비교할 수 있도록.
var Max = numbers[0];

// 변수 Min(최솟값을 담을 변수)를 선언, 기본값을 맨 첫번째 원소로 설정. 앞으로 쭉 첫번째와 뒷순서 원소들을 비교할 수 있도록.
var Min = numbers[0];

// for문을 이용하여 계속 반복하도록 만듬.
for(var i = 0; i < numbers.length; i++){

    // numbers[0]부터 Max의 값과 비교 후 Max의 값보다 numbers[i]의 값이 더 크면, 그 값을 Max에 저장.
    if (numbers[i] > Max){
        Max = numbers[i];

    // numbers[0]부터 Min의 값과 비교 후 Min의 값보다 numbers[i]의 값이 더 작으면, 그 값을 Min에 저장.
    }else if(numbers[i] < Min){
        Min = numbers[i];
    }

}
// 가장 큰 숫자는 10 입니다.
console.log("가장 큰 숫자는 " + Max + " 입니다.");
// 가장 작은 숫자는 -10 입니다.
console.log("가장 작은 숫자는 " + Min + " 입니다.");


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

// getStar라는 함수를 선언하고 1개의 a라는 변수를 지정.
function getStar(a){

    // a의 타입이 int, boolean, float가 아닌 경우,
    if(typeof a !== typeof 1){

        // console창에 "숫자만 입력 가능합니다." 출력.
        console.log("숫자만 입력 가능합니다.");
        // false 를 return.
        return false;
    }

    // 3번 문제를 풀기 위한 식.
    // star라는 변수를 하나 선언해주고 " "을 넣어준다. 아무것도 없는 것이 아닌 빈 칸이 있으므로, 이는 변수에 정해진 " "라는 값이 있는 것이다.
    var star = " ";
    // for문을 사용하여 star 변수에 *을 하나씩 저장한다. 변수 a랑 같아질때까지 계속 반복한다.
    for(var i = 1; i <= a; i++){ // var i = 0을 했을 경우에는 별이 하나 더 생긴다.
        star += "*";
    }
    //star 값을 return한다.
    return star;


    // 실패했던 식.
        // for(; (int === c) && (c > 0); ){

        //     b = c + 1;

        // }
        // var b = "*";
        // for(a = 0; (int === c) && (a !== c); a++){
        //     console.log(b+b+b);
        // }
    }


var star1 = getStar("text");
var star2 = getStar(5);
// 숫자만 입력 가능합니다. false.
console.log(star1);
// *****
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

// fruit라는 변수를 선언하고 배열을 값으로 할당한다.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

// unshift를 사용하여 Mango 원소를 첫번째에 추가한다.
fruit.unshift("Mango");
//["Mango", "Apple", "Orange", "Grape", "Melon"]
console.log(fruit);

// splice를 사용하여 4번째에 0개의 원소 삭제 후 Cherry원소를 추가한다.
fruit.splice(3, 0, "Cherry");
// ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
console.log(fruit);

// 원소들의 배열 순서를 반대로 뒤집는다.
fruit.reverse();
// ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]
console.log(fruit);



/*
// BOM 에 해당되는 문제.
### Quest 5.
1. getSize 라는 함수를 선언합니다.
2. 1(순서) 함수가 호출될 때, 윈도우 콘텐츠 영역의 가로 폭 값과 세로 높이 값을 아래의 객체 형식으로 반환합니다.
----------
객체 형식)
{ winWidth : __윈도우 콘텐츠 영역의 가로 폭 값__, winHeight : __윈도우 콘텐츠 영역의 세로 높이 값__ }
----------
3. winSize 변수를 선언, 1(순서) 함수를 호출하고 반환값을 할당받아 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 5.
