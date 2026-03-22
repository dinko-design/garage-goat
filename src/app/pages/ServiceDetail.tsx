import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { services, offers, companyInfo, serviceAreas, getRelatedBlogPosts, getRelatedOffers, getRelatedAreas } from '../../data/cms';
import { CheckCircle2, Phone, Calendar, ArrowRight, Star, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedServices, RelatedBlogs, RelatedOffers, RelatedAreas } from '../components/RelatedContent';
import { HeroLeadForm } from '../components/HeroLeadForm';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { buildServiceSchema, buildFAQPageSchema } from '../../data/structured-data';
import { TrustStrip } from '../components/TrustBadges';

export function ServiceDetail({ slug: propSlug }: { slug?: string }) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = services.filter(s => service.relatedServiceIds.includes(s.id));
  const relatedBlogs = getRelatedBlogPosts(service.relatedBlogIds);
  const relatedOffers = getRelatedOffers(service.relatedOfferIds);
  const relatedAreas = getRelatedAreas(service.id);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/${service.slug}`}
        ogImage={service.image}
        jsonLd={[
          buildServiceSchema(service),
          ...(service.faqs.length > 0 ? [buildFAQPageSchema(service.faqs)] : []),
        ]}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <OptimizedImage src={service.image} alt={service.name} className="w-full h-full object-cover opacity-15" loading="eager" sizes="100vw" width={1080} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-goat-navy-deep via-goat-navy-deep/70 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Services', href: '/services/' },
              { label: service.name }
            ]}
          />
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left — Copy */}
            <div className="flex-1 min-w-0">
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl mb-6 text-white"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05 }}
              >
                {service.h1Title}
              </h1>
              <p className="text-lg lg:text-xl text-goat-ice/80 mb-8 max-w-xl leading-relaxed">{service.introParagraph}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </a>
                <Link
                  to="/contact/"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded transition-all flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Online
                </Link>
              </div>
            </div>

            {/* Right — Lead Form */}
            <div className="w-full lg:w-[360px] flex-shrink-0">
              <HeroLeadForm
                preselectedService={service.id}
                offer={relatedOffers[0]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Content + Sidebar */}
      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="text-goat-navy/40 text-sm mb-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Last updated: March 2026
              </div>
              <div
                className="cms-content bg-white p-8 rounded-lg border border-goat-cream-dark"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="mt-10">
                  <h3
                    className="text-2xl text-goat-navy-dark mb-6"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg border border-goat-cream-dark">
                        <h4 className="text-goat-navy-dark mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                          {faq.question}
                        </h4>
                        <p className="text-goat-navy/70 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="mt-10">
                  <RelatedServices services={relatedServices} />
                </div>
              )}

              {/* Related Blog Posts */}
              {relatedBlogs.length > 0 && (
                <div className="mt-10">
                  <RelatedBlogs posts={relatedBlogs} title="Helpful Articles" />
                </div>
              )}

              {/* Related Offers */}
              {relatedOffers.length > 0 && (
                <div className="mt-10 bg-white p-6 rounded-lg border border-goat-cream-dark">
                  <RelatedOffers offers={relatedOffers} title="Save on This Service" />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">

                {/* CTA Card */}
                <div className="bg-goat-red rounded-lg p-7 text-white shadow-xl shadow-goat-red/20 relative overflow-hidden noise-overlay">
                  <div className="relative z-10">
                    <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                      {service.ctaHeadline}
                    </h3>
                    <p className="opacity-90 text-sm mb-5">Our team is ready to help you now. Fast, reliable, affordable.</p>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="block w-full bg-white text-goat-red text-center py-3 rounded transition-colors mb-3 flex items-center justify-center gap-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                    >
                      <Phone className="w-5 h-5" /> Call Now
                    </a>
                    <Link
                      to="/contact/"
                      className="block w-full bg-goat-red-dark hover:bg-goat-red-dark/80 text-white text-center py-3 rounded transition-colors flex items-center justify-center gap-2 border border-white/20"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                    >
                      <Calendar className="w-5 h-5" /> Book Online
                    </Link>
                  </div>
                </div>

                {/* Offer Card */}
                {relatedOffers[0] && (
                  <div className="bg-goat-navy-deep rounded-lg p-7 text-white border-2 border-dashed border-goat-navy relative overflow-hidden noise-overlay">
                    <div className="text-center relative z-10">
                      <div className="text-xs text-goat-red uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        ★ Special Offer ★
                      </div>
                      <div className="text-4xl text-white mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {relatedOffers[0].discountAmount}
                      </div>
                      <div className="text-goat-ice/80 mb-5 text-sm">{relatedOffers[0].title}</div>
                      <Link
                        to={`/${relatedOffers[0].slug}/`}
                        className="block w-full bg-goat-navy hover:bg-goat-navy-light text-white text-center py-3 rounded transition-colors"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                      >
                        Claim This Offer
                      </Link>
                      <div className="text-xs text-goat-ice/40 mt-3">{relatedOffers[0].disclaimer}</div>
                    </div>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="bg-white rounded-lg p-6 border border-goat-cream-dark">
                  <h4 className="text-goat-navy-dark text-sm mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Why Choose Garage Goat?
                  </h4>
                  <ul className="space-y-3">
                    {['Same Day Service', 'Licensed & Insured', '5-Star Google Reviews', 'Warranty on Parts & Labor', 'No Hidden Fees'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-goat-navy/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-goat-red flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Branded Image */}
                <div className="rounded-lg overflow-hidden border border-goat-cream-dark">
                  <img
                    src="/images/brand/cesar-workshop.jpg"
                    alt="Cesar Salazar, owner of Garage Goat in Cypress, TX"
                    className="w-full h-52 object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Google Map */}
                <GoogleMapEmbed height={200} variant="sidebar" />

                {/* Service Areas (contextual) */}
                {relatedAreas.length > 0 && (
                  <div className="bg-goat-cream rounded-lg p-6 border border-goat-cream-dark">
                    <RelatedAreas areas={relatedAreas} title={`${service.name} Available In`} />
                  </div>
                )}

                {/* Sidebar Blog Links */}
                {relatedBlogs.length > 0 && (
                  <div className="bg-white rounded-lg p-6 border border-goat-cream-dark">
                    <RelatedBlogs posts={relatedBlogs} variant="compact" title="Learn More" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}