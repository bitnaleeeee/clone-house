## 각 데이터 URL
썸네일리스트: https://json-server-suvg.vercel.app/houseThumbnailList  
오늘의딜: https://json-server-suvg.vercel.app/houseShopList  
시공리뷰: https://json-server-suvg.vercel.app/houseReviewList  

## 공통 영역
### 앱 안내 팝업

- 앱 안내 팝업을 닫으면(모바일웹으로 볼게요) 24시간 뒤에 해당 팝업이 다시 나오도록 하고, 24시간 안에는 해당 팝업이 안나오도록 해주세요.(3점)

## 헤더 영역

### 요구사항

- GNB를 클릭할 때마다 해당 메뉴가 활성화(Active)되도록 해주세요.(3점)

### 앞으로 요구할 사항(미리 생각해 보세요)

- 메인메뉴 클릭시 왼쪽에서 슬라이드 메뉴가 나오도록 해주세요.(3점)
- 검색 버튼 클릭시 검색 팝업이 나오도록 해주세요.(2점)
- 장바구니 클릭시 장바구니 팝업이 나오도록 해주세요.(2점)

## 메인 영역

### 슬라이드 메뉴

- 주석표시된 슬라이드 배너를 구현해주세요.(4점)
  - 왼쪽에서 오른쪽으로 슬라이드되도록 해주세요.
  - 일정 시간(5초)가 지나면 자동으로 슬라이드 되도록 해주세요.
  - 무한 슬라이드를 구현해주세요.(슬라이드 마지막 > 처음으로)

### 비주얼 메뉴

- 각 클릭시 해당 페이지로 이동시켜 주세요.(1점)
  - 페이지는 임시로 생성하고 페이지 이동은 라우터를 사용해주세요.

### 공간활용/옷장/리뷰 리스트

- 각 데이터를 받아서 알맞게 구성해 주세요.(2점)
- 데이터에 맞게 클립(NEW)를 구성해주세요.(1점)
  - 기준 날짜는 23년 08월 01일부터 일주일 이내면 NEW로 표기해주세요.
- 데이터가 없거나 오류가 나면 예외처리와 화면을 만들어 주세요.(2점)
  - 예: 데이터가 없습니다. or 게시물이 없습니다.
- ~~각 썸네일의 북마크 기능을 구현해주세요.(3점)~~
- ~~북마크의 체크 히스토리는 로컬 스토리지에 각 관리되도록 저장해주세요.~~

### 오늘의 딜 리스트
- 각 데이터를 받아서 알맞게 구성해 주세요.(4점)
  - 퍼블리싱된 데이터 포멧에 맞게 함수를 따로 만들어 관리해주세요.
  - 별점(star)는 100점 만점으로 데이터가 넘어옵니다. 5점 만점으로 바꿔주세요.
  - 가격(price)는 정가와 세일가격의 할인 비율을 나타내주세요.
- 썸네일 왼쪽 상단에 카운터 기능을 만들어주세요.(4점)
  - 금일 24시 기준으로 실시간 카운터가 되도록 구현해주세요.
- 금액은 천 단위는 콤바를 넣어주세요.
- 데이터가 없는 경우도 예외처리를 해주세요.

## 푸터 영역
- 전화번호 클릭했을 때 전화가 되도록 구현해 주세요.
