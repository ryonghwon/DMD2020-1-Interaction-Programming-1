console.log(window.document);
console.log(document);
// 문서.
/*
DOM

<<<<<<< HEAD
Document Object Model.box.
문서(html) 객체화
*/
console.log(document.documentElement);
// 문서 객체를 노드화 해서 받아옴.
=======
Document Object Model.
문서(html) 객체화
*/
console.log(document.documentElement);
// 문서 객체를 노드화 해서 반환.
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
// html 태그 요소.

console.log(document.body);
// body 태그 요소.

console.log(document.scripts);
console.log(document.scripts.length);
// script 태그 요소들을 반환.(목록-배열)

console.log(document.title);
// title 태그의 값을 반환. // get

document.title = "제목 변경";
<<<<<<< HEAD
// title 태그의 값을 변경. // set
=======
// title 태그의 값이 변경. // set
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0

var divEl = document.createElement("div");
console.log(divEl);
// <div></div>
// JavaScript 공간에 새로운 Div 요소를 생성.
var spanEl = document.createElement("span");
console.log(spanEl);
// <span></span>
<<<<<<< HEAD
// element.innerText = "String";
=======
// element.innerText = "String"; 
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
// 요소 안에 텍스트 기입.
// divEl.innerText = "안녕하세요.";
// spanEl.innerText = "반갑습니다.";

// 요소 안에 HTML 형식의 값을 기입.
<<<<<<< HEAD
// divEl.innerHTML =  "<span>안녕하세요.</span>"
=======
// divEl.innerHTML = "<span>안녕하세요.</span>";
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
// console.log(divEl);
// console.log(spanEl);
// <div>안녕하세요.</div>
// <span>반갑습니다.</span>

var boxDivEl = document.getElementById("box-div");
console.log(boxDivEl);
// 전달인자의 값과 동일한 id 이름의 요소를 반환. 1개만 반환.
// 전달인자의 값과 동일한 id 이름의 요소가 없을 경우 null 반환.

var boxEls = document.getElementsByClassName("box");
// 전달인자의 값과 동일한 class 이름의 요소들을 반환.
// 복수의 목록으로 반환 [element, element,...., element] 배열.

console.log(boxEls);
console.log(boxEls[0]);
<<<<<<< HEAD
// Elements 를 찾게 되면 배열로 반환되기 때문에 원소 순서에 따라 요소를 검색할 수 있다.
=======
// Elements 를 찾게되면 배열로 반환되기 때문에 원소 순서에 따라 요소를 검색할 수 있다.
>>>>>>> 2f8f77591b44a4a8cb571da11f331d8508f45ff0
console.log(boxEls[boxEls.length - 1]); // 마지막 요소 반환.