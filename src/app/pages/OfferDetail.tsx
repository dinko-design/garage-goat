import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { offers, companyInfo, services, getRelatedServices } from '../../data/cms';
import { Tag, Clock, CheckCircle2, Phone, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";
import { SEO } from '../components/SEO';
import { buildOfferSchema } from '../../data/structured-data';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedServices } from '../components/RelatedContent';
import { TrustStrip } from '../components/TrustBadges';

export function OfferDetail({ slug: propSlug }: { slug?: string }) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug;
  const offer = offers.find(o => o.slug === slug);

  if (!offer) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = getRelatedServices(offer.relatedServiceIds);

  return (
    <>
      <SEO
        title={`${offer.title} | Garage Goat Special Offers`}
        description={offer.headline}
        path={`/${offer.slug}`}
        jsonLd={buildOfferSchema(offer)}
      />

      <div className="bg-goat-navy-deep py-16 lg:py-24 min-h-[60vh] flex items-center justify-center relative overflow-hidden noise-overlay-strong">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        {/* Decorative Stars */}
        <div className="absolute top-20 left-20 text-goat-red/5 text-[200px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>
        <div className="absolute bottom-20 right-20 text-goat-red/5 text-[150px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: 'Offers', href: '/offers' },
                { label: offer.title }
              ]}
            />

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl shadow-goat-navy-deep/50 mt-4">
              {/* Red Banner Top */}
              <div className="bg-goat-red text-white py-3 text-center relative">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 10px)`
                }} />
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <Tag className="w-4 h-4" /> ★ Limited Time Offer ★
                </span>
              </div>

              <div className="p-8 lg:p-12">
                <div className="text-center">
                  {/* Discount Amount */}
                  <div
                    className="text-5xl lg:text-7xl text-goat-red mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {offer.discountAmount}
                  </div>
                  <h1
                    className="text-xl lg:text-2xl text-goat-navy-dark mb-8"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    {offer.headline}
                  </h1>

                  {/* Details */}
                  <div className="bg-goat-cream p-6 rounded-lg border border-goat-cream-dark mb-8 text-left">
                    <h3
                      className="text-goat-navy-dark mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-goat-red" /> What's Included:
                    </h3>
                    <ul className="space-y-2 text-goat-navy/70 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-goat-red mt-1">★</span>
                        Professional diagnosis by licensed technician
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-goat-red mt-1">★</span>
                        Safety inspection of all moving parts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-goat-red mt-1">★</span>
                        Upfront estimate before any work begins
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-goat-red mt-1">★</span>
                        No hidden fees — guaranteed
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 text-sm text-goat-navy/50 border-t border-goat-cream-dark pt-4 mt-4">
                      <Clock className="w-4 h-4" /> {offer.expiration}
                    </div>
                  </div>

                  {/* Related Services for this offer */}
                  {relatedServices.length > 0 && (
                    <div className="bg-goat-cream/50 p-5 rounded-lg border border-goat-cream-dark mb-8 text-left">
                      <h4
                        className="text-goat-navy-dark text-sm mb-3"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        Valid for These Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedServices.map(s => (
                          <Link
                            key={s.id}
                            to={`/${s.slug}`}
                            className="flex items-center gap-1.5 text-sm bg-white text-goat-navy-dark hover:text-goat-red px-3 py-1.5 rounded border border-goat-cream-dark transition-colors"
                          >
                            <span className="text-goat-red text-xs">★</span> {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="block w-full bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep py-4 rounded transition-all shadow-lg shadow-goat-teal/20 flex items-center justify-center gap-2 mb-3"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.1rem' }}
                  >
                    <Phone className="w-5 h-5" />
                    Call {companyInfo.phone} to Claim
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full bg-goat-navy-dark hover:bg-goat-navy text-white py-3 rounded transition-all flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    Or Book Online <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-xs text-goat-navy/40 mt-4">{offer.disclaimer}</p>

                  {/* Trust signals */}
                  <div className="mt-6 pt-6 border-t border-goat-cream-dark">
                    <div className="flex items-center justify-center gap-4">
                      <OptimizedImage src={logoImg} alt="Garage Goat" className="h-10 w-auto" loading="lazy" />
                      <div className="flex flex-wrap justify-center gap-2">
                        {['Licensed', 'Insured', '5-Star Rated'].map((badge, i) => (
                          <span key={i} className="flex items-center gap-1 text-xs text-goat-navy/60 bg-goat-cream px-2 py-1 rounded border border-goat-cream-dark">
                            <ShieldCheck className="w-3 h-3 text-goat-red" /> {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other offers */}
          {offers.filter(o => o.id !== offer.id).length > 0 && (
            <div className="max-w-2xl mx-auto mt-8">
              <h3 className="text-center text-goat-ice/50 text-sm mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                More Offers
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {offers.filter(o => o.id !== offer.id).map(otherOffer => (
                  <Link
                    key={otherOffer.id}
                    to={`/${otherOffer.slug}`}
                    className="bg-goat-navy hover:bg-goat-navy-light text-white px-5 py-2 rounded transition-all text-sm border border-goat-navy-light/20"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {otherOffer.discountAmount} — {otherOffer.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip />
    </>
  );
}