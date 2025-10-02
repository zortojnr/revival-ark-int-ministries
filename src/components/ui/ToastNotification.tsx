'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  XCircleIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const ToastNotification: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [id, onClose]);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    
    // Auto-dismiss timer
    const dismissTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, [duration, handleClose]);

  const getIcon = () => {
    const iconClass = "w-6 h-6 flex-shrink-0";
    
    switch (type) {
      case 'success':
        return <CheckCircleIcon className={`${iconClass} text-success-500`} />;
      case 'error':
        return <XCircleIcon className={`${iconClass} text-error-500`} />;
      case 'warning':
        return <ExclamationTriangleIcon className={`${iconClass} text-warning-500`} />;
      case 'info':
        return <InformationCircleIcon className={`${iconClass} text-info-500`} />;
      default:
        return <InformationCircleIcon className={`${iconClass} text-info-500`} />;
    }
  };

  const getToastStyles = () => {
    const baseStyles = "fixed top-4 right-4 z-tooltip max-w-md w-full bg-white rounded-xl shadow-xl border-l-4 p-4 transition-all duration-300 ease-smooth";
    
    const visibilityStyles = isVisible && !isExiting 
      ? "translate-x-0 opacity-100" 
      : "translate-x-full opacity-0";

    const borderStyles = {
      success: "border-l-success-500",
      error: "border-l-error-500", 
      warning: "border-l-warning-500",
      info: "border-l-info-500"
    };

    return `${baseStyles} ${visibilityStyles} ${borderStyles[type]}`;
  };

  return (
    <div className={getToastStyles()}>
      <div className="flex items-start gap-3">
        {getIcon()}
        
        <div className="flex-1 min-w-0">
          <h4 className="heading-6 text-secondary-900 mb-1">
            {title}
          </h4>
          {message && (
            <p className="body-small text-secondary-600">
              {message}
            </p>
          )}
        </div>

        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 rounded-md text-secondary-400 hover:text-secondary-600 hover:bg-neutral-100 transition-colors duration-fast focus-ring"
          aria-label="Close notification"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 w-full bg-neutral-200 rounded-full h-1 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all ease-linear ${
            type === 'success' ? 'bg-success-500' :
            type === 'error' ? 'bg-error-500' :
            type === 'warning' ? 'bg-warning-500' :
            'bg-info-500'
          }`}
          style={{
            width: '100%',
            animation: `shrink ${duration}ms linear forwards`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

// Toast Container Component
export interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-tooltip space-y-2">
      {toasts.map((toast) => (
        <ToastNotification
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

// Toast Hook for easy usage
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      ...toast,
      id,
      onClose: removeToast,
    };
    
    setToasts(prev => [...prev, newToast]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (title: string, message?: string) => 
    addToast({ type: 'success', title, message });
  
  const showError = (title: string, message?: string) => 
    addToast({ type: 'error', title, message });
  
  const showWarning = (title: string, message?: string) => 
    addToast({ type: 'warning', title, message });
  
  const showInfo = (title: string, message?: string) => 
    addToast({ type: 'info', title, message });

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};

export default ToastNotification;