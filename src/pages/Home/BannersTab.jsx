import React from 'react'
import { Link } from 'react-router-dom'

function BannersTab() {
  return (
    <div className='flex mt-5 gap-10'>
      <Link to="/" className="block flex-1 rounded-lg overflow-hidden">
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/categorybanner_1_img.jpg?v=1560" alt="" className='rounded-lg transform transition hover:scale-110'/> 
      </Link>
      <Link to="/" className="block flex-1 rounded-lg overflow-hidden">
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/categorybanner_2_img.jpg?v=1560" alt="" className='rounded-lg transform transition hover:scale-110'/>
      </Link>
      <Link to="/" className="block flex-1 rounded-lg overflow-hidden">
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/categorybanner_3_img.jpg?v=1560" alt="" className='rounded-lg transform transition hover:scale-110'/>
      </Link>
      <Link to="/" className="block flex-1 rounded-lg overflow-hidden">
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/categorybanner_4_img.jpg?v=1560" alt="" className='rounded-lg transform transition hover:scale-110'/>
      </Link>
    </div>
  )
}

BannersTab.propTypes = {}

export default BannersTab
