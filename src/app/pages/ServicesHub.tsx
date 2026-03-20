import React from 'react';
import { Link } from 'react-router';
import { services, companyInfo, serviceAreas, blogPosts } from '../../data/cms';
import { ArrowRight, Phone, Star, MapPin, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function ServicesHub() {
  return (
    <>
      <SEO
        title="Garage Door Services | Garage Goat — Cypress, TX"
        description="Comprehensive garage door services including repair, installation, springs, openers, and 24/7 emergency service in Cypress, TX."
        path="/services"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative noise-overlay">
        <div className="container mx-auto text-center relative z-10">
          <Breadcrumbs variant="dark" items={[{ label: 'Services' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Our <span className="text-goat-red">Services</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto">
            Professional garage door solutions for every need — from emergency repairs to brand new installations.
          </p>
        </div>
        <div className="h-1.5 bg-goat-red absolute bottom-0 left-0 right-0" />
      </div>

      {/* Services Grid */}
      <div className="bg-goat-cream py-16 lg:py-24 relative noise-overlay-light">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden flex flex-col h-full border border-goat-cream-dark hover:border-goat-navy/20 grit-card"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-goat-navy-deep/20 group-hover:bg-goat-navy-deep/0 transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-goat-navy-deep/50 to-transparent z-10" />
                  <OptimizedImage src={service.image} alt={service.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-7 flex flex-col flex-grow border-t-4 border-goat-red">
                  <h3
                    className="text-xl text-goat-navy-dark group-hover:text-goat-red transition-colors mb-3"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-goat-navy/60 text-sm mb-6 flex-grow leading-relaxed">
                    {service.introParagraph}
                  </p>
                  <div className="flex items-center text-goat-red text-sm group-hover:translate-x-2 transition-transform" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Cross-reference: Service Areas */}
          <div className="mt-16 bg-white rounded-lg p-8 border border-goat-cream-dark">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <h3
                  className="text-goat-navy-dark mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Serving <span className="text-goat-red">5 Cities</span> Across NW Houston
                </h3>
                <p className="text-goat-navy/60 text-sm">All of our services are available across our full service area.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {serviceAreas.map(area => (
                  <Link
                    key={area.id}
                    to={`/${area.slug}`}
                    className="flex items-center gap-1 text-sm bg-goat-cream text-goat-navy-dark hover:text-goat-red px-3 py-1.5 rounded border border-goat-cream-dark transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-goat-red" /> {area.cityName}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Cross-reference: Blog Posts */}
          {blogPosts.length > 0 && (
            <div className="mt-8 bg-white rounded-lg p-8 border border-goat-cream-dark">
              <h3
                className="text-goat-navy-dark mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Helpful Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.slice(0, 4).map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-3 p-3 rounded hover:bg-goat-cream transition-colors group"
                  >
                    <FileText className="w-5 h-5 text-goat-red flex-shrink-0" />
                    <div>
                      <div className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                        {post.title}
                      </div>
                      <div className="text-xs text-goat-navy/40">{post.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 bg-goat-navy-dark rounded-lg p-8 md:p-12 text-center text-white relative overflow-hidden noise-overlay">
            <div className="relative z-10">
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Not Sure What You Need?
              </h2>
              <p className="text-goat-ice/70 mb-8 max-w-xl mx-auto">
                Call us and describe the issue. We'll diagnose it over the phone when possible and give you an honest recommendation — no pressure, no upsells.
              </p>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-4 rounded transition-all shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}