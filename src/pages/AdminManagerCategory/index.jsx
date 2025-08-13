import React from 'react'
import PropTypes from 'prop-types'
import AdminLayout from '@/components/layout/AdminLayout'
import Categories from './Categories'
import { AddCategory } from './AddCategory'

function AdminManagerCategory(props) {
  return (
    <AdminLayout>
      <div className='mb-4 flex justify-end'>
        <AddCategory />
      </div>
      <Categories />
    </AdminLayout>
  )
}

AdminManagerCategory.propTypes = {}

export default AdminManagerCategory
