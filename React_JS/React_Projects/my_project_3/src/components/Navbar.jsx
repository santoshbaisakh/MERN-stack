import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto py-4 flex justify-between items-center'>
        <div className='flex justify-between items-center gap-2'>
            <i className='px-4 py-2 bg-[#458FF6] rounded-full font-bold text-white'>T</i>
            <h1 className='text-2xl font-bold'>Trafalger</h1>
        </div>
      <div className='flex justify-center gap-6 list-none'>
        <li className='text-black text text-lg font-semibold'>Home</li>
        <li className='text-black text text-lg font-normal'>Find a doctor</li>
        <li className='text-black text text-lg font-normal'>Apps</li>
        <li className='text-black text text-lg font-normal'>Testimonials</li>
        <li className='text-black text text-lg font-normal'>About us</li>
      </div>
    </div>
  )
}

export default Navbar
