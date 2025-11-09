# 경품 추첨 프로그램

이 프로그램은 온오프믹스나 페스타를 통하여 수집한 참가자 정보 데이터 파일을 이용하여, 화면에 띄워놓고 경품 추첨을 할 수 있도록 만든 Blazor WASM 애플리케이션입니다.

누구나 자유롭게 수정하고 활용하실 수 있습니다.

## 살펴보기

[https://lottery.dotnetdev.kr/](https://lottery.dotnetdev.kr/)

## 주요 기능

- [온오프믹스](https://onoffmix.com/), [이벤터스](https://event-us.kr/), [티켓타코](https://www.ticketa.co/) 참가자 데이터 파일 (XLS/CSV) 지원
- 물리 엔진 기반의 시각적 추첨 애니메이션
- 완전한 클라이언트 사이드 처리 (개인정보 서버 전송 없음)
- 다중 추첨 그룹 지원
- 반응형 웹 디자인

## 기술 스택

- **프론트엔드**: Blazor WebAssembly (.NET 8.0)
- **UI 컴포넌트**: Adobe Spectrum Web Components
- **물리 엔진**: Rapier2D (직접 JavaScript/WASM 로드)
- **애니메이션**: Lottie
- **TypeScript**: esbuild를 통한 UI 컴포넌트 빌드
- **패키지 관리**: pnpm
- **데이터 처리**: NPOI (Excel/CSV 파싱)

## 개발 환경 요구사항

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (버전은 `.nvmrc` 파일 참조)
- [pnpm](https://pnpm.io/) 10.13.1 이상

## 로컬 개발 환경 설정

### 1. 저장소 클론

```bash
git clone https://github.com/yourusername/DotNetDevLottery.git
cd DotNetDevLottery
```

### 2. Node.js 버전 설정 (선택사항)

nvm을 사용하는 경우:

```bash
nvm use
```

### 3. 프로젝트 디렉터리로 이동

```bash
cd src/DotNetDevLottery
```

### 4. 의존성 설치 및 빌드

의존성은 `dotnet build` 또는 `dotnet run` 시 자동으로 설치됩니다:

```bash
dotnet run
```

또는 수동으로 설치:

```bash
pnpm install
dotnet restore
```

### 5. 애플리케이션 실행

```bash
dotnet run
```

브라우저에서 `http://localhost:5095/`로 접속합니다.

## 빌드

### 개발 빌드

```bash
dotnet build
```

### 프로덕션 빌드

```bash
dotnet publish -c Release -o ./publish
```

빌드된 파일은 `publish/wwwroot` 디렉터리에 생성됩니다.

## 사용 방법

1. 온오프믹스 또는 이벤터스, 티켓타코에서 XLS 또는 CSV 파일을 다운로드합니다.
2. 애플리케이션을 실행하고 웹 브라우저로 접속합니다.
3. 다운로드한 XLS 또는 CSV 파일을 업로드합니다.
4. 추첨을 진행할 그룹 정보를 선택하고 다음 버튼을 클릭합니다.
5. 필요한 만큼 추첨을 진행합니다. 모든 추첨이 끝나면 다시 첫 페이지로 되돌아갑니다.

## 프로젝트 구조

```
DotNetDevLottery/
├── src/
│   └── DotNetDevLottery/
│       ├── Components/         # Blazor 컴포넌트
│       ├── Models/             # 데이터 모델
│       ├── Pages/              # 페이지 컴포넌트
│       ├── Services/           # 비즈니스 로직
│       ├── Shared/             # 공유 컴포넌트
│       ├── typescript/         # TypeScript 소스 (UI 컴포넌트)
│       ├── wwwroot/            # 정적 파일
│       │   ├── js-modules/     # Plain JavaScript 모듈 (Rapier2D 래퍼)
│       │   └── lib/            # 외부 라이브러리 (Rapier2D)
│       ├── config/             # 빌드 설정
│       └── Program.cs          # 애플리케이션 진입점
├── .github/
│   └── workflows/              # GitHub Actions 워크플로우
└── README.md
```

## 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다. `master` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드 및 배포를 수행합니다.

## 참고 사항

- 제출되는 엑셀 파일은 서버로 보내지지 않고, 웹 어셈블리 코드와 로컬 호스트 내부에서만 사용됩니다. (이 애플리케이션은 백엔드가 없습니다.)
- Blazor WASM 애플리케이션은 SPA 애플리케이션으로 루트 디렉터리에서 애플리케이션이 호스팅된다는 전제에서 개발되었습니다.
- TypeScript 코드는 UI 컴포넌트에 대해 빌드 전에 자동으로 컴파일됩니다.
- Rapier2D 물리 엔진은 TypeScript를 거치지 않고 JavaScript/WASM으로 직접 로드되어 성능과 단순성을 향상시킵니다.

## 문제 해결

### 빌드 오류 발생 시

1. node_modules 디렉터리 삭제 후 재설치:
   ```bash
   cd src/DotNetDevLottery
   rm -rf node_modules
   pnpm install
   ```

2. .NET 캐시 정리:
   ```bash
   dotnet clean
   dotnet restore
   ```

## 기여하기

이슈 제보, 기능 제안, Pull Request는 언제나 환영합니다!

1. 이 저장소를 Fork 합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feat/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feat/amazing-feature`)
5. Pull Request를 생성합니다

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 컨트리뷰터

- 원본 코드 작성은 [@SimYunSup](https://github.com/SimYunSup) 님께서 기여해주셨습니다.
- 이후 코드 개선, 리팩토링 작업은 [@rkttu](https://github.com/rkttu) 님께서 도와주고 계십니다.
