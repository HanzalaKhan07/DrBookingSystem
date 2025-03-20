import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
     
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis nostrum et, aliquam rem odio sint quos ea beatae ipsam recusandae? Blanditiis dignissimos vitae sed, laudantium facere error deserunt doloribus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit quaerat sint ipsum totam quos, voluptatum voluptatibus sequi eveniet blanditiis ullam quibusdam! Nulla itaque inventore assumenda officiis quia natus deleniti?</p>
        <p className='text-gray-800'>Our Vision</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque asperiores exercitationem iure id magni minus vel quas porro deleniti aperiam, eos beatae odio sit harum animi quaerat veritatis culpa!</p>
      </div>
      </div>
      {/* -------------why choose us------------ */}
      <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' >
            <b>Efficiency:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience:</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, nesciunt.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personolization:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel.</p>
          </div>
        </div>
      </div>
  )
}

export default About
