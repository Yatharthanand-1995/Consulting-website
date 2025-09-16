'use client';

import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const modalVariants = cva(
  'fixed inset-0 z-50 flex items-center justify-center p-4',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        full: 'max-w-full h-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const modalContentVariants = cva(
  'relative w-full bg-card border border-border rounded-xl shadow-xl transition-all duration-300 max-h-[90vh] overflow-hidden',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        full: 'max-w-full h-full max-h-full rounded-none',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalContentVariants> {}

// Hook for managing body scroll
function useBodyScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]);
}

// Hook for ESC key handling
function useEscapeKey(callback: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [callback, enabled]);
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      size,
      open,
      onClose,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      showCloseButton = true,
      children,
      ...props
    },
    ref
  ) => {
    // Hooks for modal behavior
    useBodyScrollLock(open);
    useEscapeKey(onClose, closeOnEsc);

    if (!open) return null;

    const modalContent = (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={closeOnOverlayClick ? onClose : undefined}
          aria-hidden="true"
        />

        {/* Modal Container */}
        <div
          ref={ref}
          className={cn(modalVariants({ size }), className)}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {/* Modal Content */}
          <div
            className={cn(
              modalContentVariants({ size }),
              'animate-in zoom-in-95 duration-300'
            )}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                aria-label="Close modal"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {children}
          </div>
        </div>
      </>
    );

    // Render in portal
    if (typeof window !== 'undefined') {
      return createPortal(modalContent, document.body);
    }

    return null;
  }
);

const ModalHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 pb-4 border-b border-border', className)}
    {...props}
  />
));

const ModalTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-xl font-semibold leading-none tracking-tight text-foreground',
      className
    )}
    {...props}
  />
));

const ModalDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground mt-2', className)}
    {...props}
  />
));

const ModalContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-6 overflow-y-auto flex-1', className)}
    {...props}
  />
));

const ModalFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'p-6 pt-4 border-t border-border flex items-center justify-end space-x-2',
      className
    )}
    {...props}
  />
));

// Specialized modal variants
const ConfirmModal = forwardRef<
  HTMLDivElement,
  ModalProps & {
    title: string;
    description: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
  }
>(
  (
    {
      title,
      description,
      onConfirm,
      onClose,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      variant = 'info',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      danger: 'bg-red-50 border-red-200 text-red-900',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      info: 'bg-blue-50 border-blue-200 text-blue-900',
    };

    return (
      <Modal ref={ref} onClose={onClose} size="sm" {...props}>
        <div className="p-6">
          <div className={cn('p-4 rounded-lg mb-4', variantStyles[variant])}>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted transition-colors"
            >
              {cancelText}
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className={cn(
                'px-4 py-2 text-sm rounded-lg text-white transition-colors',
                variant === 'danger'
                  ? 'bg-red-500 hover:bg-red-600'
                  : variant === 'warning'
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-secondary hover:bg-secondary/90'
              )}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </Modal>
    );
  }
);

Modal.displayName = 'Modal';
ModalHeader.displayName = 'ModalHeader';
ModalTitle.displayName = 'ModalTitle';
ModalDescription.displayName = 'ModalDescription';
ModalContent.displayName = 'ModalContent';
ModalFooter.displayName = 'ModalFooter';
ConfirmModal.displayName = 'ConfirmModal';

export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
  ConfirmModal,
};