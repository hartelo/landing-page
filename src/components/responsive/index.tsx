import React from "react"
import {
  MediaQueryAllQueryable,
  MediaQueryMatchers,
  useMediaQuery,
} from "react-responsive"
import {
  DEFAULT_LIMIT,
  DESKTOP_LIMIT,
  MOBILE_LIMIT,
  TABLET_LIMIT,
  TABLET_OR_MOBILE_LIMIT,
} from "../../theme"

interface MediaQueryProps {
  settings?: Partial<
    MediaQueryAllQueryable & {
      query?: string | undefined
    }
  >
  device?: MediaQueryMatchers | undefined
  callback?: ((matches: boolean) => void) | undefined
}

export const Desktop: React.FC<MediaQueryProps> = ({
  children,
  settings,
  device,
  callback,
}) => {
  const isDesktop = useMediaQuery(settings ?? DESKTOP_LIMIT, device, callback)
  return <>{isDesktop ? children : null}</>
}
export const Tablet: React.FC<MediaQueryProps> = ({
  children,
  settings,
  device,
  callback,
}) => {
  const isTablet = useMediaQuery(settings ?? TABLET_LIMIT, device, callback)
  return <>{isTablet ? children : null}</>
}

export const Mobile: React.FC<MediaQueryProps> = ({
  children,
  settings,
  device,
  callback,
}) => {
  const isMobile = useMediaQuery(settings ?? MOBILE_LIMIT, device, callback)
  return <>{isMobile ? children : null}</>
}

export const Default: React.FC<MediaQueryProps> = ({
  children,
  settings,
  device,
  callback,
}) => {
  const isNotMobile = useMediaQuery(settings ?? DEFAULT_LIMIT, device, callback)
  return <>{isNotMobile ? children : null}</>
}

/* Combined MediaQuerys */

export const TabletOrMobile: React.FC<MediaQueryProps> = ({
  children,
  settings,
  device,
  callback,
}) => {
  const isTabletOrMobile = useMediaQuery(
    settings ?? TABLET_OR_MOBILE_LIMIT,
    device,
    callback
  )
  return <>{isTabletOrMobile ? children : null}</>
}
