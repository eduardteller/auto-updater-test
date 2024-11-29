import { ElectronAPI } from '@electron-toolkit/preload'

interface Api {
  onUMessage: (callback: (msg: string) => void) => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
