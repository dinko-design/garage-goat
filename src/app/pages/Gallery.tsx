import React, { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Camera, X, MapPin, Wrench, ArrowRight } from 'lucide-react';
import { companyInfo, services, serviceAreas } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';
import { OptimizedImage } from '../components/OptimizedImage';

const galleryItems = [
  {
    id: 1,
    title: 'Custom Cedar Door Installation',
    category: 'New Doors',
    location: 'Cypress, TX',
    src: '/images/real/custom-cedar-door.jpg',
  },
  {
    id: 2,
    title: 'Chamberlain Opener Install',
    category: 'Repairs',
    location: 'Cypress, TX',
    src: '/images/real/chamberlain-opener-truck.jpg',
  },
  {
    id: 3,
    title: 'Torsion Spring Replacement',
    category: 'Repairs',
    location: 'Tomball, TX',
    src: '/images/real/new-spring-installed.jpg',
  },
  {
    id: 4,
    title: 'Smart Opener Upgrade',
    category: 'Repairs',
    location: 'Spring, TX',
    src: '/images/real/chamberlain-opener-lit.jpg',
  },
  {
    id: 5,
    title: 'Roller Replacement — Old vs New',
    category: 'Repairs',
    location: 'Cypress, TX',
    src: '/images/real/rollers-old-vs-new.jpg',
  },
  {
    id: 6,
    title: 'Two-Car Garage Upgrade',
    category: 'New Doors',
    location: 'Spring, TX',
    src: '/images/stock/exterior-three-bay.jpg',
  },
  {
    id: 7,
    title: 'Modern Flush Panel Door',
    category: 'New Doors',
    location: 'The Woodlands, TX',
    src: '/images/stock/exterior-two-white-blue.jpg',
  },
  {
    id: 8,
    title: 'Curb Appeal Transformation',
    category: 'New Doors',
    location: 'Cypress, TX',
    src: '/images/stock/exterior-modern-dusk.jpg',
  },
];

const categories = ['All', ...Array.from(new Set(galleryItems.map(g => g.category)))];

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(g => g.category === filter);

  return (
    <span className="contents">
      <SEO
        title="Project Gallery | Garage Goat Garage Doors — Cypress, TX"
        description="Browse our gallery of completed garage door installations and repairs in Cypress, Tomball, The Woodlands, and NW Houston. See the Garage Goat difference."
        path="/gallery"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" items={[{ label: 'Gallery' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Our <span className="text-accent-red">Work</span>
          </h1>
          <p className="text-goat-ice/70 mt-4 max-w-2xl mx-auto">
            Real projects. Real homes. See why our neighbors trust the G.O.A.T. for their garage doors.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-goat-cream-dark py-4">
        <div className="container mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded text-sm transition-all ${
                filter === cat
                  ? 'bg-goat-navy-dark text-white'
                  : 'bg-goat-cream hover:bg-goat-cream-dark text-goat-navy'
              }`}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden border border-goat-cream-dark grit-card cursor-pointer"
                onClick={() => setLightbox(item.id)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <OptimizedImage
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-goat-navy-deep/0 group-hover:bg-goat-navy-deep/30 transition-colors flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-goat-navy/50">{item.location}</span>
                    <span className="text-xs bg-goat-cream text-goat-navy px-2 py-0.5 rounded" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about real photos */}
          <div className="mt-12 text-center">
            <p className="text-goat-navy/40 text-sm italic">
              Mix of real project photos and representative images. More coming soon!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-goat-red rounded-lg p-8 text-center text-white relative overflow-hidden noise-overlay">
            <div className="relative z-10">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                Want Results Like These?
              </h3>
              <p className="text-white/80 mt-2 mb-6">Get a quote for your garage door project.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-white text-goat-red hover:bg-goat-cream px-6 py-3 rounded transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Phone className="w-4 h-4" /> Call for a Quote
                </a>
                <Link
                  to="/contact"
                  className="bg-goat-red-dark hover:bg-goat-red-dark/80 border-2 border-white/30 text-white px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services We Provide */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h2
            className="text-2xl lg:text-3xl text-goat-navy-dark text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
          >
            Services We Provide
          </h2>
          <p className="text-goat-navy/60 text-center max-w-xl mx-auto mb-10">
            From quick repairs to full installations, see what we can do for your garage door.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.slug}`}
                className="group flex items-center gap-4 bg-white p-5 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors"
              >
                <div className="w-10 h-10 bg-goat-cream rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-goat-red/10 transition-colors">
                  <Wrench className="w-5 h-5 text-goat-red" />
                </div>
                <div className="flex-grow min-w-0">
                  <div
                    className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  >
                    {service.name}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Your Neighborhood */}
      <section className="py-16 lg:py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h2
            className="text-2xl lg:text-3xl text-goat-navy-dark mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
          >
            Serving Your Neighborhood
          </h2>
          <p className="text-goat-navy/60 mb-10 max-w-xl mx-auto">
            Local technicians who know the area and can be at your door fast.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.id}
                to={`/${area.slug}`}
                className="group flex items-center gap-2 bg-white hover:bg-goat-red text-goat-navy-dark hover:text-white px-6 py-3 rounded-full transition-all border border-goat-cream-dark hover:border-goat-red shadow-sm hover:shadow-lg hover:shadow-goat-red/20"
              >
                <MapPin className="w-4 h-4 text-goat-red group-hover:text-white transition-colors" />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{area.cityName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (() => {
        const item = galleryItems.find(g => g.id === lightbox);
        if (!item) return null;
        return (
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[85vh]" onClick={e => e.stopPropagation()}>
              <OptimizedImage src={item.src} alt={item.title} className="max-w-full max-h-[80vh] rounded-lg object-contain" loading="eager" sizes="100vw" width={1080} height={810} />
              <div className="text-center mt-4">
                <h3 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{item.title}</h3>
                <p className="text-white/50 text-sm">{item.location} — {item.category}</p>
              </div>
            </div>
          </div>
        );
      })()}
    </span>
  );
}