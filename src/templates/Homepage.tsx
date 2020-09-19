import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import React from "react"
import SEO from "../components/common/SEO"
import { PageLayout } from "../components/PageLayout"

const Homepage: React.FC<{ data: Data }> = ({ data }) => {
  const lang = data.prismic.allHomepages.edges[0].node._meta.lang
  const {
    color,
    description,
    name,
  } = data.prismic.allHomepages.edges[0].node.body[0].primary
  const {
    home,
    hartelos,
    aboutus: aboutUs,
    contact_us: contactUs,
  } = data.prismic.allMenus.edges[0].node
  const menuItems = { home, hartelos, aboutUs, contactUs }
  return (
    <PageLayout menuItems={menuItems}>
      <SEO
        lang={data.prismic.allHomepages.edges[0].node._meta.lang}
        title={"Homepage"}
      />
      <section className="section1">
        <p>Language is {lang}</p>
        <RichText render={name} />
        <RichText render={description} />
      </section>
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
      allMenus(lang: $lang) {
        edges {
          cursor
          node {
            home
            hartelos
            aboutus
            contact_us
          }
        }
      }
    }
  }
`

export interface Meta {
  lang: string
}

export interface Span {
  start: number
  end: number
  type: string
}

export interface Dimensions {
  width: number
  height: number
}

export interface Description {
  type: string
  text: string
  spans: Span[]
  url: string
  alt: string
  copyright?: any
  dimensions: Dimensions
}

export interface Name {
  type: string
  text: string
  spans: any[]
}

export interface Primary {
  color: string
  description: Description[]
  name: Name[]
}

export interface Body {
  label?: any
  primary: Primary
}

export interface Node {
  _linkType: string
  _meta: Meta
  body: Body[]
}

export interface Edge {
  node: Node
}

export interface AllHomepages {
  edges: Edge[]
}

export interface Node2 {
  home: string
  hartelos: string
  contact_us: string
  aboutus: string
}

export interface Edge2 {
  cursor: string
  node: Node2
}

export interface AllMenus {
  edges: Edge2[]
}

export interface Prismic {
  allHomepages: AllHomepages
  allMenus: AllMenus
}

export interface Data {
  prismic: Prismic
}

export interface RootObject {
  data: Data
}

export default Homepage
