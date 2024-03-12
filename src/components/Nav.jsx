import React from 'react'

import { BiHomeAlt, BiSolidPhone, BiSolidPhoneCall, BiUser } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-scroll';
const Nav = () => {
  return <nav className='hidden lg:block fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto '>
      <div className="w-full bg-black/20 h-[60px] lg:h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50"> 
        <Link to='banner' activeClass='active' offset={-150} spy={true} smooth={true}  className='cursor-pointer w-[58] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' spy={true} smooth={true}  className='cursor-pointer w-[58] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link to='projects' activeClass='active'spy={true} smooth={true}  className='cursor-pointer w-[58] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link to='contact' activeClass='active' spy={true} smooth={true}  className='cursor-pointer w-[58] flex items-center justify-center'>
          <BiSolidPhone />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;

