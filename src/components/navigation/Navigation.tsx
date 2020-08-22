import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import {
  Desktop,
  DESKTOP_LIMIT,
  TabletOrMobile,
  TABLET_OR_MOBILE_LIMIT,
} from "../responsive"
import { DesktopNavigation } from "./DesktopNavigation"
import { MobileNavigation } from "./MobileNavigation"

export const Navigation = () => {
  // Get these from prismic
  const MENU_ITEMS = [
    "Home",
    "Härtelö's",
    `Our${"\u00a0"}Story`,
    `Contact${"\u00a0"}us`,
  ]

  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(DESKTOP_LIMIT)
  const isTabletOrMobile = useMediaQuery(TABLET_OR_MOBILE_LIMIT)

  return (
    <>
      <Desktop>
        <DesktopNavigation menuItems={MENU_ITEMS} />
      </Desktop>
      <TabletOrMobile>
        <MobileNavigation
          menuItems={MENU_ITEMS}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </TabletOrMobile>
    </>
  )
}
