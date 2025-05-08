import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const {aToken, setAToken} = useContext(AdminContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login"); 
    aToken && setAToken(""); 
    aToken && localStorage.removeItem("aToken"); 
  };

  

  return (
    <div className='flex justify-between px-4 py-3 items-center border-b bg-white'>
      <div className='flex  items-center gap-2 text-xs'>
        <img className='w-32 cursor-pointer' src={assets.admin_logo} alt="logo" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-600'>{aToken ? "Admin":"Doctor"}</p>
      </div>
      <button onClick={handleLogout} className=" bg-primary text-white text-sm px-10 py-2 rounded-full">
      login
    </button>
    </div>
  )
}

export default Navbar
