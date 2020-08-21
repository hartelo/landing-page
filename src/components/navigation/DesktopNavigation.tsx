import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import IconSVG from "../../assets/icon.svg"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { SocialMedia } from "./SocialMedia"

export interface DesktopNavigationProps {
  menuItems: string[]
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  menuItems,
}) => (
  <NavigationContainer>
    <NavigationHalfContainer>
      <motion.div layoutId="icon">
        <Icon />
      </motion.div>
      <LanguageSwitcherContainer>
        <LanguageSwitcher isDesktop={true} />
      </LanguageSwitcherContainer>
      <Square />
      <Square />
    </NavigationHalfContainer>
    <NavigationHalfContainer down>
      <SocialMedia isDesktop={true} />
    </NavigationHalfContainer>
  </NavigationContainer>
)

const NavigationContainer = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 100vh;
`

const NavigationHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: ${(props: { down?: boolean }) =>
    props.down ? "flex-end" : "flex-start"};

  background-color: #efefefef;

  width: 100%;
  height: 100%;
`

const Icon = styled(IconSVG)`
  margin-top: 0.5rem;
  width: 100%;
`

const LanguageSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const Square = styled.div`
  align-self: center;
  background-color: black;
  width: 50px;
  height: 50px;
  margin: 5px 0; /* REMOVE */
`
