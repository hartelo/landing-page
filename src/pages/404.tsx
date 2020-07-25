import React, { useEffect } from "react"
import SEO from "../components/common/SEO"
import { PageLayout } from "../components/PageLayout"
import { languageItemKey } from "../hooks"

const NotFoundPage = () => {
  useEffect(() => {
    localStorage.removeItem(languageItemKey)
  }, [])

  return (
    <PageLayout>
      <SEO title="404: Not found" lang="en" />
      <h1>NOT FOUND</h1>
      <p>This page does not exists.</p>
      <a href="/">Back to the home page</a>
    </PageLayout>
  )
}

export default NotFoundPage
