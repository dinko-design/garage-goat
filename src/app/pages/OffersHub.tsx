import React from 'react';
import { Link } from 'react-router';
import { offers, companyInfo, services, serviceAreas } from '../../data/cms';
import { Tag, Phone, ArrowRight, Clock, CheckCircle2, Star, ShieldCheck, MapPin, HelpCircle, DollarSign, Wrench } from 'lucide-react';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function OffersHub() {
  return (
    <>
      <SEO
        title="Special Offers & Coupons | Garage Goat — Cypress, TX"
        description="Save on garage door repair and installation with Garage Goat special offers and coupons. Serving Cypress, Tomball & The Woodlands, TX."
        path="/offers"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative noise-overlay-strong overflow-hidden">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute top-20 left-20 text-goat-red/5 text-[200px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>
        <div className="absolute bottom-20 right-20 text-goat-red/5 text-[150px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>
        <div className="container mx-auto text-center relative z-10">
          <Breadcrumbs variant="dark" items={[{ label: 'Special Offers' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Special <span className="text-goat-red">Offers</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto mb-6">
            Save on garage door services with these exclusive deals from Garage Goat.
          </p>
          <div className="inline-flex items-center gap-2 bg-goat-red/20 text-goat-red-light border border-goat-red/30 px-5 py-2 rounded-full text-sm">
            <Tag className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}>
              {offers.length} Active Offers
            </span>
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="bg-goat-cream py-16 lg:py-24 relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => (
              <Link
                key={offer.id}
                to={`/${offer.slug}`}
                className="group bg-white rounded-lg overflow-hidden flex flex-col h-full border-2 border-dashed border-goat-cream-dark hover:border-goat-red/50 grit-card transition-all"
              >
                {/* Red Banner */}
                <div className="bg-goat-red text-white py-2 text-center relative">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 10px)`
                  }} />
                  <span className="relative z-10 text-xs" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ★ Limited Time ★
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow text-center">
                  <div
                    className="text-4xl text-goat-red mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {offer.discountAmount}
                  </div>
                  <h2
                    className="text-lg text-goat-navy-dark mb-4"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    {offer.title}
                  </h2>
                  <p className="text-goat-navy/60 text-sm mb-6 flex-grow">
                    {offer.headline}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-goat-navy/40 text-xs mb-4">
                    <Clock className="w-3.5 h-3.5" /> {offer.expiration}
                  </div>
                  <div className="bg-goat-navy-dark group-hover:bg-goat-red text-white py-3 rounded transition-all flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                    Claim This Offer <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto border border-goat-cream-dark">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <OptimizedImage src={logoImg} alt="Garage Goat" className="h-16 w-auto" loading="lazy" />
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-goat-navy-dark mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                  Why Choose Garage Goat?
                </h3>
                <p className="text-goat-navy/60 text-sm">Honest pricing. Quality parts. Same-day service. No surprises.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Licensed', 'Insured', '5-Star Rated'].map((badge, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs bg-goat-cream text-goat-navy-dark px-3 py-1.5 rounded border border-goat-cream-dark">
                    <CheckCircle2 className="w-3 h-3 text-goat-red" /> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-goat-red" />
              <span className="text-goat-red">★</span>
              <div className="h-px w-12 bg-goat-red" />
            </div>
            <h2
              className="text-2xl lg:text-3xl text-goat-navy-dark text-center mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Our Services
            </h2>
            <p className="text-goat-navy/60 text-center max-w-xl mx-auto mb-10">
              Use your savings on any of these expert garage door services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}`}
                  className="group bg-white p-5 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-goat-cream rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-goat-red/10 transition-colors">
                      <Wrench className="w-4 h-4 text-goat-red" />
                    </div>
                    <h3
                      className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-goat-navy/50 text-xs leading-relaxed mb-3">
                    {service.introParagraph.substring(0, 100)}...
                  </p>
                  <div className="flex items-center text-goat-red text-xs group-hover:translate-x-1 transition-transform" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* We Serve */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-goat-red" />
              <span className="text-goat-red">★</span>
              <div className="h-px w-12 bg-goat-red" />
            </div>
            <h2
              className="text-2xl lg:text-3xl text-goat-navy-dark mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              We Serve
            </h2>
            <p className="text-goat-navy/60 mb-8 max-w-xl mx-auto">
              These offers are available across all of our service areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.id}
                  to={`/${area.slug}`}
                  className="group flex items-center gap-2 bg-white hover:bg-goat-red text-goat-navy-dark hover:text-white px-5 py-2.5 rounded-full transition-all border border-goat-cream-dark hover:border-goat-red shadow-sm hover:shadow-lg hover:shadow-goat-red/20"
                >
                  <MapPin className="w-4 h-4 text-goat-red group-hover:text-white transition-colors" />
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{area.cityName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Questions? */}
          <div className="mt-16 bg-white rounded-lg p-8 max-w-2xl mx-auto border border-goat-cream-dark text-center">
            <HelpCircle className="w-8 h-8 text-goat-red mx-auto mb-3" />
            <h3
              className="text-goat-navy-dark mb-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Questions?
            </h3>
            <p className="text-goat-navy/60 text-sm mb-6">
              Have questions about our offers, financing, or services? We have answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 bg-goat-cream hover:bg-goat-cream-dark text-goat-navy-dark px-6 py-3 rounded transition-colors border border-goat-cream-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}
              >
                <HelpCircle className="w-4 h-4 text-goat-red" /> FAQ
              </Link>
              <Link
                to="/financing"
                className="inline-flex items-center justify-center gap-2 bg-goat-cream hover:bg-goat-cream-dark text-goat-navy-dark px-6 py-3 rounded transition-colors border border-goat-cream-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}
              >
                <DollarSign className="w-4 h-4 text-goat-red" /> Financing Options
              </Link>
            </div>
          </div>

          {/* Phone CTA */}
          <div className="mt-12 text-center">
            <p className="text-goat-navy/50 text-sm mb-4">
              Mention the offer when you call to redeem
            </p>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-10 py-5 rounded transition-all shadow-xl shadow-goat-teal/20"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem' }}
            >
              <Phone className="w-6 h-6" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}