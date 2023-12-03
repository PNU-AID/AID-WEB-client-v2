# How to start

개인 Repo로 fork하지 말고, origin에서 개별 브랜치에서 작업하고 PR 생성 후 merge하도록 한다.

## Clone

```sh
git clone https://github.com/PNU-AID/AID_WEB_frontend.git
cd AID_WEB_frontend
git remote -v
git checkout -t origin/dev
# origin/dev와 동기화 하려면 아래 명령어 실행
git pull origin dev
# 이후 기능 브랜치 파서 작업
git checkout -b feat/<기능 내용>
```

## Setting

- yarn install
- yarn add [package name]: 패키지 설치
- yarn dev: Development 모드에서 애플리케이션 실행
- yarn build: 애플리케이션 빌드
- yarn preview: 빌드 파일 실행

## Linting

eslint와 prettier를 적용하려면, VS Code의 extensions인 Eslint와 Prettier를 설치한다.
