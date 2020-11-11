import { motion, useAnimation, Variant } from "framer-motion"
import React, { useEffect, useLayoutEffect, useState } from "react"
import styled from "styled-components"
import { useStore } from "../../store/Store"
import { MotionSection } from "../common/Section"
import { colors } from "../common/Styles"
import { BeansBackground } from "../images/BeansBackground"

const PAGE_VIEW_TIME = 4000

export const PostHero: React.FC = () => {
  const { dispatch } = useStore()
  const controls = useAnimation()
  const [color, setColor] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setColor(getNewColorIndex), PAGE_VIEW_TIME)
    return () => clearInterval(id)
  }, [])

  useLayoutEffect(() => {
    dispatch({
      type: "setBackgroundColor",
      payload: { color: variantKeys[color] },
    })
  }, [color])

  React.useEffect(() => {
    controls
      .start({
        x: "130vw",
        transition: {
          duration: 0.7,
          type: "tween",
          ease: "easeInOut",
        },
      })
      .then(() =>
        controls.set({
          x: 0,
          backgroundColor: colors[variantKeys[color]],
        })
      )
      .catch()
  }, [color])

  return (
    <MotionSection
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: colors[variantKeys[color]],
      }}
    >
      <AnimatedBackground
        style={{ backgroundColor: colors[variantKeys[color]] }}
        animate={controls}
      />
      <BeansBackground
        variants={backgroundVariants}
        variantKeys={variantKeys}
        color={color}
      />
    </MotionSection>
  )
}

function getNewColorIndex(index: number) {
  return (index + 1) % variantKeys.length
}

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 130vw;
  margin-left: -5rem;
`
const AnimatedBackground = motion.custom(Background)

const backgroundVariants: PostHeroVariants = {
  pink: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", mass: 0.8, delay: 0.2 },
  },
  green: {
    scale: 1.8,
    opacity: 1,
    transition: { type: "spring", mass: 0.8 },
  },
  white: {
    scale: 2.2,
    opacity: 0,
    transition: { type: "tween", duration: 0.5, delay: 0.1, ease: "easeOut" },
  },
}

const variantKeys = ["pink", "green", "white"] as const

export type BackgroundColorKeys = typeof variantKeys
export type BackgroundColor = typeof variantKeys[number]
export type PostHeroVariants = { [key in BackgroundColor]: Variant }
