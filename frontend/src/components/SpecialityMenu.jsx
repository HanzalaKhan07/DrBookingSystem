import React from 'react'
import {specialityData } from '../assets/assets_frontend/assets'

const SpecialityMenu = () => {
  return (
    <div>
      <h2>Find by Speciality</h2>
      <p>Simply browse through extensive list of trusted doctors, shedule your appointment hassle-free</p>
      <div>
        <img src={specialityData.py} alt="" />
      </div>
    </div>
  )
}

export default SpecialityMenu
