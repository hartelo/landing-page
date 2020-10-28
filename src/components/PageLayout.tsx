import React, { memo, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { GlobalStyle } from "./globalStyles"
import { Navigation, NavigationProps } from "./navigation/Navigation"
import { DESKTOP_LIMIT } from "./responsive"

export interface LayoutProps {
  children: React.ReactNode
  menuItems: NavigationProps
  backgroundColor?: string
}

export const PageLayout: React.FC<LayoutProps> = ({
  children,
  menuItems,
  backgroundColor,
}) => {
  const isDesktop = useMediaQuery(DESKTOP_LIMIT)
  const background = backgroundColor ?? "#F2CDDE"

  return (
    <>
      <PrismicTags />
      <FontTags />
      <GlobalStyle />
      <Navigation {...menuItems} />
      <Main isDesktop={isDesktop} backgroundColor={background}>
        {children}
      </Main>
    </>
  )
}

const PrismicTags = memo(() => (
  <Helmet>
    <script
      type="text/javascript"
      src="//static.cdn.prismic.io/prismic.min.js"
      async
    ></script>
    <link rel="preconnect" href="https://code.jquery.com" />
    <link rel="preconnect" href="https://hartelo.prismic.io" />
  </Helmet>
))

const FontTags = memo(() => (
  <Helmet>
    <link
      rel="preload"
      href="/fonts/rubik-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    ></link>
    <link
      rel="preload"
      href="/fonts/shandonslab.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    ></link>
    <link
      rel="preload"
      href="/fonts/rubik-medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    ></link>
  </Helmet>
))

const Main = styled.main`
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};

  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > * {
    ${(props: { isDesktop: boolean; backgroundColor: string }) =>
      props.isDesktop ? `padding-left: 5rem` : `padding-top: 0rem;`}
  }
`
