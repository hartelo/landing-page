import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
// @ts-ignore
import { DESKTOP_LIMIT, TABLET_LIMIT } from "../responsive"

export const HeroHandOne = () => {
  const data = useStaticQuery(graphql`
    query {
      heroHand: file(relativePath: { eq: "hand-1.png" }) {
        childImageSharp {
          fluid(sizes: "(max-width: 1700px) calc(100vw - 40px), 1700px") {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <HeroHand fluid={data.heroHand.childImageSharp.fluid} />
}

const HeroHand = styled(Img)`
  width: 50vw;
`
