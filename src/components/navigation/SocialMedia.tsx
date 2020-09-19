import { motion, Variants } from "framer-motion"
import React from "react"
import styled from "styled-components"
import FacebookIconSVG from "../../assets/facebook.svg"
import InstagramIconSVG from "../../assets/instagram.svg"

const socialMedia: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      ease: [0.51, 0, 0.34, 1],
      delay: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: "7rem",
    transition: {
      y: { stiffness: 10, duration: 0.5 },
      ease: [0.51, 0, 0.34, 1],
    },
  },
}

interface SocialMediaProps {
  isDesktop?: boolean
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ isDesktop }) => {
  return (
    <SocialMediaContainer
      isDesktop={isDesktop}
      variants={socialMedia}
      initial={{ opacity: isDesktop ? 1 : 0 }}
    >
      <SocialMediaRow isDesktop={isDesktop}>
        <a
          href="https://facebook.com/hartelocompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com/hartelocompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </SocialMediaRow>
    </SocialMediaContainer>
  )
}

const SocialMediaContainer = styled(motion.div)`
  ${(props: SocialMediaProps) =>
    props.isDesktop
      ? `
        margin-bottom: 1rem;
      `
      : `
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
    `}
`

const SocialMediaRow = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  left: -50%;
  height: 10vh;

  & > * {
    margin: 0 0.8rem;
  }

  ${(props: SocialMediaProps) =>
    props.isDesktop
      ? `
    flex-direction: column-reverse;
    position: static;
    left: 0;
    height: auto;

    & > * {
      margin: 0.8rem 0;
    }
  `
      : ""};
`

const FacebookIcon = styled(FacebookIconSVG)`
  width: 2rem;
  height: 2rem;
`

const InstagramIcon = styled(InstagramIconSVG)`
  width: 2rem;
  height: 2rem;
`
