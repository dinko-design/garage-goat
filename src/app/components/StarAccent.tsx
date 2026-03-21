import React from 'react';
import { BrandStar } from './BrandStar';

/**
 * Star divider — the Garage Goat signature accent.
 * Used between sections and above headings for that Americana tradesman feel.
 */
export function StarDivider({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const lineWidths = { sm: 'w-10', md: 'w-16', lg: 'w-24' };
  const starSizes = { sm: 12, md: 16, lg: 22 };
  const lineHeight = { sm: 'h-px', md: 'h-[2px]', lg: 'h-[2px]' };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`${lineHeight[size]} ${lineWidths[size]} bg-current opacity-20`} />
      <BrandStar size={starSizes[size]} />
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
      <BrandStar size={10} className="opacity-40" />
      <BrandStar size={16} />
      <BrandStar size={10} className="opacity-40" />
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
      <BrandStar size={14} className="mt-1" />
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
  const starSizes = { sm: 14, md: 20, lg: 28 };
  const borderWidth = { sm: 'border', md: 'border-2', lg: 'border-[3px]' };

  return (
    <div className={`inline-flex items-center justify-center ${dims[size]} rounded-full ${borderWidth[size]} border-goat-navy/20 bg-goat-navy-deep/5 ${className}`}>
      <BrandStar size={starSizes[size]} />
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
 * Shield Star — uses the brand star as a background watermark.
 * Purely decorative, used as a background watermark.
 */
export function ShieldStarWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.08 }}
    >
      <path d="M35.991,53.554l-14.668,10.614-6.873,4.984,4.189-13.06,3.942-12.313-10.412-7.555L1.089,28.185l26.69-.024,6.793-21.003,1.424-4.359,4.977,15.23,3.263,10.142,24.497-.005c.767-.009,1.389-.068,2.177.03l-21.479,15.588,8.166,25.42-13.43-9.737-8.177-5.912ZM28.006,28.253l7.861,10.211.008-34.441c-.434.983-.676,1.979-1.009,3.027l-6.86,21.204ZM40.431,32.852l3.555-4.665-4.986-15.391-2.84-8.524-.02,27.41-.002,6.629c.21-.071.304-.211.425-.369l3.869-5.09Z" />
    </svg>
  );
}
