import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#FFFFFF] text-black shadow-md' : 'bg-transparent text-[#FFFFFF]'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">

        <div className="text-lg md:text-xl font-bold ">
          Ray Fitout
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase  font-light">
          <li className="cursor-pointer hover:opacity-70">Projects</li>
          <li className="cursor-pointer hover:opacity-70">Services</li>
          <li className="cursor-pointer hover:opacity-70">Systems</li>
          <li className="cursor-pointer hover:opacity-70">Products</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">Contact</li>
        </ul>

        {/* Hamburger Icon */}


        <div className="md:hidden z-50" onClick={toggleMenu}>
          <div className="space-y-1 cursor-pointer">
            <div
              className={`h-0.5 w-6 transition-transform ${menuOpen ? 'bg-black rotate-45 translate-y-1.5' : 'bg-current'
                }`}
            ></div>
            <div
              className={`h-0.5 w-6 ${menuOpen ? 'bg-black opacity-0' : 'bg-current'
                }`}
            ></div>
            <div
              className={`h-0.5 w-6 transition-transform ${menuOpen ? 'bg-black -rotate-45 -translate-y-1.5' : 'bg-current'
                }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white text-black z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 uppercase text-lg font-semibold">
          <span onClick={toggleMenu} className="cursor-pointer">Projects</span>
          <span onClick={toggleMenu} className="cursor-pointer">Services</span>
          <span onClick={toggleMenu} className="cursor-pointer">Systems</span>
          <span onClick={toggleMenu} className="cursor-pointer">Products</span>
          <span onClick={toggleMenu} className="cursor-pointer">About</span>
          <span onClick={toggleMenu} className="cursor-pointer">Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
