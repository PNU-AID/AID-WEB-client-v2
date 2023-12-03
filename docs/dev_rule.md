# Branch Rule

> **main**: PR만 가능한 default branch, PR시 자동으로 배포하는 github action 실행
> **staging**: PR만 가능한 test deploy branch, PR시 자동으로 배포하는 github action 실행
> **dev**: 실제 개발 브랜치, PR은 이곳으로 하고 로컬 테스트를 한다.
> **feat/<기능>**: clone후 작업해야할 브랜치, 이런 이름의 브랜치를 파고 작업후 dev로 PR한다.
> **hotfix/<수정내용>**: 긴급한 수정내용인 경우 main에서 새로 분기하여 작업해 merge한다.

## 작업 후 PR 방법

feat/<기능 내용>에서 작업한 후 아래 내용 실행

```sh
git pull origin dev # 달라진 내용 있으면 반영
git checkout -b dev
git merge feat/<기능 내용>
```

이후 깃허브로 이동후 PR 보내기

## Commit Convention

> Type: subject
>
> Body
>
> Footer(이슈 트랙시 사용)
>
> ---
>
> example
>
> feat: add login decorator
>
> - add decorator in utils.py
> - add docstring
>
> issue #31

## Commit Type

- [전체 규칙](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- Init: 프로젝트 세팅
- Feat: 새로운 기능을 추가할 경우
- Fix: 버그를 고친 경우
- Design: CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE: 커다란 API 변경의 경우
- !HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우
- Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor: 프로덕션 코드 리팩토링
- Comment: 필요한 주석 추가 및 변경
- Docs: 문서를 수정한 경우
- Test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- Chore: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove: 파일을 삭제하는 작업만 수행한 경우

## React Code Style

- 함수명, 변수명 : camelCase
- 컴포넌트명 : PascalCase
