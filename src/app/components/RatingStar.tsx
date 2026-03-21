/**
 * Sharp, pointed 5-star rating icon for rating displays.
 * Unlike lucide's Star (which has rounded stroke-linejoin), this has crisp pointed tips.
 * Uses fill="currentColor" so Tailwind color classes like text-goat-gold work directly.
 */
export function RatingStar({ className = '', size = 16 }: { className?: string; size?: number | string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Renders a row of filled rating stars. */
export function RatingStars({ rating = 5, max = 5, size = 16, className = '' }: {
  rating?: number;
  max?: number;
  size?: number | string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: max }, (_, i) => (
        <RatingStar
          key={i}
          size={size}
          className={i < rating ? 'text-goat-gold' : 'text-goat-silver/30'}
        />
      ))}
    </span>
  );
}
