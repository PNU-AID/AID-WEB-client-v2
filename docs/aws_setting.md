# AWS Setting

github actions을 사용하여 AWS S3에 배포

## Deploy Rule

1. 개발이 완료된 dev 브랜치에서 staging 브랜치로 PR 생성
2. staging 브랜치에서 github actions로 AWS S3에 배포
3. staging 에서 배포된 코드를 검증
4. 최종적으로 문제가 없을 시, staging 브랜치에서 main 브랜치로 PR 생성
5. main 브랜치에서 github actions로 AWS S3에 배포

## Requirements

### .github/workflows/deploy_test.yml

- 테스트 코드를 배포하기 위한 Github Actions 실행 파일
- staging 브랜치에 PR 시 실행
- Repository에 시크릿 변수로 AWS IAM 키 등록
- AWS S3에 배포
