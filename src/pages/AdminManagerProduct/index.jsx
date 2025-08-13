import React from 'react'
import PropTypes from 'prop-types'
import AdminLayout from '@/components/layout/AdminLayout'
import Products from './Products'
import { AddProduct } from './AddProduct'

function AdminManagerProduct(props) {
  return (
    <AdminLayout>
      <div className='mb-4 flex justify-end'>
        <AddProduct />
      </div>
      <Products />
      
      
    </AdminLayout>
  )
}

AdminManagerProduct.propTypes = {}

export default AdminManagerProduct
