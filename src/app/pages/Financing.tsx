import React from 'react';
import { Link } from 'react-router';
import { Phone, DollarSign, CheckCircle2, CreditCard, Calculator, ArrowRight, Wrench, Tag } from 'lucide-react';
import { companyInfo, services, offers } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider, StarBullet } from '../components/StarAccent';
import { TrustStrip } from '../components/TrustBadges';

const financingOptions = [
  {
    title: '0% Interest for 12 Months',
    subtitle: 'Same-As-Cash',
    description: 'Pay off your new garage door within 12 months with zero interest. Perfect for planned upgrades.',
    minPurchase: '$500+',
    highlight: true,
  },
  {
    title: 'Low Monthly Payments',
    subtitle: 'Extended Plans Available',
    description: 'Spread the cost over 24, 36, or 60 months with competitive rates. Get the door you want today.',
    minPurchase: '$1,000+',
    highlight: false,
  },
  {
    title: 'No Credit Needed',
    subtitle: 'Lease-to-Own Option',
    description: 'Flexible lease-to-own program available for qualifying customers. No hard credit pull required for pre-approval.',
    minPurchase: '$300+',
    highlight: false,
  },
];

export function Financing() {
  return (
    <span className="contents">
      <SEO
        title="Financing Options | Garage Goat Garage Doors — Cypress, TX"
        description="Affordable financing for garage door repair and installation. 0% interest options, low monthly payments, and no-credit-needed programs. Garage Goat, Cypress TX."
        path="/financing"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'Financing' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Flexible <span className="text-accent-red">Financing</span>
          </h1>
          <p className="text-goat-ice/70 mt-4 max-w-2xl mx-auto">
            Don't let budget hold you back from a safe, beautiful garage door. We offer easy payment plans to fit every situation.
          </p>
        </div>
      </div>

      <TrustStrip />

      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-5xl">

          {/* Financing Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {financingOptions.map((opt, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg overflow-hidden border-2 ${
                  opt.highlight ? 'border-goat-teal shadow-lg shadow-goat-teal/10' : 'border-goat-cream-dark'
                } flex flex-col`}
              >
                {opt.highlight && (
                  <div className="bg-goat-teal text-goat-navy-deep text-center py-1.5 text-xs" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-lg bg-goat-red/10 flex items-center justify-center mb-4">
                    {idx === 0 ? <DollarSign className="w-6 h-6 text-goat-red" /> :
                     idx === 1 ? <Calculator className="w-6 h-6 text-goat-red" /> :
                     <CreditCard className="w-6 h-6 text-goat-red" />}
                  </div>
                  <h3 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {opt.title}
                  </h3>
                  <p className="text-goat-red text-sm mt-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {opt.subtitle}
                  </p>
                  <p className="text-goat-navy/60 text-sm mt-3 flex-1">{opt.description}</p>
                  <div className="mt-4 pt-4 border-t border-goat-cream-dark text-xs text-goat-navy/50">
                    Min. purchase: {opt.minPurchase}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg p-8 border border-goat-cream-dark mb-16">
            <h2 className="text-goat-navy-dark text-center mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              How It <span className="text-accent-red">Works</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Get Your Quote', desc: 'Call us or book online. Our tech will provide an upfront, no-obligation quote for your project.' },
                { step: '2', title: 'Choose Your Plan', desc: 'Select the financing option that fits your budget. Quick application with instant approval available.' },
                { step: '3', title: 'We Get to Work', desc: 'Once approved, we schedule your service right away. Enjoy your new or repaired garage door today!' },
              ].map(s => (
                <div key={s.step} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full bg-goat-navy-deep text-white flex items-center justify-center mx-auto mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {s.step}
                  </div>
                  <h4 className="text-goat-navy-dark mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{s.title}</h4>
                  <p className="text-goat-navy/60 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Can Be Financed */}
          <div className="mb-16">
            <h2 className="text-goat-navy-dark text-center mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              What Can Be Financed?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'New garage door installations',
                'Garage door opener upgrades',
                'Spring replacement packages',
                'Major repair projects',
                'Multi-door packages',
                'Insulation upgrades',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-goat-cream-dark">
                  <CheckCircle2 className="w-5 h-5 text-goat-teal flex-shrink-0" />
                  <span className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services You Can Finance */}
          <div className="mb-16">
            <h2 className="text-goat-navy-dark text-center mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Services You Can <span className="text-accent-red">Finance</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { service: services[0], note: 'Cover unexpected repair bills with easy payments' },
                { service: services[1], note: 'Spread spring replacement costs over time' },
                { service: services[2], note: 'Upgrade to a smart opener with monthly payments' },
                { service: services[3], note: 'Finance your dream garage door with 0% interest' },
                { service: services[4], note: 'No upfront cost for after-hours emergencies' },
              ].map(({ service, note }) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}`}
                  className="bg-white rounded-lg p-4 border border-goat-cream-dark flex items-center gap-3 hover:border-goat-red/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-goat-red/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-goat-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-goat-navy-dark block" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                      {service.name}
                    </span>
                    <span className="text-goat-navy/50 text-xs">{note}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Save Even More */}
          <div className="mb-16">
            <h2 className="text-goat-navy-dark text-center mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Save Even <span className="text-accent-red">More</span>
            </h2>
            <p className="text-goat-navy/60 text-sm text-center mb-6">
              Combine financing with our current special offers for maximum savings.
            </p>
            <div className="space-y-3">
              {offers.map((offer) => (
                <Link
                  key={offer.id}
                  to={`/${offer.slug}`}
                  className="bg-white rounded-lg p-4 border border-goat-cream-dark flex items-center gap-3 hover:border-goat-red/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-goat-teal/10 flex items-center justify-center flex-shrink-0">
                    <Tag className="w-5 h-5 text-goat-teal-deep" />
                  </div>
                  <span className="text-goat-red" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {offer.discountAmount}
                  </span>
                  <span className="text-goat-navy-dark flex-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {offer.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Have Questions? Link Bar */}
          <div className="mb-16 text-center">
            <h3 className="text-goat-navy-dark mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Have Questions?
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: '/faq', label: 'FAQ' },
                { to: '/warranty', label: 'Warranty Info' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-white border border-goat-cream-dark rounded-full px-5 py-2 text-sm text-goat-navy-dark hover:border-goat-red/30 hover:text-goat-red transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-goat-navy-dark rounded-lg p-8 lg:p-12 text-white text-center relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                Ready to Get Started?
              </h2>
              <p className="text-goat-ice/70 mt-2 mb-6 max-w-lg mx-auto">
                Call us today for an upfront quote and ask about our financing options. No obligation, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-3 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Phone className="w-4 h-4" /> {companyInfo.phone}
                </a>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}