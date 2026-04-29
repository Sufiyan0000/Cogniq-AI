import React, { useState } from 'react'
import logo from './../assets/CompanyLogo.svg'
import PrimaryBtn from './ui/PrimaryBtn'
import { FaLongArrowAltRight } from "react-icons/fa";

const NAV_ITEMS = ['Home','About Us', 'services', 'our lab', 'blogs']

const Navbar = () => {

  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <nav className='flex justify-between items-center px-6 md:px-12 lg:px-20 bg-white/95 backdrop-blur-md w-full h-[80px] fixed top-0 z-[60] border-b border-gray-100 transition-all duration-300'>

      {/* Logo Div */}
      <div className='flex items-center justify-center'>
        <a href="#" className='hover:opacity-75 transition-all'>
          <img src={logo} alt="logo" className='h-[28px] w-auto' />
        </a>
      </div>

      {/* Tabs / computer Links */}
      <ul className='hidden md:flex gap-9 list-none'>
        {NAV_ITEMS.map((item) => {

          const path = item.toLowerCase().replace(/\s+/g, '-');

          return (
            <li key={item} className={`hover:text-[#794CFA] ${active === path
              ? "text-[#794CFA] font-semibold"
              : "text-neutral-700"
              }`}>
              <a href={`#${path}`}
                className='capitalize'
                onClick={() => setActive(path)}
              >{item}</a>
            </li>
          )
        })}
      </ul>

      {/*  Contact Us Button (large Screen Only)*/}
      <div className='hidden md:block '>
        <PrimaryBtn text='Contact Us' />
      </div>

      {/* Hamburger Menu for Moblie/Small Devices */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
      >
        <span
          className="block w-[28px] h-[3px] rounded-sm transition-transform duration-300"
          style={{
            background: 'var(--ham-color, currentColor)',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block w-[20px] h-[3px] rounded-sm transition-all duration-300"
          style={{
            background: 'var(--ham-color, currentColor)',
            width: open ? '0' : '22px',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-[28px] h-[3px] rounded-sm transition-transform duration-300"
          style={{
            background: 'var(--ham-color, currentColor)',
            transform: open ? 'translateY(-9px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className={`flex flex-col gap-7 fixed top-20 right-0 h-screen w-[100%] z-[200]
      bg-white
      backdrop-blur-xl border-r border-neutral-200
      px-9 py-6 transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
    `}
        >
          <ul className="list-none flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const path = item.toLowerCase().replace(/\s+/g, "-");

              return (
                <li
                  key={item}
                  className={`text-xl font-bold hover:text-[#794CFA] ${active === path
                      ? "text-[#794CFA] font-semibold"
                      : "text-neutral-700"
                    }`}
                >
                  <a
                    href={`#${path}`}
                    className="capitalize block py-1"
                    onClick={() => {
                      setActive(path);
                      setOpen(false); // close after click
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <hr className=' text-neutral-200 w-[90vw]'/>
          <div>
            <PrimaryBtn className='py-4 gap-3 text-xl' icon={FaLongArrowAltRight}/>
          </div>
          <div className='fixed bottom-25 text-center opacity-70'>
            <p className='uppercase'>engineering the next generation</p>
            <img src={logo} alt="logo" className='h-6 mx-auto grayscale'/>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar