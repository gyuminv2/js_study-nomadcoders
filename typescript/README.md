### #2.2: Types of TS 1
선택적 타입
```typescript
const player : {
    name:string,
    age?:number
} = {
    name:"gyum"
}
```
?를 :앞에 붙이면 optional.
따라서 player.age를 사용하려면 undefined일 가능성도 생각하고 사용해야함.

Alias(별칭) 타입
```typescript
type Player = {
    name:string,
    age?:number
}

const gyum : Player = {
    name:"gyum",
    age:23
}
```

함수의 argument, return 타입 지정
```typescript
type Name = string;
type Player = {
    name:Name,
    age?:age
}
function playerMaker(name:string) : Player {
    return {
        name
    }
}
const playerMaker = (name:string) : Player => ({name})
// 같은 함수
const gyum = playerMaker("gyum")
gyum.age = 23
```

### #2.3: Types of TS 2
readonly 변수(수정 불가능)
```typescript
type Player = {
    readonly name:string,
    age?:age
}
const numbers: readonly number[] = [1, 2, 3, 4]
// nunbers.push(1) -> X(에러)
```

Tuple(정해진 개수와 순서를 가지는 array)
```typescript
const player: readonly [string, number, boolean] = ["gyum", 1, true]
```

undefined, null, any 타입

### #2.4: Types of TS 3
unknown: API로부터 응답을 받는데 응답의 타입을 모르면 unknown타입 지정(any와 비슷하지만 더 안전함)
```typescript
let a:unknown;
// let b = a + 1 -> X(에러) : unknown타입으로의 수행은 합법적이 아님.
if (typeof a === 'number') {
    let b = a + 1
} else if (typeof a === 'string') {
    let b = a.toUpperCase();
}
```

void: 아무것도 return하지 않는 함수를 대상
```typescript
function hi() {
    console.log('hi')
}
```

never: 함수가 절대 return하지 않을 때(exception이 발생할 때)
```typescript
function hello(): never{
    throw new Error("xxx")
}
function hi(name:string|number) {
    if (typeof name === 'string') {
        // string
    } else if (typeof name === 'number') {
        // number
    } else {
        // never
    }
}
```

### #3.0: Call Signatures
Call Signatures: 함수에 대한 타입을 정의하는 방법 중 하나
```typescript
function add(a:number, b:number) {
    return a + b
}
const add = (a:number, b:number) => a+b

type Add = (a:number, b:number) => number; // call signatures
const add:Add = (a, b) => a+b (O)
const add:Add = (a, b) => {a+b} (X)
```

### #3.1: Overloading
...

### #3.2: Polymorphism
concreate type: number, boolean, string, void 같은 타입
generic을 사용하는 이유: call signature을 작성할 때, 들어오는 타입을 모를 때 사용
```typescript
type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]): void
}
const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["a", "b", "c"])
// ---- generic 사용
type SuperPrint = {
    <T>(arr: T[]): T
}
const superPrint: SuperPrint = (arr) => arr[0]
const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const b = superPrint(["a", "b", "c"])
```