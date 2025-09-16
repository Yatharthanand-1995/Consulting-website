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
          'fixed bottom-6 right-6 z-40 transition-all duration-500 transform',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
          isOpen && 'translate-y-20 opacity-0 pointer-events-none',
          className
        )}
      >
        <button
          onClick={handleOpen}
          className={cn(
            'relative w-20 h-20 bg-gradient-neon rounded-3xl shadow-neural border-2 border-neon-cyan/30',
            'flex items-center justify-center',
            'animate-float-3d hover-neural',
            'transition-all duration-500 transform hover:scale-115 hover:rotate-3',
            'group backdrop-blur-sm'
          )}
        >
          {/* Multiple Pulsing Rings */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-neon opacity-30 animate-ping" />
          <div className="absolute inset-2 rounded-2xl bg-gradient-cyber opacity-20 animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-4 rounded-xl bg-gradient-neural opacity-15 animate-ping" style={{ animationDelay: '1s' }} />

          {/* Enhanced Main Icon */}
          <div className="relative text-3xl animate-hologram z-10">
            🤖
          </div>

          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-1 left-1/2 w-2 h-2 bg-neon-cyan rounded-full transform -translate-x-1/2" />
            <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-neon-purple rounded-full transform -translate-x-1/2" />
          </div>

          {/* Enhanced New Message Indicator */}
          {hasNewMessage && (
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-matrix rounded-2xl flex items-center justify-center animate-neon-pulse border-2 border-matrix shadow-neon-green">
              <span className="text-sm text-primary font-black">!</span>
            </div>
          )}

          {/* Enhanced Tooltip */}
          <div className={cn(
            'absolute right-full mr-6 top-1/2 -translate-y-1/2',
            'bg-gradient-dark border-2 border-neon-cyan/30 rounded-2xl px-4 py-3 shadow-neural backdrop-blur-md',
            'opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100',
            'pointer-events-none whitespace-nowrap'
          )}>
            <p className="text-sm text-neon font-medium">
              <span className="text-matrix">🚀</span> Hi! I'm your AI consultant
            </p>
            <p className="text-xs text-neutral-300 font-medium">
              Ask me about strategy, ROI, implementation...
            </p>
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-8 border-l-neon-cyan/30 border-y-6 border-y-transparent" />
          </div>
        </button>

        {/* Enhanced Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'absolute w-2 h-2 rounded-full animate-float-3d',
                i % 3 === 0 ? 'bg-neon-cyan shadow-neon-cyan' :
                i % 3 === 1 ? 'bg-neon-purple shadow-neon-purple' :
                'bg-neon-green shadow-neon-green'
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
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-neon-cyan to-transparent h-px animate-cyber-flow"
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
      <ChatBot
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default ChatBotTrigger;