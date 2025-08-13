import React from 'react'
import PropTypes from 'prop-types'
import TopBar from './TopBar'
import Logo from './Logo'
import Search from './Search'
import LoginBtn from './LoginBtn'
import Cart from './Cart'
import BottomMenu from './BottomMenu'
import { useUserStore } from '@/stores/useUser'
import UserMenu from './UserMenu'

function Header() {
  const { user } = useUserStore();

  return (
    <div>
      <TopBar />
      <div className="bg-gray-200">
        <div className="container mx-auto py-4">
          <div className="flex">
            <Logo />
            <Search />
            {user ? (
              <UserMenu />
            ) : (
              <LoginBtn />
            )}
            <Cart />
          </div>
        </div>  
      </div>

      <BottomMenu />
    </div>
  )
}

Header.propTypes = {}

export default Header
