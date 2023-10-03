### WebSocket 채팅 애플리케이션 with HBS & NestJS

#### 프로젝트 개요

이 프로젝트는 NestJS를 사용하여 웹소켓을 통한 실시간 채팅 애플리케이션을 구현한 것입니다. 프로젝트는 주로 TypeScript로 작성되어 있으며, Prisma를 데이터베이스 관리에 사용하고 있습니다.

#### 기술 스택

- NestJS
- Prisma
- WebSocket
- TypeScript

#### 주요 파일 설명

1. [Prisma Schema](https://github.com/Adam-Junsuk/WebSocket_Chatting_With_HBS_NestJS/blob/main/chattings/prisma/schema.prisma): 데이터베이스 스키마를 정의하고 있습니다. `Socket`과 `Chatting` 모델을 사용하여 채팅과 관련된 데이터를 관리합니다.
2. [Main.ts](https://github.com/Adam-Junsuk/WebSocket_Chatting_With_HBS_NestJS/blob/main/chattings/src/main.ts): 애플리케이션의 진입점입니다. 여기에서 NestJS 앱을 생성하고 실행합니다.
3. [Chats Gateway](https://github.com/Adam-Junsuk/WebSocket_Chatting_With_HBS_NestJS/blob/main/chattings/src/chats/chats.gateway.ts): 웹소켓 로직이 구현되어 있습니다. 새로운 사용자 연결, 채팅 제출 등을 처리합니다.
4. [App Module](https://github.com/Adam-Junsuk/WebSocket_Chatting_With_HBS_NestJS/blob/main/chattings/src/app.module.ts): 애플리케이션의 모듈 구조를 정의합니다. 여기에서 필요한 모듈을 임포트하고 프로바이더를 설정합니다.
5. [Package.json](https://github.com/Adam-Junsuk/WebSocket_Chatting_With_HBS_NestJS/blob/main/chattings/package.json): 프로젝트의 의존성과 스크립트를 정의합니다.

