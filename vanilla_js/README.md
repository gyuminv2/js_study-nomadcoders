### #2.0: first js PJ(momentum)
브라우저는 index.html을 실행. css와 자바스크립트는 파일을 연다고해서 실행되는것이 아님. html 파일에 !를 작성하면 기본적인코드 자동작성.

### #2.1: data types
integer(2), float(1.5), string("hello")

### #2.2: variables
console.log(number/'"string"');. ()안에 operator도 가능. const 키워드.

### #2.3: const and let
cons는 상수, let은 수정가능. 기본적으로 const를 사용. var 키워드도 있음(사용 X).

### #2.4: booleans
1(true), 0(false), null은 아무것도 없다를 의미(메모리 x). undefined은 값이 정의 안돼있음(메모리 o).

### #2.5: arrays
const arr = [1, 2 "hello", false, null, true];. push()함수는 배열의 맨 뒤에 요소 삽입.

### #2.6: objects
```javascript
const player = {
    name: "gyumin", 
    points: 10,
    fat: false,
};
```
objects안의 요소 수정 가능.

### #2.7: functions part I
```javascript
function sayHello() {
    console.log("Hello");
}
```

### #2.8: functions part II
```javascript
function sayHello(nameOFPerson, age) {
    console.log("Hello my name is " + nameOFPerson + " and I am " + age);
}

sayHello("gyumin", 24);
sayHello("js", 33);
```
--------------------------------------
```javascript
const player = {
    name: "gyumin",
    sayHello: function(PersonsName) {
        console.log("hello " + PersonsName);
    },
};

console.log(player.name);
player.sayHello("gyum");
```

### #2.9: recap

### #2.10: recap II
```javascript
const caclulater = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    div: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a ** b)
    },
};

caclulater.add(1, 2);
caclulater.minus(1, 2);
caclulater.div(6, 2);
caclulater.power(2, 3);
```

### #2.11: returns
function 안에서 작성

### #2.12: recap

### #2.13: conditionals
parseInt(), prompt()

### #2.14: conditionals II
isNaN(), if문

### #2.14: conditionals III

---------------
### #3.0: the document object
document는 브라우저에 이미 존재하는 object(html을 가리키는 객체). javascript는 이미 html과 연결되어있음(document로)

### #3.1: html in javascript
```javascript
document.getElementById("title")
```
html을 jacascript에서 읽어올 수 있어야 함. (html: "환영합니다" -> js: "xxx님 환영합니다")

### #3.2: searching for elements
querySelector()는 element를 css방식으로 검색함.

### #3.3: event
javascript object의 on~함수들은 event함수임.
```javascript
const title = document.querySelector("div.hello h1");
function handleTitleClick() {
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);
```

### #3.4: event II
h1 html element mdn에서 많은 정보를 알 수 있음. style을 변경하는건 css가 옳음.

### #3.5: more events
```javascript
const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    console.log("h1 was clicked!");
}
function handleTitleMouseEnter() {
    console.log("Mouse is here!");
}
function handleTitleMouseLeave() {
    console.log("Mouse is gone!");
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleTitleMouseEnter;
h1.onmouseleave = handleTitleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
```

### #3.6: css in javascript
```javascript
const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
```
javascript에서도 style수정이 가능하다(비추).

### #3.7: css in javascript II
```javascript
const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
```
```css
body {
    background-color: beige;
}

h1 {
    color:cornflowerblue;
    transition:color .5s ease-in-out ;
}

.clicked {
    color: tomato;
}
```
style에 최적화된 도구는 css, animation에 최적화된 도구는 js. javascript로 모든 class name을 변경하지 않는게 중요

### #3.8: css in javascript III
```javascript
const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
```
className보다 classList을 사용 권장. className은 과거를 고려 안하기 때문. toggle은 class name이 존재 여부 판단해 제거, 추가하는 기능.

### #4.0: input values
```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value);
    console.log("click!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);
```
사용자가 입력한 value를 찾음

### #4.1: form submission
아무것도 입력 안했을때의 작업 필요. input안에 있는 button을 누르거나 type이 submit인 input을 클릭하면 form이 submit됨 -> 버튼 클릭의 의미가 없음 -> 나의 역할은 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶음

### #4.2: events
addEventListener()함수를 사용하면 두번째 인자에 함수를 넣어주는데 그 함수의 event는 항상 preventDefault함수를 가지고 있음. 중요한것은 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 함 -> 이것을 막기 위해선 preventDefault()함수를 추가.

### #4.3: events II
addEventListener()안에 있는 함수는 직접 실행 x -> 브라우저가 실행해주고 브라우저에 해당 이벤트에 대한 정보(object)를 가짐. 해당 이벤트가 가진 기본 default값을 막는 방법은 preventDefault() 이용.

### #4.4: getting username
css에 hidden클래스를 만들고 form을 hidden함 -> user가 입력한 value를 Hello 와 결합하여 출력함.

### #4.5: saving username
localStorage: 기본 API, localStorage.setItem("key", value);, localStorage.getItem("key");, localStorage.removeItem("key"); 등 사용 가능.

### #4.6: loading username
조건문으로 데이터를 계속 저장하고, 새로고침을 해도 유지되게 함.

### #4.7: super recap
...

### #5.0: intervals
interval(f, ms): 어떤 코드를 일정 시간을 간격으로 반복 실행.

### #5.1: timeouts and dates
Date 객체를 활용해 1초 간격으로 시계를 표시.

### #5.2: padStart
padStart()를 사용해 "1" -> "01" 으로 수정. padEnd()는 "1" -> "10"

### #5.3: recap
...

### #6.0: Quotes
quote를 담을 수 있는 공간을 만들어서 실제로 담아봄.

### #6.1: Background
background.js를 만들어 js에서 HTML element를 만들어 -> html로 이미지 삽입.

### #6.2: Recap
...

### #7.0: Setup
todo-list를 만들기 위한 세팅.

### #7.1: Adding To Dos
1. const li = document.createElement("li"): li를 입력했을 때 html에서 li태그 생성.
2. li.appendChild(span): li 태그 안에 자식을 span 태그로 함.
3. 만든 todo-list는 아직 삭제를 못하고, 새로고침 시 초기화 됨.

### #7.2: Deleting To Dos
1. button태그를 만듬.
2. createElement로 js -> html 객체 생성
3. button.addEventListener("click", deleteToDo): 버튼 클릭 시 감지 후 삭제
4. 삭제 할때 어떤 리스트가 여러개 있으면 무엇을 삭제할지 모름
5. const li = event.target.parentElement: 이벤트가 발생했을 때 -> 그 객체의 -> 부모 태그를 지정
6. li.remove(): 삭제

### #7.3: Saving To Dos
...

### #7.4: Loading To Dos part One
forEach 함수로 JSON.parse()를 이용한 파싱된 배열의 요소에 하나 하나 접근 가능. 함수를 단축 시킬 수 있음:화살표 함수

```javascript
parsedToDos.forEach((item)=>console.log("this is turn of"), item);
```

### #7.5: Loading To Dos part Two
새로고침 하고 todo를 추가하면 기존의 저장된 toDOs가 local Storage에서 날라감. 이를 막고자 toDos를 pasedToDos에 할당한다.