import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

/**
 * Generates srcSet for Unsplash images by appending width params.
 * Returns undefined for non-Unsplash (local/data) URLs.
 */
function buildUnsplashSrcSet(src: string): string | undefined {
  if (!src.includes('images.unsplash.com')) return undefined;

  const widths = [400, 800, 1200, 1600];
  return widths
    .map(w => {
      // Replace existing &w= param or append one
      const url = src.includes('&w=')
        ? src.replace(/&w=\d+/, `&w=${w}`)
        : `${src}&w=${w}`;
      return `${url} ${w}w`;
    })
    .join(', ');
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

  const srcSet = buildUnsplashSrcSet(src);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      className={className}
      style={style}
      onError={() => setDidError(true)}
      {...rest}
    />
  );
}
