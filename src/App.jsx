import React, { useState } from 'react';

function Toast({ message, type, onClose }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-6 right-6 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in z-50`}>
      {message}
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsDeleting(false);
    setIsModalOpen(false);
    setToast({ message: 'Account deleted successfully', type: 'success' });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Close modal on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      
      {/* BACKGROUND CONTENT */}
      <div className={`p-8 transition-all duration-300 ${isModalOpen ? 'blur-sm' : 'blur-0'}`}>
        <nav className="flex justify-between items-center mb-12">
          <div className="font-bold text-3xl text-white">Dashboard</div>
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg"></div>
          </div>
        </nav>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Account Settings</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg"
          >
            Delete Account
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Users', value: '2,543', icon: '👥' },
            { title: 'Revenue', value: '$45.2K', icon: '💰' },
            { title: 'Growth', value: '+12.5%', icon: '📈' },
            { title: 'Sessions', value: '12,456', icon: '🔗' },
            { title: 'Conversion', value: '3.2%', icon: '🎯' },
            { title: 'Retention', value: '87%', icon: '📊' },
          ].map(card => (
            <div key={card.title} className="bg-slate-700/50 backdrop-blur-sm rounded-lg shadow-sm border border-slate-600 p-6 hover:border-slate-500 transition-colors">
              <div className="text-3xl mb-2">{card.icon}</div>
              <p className="text-slate-400 text-sm">{card.title}</p>
              <p className="text-2xl font-bold text-white mt-2">{card.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 p-4 ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: isModalOpen ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isModalOpen ? 'blur(8px)' : 'blur(0px)',
        }}
        onClick={handleCancel}
      >
        
        {/* MODAL CARD */}
        <div 
          className={`bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          
          <div className="p-8 text-center">
            {/* Warning Icon with Animation */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6 animate-pulse">
              <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete Account?</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Are you sure you want to delete your account? All of your data will be permanently removed.
            </p>
            <p className="text-xs text-red-600 font-semibold">
              This action cannot be undone.
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-6 flex flex-col sm:flex-row-reverse gap-3 border-t border-gray-200">
            <button 
              onClick={handleDelete}
              disabled={isDeleting}
              className={`w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-transparent shadow-sm px-5 py-2.5 text-base font-medium text-white transition-all ${
                isDeleting 
                  ? 'bg-red-500 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700 active:scale-95'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm`}
            >
              {isDeleting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deleting...
                </>
              ) : (
                'Delete Forever'
              )}
            </button>
            <button 
              onClick={handleCancel}
              disabled={isDeleting}
              className="w-full sm:w-auto inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-5 py-2.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>

    </div>
  );
}

export default App;
