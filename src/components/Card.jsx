import React from 'react';

function Card({ icon, title, value, description }) {
  return (
    <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg shadow-sm border border-slate-600 p-6 hover:border-slate-500 hover:shadow-md transition-all duration-200 mb-999">
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-white mt-2">{value}</p>
      {description && <p className="text-xs text-slate-400 mt-1">{description}</p>}
    </div>
  );
}

export default Card;
