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