/*
연습.
*/

/*
Practice 1.
알파벳 'a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
- alphabet 배열 활용.
*/
// Answer 1.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(var i = 0; i < alphabet.length; i++){
    console.log(i, alphabet[i]);
}

// 배열을 쓰지 않고 알파벳을 출력시키는 방법.
var max = 26;
console.log("a".charCodeAt()); // 소문자 "a" 고유 번호를 찾아주는 기능. .charCodeAt(); // 코드 번호로 값을 반환.
console.log("a".charCodeAt() + 1); // 소문자 "b" 고유 번호.
console.log("a".charCodeAt() + 2); // 소문자 "c" 고유 번호.
for(var i = 0; i < max; i++){
    //console.log(i);
    console.log(String.fromCharCode("a".charCodeAt() + i)); // 문자의 고유 번호를 문자로 변환.
}

/*
Practice 2.
'1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 **짝/홀수** 여부를 함께 표시합니다.
- console 에 출력 예시 : **1은 홀수!**
*/
// Answer 2.
for(var i = 1; i <= 50; i++){
    var msg = i + "은";
    // console.log(i);
    // 홀수/짝수를 구분하는 방법 - ? % 2 === 0 -> 짝수, ? % 2 === 1 -> 홀수.
    if(i % 2 === 0){
        msg += "짝수!";
        // console.log('1->', i); // 짝수일 때.
    }else{
        msg += "홀수!";
        // console.log('2->', i); // 홀수일 때.
    }
    console.log(msg);
}

