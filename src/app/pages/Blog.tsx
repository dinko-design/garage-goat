import React from 'react';
import { Link } from 'react-router';
import { blogPosts, companyInfo, services, offers } from '../../data/cms';
import { ArrowRight, Calendar, Phone, Tag, Wrench } from 'lucide-react';
import { RelatedOffers } from '../components/RelatedContent';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TrustStrip } from '../components/TrustBadges';

export function Blog() {
  return (
    <>
      <SEO
        title="Garage Door Tips & Blog | Garage Goat — Cypress, TX"
        description="Expert garage door tips, maintenance guides, and industry insights from Garage Goat in Cypress, TX."
        path="/blog"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <Breadcrumbs variant="dark" center items={[{ label: 'Blog' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Garage Door <span className="text-goat-red">Blog</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto">
            Expert tips, maintenance guides, and cost breakdowns from the G.O.A.T. of garage doors.
          </p>
        </div>
      </div>

      <TrustStrip />

      {/* Blog Grid */}
      <div className="bg-goat-cream py-16 lg:py-24 relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}/`}
                className="group bg-white rounded-lg overflow-hidden flex flex-col h-full border border-goat-cream-dark hover:border-goat-navy/20 grit-card"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-goat-navy-deep/20 group-hover:bg-goat-navy-deep/0 transition-colors z-10" />
                  <OptimizedImage src={post.featuredImage} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-7 flex flex-col flex-grow border-t-4 border-goat-red">
                  <div className="flex items-center gap-2 text-goat-navy/50 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2
                    className="text-xl text-goat-navy-dark group-hover:text-goat-red transition-colors mb-3"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-goat-navy/60 text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-goat-red text-sm group-hover:translate-x-2 transition-transform" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Browse by Topic */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
              <h3
                className="text-goat-navy-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Browse by Topic
              </h3>
              <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-white text-goat-navy-dark px-4 py-2 rounded-full text-sm border border-goat-cream-dark"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  <Tag className="w-3.5 h-3.5 text-goat-red" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
              <h3
                className="text-goat-navy-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Popular Services
              </h3>
              <div className="gradient-divider flex-grow" style={{ maxWidth: 40 }} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}/`}
                  className="group flex items-center gap-3 bg-white p-4 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors"
                >
                  <Wrench className="w-4 h-4 text-goat-red flex-shrink-0" />
                  <span
                    className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {service.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-goat-navy/30 group-hover:text-goat-red transition-colors ml-auto flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Current Offers */}
          <div className="mt-16 max-w-5xl mx-auto bg-white p-6 rounded-lg border border-goat-cream-dark">
            <RelatedOffers offers={offers} title="Current Offers" />
          </div>

          {/* CTA */}
          <div className="mt-16 bg-goat-navy-dark rounded-lg p-8 md:p-12 text-center text-white max-w-3xl mx-auto relative overflow-hidden noise-overlay">
            <div className="relative z-10">
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Have a Garage Door Question?
              </h2>
              <p className="text-goat-ice/70 mb-8 max-w-xl mx-auto">
                Our experts are happy to answer questions over the phone — no obligation, no pressure.
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