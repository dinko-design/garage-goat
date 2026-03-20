import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { serviceAreas, services, companyInfo, reviews, getRelatedBlogPosts, getRelatedOffers } from '../../data/cms';
import { MapPin, CheckCircle2, Phone, Star, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { buildServiceAreaSchema } from '../../data/structured-data';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedBlogs, RelatedOffers } from '../components/RelatedContent';

export function ServiceAreaDetail({ slug: propSlug }: { slug?: string }) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug;
  const area = serviceAreas.find(a => a.slug === slug);

  if (!area) {
    return <Navigate to="/404" replace />;
  }

  const areaReviews = reviews.filter(r => r.city.includes(area.cityName.split(',')[0]));
  const relatedServices = services.filter(s => area.relatedServiceIds.includes(s.id));
  const relatedBlogs = getRelatedBlogPosts(area.relatedBlogIds);
  const relatedOffers = getRelatedOffers(area.relatedOfferIds);

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        path={`/${area.slug}`}
        jsonLd={buildServiceAreaSchema(area)}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-goat-navy-deep to-goat-navy-dark" />
        <div className="absolute top-10 right-10 text-goat-red/5 text-[200px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Service Areas' },
              { label: area.cityName }
            ]}
          />
          <div className="inline-flex items-center justify-center gap-2 bg-goat-red/20 text-goat-red-light border border-goat-red/30 px-4 py-1.5 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Serving {area.cityName}
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05 }}
          >
            <span className="text-goat-red">{area.h1Title}</span>
          </h1>
          <p className="text-xl text-goat-ice/80 mb-8 max-w-2xl mx-auto">{area.introParagraph}</p>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-4 rounded transition-all shadow-lg shadow-goat-teal/30"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
          >
            <Phone className="w-5 h-5" />
            Call for Service in {area.cityName.split(',')[0]}
          </a>
        </div>
        <div className="h-1.5 bg-goat-red absolute bottom-0 left-0 right-0" />
      </div>

      <div className="py-16 bg-goat-cream relative noise-overlay-light">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Area Info Card */}
            <div className="bg-white p-8 rounded-lg border border-goat-cream-dark mb-12">
              <h2
                className="text-2xl text-goat-navy-dark mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Local Garage Door Experts in <span className="text-goat-red">{area.cityName}</span>
              </h2>
              <div className="text-goat-navy/40 text-sm mb-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Last updated: March 2026
              </div>
              <div className="cms-content" dangerouslySetInnerHTML={{ __html: area.areaContent }} />
              <p className="text-goat-navy/60 mb-6 leading-relaxed">
                Whether you live near the town center or out in the suburbs, our technicians are just a phone call away.
                We understand the specific needs of homes in {area.cityName.split(',')[0]}, from style preferences to weather-related wear and tear.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: MapPin, text: `Local to ${area.cityName.split(',')[0]}` },
                  { icon: Clock, text: 'Fast Response Times' },
                  { icon: ShieldCheck, text: 'Licensed & Insured' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-goat-cream p-3 rounded border border-goat-cream-dark">
                    <item.icon className="w-5 h-5 text-goat-red flex-shrink-0" />
                    <span className="text-goat-navy-dark text-sm" style={{ fontWeight: 600 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services for this area */}
            <h2
              className="text-xl text-goat-navy-dark mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Services We Provide in {area.cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {services.map(service => (
                <Link
                  key={service.id}
                  to={`/${service.slug}`}
                  className="flex items-center gap-4 p-4 bg-white border border-goat-cream-dark rounded-lg hover:border-goat-red/30 transition-all group grit-card"
                >
                  <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 border-2 border-goat-cream-dark group-hover:border-goat-red/30 transition-colors">
                    <OptimizedImage src={service.image} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="text-goat-navy-dark group-hover:text-goat-red transition-colors" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                      {service.name}
                    </div>
                    <div className="text-xs text-goat-navy/50">Available in {area.cityName}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red ml-auto transition-colors" />
                </Link>
              ))}
            </div>

            {/* Related Blog Posts — contextual for the area */}
            {relatedBlogs.length > 0 && (
              <div className="mb-12">
                <RelatedBlogs posts={relatedBlogs} title={`Tips for ${area.cityName.split(',')[0]} Homeowners`} />
              </div>
            )}

            {/* Related Offers — contextual for the area */}
            {relatedOffers.length > 0 && (
              <div className="mb-12 bg-white p-6 rounded-lg border border-goat-cream-dark">
                <RelatedOffers offers={relatedOffers} title={`Deals in ${area.cityName.split(',')[0]}`} />
              </div>
            )}

            {/* Area Reviews */}
            {areaReviews.length > 0 && (
              <div className="mb-12">
                <h2
                  className="text-xl text-goat-navy-dark mb-6 text-center"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Reviews from {area.cityName.split(',')[0]}
                </h2>
                <div className="space-y-4">
                  {areaReviews.map(review => (
                    <div key={review.id} className="bg-white p-6 rounded-lg border border-goat-cream-dark">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />
                        ))}
                      </div>
                      <p className="text-goat-navy/80 italic mb-3">"{review.text}"</p>
                      <div className="text-sm text-goat-navy/50">— {review.reviewerName}, {review.serviceUsed}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other service areas */}
            <div className="bg-goat-navy-dark rounded-lg p-8 text-center text-white relative overflow-hidden noise-overlay">
              <div className="relative z-10">
                <h2
                  className="text-xl mb-4"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  We Also Serve
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {serviceAreas.filter(a => a.id !== area.id).map(otherArea => (
                    <Link
                      key={otherArea.id}
                      to={`/${otherArea.slug}`}
                      className="flex items-center gap-1 bg-goat-navy hover:bg-goat-red text-goat-ice hover:text-white px-4 py-2 rounded-full text-sm transition-all"
                    >
                      <MapPin className="w-3 h-3" /> {otherArea.cityName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}