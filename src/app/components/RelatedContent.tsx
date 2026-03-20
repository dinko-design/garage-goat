import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, FileText, MapPin, Tag, Wrench, Calendar } from 'lucide-react';
import type { Service, BlogPost, Offer, ServiceArea } from '../../data/cms';
import { OptimizedImage } from './OptimizedImage';

// --- Related Services Card Row ---
interface RelatedServicesProps {
  services: Service[];
  title?: string;
  variant?: 'card' | 'compact';
}

export function RelatedServices({ services, title = 'Related Services', variant = 'card' }: RelatedServicesProps) {
  if (services.length === 0) return null;

  if (variant === 'compact') {
    return (
      <div>
        <h4
          className="text-goat-navy-dark text-sm mb-3"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {title}
        </h4>
        <div className="space-y-2">
          {services.map(s => (
            <Link
              key={s.id}
              to={`/${s.slug}`}
              className="flex items-center gap-2 text-goat-navy/80 hover:text-goat-red text-sm transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
        <h3
          className="text-goat-navy-dark"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
        >
          {title}
        </h3>
        <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map(rs => (
          <Link
            key={rs.id}
            to={`/${rs.slug}`}
            className="flex items-center gap-4 bg-white p-4 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors group"
          >
            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
              <OptimizedImage src={rs.image} alt={rs.name} className="w-full h-full object-cover" width={64} height={64} sizes="64px" />
            </div>
            <div className="flex-grow">
              <div
                className="text-goat-navy-dark group-hover:text-goat-red transition-colors"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {rs.name}
              </div>
              <div className="text-xs text-goat-navy/50 flex items-center gap-1">
                <ArrowRight className="w-3 h-3" /> View service
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Related Blog Posts ---
interface RelatedBlogsProps {
  posts: BlogPost[];
  title?: string;
  variant?: 'card' | 'compact';
}

export function RelatedBlogs({ posts, title = 'Related Articles', variant = 'card' }: RelatedBlogsProps) {
  if (posts.length === 0) return null;

  if (variant === 'compact') {
    return (
      <div>
        <h4
          className="text-goat-navy-dark text-sm mb-3"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {title}
        </h4>
        <div className="space-y-2">
          {posts.map(p => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="flex items-center gap-2 text-goat-navy/80 hover:text-goat-red text-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
        <h3
          className="text-goat-navy-dark"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
        >
          {title}
        </h3>
        <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map(post => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="flex items-center gap-4 bg-white p-4 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors group"
          >
            <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0">
              <OptimizedImage src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" width={80} height={64} sizes="80px" />
            </div>
            <div className="flex-grow">
              <div
                className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {post.title}
              </div>
              <div className="text-xs text-goat-navy/50 flex items-center gap-1 mt-1">
                <Calendar className="w-3 h-3" /> {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Related Offers ---
interface RelatedOffersProps {
  offers: Offer[];
  title?: string;
}

export function RelatedOffers({ offers, title = 'Current Offers' }: RelatedOffersProps) {
  if (offers.length === 0) return null;

  return (
    <div>
      <h4
        className="text-goat-navy-dark text-sm mb-3"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {title}
      </h4>
      <div className="space-y-2">
        {offers.map(o => (
          <Link
            key={o.id}
            to={`/${o.slug}`}
            className="flex items-center gap-3 bg-goat-cream hover:bg-goat-cream-dark p-3 rounded border border-goat-cream-dark transition-colors group"
          >
            <Tag className="w-4 h-4 text-goat-red flex-shrink-0" />
            <div className="flex-grow">
              <span className="text-goat-navy-dark text-sm group-hover:text-goat-red transition-colors" style={{ fontWeight: 600 }}>
                {o.discountAmount}
              </span>
              <span className="text-goat-navy/50 text-xs ml-2">{o.title}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-goat-navy/30 group-hover:text-goat-red transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Related Service Areas ---
interface RelatedAreasProps {
  areas: ServiceArea[];
  title?: string;
  currentAreaId?: string;
}

export function RelatedAreas({ areas, title = 'Service Areas', currentAreaId }: RelatedAreasProps) {
  const filteredAreas = currentAreaId ? areas.filter(a => a.id !== currentAreaId) : areas;
  if (filteredAreas.length === 0) return null;

  return (
    <div>
      <h4
        className="text-goat-navy-dark text-sm mb-3"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {filteredAreas.map(area => (
          <Link
            key={area.id}
            to={`/${area.slug}`}
            className="flex items-center gap-1 text-xs bg-white text-goat-navy px-3 py-1.5 rounded hover:text-goat-red transition-colors border border-goat-cream-dark"
          >
            <MapPin className="w-3 h-3" /> {area.cityName}
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Full Cross-Reference Section (combines all of the above) ---
interface CrossReferenceSectionProps {
  services?: Service[];
  blogs?: BlogPost[];
  offers?: Offer[];
  areas?: ServiceArea[];
  currentAreaId?: string;
  variant?: 'full' | 'sidebar';
}

export function CrossReferenceSection({
  services = [],
  blogs = [],
  offers: offersList = [],
  areas = [],
  currentAreaId,
  variant = 'full'
}: CrossReferenceSectionProps) {
  const hasContent = services.length > 0 || blogs.length > 0 || offersList.length > 0 || areas.length > 0;
  if (!hasContent) return null;

  if (variant === 'sidebar') {
    return (
      <div className="space-y-6">
        {services.length > 0 && <RelatedServices services={services} variant="compact" />}
        {blogs.length > 0 && <RelatedBlogs posts={blogs} variant="compact" title="Helpful Articles" />}
        {offersList.length > 0 && <RelatedOffers offers={offersList} />}
        {areas.length > 0 && <RelatedAreas areas={areas} currentAreaId={currentAreaId} />}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {services.length > 0 && <RelatedServices services={services} />}
      {blogs.length > 0 && <RelatedBlogs posts={blogs} />}
      {offersList.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-goat-cream-dark">
          <RelatedOffers offers={offersList} title="Save on These Services" />
        </div>
      )}
    </div>
  );
}