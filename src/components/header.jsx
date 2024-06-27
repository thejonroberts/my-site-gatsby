import { Link } from 'gatsby'
import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = ({ pageTitle }) => {
  const { title: defaultTitle } = useSiteMetadata()

  return (
    <header className='bg-primary py-4'>
      <div className='container md:px-4 lg:px-6 xl:px-20'>
        <h1 className='text-3xl font-bold'>
          <Link to='/' className='text-white'>
            {pageTitle || defaultTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
