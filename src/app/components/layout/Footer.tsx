import React from 'react';
import { Link } from 'react-router';
import { services, serviceAreas, companyInfo } from '../../../data/cms';
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck, Award, HelpCircle, DollarSign, Image, Star, Users, FileText, BookOpen } from 'lucide-react';
import { BrandStar } from '../BrandStar';
import { RatingStars } from '../RatingStar';
import { GoogleMapEmbed } from '../GoogleMapEmbed';
const logoImg = "/images/brand/logo.png";

const FB_URL = 'https://www.facebook.com/profile.php?id=61555203315954';
const IG_URL = 'https://www.instagram.com/garagegoat01';
const TIKTOK_URL = 'https://www.tiktok.com/@garagegoat281';
const NEXTDOOR_URL = 'https://nextdoor.com/pages/garage-goat-cypress-tx';
const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=Garage+Goat+Garage+Doors,+12507+Stoney+Mill+St,+Cypress,+TX+77429';

function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
    </svg>
  );
}

function NextdoorIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14.5h-2v-4.25c0-.69-.56-1.25-1.25-1.25h-.5c-.69 0-1.25.56-1.25 1.25v4.25h-2v-4.25C8.5 10.45 10.2 8.75 12.25 8.75h.5c2.05 0 3.75 1.7 3.75 3.75v4z" />
    </svg>
  );
}

const socialLinks = [
  { href: GOOGLE_MAPS_URL, label: 'Google', Icon: GoogleIcon },
  { href: FB_URL, label: 'Facebook', Icon: Facebook },
  { href: IG_URL, label: 'Instagram', Icon: Instagram },
  { href: TIKTOK_URL, label: 'TikTok', Icon: TikTokIcon },
  { href: NEXTDOOR_URL, label: 'Nextdoor', Icon: NextdoorIcon },
];

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
      <div className="bg-goat-navy-deep text-goat-ice/80 pt-16 pb-16 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          {/* Brand + Contact + Map Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pb-12 border-b border-goat-navy">
            {/* Brand */}
            <div>
              <img src={logoImg} alt="Garage Goat" className="h-24 w-auto mb-4" width={96} height={96} />
              <p className="text-sm leading-relaxed mb-4 text-goat-ice/60">
                {companyInfo.tagline}. Trusted garage door repair and installation in {companyInfo.city}, {companyInfo.state} and surrounding areas since {companyInfo.foundedYear}.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <RatingStars rating={5} size={16} />
                <span className="text-sm text-goat-ice/60">{companyInfo.googleRating}/5 ({companyInfo.totalReviews} reviews)</span>
              </div>
              <div className="flex gap-2">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-9 h-9 bg-goat-navy-dark/80 border border-goat-navy rounded-lg flex items-center justify-center text-goat-ice/60 hover:bg-goat-red hover:text-white hover:border-goat-red transition-all"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            {/* Contact info */}
            <div>
              <ul className="space-y-4 text-sm">
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
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="not-italic text-goat-ice/60 hover:text-white transition-colors">
                      {companyInfo.address}<br />
                      {companyInfo.city}, {companyInfo.state} {companyInfo.zip}
                    </a>
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
            {/* Map — full height on desktop, below contact on tablet/mobile */}
            <div className="sm:col-span-2 lg:col-span-1">
              <GoogleMapEmbed height={250} className="!border-goat-navy opacity-80 hover:opacity-100 transition-opacity h-full [&_iframe]:h-full" />
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {/* Services Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {services.map(service => (
                  <li key={service.id}>
                    <Link to={`/${service.slug}`} className="hover:text-goat-red transition-colors flex items-center gap-2">
                      <BrandStar size={10} />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link to="/services" className="text-goat-red hover:text-goat-red-light transition-colors text-xs" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    View All →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Areas
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
                <li className="pt-1">
                  <Link to="/areas" className="text-goat-red hover:text-goat-red-light transition-colors text-xs" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    View All →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/about" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <Users className="w-3 h-3 text-goat-teal flex-shrink-0" /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <Star className="w-3 h-3 text-goat-teal flex-shrink-0" /> Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <DollarSign className="w-3 h-3 text-goat-teal flex-shrink-0" /> Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <Image className="w-3 h-3 text-goat-teal flex-shrink-0" /> Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <Mail className="w-3 h-3 text-goat-teal flex-shrink-0" /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white mb-4 text-sm tracking-widest" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/faq" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <HelpCircle className="w-3 h-3 text-goat-teal flex-shrink-0" /> FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-goat-red transition-colors flex items-center gap-2">
                    <BookOpen className="w-3 h-3 text-goat-teal flex-shrink-0" /> Blog
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className="hover:text-goat-red transition-colors flex items-center gap-2 text-goat-gold-dark">
                    <BrandStar size={12} /> Special Offers
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
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 text-xs bg-goat-navy-dark px-2 py-1 rounded text-goat-ice/50">
                  <ShieldCheck className="w-3 h-3" /> Licensed
                </div>
                <div className="flex items-center gap-1 text-xs bg-goat-navy-dark px-2 py-1 rounded text-goat-ice/50">
                  <Award className="w-3 h-3" /> Insured
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-goat-navy pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-goat-ice/40">
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

      {/* Dinko Design Credit — pb-14 clears the sticky offer bar */}
      <div className="bg-goat-navy-deep border-t border-goat-navy pb-14">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-2.5">
          <span className="text-goat-ice/30 text-xs">Website by</span>
          <a
            href="https://dinkodesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm shadow-[#7C4DFF]/30">
              <img src="/images/dinko-design-logo.png" alt="DinkoDesign" className="w-full h-full object-cover" width={28} height={28} />
            </div>
            <span className="text-goat-ice/30 text-xs tracking-wide uppercase group-hover:text-white transition-colors">DinkoDesign.com</span>
          </a>
          <span className="text-goat-ice/20 text-xs hidden sm:inline">· Sarasota, FL Digital Marketing Agency</span>
        </div>
      </div>
    </footer>
  );
}
