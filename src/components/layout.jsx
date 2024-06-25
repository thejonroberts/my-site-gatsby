import React from 'react'

import Header from './header'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className='container'>
        <div className='md:px-4 lg:px-6 xl:px-20'>
          <main className='py-3'>{children}</main>
        </div>
      </div>
      <footer className='text-xs'>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
