import { graphql, useStaticQuery } from 'gatsby'
import { styled } from 'linaria/react'
import PropTypes from 'prop-types'
import React from 'react'
import { globals } from '../theme/globals'
import Header from './header'

const StyledLayout = styled.main`
  .layout-wrapper {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout className={globals}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout-wrapper">
        <>{children}</>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
