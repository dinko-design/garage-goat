import React from 'react';
import { Link } from 'react-router';
import { CheckCircle2, Star, ShieldCheck, Award, Phone, Heart, Wrench, Users, ArrowRight, MapPin } from 'lucide-react';
import { companyInfo, services, serviceAreas, reviews } from '../../data/cms';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";
import cesarPortraitImg from "figma:asset/baeb695f0f939926acdc45a5edd4278263a4f7c3.png";
import brandBoardImg from "figma:asset/bf3840f9f81536f862c29056d262368358836920.png";
import warrantyFlyerImg from "figma:asset/92e76f21d7bc4840c5f5366a337d159fd9b96878.png";
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider, GarageDoorDivider, ShieldStarWatermark } from '../components/StarAccent';

export function About() {
  return (
    <>
      <SEO
        title="About Garage Goat | Your Local Garage Door Experts in Cypress, TX"
        description="Learn about Garage Goat — a locally owned garage door company in Cypress, TX. Licensed, insured, and dedicated to honest service since 2010."
        path="/about"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <ShieldStarWatermark className="absolute top-10 right-10 w-56 h-56 text-goat-teal/[0.04] hidden xl:block z-[1]" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" items={[{ label: 'About Us' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            About <span className="text-goat-red">Garage Goat</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto">
            Locally owned. Honestly run. The G.O.A.T. of garage doors since {companyInfo.foundedYear}.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-goat-red/10 rounded-full z-0" />
              <OptimizedImage
                src={cesarPortraitImg}
                alt="Cesar — Owner & Founder of Garage Goat"
                className="relative z-10 rounded-lg shadow-2xl shadow-goat-navy-deep/20 w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-goat-red text-white p-5 rounded-lg shadow-xl z-20">
                <div className="text-3xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>15+</div>
                <div className="text-sm opacity-90">Years Serving<br />Cypress, TX</div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <h2
                className="text-3xl lg:text-4xl text-goat-navy-dark mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                Meet <span className="text-goat-red">Cesar</span> — Our Founder
              </h2>
              <div className="space-y-4 text-goat-navy/70 leading-relaxed">
                <p>
                  Founded in {companyInfo.foundedYear} by Cesar, Garage Goat started with a single truck, a toolbox, and a simple mission: provide high-quality garage door repairs without the high-pressure sales tactics that plague this industry.
                </p>
                <p>
                  We noticed homeowners were being overcharged for simple fixes — a $100 spring replacement turned into a $600 bill. A $50 sensor alignment became a $300 "diagnostic." We said enough.
                </p>
                <p>
                  Over {new Date().getFullYear() - companyInfo.foundedYear} years later, we've grown into a full-service team, but our core values haven't changed one bit. We treat every home like it's our own. We quote fair, work fast, and stand behind everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-goat-navy/30" />
              <span className="text-goat-red">★</span>
              <div className="h-px w-12 bg-goat-navy/30" />
            </div>
            <h2
              className="text-3xl lg:text-4xl text-goat-navy-dark"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              The Garage Goat <span className="text-goat-red">Promise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'Upfront Pricing', desc: 'We quote the job before we start. No hidden fees, no surprise charges. The price we say is the price you pay.' },
              { icon: Award, title: 'Quality Parts', desc: 'We use high-cycle springs and name-brand parts. No cheap imports. Your door deserves the best.' },
              { icon: Users, title: 'Vetted Technicians', desc: 'Every tech is background-checked, drug-tested, licensed, and trained. We send professionals, not strangers.' },
              { icon: Heart, title: 'Community First', desc: 'We live here. We work here. We sponsor local sports teams and donate to Cypress charities. This is home.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-goat-cream rounded-lg border border-goat-cream-dark grit-card">
                <div className="w-14 h-14 bg-goat-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-goat-red" />
                </div>
                <h3 className="text-goat-navy-dark mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                  {value.title}
                </h3>
                <p className="text-goat-navy/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Shields */}
      <section className="py-20 bg-goat-navy-deep relative overflow-hidden noise-overlay-strong diagonal-stripes-bold">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            {/* Warranty flyer image */}
            <div className="lg:w-5/12">
              <OptimizedImage
                src={warrantyFlyerImg}
                alt="Garage Goat Warranty Information"
                className="rounded-lg shadow-2xl shadow-black/40 w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Warranty content */}
            <div className="lg:w-7/12 text-white">
              <h2
                className="text-3xl lg:text-4xl mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                Our <span className="text-goat-red">Warranty</span> Coverage
              </h2>
              <p className="text-goat-ice/70 mb-8 leading-relaxed">
                We stand behind every job. When you work with Garage Goat, you get industry-leading warranty coverage that gives you peace of mind long after we leave.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { duration: companyInfo.warranty.labor, label: 'Labor', icon: Wrench },
                  { duration: companyInfo.warranty.parts, label: 'Parts', icon: ShieldCheck },
                  { duration: companyInfo.warranty.springs, label: 'Springs', icon: Award },
                ].map((w, idx) => (
                  <div key={idx} className="text-center">
                    <div className="relative mx-auto w-24 h-28 mb-3">
                      <div className="absolute inset-0 bg-goat-silver/30"
                        style={{ clipPath: 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)' }} />
                      <div className="absolute inset-[2px] bg-gradient-to-b from-goat-navy-dark to-goat-navy-deep"
                        style={{ clipPath: 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)' }}>
                        <div className="flex flex-col items-center justify-center h-full pt-2">
                          <w.icon className="w-4 h-4 text-goat-red mb-1" />
                          <div className="text-xl text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                            {w.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-goat-ice/80 text-xs" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {w.label} Warranty
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {companyInfo.guarantees.map((g, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-goat-ice/60 px-3 py-1.5 rounded text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-goat-red" /> {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2
                className="text-3xl lg:text-4xl text-goat-navy-dark mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                Built Like a <span className="text-goat-red">Brand</span>
              </h2>
              <p className="text-goat-navy/70 mb-6 leading-relaxed">
                Every detail of Garage Goat — from our wrapped trucks and uniforms to our warranty cards and website — is designed to reflect the same level of professionalism and care we put into every garage door job.
              </p>
              <p className="text-goat-navy/70 leading-relaxed">
                Our shield logo represents protection, strength, and trust. Our red, navy, and silver color palette channels classic Americana craftsmanship. When you see the Goat, you know you're getting the real deal.
              </p>
            </div>
            <div className="lg:w-1/2">
              <OptimizedImage
                src={brandBoardImg}
                alt="Garage Goat Brand Identity & Design System"
                className="rounded-lg shadow-xl shadow-goat-navy-deep/15 w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <StarDivider className="mb-4" />
            <h2
              className="text-3xl lg:text-4xl text-goat-navy-dark"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              What We <span className="text-goat-red">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg border border-goat-cream-dark grit-card flex flex-col">
                <h3
                  className="text-goat-navy-dark mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  {service.name}
                </h3>
                <p className="text-goat-navy/60 text-sm leading-relaxed flex-grow mb-4">
                  {service.introParagraph.slice(0, 80)}...
                </p>
                <Link
                  to={`/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-goat-red hover:text-goat-red-dark text-sm transition-colors"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-goat-navy/60 text-sm mb-3">
              <MapPin className="w-4 h-4 text-goat-red" />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}>Serving:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.id}
                  to={`/${area.slug}`}
                  className="flex items-center gap-1 text-xs bg-white text-goat-navy px-3 py-1.5 rounded hover:text-goat-red transition-colors border border-goat-cream-dark"
                >
                  <MapPin className="w-3 h-3" /> {area.cityName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-goat-navy-dark text-white relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <OptimizedImage src={logoImg} alt="Garage Goat" className="h-14 w-auto" loading="lazy" />
              <div>
                <div className="text-sm text-goat-ice/50" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Credentials</div>
                <div className="text-goat-ice/80 text-sm">{companyInfo.licenseName} {companyInfo.licenseNumber}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Licensed', 'Bonded', 'Insured', 'BBB Accredited'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-goat-navy px-4 py-2 rounded text-sm border border-goat-navy-light/20">
                  <CheckCircle2 className="w-4 h-4 text-goat-red" />
                  <span className="text-goat-ice/70">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Customers Say */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <StarDivider className="mb-4" />
            <h2
              className="text-3xl lg:text-4xl text-goat-navy-dark"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              What Customers <span className="text-goat-red">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.filter(r => r.rating === 5).slice(0, 3).map((review) => (
              <div key={review.id} className="bg-goat-cream p-6 rounded-lg border border-goat-cream-dark grit-card flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />
                  ))}
                </div>
                <p className="text-goat-navy-dark italic text-sm leading-relaxed flex-grow mb-4">
                  "{review.text.slice(0, 100)}..."
                </p>
                <div className="border-t border-goat-cream-dark pt-3">
                  <div className="text-goat-navy-dark text-sm" style={{ fontWeight: 700 }}>{review.reviewerName}</div>
                  <div className="text-xs text-goat-navy/50">{review.city}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-goat-red hover:text-goat-red-dark transition-colors"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <h2
            className="text-3xl lg:text-4xl text-goat-navy-dark mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-goat-navy/60 max-w-xl mx-auto mb-8">
            Call us today for a free estimate or schedule your service online. We look forward to earning your trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/20"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
            <Link
              to="/contact"
              className="bg-goat-navy-dark hover:bg-goat-navy text-white px-8 py-4 rounded transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Schedule Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}