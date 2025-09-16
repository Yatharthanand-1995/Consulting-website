'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface AITechnologyVisualizationProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'background';
  showLabels?: boolean;
}

// Node types for AI visualization
const nodeTypes = [
  { id: 'ml', label: 'Machine Learning', color: 'from-blue-500 to-blue-600' },
  { id: 'nlp', label: 'NLP', color: 'from-green-500 to-green-600' },
  { id: 'cv', label: 'Computer Vision', color: 'from-purple-500 to-purple-600' },
  { id: 'data', label: 'Data Analytics', color: 'from-orange-500 to-orange-600' },
  { id: 'ai', label: 'AI Core', color: 'from-slate-600 to-slate-700' },
  { id: 'automation', label: 'Automation', color: 'from-cyan-500 to-cyan-600' },
];

// Connection paths between nodes
const connections = [
  { from: 'ai', to: 'ml', strength: 0.9 },
  { from: 'ai', to: 'nlp', strength: 0.8 },
  { from: 'ai', to: 'cv', strength: 0.7 },
  { from: 'ml', to: 'data', strength: 0.8 },
  { from: 'nlp', to: 'automation', strength: 0.6 },
  { from: 'cv', to: 'automation', strength: 0.7 },
];

export function AITechnologyVisualization({
  className,
  variant = 'hero',
  showLabels = true
}: AITechnologyVisualizationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    setIsAnimating(true);

    // Animate nodes appearing in sequence
    const nodeAnimation = setInterval(() => {
      setActiveNodes(prev => {
        if (prev.length < nodeTypes.length) {
          return [...prev, nodeTypes[prev.length].id];
        }
        return prev;
      });
    }, 300);

    // Continuous pulse animation
    const pulseAnimation = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(nodeAnimation);
      clearInterval(pulseAnimation);
    };
  }, []);

  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return 'w-64 h-40';
      case 'background':
        return 'w-full h-full absolute inset-0 opacity-10';
      default:
        return 'w-full h-80 lg:h-96';
    }
  };

  const getNodeSize = () => {
    switch (variant) {
      case 'compact':
        return 'w-8 h-8';
      case 'background':
        return 'w-6 h-6';
      default:
        return 'w-12 h-12 lg:w-16 lg:lg:h-16';
    }
  };

  // Generate node positions in a network pattern
  const getNodePosition = (index: number) => {
    const centerX = 50;
    const centerY = 50;
    const radius = variant === 'compact' ? 25 : 35;

    if (index === 4) { // AI Core - center position
      return { x: centerX, y: centerY };
    }

    const angle = (index * 60) + (pulsePhase * 5); // Subtle rotation
    const x = centerX + Math.cos((angle * Math.PI) / 180) * radius;
    const y = centerY + Math.sin((angle * Math.PI) / 180) * radius;

    return { x, y };
  };

  return (
    <div className={cn('relative flex items-center justify-center', getVariantClasses(), className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection Lines */}
        {connections.map((connection, index) => {
          const fromNode = nodeTypes.find(n => n.id === connection.from);
          const toNode = nodeTypes.find(n => n.id === connection.to);
          if (!fromNode || !toNode) return null;

          const fromIndex = nodeTypes.indexOf(fromNode);
          const toIndex = nodeTypes.indexOf(toNode);
          const fromPos = getNodePosition(fromIndex);
          const toPos = getNodePosition(toIndex);

          const isActive = activeNodes.includes(connection.from) && activeNodes.includes(connection.to);

          return (
            <line
              key={`${connection.from}-${connection.to}`}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke={isActive ? '#3b82f6' : '#e2e8f0'}
              strokeWidth={isActive ? (connection.strength * 0.5) : 0.2}
              className={cn(
                'transition-all duration-500',
                isActive && 'drop-shadow-sm'
              )}
              style={{
                opacity: isActive ? connection.strength : 0.3,
                transitionDelay: `${index * 0.1}s`
              }}
            />
          );
        })}

        {/* Data Flow Animation */}
        {connections.map((connection, index) => {
          const fromNode = nodeTypes.find(n => n.id === connection.from);
          const toNode = nodeTypes.find(n => n.id === connection.to);
          if (!fromNode || !toNode) return null;

          const fromIndex = nodeTypes.indexOf(fromNode);
          const toIndex = nodeTypes.indexOf(toNode);
          const fromPos = getNodePosition(fromIndex);
          const toPos = getNodePosition(toIndex);

          const isActive = activeNodes.includes(connection.from) && activeNodes.includes(connection.to);

          return (
            <circle
              key={`flow-${connection.from}-${connection.to}`}
              r="0.5"
              fill="#3b82f6"
              className={cn(
                'transition-opacity duration-500',
                isActive ? 'opacity-70' : 'opacity-0'
              )}
            >
              <animateMotion
                dur={`${2 + index * 0.5}s`}
                repeatCount="indefinite"
                begin={`${index * 0.3}s`}
              >
                <mpath href={`#path-${fromIndex}-${toIndex}`} />
              </animateMotion>
            </circle>
          );
        })}

        {/* Hidden paths for animation */}
        <defs>
          {connections.map((connection, index) => {
            const fromNode = nodeTypes.find(n => n.id === connection.from);
            const toNode = nodeTypes.find(n => n.id === connection.to);
            if (!fromNode || !toNode) return null;

            const fromIndex = nodeTypes.indexOf(fromNode);
            const toIndex = nodeTypes.indexOf(toNode);
            const fromPos = getNodePosition(fromIndex);
            const toPos = getNodePosition(toIndex);

            return (
              <path
                key={`path-${fromIndex}-${toIndex}`}
                id={`path-${fromIndex}-${toIndex}`}
                d={`M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`}
                fill="none"
              />
            );
          })}
        </defs>
      </svg>

      {/* Technology Nodes */}
      {nodeTypes.map((node, index) => {
        const position = getNodePosition(index);
        const isActive = activeNodes.includes(node.id);
        const isPulsing = pulsePhase === index % 4;
        const isCenterNode = node.id === 'ai';

        return (
          <div
            key={node.id}
            className={cn(
              'absolute flex items-center justify-center rounded-full transition-all duration-500 transform',
              getNodeSize(),
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
              isPulsing && isActive && 'scale-110 shadow-lg',
              isCenterNode && 'z-10'
            )}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `translate(-50%, -50%) ${isPulsing && isActive ? 'scale(1.1)' : 'scale(1)'}`,
              transitionDelay: `${index * 0.1}s`
            }}
          >
            {/* Node Background */}
            <div className={cn(
              'absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-300',
              node.color,
              isActive && 'shadow-lg',
              isCenterNode && 'shadow-xl'
            )} />

            {/* Node Content */}
            <div className="relative z-10 flex items-center justify-center text-white">
              {isCenterNode ? (
                <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ) : (
                <div className={cn(
                  'font-bold leading-none text-center select-none',
                  variant === 'compact' ? 'text-[6px]' : variant === 'background' ? 'text-[4px]' : 'text-xs lg:text-sm'
                )}>
                  {node.id === 'ml' && 'ML'}
                  {node.id === 'nlp' && 'NLP'}
                  {node.id === 'cv' && 'CV'}
                  {node.id === 'data' && 'DA'}
                  {node.id === 'automation' && 'AU'}
                </div>
              )}
            </div>

            {/* Node Label */}
            {showLabels && variant === 'hero' && (
              <div className={cn(
                'absolute top-full mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-500',
                isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}>
                <div className="bg-white px-2 py-1 rounded shadow-sm border text-xs font-medium text-slate-700 whitespace-nowrap">
                  {node.label}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Center Pulse Effect */}
      <div className={cn(
        'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000',
        isAnimating && activeNodes.length > 4 ? 'animate-ping opacity-20' : 'opacity-0',
        variant === 'compact' ? 'w-16 h-16' : 'w-24 h-24'
      )}
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
        animationDuration: '3s'
      }} />
    </div>
  );
}

export default AITechnologyVisualization;