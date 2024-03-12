import React from 'react'
import Sayeesh from "/sayeesh-naik.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="container mx-auto">
    <div
      className="py-8 flex justify-between items-center mx-auto max-w-5xl"
      id="header"
    >
      <a href="#">
        <img src={Sayeesh} alt="" width={100} height={35} />
      </a>
      <button className="btn btn-sm">
      <Link to='contact' activeClass='active' spy={true} smooth={true}  className='cursor-pointer w-[100px] flex items-center justify-center'>
          Contact Me
        </Link>
      </button>
    </div>
  </div>  )
}

export default Header