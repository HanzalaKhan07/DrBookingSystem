import React from "react";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();
  return (
    <div className="items-center gap-4">
    <button onClick={()=>navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
      Create account
    </button>
    </div>
  );
};
export default Button;
