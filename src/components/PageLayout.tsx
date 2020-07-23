import * as React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "./globalStyles"
import { LanguageSwitcher } from "./language/LanguageSwitcher"

export interface LayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="//static.cdn.prismic.io/prismic.min.js"
          async
        ></script>
        <link rel="preconnect" href="https://code.jquery.com" />
        <link rel="preconnect" href="https://hartelo.prismic.io" />
        <link
          rel="preload"
          href="/fonts/rubik-regular.woff2"
          as="font"
          type="font/woff2"
        ></link>
        <link
          rel="preload"
          href="/fonts/shandonslab.woff2"
          as="font"
          type="font/woff2"
        ></link>
        <link
          rel="preload"
          href="/fonts/rubik-medium.woff2"
          as="font"
          type="font/woff2"
        ></link>
      </Helmet>
      <GlobalStyle />
      <LanguageSwitcher />
      {children}
    </>
  )
}
