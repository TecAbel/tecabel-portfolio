export class ThemePortfolio {
  storageKey = 'theme-abel'
  setStorageTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(this.storageKey, theme)
  }
  getStorageTheme(): string {
    if (typeof window === undefined) return 'light'

    const theme = localStorage.getItem(this.storageKey)
    if (!theme) this.setStorageTheme('light')
    return theme || 'light'
  }
  toogleTheme() {
    if (typeof window === undefined) return
    const htmlDocument = document.documentElement
    if (!htmlDocument) return

    const current = this.getStorageTheme()
    if (current == 'light') {
      htmlDocument.classList.add('dark')
      this.setStorageTheme('dark')
    } else if (current == 'dark') {
      htmlDocument.classList.remove('dark')
      this.setStorageTheme("light")
    }
  }
}
