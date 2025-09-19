'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface AIVisualizationProps {
  className?: string;
  animated?: boolean;
}

export function AIVisualization({ className, animated = true }: AIVisualizationProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsActive(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsActive(true);
    }
  }, [animated]);

  return (
    <div className={cn('relative w-full h-auto', className)}>
      {/* Main Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-slate-200 shadow-lg">

        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              isActive ? 'opacity-100' : 'opacity-0'
            )}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, transparent 49%, rgba(59, 130, 246, 0.05) 50%, transparent 51%)
              `,
              backgroundSize: '40px 40px, 60px 60px, 80px 80px',
              animation: animated ? 'ai-float 6s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Central AI Hub */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Revolving Orbital Circles */}
          {animated && isActive && (
            <>
              {/* Outer orbit - slow clockwise */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-dashed border-blue-400/60"
                style={{
                  animation: 'ai-revolve-clockwise 20s linear infinite, ai-orbit-pulse 4s ease-in-out infinite',
                  animationDelay: '0.5s, 0s'
                }}
              />

              {/* Middle orbit - medium counter-clockwise */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dotted border-indigo-500/70"
                style={{
                  animation: 'ai-revolve-counter 15s linear infinite, ai-orbit-pulse 3s ease-in-out infinite',
                  animationDelay: '1s, 1.5s'
                }}
              />

              {/* Inner orbit - fast clockwise */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-solid border-blue-500/50"
                style={{
                  animation: 'ai-revolve-clockwise 10s linear infinite, ai-orbit-pulse 2s ease-in-out infinite',
                  animationDelay: '1.5s, 0.5s'
                }}
              />

              {/* Orbital particles */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36"
                style={{
                  animation: 'ai-revolve-clockwise 18s linear infinite',
                  animationDelay: '2s'
                }}
              >
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg"></div>
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-md"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-lg"></div>
                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-md"></div>
              </div>
            </>
          )}

          {/* Central AI Core */}
          <div
            className={cn(
              'relative z-10 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transition-all duration-1000',
              isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            )}
            style={{
              animation: animated ? 'ai-pulse-glow 3s ease-in-out infinite' : 'none',
            }}
          >
            <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
              <div className="text-blue-600 font-bold text-lg">AI</div>
            </div>
          </div>
        </div>

        {/* Data Flow Lines */}
        {[
          { delay: '0.5s', rotation: '0deg', length: '140px' },
          { delay: '0.7s', rotation: '45deg', length: '120px' },
          { delay: '0.9s', rotation: '90deg', length: '130px' },
          { delay: '1.1s', rotation: '135deg', length: '125px' },
          { delay: '1.3s', rotation: '180deg', length: '135px' },
          { delay: '1.5s', rotation: '225deg', length: '115px' },
          { delay: '1.7s', rotation: '270deg', length: '128px' },
          { delay: '1.9s', rotation: '315deg', length: '122px' },
        ].map((line, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              transform: `translate(-50%, -50%) rotate(${line.rotation})`,
              animationDelay: line.delay,
            }}
          >
            <div
              className={cn(
                'h-0.5 bg-gradient-to-r from-blue-400 to-transparent transition-all duration-1000',
                isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
              )}
              style={{
                width: line.length,
                animation: animated ? 'ai-data-flow 4s ease-in-out infinite' : 'none',
                animationDelay: line.delay,
              }}
            />
          </div>
        ))}

        {/* Data Nodes */}
        {[
          { x: '20%', y: '20%', delay: '1.0s', type: 'Analytics' },
          { x: '80%', y: '25%', delay: '1.2s', type: 'ML' },
          { x: '75%', y: '55%', delay: '1.4s', type: 'Data' },
          { x: '25%', y: '60%', delay: '1.6s', type: 'Insights' },
          { x: '15%', y: '40%', delay: '1.8s', type: 'Strategy' },
          { x: '85%', y: '45%', delay: '2.0s', type: 'ROI' },
        ].map((node, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: node.x,
              top: node.y,
              animationDelay: node.delay,
            }}
          >
            <div
              className={cn(
                'w-12 h-12 rounded-lg bg-white border-2 border-blue-200 shadow-md transition-all duration-1000 flex items-center justify-center',
                isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              )}
              style={{
                animation: animated ? 'ai-node-pulse 3s ease-in-out infinite' : 'none',
                animationDelay: node.delay,
              }}
            >
              <div className="text-xs font-semibold text-blue-600 text-center leading-tight">
                {node.type}
              </div>
            </div>
          </div>
        ))}

        {/* Floating Data Points */}
        {[
          { x: 25, y: 15, duration: 3.5, delay: 0.2 },
          { x: 75, y: 20, duration: 4.2, delay: 0.8 },
          { x: 45, y: 35, duration: 3.8, delay: 1.2 },
          { x: 65, y: 65, duration: 4.0, delay: 0.5 },
          { x: 15, y: 45, duration: 3.3, delay: 1.5 },
          { x: 85, y: 75, duration: 4.5, delay: 0.3 },
          { x: 35, y: 80, duration: 3.7, delay: 1.8 },
          { x: 55, y: 25, duration: 4.1, delay: 0.9 },
          { x: 20, y: 70, duration: 3.9, delay: 1.1 },
          { x: 80, y: 40, duration: 3.6, delay: 0.7 },
          { x: 40, y: 50, duration: 4.3, delay: 1.6 },
          { x: 70, y: 30, duration: 3.4, delay: 0.4 },
        ].map((particle, index) => (
          <div
            key={`float-${index}`}
            className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: animated ? `ai-float-particle ${particle.duration}s ease-in-out infinite` : 'none',
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Success Metrics Display - Better Positioned */}
        <div className="absolute bottom-4 left-4 right-4">
          <div
            className={cn(
              'bg-white/95 backdrop-blur-md rounded-xl p-5 border border-blue-100 shadow-lg transition-all duration-1000',
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
            style={{ animationDelay: '2.5s' }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-600">$2.3B+</div>
                <div className="text-slate-600 text-xs font-medium">Value Created</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600">97%</div>
                <div className="text-slate-600 text-xs font-medium">Success Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-indigo-600">6mo</div>
                <div className="text-slate-600 text-xs font-medium">Avg ROI</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AIVisualization;