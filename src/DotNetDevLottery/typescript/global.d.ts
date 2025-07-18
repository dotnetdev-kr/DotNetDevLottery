import type { DotNet } from '@microsoft/dotnet-js-interop';

declare global {
  interface Window {
    DotNet: typeof DotNet;
  }
  interface ImportMetaEnv {
    MODE: 'development' | 'production';
  }
  export interface ImportMeta {
    env: ImportMetaEnv;
  }
}

