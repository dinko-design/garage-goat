import React, { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Star, Send, ArrowRight, Wrench, HelpCircle } from 'lucide-react';
import { companyInfo, services, serviceAreas } from '../../data/cms';
import { toast } from 'sonner';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldStarWatermark } from '../components/StarAccent';
import { TrustStrip, TrustSidebar } from '../components/TrustBadges';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Request submitted! We\'ll call you shortly.');
  };

  return (
    <>
      <SEO
        title="Contact Garage Goat | Schedule Garage Door Service in Cypress, TX"
        description="Contact Garage Goat for garage door repair, installation, and emergency service in Cypress, TX. Call 24/7 or schedule online."
        path="/contact"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <ShieldStarWatermark className="absolute bottom-10 right-10 w-48 h-48 text-goat-teal/[0.04] hidden xl:block z-[1]" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'Contact' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            <span className="text-goat-red">Contact</span> Us
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto mb-8">
            We're here to help! Call us 24/7 for immediate service or fill out the form below.
          </p>
          {/* Prominent Phone CTA */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="inline-flex items-center gap-3 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-10 py-5 rounded transition-all shadow-xl shadow-goat-teal/30"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', fontSize: '1.3rem' }}
          >
            <Phone className="w-6 h-6" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <TrustStrip />

      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-lg border border-goat-cream-dark mb-6">
                <h2
                  className="text-2xl text-goat-navy-dark mb-6"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goat-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-goat-red" />
                    </div>
                    <div>
                      <div className="text-goat-navy-dark mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Phone (24/7)</div>
                      <p className="text-goat-navy/60 text-sm mb-1">Emergency service available anytime</p>
                      <a href={`tel:${companyInfo.phoneRaw}`} className="text-goat-red hover:text-goat-red-dark transition-colors" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: '1.3rem' }}>
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goat-ice/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-goat-navy" />
                    </div>
                    <div>
                      <div className="text-goat-navy-dark mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Email</div>
                      <p className="text-goat-navy/60 text-sm mb-1">For general inquiries</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-goat-navy-dark hover:text-goat-red transition-colors" style={{ fontWeight: 600 }}>
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goat-ice/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-goat-navy" />
                    </div>
                    <div>
                      <div className="text-goat-navy-dark mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Service Area</div>
                      <p className="text-goat-navy/60 text-sm">
                        Cypress, Tomball, The Woodlands, Spring & NW Houston
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goat-ice/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-goat-navy" />
                    </div>
                    <div>
                      <div className="text-goat-navy-dark mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Hours</div>
                      <div className="text-goat-navy/60 text-sm space-y-0.5">
                        <p><span style={{ fontWeight: 600 }}>Mon – Fri:</span> 7:00 AM – 7:00 PM</p>
                        <p><span style={{ fontWeight: 600 }}>Saturday:</span> 8:00 AM – 5:00 PM</p>
                        <p><span style={{ fontWeight: 600 }}>Sunday:</span> Emergency Service Only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-goat-navy-dark rounded-lg p-6 text-white relative overflow-hidden noise-overlay">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-goat-gold fill-goat-gold" />)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{companyInfo.googleRating}/5 on Google</div>
                    <div className="text-goat-ice/50 text-sm">{companyInfo.totalReviews}+ verified reviews</div>
                  </div>
                </div>
              </div>

              <GoogleMapEmbed height={220} className="mt-6" />

              {/* Branded truck photo */}
              <div className="mt-6 rounded-lg overflow-hidden border border-goat-cream-dark">
                <img
                  src="/images/brand/cesar-workshop.jpg"
                  alt="Cesar Salazar, owner of Garage Goat in Cypress, TX"
                  className="w-full h-52 object-cover object-top"
                  loading="lazy"
                />
              </div>

              <TrustSidebar />
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-goat-navy-deep/10 border border-goat-cream-dark">
              <h2
                className="text-2xl text-goat-navy-dark mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Request Service
              </h2>
              <p className="text-goat-navy/50 text-sm mb-6">Fill this out and we'll call you back within 30 minutes during business hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl text-goat-navy-dark mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Request Received!</h3>
                  <p className="text-goat-navy/60 mb-6">We'll be in touch shortly. For immediate help, call us directly.</p>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-goat-red text-white px-6 py-3 rounded transition-colors"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    <Phone className="w-5 h-5" /> {companyInfo.phone}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>Service Needed *</label>
                    <select
                      required
                      className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-goat-navy-dark mb-1" style={{ fontWeight: 600 }}>Tell Us About the Issue</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 bg-goat-cream border border-goat-cream-dark rounded focus:ring-2 focus:ring-goat-red focus:border-goat-red outline-none transition-all resize-none"
                      placeholder="Describe what's happening with your garage door..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/20"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                  >
                    <Send className="w-5 h-5" />
                    Send Request
                  </button>

                  <p className="text-xs text-goat-navy/40 text-center">
                    By submitting, you agree to be contacted by phone or email regarding your service request.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Common Questions */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-2xl lg:text-3xl text-goat-navy-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Common <span className="text-goat-red">Questions</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  question: 'How quickly can you get here?',
                  answer: 'For emergencies, we typically arrive within 60 minutes in Cypress, Tomball & The Woodlands. Standard appointments available same-day or next-day.',
                },
                {
                  question: 'Do you charge for estimates?',
                  answer: "Never. All estimates are free, with no obligation. We'll diagnose the issue and quote the job before starting any work.",
                },
                {
                  question: 'What areas do you serve?',
                  answer: 'We serve Cypress, Tomball, The Woodlands, Spring, Magnolia, Hockley, and Northwest Houston, TX.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-goat-cream-dark">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-goat-red flex-shrink-0 mt-0.5" />
                    <div className="text-goat-navy-dark" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                      {faq.question}
                    </div>
                  </div>
                  <p className="text-goat-navy/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-goat-red hover:text-goat-red-dark transition-colors text-sm"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                More FAQs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-2xl lg:text-3xl text-goat-navy-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Our <span className="text-goat-red">Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}`}
                  className="bg-white p-4 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors group flex items-center gap-3"
                >
                  <Wrench className="w-4 h-4 text-goat-red flex-shrink-0" />
                  <span
                    className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm flex-grow"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {service.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-goat-navy/30 group-hover:text-goat-red transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-10 max-w-6xl mx-auto text-center">
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
                  to={`/${area.slug}`}
                  className="flex items-center gap-1 text-xs bg-white text-goat-navy px-3 py-1.5 rounded hover:text-goat-red transition-colors border border-goat-cream-dark"
                >
                  <MapPin className="w-3 h-3" /> {area.cityName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}