import { AnimatePresence, motion, Variants } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { useStore } from "../../../store/Store"
import { Icon } from "../../images/Icon"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { SocialMedia } from "../SocialMedia"

export interface DesktopNavigationProps {
  menuItems: string[]
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  menuItems,
}) => (
  <NavigationContainer>
    <NavigationHalfContainer>
      <Icon style={{ marginTop: "0.5rem", width: "4rem" }} />
      <LanguageSwitcherContainer>
        <LanguageSwitcher isDesktop={true} />
      </LanguageSwitcherContainer>
      <ProgressMenu menuItems={menuItems} />
    </NavigationHalfContainer>
    <NavigationHalfContainer down>
      <SocialMedia isDesktop={true} />
    </NavigationHalfContainer>
  </NavigationContainer>
)

interface ProgressMenuProps {
  menuItems: string[]
}

const ProgressMenu: React.FC<ProgressMenuProps> = ({ menuItems }) => {
  const itemToId = (item: string) => `D-${item}`
  const { state } = useStore()

  const [selected, setSelected] = useState(itemToId(menuItems[0]))
  return (
    <ProgressMenuContainer>
      {menuItems.map(item => {
        const id = itemToId(item)
        const isSelected = id === selected
        const animate = !isSelected
          ? state.backgroundColor
          : state.backgroundColor !== "green"
          ? "white"
          : state.backgroundColor
        return (
          <MenuItemContainer key={id} onClick={() => setSelected(id)}>
            <AnimatePresence>
              {id === selected && (
                <MenuItemSelectionContainer
                  initial={{ y: "-0.5rem" }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.15, delay: 0.15 },
                  }}
                  exit={{
                    y: "-0.5rem",
                    transition: { duration: 0.15 },
                  }}
                >
                  <MenuItemSelection
                    animate={state.backgroundColor}
                    variants={menuItemSelectionVariants}
                  />
                </MenuItemSelectionContainer>
              )}
            </AnimatePresence>
            <MenuItem
              animate={animate}
              variants={menuItemVariants}
              isSelected={isSelected}
            >
              {item}
            </MenuItem>
          </MenuItemContainer>
        )
      })}
    </ProgressMenuContainer>
  )
}

const NavigationContainer = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 100vh;
  z-index: 9999;
`

const NavigationHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: ${(props: { down?: boolean }) =>
    props.down ? "flex-end" : "flex-start"};

  width: 100%;
  height: ${(props: { down?: boolean }) => (props.down ? "auto" : "100%")};
`

const LanguageSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const ProgressMenuContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  transform: rotate(90deg);
  transform-origin: left;
  top: 8rem;
  left: 2.5rem;
`

const MenuItemContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  height: 5rem;
  margin-left: 1.5rem;
  transform: rotate(-180deg);
  cursor: pointer;
`

const MenuItem = styled(motion.a)`
  font-family: Rubik;
  font-weight: bold;
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? `#52926c` : `#ffffff`};
`

const MenuItemSelection = styled(motion.div)`
  width: 100%;
  height: 1rem;
  background-color: #52926c;
  border-radius: 99rem;
`

const MenuItemSelectionContainer = styled(motion.div)`
  width: 100%;
  height: 1rem;
  position: absolute;
  top: -0.5rem;
`

const menuItemSelectionVariants: Variants = {
  white: {
    backgroundColor: "#52926c",
  },
  green: {
    backgroundColor: "white",
  },
}

const menuItemVariants: Variants = {
  white: {
    color: "#52926c",
  },
  green: {
    color: "white",
  },
  pink: {
    color: "white",
  },
}
