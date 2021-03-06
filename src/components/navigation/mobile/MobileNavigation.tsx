import { motion, Variants } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Icon } from "../../images/Icon"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { SocialMedia } from "../SocialMedia"
import { HamburgerMenu } from "./HamburgerMenu"

export interface MobileNavigationProps {
  menuItems: string[]
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  menuItems,
  isOpen,
  setIsOpen,
}) => {
  return (
    <NavigationContainer animate={isOpen ? "open" : "closed"}>
      <NavigationHalfContainer>
        <IconWrapper layoutId="icon">
          <Icon
            style={{ height: "75%", marginTop: "0.5rem", marginLeft: "1rem" }}
          />
        </IconWrapper>
      </NavigationHalfContainer>
      <NavigationHalfContainer right>
        <OverlayMenu menuItems={menuItems} />
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
    transform: "translateX(0vw)",
    transition: {
      ease: [0.51, 0, 0.34, 1],
      duration: 0.4,
    },
  },
  closed: {
    transform: "translateX(100vw)",
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

interface OverlayMenuProps {
  menuItems: string[]
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ menuItems }) => {
  return (
    <MenuContainer variants={menu} initial={{ transform: "translateX(100vw)" }}>
      <SocialMedia />
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
        {menuItems.map(i => (
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
  z-index: 9999;
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

const MenuContainer = styled(motion.div)`
  position: absolute;
  opacity: 1;
  background-color: #e89fc0;
  transform: translateX(100vw);
  width: 100vw;
  height: 100vh;
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
