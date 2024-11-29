import updater from 'electron-updater'

export const autoUpdater = updater.autoUpdater

autoUpdater.autoDownload = true
autoUpdater.autoInstallOnAppQuit = true
