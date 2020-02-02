import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Jon Roberts: a Software Developer' />

    <p>
      I am a software developer.
      <br />I live in Nashville.
      <br />I trained at
      {` `}
      <a href='http://nashvillesoftwareschool.com'>Nashville Software School</a>.
      <br />I work at <a href='https://www.beachyapp.com'>Beachy</a>.
      <br />I use Ruby and Javascript.
    </p>

    <p>
      In my spare time, I enjoy live music, following politics, biking, camping, motorcycling, and
      hanging with my pets.
    </p>

    <p>
      I hope to have a blog up here before long... In the meantime, you can find me via:
      <br />
      <a href='mailto:jon.roberts.8@gmail.com'>Email</a>
      {` `}
      <a href='https://github.com/thejonroberts'>GitHub</a>
      {` `}
      <a href='https://twitter.com/the_jon_roberts'>Twitter</a>
      {` `}
      <a href='https://www.linkedin.com/in/jon-roberts'>LinkedIn</a>
    </p>

  </Layout>
)

export default IndexPage
