# 기능 목록

### 로직 구분

- 🕹 도메인 로직
- 👤 UI 로직
- 🔧 데이터 처리 로직

### 로또 구입 및 발행하기

- 👤 로또 구입 금액을 입력 받기
- 🔧 구입 금액이 자연수가 아닌 경우 예외 처리
- 🔧 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리
- 🕹 구입한 로또 수량 계산하기
- 🕹 로또 수량만큼 랜덤 번호로 로또 발행하기
  - 로또 번호 오름차순으로 정렬하기
- 👤 발행한 로또 수량 및 번호를 출력하기

### 당첨 번호 및 보너스 번호 추첨하기

- 👤 당첨 번호 입력 받기
- 🔧 당첨 번호를 쉼표(,)를 기준으로 구분하기
- 🔧 당첨 번호가 1~45 범위의 서로 다른 자연수 6개가 아닌 경우 예외 처리
- 👤 보너스 번호 입력 받기
- 🔧 보너스 번호가 1~45 범위의 자연수가 아닌 경우 예외 처리
- 🔧 보너스 번호가 당첨 번호와 중복될 경우 예외 처리

### 로또 결과 구하기

- 🕹 사용자가 구매한 로또 번호와 당첨 번호를 비교해서 당첨 내역 계산하기
- 🕹 수익률 계산하기
- 👤 당첨 내역 및 수익률 출력하기
  - 수익률은 소수점 둘째 자리에서 반올림하고 3자리마다 쉼표(,) 표시하기

### 예외 처리

- 🔧 예외 발생 시 "[ERROR]"로 시작하는 에러 메시지 출력 후 종료하기
