import React from 'react'
import PropTypes from 'prop-types'

function Banners() {
  return (
    <div className="w-[300px] flex flex-col gap-4">
      <div>
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/banner_top_1_img_large.jpg?v=1560" alt="" className="rounded-lg" />
      </div>
      <div>
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/banner_top_2_img_large.jpg?v=1560" alt="" className="rounded-lg" />
      </div>
      <div>
        <img src="https://theme.hstatic.net/1000288298/1001020793/14/banner_top_3_img_large.jpg?v=1560" alt="" className="rounded-lg" />
      </div>
    </div>
  )
}

Banners.propTypes = {}

export default Banners
