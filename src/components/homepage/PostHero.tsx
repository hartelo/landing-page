import { Variant } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { useStore } from "../../store/Store"
import { MotionSection } from "../common/Section"
import { BackgroundColorWithoutDefault, colors } from "../globalStyles"
import { BeansBackground } from "../images/BeansBackground"

const PAGE_VIEW_TIME = 5000

interface PostHeroProps {
  isSelected: boolean
}

export const PostHero: React.FC<PostHeroProps> = ({ isSelected }) => {
  const [color, setColor] = useState(0)
  const { state, dispatch } = useStore()
  const animationPause = useRef(false)

  useEffect(() => {
    if (isSelected) {
      const id = setInterval(
        () => !animationPause.current && setColor(c => (c + 1) % 3),
        PAGE_VIEW_TIME
      )
      return () => clearInterval(id)
    }

    return
  }, [isSelected])

  useEffect(() => {
    if (isSelected) {
      dispatch({
        type: "setBackgroundColor",
        payload: { color: variantKeys[color] },
      })
    }
  }, [color, isSelected])

  useEffect(() => {
    animationPause.current = state.menuOpen
  }, [state.menuOpen])

  return (
    <MotionSection
      variants={variants}
      initial="pink"
      animate={variantKeys[color]}
      style={{ overflow: "hidden", backgroundColor: "red" }}
    >
      <BeansBackground variants={backgroundVariants} />
    </MotionSection>
  )
}

const variantKeys: readonly BackgroundColorWithoutDefault[] = [
  "pink",
  "green",
  "white",
]

const variants: BackgroundColorVariants = {
  pink: { backgroundColor: colors.pink, transition: { delay: 0.1 } },
  green: { backgroundColor: colors.green, transition: { delay: 0.1 } },
  white: { backgroundColor: colors.white, transition: { delay: 0.1 } },
}

const backgroundVariants: BackgroundColorVariants = {
  pink: {
    scale: 1,
    opacity: 1,
    transition: { ease: [0.23, 0.47, 0.42, 0.91], delay: 0.1 },
  },
  green: {
    scale: 1.5,
    opacity: 1,
    transition: { ease: [0.51, 0.01, 0.55, 1] },
  },
  white: {
    scale: 0.8,
    opacity: 0,
    transition: { ease: [0.51, 0.01, 0.55, 1] },
  },
}

type BackgroundColorVariants = { [c in BackgroundColorWithoutDefault]: Variant }
