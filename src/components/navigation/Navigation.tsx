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
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(DESKTOP_LIMIT)
  const isTabletOrMobile = useMediaQuery(TABLET_OR_MOBILE_LIMIT)

  return (
    <>
      <Desktop>
        <DesktopNavigation />
      </Desktop>
      <TabletOrMobile>
        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </TabletOrMobile>
    </>
  )
}
