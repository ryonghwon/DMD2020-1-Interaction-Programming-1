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
var result = '';
for(var i = 0; i < alphabet.length; i++){
    result += alphabet[i];
    // console.log(alphabet[i]);
}
console.log(result);

var max = 26;
var result = '';
for(var i = 0; i < max; i++){
    // console.log("A".charCodeAt());
    // console.log("a".charCodeAt());
    // console.log(String.fromCharCode("a".charCodeAt() + i));
    result += String.fromCharCode("a".charCodeAt() + i);
}
// result = result.toLowerCase();
// result = result.toUpperCase();
console.log(result);


/*
Practice 2.
'1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 **짝/홀수** 여부를 함께 표시합니다.
- console 에 출력 예시 : **1은 홀수!**
*/
// Answer 2.
var max = 50;
for(var i = 1; i <= max; i++){
    var msg = i + '은 ';
    if(i % 2 === 1){
        msg += '홀수!';
    }else{
        msg += '짝수!';
    }
    console.log(msg);
}



