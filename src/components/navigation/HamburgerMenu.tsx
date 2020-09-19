import { motion, Variants } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface HamburgerMenuProps {
  handleClick: () => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  handleClick,
}) => {
  return (
    <HamburgerMenuContainer onClick={handleClick}>
      <HamburgerMenuIcon viewBox="0 0 100 100">
        <motion.path
          id="hamburger-top"
          d="M 6.695 16.355 L 93.305 16.355 C 96.724 16.355 99.5 19.131 99.5 22.551 L 99.5 22.551 C 99.5 25.97 96.724 28.746 93.305 28.746 L 6.695 28.746 C 3.276 28.746 0.5 25.97 0.5 22.551 L 0.5 22.551 C 0.5 19.131 3.276 16.355 6.695 16.355 Z"
          variants={menuPathTop}
          initial={{ fill: "#ffffff" }}
        ></motion.path>
        <motion.path
          id="hamburger-middle"
          d="M 6.695 43.805 L 93.305 43.805 C 96.724 43.805 99.5 46.581 99.5 50 L 99.5 50 C 99.5 53.419 96.724 56.195 93.305 56.195 L 6.695 56.195 C 3.276 56.195 0.5 53.419 0.5 50 L 0.5 50 C 0.5 46.581 3.276 43.805 6.695 43.805 Z"
          variants={menuMiddlePath}
          initial={{ fill: "#ffffff", opacity: 1 }}
        ></motion.path>
        <motion.path
          id="hamburger-bottom"
          d="M 6.695 71.254 L 93.305 71.254 C 96.724 71.254 99.5 74.03 99.5 77.449 L 99.5 77.449 C 99.5 80.869 96.724 83.645 93.305 83.645 L 6.695 83.645 C 3.276 83.645 0.5 80.869 0.5 77.449 L 0.5 77.449 C 0.5 74.03 3.276 71.254 6.695 71.254 Z"
          variants={menuPathBottom}
          initial={{ fill: "#ffffff" }}
        ></motion.path>
      </HamburgerMenuIcon>
    </HamburgerMenuContainer>
  )
}

const HamburgerMenuContainer = styled.div``

const HamburgerMenuIcon = styled.svg`
  height: 2.1rem;
`

const menuPathTop: Variants = {
  open: {
    d:
      "M 14.998 76.241 L 76.241 14.998 C 78.658 12.581 82.584 12.581 85.002 14.998 L 85.002 14.998 C 87.419 17.416 87.419 21.342 85.002 23.759 L 23.759 85.002 C 21.342 87.419 17.416 87.419 14.998 85.002 L 14.998 85.002 C 12.581 82.584 12.581 78.658 14.998 76.241 Z",
    fill: "#ffffff",
    transition: {
      duration: 0.35,
    },
  },
  closed: {
    d:
      "M 6.695 16.355 L 93.305 16.355 C 96.724 16.355 99.5 19.131 99.5 22.551 L 99.5 22.551 C 99.5 25.97 96.724 28.746 93.305 28.746 L 6.695 28.746 C 3.276 28.746 0.5 25.97 0.5 22.551 L 0.5 22.551 C 0.5 19.131 3.276 16.355 6.695 16.355 Z",
    fill: "#ffffff",
    transition: {
      duration: 0.35,
    },
  },
}

const menuMiddlePath: Variants = {
  open: {
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
}

const menuPathBottom: Variants = {
  open: {
    d:
      "M 23.759 14.998 L 85.002 76.241 C 87.419 78.658 87.419 82.584 85.002 85.002 L 85.002 85.002 C 82.584 87.419 78.658 87.419 76.241 85.002 L 14.998 23.759 C 12.581 21.342 12.581 17.416 14.998 14.998 L 14.998 14.998 C 17.416 12.581 21.342 12.581 23.759 14.998 Z",
    fill: "#ffffff",
    transition: {
      duration: 0.35,
    },
  },
  closed: {
    d:
      "M 6.695 71.254 L 93.305 71.254 C 96.724 71.254 99.5 74.03 99.5 77.449 L 99.5 77.449 C 99.5 80.869 96.724 83.645 93.305 83.645 L 6.695 83.645 C 3.276 83.645 0.5 80.869 0.5 77.449 L 0.5 77.449 C 0.5 74.03 3.276 71.254 6.695 71.254 Z",
    fill: "#ffffff",
    transition: {
      duration: 0.35,
    },
  },
}
