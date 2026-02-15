import React from 'react';

function SettingsSection({ onDeleteClick }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">Account Settings</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onDeleteClick}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-600/50 active:scale-95"
        >
          Delete Account
        </button>
        <button className="px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors shadow-lg active:scale-95">
          Change Password
        </button>
        <button className="px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors shadow-lg active:scale-95">
          Security Settings
        </button>
      </div>
    </div>
  );
}

export default SettingsSection;
