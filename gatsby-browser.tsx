import { registerLinkResolver } from "gatsby-source-prismic-graphql"
import { linkResolver } from "./prismic-config"

registerLinkResolver(linkResolver)
