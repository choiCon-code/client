import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='px-10'>
      <Link to="/">
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/logo.png?v=1558" alt="" />
      </Link>
    </div>
  )
}

Logo.propTypes = {}

export default Logo
