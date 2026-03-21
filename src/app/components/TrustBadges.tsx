import { Star } from 'lucide-react';

const trustPlatforms = [
  {
    name: 'Google',
    logo: '/images/trust/google-wordmark.svg',
    rating: 4.9,
    reviewCount: 287,
    logoHeight: 'h-7',
  },
  {
    name: 'Nextdoor',
    logo: '/images/trust/nextdoor-logo.png',
    rating: 5.0,
    reviewCount: 133,
    logoHeight: 'h-6',
  },
  {
    name: 'Facebook',
    logo: '/images/trust/facebook-wordmark.png',
    rating: 5.0,
    reviewCount: 47,
    logoHeight: 'h-7',
  },
];

const partnerBrands = [
  { name: 'LiftMaster', logo: '/images/trust/liftmaster-logo.jpg', logoHeight: 'h-8' },
  { name: 'Chamberlain', logo: '/images/trust/chamberlain-logo.png', logoHeight: 'h-8' },
  { name: 'myQ', logo: '/images/trust/myq-logo.svg', logoHeight: 'h-7' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < Math.floor(rating)
              ? 'text-goat-gold fill-goat-gold'
              : 'text-goat-gold/30'
          }`}
        />
      ))}
    </div>
  );
}

export function TrustBadges() {
  return (
    <div className="py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        {/* Review Platforms */}
        <div className="text-center mb-8">
          <p
            className="text-goat-navy/50 text-xs tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase' }}
          >
            Trusted by homeowners across NW Houston
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {trustPlatforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-2">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className={`${platform.logoHeight} object-contain`}
                  loading="lazy"
                />
                <div className="flex items-center gap-2">
                  <StarRating rating={platform.rating} />
                  <span className="text-goat-navy-dark text-sm" style={{ fontWeight: 700 }}>
                    {platform.rating}
                  </span>
                  <span className="text-goat-navy/40 text-xs">
                    ({platform.reviewCount})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider max-w-md mx-auto my-8" />

        {/* Partner Brands */}
        <div className="text-center">
          <p
            className="text-goat-navy/40 text-xs tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase' }}
          >
            Authorized dealer &amp; installer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partnerBrands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logo}
                alt={brand.name}
                className={`${brand.logoHeight} object-contain`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
