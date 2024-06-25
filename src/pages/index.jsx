import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <p className="py-2">
        I am a software developer.
        <br />I live in Bloomington, IN.
        <br />I trained at
        {` `}
        <a className="text-accent" href='http://nashvillesoftwareschool.com'>Nashville Software School</a>.
        <br />I worked at <a className="text-accent" href='https://www.beachyapp.com'>Beachy</a>.
        <br />I use Ruby and Javascript.
        <br />
        In my spare time, I enjoy live music, following politics, biking, camping, motorcycling, and
        hanging with my pets.
      </p>

      <p className="py-2">
        I hope to have a blog up here before long... In the meantime, you can reach me via:
        <br />
        <a className='text-accent pr-1' href='mailto:jon.roberts.8@gmail.com'>
          Email
        </a>
        {` `}
        <a className='text-accent px-1' href='https://github.com/thejonroberts'>
          GitHub
        </a>
        {` `}
        <a className='text-accent px-1' href='https://www.linkedin.com/in/jon-roberts'>
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo />
