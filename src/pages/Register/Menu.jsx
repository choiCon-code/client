import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div className='flex items-center justify-center gap-10'>
      <Link to="/login" className="font-medium text-2xl text-gray-400">Đăng nhập</Link>
      <div className='w-[2px] h-[25px] bg-gray-500' />
      <Link to="/register" className="font-medium text-2xl">Đăng ký</Link>
    </div>
  )
}

Menu.propTypes = {}

export default Menu
