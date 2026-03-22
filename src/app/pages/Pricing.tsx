import React from 'react';
import { Link } from 'react-router';
import {
  Phone,
  ArrowRight,
  Wrench,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Clock,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { companyInfo, services } from '../../data/cms';
import { buildLocalBusinessSchema } from '../../data/structured-data';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';
import { TrustStrip } from '../components/TrustBadges';

const pricingData = [
  { service: 'Garage Door Repair (general)', range: '$150 – $450' },
  { service: 'Spring Replacement (pair)', range: '$200 – $400' },
  { service: 'Opener Repair', range: '$150 – $350' },
  { service: 'Cable Replacement', range: '$150 – $250' },
  { service: 'Off-Track Repair', range: '$125 – $250' },
  { service: 'Panel Replacement', range: '$250 – $800' },
  { service: 'Roller Replacement (full set)', range: '$100 – $200' },
  { service: 'Sensor Alignment', range: '$75 – $125' },
  { service: 'New Garage Door Installation', range: '$1,200 – $5,000+' },
  { service: 'New Opener Installation', range: '$350 – $650' },
];

const priceFactors = [
  {
    title: 'Door Type & Age',
    description:
      'Older or non-standard doors may require specialty parts that affect pricing. Newer doors typically use standard components we carry on our trucks.',
  },
  {
    title: 'Parts Availability',
    description:
      'Standard parts are stocked on every truck for same-visit repairs. Specialty or discontinued parts may need to be ordered, which can affect cost.',
  },
  {
    title: 'Complexity of the Repair',
    description:
      'A simple sensor realignment costs less than a full spring-and-cable replacement. We always explain the scope before quoting a price.',
  },
  {
    title: 'No Emergency or After-Hours Fees — Ever',
    description:
      'Whether it\'s 2 PM or 2 AM, our prices stay the same. We NEVER charge emergency surcharges, after-hours fees, or weekend premiums.',
  },
];

const trustSignals = [
  { text: 'Upfront quotes, no obligation', icon: DollarSign },
  { text: 'Upfront pricing before work begins', icon: FileText },
  { text: 'Same price 24/7 — nights, weekends, holidays', icon: Clock },
  { text: 'No service call fee when you proceed with repair', icon: CheckCircle2 },
  { text: 'Lifetime warranty on springs', icon: ShieldCheck },
];

const serviceLinks = [
  { service: services[0], note: 'General repair for all garage door issues' },
  { service: services[1], note: 'Torsion & extension spring replacement' },
  { service: services[2], note: 'Opener motor, remote & sensor repair' },
  { service: services[3], note: 'New door sales & professional installation' },
  { service: services[4], note: '24/7 same-price emergency service' },
];

export function Pricing() {
  return (
    <span className="contents">
      <SEO
        title="Garage Door Repair Cost & Pricing | Garage Goat — Cypress, TX"
        description="See transparent garage door repair pricing from Garage Goat in Cypress, TX. Spring replacement $200–$400, opener repair $150–$350, and more. Upfront quotes, no hidden fees."
        path="/pricing"
        jsonLd={buildLocalBusinessSchema()}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'Pricing' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            Garage Door Repair <span className="text-goat-red">Pricing</span>
          </h1>
          <p className="text-goat-ice/70 mt-4 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Same price 24/7 — no after-hours surcharges.
          </p>
        </div>
      </div>

      <TrustStrip />

      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-5xl">

          {/* Pricing Table */}
          <div className="mb-16">
            <h2
              className="text-goat-navy-dark text-center mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Our <span className="text-goat-red">Pricing</span>
            </h2>
            <p className="text-goat-navy/60 text-sm text-center mb-8">
              Honest price ranges for the most common garage door services in the Cypress area.
            </p>

            <div className="bg-white rounded-lg border border-goat-cream-dark overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-2 bg-goat-navy-deep text-white">
                <div
                  className="px-6 py-3 text-sm"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Service
                </div>
                <div
                  className="px-6 py-3 text-sm text-right"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Price Range
                </div>
              </div>

              {/* Table rows */}
              {pricingData.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-goat-cream/50'
                  } ${idx < pricingData.length - 1 ? 'border-b border-goat-cream-dark' : ''}`}
                >
                  <div className="px-6 py-4 text-goat-navy-dark text-sm sm:text-base" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {row.service}
                  </div>
                  <div
                    className="px-6 py-4 text-goat-red text-sm sm:text-base text-right"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {row.range}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-goat-navy/50 text-xs mt-4 text-center max-w-3xl mx-auto">
              Prices based on Garage Goat's local Cypress-area pricing as of 2026. Final cost depends
              on door type, parts needed, and complexity. Upfront quote provided before any work begins.
            </p>
          </div>

          <StarDivider size="md" className="text-goat-navy/20 mb-16" />

          {/* What Affects Your Price */}
          <div className="mb-16">
            <h2
              className="text-goat-navy-dark text-center mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              What Affects Your <span className="text-goat-red">Price?</span>
            </h2>
            <p className="text-goat-navy/60 text-sm text-center mb-8">
              Several factors determine your final cost. Here is what to expect.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {priceFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-5 border border-goat-cream-dark flex gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-goat-navy-deep/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-5 h-5 text-goat-navy-dark" />
                  </div>
                  <div>
                    <h3
                      className="text-goat-navy-dark mb-1"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {factor.title}
                    </h3>
                    <p className="text-goat-navy/60 text-sm">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <StarDivider size="md" className="text-goat-navy/20 mb-16" />

          {/* Why Our Pricing Is Different */}
          <div className="mb-16">
            <h2
              className="text-goat-navy-dark text-center mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Why Our Pricing Is <span className="text-goat-red">Different</span>
            </h2>
            <p className="text-goat-navy/60 text-sm text-center mb-8">
              We built our business on trust and transparency. Here is how we earn yours.
            </p>

            <div className="bg-white rounded-lg p-8 border border-goat-cream-dark">
              <div className="space-y-4">
                {trustSignals.map((signal, idx) => {
                  const Icon = signal.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-goat-teal/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-goat-teal-deep" />
                      </div>
                      <span
                        className="text-goat-navy-dark"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                      >
                        {signal.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <StarDivider size="md" className="text-goat-navy/20 mb-16" />

          {/* CTA */}
          <div className="bg-goat-red rounded-lg p-8 lg:p-12 text-white text-center relative overflow-hidden noise-overlay mb-16">
            <div className="relative z-10">
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Get Your Quote
              </h2>
              <p className="text-white/80 mt-2 mb-6 max-w-lg mx-auto">
                Call now or book online. We will provide an upfront quote before any work begins — no
                obligation, no pressure, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-white text-goat-red hover:bg-goat-cream px-8 py-3 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  <Phone className="w-4 h-4" /> {companyInfo.phone}
                </a>
                <Link
                  to="/contact/"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded transition-colors flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Cross-Links: Our Services */}
          <div className="mb-16">
            <h2
              className="text-goat-navy-dark text-center mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Our <span className="text-goat-red">Services</span>
            </h2>
            <p className="text-goat-navy/60 text-sm text-center mb-6">
              Learn more about the services behind the prices.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceLinks.map(({ service, note }) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}/`}
                  className="bg-white rounded-lg p-4 border border-goat-cream-dark flex items-center gap-3 hover:border-goat-red/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-goat-red/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-goat-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-goat-navy-dark block"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                    >
                      {service.name}
                    </span>
                    <span className="text-goat-navy/50 text-xs">{note}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3
              className="text-goat-navy-dark mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              More Information
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: '/financing/', label: 'Financing Options' },
                { to: '/warranty/', label: 'Warranty Info' },
                { to: '/faq/', label: 'FAQ' },
                { to: '/contact/', label: 'Contact Us' },
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
        </div>
      </div>
    </span>
  );
}
