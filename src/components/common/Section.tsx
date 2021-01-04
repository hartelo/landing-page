import { motion } from "framer-motion"
import styled from "styled-components"

const contentAlign = (props: { center?: boolean }) =>
  props.center
    ? `display: flex;
    flex-direction: column;
    justify-content: center;`
    : ""

export const Section = styled.section`
  height: 100vh;
  ${contentAlign}
`

export const MotionSection = motion.custom(Section)
