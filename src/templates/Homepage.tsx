import { graphql } from "gatsby"
import * as React from "react"
import SEO from "../components/common/SEO"

const Homepage: React.SFC<{ data: any }> = ({ data }) => {
  return (
    <>
      <SEO
        lang={data.prismic.allHomepages.edges[0].node._meta.lang}
        title={"Homepage"}
      />
      <div
        style={{
          backgroundColor:
            data.prismic.allHomepages.edges[0].node.body[0].primary.color,
        }}
      >
        <p>Language is {data.prismic.allHomepages.edges[0].node._meta.lang}</p>
      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery($lang: String) {
    prismic {
      allHomepages(lang: $lang) {
        edges {
          node {
            _linkType
            _meta {
              lang
            }
            body {
              ... on PRISMIC_HomepageBodyFlavor {
                label
                primary {
                  color
                  description
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Homepage
