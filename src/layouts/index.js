import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'shared/styles/index.css'

import Header from '../shared/components/header'
import Footer from '../shared/components/Footer'

import styles from './index.module.css'

const Layout = ({ children, location }) => {
  console.log('layout')
  return (
    <div className={ styles.app }>
      <Helmet
        defaultTitle="Vasco Santos"
        meta={[
          { name: 'description', content: 'Vasco Santos website' },
          { name: 'msapplication-TileColor', content: '#000' },
          { name: 'theme-color', content: '#000' }
        ]}>
      </Helmet>
      <Header location={ location || {} } />
      <main className={ styles.children }>
        { children }
      </main>
      <Footer className={ styles.footer } />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
