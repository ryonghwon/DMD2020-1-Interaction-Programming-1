/*
문제 풀이.
*/


// Quest 1.
// 1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다.
// 2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
// ----------
// 두번째 매개변수의 값을 찾을 수 없습니다.
// ----------
// 3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
// 4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
// ----------
// 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
// ----------
// 5. 작은 경우 아래와 같이 console 에 출력되도록 작성합니다.
// ----------
// 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
// ----------
// 6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다.
 
// ----------
// 함수 호출)

// compareNumbers(10) 를 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."

// compareNumbers(20, 10) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."

// compareNumbers(10, 20) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
// ----------

// Answer 1.

function compareNumbers(a,b){
    if( typeof b == "undefined"){
        return "두번째 매개변수의 값을 찾을 수 없습니다."
    }else if( a >= b ){
       return "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."
    }else if( a < b ){
       return "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
    }
   }
     var _1 = compareNumbers(10);
     var _2 = compareNumbers(20,10);
     var _3 = compareNumbers(10,20);
   
     //함수 호출 검증
     console.log(_1); // 두번째 매개변수의 값을 찾을 수 없습니다.
     console.log(_2); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
     console.log(_3); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
   
   
   /*-------------------------------------------------------------------------------------------------------------------*/
   
   /*
   Quest 2.
   1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
   2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
   3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
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
   // Answer 2.
   
   /*
   // 실패한 경험
   (while문과 if문과 for문 중 어떤 것을 써야할 지 고민하였다. 결국 이 경험을 바탕으로 if문 안에 while문을 넣는 형식을 생각해냈다! if문은 else를 쓸 수 있고 while문은 반복이 가능하기 때문이다. 또한, while문 대신 for문을 사용할 수 있을 것이다!)
   function getTotal( int, string ){
       sum = 0;
       a = 0; 
   while((string = "add") && (a <= int)){
       sum = sum + a;
       a++
   }
   for(a = 0;(string = "multiply") && (a <= int); a++){
       sum = sum * a;
   }
   if((string=="add") || (string =="multiply")){
       return 0;
   }   
       return sum;
   }
   
   var _4 = getTotal(10, "add");
   
   console.log(_4);
   */
   
   
   
   // 02-1. if문 안에 while문을 사용했을 경우
   function getTotal( int, string ){
       if( string == "add"){
           sum = 0;
           a = 1;
           while(a <= int){
               sum = sum + a;
               a++;
           }
           return sum;
       }else if( string == "multiply"){
           sum = 1;
           a = 1;
           while(a <= int){
           sum = sum * a;
           a++;
           }
           return sum;
       }else{
           return 0;
       }
   }
   var _4 = getTotal(5, "add");
   var _5 = getTotal(10, "add");
   var _6 = getTotal(5, "multiply");
   var _7 = getTotal(10, "multiply");
   var _8 = getTotal(100);
   
   //함수 호출 검증
   console.log(_4); // 15
   console.log(_5);// 55
   console.log(_6);// 120
   console.log(_7);// 3628800
   console.log(_8); // 0
   
   
   
   // 02-2. if문 안의 while문을 for문으로 바꾼 경우.(개인적으로 for문이 훨씬 정리되어 보이고 쉬웠다.)
   function getTotal( int, string ){
       if( string == "add"){
           for(a = 0, sum = 0; a <= int; a++){
               sum += a;
           }
           return sum;
       }else if( string == "multiply"){
           for(a = 1, sum = 1; a <= int; a++){
           sum *= a;
           }
           return sum;
   
       }else{
           return 0;
       }
   }
   
   var _4 = getTotal(5, "add");
   var _5 = getTotal(10, "add");
   var _6 = getTotal(5, "multiply");
   var _7 = getTotal(10, "multiply");
   var _8 = getTotal(100);
   
   //함수 호출 검증
   console.log(_4); // 15
   console.log(_5);// 55
   console.log(_6);// 120
   console.log(_7);// 3628800
   console.log(_8); // 0
   
   
   /*-------------------------------------------------------------------------------------------------------------------*/
   
   
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
   // Answer 3.
   
   
   
   function getMaxValue(array){
       var max = array[0]; // 초기 max의 값을 array안 배열의 제일 첫번째인 array[0]으로 설정해놓음. 그 다음과 다음과 계속해서 비교하기 위함임.
       var j = 0; // 새로운 변수를 만들어 이름을 j로 설정하고 값을 0으로 설정.
       for(i = 0; i < array.length; i++){ // for문을 사용, i라는 변수를 만듦. 계속 크게 반복될 것임.
           if(array[i] > max){ // if문을 사용, 최대값을 저장한 max보다 array[i]의 값이 크다면 발동, array[i]는 위 for문으로 인해 0부터 하나씩 커지면서 array배열 안의 갯수만큼 돌려질 것이다!
               max = array[i];     // 만약 여기까지 왔다면 최대값일 테니, 몇번째에 있는지, 그 값이 뭐인지 저장해야함. max에는 그 값(최댓값)을 저장한다.
               j = i;     // 위에 만들어놓은 j라는 변수에는 몇번째에 있는 수인지 저장한다!
           }
       }
       return j; // for문이 다 완전히 돌고 나면, 최종 j의 값을 내보낸다. 그럼 몇번째에 있는 수가 가장 큰 수인지 알 수 있을 것!
   }
   
   //함수 호출 검증
       var _9 = getMaxValue([10, -4, 7, 100, "hello", -50]); 
       console.log(_9); // 3
       var _10 = getMaxValue([-400, "world", 60, 0, {}, 1000]);
       console.log(_10); // 5
   
   
   //두번째 시도(변수를 하나 더 선언하여 차근차근 다시 해봐야겠다는 힌트를 얻음!)
   // function getMaxValue(_array){
   //     var _array = []; 
   //     var max = 0;
   //     for(i = 0; i < _array.length; i++){
   //         if(_array[i] > max){
   //             max = _array[i];
   //         }
   //         max = _array[j];
   //         return j;
   //     }
   
   // }
   
   // var _9 = getMaxValue([10, -4, 7, 100, "hello", -50]);
   // console.log(_9);
   
   
   //첫번째 시도
   // function getMaxValue(array){
   //     var max = 0;
   //     for(i = 0; i < array.length; i++){
   //         if(array[i] > max){
   //             max = array[i];
   //         }
   //         return max;
   //     }
   // }
   
   // var _9 = getMaxValue([10, -4, 7, 100, "hello", -50]);
   // console.log(_9);
   