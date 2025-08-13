import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

function MainLayout({ children }) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
