import React from 'react'
import PropTypes from 'prop-types'
import BottomMenuCategories from './BottomMenuCategories'
import { GiAmericanShield } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRotaryPhone } from "react-icons/gi";

function BottomMenu() {
  return (
    <div className='bg-white'>
      <div className="container mx-auto py-3 relative flex">
        <BottomMenuCategories />

        <div className="flex gap-8 text-sm pl-[280px]">
          <div className='flex items-center gap-1'>
            <GiAmericanShield className='w-5 h-5' />
            <p>Chất lượng đảm bảo</p>
          </div>
          <div className='flex items-center gap-1'>
            <TbTruckDelivery className='w-5 h-5' />
            <p>Vận chuyển siêu tốc</p>
          </div>
          <div className='flex items-center gap-1'>
            <GiRotaryPhone className='w-5 h-5' />
            <p>Tư vấn Build PC: 0986552233</p>
          </div>
        </div>
      </div>
    </div>
  )
}

BottomMenu.propTypes = {}

export default BottomMenu
