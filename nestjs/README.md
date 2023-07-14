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


### #1.1: Controllers
### #1.1: Controllers