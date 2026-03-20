import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Phone, MapPin, Star, ChevronDown, Clock, Tag, FileText, AlertTriangle, HelpCircle, Image, DollarSign, ShieldCheck, ChevronRight } from 'lucide-react';
import { services, serviceAreas, companyInfo } from '../../../data/cms';
import logoImg from "figma:asset/ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png";

/* ────────────────────────────────────────────────
   Mega Dropdown — two-column for Services
──────────────────────────────────────────────── */
function MegaDropdown({
  label,
  children,
  wide,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
  icon?: React.ReactNode;
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
        {icon}
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
  repair: <span className="text-goat-red text-xs">★</span>,
  'spring-repair': <span className="text-goat-red text-xs">★</span>,
  'opener-repair': <span className="text-goat-red text-xs">★</span>,
  installation: <span className="text-goat-red text-xs">★</span>,
  emergency: <AlertTriangle className="w-3.5 h-3.5 text-goat-gold-dark" />,
};

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-goat-navy-deep/20' : ''} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* ── Top Bar — Americana Red Banner ── */}
      <div className="bg-goat-red text-white py-1.5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 22px)`
        }} />
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Serving Cypress, Tomball, Katy & NW Houston
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Open 24/7 for Emergencies
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:flex items-center gap-1 text-sm">
              <Star className="w-3.5 h-3.5 fill-goat-gold text-goat-gold" />
              <span className="opacity-90">{companyInfo.googleRating}/5 — {companyInfo.totalReviews} Reviews</span>
            </div>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 bg-white text-goat-red px-3 py-1 rounded text-sm transition-all hover:bg-goat-cream"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              <Phone className="w-3.5 h-3.5" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav — Navy ── */}
      <div className={`border-b-4 border-goat-red transition-colors duration-300 ${isScrolled ? 'bg-goat-navy-dark/95 backdrop-blur-md' : 'bg-goat-navy-dark/[0.92] backdrop-blur-sm'}`}>
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

                  {/* Right column — Resources */}
                  <div className="flex-1">
                    <DropdownHeading>Resources</DropdownHeading>
                    <DropdownLink to="/faq" icon={<HelpCircle className="w-3.5 h-3.5 text-goat-navy/40" />}>FAQ</DropdownLink>
                    <DropdownLink to="/financing" icon={<DollarSign className="w-3.5 h-3.5 text-goat-navy/40" />}>Financing</DropdownLink>
                    <DropdownLink to="/warranty" icon={<ShieldCheck className="w-3.5 h-3.5 text-goat-navy/40" />}>Warranty Info</DropdownLink>
                    <DropdownLink to="/blog" icon={<FileText className="w-3.5 h-3.5 text-goat-navy/40" />}>Blog</DropdownLink>
                    <div className="border-t border-goat-cream-dark mt-2 pt-2">
                      <DropdownLink to="/offers" icon={<Tag className="w-3.5 h-3.5 text-goat-gold-dark" />} accent>Special Offers</DropdownLink>
                    </div>
                  </div>
                </div>
              </MegaDropdown>

              {/* Service Areas Dropdown */}
              <MegaDropdown label="Areas" icon={<MapPin className="w-3.5 h-3.5" />}>
                <DropdownHeading>We Serve</DropdownHeading>
                {serviceAreas.map(area => (
                  <DropdownLink key={area.id} to={`/${area.slug}`} icon={<MapPin className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />}>
                    {area.cityName}
                  </DropdownLink>
                ))}
              </MegaDropdown>

              {/* Direct Links */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-all text-sm tracking-wide uppercase ${isActive ? 'bg-goat-red text-white' : 'text-goat-ice hover:text-white hover:bg-white/10'}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-all text-sm tracking-wide uppercase ${isActive ? 'bg-goat-red text-white' : 'text-goat-ice hover:text-white hover:bg-white/10'}`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-all text-sm tracking-wide uppercase ${isActive ? 'bg-goat-red text-white' : 'text-goat-ice hover:text-white hover:bg-white/10'}`
                }
              >
                Reviews
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition-all text-sm tracking-wide uppercase ${isActive ? 'bg-goat-red text-white' : 'text-goat-ice hover:text-white hover:bg-white/10'}`
                }
              >
                Contact
              </NavLink>

              {/* CTA */}
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="ml-3 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-5 py-2.5 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30 text-sm tracking-wide uppercase whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
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

              <MegaDropdown label="Areas" icon={<MapPin className="w-3.5 h-3.5" />}>
                {serviceAreas.map(area => (
                  <DropdownLink key={area.id} to={`/${area.slug}`} icon={<MapPin className="w-3.5 h-3.5 text-goat-red flex-shrink-0" />}>
                    {area.cityName}
                  </DropdownLink>
                ))}
              </MegaDropdown>

              <MegaDropdown label="More">
                <DropdownLink to="/about">About Us</DropdownLink>
                <DropdownLink to="/gallery" icon={<Image className="w-3.5 h-3.5 text-goat-navy/40" />}>Gallery</DropdownLink>
                <DropdownLink to="/reviews" icon={<Star className="w-3.5 h-3.5 text-goat-navy/40" />}>Reviews</DropdownLink>
                <DropdownLink to="/contact">Contact</DropdownLink>
                <div className="border-t border-goat-cream-dark mt-2 pt-2">
                  <DropdownLink to="/faq" icon={<HelpCircle className="w-3.5 h-3.5 text-goat-navy/40" />}>FAQ</DropdownLink>
                  <DropdownLink to="/blog" icon={<FileText className="w-3.5 h-3.5 text-goat-navy/40" />}>Blog</DropdownLink>
                  <DropdownLink to="/financing" icon={<DollarSign className="w-3.5 h-3.5 text-goat-navy/40" />}>Financing</DropdownLink>
                  <DropdownLink to="/warranty" icon={<ShieldCheck className="w-3.5 h-3.5 text-goat-navy/40" />}>Warranty</DropdownLink>
                </div>
              </MegaDropdown>

              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="ml-3 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-5 py-2.5 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30 text-sm tracking-wide uppercase whitespace-nowrap"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </nav>

            {/* ═══════ Mobile Menu Button ═══════ */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="bg-goat-red text-white p-2.5 rounded"
                aria-label="Call (281) 948-5452"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button onClick={toggleMenu} className="text-white p-2" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ Mobile Nav ═══════ */}
      {isMenuOpen && (
        <div className="lg:hidden bg-goat-navy-dark border-t border-goat-navy absolute w-full shadow-2xl z-50">
          <nav className="flex flex-col" style={{ fontFamily: "var(--font-heading)" }}>

            {/* Primary Links */}
            <Link to="/services" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              Services
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-white hover:bg-white/10 px-6 py-3.5 border-b border-white/5 transition-colors uppercase tracking-wide text-sm">
              About
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

            {/* Secondary Links */}
            <div className="grid grid-cols-2 border-b border-white/5">
              <Link to="/faq" onClick={toggleMenu} className="text-goat-ice/80 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                FAQ
              </Link>
              <Link to="/financing" onClick={toggleMenu} className="text-goat-ice/80 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Financing
              </Link>
              <Link to="/warranty" onClick={toggleMenu} className="text-goat-ice/80 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Warranty
              </Link>
              <Link to="/blog" onClick={toggleMenu} className="text-goat-ice/80 hover:text-white hover:bg-white/10 px-6 py-3 transition-colors text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Blog
              </Link>
            </div>

            {/* Offers + CTA */}
            <Link to="/offers" onClick={toggleMenu} className="text-goat-gold hover:bg-white/10 px-6 py-3 border-b border-white/5 transition-colors text-sm flex items-center gap-2" style={{ fontFamily: "var(--font-body)" }}>
              <Tag className="w-3.5 h-3.5" /> Special Offers
            </Link>

            <div className="p-4">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-goat-teal text-goat-navy-deep py-3.5 rounded transition-all text-sm uppercase tracking-wide shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                <Phone className="w-4 h-4" />
                Call {companyInfo.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}