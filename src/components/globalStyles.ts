import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: "Rubik";
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Shandon Slab"
  }
`

export const colors = {
  white: "#ffffff",
  pink: "#f2cdde",
  green: "#52926c",
  black: "#333333",
} as const

export const backgroundColors = ["white", "pink", "green", "default"] as const
export type BackgroundColor = typeof backgroundColors[number]
export type BackgroundColorWithoutDefault = Exclude<BackgroundColor, "default">
