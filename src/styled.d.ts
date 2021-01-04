import "styled-components"

interface IPalette {
  main: string
  contrastText: string
}

interface Breakpoints {
  tablet: number
  desktop: number
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
    breakpoints: Breakpoints
  }
}
