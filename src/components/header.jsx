import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className='bg-primary py-4'>
    <div className='container'>
      <div className='md:px-4 lg:px-6 xl:px-20'>
        <h1>
          <Link to='/' className='text-white'>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `jon roberts: a developer`,
}

export default Header
