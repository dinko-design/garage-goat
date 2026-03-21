import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Phone, MapPin, ChevronDown, Clock, Tag, FileText, AlertTriangle, HelpCircle, DollarSign, ShieldCheck, ChevronRight, Image, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { services, serviceAreas, companyInfo, blogPosts, offers } from '../../../data/cms';
import { BrandStar } from '../BrandStar';
import { RatingStar } from '../RatingStar';
const logoImg = "/images/brand/logo.png";

const FB_URL = 'https://www.facebook.com/profile.php?id=61555203315954';
const IG_URL = 'https://www.instagram.com/garagegoat01';

/* ────────────────────────────────────────────────
   Mega Dropdown
──────────────────────────────────────────────── */
function MegaDropdown({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 px-3 py-2 rounded text-goat-ice hover:text-white hover:bg-white/10 transition-all text-sm tracking-wide uppercase"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
      >
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className={`absolute top-full left-0 ${wide ? 'w-[520px]' : 'w-64'} bg-white rounded-b-lg border-t-4 border-goat-red shadow-xl shadow-goat-navy-deep/30 z-50`}
          style={{ animation: 'fadeSlideDown 0.15s ease-out' }}
        >
          <div className="py-3" onClick={() => setOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownLink({ to, children, icon, accent }: { to: string; children: React.ReactNode; icon?: React.ReactNode; accent?: boolean }) {
  return (
    <Link
      to={to}
      className={`px-5 py-2.5 hover:bg-goat-ice-bright transition-colors text-sm flex items-center gap-2.5 ${accent ? 'text-goat-gold-dark hover:text-goat-red' : 'text-goat-navy hover:text-goat-red'}`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {icon}
      {children}
    </Link>
  );
}

function DropdownHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-5 pt-2 pb-1.5 text-goat-navy/40 text-xs tracking-widest"
      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
    >
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────
   Service icon map
──────────────────────────────────────────────── */
const serviceIcons: Record<string, React.ReactNode> = {
  repair: <BrandStar size={14} />,
  'spring-repair': <BrandStar size={14} />,
  'opener-repair': <BrandStar size={14} />,
  installation: <BrandStar size={14} />,
  emergency: <AlertTriangle className="w-3.5 h-3.5 text-goat-gold-dark" />,
};

/* ────────────────────────────────────────────────
   Shared nav link class helper
──────────────────────────────────────────────── */
const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded transition-all text-sm tracking-wide uppercase ${
    isActive ? 'bg-goat-red text-white' : 'text-goat-ice hover:text-white hover:bg-white/10'
  }`;

/* ────────────────────────────────────────────────
   Header Component
──────────────────────────────────────────────── */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileOpenSection(null);
  }, [location]);

  useEffect(() => {
    const SCROLL_THRESHOLD = 5;
    const HIDE_AFTER = 80;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);
      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      if (delta > 0 && currentY > HIDE_AFTER && !isMenuOpen) {
        setIsHidden(true);
      } else if (delta < 0) {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSection = (section: string) => {
    setMobileOpenSection(mobileOpenSection === section ? null : section);
  };

  const latestPosts = blogPosts.slice(0, 2);
  const mainOffer = offers[0];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-goat-navy-deep/20' : ''} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* ── Top Bar — Americana Red Banner ── */}
      <div className="bg-goat-red text-white py-1.5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 22px)`
        }} />
        <div className="container mx-auto flex items-center relative z-10 gap-4">
          {/* Left cluster — location, hours, social */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            {/* Full location — md+ */}
            <span className="hidden md:flex items-center gap-1.5 text-sm whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Serving Cypress, Tomball, The Woodlands & NW Houston
            </span>
            {/* Short location — always visible below md */}
            <span className="flex md:hidden items-center gap-1 text-xs whitespace-nowrap">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              Cypress, TX area
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-sm whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              Open 24/7
            </span>
            {/* Social icons — md+ */}
            <div className="hidden md:flex items-center gap-2">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          {/* Right cluster — rating + phone */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-sm whitespace-nowrap">
              <RatingStar size={14} className="text-goat-gold" />
              <span className="opacity-90">{companyInfo.googleRating}/5 — {companyInfo.totalReviews} Reviews</span>
            </div>
            {/* Compact rating for xs */}
            <div className="flex sm:hidden items-center gap-1 text-xs whitespace-nowrap">
              <RatingStar size={12} className="text-goat-gold" />
              <span className="opacity-90">{companyInfo.googleRating}</span>
            </div>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 bg-white text-goat-red px-3 py-1 rounded text-sm transition-all hover:bg-goat-cream whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{companyInfo.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav — Navy ── */}
      <div className={`transition-colors duration-300 ${isScrolled ? 'bg-goat-navy-dark/95 backdrop-blur-md' : 'bg-goat-navy-dark/[0.92] backdrop-blur-sm'}`}>
        <div className="container mx-auto py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10">
              <img
                src={logoImg}
                alt="Garage Goat Garage Doors"
                className="h-24 md:h-[108px] w-auto -my-4 md:-my-5 drop-shadow-lg"
                width={108}
                height={108}
              />
            </Link>

            {/* ═══════ Desktop Nav (xl) ═══════ */}
            <nav className="hidden xl:flex items-center gap-0.5" style={{ fontFamily: "var(--font-heading)" }}>

              {/* Services Mega Dropdown */}
              <MegaDropdown label="Services" wide>
                <div className="flex">
                  {/* Left column — Services */}
                  <div className="flex-1 border-r border-goat-cream-dark">
                    <DropdownHeading>Our Services</DropdownHeading>
                    {services.map(svc => (
                      <Link
                        key={svc.id}
                        to={`/${svc.slug}`}
                        className={`px-5 py-2.5 hover:bg-goat-ice-bright transition-colors text-sm flex items-center gap-2.5 ${
                          svc.id === 'emergency' ? 'text-goat-gold-dark hover:text-goat-red' : 'text-goat-navy hover:text-goat-red'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {serviceIcons[svc.id]}
                        {svc.name}
                      </Link>
                    ))}
                    <div className="px-5 pt-3">
                      <Link
                        to="/services"
                        className="text-goat-red hover:text-goat-red-dark text-sm flex items-center gap-1 transition-colors"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}
                      >
                        View All Services <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right column — Resources + Blog */}
                  <div className="flex-1">
                    <DropdownHeading>Resources</DropdownHeading>
                    <DropdownLink to="/faq" icon={<HelpCircle className="w-3.5 h-3.5 text-goat-navy/40" />}>FAQ</DropdownLink>
                    <DropdownLink to="/financing" icon={<DollarSign className="w-3.5 h-3.5 text-goat-navy/40" />}>Financing</DropdownLink>
                    <DropdownLink to="/warranty" icon={<ShieldCheck className="w-3.5 h-3.5 text-goat-navy/40" />}>Warranty Info</DropdownLink>
                    <DropdownLink to="/contact" icon={<MessageSquare className="w-3.5 h-3.5 text-goat-navy/40" />}>Contact Us</DropdownLink>

                    {latestPosts.length > 0 && (
                      <>
                        <div className="border-t border-goat-cream-dark mt-2 pt-1">
                          <DropdownHeading>Latest Blog</DropdownHeading>
                        </div>
                        {latestPosts.map(post => (
                          <DropdownLink key={post.id} to={`/blog/${post.slug}`} icon={<FileText className="w-3.5 h-3.5 text-goat-navy/40" />}>
                            <span className="line-clamp-1">{post.title}</span>
                          </DropdownLink>
                        ))}
                      </>
                    )}

                    <div className="border-t border-goat-cream-dark mt-2 pt-2">
                      <DropdownLink to="/offers" icon={<Tag className="w-3.5 h-3.5 text-goat-gold-dark" />} accent>Special Offers</DropdownLink>
                    </div>
                  </div>
                </div>
              </MegaDropdown>

              {/* Service Areas Dropdown */}
              <MegaDropdown label="Areas">
                <DropdownHeading>We Serve</DropdownHeading>
                {serviceAreas.map(area => (
                  <DropdownLink key={area.id} to={`/${area.slug}`} icon={<MapPin className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />}>
                    {area.cityName}
                  </DropdownLink>
                ))}
                <div className="px-5 pt-3">
                  <Link
                    to="/areas"
                    className="text-goat-red hover:text-goat-red-dark text-sm flex items-center gap-1 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}
                  >
                    View All Areas <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MegaDropdown>

              {/* Direct Links */}
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
              <NavLink to="/gallery" className={navLinkClasses}>Gallery</NavLink>
              <NavLink to="/reviews" className={navLinkClasses}>Reviews</NavLink>

              {/* Primary CTA — Get a Quote */}
              <Link
                to="/contact"
                className="ml-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-4 py-2.5 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30 text-sm tracking-wide uppercase whitespace-nowrap"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Get a Quote
              </Link>

              {/* Secondary CTA — Offers */}
              {mainOffer && (
                <Link
                  to="/offers"
                  className="ml-1 border border-goat-gold/50 text-goat-gold hover:bg-goat-gold/10 hover:border-goat-gold px-3 py-2.5 rounded transition-all flex items-center gap-1.5 text-sm tracking-wide uppercase whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  aria-label="View special offers"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {mainOffer.discountAmount}
                </Link>
              )}
            </nav>

            {/* ═══════ Tablet Nav (lg but not xl) ═══════ */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5" style={{ fontFamily: "var(--font-heading)" }}>
              <MegaDropdown label="Services">
                <DropdownHeading>Our Services</DropdownHeading>
                {services.map(svc => (
                  <DropdownLink
                    key={svc.id}
                    to={`/${svc.slug}`}
                    icon={serviceIcons[svc.id]}
                    accent={svc.id === 'emergency'}
                  >
                    {svc.name}
                  </DropdownLink>
                ))}
                <div className="border-t border-goat-cream-dark mt-2 pt-2">
                  <DropdownLink to="/services" icon={<ChevronRight className="w-3.5 h-3.5 text-goat-red" />}>All Services</DropdownLink>
                  <DropdownLink to="/offers" icon={<Tag className="w-3.5 h-3.5 text-goat-gold-dark" />} accent>Special Offers</DropdownLink>
                </div>
              </MegaDropdown>

              <MegaDropdown label="Areas">
                {serviceAreas.map(area => (
                  <DropdownLink key={area.id} to={`/${area.slug}`} icon={<MapPin className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />}>
                    {area.cityName}
                  </DropdownLink>
                ))}
                <div className="border-t border-goat-cream-dark mt-2 pt-2">
                  <DropdownLink to="/areas" icon={<ChevronRight className="w-3.5 h-3.5 text-goat-red" />}>All Service Areas</DropdownLink>
                </div>
              </MegaDropdown>

              <MegaDropdown label="More">
                <DropdownLink to="/about">About Us</DropdownLink>
                <DropdownLink to="/blog" icon={<FileText className="w-3.5 h-3.5 text-goat-navy/40" />}>Blog</DropdownLink>
                <DropdownLink to="/gallery" icon={<Image className="w-3.5 h-3.5 text-goat-navy/40" />}>Gallery</DropdownLink>
                <DropdownLink to="/reviews" icon={<RatingStar size={14} className="text-goat-navy/40" />}>Reviews</DropdownLink>
                <DropdownLink to="/contact" icon={<MessageSquare className="w-3.5 h-3.5 text-goat-navy/40" />}>Contact</DropdownLink>
                <div className="border-t border-goat-cream-dark mt-2 pt-2">
                  <DropdownLink to="/faq" icon={<HelpCircle className="w-3.5 h-3.5 text-goat-navy/40" />}>FAQ</DropdownLink>
                  <DropdownLink to="/financing" icon={<DollarSign className="w-3.5 h-3.5 text-goat-navy/40" />}>Financing</DropdownLink>
                  <DropdownLink to="/warranty" icon={<ShieldCheck className="w-3.5 h-3.5 text-goat-navy/40" />}>Warranty</DropdownLink>
                </div>
              </MegaDropdown>

              {/* Primary CTA */}
              <Link
                to="/contact"
                className="ml-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-4 py-2.5 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30 text-sm tracking-wide uppercase whitespace-nowrap"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Get a Quote
              </Link>

              {/* Secondary CTA — Offers */}
              {mainOffer && (
                <Link
                  to="/offers"
                  className="ml-1 border border-goat-gold/50 text-goat-gold hover:bg-goat-gold/10 hover:border-goat-gold px-3 py-2.5 rounded transition-all flex items-center gap-1.5 text-xs tracking-wide uppercase whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  aria-label="View special offers"
                >
                  <Tag className="w-3 h-3" />
                  {mainOffer.discountAmount}
                </Link>
              )}
            </nav>

            {/* ═══════ Mobile Menu Button ═══════ */}
            <div className="lg:hidden flex items-center gap-3">
              <button onClick={toggleMenu} className="text-white p-2" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ Mobile Nav ═══════ */}
      {isMenuOpen && (
        <div className="lg:hidden bg-goat-navy-dark border-t border-goat-navy absolute w-full shadow-2xl z-50 max-h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="flex flex-col" style={{ fontFamily: "var(--font-heading)" }}>

            {/* Service area info strip */}
            <div className="flex items-center gap-2 px-6 py-2.5 bg-goat-navy-deep/50 text-goat-ice/60 text-xs border-b border-white/5">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              Serving Cypress, Tomball, The Woodlands & NW Houston
            </div>

            {/* Services — expandable */}
            <div className="border-b border-white/5">
              <button
                onClick={() => toggleMobileSection('services')}
                className="w-full text-white hover:bg-white/10 px-6 py-3.5 transition-colors uppercase tracking-wide text-sm flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'services' && (
                <div className="bg-goat-navy-deep/50 pb-2">
                  {services.map(svc => (
                    <Link
                      key={svc.id}
                      to={`/${svc.slug}`}
                      onClick={toggleMenu}
                      className={`px-8 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${
                        svc.id === 'emergency'
                          ? 'text-goat-gold-dark hover:text-goat-gold'
                          : 'text-goat-ice/80 hover:text-white'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {serviceIcons[svc.id]}
                      {svc.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={toggleMenu}
                    className="px-8 py-2 text-goat-red text-xs uppercase tracking-wider flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    View All Services <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Areas — expandable */}
            <div className="border-b border-white/5">
              <button
                onClick={() => toggleMobileSection('areas')}
                className="w-full text-white hover:bg-white/10 px-6 py-3.5 transition-colors uppercase tracking-wide text-sm flex items-center justify-between"
              >
                Areas We Serve
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSection === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'areas' && (
                <div className="bg-goat-navy-deep/50 pb-2">
                  {serviceAreas.map(area => (
                    <Link
                      key={area.id}
                      to={`/${area.slug}`}
                      onClick={toggleMenu}
                      className="px-8 py-2.5 text-goat-ice/80 hover:text-white text-sm flex items-center gap-2.5 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <MapPin className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />
                      {area.cityName}
                    </Link>
                  ))}
                  <Link
                    to="/areas"
                    onClick={toggleMenu}
                    className="px-8 py-2 text-goat-red text-xs uppercase tracking-wider flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    View All Areas <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Primary Links */}
            <Link to="/about" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              About
            </Link>
            <Link to="/blog" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              Blog
            </Link>
            <Link to="/gallery" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              Gallery
            </Link>
            <Link to="/reviews" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              Reviews
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              Contact
            </Link>

            {/* Secondary Links — 2-column grid */}
            <div className="grid grid-cols-2 border-b border-white/5">
              <Link to="/faq" onClick={toggleMenu} className="text-goat-ice/70 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                FAQ
              </Link>
              <Link to="/financing" onClick={toggleMenu} className="text-goat-ice/70 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Financing
              </Link>
              <Link to="/warranty" onClick={toggleMenu} className="text-goat-ice/70 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Warranty
              </Link>
              <Link to="/pricing" onClick={toggleMenu} className="text-goat-ice/70 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Pricing
              </Link>
            </div>

            {/* Offer Card — prominent */}
            {mainOffer && (
              <Link
                to="/offers"
                onClick={toggleMenu}
                className="mx-4 my-3 bg-goat-red/20 border border-goat-red/40 rounded-lg px-5 py-3.5 flex items-center gap-3 group hover:bg-goat-red/30 transition-colors"
              >
                <Tag className="w-5 h-5 text-goat-red flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {mainOffer.discountAmount}
                  </div>
                  <div className="text-goat-ice/60 text-xs truncate">{mainOffer.title}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-goat-ice/40 group-hover:text-white transition-colors flex-shrink-0" />
              </Link>
            )}

            {/* CTAs */}
            <div className="px-4 pb-2 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 bg-goat-teal text-goat-navy-deep py-3.5 rounded transition-all text-sm uppercase tracking-wide shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded transition-all text-sm uppercase tracking-wide hover:bg-white/20"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                <Phone className="w-4 h-4" />
                Call {companyInfo.phone}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 py-3 border-t border-white/5">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-goat-ice/40 hover:text-white transition-colors p-1.5" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-goat-ice/40 hover:text-white transition-colors p-1.5" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
