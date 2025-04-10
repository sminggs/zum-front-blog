# 줌 블로그 

ZUM 블로그 프론트엔드 프로젝트는  **사용자 관리, 블로그 메인 홈, 사용자 블로그 홈** 등 다양한 도메인 구성에 대응하기 위해 설계된 **모노레포(Monorepo)** 구조입니다.

**초기 세팅 기준이며, 향후 구조나 도메인은 변경될 수 있습니다. 현재는 pc-user-blog만 셋팅되어 있습니다.**


## 📌 개발 규칙
### 마크업
- SCSS는 **BEM 네이밍 방식**으로 마크업 클래스명을 작성합니다.

### 이미지

1. SVG 파일 관리:

   - SVG 파일들은 번들에 직접 포함되지 않습니다.
   - 대신 public 디렉토리에 저장되어 별도로 캐싱됩니다.
   - 이는 번들 크기를 줄이고 웹사이트의 로딩 성능을 향상시키기 위한 전략입니다.

2. SVG 스프라이트 사용:

   - 여러 개의 SVG 아이콘을 하나의 파일로 결합한 "스프라이트" 이미지를 사용합니다.
   - 이 방식은 여러 개의 개별 SVG 파일을 로드하는 것보다 네트워크 요청 수를 줄일 수 있습니다.

3. 스프라이트 생성 방법:

   - 프로젝트에서 제공하는 커스텀 명령어를 사용합니다.
   - 명령어 형식: `cd apps/mobile` `pnpm svg-sprite {원본 경로} {스프라이트 파일명}`
   - 예시: `pnpm svg-sprite ./assets/search search.svg`
   - 이 명령어는 지정된 경로의 SVG 파일들을 하나의 스프라이트 이미지로 결합합니다.

4. 스프라이트 아이콘 사용 방법:

   - 프로젝트에서 제공하는 Icon 컴포넌트를 사용합니다.
   - 사용 예시:
     ```jsx
     <Icon symbol="search" id="filter" />
     ```



## 구성

- `pc-blog-home`: PC 블로그 메인 홈
- `pc-admin`: PC 사용자 관리자 CMS
- `pc-user-blog`: PC 사용자 블로그
- `mob-blog-home`: MOBILE 블로그 메인 홈
- `mob-admin`: MOBILE 사용자 관리자 CMS
- `mob-user-blog`: MOBILE 사용자 블로그
- `@repo/ui`: `apps`에서 공유하기 위해 zum-design-system로 구성된 공통 디자인 시스템  
- `@repo/eslint-config`: eslint-config-next, eslint-config-prettier를 포함한 eslint 설정
- `@repo/typescript-config`: 모노레포 전반에 사용되는 tsconfig.json

