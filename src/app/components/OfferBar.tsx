import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { X, Tag, ChevronRight } from 'lucide-react';
import type { Offer } from '../../data/cms';

const STORAGE_KEY = 'offer-bar-dismissed';

export function OfferBar({ offer }: { offer: Offer }) {
  const [dismissed, setDismissed] = useState(true); // start hidden, check storage on mount
  const location = useLocation();

  useEffect(() => {
    // Don't show if previously dismissed this session
    try {
      setDismissed(sessionStorage.getItem(STORAGE_KEY) === 'true');
    } catch {
      setDismissed(false);
    }
  }, []);

  // Don't show on offers pages
  if (dismissed) return null;
  if (location.pathname === '/offers/' || location.pathname === '/offers' || location.pathname === `/${offer.slug}/` || location.pathname === `/${offer.slug}`) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch { /* ignore */ }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-goat-red shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-slide-up"
    >
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Offer content */}
        <Link
          to={`/${offer.slug}/`}
          className="flex items-center gap-3 flex-1 min-w-0 group"
        >
          <Tag className="w-4 h-4 text-white/80 flex-shrink-0" />
          <span className="text-white text-sm sm:text-base truncate" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            <span className="uppercase">{offer.discountAmount}</span>
            <span className="hidden sm:inline text-white/80 font-normal"> — {offer.title}</span>
          </span>
          <span
            className="hidden md:inline-flex items-center gap-1 bg-white text-goat-red px-4 py-1.5 rounded text-xs uppercase tracking-wide flex-shrink-0 group-hover:bg-goat-cream transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Claim Offer <ChevronRight className="w-3 h-3" />
          </span>
        </Link>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="text-white/60 hover:text-white p-1 flex-shrink-0 transition-colors"
          aria-label="Dismiss offer banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
