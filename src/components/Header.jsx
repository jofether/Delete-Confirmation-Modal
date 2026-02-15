import React from 'react';

function Header() {
  return (
    // [BUG - LAYOUT] Flex direction reversed, elements appear in wrong order [FIX: change flex-row-reverse to flex-row]
    <nav className="flex flex-row-reverse justify-between items-center mb-12">
      <div className="font-bold text-3xl text-white">Dashboard</div>
      {/* [BUG - LAYERS] Absolutely positioned icons overlap nav items, text floats over [FIX: change absolute -top-4 to relative] */}
      <div className="flex space-x-3 absolute -top-4 text-white">
        ⚙️
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
        👤
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
      </div>
    </nav>
  );
}

export default Header;
