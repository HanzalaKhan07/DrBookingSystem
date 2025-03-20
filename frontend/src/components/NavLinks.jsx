import React from 'react'
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div>
      <ul className='hidden md:flex div font-medium gap-5 items-start'>
        <NavLink to="/">
        <li className=' py-1'>HOME</li>
        <hr className='div-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/Doctors">
        <li className='div py-1'>All DOCTORS</li>
        <hr className='div-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="About">
        <li className='div py-1'>ABOUT</li>
        <hr className='div-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="contact">
        <li className='div py-1'>CONTACT</li>
        <hr className='div-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
    </div>
  )
}

export default NavLinks
