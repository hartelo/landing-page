import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import React from "react"
import SEO from "../components/common/SEO"
import { PageLayout } from "../components/PageLayout"

const Homepage: React.SFC<{ data: Data }> = ({ data }) => {
  const lang = data.prismic.allHomepages.edges[0].node._meta.lang
  const {
    color,
    description,
    name,
  } = data.prismic.allHomepages.edges[0].node.body[0].primary
  return (
    <PageLayout>
      <SEO
        lang={data.prismic.allHomepages.edges[0].node._meta.lang}
        title={"Homepage"}
      />
      <div
        style={{
          backgroundColor: color,
        }}
      >
        <p>Language is {lang}</p>
        <RichText render={name} />
        <RichText render={description} />
      </div>
    </PageLayout>
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

export interface Data {
  prismic: Prismic
}

export interface Prismic {
  allHomepages: AllHomepages
}

export interface AllHomepages {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  _linkType: string
  _meta: Meta
  body: Body[]
}

export interface Meta {
  lang: string
}

export interface Body {
  label: null
  primary: Primary
}

export interface Primary {
  color: string
  description: Description[]
  name: Description[]
}

export interface Description {
  type: string
  text: string
  spans: any[]
}

export default Homepage
