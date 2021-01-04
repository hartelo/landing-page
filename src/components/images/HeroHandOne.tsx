import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

export const HeroHandOne = () => {
  const data = useStaticQuery(graphql`
    query {
      heroHand: file(relativePath: { eq: "hand-1.png" }) {
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
  width: 50vw;

  @media only screen and (orientation: landscape),
    screen and (min-width: ${props => props.theme.breakpoints.desktop}px) {
    width: 50vh;
  }
`
