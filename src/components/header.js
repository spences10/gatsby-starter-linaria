import { Link } from 'gatsby'
import { styled } from 'linaria/react'
import PropTypes from 'prop-types'
import React from 'react'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    h1 {
      margin: 0;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
