import type { DotNet } from '@microsoft/dotnet-js-interop';

declare global {
  interface Window {
    DotNet: typeof DotNet;
  }
}

