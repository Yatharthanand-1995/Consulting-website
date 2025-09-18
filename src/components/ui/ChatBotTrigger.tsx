'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ChatBot from './ChatBot';

interface ChatBotTriggerProps {
  className?: string;
}

export function ChatBotTrigger({ className }: ChatBotTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  useEffect(() => {
    // Show the trigger after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show new message indicator after a bit more time
      setTimeout(() => setHasNewMessage(true), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasNewMessage(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        className={cn(
          'fixed right-6 bottom-6 z-40 transform transition-all duration-500',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
          isOpen && 'pointer-events-none translate-y-20 opacity-0',
          className
        )}
      >
        <button
          onClick={handleOpen}
          className={cn(
            'bg-gradient-neon shadow-neural border-neon-cyan/30 relative h-20 w-20 rounded-3xl border-2',
            'flex items-center justify-center',
            'animate-float-3d hover-neural',
            'transform transition-all duration-500 hover:scale-115 hover:rotate-3',
            'group backdrop-blur-sm'
          )}
        >
          {/* Multiple Pulsing Rings */}
          <div className="bg-gradient-neon absolute inset-0 animate-ping rounded-3xl opacity-30" />
          <div
            className="bg-gradient-cyber absolute inset-2 animate-ping rounded-2xl opacity-20"
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className="bg-gradient-neural absolute inset-4 animate-ping rounded-xl opacity-15"
            style={{ animationDelay: '1s' }}
          />

          {/* Enhanced Main Icon */}
          <div className="animate-hologram relative z-10 text-3xl">🤖</div>

          {/* Orbiting Elements */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: '10s' }}
          >
            <div className="bg-neon-cyan absolute top-1 left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full" />
            <div className="bg-neon-purple absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full" />
          </div>

          {/* Enhanced New Message Indicator */}
          {hasNewMessage && (
            <div className="bg-gradient-matrix animate-neon-pulse border-matrix shadow-neon-green absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-2xl border-2">
              <span className="text-primary text-sm font-black">!</span>
            </div>
          )}

          {/* Enhanced Tooltip */}
          <div
            className={cn(
              'absolute top-1/2 right-full mr-6 -translate-y-1/2',
              'bg-gradient-dark border-neon-cyan/30 shadow-neural rounded-2xl border-2 px-4 py-3 backdrop-blur-md',
              'scale-95 transform opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100',
              'pointer-events-none whitespace-nowrap'
            )}
          >
            <p className="text-neon text-sm font-medium">
              <span className="text-matrix">🚀</span> Hi! I&apos;m your AI
              consultant
            </p>
            <p className="text-xs font-medium text-neutral-300">
              Ask me about strategy, ROI, implementation...
            </p>
            <div className="border-l-neon-cyan/30 absolute top-1/2 left-full -translate-y-1/2 border-y-6 border-l-8 border-y-transparent" />
          </div>
        </button>

        {/* Enhanced Ambient Particles */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'animate-float-3d absolute h-2 w-2 rounded-full',
                i % 3 === 0
                  ? 'bg-neon-cyan shadow-neon-cyan'
                  : i % 3 === 1
                    ? 'bg-neon-purple shadow-neon-purple'
                    : 'bg-neon-green shadow-neon-green'
              )}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        {/* Neural Network Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="via-neon-cyan animate-cyber-flow absolute h-px bg-gradient-to-r from-transparent to-transparent"
              style={{
                left: '-50%',
                right: '-50%',
                top: `${25 + i * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default ChatBotTrigger;
