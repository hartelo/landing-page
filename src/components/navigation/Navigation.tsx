import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import HamburgerMenuSVG from "../../assets/hamburger-menu.svg"
import IconSVG from "../../assets/icon.svg"
import { LanguageSwitcher } from "./LanguageSwitcher"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavigationContainer>
      <NavigationHalfContainer>
        <Icon />
      </NavigationHalfContainer>
      <NavigationHalfContainer right>
        <MenuAreaContainer>
          <MenuButtonContainer>
            <HamburgerMenu />
            {/* <div
              style={{
                backgroundColor: "black",
                height: 40,
                width: 40,
              }}
            ></div> */}
          </MenuButtonContainer>
          <LanguageSwitcherContainer>
            <LanguageSwitcher />
          </LanguageSwitcherContainer>
        </MenuAreaContainer>
      </NavigationHalfContainer>
    </NavigationContainer>
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

const Icon = styled(IconSVG)`
  margin-top: 0.5rem;
  margin-left: 1rem;
  height: 75%;
`

const HamburgerMenu = styled(HamburgerMenuSVG)`
  height: 2.1rem;
`
