import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <p className="py-2">
        I am a software developer.
        <br />I live in Bloomington, IN.
        <br />I trained at <a href='http://nashvillesoftwareschool.com'>Nashville Software School</a>.
        <br />I worked at <a href='https://www.beachyapp.com'>Beachy</a>.
        <br />I primarily use Ruby and Javascript.
        <br />Other than coding, I enjoy live music, biking, camping, and hanging with my pets.
      </p>

      <p className="py-2">
        I hope to have a blog up here before long... In the meantime, you can reach me via:
        <br />
        <a className='pr-1' href='mailto:jon.roberts.8@gmail.com'>Email</a>
        {` `}
        <a className='px-1' href='https://github.com/thejonroberts'>GitHub</a>
        {` `}
        <a className='px-1' href='https://www.linkedin.com/in/jon-roberts'>LinkedIn</a>
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo />
