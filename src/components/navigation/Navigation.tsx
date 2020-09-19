import React, { useState } from "react"
import { Desktop, TabletOrMobile } from "../responsive"
import { DesktopNavigation } from "./DesktopNavigation"
import { MobileNavigation } from "./MobileNavigation"

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
  const menuItems = [home, hartelos, aboutUs, contactUs].map(
    replaceSpaceWithNonBreakingSpace
  )

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Desktop>
        <DesktopNavigation menuItems={menuItems} />
      </Desktop>
      <TabletOrMobile>
        <MobileNavigation
          menuItems={menuItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </TabletOrMobile>
    </>
  )
}

const replaceSpaceWithNonBreakingSpace = (str: string) =>
  str.replace(/\s+/gi, "\u00a0")
