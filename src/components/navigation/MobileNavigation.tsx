import { motion, Variants } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import HamburgerMenuSVG from "../../assets/hamburger-menu.svg"
import IconSVG from "../../assets/icon.svg"
import { LanguageSwitcher } from "./LanguageSwitcher"

export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavigationContainer>
      <NavigationHalfContainer>
        <IconWrapper layoutId="icon">
          <Icon />
        </IconWrapper>
      </NavigationHalfContainer>
      <NavigationHalfContainer right>
        <Menu isOpen={isOpen} />
        <MenuAreaContainer>
          <MenuButtonContainer onClick={() => setIsOpen(o => !o)}>
            <HamburgerMenu />
          </MenuButtonContainer>
          <LanguageSwitcherContainer>
            <LanguageSwitcher />
          </LanguageSwitcherContainer>
        </MenuAreaContainer>
      </NavigationHalfContainer>
    </NavigationContainer>
  )
}

const menu: Variants = {
  open: {
    position: "absolute",
    opacity: 1,
    backgroundColor: "#52926C",
    width: "100vw",
    height: "100vh",
  },
  closed: {
    position: "absolute",
    opacity: 1,
    backgroundColor: "#52926C",
    width: 0,
    height: "100vh",
    top: 0,
  },
}

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={menu}
      transition={{ ease: [0.51, 0, 0.34, 1], duration: 0.4 }}
      initial={false}
    ></motion.div>
  )
}

const NavigationContainer = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4rem;
`

const NavigationHalfContainer = styled.div`
  display: flex;
  justify-content: ${(props: { right?: boolean }) =>
    props.right ? "flex-end" : "flex-start"};
  align-items: center;

  width: 100%;
  height: 100%;
`

const MenuAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`

const MenuButtonContainer = styled.div``

const LanguageSwitcherContainer = styled.div`
  height: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    width: 100%;
  }
`
const IconWrapper = styled(motion.div)`
  height: 100%;
`
const Icon = styled(IconSVG)`
  margin-top: 0.5rem;
  margin-left: 1rem;
  height: 75%;
`

const HamburgerMenu = styled(HamburgerMenuSVG)`
  height: 2.1rem;
`
