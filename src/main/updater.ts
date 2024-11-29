import updater from 'electron-updater'

export const autoUpdater = updater.autoUpdater

autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = true
