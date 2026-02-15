import React, { useState, useEffect } from 'react';
import { Toast, Modal, Header, SettingsSection, StatsGrid } from './components';

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
  useEffect(() => {
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
        <Header />
        <SettingsSection onDeleteClick={() => setIsModalOpen(true)} />
        <StatsGrid />
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        title="Delete Account?"
        message="Are you sure you want to delete your account? All of your data will be permanently removed."
        warning="This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={handleCancel}
        confirmText="Delete Forever"
        cancelText="Cancel"
        isLoading={isDeleting}
      />

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
