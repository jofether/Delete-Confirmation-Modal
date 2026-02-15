import React from 'react';

function Header() {
  return (
    <nav className="flex justify-between items-center mb-12">
      <div className="font-bold text-3xl text-white">Dashboard</div>
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
      </div>
    </nav>
  );
}

export default Header;
