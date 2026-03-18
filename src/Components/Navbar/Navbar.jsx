import React, { useState } from 'react';

const Navbar = () => {
  const [showsearch, setshowsearch] = useState(false);

  return (
    <nav className="fixed top-0 w-[100%] z-[1001] h-[85px] bg-[#ff5900] flex justify-between items-center px-6">
      {/* Skewed background */}
      <div className="absolute top-0 left-[-10vw] w-[30vw] h-full bg-white transform skew-x-[48deg] z-[1]"></div>

      {/* Logo */}
     <div className="relative z-[2] flex items-center h-full w-[160px] ml-[90px]">
  <img src="/images/images/logo.png" alt="Logo" className="h-10" />
</div>


      {/* Center Nav Links */}
      <ul className="relative z-10 flex justify-center gap-10 text-white text-lg font-semibold">

        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="relative group cursor-pointer flex items-center gap-1">
          <span>More</span>
          <span className="text-xs">▼</span>
          <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md py-2 w-[120px] z-50">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-[#333] hover:bg-[#ff5900] hover:text-white"
              >
                Call
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-[#333] hover:bg-[#ff5900] hover:text-white"
              >
                Message
              </a>
            </li>
          </ul>
        </li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Right Section */}
      <div className="relative z-[2] flex items-center gap-5">
        {/* Search bar (LEFT of icon) */}
        {showsearch && (
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="w-[200px] px-3 py-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5900] focus:border-[#ff5900] transition-all duration-200"
          />
        )}
        {/* Search icon */}
        <button onClick={() => setshowsearch(!showsearch)} className="flex items-center">
          <img
            src="/images/images/searchicon.png"
            alt="Search"
            className="w-[20px] h-[20px] filter invert"
          />
        </button>
        {/* Cart icon */}
        <button className="flex items-center">
          <img
            src="/images/images/carticon.png"
            alt="Cart"
            className="w-[20px] h-[20px] filter invert"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;