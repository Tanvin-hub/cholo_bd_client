import React from 'react';

function Navbar() {
  return (
    <nav className="bg-yellow-400 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a className="text-gray-900 text-2xl font-bold hover:text-gray-700" href="#">Your Brand</a>
          </div>
          <div className="hidden md:block">
            <a className="px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Home</a>
            <a className="px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">About</a>
            <a className="px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Services</a>
            <a className="px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Contact</a>
          </div>
          <div className="md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
              </svg>
            </button>
          </div>    
        </div>
        <div className="md:hidden pt-2">
          <a className="block px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Home</a>
          <a className="block px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">About</a>
          <a className="block px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Services</a>
          <a className="block px-4 py-2 text-gray-900 hover:bg-yellow-500 rounded" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;