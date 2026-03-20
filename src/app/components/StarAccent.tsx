import React from 'react';

/**
 * Star divider — the Garage Goat signature accent.
 * Used between sections and above headings for that Americana tradesman feel.
 */
export function StarDivider({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const lineWidths = { sm: 'w-10', md: 'w-16', lg: 'w-24' };
  const starSizes = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' };
  const lineHeight = { sm: 'h-px', md: 'h-[2px]', lg: 'h-[2px]' };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`${lineHeight[size]} ${lineWidths[size]} bg-current opacity-20`} />
      <span className={`text-goat-red ${starSizes[size]}`}>★</span>
      <div className={`${lineHeight[size]} ${lineWidths[size]} bg-current opacity-20`} />
    </div>
  );
}

/**
 * Triple-star accent — bolder version for section headers.
 */
export function TripleStarDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-[2px] w-12 bg-current opacity-15" />
      <span className="text-goat-red/40 text-xs">★</span>
      <span className="text-goat-red text-base">★</span>
      <span className="text-goat-red/40 text-xs">★</span>
      <div className="h-[2px] w-12 bg-current opacity-15" />
    </div>
  );
}

/**
 * Star bullet — for lists and feature callouts.
 */
export function StarBullet({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <span className="text-goat-red mt-0.5 flex-shrink-0">★</span>
      <span>{children}</span>
    </div>
  );
}

/**
 * Star Circle — the red star inside a circular ring, echoing the star in the logo's "O".
 * Used as a focal brand mark on hero sections and key headings.
 */
export function StarCircle({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16' };
  const starSize = { sm: 'text-xs', md: 'text-base', lg: 'text-xl' };
  const borderWidth = { sm: 'border', md: 'border-2', lg: 'border-[3px]' };

  return (
    <div className={`inline-flex items-center justify-center ${dims[size]} rounded-full ${borderWidth[size]} border-goat-navy/20 bg-goat-navy-deep/5 ${className}`}>
      <span className={`text-goat-red ${starSize[size]}`}>★</span>
    </div>
  );
}

/**
 * Garage Door Divider — three horizontal panel lines that echo the
 * garage door element from the logo. Subtle section break.
 */
export function GarageDoorDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`garage-door-divider ${className}`}>
      <span /><span /><span />
    </div>
  );
}

/**
 * Shield Star — a small pointed star silhouette (behind the logo shield).
 * Purely decorative, used as a background watermark.
 */
export function ShieldStarWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 0 L120 75 L200 75 L135 120 L155 200 L100 150 L45 200 L65 120 L0 75 L80 75 Z" />
    </svg>
  );
}