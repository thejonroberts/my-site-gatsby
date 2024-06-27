import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>Sorry, that doesn&#39;t exist...</p>
    <a href='/'>Go to Homepage</a>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title='404: Not found - Jon Roberts' />
