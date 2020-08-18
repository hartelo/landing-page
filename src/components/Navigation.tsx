import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { LanguageSwitcher } from "./language/LanguageSwitcher"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavigationContainer>
      <NavigationHalfContainer>
        <p>ICON</p>
      </NavigationHalfContainer>
      <NavigationHalfContainer right>
        <MenuAreaContainer>
          <MenuButtonContainer>
            <div
              style={{
                backgroundColor: "black",
                height: 40,
                width: 40,
              }}
            ></div>
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
`

const MenuButtonContainer = styled.div`
  padding: 10px;
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
