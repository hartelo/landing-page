import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { DESKTOP_LIMIT } from "../responsive"

export const HeroHandThree = () => {
  const data = useStaticQuery(graphql`
    query {
      heroHand: file(relativePath: { eq: "hand-3.png" }) {
        childImageSharp {
          fluid(sizes: "(max-width: 1024px) 70vw, 50vw") {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <HeroHand fluid={data.heroHand.childImageSharp.fluid} />
}

const HeroHand = styled(Img)`
  width: 60vw;

  @media only screen and (orientation: landscape),
    screen and (min-width: ${DESKTOP_LIMIT.minWidth}px) {
    width: 60vh;
  }
`
