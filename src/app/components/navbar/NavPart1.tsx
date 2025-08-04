import React from 'react'

const NavPart1 = () => {
  return (
    <div className='flex items-center gap-4'>
        <a href='https://skiper-ui.com/' className='flex gap-2 items-center'>
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6"><ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)"></ellipse><defs><radialGradient id="paint0_radial_36_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"><stop offset="0.352001"stopColor="#090909"></stop><stop offset="0.591494"stopColor="#2770EA"></stop><stop offset="0.793825"stopColor="#FF7E97"></stop><stop offset="0.972489"stopColor="#FF9203"></stop></radialGradient></defs></svg>
      <h4 className='text-xl font-bold'>skiper/ui</h4>
      <span className='rounded-full border border-[#ff3f17] px-2 text-[12px] items-center text-[#ff3f17] '>Beta</span>
      </a>
      <a href="#" className='text-gray-400'>Components</a>
      <a href="#" className='text-gray-400'>Pricing</a>
      <a href="#" className='text-gray-400'>Newsletter</a>
    </div>
  )
}

export default NavPart1
