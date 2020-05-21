console.log("JavaScript 로드");

// history.
// 사용자가 방문한 방문 이력 정보를 담고 있는 객체.
// console.log(window.history);
// console.log(history);
/* 방문이력이 이동 되었다면 1 초과(2 이상) */
// console.log(history.length); // 방문 이력에 대한 개수. 최초 문서를 로드할 때, 1 반환.

//** 모바일 웹을 만들 때, 뒤로 가기 버튼을 넣어야 하는지, 빼야하는지 확인할 때.
// if(history.length > 1){
    // 뒤로 가기 버튼 추가.
// }else{
    // 뒤로 가기 버튼 삭제.
// }

//**
// history.back();
// 이전 방문 이력으로 이동.

// history.forward();
// 다음 방문 이력으로 이동. (다음 방문이력이 있을 때에만 동작)

// history.go(-1); 방문 이력을 기준으로 뒤로 가기.
// index 번호에 따라 이동.

// location.
// URL 정보 객체.
// console.log(window.location);
// console.log(location);

// **
// console.log(location.href);
// URL 경로 전체를 문자열로 반환.(get)
// location.href = "http://google.com"; // 해당 URL 경로로 이동.

// *
// location.hash;
// hash 태그를 이용해서 스크롤 이동하거나 할 수 있다.
// spa - single page application (원페이지 사이트)
// 각 섹션별로 about, work, contact.
// URL/#about, URL/#work, URL/#contact
// 주소가 있는 원페이지 사이트를 만들 때, 주로 사용.

// *
// location.reload();
// 문서 새로고침.

// location.host - 호스트네임(포트포함)을 반환(도메인)
// location.hostname - 호스트네임을 반환
// location.port - 포트를 반환
// location.search - URL 매개변수를 반환.
// location.protocol - 프로토콜(http:, https:, file:, ftp:, sftp:, svn:....)을 반환
// location.pathname - 현재 보고있는 페이지의 경로 / - index 페이지, /about - about 페이지

// 요소 노드를 찾아오는 방법.
var boxDivEl = document.getElementById("box-div");
var boxEls = document.getElementsByClassName("box");
var userIdEl = document.getElementsByName("user_id")[0];
var divEls = document.getElementsByTagName("div");
var ulEl = document.getElementsByTagName("ul")[0];

// **
for(var i = 0; i < boxEls.length; i++) {
    var boxEl = boxEls[i];
    boxEl.innerText = "new box " + parseInt(i + 1, 10);
    boxEl.style.backgroundColor = "#000000";
    boxEl.style.color = "#ffffff";
    // console.log(boxEls[i]);
}

// attributes
// 요소의 할당된 속성을 객체로 반환.
// console.log(userIdEl.attributes);

// query
/*
#id{}
.class{}
[name=user_id]{}
div{}
ul{}
*/

// document.querySelector();
// 1개의 요소 노드만 반환.
var h1TitleEl = document.querySelector("h1#title.title");
// console.log(h1TitleEl);
// element.querySelectorAll();
// 2개 이상의 요소 노드목록 반환.
var listEls = ulEl.querySelectorAll("li.item");
// console.log(listEls);
// 해당 요소의 바로 아래 항렬에 위치한 자식요소들을 노드 목록 반환.
// children
listEls = ulEl.children;// (요소들만 반환)
// console.log(listEls);
// childNodes
// var listNodes = ulEl.childNodes; // (공백이 있다면 공백도 Node 로 인식)
// console.log(listNodes);

// classList
// 요소 노드의 클래스 속성값 목록을 반환.
// console.log(listEls[1].classList);
// console.log(listEls[2].classList.contains("size")); // false
// console.log(listEls[2].classList.contains("item")); // true

// classList.add("클래스명"); // 클래스 명 추가.
// classList.remove("클래스명"); // 클래스 명 삭제.
var li2Cl = listEls[2].classList;
if(!li2Cl.contains("size")) {
    // li2Cl.add("size");
}
if(listEls[2].classList.contains("item")) {
    // listEls[2].classList.remove("item");
}

// classList.toggle(); // 클래스 명을 추가하거나 삭제하거나.
// 코드가 처음 실행될 때, add() 의 기능.
// 코드가 두 번째 실행될 때, remove() 의 기능.
// .... 세 ...., add();
// .... 네 ...., remove();

// listEls[0].classList.toggle("red"); // add() | remove();
// listEls[0].classList.toggle("red", true); // add();
// listEls[0].classList.toggle("red", false); // remove();

