### #2.0: first js PJ(momentum)
브라우저는 index.html을 실행. css와 자바스크립트는 파일을 연다고해서 실행되는것이 아님. html 파일에 !를 작성하면 기본적인코드 자동작성.

### #2.1: data types
integer(2), float(1.5), string("hello")

### #2.2: variables
console.log(number/'"string"');. ()안에 operator도 가능. const 키워드.

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

### #3.3: event II
h1 html element mdn에서 많은 정보를 알 수 있음. style을 변경하는건 css가 옳음.
