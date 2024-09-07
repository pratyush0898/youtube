import React from 'react'
import Logo from '../../../public/text-logo.svg'
import User from '../../../public/user-logo.jpg';
import Searchicon from '../../../public/search-icon.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav-container'>
        <div className="nav-logo-wapper">
            <img id='nav-logo-img' src={Logo} alt="" />
        </div>
        <div className="nav-search-container">
            <div className="nav-search-text-container">
                <div className="nav-search-text-input-wapper">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="nav-search-text-icon-wapper">
                    <img id='nav-search-text-icon-img' src={Searchicon} alt="" />
                </div>
            </div>
        </div>
        <div className="nav-user-logo-wapper">
            <img id='nav-user-logo-img' src={User} alt="" />
        </div>
    </nav>
  )
}

export default NavBar
