# 경품 추첨 프로그램

이 프로그램은 온오프믹스나 페스타를 통하여 수집한 참가자 정보 데이터 파일을 이용하여, 화면에 띄워놓고 경품 추첨을 할 수 있도록 만든 Blazor WASM 애플리케이션입니다.

누구나 자유롭게 수정하고 활용하실 수 있습니다.

## 살펴보기

[https://lottery.dotnetdev.kr/](https://lottery.dotnetdev.kr/)

## 사용 방법

1. 온오프믹스 또는 festa에서 XLS 또는 CSV 파일을 다운로드합니다.
2. 이 프로그램의 소스 코드를 체크아웃한 다음, `.csproj` 파일이 들어있는 디렉터리로 이동하여 `dotnet run` 명령으로 실행합니다.
3. 웹 브라우저로 `http://localhost:5095/` 사이트에 접속하여 다운로드한 XLS 또는 CSV 파일을 업로드합니다.
4. 추첨을 진행할 그룹 정보를 선택하고 다음 버튼을 클릭합니다.
5. 브라우저 창을 열어둔 상태에서 필요한 만큼 추첨을 진행합니다. 모든 추첨이 끝나면 다시 첫 페이지로 되돌아갑니다.

## 참고 사항

- 제출되는 엑셀 파일은 서버로 보내지지 않고, 웹 어셈블리 코드와 로컬 호스트 내부에서만 사용됩니다. (이 애플리케이션은 백엔드가 없습니다.)
- Blazor WASM 애플리케이션은 SPA 애플리케이션으로 루트 디렉터리에서 애플리케이션이 호스팅된다는 전제에서 개발되었습니다.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 컨트리뷰터

- 원본 코드 작성은 [@SimYunSup](https://github.com/SimYunSup) 님께서 기여해주셨습니다.
- 이후 코드 개선, 리팩토링 작업은 [@rkttu](https://github.com/rkttu) 님께서 도와주고 계십니다.
