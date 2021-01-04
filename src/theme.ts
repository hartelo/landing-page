import { DefaultTheme } from "styled-components"

/*
 * ===================
 * = CSS Breakpoints =
 * ===================
 */

export const DESKTOP_LIMIT = { minWidth: 1025 } as const
export const TABLET_LIMIT = { minWidth: 768, maxWidth: 1024 } as const
export const MOBILE_LIMIT = { maxWidth: 767, maxHeight: 815 } as const
export const DEFAULT_LIMIT = { minWidth: 768 } as const
export const TABLET_OR_MOBILE_LIMIT = { maxWidth: 1024 } as const

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  breakpoints: {
    tablet: TABLET_LIMIT.minWidth,
    desktop: DESKTOP_LIMIT.minWidth,
  },
}
