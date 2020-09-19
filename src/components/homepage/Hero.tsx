import React from "react"
import styled from "styled-components"
import LogoSVG from "../../assets/hero-logo.svg"
import { DESKTOP_LIMIT, TABLET_LIMIT } from "../responsive"

export const Hero: React.FC = () => {
  return (
    <Section>
      <Logo />
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
`

const Logo = styled(LogoSVG)`
  display: block;
  margin: 0 auto;
  padding-top: 8vh;
  width: 75vw;

  @media only screen and (min-width: ${TABLET_LIMIT.minWidth}px) {
    width: 50vw;
  }

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    width: 50vh;
    margin: 0 0 0 5vw;
    padding-top: 10vh;
  }
`
