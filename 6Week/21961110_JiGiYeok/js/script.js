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
/* 
var cars = ["Tesla", "Audi", "Volvo", "Benz"];
function Member(){
    var _cars = [];
    for(var i = 0;i < cars.length;i++){
        if(i < cars.length-1){
        _cars += cars[i]+ ", ";
        }
        else{
            _cars += cars[i] + ".";
        }
    }
    return _cars;
}
console.log(Member());
위처럼 
Benz, Volvo, Aud, Tesla. 순서 반대로 출력이되어
다음과 같이 수정하였습니다.
*/
var cars = ["Tesla", "Audi", "Volvo", "Benz"]; // cars라는 배열을 생성해주고 차 이름들을 배열로 넣어줍니다.
cars.reverse(); // car의 배열을 결과값과 같이 출력하기 위해 뒤집어줍니다.
function Member(){ // Member라는 함수를 생성해줍니다.
    var _cars = []; // _cars라는 새로운 변수를 만들고 []값을 넣어줍니다. ([]값을 초기에 넣어주지 않으면 undefined가 앞에 출력이 됩니다.)
    for(var i = 0;i < cars.length;i++){ // for문을 생성하고 i변수를 생성, cars의 배열 범위보다 i의 값이 커지면 for문 종료, i는 1씩 커집니다(for문이 실행될 동안.)
        if(i < cars.length-1){ // if문으로 for문이 실행될 동안 cars배열의 범위에 -1값을 넣어 마지막 바로 전까지
        _cars += cars[i]+ ", "; // _cars 변수에 cars[i] -> cars의 배열의 각각의 객체들을 불러오고 뒤에 , 를 붙이면서 더해줍니다.
        }
        else{ // else로 cars 배열의 마지막열의 문자를 _cars에 추가해주고 .을 붙여주고 for문의 함수를 종료합니다.
            _cars += cars[i] + ".";
        }
    }
    return _cars; // _cars의 값을 반환해줍니다.
}
console.log(Member()); // Member의 함수를 실행시키고 출력함으로써 반환되었던 _cars의 값이 출력이 됩니다.



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
//쉬운 함수를 배웠지만 복습 개념으로 함수를 사용해서 풀어봤습니다.
var numbers = []; // numbers 라는 배열함수 생성
numbers = [-1, 2, 5, 10, 1, -10, 8, 4]; // number에 배열을 반환해줍니다.
var high = numbers[0]; // 높은값
var low = numbers[0]; // 낮은값
function cal(){
    for(var i = 0;i < numbers.length;i++){ // 증가하는 i의 값이 number배열의 배열 숫자만큼보다 커지면 for문 종료
        var last; // 높은값과 낮은값을 같이 반환하기위한 변수 last 생성
        if(numbers[i] > high){ // number의 배열의 숫자가 high보다 크면 high에 값을 반환 하는 형식으로 더 큰값들만 high에 입력
            high = numbers[i];
        }
        else if(numbers[i] < low){ // 반대로 작은 값들만 low에 반환
            low = numbers[i];
        }
        last = "가장 큰 숫자 : " + high + ", 가장 작은 숫자 : " + low; // last에 high값과 low값을 반환해줍니다.
    }
    return last; // return으로 last값을 반환합니다.
}
console.log(cal()); // 가장 큰 숫자 : 10, 가장 작은 숫자 : -10 출력이 됩니다.

//console.log(Math.max.apply(null, numbers)); // 더 쉬운방법.. numbers배열의 가장 큰 값을 구합니다.
//console.log(Math.min.apply(null, numbers)); // 더 쉬운방법.. numbers배열의 가장 작은 값을 구합니다.




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
function getStar(num){ // getStar이라는 함수를 생성하고 num을 매개변수로 넣습니다.
    var c = ""; // c라는 변수를 생성합니다 // 매개변수 값을넣은 함수를 출력시킬때 return값을 하나로 통일시키기 위함.
    if(typeof num === "number"){ // if문을 생성하고 num변수의 typeof로 타입을 확인해서 ===연산자로 number(숫자)타입이면 실행되게끔 합니다.
        for(var i = 0; i < num;i++){ // *을 문자열로 num숫자만큼 출력되게끔 하기위한 for문 생성 i가 증가하고 num보다 커지면 for문 종료
            c += "*"; // number값까지의 *갯수를 계속 합함. // 결과적으로는 num변수의 숫자까지 *는 누적됨
        }
    }
    else{ // 숫자 타입이 아닌 값이 입력되었다면..
        console.log("숫자만 입력 가능합니다."); // console에 "숫자만 입력 가능합니다."를 출력합니다.
        c = false; // c에 값을 false를 넣어줍니다. 매개변수를 입력하고 최종으로 값을 반환시킬때 반환되는 값을 통일하고 하나만 출력되게끔 하기 위함.
    }
    return c; // c 값 반환 // c에는 매개변수 타입이 숫자일시엔 *가 숫자만큼 합산되어 반환되고, 다른값일때는 false가 반환됩니다.
}

var star1; //stars1이라는 변수를 생성해줍니다.
star1 = getStar("text"); // stars1에 getStar함수에 매개변수로 text를 넣어주어 값을 반환해줍니다.
console.log(star1); // 숫자만 입력 가능합니다 메세지와 함께 false 출력 // 반환된 c값에는 false가 입력이 되어있고. console출력으로 숫자만 입력 가능합니다.를 넣어줬기때문.

var star2; //stars2라는 변수를 생성합니다.
star2 = getStar(5); // stars2변수에 getStar함수에 매개변수로 5값을 입력해주면 숫자가 입력되어 if문의 for문이 실행이 됩니다.
console.log(star2); // 따라서 5번의 *이 문자열로 더해져서 *****가 출력이 되는것을 확인할수 있었습니다.


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
var fruit = ["Apple", "Orange", "Grape", "Melon"]; // fruit 변수 생성후 배열을 값으로 할당해주었습니다.
fruit.unshift("Mango"); // 배열의 unshift속성을 사용하여 배열의 첫번째에 Mango를 넣었습니다. // fruit 배열의 값은 현재 : ["Mango", "Apple", "Orange", "Grape", "Melon"]
fruit.splice(3, 0, "Cherry"); // 배열의 splice(수정)속성을 사용하여 (배열의 순서, 그 뒤부터 삭제할 순서, 넣을 배열의 이름) 라는 식의 특성을 사용하여 Cherry를 Orange뒤에 넣었습니다.
// fruit 배열의 값은 현재 : ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
fruit.reverse(); // fruit에 reverse(뒤집다)속성을 사용하여 배열의 순서를 반전시켰습니다.
console.log(fruit); // 따라서 fruit를 출력시켰을시에 ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]가 출력이 되게됩니다.

// 과제를 수행하면서 다양한 스타일로 적용해보려고 했습니다.
// 그러면서 지금까지 배웠던 자바스크립트를 한번더 복습하는 개념으로 이해하기 쉬워졌고 과제를 수행하고 이해하는데 더욱 수월했던것같습니다.
// 감사합니다 교수님!! 열심히하겠습니다....