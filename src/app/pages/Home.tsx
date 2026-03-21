import React from 'react';
import { Link } from 'react-router';
import { services, serviceAreas, reviews, offers, companyInfo } from '../../data/cms';
import { Star, ShieldCheck, Clock, MapPin, ArrowRight, CheckCircle2, Phone, Award, Zap, Wrench, Users, BadgeCheck } from 'lucide-react';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";
import cesarPortraitImg from "figma:asset/baeb695f0f939926acdc45a5edd4278263a4f7c3.png";
import { StarDivider, TripleStarDivider } from '../components/StarAccent';
import { GarageDoorDivider, ShieldStarWatermark } from '../components/StarAccent';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { buildLocalBusinessSchema } from '../../data/structured-data';
import { TrustBadges } from '../components/TrustBadges';

// Truck image (placeholder — to be replaced with real wrapped truck photo)
const truckImage = "https://images.unsplash.com/photo-1770739537169-6e9239896c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdvcmslMjB0cnVjayUyMHBhcmtlZCUyMHJlc2lkZW50aWFsJTIwbmVpZ2hib3Job29kfGVufDF8fHx8MTc3MDk3MDAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Home() {
  const featuredOffer = offers[0];
  const topReviews = reviews.filter(r => r.rating === 5).slice(0, 3);

  return (
    <div className="flex flex-col">
      <SEO
        title="Garage Goat Garage Doors | #1 Garage Door Repair in Cypress, TX"
        description="Top-rated garage door repair, spring replacement & new door installation in Cypress, Tomball, The Woodlands & NW Houston, TX. Same-day service, honest pricing. Call (281) 948-5452."
        path="/"
        jsonLd={buildLocalBusinessSchema()}
      />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative bg-goat-navy-deep text-white overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1576765915042-d4746f8b7727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjByZXNpZGVudGlhbCUyMGdhcmFnZSUyMGRvb3IlMjBjdXJiJTIwYXBwZWFsfGVufDF8fHx8MTc3MDk2ODg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beautiful garage door on American home"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            width={1080}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-goat-navy-deep via-goat-navy-deep/90 to-goat-navy-deep/60" />
        </div>

        {/* Decorative shield star watermark */}
        <ShieldStarWatermark className="absolute top-12 right-12 w-72 h-72 text-goat-teal/[0.04] hidden xl:block z-[1]" />

        <div className="container mx-auto relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-goat-red/20 text-goat-red-light border border-goat-red/30 px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-goat-red rounded-full animate-pulse" />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 0.95, textTransform: 'uppercase' }}
            >
              Garage Doors<br />
              <span className="text-goat-red">Done Right.</span>
            </h1>

            <p className="text-xl text-goat-ice/80 mb-8 max-w-xl leading-relaxed">
              Top-rated garage door service in Cypress, Tomball & The Woodlands, TX.
              Springs, openers, new doors — we fix it all. Fast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.03em' }}
              >
                <Phone className="w-5 h-5" />
                Call for Same-Day Repair
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.03em' }}
              >
                Schedule Now
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-goat-ice/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-goat-ice" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />)}
                </div>
                <span>{companyInfo.googleRating} ({companyInfo.totalReviews}+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-goat-ice" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OFFER BANNER */}
      {/* ============================================ */}
      {featuredOffer && (
        <div className="bg-goat-navy-dark text-white py-4 relative overflow-hidden">
          <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 texture-twill opacity-[0.06] mix-blend-screen pointer-events-none" />
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center relative z-10">
            <div className="flex items-center gap-3">
              <span className="border border-goat-red text-goat-red px-3 py-0.5 rounded text-xs tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Special Offer
              </span>
              <span className="text-goat-ice" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: '1.1rem' }}>
                {featuredOffer.headline}
              </span>
            </div>
            <Link
              to={`/${featuredOffer.slug}`}
              className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-5 py-1.5 rounded text-sm transition-colors shadow-lg shadow-goat-teal/20"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Claim Offer →
            </Link>
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* TRUST BADGES — Social Proof */}
      {/* ============================================ */}
      <TrustBadges />

      {/* Silver divider */}
      <div className="section-divider" />

      {/* ============================================ */}
      {/* SERVICES GRID */}
      {/* ============================================ */}
      <section className="py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StarDivider className="text-goat-navy mb-4" />
            <h2
              className="text-4xl lg:text-5xl text-goat-navy-dark mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Our <span className="text-goat-red">Services</span>
            </h2>
            <p className="text-lg text-goat-navy/70">
              From broken springs to brand new installations — we handle every garage door job with precision, care, and a handshake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden flex flex-col h-full border border-goat-cream-dark hover:border-goat-navy/20 grit-card"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-goat-navy-deep/20 group-hover:bg-goat-navy-deep/0 transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-goat-navy-deep/60 to-transparent z-10" />
                  <OptimizedImage
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={400}
                    height={192}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow border-t-4 border-goat-red">
                  <h3
                    className="text-xl text-goat-navy-dark group-hover:text-goat-red transition-colors mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-goat-navy/60 text-sm mb-4 flex-grow leading-relaxed">
                    {service.introParagraph.substring(0, 120)}...
                  </p>
                  <div className="flex items-center text-goat-red text-sm group-hover:translate-x-2 transition-transform" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-goat-navy-dark hover:text-goat-red border-b-2 border-goat-navy-dark hover:border-goat-red pb-1 transition-colors"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Silver divider */}
      <div className="section-divider" />

      {/* ============================================ */}
      {/* WHY GARAGE GOAT — TRUST SECTION */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-goat-red/10 rounded-full z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-goat-ice/40 rounded-full z-0" />
              <img
                src={cesarPortraitImg}
                alt="Cesar — Owner & Founder of Garage Goat Garage Doors"
                className="relative z-10 rounded-lg shadow-2xl shadow-goat-navy-deep/20 w-full h-auto object-cover aspect-[4/5]"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 lg:left-[-20px] bg-goat-navy-dark p-4 rounded-lg shadow-xl z-20 flex items-center gap-3">
                <img src={logoImg} alt="Garage Goat" className="h-10 w-auto" width={40} height={40} />
                <div className="text-white">
                  <div className="text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Owner Operated</div>
                  <div className="text-xs text-goat-ice/60">Since {companyInfo.foundedYear}</div>
                </div>
              </div>
              {/* Floating review card */}
              <div className="absolute bottom-6 -right-4 lg:right-[-20px] bg-white p-5 rounded-lg shadow-xl z-20 max-w-[260px] border-l-4 border-goat-red">
                <div className="flex items-center gap-0.5 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />)}
                </div>
                <p className="text-goat-navy-dark text-sm" style={{ fontWeight: 600 }}>"{topReviews[0]?.text.substring(0, 80)}..."</p>
                <p className="text-xs text-goat-navy/50 mt-2">— {topReviews[0]?.reviewerName}, {topReviews[0]?.city}</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2">
              <StarDivider className="text-goat-navy justify-start mb-4" />
              <h2
                className="text-4xl lg:text-5xl text-goat-navy-dark mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                Why Cypress Trusts<br />
                <span className="text-goat-red">Garage Goat</span>
              </h2>
              <p className="text-lg text-goat-navy/70 mb-8 leading-relaxed">
                We aren't a faceless national franchise. We're a locally owned crew of garage door experts who treat
                every home like it's our own. Honest pricing. Quality parts. The job done right — every time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: ShieldCheck, text: 'Licensed, Bonded & Insured' },
                  { icon: BadgeCheck, text: 'Upfront Pricing — No Surprises' },
                  { icon: Zap, text: 'High-Cycle Springs (Built to Last)' },
                  { icon: Users, text: 'Background-Checked Technicians' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-goat-cream rounded-lg p-4 border border-goat-cream-dark">
                    <item.icon className="w-6 h-6 text-goat-red flex-shrink-0" />
                    <span className="text-goat-navy-dark text-sm" style={{ fontWeight: 600 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="bg-goat-navy-dark hover:bg-goat-navy text-white px-8 py-3 rounded transition-colors inline-flex items-center gap-2 shadow-lg shadow-goat-navy-deep/20"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
              >
                Meet The Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Definition Block — optimized for AI extraction */}
      <section className="py-8 bg-white border-b border-goat-cream-dark">
        <div className="container mx-auto">
          <p className="text-goat-navy/80 text-center max-w-3xl mx-auto leading-relaxed">
            <strong>Garage Goat Garage Doors</strong> is a locally owned garage door repair and installation company headquartered in <strong>Cypress, Texas</strong>, serving the Northwest Houston metro area since 2010. We specialize in same-day garage door repair, spring replacement, opener installation, and new garage door sales across Cypress, Tomball, The Woodlands, Spring, and NW Houston. TDLR Licensed ({companyInfo.licenseNumber}) with a {companyInfo.googleRating}-star Google rating from {companyInfo.totalReviews}+ verified reviews.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* STATS BAR */}
      {/* ============================================ */}
      <section className="bg-goat-navy-dark py-12 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '15+', label: 'Years in Business' },
              { number: '10,000+', label: 'Doors Serviced' },
              { number: '4.9', label: 'Google Rating', suffix: '/5' },
              { number: '60', label: 'Min Avg Response', suffix: ' min' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl lg:text-4xl text-white mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  {stat.number}
                </div>
                <div className="text-goat-ice/50 text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs text-center mt-4">
            Rating based on {companyInfo.totalReviews}+ verified Google reviews. Response times averaged across {companyInfo.city} service area.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* WARRANTY SHIELDS */}
      {/* ============================================ */}
      <section className="py-16 bg-goat-navy-deep relative overflow-hidden noise-overlay-strong diagonal-stripes-bold">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl lg:text-4xl text-white mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Our <span className="text-goat-red">Warranty</span> Promise
            </h2>
            <p className="text-goat-ice/60 max-w-lg mx-auto">
              We stand behind our work. Every job comes with industry-leading warranty coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { duration: companyInfo.warranty.labor, label: 'Labor Warranty', icon: Wrench },
              { duration: companyInfo.warranty.parts, label: 'Parts Warranty', icon: ShieldCheck },
              { duration: companyInfo.warranty.springs, label: 'Warranty on Springs', icon: Award },
            ].map((w, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mx-auto w-28 h-32 mb-4">
                  {/* Shield border (slightly larger, clipped) */}
                  <div className="absolute inset-0 bg-goat-silver/30 group-hover:bg-goat-red/50 transition-colors"
                    style={{ clipPath: 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)' }} />
                  {/* Shield shape (inset by 2px) */}
                  <div className="absolute inset-[2px] bg-gradient-to-b from-goat-navy-dark to-goat-navy-deep"
                    style={{ clipPath: 'polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%)' }}>
                    <div className="flex flex-col items-center justify-center h-full pb-6">
                      <w.icon className="w-5 h-5 text-goat-red mb-1" />
                      <div className="text-2xl text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {w.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-goat-ice/80 text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {w.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {companyInfo.guarantees.map((g, i) => (
              <span key={i} className="flex items-center gap-1.5 text-goat-ice/50 text-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-goat-red" /> {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* WRAPPED TRUCK SHOWCASE */}
      {/* ============================================ */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl shadow-goat-navy-deep/10 relative">
                <OptimizedImage
                  src={truckImage}
                  alt="Garage Goat fully wrapped service truck"
                  className="w-full h-auto object-cover aspect-[16/10]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={500}
                />
                <div className="absolute bottom-4 left-4 bg-goat-navy-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded flex items-center gap-2">
                  <img src={logoImg} alt="" className="h-8 w-auto" width={32} height={32} />
                  <span className="text-sm" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Our Fleet</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2
                className="text-3xl text-goat-navy-dark mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                Look for the <span className="text-goat-red">Goat Truck</span> in Your Neighborhood
              </h2>
              <p className="text-goat-navy/70 mb-6 leading-relaxed">
                Our fully stocked, branded service trucks are a familiar sight across Cypress, Tomball, and The Woodlands. We carry the most common parts on every truck so we can fix your door on the first visit — no waiting for parts, no second trip charges.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Fully Stocked', 'GPS Dispatched', 'Branded & Insured', 'First-Visit Fix Rate: 95%'].map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-goat-cream text-goat-navy-dark px-4 py-2 rounded text-sm border border-goat-cream-dark">
                    <CheckCircle2 className="w-4 h-4 text-goat-red flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* SERVICE AREAS */}
      {/* ============================================ */}
      <section className="py-20 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <StarDivider className="text-goat-navy mb-4" />
          <h2
            className="text-3xl lg:text-4xl text-goat-navy-dark mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
          >
            Proudly Serving Our Neighbors
          </h2>
          <p className="text-goat-navy/60 mb-10 max-w-xl mx-auto">
            Local technicians who know the area and can be at your door fast.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => (
              <Link
                key={area.id}
                to={`/${area.slug}`}
                className="group flex items-center gap-2 bg-white hover:bg-goat-red text-goat-navy-dark hover:text-white px-6 py-3 rounded-full transition-all border border-goat-cream-dark hover:border-goat-red shadow-sm hover:shadow-lg hover:shadow-goat-red/20"
              >
                <MapPin className="w-4 h-4 text-goat-red group-hover:text-white transition-colors" />
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{area.cityName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* REVIEWS */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <StarDivider className="text-goat-navy mb-4" />
            <h2
              className="text-4xl lg:text-5xl text-goat-navy-dark mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              What Our <span className="text-goat-red">Customers</span> Say
            </h2>
            <div className="inline-flex items-center gap-3 bg-goat-cream px-6 py-3 rounded-full border border-goat-cream-dark mt-4">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-goat-gold fill-goat-gold" />)}
              </div>
              <span className="text-goat-navy-dark" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: '1.1rem' }}>
                {companyInfo.googleRating}
              </span>
              <span className="text-goat-navy/50 text-sm">based on {companyInfo.totalReviews}+ Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review) => (
              <div key={review.id} className="bg-goat-cream/60 p-7 rounded-lg border border-goat-cream-dark grit-card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-goat-gold fill-goat-gold" />
                  ))}
                </div>
                <p className="text-goat-navy-dark mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-end border-t border-goat-cream-dark pt-4">
                  <div>
                    <div className="text-goat-navy-dark" style={{ fontWeight: 700 }}>{review.reviewerName}</div>
                    <div className="text-xs text-goat-navy/50">{review.city}</div>
                  </div>
                  <div className="text-xs bg-goat-red/10 text-goat-red px-3 py-1 rounded" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    {review.serviceUsed}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="bg-goat-cream hover:bg-goat-cream-dark border-2 border-goat-cream-dark hover:border-goat-navy/20 text-goat-navy-dark px-8 py-3 rounded transition-all inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* FINAL CTA — BIG & BOLD */}
      {/* ============================================ */}
      <section className="relative bg-goat-navy-deep py-24 overflow-hidden noise-overlay-strong">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <ShieldStarWatermark className="absolute top-8 left-8 w-64 h-64 text-goat-teal/[0.03] hidden lg:block z-[1]" />
        <ShieldStarWatermark className="absolute bottom-8 right-8 w-48 h-48 text-goat-red/[0.04] hidden lg:block z-[1]" />

        <div className="container mx-auto relative z-10 text-center text-white">
          <GarageDoorDivider className="text-goat-teal mb-6" />
          <img src={logoImg} alt="Garage Goat" className="h-32 lg:h-40 w-auto mx-auto mb-8" width={160} height={160} loading="lazy" decoding="async" />
          <h2
            className="text-4xl lg:text-6xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Need Your Garage Door<br />
            <span className="text-goat-red">Fixed Today?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-goat-ice/70">
            Call the G.O.A.T. now for same-day service. Your garage door can't wait — and neither should you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-10 py-5 rounded transition-all shadow-xl shadow-goat-teal/30 flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '0.03em' }}
            >
              <Phone className="w-6 h-6" />
              {companyInfo.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white px-10 py-5 rounded transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '0.03em' }}
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}