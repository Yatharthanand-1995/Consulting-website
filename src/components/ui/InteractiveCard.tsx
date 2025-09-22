'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
  lift?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
  href?: string;
}

export function InteractiveCard({
  children,
  className,
  tilt = false,
  glow = false,
  lift = true,
  magnetic = false,
  onClick,
  href,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePosition({ x, y });

    if (tilt || magnetic) {
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      if (tilt && cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }

      if (magnetic && cardRef.current) {
        const magneticX = (x - centerX) / 20;
        const magneticY = (y - centerY) / 20;
        cardRef.current.style.transform = `translate3d(${magneticX}px, ${magneticY}px, 0) scale3d(1.02, 1.02, 1.02)`;
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  const baseClasses = cn(
    'relative bg-white border border-gray-200 rounded-lg overflow-hidden',
    'transition-all duration-300 ease-out will-change-transform',
    {
      'cursor-pointer': onClick || href,
      'hover:shadow-xl': lift,
      'hover:border-blue-200': isHovered && !glow,
    }
  );

  const CardComponent = href ? 'a' : 'div';

  return (
    <CardComponent
      ref={cardRef as React.LegacyRef<HTMLDivElement & HTMLAnchorElement>}
      className={cn(baseClasses, className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
    >
      {/* Glow effect */}
      {glow && isHovered && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10" />
      )}

      {/* Spotlight effect */}
      {isHovered && (tilt || magnetic) && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Border gradient animation */}
      {isHovered && glow && (
        <div className="animate-spin-slow absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-[1px]">
          <div className="h-full w-full rounded-lg bg-white" />
        </div>
      )}
    </CardComponent>
  );
}

export default InteractiveCard;
