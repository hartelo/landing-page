import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Variants } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useStore } from "../../store/Store"
import { MotionSection } from "../common/Section"
import { BeansBackground } from "../images/BeansBackground"

const PAGE_VIEW_TIME = 5000

export const PostHero: React.FC = () => {
  const [color, setColor] = useState(0)
  const { dispatch } = useStore()

  useEffect(() => {
    const id = setInterval(() => setColor(c => (c + 1) % 3), PAGE_VIEW_TIME)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    dispatch({
      type: "setBackgroundColor",
      payload: { color: variantKeys[color] },
    })
  }, [color])

  return (
    <MotionSection
      variants={variants}
      initial="pink"
      animate={variantKeys[color]}
      style={{ overflow: "hidden" }}
    >
      <BeansBackground variants={backgroundVariants} />
    </MotionSection>
  )
}

const variantKeys = ["pink", "green", "white"] as const

const variants: Variants = {
  pink: { backgroundColor: "#f2cdde", transition: { delay: 0.1 } },
  green: { backgroundColor: "#52926c", transition: { delay: 0.1 } },
  white: { backgroundColor: "#ffffff", transition: { delay: 0.1 } },
}

const backgroundVariants: Variants = {
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
