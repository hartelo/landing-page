import React from "react"
import { useStore } from "../../store/Store"
import { Desktop, TabletOrMobile } from "../responsive"
import { DesktopNavigation } from "./desktop/DesktopNavigation"
import { MobileNavigation } from "./mobile/MobileNavigation"

export interface NavigationProps {
  home: string
  hartelos: string
  aboutUs: string
  contactUs: string
}

export const Navigation: React.FC<NavigationProps> = ({
  home,
  hartelos,
  aboutUs,
  contactUs,
}) => {
  const { state, dispatch } = useStore()
  const menuItems = [home, hartelos, aboutUs, contactUs].map(
    replaceSpaceWithNonBreakingSpace
  )

  return (
    <>
      <Desktop>
        <DesktopNavigation menuItems={menuItems} />
      </Desktop>
      <TabletOrMobile>
        <MobileNavigation
          menuItems={menuItems}
          isOpen={state.menuOpen}
          setIsOpen={() =>
            dispatch({
              type: "setMenuOpen",
              payload: { open: !state.menuOpen },
            })
          }
        />
      </TabletOrMobile>
    </>
  )
}

const replaceSpaceWithNonBreakingSpace = (str: string) =>
  str.replace(/\s+/gi, "\u00a0")
