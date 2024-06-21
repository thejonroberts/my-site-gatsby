import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Jon Roberts: Software Developer in Nashville, TN' />

    <p>
      I am a software developer.
      <br />I live in Nashville.
      <br />I trained at
      {` `}
      <a href='http://nashvillesoftwareschool.com'>Nashville Software School</a>.
      <br />I work at <a href='https://www.beachyapp.com'>Beachy</a>.
      <br />I use Ruby and Javascript.
      <br />
      In my spare time, I enjoy live music, following politics, biking, camping, motorcycling, and
      hanging with my pets.
    </p>

    <p>
      I hope to have a blog up here before long... In the meantime, you can reach me via:
      <br />
      <a className='pr-1' href='mailto:jon.roberts.8@gmail.com'>
        Email
      </a>
      {` `}
      <a className='px-1' href='https://github.com/thejonroberts'>
        GitHub
      </a>
      {` `}
      <a className='px-1' href='https://www.linkedin.com/in/jon-roberts'>
        LinkedIn
      </a>
    </p>
  </Layout>
)

export default IndexPage
