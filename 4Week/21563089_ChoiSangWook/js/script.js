/*
문제 풀이.
*/

/*
Quest 1.
1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다.
2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
두번째 매개변수의 값을 찾을 수 없습니다.
----------
3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
----------
5. 작은 경우 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
----------
6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다.
 
----------
함수 호출)

compareNumbers(10) 를 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."

compareNumbers(20, 10) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."

compareNumbers(10, 20) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
----------
*/
// Answer 1.(풀이과정)

function compareNumbers(a,b){
     if(a === 10){
          console.log("두번째 매개변수의 값을 찾을 수 없습니다.");

      }
     if(a >= b){
          console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다");

     }
     if(a < b){
          console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");

     }
}
// a 만 호출했기때문에 b와 값은 비교 할수없다.
compareNumbers(10); // output 비교연산자의 피연산자를 호출할때는 두개 다 호출해야 된다는것을 알았습니다!
compareNumbers(10,5); //output : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다"
 // 상동
compareNumbers(5,10); // output : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."



/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 
   첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 
   첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.
5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
6. 5(순서) 변수의 값을 console 에 출력합니다.

----------
함수 호출 예시)

getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15
getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55
getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120
getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800
getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0
----------
*/
// Answer 2.(문제풀이)
//11 번째에 드디어 성공했습니다..
// 다시 막힘...
//04/29 해결완료!

//gettotal함수 선언후 매개변수 두개 생성



function getTotal(c, d) {
     //합산 값과 곱한값을 출력하기위해 변수 선언 후 기본값 지정
     //곱한값을 1로 한 이유는 0 * 1 = 0 이기때문에 toal 값이 0으로 출력됨 그래서 기본값을 1로 지정
     var sum = 0;
     var total = 1;
     //값, 타입까지 정확하게 알수 있는 비교 연산자 ===
     if(d == "add")
     {    //var i 의 기본값 설정; 조건절; 증감연산자
          //for 반복문을 통해 sum 에 숫자가 점점 쌓여간다
          for(var i = 1; i <= c; ++i){
               sum += i; 
     }
     //for반복문이 종료 되면 위 sum 의 결과값을 함수밖으로 출력하기위해 return 사용
     return sum;
  }  // 설명 : 상동
     else if(d == "multiply")
     {
          for(var i = 1; i <= c; ++i){
          total *= i;
               }
    return total;
  }
  else
  {
    return 0;
  }
}

// console.log(getTotal(5, "add"));
// console.log(getTotal(5, "multiply"));
// console.log(getTotal(5)); // 교수님 콘솔로 감싸고 호출하면 콘솔창에 출력이 되는데 그냥 gettal(5, "add")로하면 콘솔창에 뜨지 않습니다.. 
// 새로운 변수 생성하면 값은 함수(매개변수 값 지정)에서 나온 결과를 대입연산을 통해 집어 넣는다.
// var new라고 하면 오류가난다. 왜그럴까?
var new1 = getTotal(5,"add");
console.log(new1); //output : 15  성공!










/*
Quest 3.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
3. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
4. 3(순서) 변수의 값을 console 에 출력합니다.
* 매개변수 배열에는 숫자 이외의 타입도 할당되어 있습니다.

----------
함수 호출 예시)

getMaxValue([10, -4, 7, 100, "hello", -50]) 를 호출하여 반환하고 변수를 출력한 결과값 : 3

getMaxValue([-400, "world", 60, 0, {}, 1000]) 를 호출하여 반환하고 변수를 출력한 결과값 : 5
----------
*/
// Answer 3

//배열 생성
// var max =0;
// function getMaxValue(g){
//       arr = [-10, -1, 0, 1, 10];
//       for(var i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//           max = arr[i];
//         }
//       }
//      }
// consoloe.log(getMaxValue([0]));
//실패

// function getMaxValue(last){
//      var max = [0];
//      //아래 호출로 last(매개변수)의 전달인자가 [10,30,"ㅁㄴㅇㄹ",true,96,1000] 로 지정
//      for(var i = 0; i < last.lenth; i++){
//           if(max<last[i]){
//                var max = last[i];
//           }// 검색으로 값으로 배열의 순서를 찾는 indexof 를 사용했으나 실패... 오류뜸
//      } return indexof(max);
// }
// max = getMaxValue([10,30,"욱",3,96,1000]);
// console.log(max); // 제발! output : 0 이것도 실패


