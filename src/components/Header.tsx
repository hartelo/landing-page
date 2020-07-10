import { Link } from "gatsby"
import * as React from "react"

export interface HeaderProps {
  siteTitle: string
}

export const Header: React.SFC<HeaderProps> = ({ siteTitle = "" }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)