// console.log(h1TitleEl.id); // 요소 노드의 id 값을 반환.
// console.log(h1TitleEl.className); // 요소 노드의 class 값을 반환.

// firstChild
// firstElementChild
// lastChild
// lastElementChild
console.log(ulEl.firstChild); // 노드가 포함. (첫번째 노드 항목) 요소간의 사이에 공백이 있는 경우, Text " "
console.log(ulEl.firstElementChild); // 요소 노드만 반환. (첫번째 요소 노드 항목)
console.log(ulEl.lastChild); // 마지막 노드 항목(자식 노드)
console.log(ulEl.lastElementChild); // 마지막 요소 노드(자식 요소 노드)

console.log(listEls[listEls.length - 1].innerText); // get.
console.log(listEls[listEls.length - 1].innerHTML);
console.log(listEls[listEls.length - 1].style); // 요소의 스타일을 반환.
console.log(listEls[listEls.length - 1].style.color);
console.log(listEls[listEls.length - 1].style.backgroundColor);
/*
background-color : CSS 표기법
backgroundColor : JavaScript 표기법
*/
listEls[listEls.length - 1].innerText = "new item 3"; // set.
listEls[listEls.length - 1].innerHTML = "<span><b>new item 3</b></span>";
listEls[listEls.length - 1].style.width = 800 + "px";
listEls[listEls.length - 1].style.backgroundColor = "black";
listEls[listEls.length - 1].style.color = "white";

// addEventListener();
// removeEventListener();
/*
DOM Event.
마우스, 키보드, 센서... 등의 사용자 조작을 했을 때 발생.
*/
// 요소 노드에 이벤트를 추가 / 제거.
var aEl = document.querySelector("a.link");
/*
aEl.addEventListener("click", function(event) {
    // console.log(event); // 클릭된 요소, 이벤트의 정보 객체.
    event.preventDefault();
    // 태그 요소가 가지고 있는 기본 이벤트를 발생하지 않도록 방지.
    console.log("a tag click");
});
*/
// var onClickA = function(e) {
// }
// aEl.addEventListener("click", onClickA(evt)); - X
aEl.addEventListener("click", onClickA); // - O
// aEl.removeEventListener("click", onClickA); // 요소 노드에 할당된 이벤트 핸들러를 제거.
// aEl.addEventListener("dblclick", onClickA);

// 이벤트 핸들러 함수를 정의.

var id = 1;
function onClickA(event) {
    event.preventDefault();
    console.log("a tag click");
    // ulEl.style.fontSize = 40 + "px";
    // ulEl.style.lineHeight = 60 + "px";
    // ulEl.style.backgroundColor = "#000000";
    // ulEl.style.color = "#ffffff";

    // var newItemEl = document.createElement("li");
    // console.log(newItemEl); // <li></li>
    // newItemEl.classList.add("item");
    // newItemEl.innerText = "new item " + id;
    // newItemEl.style.padding = 50 + "px";
    // ulEl.appendChild(newItemEl); // ul 의 마지막 부분에 li 요소 추가.
    // // ulEl.removeChild(listEls[0]); // 해당 요소를 ul 에서 삭제.
    // ulEl.removeChild(listEls[1]);
    // id++;

    var url = aEl.getAttribute("href");
    // window.open(url, "새로운 윈도우");
    // location.href = url;
    var placeholder = userIdEl.getAttribute("placeholder");
    // console.log(placeholder);
    // userIdEl.setAttribute("placeholder", "새로운 아이디를 입력해주세요.");
    // console.log(userIdEl.hasAttributes()); // true

    var articleEl = document.getElementsByTagName("article")[0];
    // console.log(articleEl.hasAttributes()); // false

    // userIdEl.removeAttribute("placeholder");
    // placeholder="" 이렇게 남아 있는 상태가 아님.
    // 속성 항목 자체를 삭제해버림.

    // userIdEl.setAttribute("value", "아이디"); // 문서 상에서 변경.
    // userIdEl.value = "value 아이디 지정"; // 요소 상에서 현재의 값으로 변경. **

    var cloneItemEl = listEls[0].cloneNode(); // 노드 복제.
    // console.log(cloneItemEl);
    // cloneItemEl.innerText = "new item";

    // ulEl.insertBefore(cloneItemEl, listEls[listEls.length - 1]);
    // el.insertBefore(el1, el2);
    // el 의 내부(자식 노드)에 el1(새로운 요소)가 el2의 앞쪽에 위치되어 추가.
}
// appendChild();
// removeChild();

// getAttribute("속성");
// hasAttributes();
// removeAttribute();
// setAttribute();

// insertBefore();