// function getMaxValue(last){
//      for(var i = 0; i < last[i]; i++){
//           if(last[1] == Number){
//                console.log("성공");
//           }
//      }
// }
// getMaxValue([10,30,"욱",3,true,1000]);
//오류는 안뜨는데 값도 안뜬다..

// function getMaxValue(last){
//      if(last == Number){
//           console.log("성공!")
//      }
// }
// getMaxValue([10,30,"욱",3,true,1000]);  
// 오류 X 값 X


//  function getMaxValue(last){
//       console.log(last); //output : 10
//           }
// getMaxValue(10,30,"욱",3,true,1000);  




// function getMaxValue(last){
//      console.log(last[5]); //output : 1000 출력 확인!!!!!!!!!
//          }
// getMaxValue([10,30,"욱",3,true,1000]);  
//처음으로 제대로된 출력 확인


// function getMaxValue(last){
//      var last;
//      var max=0;
//      var a = last.indexof(max);
//      for(var i = 0; i < last.length; i++){
//           if(max<last[i]){
//                max = last[i];
//           }
//      // } console.log(max); //output 1000 확인!!!
     
//           }return max //output 1000 확인!!!
//      }
// getMaxValue([10,30,"욱",3,true,1000]);  
// f = getMaxValue(a);
// console.log(f);
// 실패,,,, 오류가 뜬다


// function getMaxValue(last){
//      var max= [];
//      for(var i = 0; i < last.length; i++){
//           if(max<last[i]){
//           max = last[i]; // 제일 큰값 1000을 찾았고
//                // 조건문으로 한번 더 들어감 숫자열 != 문자열은 같지않음으로 조건문 충족 
//                if(max != "욱"){
//                     // 매개변수(배열타입)중 max의 숫서 값을 max에 적용 한다.
//                     max = last.indexOf(max);
//                }
//           }  
//           } console.log(max);
//      }
// getMaxValue([10,30,"욱",3,true,1000]);  
// // gg = getMaxValue(last.max);
// // console.log(gg);
// 거의 다 온것같다....


// function getMaxValue(last){
//      var max= 0;
//      if(last != String,last != true){
//           for(var i = 0;i < last[i]; i++){
//                if(max<last[i]){
//                     max = last[i];
//                }console.log(max);

//           }
//      }
//  }
// getMaxValue([10,30,"욱",3,true,1000]);  
// gg = getMaxValue(last.max);
//  console.log(gg);
//흠..

// function getMaxValue(last){
//      var max;
     
//       for(var i = 0; i < last.length; i++){
//            if(last[i]== Number){
//                     if(max>last[i]){
//                          max = last[i]; 
           
//                 }console.log(max);
//            }  
              
//       } 
//      } 
// getMaxValue([10,30,"욱",3,true,1000]);  
// 흐



function getMaxValue(numlist) {
     var max = 0; // 반환 할떄 이용할 max 를 초기값 0으로 지정
     for (var i = 0; i < numlist.length; i++){
          var num = typeof numlist[i] === "string"; //문자열 이라면 num에 저장됨(문자열을 걸러내기 위함)

     if( !num && max < numlist[i]){//!num를 써서 문자가 아닌경우와 max를 보다 큰경우는 계속 max의 값으로 저장 
          max = numlist[i]; // max값은 배열중 제일 큰 숫자 1000dlek.
     }
  }
     // console.log(max) output 1000확인
     //indexOf는 값으로 해당 배열의 순서를 찾는 함수이다.
     // 처음에 계속 indexof라고 써서 오류가 났었는데 알고보니 indexof 중에 "o"를 대문자로 indexOf라고 써야했다.
     return numlist.indexOf(max); // 호출되었을때 5로 반환시킨다.
}
     
//새로운 변수를 생성해서 호출하고 반환 받은 값을 maxindex 에 넣는다.
var maxindex = getMaxValue([10,30,"욱",3,"0526",1000]);
console.log(maxindex); // output : 5 확인 완료!!!

// 많이 알아갈수 있어서 좋았던 과제 입니다 ! 감사합니다~!
