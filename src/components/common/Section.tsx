import { motion } from "framer-motion"
import styled from "styled-components"
import { TABLET_LIMIT } from "../responsive"

const align = ({
  verticalCenter,
  horizontalCenter,
}: {
  verticalCenter?: boolean
  horizontalCenter?: boolean
}) =>
  verticalCenter || horizontalCenter
    ? `display: flex;
    flex-direction: column;
    justify-content: ${verticalCenter ? "center" : "flex-start"};
    align-items: ${horizontalCenter ? "center" : "flex-start"};`
    : ""

export const Section = styled.section`
  height: 100vh;
  ${align}
`

export const PaddedSection = styled(Section)`
  @media only screen and (min-width: ${TABLET_LIMIT.minWidth}px) {
    padding: 0 10rem 3rem 10rem;
  }
`

export const MotionSection = motion.custom(Section)
