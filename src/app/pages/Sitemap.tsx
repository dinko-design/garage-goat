import React from 'react';
import { Link } from 'react-router';
import { services, serviceAreas, offers, blogPosts, companyInfo } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider, GarageDoorDivider } from '../components/StarAccent';
import {
  Home,
  Wrench,
  MapPin,
  Tag,
  FileText,
  Phone,
  Globe,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  Image,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';

const BASE_URL = 'https://www.garagegoatdoors.com';

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  description: string;
  links: { label: string; to: string; description?: string; badge?: string }[];
}

export function Sitemap() {
  const sections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: Home,
      description: 'Core pages of the Garage Goat website.',
      links: [
        { label: 'Home', to: '/', description: 'Welcome to Garage Goat Garage Doors' },
        { label: 'About Us', to: '/about', description: 'Our story, team, and values' },
        { label: 'Contact', to: '/contact', description: 'Request service or get a free estimate' },
        { label: 'Customer Reviews', to: '/reviews', description: `${companyInfo.googleRating}/5 rating from ${companyInfo.totalReviews}+ Google reviews` },
        { label: 'Gallery', to: '/gallery', description: 'Browse our completed projects and installations' },
      ],
    },
    {
      title: 'Services',
      icon: Wrench,
      description: 'Complete garage door services for residential and commercial customers.',
      links: [
        { label: 'All Services', to: '/services', description: 'Browse our full service lineup', badge: 'Hub' },
        ...services.map(s => ({
          label: s.name,
          to: `/${s.slug}`,
          description: s.introParagraph.substring(0, 100) + '...',
        })),
      ],
    },
    {
      title: 'Service Areas',
      icon: MapPin,
      description: 'We proudly serve these communities in the greater Houston area.',
      links: serviceAreas.map(a => ({
        label: a.cityName,
        to: `/${a.slug}`,
        description: a.introParagraph.substring(0, 100) + '...',
      })),
    },
    {
      title: 'Special Offers',
      icon: Tag,
      description: 'Current promotions and money-saving deals.',
      links: [
        { label: 'All Offers', to: '/offers', description: 'Browse all current promotions', badge: 'Hub' },
        ...offers.map(o => ({
          label: o.title,
          to: `/${o.slug}`,
          description: o.headline,
          badge: o.discountAmount,
        })),
      ],
    },
    {
      title: 'Blog & Resources',
      icon: FileText,
      description: 'Helpful articles, guides, and company information.',
      links: [
        { label: 'Blog', to: '/blog', description: 'All articles and guides', badge: 'Hub' },
        ...blogPosts.map(b => ({
          label: b.title,
          to: `/blog/${b.slug}`,
          description: b.excerpt.substring(0, 100) + '...',
        })),
        { label: 'FAQ', to: '/faq', description: 'Frequently asked questions about our services' },
        { label: 'Financing', to: '/financing', description: 'Flexible payment plans and financing options' },
        { label: 'Warranty', to: '/warranty', description: 'Our warranty coverage and terms' },
        { label: 'Privacy Policy', to: '/privacy', description: 'How we handle your information' },
        { label: 'Terms of Service', to: '/terms', description: 'Terms and conditions for our services' },
      ],
    },
  ];

  // Compute total page count
  const totalPages = sections.reduce((sum, sec) => sum + sec.links.length, 0);

  return (
    <>
      <SEO
        title="Sitemap | Garage Goat Garage Doors — Cypress, TX"
        description="Complete sitemap for Garage Goat Garage Doors. Browse all pages including services, service areas, blog articles, and special offers."
        path="/sitemap"
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" items={[{ label: 'Sitemap' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Site<span className="text-goat-red">map</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto">
            A complete directory of every page on our website. {totalPages} pages and counting.
          </p>
        </div>
      </div>

      {/* Quick Jump Nav */}
      <div className="bg-white border-b border-goat-cream-dark sticky top-0 z-30">
        <div className="container mx-auto py-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {sections.map(section => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 text-goat-navy/70 hover:text-goat-red px-3 py-1.5 rounded-full text-sm transition-colors hover:bg-goat-cream border border-transparent hover:border-goat-cream-dark"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                <section.icon className="w-3.5 h-3.5" />
                {section.title}
              </a>
            ))}
            <a
              href={`${BASE_URL}/sitemap.xml`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-goat-navy/50 hover:text-goat-teal-deep px-3 py-1.5 rounded-full text-sm transition-colors"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              <Globe className="w-3.5 h-3.5" />
              XML Sitemap
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="bg-goat-cream py-16 lg:py-24 relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-5xl">

          {sections.map((section, sIdx) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 last:mb-0 scroll-mt-20"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-2">
                <div className="w-11 h-11 bg-goat-navy-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-goat-teal" />
                </div>
                <div>
                  <h2
                    className="text-2xl text-goat-navy-dark"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-goat-navy/50 text-sm">{section.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-goat-cream-dark mt-3 mb-5 ml-15" />

              {/* Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-0 md:ml-15">
                {section.links.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group flex items-start gap-3 bg-white rounded-lg p-4 border border-goat-cream-dark hover:border-goat-navy/20 hover:shadow-md hover:shadow-goat-navy-deep/5 transition-all"
                  >
                    <span className="text-goat-red mt-0.5 flex-shrink-0 text-sm">★</span>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="text-goat-navy-dark group-hover:text-goat-red transition-colors"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                        >
                          {link.label}
                        </span>
                        {link.badge && (
                          <span className="text-xs bg-goat-red/10 text-goat-red px-2 py-0.5 rounded" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                            {link.badge}
                          </span>
                        )}
                      </div>
                      {link.description && (
                        <p className="text-goat-navy/50 text-xs mt-0.5 line-clamp-1">{link.description}</p>
                      )}
                      <span className="text-goat-navy/30 text-xs mt-1 block truncate">
                        {BASE_URL}{link.to}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-goat-navy/20 group-hover:text-goat-red group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>

              {/* Section count */}
              <div className="text-right mt-3 mr-1">
                <span className="text-xs text-goat-navy/30" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                  {section.links.length} page{section.links.length !== 1 ? 's' : ''}
                </span>
              </div>

              {sIdx < sections.length - 1 && (
                <GarageDoorDivider className="text-goat-navy mt-8" />
              )}
            </div>
          ))}

          {/* Summary Box */}
          <div className="mt-16 bg-goat-navy-dark rounded-lg p-8 text-white relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10">
              <StarDivider className="text-goat-ice mb-4" />
              <div className="text-center">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Site Summary
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto mb-6">
                  {sections.map(section => (
                    <div key={section.title} className="text-center">
                      <div className="text-2xl text-goat-teal" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {section.links.length}
                      </div>
                      <div className="text-xs text-goat-ice/50" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {section.title}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-goat-navy pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="text-goat-ice/50 text-sm">
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }} className="text-white">{totalPages}</span> total pages indexed
                  </div>
                  <span className="hidden sm:inline text-goat-navy-light">|</span>
                  <div className="flex items-center gap-2 text-goat-ice/50 text-sm">
                    <Globe className="w-4 h-4" />
                    <a
                      href={`${BASE_URL}/sitemap.xml`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-goat-teal transition-colors underline underline-offset-2"
                    >
                      View XML Sitemap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-goat-navy/50 mb-4">Can't find what you're looking for?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-3 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/30"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
              <Link
                to="/contact"
                className="bg-goat-navy-dark hover:bg-goat-navy text-white px-8 py-3 rounded transition-colors flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}