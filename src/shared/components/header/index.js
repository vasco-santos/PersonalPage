import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './index.module.css'

const pageTitle = (pathname) => {
  const baseName = '/ vasco-santos'

  if (pathname === '/' || !pathname) {
    return baseName
  }

  return `${baseName} ${pathname}`
}

const Header = ({ location }) => (
  <div className={ styles.header }>
    <div className={ styles.left }>
      { /* MENU */ }
    </div>
    <div className={ styles.right }>
      <h2>
        <Link to="/" className={ styles.link }>
          { pageTitle(location.pathname) }
        </Link>
      </h2>
    </div>
  </div>
)

Header.propTypes = {
  location: PropTypes.object
}

export default Header
