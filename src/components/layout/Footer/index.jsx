import React from 'react'
import PropTypes from 'prop-types'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className='mt-[400px] border-t-2 border-amber-300'>
      <div className='container mx-auto'>
      <div className='flex justify-between mt-5 gap-4  text-center'>
        <div className='font-medium flex-1'>Về TTG
          <p className='font-light mt-2'>Trang thương mại chính thức của Dũng CT - Trực Tiếp Game. Luôn tìm kiếm những sản phẩm vì game thủ.</p>
          <img className='font-light mt-2'  src="https://theme.hstatic.net/1000288298/1001020793/14/footer_logobct_img.png?v=1560" alt="" />
          <div className='flex justify-center mt-4'>
            <FaFacebookF className='size-5 mr-5' />
            <FaTwitter className='size-5 mr-5' />
            <FiInstagram className='size-5 mr-5' />
            <FaGooglePlusG className='size-5 mr-5' />
            <IoLogoYoutube className='size-5 mr-5' />
          </div>
        </div>
      </div>
    </div>
    <div className='mt-5 border-t-2 border-amber-200'>
      <p className='text-center mt-5 font-light'>Copyright © 2025 Bản quyền của Công ty cổ phẩn Mocato Việt Nam - Trụ sở: 248 Phú Viên, Bồ Đề, Long Biên, Hà Nội. GPĐKKD: 0109787586 do Sở Kế Hoạch và Đầu Tư Hà Nội cấp ngày 22/10/2021</p>
      <div></div>
    </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
