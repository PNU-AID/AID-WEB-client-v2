# Dev Rule

## Tools

VS Code를 사용할 것을 권장한다. 개발 시작 시, VS Code의 Extension인 Simple React Snippets, ESLint와 Prettier, Tailwind CSS IntelliSence, Headwind를 설치할 것을 권장한다.

## 프로젝트 구조

- src/
  - @types/ : 타입을 관리한다.
  - assets/ : UI에 필요한 사진이나 영상을 저장한다.
  - components/: 각 페이지에 필요한 컴포넌트 구현체를 관리한다. 하위에서 각 페이지마다 폴더를 다시 한 번 분기한다.
  - hooks/: 커스텀훅을 관리한다.
  - pages/: 라우팅 시 보여줄 페이지를 관리한다.
  - utils/: 이메일 체크, 숫자 체크 등의 유틸 함수를 관리한다.
- docs/: 문서에 필요한 파일을 관리한다.

## React Code Style

- 함수명, 변수명 : camelCase
- 컴포넌트명 : PascalCase
- 폴더명: lowercase

## React Type Rule

- 개발 시 타입은 src/@types 폴더 하위에 작성한다.
- 기능 별로 파일을 나누고 ".d.ts" 형식으로 작성한다. ex) router.d.ts
- 타입 선언은 아래의 형식을 따른다.

```typescript
// router.d.ts
declare module 'router' {
  export type RouteItem = {
    id: number;
    path: string;
    label: string;
    withAuth: boolean;
    element: JSX.Element;
  };
}
```

- ".ts" 나 ".d.ts" 를 사용하던지 큰 차이는 없지만 ".d.ts" 를 사용하면 module 키워드를 사용해서 절대 경로로 import 할 수 있는 장점이 있다.

## Testing

- 컴포넌트 테스팅에는 Storybook을 사용한다.
- 성능 테스팅에는 React Testing Library를 사용한다.
