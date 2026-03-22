import React from 'react';
import { Link } from 'react-router';
import { Phone, ShieldCheck, CheckCircle2, Clock, Wrench, Star, ArrowRight, Tag } from 'lucide-react';
import { companyInfo, services } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';
import { TrustStrip } from '../components/TrustBadges';

export function Warranty() {
  return (
    <span className="contents">
      <SEO
        title="Warranty Information | Garage Goat Garage Doors — Cypress, TX"
        description={`Garage Goat stands behind every job. ${companyInfo.warranty.labor} labor warranty, ${companyInfo.warranty.parts} parts warranty, and ${companyInfo.warranty.springs} spring warranty. Cypress, TX.`}
        path="/warranty"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'Warranty' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Our <span className="text-goat-red">Warranty</span>
          </h1>
          <p className="text-goat-ice/70 mt-4 max-w-2xl mx-auto">
            We stand behind every repair and installation. When we say we do it right, we mean it.
          </p>
        </div>
      </div>

      <TrustStrip />

      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-4xl">

          {/* Warranty Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Wrench,
                title: 'Labor Warranty',
                period: companyInfo.warranty.labor,
                description: 'All workmanship is backed by our labor warranty. If something we installed or repaired fails due to our work, we\'ll fix it free.',
                color: 'goat-navy',
              },
              {
                icon: ShieldCheck,
                title: 'Parts Warranty',
                period: companyInfo.warranty.parts,
                description: 'We use only quality parts from trusted manufacturers. If a part we installed fails prematurely, we\'ll replace it at no charge.',
                color: 'goat-red',
              },
              {
                icon: Star,
                title: 'Spring Warranty',
                period: companyInfo.warranty.springs,
                description: 'Our high-cycle torsion springs are rated for 25,000+ cycles. We back them with a lifetime warranty because we believe in what we install.',
                color: 'goat-teal',
              },
            ].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border border-goat-cream-dark text-center">
                <div className={`py-6 ${
                  tier.color === 'goat-teal' ? 'bg-goat-teal/10' :
                  tier.color === 'goat-red' ? 'bg-goat-red/10' :
                  'bg-goat-navy/5'
                }`}>
                  <tier.icon className={`w-10 h-10 mx-auto mb-2 ${
                    tier.color === 'goat-teal' ? 'text-goat-teal-deep' :
                    tier.color === 'goat-red' ? 'text-goat-red' :
                    'text-goat-navy'
                  }`} />
                  <div
                    className="text-3xl text-goat-navy-dark"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {tier.period}
                  </div>
                  <div className="text-xs text-goat-navy/50 mt-1" style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {tier.title}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-goat-navy/60 text-sm">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What's Covered */}
          <div className="bg-white rounded-lg p-8 border border-goat-cream-dark mb-10">
            <h2 className="text-goat-navy-dark mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              What's <span className="text-goat-red">Covered</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Torsion & extension spring failures',
                'Opener motor & gear defects',
                'Cable and hardware failures',
                'Roller and hinge failures',
                'Sensor and safety system issues',
                'Weather seal failures',
                'Panel damage from installation',
                'Track alignment issues from installation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-goat-teal flex-shrink-0 mt-0.5" />
                  <span className="text-goat-navy/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's NOT Covered */}
          <div className="bg-white rounded-lg p-8 border border-goat-cream-dark mb-10">
            <h2 className="text-goat-navy-dark mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Exclusions
            </h2>
            <p className="text-goat-navy/60 text-sm mb-4">
              The following are not covered under our warranty:
            </p>
            <ul className="space-y-2 text-goat-navy/60 text-sm">
              <li>• Normal wear and tear beyond the warranty period</li>
              <li>• Damage caused by misuse, accidents, or acts of nature</li>
              <li>• Modifications made by anyone other than Garage Goat</li>
              <li>• Cosmetic damage (dents, scratches) after installation</li>
              <li>• Parts not supplied or installed by Garage Goat</li>
            </ul>
          </div>

          {/* How to File a Claim */}
          <div className="bg-goat-navy-dark rounded-lg p-8 text-white relative overflow-hidden noise-overlay mb-10">
            <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                Filing a Warranty Claim
              </h2>
              <p className="text-goat-ice/70 mt-2 mb-6">It's simple — just call us.</p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { step: '1', text: 'Call us and describe the issue' },
                  { step: '2', text: 'We\'ll schedule a tech visit (often same-day)' },
                  { step: '3', text: 'If it\'s covered, we fix it — no charge' },
                ].map(s => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-goat-teal text-goat-navy-deep flex items-center justify-center flex-shrink-0" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                      {s.step}
                    </div>
                    <p className="text-goat-ice/80 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="mt-6 inline-flex items-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
              >
                <Phone className="w-4 h-4" /> {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Services Covered by Our Warranty */}
          <div className="mb-10">
            <h2 className="text-goat-navy-dark mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Services Covered by Our <span className="text-goat-red">Warranty</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}/`}
                  className="bg-white rounded-lg p-4 border border-goat-cream-dark flex items-center gap-3 hover:border-goat-red/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-goat-red/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-goat-red" />
                  </div>
                  <span className="text-goat-navy-dark flex-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="mb-10">
            <h2 className="text-goat-navy-dark mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Related Resources
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { to: '/faq/', label: 'Frequently Asked Questions' },
                { to: '/financing/', label: 'Financing Options' },
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

          <p className="text-center text-goat-navy/40 text-xs">
            Warranty terms are subject to change. Warranty applies to services performed after January 1, {companyInfo.foundedYear}.
            Contact us for full warranty documentation.
          </p>
        </div>
      </div>
    </span>
  );
}