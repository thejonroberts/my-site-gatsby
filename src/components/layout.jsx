import React from 'react'

import Header from './header'
import "../styles/layout.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div id="layout-container">
      <Header pageTitle={pageTitle} />
      <main className='container md:px-4 lg:px-6 xl:px-20 py-3'>
        {children}
      </main>
    </div>
  )
}

export default Layout
