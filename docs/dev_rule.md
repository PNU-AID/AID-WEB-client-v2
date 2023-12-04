# Dev Rule

## React Code Style

- 함수명, 변수명 : camelCase
- 컴포넌트명 : PascalCase

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
