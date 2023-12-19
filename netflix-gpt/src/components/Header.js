import React from 'react'
import { LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div className='absolute w-screen max-sm:px-2 px-8 py-2 md:bg-gradient-to-b md:from-black z-10 h-48'>
      <img className='w-52 absolute max-md:w-28' src={LOGO} alt="logo"/>
    </div>
  )
}

export default Header