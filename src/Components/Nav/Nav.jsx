import React, { useRef } from 'react'
import './../Nav/Nav.css'

const Nav = () => {
  const Menu = useRef();
  const Menuhandler = () => {
    Menu.current.classList.toggle("showNav");
  }
  return (
    <div className={"Nav_wrapper"}>
        <div className={'logo'}>
            <a href='#'>Home4u</a>
        </div>
        <ul ref={Menu}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#advantage'>Advantage</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#location'>Location</a></li>
            <li><a href='#newlisting'>New Listing</a></li>
            <li><a href='#agents'>Agents</a></li>
            <li><a href='#estimate'>Estimate</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className={"nav_btns"}>
            <button>Login</button>
            <button>Add Listing</button>
            <i className='ri-menu-2-line' id='bars' onClick={Menuhandler}></i>
        </div>
    </div>
  )
}

export default Nav;