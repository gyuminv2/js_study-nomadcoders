### #0.1: Welcome
NestJS는 node.js위에서 움직이는 프레임워크, node.js에 백엔드를 구성할 수 있도록 해줌.(express위에서)

### #0.2: Requirements
NestJS로 Rest API를 만들고 테스트하는 방법을 배움. NestJS는 typescript에 전부 기반함. express의 미들웨어와 같음.
Insomnia rest다운로드 -> 클러는 안되서 postman으로 대체
### #0.3: Project Setup
1. npm i -g @nestjs/cli
@nestjs/cli 설치
2. nest new project-name

### #1.0: Overview
Modules
모듈은 @Module() 데코레이터로 주석이 달린 클래스. 클래스에 함수 기능을 추가할 수 있음.

### #1.1: Controllers
NestJS 어플리케이션은 main.ts에서 시작함. 모듈이란 어플리케이션의 일부. 컨트롤러가 하는 일은 url을 가져오고 함수를 실행. 컨트롤러는 express의 라우터 같은 존재. 코드에서는 /hello가 sayHello 함수를 실행.

### #1.2: Services
string을 return하면 되는데 왜 appService를 쓰는지는 구조와 아키텍처에서 알 수 있음. NestJS는 컨트롤러를 비지니스 로직이랑 구분지어야 함. 서비스는 일반적으로 실제 function을 가지는 부분. AppModule에서는 우리가 하는 모든걸 import함.
정리
컨트롤러: url을 가져오고 function을 return함
서비스: 그 function을 놓는 곳

### #2.0: Movies Controller
영화의 Rest api를 만듬.
1. nest g co
controller 생성

@Controller('movies')
이 부분이 url의 엔트리 포인트를 컨트롤 함 (localhost:3000/movies)

무언가 필요하면 내가 요청해야함.
```typescript
@Get('/:id')
getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
}
```
일부분만 업데이트 하려면 Patch, 전체 업데이트는 Put

### #2.1: More Routes
뭔가를 원한다면 반드시 요청할것.
body가 필요하면 body를 요청.

### #2.2: Movies Service part One
Single-responsibility prionciple: 하나의 module, class, function이 하나의 기능은 꼭 책임져야하는 원리.
서비스는 로직을 관리하는 역할.
1. nest g s
service 생성

movie.entities파일은 서비스로 보내고 받을 클래스(인터페이스)를 export함.

### #2.3: Movies Service part Two
post 하면 movie가 만들어짐.
...

### #2.4: DTOs and Validation part One

### #2.5: DTOs and Validation part Two
서비스랑 컨트롤러에서 DTO를 만들어야함.
DTO: 데이터 전송 객체(data transfer object)

1. npm i class-validator class-transformer
class의 유효성 검사

transform를 사용하면 타입을 받아서 넘길때 자동으로 타입도 변환함

### #2.6: Modules and Dependency Injection
### #2.7: Express on NestJS
### #3.0: Introduction to Testing in Nest
### #3.1: Your first Unit Test
### #3.2: Testing getAll and getOne
### #3.3: Testing delete and create
### #3.4: Testing update
### #4.0: Testing movies
### #4.1: Testing GET movies id
### #4.2: Testing PATCH and DELETE movies id
### #4.3: Finishing Up