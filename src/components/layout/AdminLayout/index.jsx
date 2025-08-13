// high order component

import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

function AdminLayout({ children }) {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-10">
        <Menu />

        <div className='bg-white flex-1 p-4 border'>
          {children}
        </div>
      </div>
    </div>
  )
}

AdminLayout.propTypes = {}

export default AdminLayout
