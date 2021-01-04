import { registerLinkResolver } from "gatsby-source-prismic-graphql"
import React from "react"
import { ThemeProvider } from "styled-components"
import { linkResolver } from "./prismic-config"
import { StoreProvider } from "./src/store/Store"
import { defaultTheme } from "./src/theme"

registerLinkResolver(linkResolver)

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
    </StoreProvider>
  )
}
