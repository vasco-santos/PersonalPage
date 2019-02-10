import React from 'react'

import Layout from '../layouts'
import About from './about'

const AboutPage = ({ location }) => {  
  return (
    <Layout location={ location }>
      <About />
    </Layout>
  )
}

export default AboutPage
