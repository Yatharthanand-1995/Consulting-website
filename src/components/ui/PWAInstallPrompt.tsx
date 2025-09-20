'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { InteractiveButton } from './InteractiveButton';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export interface PWAInstallPromptProps {
  className?: string;
}

export function PWAInstallPrompt({ className }: PWAInstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as { standalone?: boolean }).standalone
    ) {
      setIsInstalled(true);
      return;
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing
      e.preventDefault();
      // Save the event for later use
      setDeferredPrompt(e);
      // Show our custom install prompt
      setShowPrompt(true);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as EventListener
    );
    window.addEventListener('appinstalled', handleAppInstalled);

    // Auto-show prompt after user has been on site for 30 seconds
    const timer = setTimeout(() => {
      if (deferredPrompt && !isInstalled) {
        setShowPrompt(true);
      }
    }, 30000);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt as EventListener
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearTimeout(timer);
    };
  }, [deferredPrompt, isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      sessionStorage.setItem('pwa-prompt-dismissed', 'true');
    }
  };

  // Don't show if already installed or dismissed this session
  if (
    isInstalled ||
    (typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('pwa-prompt-dismissed') === 'true') ||
    (!deferredPrompt && !isIOS)
  ) {
    return null;
  }

  if (isIOS) {
    return (
      <div
        className={cn(
          'fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-sm',
          'rounded-lg border border-gray-200 bg-white p-4 shadow-lg',
          'transform transition-all duration-300 ease-out',
          showPrompt
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0',
          className
        )}
      >
        <div className="flex items-start space-x-3">
          <div className="text-2xl">📱</div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">
              Install Stratex AI
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Add to your home screen for quick access and offline
              functionality.
            </p>
            <div className="text-xs leading-relaxed text-gray-500">
              Tap{' '}
              <svg
                className="mx-1 inline h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              then &quot;Add to Home Screen&quot;
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
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
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-sm',
        'rounded-lg border border-gray-200 bg-white p-4 shadow-lg',
        'transform transition-all duration-300 ease-out',
        showPrompt ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
        className
      )}
    >
      <div className="flex items-start space-x-3">
        <div className="text-2xl">⚡</div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-sm font-semibold text-gray-900">
            Install Stratex AI App
          </h3>
          <p className="mb-3 text-xs text-gray-600">
            Get instant access with offline support and faster loading.
          </p>
          <div className="flex space-x-2">
            <InteractiveButton
              variant="primary"
              size="sm"
              onClick={handleInstallClick}
              className="px-3 py-1 text-xs"
              ripple
            >
              Install
            </InteractiveButton>
            <InteractiveButton
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="px-3 py-1 text-xs"
              ripple
            >
              Later
            </InteractiveButton>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 text-gray-400 hover:text-gray-600"
          aria-label="Dismiss"
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
      </div>
    </div>
  );
}

export default PWAInstallPrompt;
