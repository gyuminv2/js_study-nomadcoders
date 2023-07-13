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

### #3.3: Generics Recap
any를 쓰지말고 Generic을 쓰자

### #3.4: Conclusions
Generic은 중요하다
```typescript
function superPrint<T>(a: T[]) {
    return a[0]
}

type Player<E> = {
    name:string
    extraInfo:E
}
type GyumPlayer = Player<{favFood:string}>
const gyum: GyumPlayer = {
    name:"gyum",
    extraInfo: {
        favFood:"goguma"
    }
}
```

### #4.0: Classes
private은 javascript에 존재하지 않음
추상클래스와 추상 메소드와 상속(extends)
```typescript
abstract class User {
    constructor(
            private firstName:string,
            private lastName:string,
            public nickname:string
    ) {}
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
class Player extends User {}
const gyum = new Player("gyu", "min", "규민");
gyum.getFullName()
```

### #4.1: Recap
클래스를 타입처럼 쓸 수 있음

### #4.2: Interfaces I
type과 interface
```typescript
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

type Player = {
    nickname:string,
    team:Team,
    health:Health
}
// 같은 Player
interface Player {
    nickname:string,
    team:Team,
    health:Health
}
const gyum: Player = {
    nickname:"gyum",
    team: "blue",
    health: 10
}
```

### #4.3: Interfaces II
abstract -> 코드가 js에 남음
interface, implements -> 코드가 js에 남지 않음

### #4.4: Recap
...

### #4.5: Polymorphism
```typescript
interface SStorage<T> {
    [key:string]:T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T) {
        thos.storage[key] = value;
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}
const stringsStorage = new LocalStorage<string>()
stringsStorage.get("ket")
stringsStorage.set("hello", "how are you")
const booleansStorage = new localStorage<boolean>()
booleansStorage.get("xxx")
booleansStorage.set("hello", true)
```

### #5.0: Introduction
블록체인의 PoC를 타입스크립트로 만듬

### #5.1: Targets
1. npm init -y, "main"항목 삭제
2. npm i -D typescript
3. touch tsconfig.json

tsconfig.json파일의 include에 자바스크립트로 컴파일하고 싶은 모든 디렉토리를 넣어줌.
compilerOptions의 outDir는 자바스크립트 파일이 생성될 디렉토리를 지정함.
package.json파일의 script에 "build":"tsc"를 넣어줌.
4. npm run build

compilerOptions의 target은 어떤 es버전을 사용해 컴파일할건지 지정함.
Create-React-App 이나 NextJS, NestJS같은 프래임워크는 target에 대해 고민을 하지 않아도 됨

### #5.2: Lib Configuration
### #5.3: Declaration Files
### #5.4: JSDoc
### #5.5: Blocks
### #5.6: DefinitelyTyped
### #5.7: Chain
### #5.8: Conclusions