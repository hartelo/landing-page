import * as React from "react"

import SEO from "../components/common/SEO"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" lang="en" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage