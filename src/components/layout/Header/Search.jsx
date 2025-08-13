import React from 'react'
import PropTypes from 'prop-types'
import { MdOutlineSearch } from "react-icons/md";

function Search() {
  return (
    <div className='flex-1 px-14'>
      <div className="my-4 relative bg-white rounded">
        <input type="text" className='px-4 py-2 w-full focus:outline-orange-400 focus:outline-1' placeholder='Tìm kiếm sản phẩm...' />
        <button type='button' className='absolute top-[50%] right-1 bg-yellow-500 px-6 py-1.5 rounded text-white transform -translate-y-1/2'>
          <MdOutlineSearch className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default Search
