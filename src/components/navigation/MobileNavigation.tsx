import { motion, Variants } from "framer-motion"
import React from "react"
import styled from "styled-components"
import IconSVG from "../../assets/icon.svg"
import { HamburgerMenu } from "./HamburgerMenu"
import { LanguageSwitcher } from "./LanguageSwitcher"

export interface MobileNavigationProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <NavigationContainer animate={isOpen ? "open" : "closed"}>
      <NavigationHalfContainer>
        <IconWrapper layoutId="icon">
          <Icon />
        </IconWrapper>
      </NavigationHalfContainer>
      <NavigationHalfContainer right>
        <OverlayMenu />
        <MenuAreaContainer>
          <HamburgerMenu handleClick={() => setIsOpen(o => !o)} />
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
    backgroundColor: "#E89FC0",
    width: "100vw",
    height: "100vh",
    transition: {
      ease: [0.51, 0, 0.34, 1],
      duration: 0.4,
    },
  },
  closed: {
    position: "absolute",
    opacity: 1,
    backgroundColor: "#E89FC0",
    width: 0,
    height: "100vh",
    top: 0,
    transition: {
      ease: [0.51, 0, 0.34, 1],
      duration: 0.4,
      delay: 0.35,
    },
  },
}

const menuItem: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}

const OverlayMenu: React.FC = () => {
  return (
    <MenuContainer variants={menu}>
      <MenuItemContainer
        variants={{
          open: {
            transition: { staggerChildren: 0.05, delayChildren: 0.3 },
          },
          closed: {
            transition: { staggerChildren: 0.035, staggerDirection: -1 },
          },
        }}
      >
        {["Home", "Härtelö's", "Our Story", "Contact us"].map(i => (
          <MenuItem key={i} variants={menuItem}>
            {i}
          </MenuItem>
        ))}
      </MenuItemContainer>
    </MenuContainer>
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
  z-index: 100;
`

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

const MenuContainer = styled(motion.div)`
  position: "absolute";
  opacity: 1;
  background-color: "#E89FC0";
  width: 0;
  height: "100vh";
  top: 0;
  z-index: 99;
`

const MenuItemContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled(motion.li)`
  opacity: 0;
  margin: 1rem 0;

  font-size: 2rem;
  font-family: Shandon Slab;
  color: #ffffff;
`
