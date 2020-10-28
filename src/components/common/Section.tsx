import { motion } from "framer-motion"
import styled from "styled-components"

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`

export const MotionSection = motion.custom(Section)
