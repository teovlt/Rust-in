import type { Theme } from './types'

export const themeLocalStorageKey = 'rust-in-theme'

export const defaultTheme = 'light'

export const getImplicitPreference = (): Theme | null => {
  return 'light'
}
