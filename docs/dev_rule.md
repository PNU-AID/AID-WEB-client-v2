# Dev Rule

## Tools

VS Code 또는 WebStorm를 사용할 것을 권장한다. 개발 시작 시, VS Code의 Extension인 Simple React Snippets, ESLint와 Prettier, Tailwind CSS IntelliSence, Headwind를 설치할 것을 권장한다.

## 프로젝트 구조

- src/
  - apis/ : API Call을 관리한다.
  - assets/ : UI에 필요한 사진이나 영상을 저장한다.
  - components/: 각 페이지에 필요한 컴포넌트 구현체를 관리한다. 하위에서 각 페이지마다 폴더를 다시 한 번 분기한다.
  - data/: 상수 데이터를 관리한다.
  - hooks/: 커스텀훅을 관리한다.
  - pages/: 라우팅 시 보여줄 페이지를 관리한다.
  - types/ : 타입을 관리한다.
  - utils/: 이메일 체크, 숫자 체크 등의 유틸 함수를 관리한다.
- docs/: 문서에 필요한 파일을 관리한다.

## React Code Style

- 함수명, 변수명 : camelCase
- 컴포넌트명 : PascalCase
- 폴더명: lowercase

## React Type Rule

- 개발 시 타입은 src/types 폴더 하위에 작성한다.
- 기능 별로 파일을 나누고 ".ts" 형식으로 작성한다. ex) faq.ts
- 타입 선언은 일반적으로 interface를 사용한다.

## Mocking

- 프론트엔드 개발 시, API 모킹을 위해 MSW 라이브러리를 사용한다.
- 개발 시 필요한 테스트 API를 `/src/mocks/handlers.ts`에 작성한다.
- 개발(Dev) 환경에서만 동작하기 때문에 프로덕션 환경에서는 신경쓰지 않아도 된다.
