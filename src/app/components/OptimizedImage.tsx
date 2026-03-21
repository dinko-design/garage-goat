import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

/** Derive WebP path from a JPEG/PNG public path */
function getWebPSrc(src: string): string | null {
  if (!src.startsWith('/')) return null;
  const match = src.match(/\.(jpe?g|png)$/i);
  if (!match) return null;
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string;
  /** Alt text (required for a11y) */
  alt: string;
  /** Explicit width for CLS prevention */
  width?: number | string;
  /** Explicit height for CLS prevention */
  height?: number | string;
  /** Loading strategy — 'eager' for above-the-fold / LCP images */
  loading?: 'lazy' | 'eager';
  /** Fetch priority — 'high' for hero/LCP images */
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Responsive sizes hint for srcset */
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className,
  style,
  ...rest
}: OptimizedImageProps) {
  const [didError, setDidError] = useState(false);
  const webpSrc = getWebPSrc(src);

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={src} />
        </div>
      </div>
    );
  }

  const imgProps = {
    alt,
    width,
    height,
    loading,
    decoding: 'async' as const,
    fetchPriority,
    className,
    style,
    onError: () => setDidError(true),
    ...rest,
  };

  // Use <picture> for WebP with JPEG/PNG fallback when a public path is available
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img src={src} sizes={sizes} {...imgProps} />
      </picture>
    );
  }

  return <img src={src} sizes={sizes} {...imgProps} />;
}
