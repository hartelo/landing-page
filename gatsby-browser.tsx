import { registerLinkResolver } from "gatsby-source-prismic-graphql"
import React from "react"
import { linkResolver } from "./prismic-config"
import { StoreProvider } from "./src/store/Store"

registerLinkResolver(linkResolver)

export const wrapRootElement = ({ element }) => {
  return <StoreProvider>{element}</StoreProvider>
}
