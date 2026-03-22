import React from 'react';
import { Link } from 'react-router';
import { reviews, companyInfo, services, serviceAreas } from '../../data/cms';
import { Star, Phone, ArrowRight, Quote, Wrench, MapPin } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import { buildReviewsSchema } from '../../data/structured-data';
import { TrustStrip, PlatformBadge, PlatformLogosRow } from '../components/TrustBadges';

function getServiceSlugFromReview(serviceUsed: string): string | null {
  const lower = serviceUsed.toLowerCase();
  if (lower === 'garage door repair') return '/garage-door-repair/';
  if (lower === 'spring repair' || lower === 'spring replacement') return '/garage-door-spring-repair/';
  if (lower === 'opener install' || lower === 'opener repair') return '/garage-door-opener-repair/';
  if (lower === 'new door installation' || lower === 'new door' || lower === 'new garage door') return '/new-garage-doors/';
  if (lower === 'emergency repair' || lower === 'emergency') return '/emergency-garage-door-repair/';
  return null;
}

export function Reviews() {
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <SEO
        title={`Customer Reviews | Garage Goat — ${companyInfo.googleRating}/5 Stars`}
        description={`Read what ${companyInfo.totalReviews}+ customers say about Garage Goat garage door services in Cypress, TX. ${companyInfo.googleRating}-star rated.`}
        path="/reviews"
        jsonLd={buildReviewsSchema(reviews)}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'Reviews' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Customer <span className="text-goat-red">Reviews</span>
          </h1>
          <p className="text-xl text-goat-ice/70 mb-8 max-w-2xl mx-auto">
            We let our work speak for itself. Here's what the people of Cypress, Tomball & The Woodlands have to say.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-8 py-5 border border-white/10">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 text-goat-gold fill-goat-gold" />)}
            </div>
            <div className="text-3xl text-white mb-0.5" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              {companyInfo.googleRating}/5
            </div>
            <div className="text-goat-ice/50 text-sm">Based on {companyInfo.totalReviews}+ Google Reviews</div>
          </div>

          {/* Platform logos row */}
          <div className="mt-8">
            <PlatformLogosRow />
          </div>
        </div>
      </div>

      <TrustStrip />

      {/* Reviews Grid */}
      <div className="bg-goat-cream py-16 lg:py-24 relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-7 rounded-lg border border-goat-cream-dark flex flex-col grit-card">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-goat-red/20 mb-3" />

                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-4 h-4 text-goat-cream-dark" />
                  ))}
                </div>

                <p className="text-goat-navy-dark mb-6 italic flex-grow leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex justify-between items-end border-t border-goat-cream-dark pt-4">
                  <div>
                    <div className="text-goat-navy-dark" style={{ fontWeight: 700 }}>{review.reviewerName}</div>
                    <div className="text-xs text-goat-navy/50 mb-1">{review.city}</div>
                    <PlatformBadge platform={review.platform} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-goat-navy/40 mb-1">{review.date}</div>
                    {getServiceSlugFromReview(review.serviceUsed) ? (
                      <Link
                        to={getServiceSlugFromReview(review.serviceUsed)!}
                        className="text-xs bg-goat-red/10 text-goat-red hover:bg-goat-red/20 px-3 py-1 rounded transition-colors inline-block"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                      >
                        {review.serviceUsed}
                      </Link>
                    ) : (
                      <span className="text-xs bg-goat-red/10 text-goat-red px-3 py-1 rounded inline-block" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                        {review.serviceUsed}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Services */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2
                className="text-2xl lg:text-3xl text-goat-navy-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Our <span className="text-goat-red">Services</span>
              </h2>
            </div>
            <div className="bg-white rounded-lg border border-goat-cream-dark divide-y divide-goat-cream-dark">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}/`}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-goat-cream/50 transition-colors group"
                >
                  <Wrench className="w-4 h-4 text-goat-red flex-shrink-0" />
                  <span
                    className="text-goat-navy-dark group-hover:text-goat-red transition-colors flex-grow"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-10 text-center">
            <h3
              className="text-lg text-goat-navy-dark mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Service <span className="text-goat-red">Areas</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.id}
                  to={`/${area.slug}/`}
                  className="flex items-center gap-1 text-xs bg-white text-goat-navy px-3 py-1.5 rounded hover:text-goat-red transition-colors border border-goat-cream-dark"
                >
                  <MapPin className="w-3 h-3" /> {area.cityName}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-goat-navy-dark rounded-lg p-10 text-white max-w-3xl mx-auto relative overflow-hidden noise-overlay">
              <div className="relative z-10">
                <h2
                  className="text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Want to Be Our Next Happy Customer?
                </h2>
                <p className="text-goat-ice/70 mb-8 max-w-lg mx-auto">
                  Join {companyInfo.totalReviews}+ satisfied homeowners in the Cypress area. Call us now or schedule your service.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-3 rounded transition-all shadow-lg shadow-goat-teal/30"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    <Phone className="w-5 h-5" />
                    {companyInfo.phone}
                  </a>
                  <Link
                    to="/contact/"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded transition-all"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    Schedule Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}