import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Navbar = ({children}) => {
  const navigate = useNavigate();
  const [ showMenu, setShowMenu ]= useState(false);
  const [ token, setToken ]= useState(true);
  return (
    <div className="flex justify-between items-center py-4 mb-5 border-b border-b-gray-400">
      <div>
        <img onClick={()=>navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
      </div>
      <NavLinks />
      {token ? <div className="flex gap-2 items-center cursor-pointer group relative">
        <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
        <img className="w-2.5" src={assets.dropdown_icon} alt="" />
        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
          <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
            <p onClick={()=>navigate("/My-profile")} className="hover:text-black cursor-pointer">My Profile</p>
            <p onClick={()=>navigate("/My-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
            <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
          </div>
        </div>
      </div> : <Button children={"Create Button"} />}
    </div>
  );
};

export default Navbar;
