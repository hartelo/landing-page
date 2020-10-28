import React from "react"
import styled from "styled-components"
import LogoSVG from "../../assets/hero-logo.svg"
import { Section } from "../common/Section"
import { HeroHandOne } from "../images/HeroHandOne"
import { HeroHandThree } from "../images/HeroHandThree"
import { HeroHandTwo } from "../images/HeroHandTwo"
import { DESKTOP_LIMIT, TABLET_LIMIT } from "../responsive"

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Logo />
      <HeroHandOneWrapper>
        <HeroHandOne />
      </HeroHandOneWrapper>
      <HeroHandTwoWrapper>
        <HeroHandTwo />
      </HeroHandTwoWrapper>
      <HeroHandThreeWrapper>
        <HeroHandThree />
      </HeroHandThreeWrapper>
    </HeroSection>
  )
}

const HeroSection = styled(Section)`
  position: relative;
  overflow: hidden;
`

const Logo = styled(LogoSVG)`
  display: block;
  margin: 0 auto;
  padding-top: 8vh;
  width: 75vw;

  @media only screen and (min-width: ${TABLET_LIMIT.minWidth}px) {
    padding-top: 5vh;
    width: 50vw;
  }

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    width: 60vh;
    margin: 0 0 0 5vw;
    padding-top: 10vh;
  }
`

const HeroHandOneWrapper = styled.div`
  position: absolute;
  bottom: -2vh;
  left: -7vw;

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    transform: rotate(-5deg);
    bottom: -14vh;
    left: 40vw;
  }
`

const HeroHandTwoWrapper = styled.div`
  position: absolute;
  bottom: 1vh;
  right: -7vw;

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    bottom: 1vh;
    right: -7vh;
  }
`

const HeroHandThreeWrapper = styled.div`
  position: absolute;
  bottom: 27vh;
  right: -7vw;

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    bottom: 45vh;
    right: -7vh;
  }
`
