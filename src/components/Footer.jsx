import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#ff3ea5] text-white px-6 py-4 relative z-10">
      <div className="md:px-20 px-6 py-4">
        {/* Logo */}
        <div className='mt-8'>
          <h2 className="text-lg sm:text-xl font-normal"><span className='text-black text-xl sm:text-2xl  font-climate'>W</span>edia Studio</h2>
        </div>
        {/* Link Sections */}
        <div className="grid grid-cols-1 max-w-4xl w-full mx-auto text-white mr-4 font-sans mt-2">


          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-lg">Support</h3>
            <ul className="space-y-6 text-xs sm:text-sm">
              <li className='hover:underline'> <a href="mailto:victor@pedxo.com">Email</a></li>
              <Link to="/book-demo">
              <li className='hover:underline'>Call Us</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white my-4 opacity-30" />

        {/* Copyright */}
        <p className="text-center text-xs sm:text-[12px] font-medium">
          ©2025 Wedia Inc. All rights reserved.

        </p>
      </div>
    </footer>
  )
}

export default Footer