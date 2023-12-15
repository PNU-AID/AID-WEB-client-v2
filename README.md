# AID 홈페이지 리뉴얼 프로젝트 - client

> 부산대학교 인공지능 학회 AID의 홈페이지 리뉴얼 프로젝트

React와 TypeScript를 배우며 개발 중인 프로젝트. 대를 이어 유지보수가 가능하도록 높은 재사용성과 가독성 좋은 코드를 추구한다. 개발을 시작할 때는 하단의 '시스템 개요', '개발 규칙' 등의 문서를 반드시 참고할 것을 권고한다.

## Docs Link

1. [**시스템 개요**](./docs/system_architecture.md)
2. [**개발 규칙**](./docs/dev_rule.md)
3. [**브랜치 규칙**](./docs/branch_rule.md)
4. [**로컬 환경 설정**](./docs/local_setting.md)
5. [**AWS 환경 설정**](./docs/aws_setting.md)

## Developer

- 김민석 (@KimCookieYa)
- 이서연 (@yeonddori)

## 권고사항

- [새로운 리액트 문서에서 권장하는 9가지 권장 사항](https://velog.io/@eunbinn/react-docs-recommendations)
- any를 사용하지 말자.
- 복잡한 페이지를 구현할 때는 컴포넌트를 분리해서 개발하자.
- 간단한 페이지를 구현할 때는 굳이 컴포넌트를 분리해서 개발할 필요는 없다.
- 컴포넌트 간의 의존성을 최소화하자.
  - => props 전달을 최소화하자.
- 성능 상의 문제(렌더링)가 발생할 때만 캐싱을 사용하자.
  - 캐싱 기법: useMemo, useCallback, React.memo
- 디자인을 할 때는 Figma에 먼저 그려보고 구현하자.
