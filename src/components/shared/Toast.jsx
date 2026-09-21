import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div style={{
          position: 'fixed',
          top: 24,
          right: 24,
          backgroundColor: 'rgb(106,30,46)',
          color: 'rgb(245,237,224)',
          padding: '14px 24px',
          borderRadius: 12,
          fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: 14,
          fontWeight: 500,
          boxShadow: '0 8px 24px rgba(74,15,28,0.25)',
          zIndex: 9999,
          animation: 'toast-slide-in 0.3s ease-out',
        }}>
          {toast}
          <style>{`
            @keyframes toast-slide-in {
              from { opacity: 0; transform: translateY(-12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
