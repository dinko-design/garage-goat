import React from 'react';
import { Link } from 'react-router';
import { services, serviceAreas, companyInfo } from '../../../data/cms';
import { Phone, Mail, MapPin, Facebook, Instagram, Star, ShieldCheck, Award, HelpCircle, DollarSign, Image } from 'lucide-react';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Pre-footer CTA Bar */}
      <div className="bg-goat-red relative noise-overlay">
        <div className="container mx-auto py-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                Ready to Fix Your Garage Door?
              </h3>
              <p className="opacity-90 mt-1">Same-day service. No hidden fees. Just honest work.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="bg-white text-goat-red hover:bg-goat-cream px-8 py-3 rounded transition-colors flex items-center gap-2 shadow-lg"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
              <Link
                to="/contact"
                className="bg-goat-red-dark hover:bg-goat-red-dark/80 border-2 border-white/30 text-white px-8 py-3 rounded transition-colors"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-goat-navy-deep text-goat-ice/80 pt-16 pb-8 relative noise-overlay">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div>
              <img src={logoImg} alt="Garage Goat" className="h-16 w-auto mb-4" width={64} height={64} />
              <p className="text-sm leading-relaxed mb-4 text-goat-ice/60">
                {companyInfo.tagline}. Trusted garage door repair and installation in {companyInfo.city}, {companyInfo.state} and surrounding areas since {companyInfo.foundedYear}.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-goat-gold fill-goat-gold" />)}
                </div>
                <span className="text-sm text-goat-ice/60">{companyInfo.googleRating}/5 ({companyInfo.totalReviews} reviews)</span>
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61555203315954" className="w-9 h-9 bg-goat-navy-dark rounded flex items-center justify-center hover:bg-goat-red transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/garagegoat01" className="w-9 h-9 bg-goat-navy-dark rounded flex items-center justify-center hover:bg-goat-red transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.tiktok.com/@garagegoat281" className="w-9 h-9 bg-goat-navy-dark rounded flex items-center justify-center hover:bg-goat-red transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z"/></svg>
                </a>
                <a href="https://nextdoor.com/pages/garage-goat-cypress-tx" className="w-9 h-9 bg-goat-navy-dark rounded flex items-center justify-center hover:bg-goat-red transition-colors" aria-label="Nextdoor" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14.5h-2v-4.25c0-.69-.56-1.25-1.25-1.25h-.5c-.69 0-1.25.56-1.25 1.25v4.25h-2v-4.25C8.5 10.45 10.2 8.75 12.25 8.75h.5c2.05 0 3.75 1.7 3.75 3.75v4z"/></svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {services.map(service => (
                  <li key={service.id}>
                    <Link to={`/${service.slug}`} className="hover:text-goat-red transition-colors flex items-center gap-2">
                      <span className="text-goat-red text-xs">★</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="text-goat-red hover:text-goat-red-light transition-colors" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    View All Services →
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <span className="text-goat-gold text-xs">★</span>
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <span className="text-goat-red text-xs">★</span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                {serviceAreas.map(area => (
                  <li key={area.id}>
                    <Link to={`/${area.slug}`} className="hover:text-goat-red transition-colors flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-goat-red flex-shrink-0" />
                      {area.cityName}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-white mt-6 mb-3 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/faq" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <HelpCircle className="w-3 h-3 text-goat-teal flex-shrink-0" /> FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <Image className="w-3 h-3 text-goat-teal flex-shrink-0" /> Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/financing" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <DollarSign className="w-3 h-3 text-goat-teal flex-shrink-0" /> Financing
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-goat-teal flex-shrink-0" /> Warranty
                  </Link>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 text-xs bg-goat-navy-dark px-2 py-1 rounded text-goat-ice/50">
                  <ShieldCheck className="w-3 h-3" /> Licensed
                </div>
                <div className="flex items-center gap-1 text-xs bg-goat-navy-dark px-2 py-1 rounded text-goat-ice/50">
                  <Award className="w-3 h-3" /> Insured
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Contact Us
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-goat-red rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Call 24/7</div>
                    <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-goat-navy-dark rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-goat-ice" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Headquarters</div>
                    <address className="not-italic text-goat-ice/60">
                      {companyInfo.address}<br />
                      {companyInfo.city}, {companyInfo.state} {companyInfo.zip}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-goat-navy-dark rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-goat-ice" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-goat-navy pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-goat-ice/40">
            <div className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} {companyInfo.name}.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
              <span className="hidden sm:inline text-goat-ice/25">|</span>
              <span className="hidden sm:inline">{companyInfo.licenseName} {companyInfo.licenseNumber}</span>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-goat-ice transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-goat-ice transition-colors">Terms</Link>
              <Link to="/sitemap" className="hover:text-goat-ice transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}