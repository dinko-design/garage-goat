import { Star, ShieldCheck, Award, BadgeCheck, ThumbsUp } from 'lucide-react';

/* ── Platform icon map — maps platform key → small icon path ── */

const platformIcons: Record<string, { icon: string; label: string }> = {
  google: { icon: '/images/trust/google-icon.svg', label: 'Google' },
  facebook: { icon: '/images/trust/facebook-icon.svg', label: 'Facebook' },
  nextdoor: { icon: '/images/trust/nextdoor-icon.svg', label: 'Nextdoor' },
};

const trustPlatforms = [
  {
    name: 'Google',
    logo: '/images/trust/google-wordmark.svg',
    rating: 4.9,
    reviewCount: 287,
    logoHeight: 'h-7',
    logoHeightCompact: 'h-5',
    width: 80,
    height: 28,
  },
  {
    name: 'Nextdoor',
    logo: '/images/trust/nextdoor-logo.png',
    rating: 5.0,
    reviewCount: 133,
    logoHeight: 'h-6',
    logoHeightCompact: 'h-4',
    width: 100,
    height: 24,
  },
  {
    name: 'Facebook',
    logo: '/images/trust/facebook-wordmark.png',
    rating: 5.0,
    reviewCount: 47,
    logoHeight: 'h-7',
    logoHeightCompact: 'h-5',
    width: 100,
    height: 28,
  },
];

const partnerBrands = [
  { name: 'LiftMaster', logo: '/images/trust/liftmaster-logo.jpg', logoHeight: 'h-8', logoHeightCompact: 'h-6', width: 120, height: 32 },
  { name: 'Chamberlain', logo: '/images/trust/chamberlain-logo.png', logoHeight: 'h-8', logoHeightCompact: 'h-6', width: 120, height: 32 },
  { name: 'myQ', logo: '/images/trust/myq-logo.svg', logoHeight: 'h-7', logoHeightCompact: 'h-5', width: 60, height: 28 },
];

const certifications = [
  { name: 'BBB A+ Rated', icon: ShieldCheck },
  { name: 'Angi Certified', icon: Award },
  { name: 'HomeAdvisor', icon: BadgeCheck },
  { name: 'Yelp Verified', icon: ThumbsUp },
];

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${
            i < Math.floor(rating)
              ? 'text-goat-gold fill-goat-gold'
              : 'text-goat-gold/30'
          }`}
        />
      ))}
    </div>
  );
}

/* ── Full TrustBadges — used on Homepage ───────────────────────── */

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
                  width={platform.width}
                  height={platform.height}
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

        {/* Partner Brands + Certifications */}
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
                width={brand.width}
                height={brand.height}
                loading="lazy"
              />
            ))}
          </div>

          {/* Certifications row */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-1.5 bg-goat-cream border border-goat-cream-dark px-3 py-1.5 rounded-full"
              >
                <cert.icon className="w-3.5 h-3.5 text-goat-navy/50" />
                <span className="text-goat-navy/60 text-xs" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Compact TrustStrip — used on landing pages ────────────────── */

export function TrustStrip() {
  return (
    <div className="py-5 bg-white border-b border-goat-cream-dark relative overflow-hidden">
      <div className="absolute inset-0 texture-concrete opacity-[0.3] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">

          {/* Review Ratings — inline */}
          <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-6">
            {trustPlatforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className={`${platform.logoHeightCompact} object-contain`}
                  width={platform.width}
                  height={platform.height}
                  loading="lazy"
                />
                <StarRating rating={platform.rating} size="sm" />
                <span className="text-goat-navy-dark text-xs" style={{ fontWeight: 700 }}>
                  {platform.rating}
                </span>
                <span className="text-goat-navy/30 text-[10px]">
                  ({platform.reviewCount})
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-8 w-px bg-goat-cream-dark mx-6" />
          <div className="lg:hidden w-full max-w-xs h-px bg-goat-cream-dark" />

          {/* Partners + Certs — inline */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-5">
            {partnerBrands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logo}
                alt={brand.name}
                className={`${brand.logoHeightCompact} object-contain opacity-50 grayscale`}
                width={brand.width}
                height={brand.height}
                loading="lazy"
              />
            ))}
            <div className="hidden lg:block h-6 w-px bg-goat-cream-dark mx-1" />
            {certifications.slice(0, 3).map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-1 text-goat-navy/40"
              >
                <cert.icon className="w-3 h-3" />
                <span className="text-[10px]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PlatformBadge — small inline badge for individual review cards ── */

export function PlatformBadge({ platform }: { platform: string }) {
  const info = platformIcons[platform];
  if (!info) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-goat-navy/50 text-xs">
      <img src={info.icon} alt={info.label} className="w-3.5 h-3.5" width={14} height={14} loading="lazy" />
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{info.label}</span>
    </span>
  );
}

/* ── TrustSidebar — vertical/compact version for sidebar columns ── */

export function TrustSidebar() {
  return (
    <div className="bg-white rounded-lg border border-goat-cream-dark p-6 space-y-6">
      <div>
        <p
          className="text-goat-navy/40 text-xs tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase' }}
        >
          Verified Ratings
        </p>
        <div className="space-y-3">
          {trustPlatforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-3">
              <img
                src={platform.logo}
                alt={platform.name}
                className={`${platform.logoHeightCompact} object-contain`}
                loading="lazy"
              />
              <div className="flex items-center gap-1.5">
                <StarRating rating={platform.rating} size="sm" />
                <span className="text-goat-navy-dark text-xs" style={{ fontWeight: 700 }}>
                  {platform.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-goat-cream-dark" />

      <div>
        <p
          className="text-goat-navy/40 text-xs tracking-widest mb-3"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase' }}
        >
          Partners
        </p>
        <div className="grid grid-cols-3 gap-3">
          {partnerBrands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-6 object-contain opacity-60 grayscale"
              width={brand.width}
              height={brand.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-goat-cream-dark" />

      <div className="space-y-2">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex items-center gap-1.5 text-goat-navy/50">
            <cert.icon className="w-3.5 h-3.5" />
            <span className="text-xs" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TrustMini — ultra-compact single-line for tight spaces ── */

export function TrustMini() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-goat-navy/60">
      {trustPlatforms.map((platform, idx) => (
        <span key={platform.name} className="inline-flex items-center gap-1.5">
          <img src={platformIcons[platform.name.toLowerCase()]?.icon} alt="" className="w-3.5 h-3.5" width={14} height={14} loading="lazy" />
          <span style={{ fontWeight: 700 }} className="text-goat-navy-dark">{platform.rating}</span>
          <Star className="w-2.5 h-2.5 text-goat-gold fill-goat-gold" />
          <span>{platform.name}</span>
          {idx < trustPlatforms.length - 1 && <span className="text-goat-navy/20 ml-2">|</span>}
        </span>
      ))}
    </div>
  );
}

/* ── PlatformLogosRow — row of platform logos with ratings for hero sections ── */

export function PlatformLogosRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
      {trustPlatforms.map((platform) => (
        <div key={platform.name} className="flex items-center gap-2.5">
          <img
            src={platformIcons[platform.name.toLowerCase()]?.icon}
            alt={platform.name}
            className="w-6 h-6"
            width={24}
            height={24}
            loading="lazy"
          />
          <div className="flex items-center gap-1.5">
            <StarRating rating={platform.rating} size="sm" />
            <span className="text-white text-sm" style={{ fontWeight: 700 }}>
              {platform.rating}
            </span>
            <span className="text-white/40 text-xs">
              ({platform.reviewCount})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
