## 개요

Next.js로 작성된 프로젝트입니다.

## 실행

- 다음 URL에 배포되었습니다: https://mss-fe-test.vercel.app
- 로컬에서 개발 모드로 실행: `npm run dev`
- 로컬에서 프로덕션 모드로 실행: `npm run build` 을 통해 빌드 이후 `npm run start`

## 디렉토리

- `/pages`: 프로젝트 내의 **페이지**들을 담고 있는 디렉토리

- `/components`: 프로젝트 내에서 사용한 개별 컴포넌트들을 담고 있는 디렉토리.

  - `/components/common` 디렉토리에는 프로젝트 전반에서 공통으로 사용될 수 있는 컴포넌트를 담고 있습니다.

- `/types`: 프로젝트 전반에서 사용되는 타입스크립트의 타입 정의

- `/constants`: 프로젝트 전반에서 사용되는 상수 정의

- `/hooks`: 프로젝트 전반에서 사용되는 custom hook 정의

## 주요 컴포넌트

- `FilterButtonList`: '검색', '세일상품' 등 필터를 설정하는 버튼을 담고 있는 컴포넌트

- `AppliedFilterList`: 적용된 필터 목록을 보여주는 컴포넌트

- `ProductItem`: 개별 상품의 정보를 표시하는 컴포넌트

- `ProductList`: 상품 정보를 외부에서 불러오고, 필터링을 수행한 후 표시하는 컴포넌트

## 주요 hooks

- `useProductQuery`: 상품 정보를 연속적으로 불러오는 hook
- `useInfiniteScroll`: 무한 스크롤을 삽입하기 위한 hook

## 사용한 외부 라이브러리

- 스타일링: Emotion
