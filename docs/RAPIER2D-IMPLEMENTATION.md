# Rapier2D 직접 사용 구현

## 개요

이 문서는 TypeScript 없이 @dimforge/rapier2d 물리 엔진을 .NET Blazor WebAssembly에서 직접 사용하는 구현에 대해 설명합니다.

## 문제점

기존에는 TypeScript를 통해 Rapier2D를 사용했습니다:
- TypeScript → esbuild 컴파일 → JavaScript → Blazor JSInterop
- 불필요한 컴파일 단계
- 타입 안정성은 런타임에 사용되지 않음

## 해결책

Rapier2D npm 패키지의 사전 빌드된 JavaScript 바인딩을 직접 사용:
- Rapier2D JavaScript/WASM → Blazor JSInterop
- 컴파일 단계 제거
- 더 단순한 아키텍처

## 구현 세부사항

### 1. Rapier2D 라이브러리 복사

```
wwwroot/lib/rapier2d/
├── rapier.js                   # 메인 진입점
├── rapier_wasm2d.js           # WASM 로더
├── rapier_wasm2d_bg.js        # WASM 바인딩
├── rapier_wasm2d_bg.wasm      # 물리 엔진 WASM
└── [기타 모듈들...]
```

### 2. JavaScript 래퍼 모듈 생성

#### rapier-loader.js
```javascript
// ES6 모듈로 rapier2d를 비동기 로드
export async function getRapier() {
  return await import('/lib/rapier2d/rapier.js');
}
```

#### physics-engine.js
- 물리 시뮬레이션 루프
- 이벤트 핸들링 (충돌 감지)
- 60 FPS 타임스텝

#### coord-utility.js
- 화면 좌표 ↔ 물리 좌표 변환
- 픽셀 단위 → 미터 단위

#### machine-animation.js
- 추첨 볼 애니메이션
- 물리 시뮬레이션 통합
- .NET 콜백 연동

### 3. Blazor 컴포넌트 업데이트

```csharp
// 이전
machineUtils = await JSRuntime.InvokeAsync<IJSObjectReference>(
    "import", "/js/Components/Random/MachineAnimation.r.js");

// 현재
machineUtils = await JSRuntime.InvokeAsync<IJSObjectReference>(
    "import", "/js-modules/machine-animation.js");
```

## 이점

1. **단순성**: TypeScript 컴파일 단계 제거
2. **성능**: 직접 WASM 로드로 오버헤드 감소
3. **유지보수**: 더 적은 빌드 종속성
4. **명확성**: 코드 경로가 더 직접적

## Microsoft 문서 참조

이 구현은 다음 Microsoft 문서를 따릅니다:
- [ASP.NET Core Blazor WebAssembly 네이티브 종속성](https://learn.microsoft.com/ko-kr/aspnet/core/blazor/webassembly-native-dependencies)

## 테스트

- ✅ 빌드 성공
- ✅ 런타임 시작 성공
- ✅ 종속성 보안 검사 통과

## 향후 고려사항

현재 TypeScript는 다른 UI 컴포넌트(Spectrum Web Components, Lottie)를 위해 유지됩니다. 필요시 이들도 plain JavaScript로 변환 가능합니다.
