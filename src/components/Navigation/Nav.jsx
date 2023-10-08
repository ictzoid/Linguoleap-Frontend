import React from 'react'
import NavLogo from '../../assets/images/Logo.svg'

function Nav() {
  return (
    <div className='h-oneThirtyPixels py-12 px-20'>
      <img src={NavLogo} alt="" className='h-thirtySixPixels w-oneFiftyPixels' />
    </div>
  )
}

export default Nav
