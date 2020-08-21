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
      delay: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: "7rem",
    transition: {
      y: { stiffness: 10, duration: 0.5 },
    },
  },
}
export const SocialMedia: React.FC = () => {
  return (
    <SocialMediaContainer variants={socialMedia} initial={{ opacity: 0 }}>
      <SocialMediaRow>
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
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
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
`

const FacebookIcon = styled(FacebookIconSVG)`
  width: 2rem;
`

const InstagramIcon = styled(InstagramIconSVG)`
  width: 2rem;
`
