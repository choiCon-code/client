import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from 'react-icons/fa6';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useUserStore } from '@/stores/useUser';

function UserMenu(props) {
  const { user, setUser } = useUserStore();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="my-4 flex cursor-pointer text-sm">
            <FaRegUser className="w-7 h-7 my-auto mx-2" />
            <span className="flex-col my-auto font-light">
              Tài khoản của
              <span className="flex">
                {user.lastName}
                <MdKeyboardArrowDown className="my-1 mx-1" />
              </span>
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 rounded-[5px]" align="start">
          {user.role === 1 && (
            <DropdownMenuItem>
              <Link to="/admin">Quản trị</Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Link to="/account">Tài khoản của tôi</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="#">Danh sách địa chỉ</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setUser(null)}>
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

UserMenu.propTypes = {}

export default UserMenu
