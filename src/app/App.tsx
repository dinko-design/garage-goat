import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { Layout } from './components/layout/Layout';
import { companyInfo, offers } from '../data/cms';
import { Phone, Home as HomeIcon } from 'lucide-react';

// Route-based code splitting — each page loads as a separate chunk.
// With prerendering, HTML is already in the page so Suspense only affects
// client-side navigation between pages.
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const ServicesHub = React.lazy(() => import('./pages/ServicesHub').then(m => ({ default: m.ServicesHub })));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const ServiceAreaDetail = React.lazy(() => import('./pages/ServiceAreaDetail').then(m => ({ default: m.ServiceAreaDetail })));
const OfferDetail = React.lazy(() => import('./pages/OfferDetail').then(m => ({ default: m.OfferDetail })));
const OffersHub = React.lazy(() => import('./pages/OffersHub').then(m => ({ default: m.OffersHub })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Reviews = React.lazy(() => import('./pages/Reviews').then(m => ({ default: m.Reviews })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Blog = React.lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail').then(m => ({ default: m.BlogDetail })));
const Sitemap = React.lazy(() => import('./pages/Sitemap').then(m => ({ default: m.Sitemap })));
const DesignSystem = React.lazy(() => import('./pages/DesignSystem').then(m => ({ default: m.DesignSystem })));
const FAQ = React.lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const Gallery = React.lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Financing = React.lazy(() => import('./pages/Financing').then(m => ({ default: m.Financing })));
const Warranty = React.lazy(() => import('./pages/Warranty').then(m => ({ default: m.Warranty })));
const Privacy = React.lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = React.lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Pricing = React.lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const ServiceAreasHub = React.lazy(() => import('./pages/ServiceAreasHub').then(m => ({ default: m.ServiceAreasHub })));

function NotFound() {
  return (
    <div className="py-32 text-center bg-goat-cream noise-overlay-light min-h-[60vh] flex flex-col items-center justify-center relative">
      <div className="relative z-10">
        <div className="text-8xl text-goat-red mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>404</div>
        <h1 className="text-2xl text-goat-navy-dark mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
          Page Not Found
        </h1>
        <p className="text-goat-navy/60 mb-8 max-w-md mx-auto">
          Looks like this page went off track — kind of like a garage door that needs our help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-goat-navy-dark hover:bg-goat-navy text-white px-6 py-3 rounded transition-colors flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
          >
            <HomeIcon className="w-4 h-4" /> Go Home
          </Link>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/30"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
          >
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

function DynamicOfferOrNotFound() {
  const { slug } = useParams<{ slug: string }>();
  const offer = offers.find(o => o.slug === slug);
  if (offer) return <OfferDetail slug={slug!} />;
  return <NotFound />;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* ── Static Pages ── */}
            <Route path="services" element={<ServicesHub />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="about" element={<About />} />
            <Route path="offers" element={<OffersHub />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:blogSlug" element={<BlogDetail />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="areas" element={<ServiceAreasHub />} />
            <Route path="financing" element={<Financing />} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="design-system" element={<DesignSystem />} />

            {/* ── Service Pages (explicit, flat URLs for SEO) ── */}
            <Route path="garage-door-repair" element={<ServiceDetail slug="garage-door-repair" />} />
            <Route path="garage-door-spring-repair" element={<ServiceDetail slug="garage-door-spring-repair" />} />
            <Route path="garage-door-opener-repair" element={<ServiceDetail slug="garage-door-opener-repair" />} />
            <Route path="new-garage-doors" element={<ServiceDetail slug="new-garage-doors" />} />
            <Route path="emergency-garage-door-repair" element={<ServiceDetail slug="emergency-garage-door-repair" />} />

            {/* ── Service Area Pages (explicit, flat URLs for local SEO) ── */}
            <Route path="garage-door-repair-cypress-tx" element={<ServiceAreaDetail slug="garage-door-repair-cypress-tx" />} />
            <Route path="garage-door-repair-tomball-tx" element={<ServiceAreaDetail slug="garage-door-repair-tomball-tx" />} />
            <Route path="garage-door-repair-spring-tx" element={<ServiceAreaDetail slug="garage-door-repair-spring-tx" />} />
            <Route path="garage-door-repair-houston-tx" element={<ServiceAreaDetail slug="garage-door-repair-houston-tx" />} />
            <Route path="garage-door-repair-the-woodlands-tx" element={<ServiceAreaDetail slug="garage-door-repair-the-woodlands-tx" />} />
            <Route path="garage-door-repair-magnolia-tx" element={<ServiceAreaDetail slug="garage-door-repair-magnolia-tx" />} />
            <Route path="garage-door-repair-hockley-tx" element={<ServiceAreaDetail slug="garage-door-repair-hockley-tx" />} />

            {/* ── Redirects from old garagegoat.net (Wix) URLs ── */}
            <Route path="contact-8" element={<Navigate to="/contact/" replace />} />
            <Route path="privacy-policy" element={<Navigate to="/privacy/" replace />} />
            <Route path="copy-of-houston" element={<Navigate to="/garage-door-repair-houston-tx/" replace />} />
            <Route path="garage-door-repair-katy-tx" element={<Navigate to="/" replace />} />
            <Route path="post/why-an-unbalanced-garage-door-could-be-costing-you-more-than-you-think" element={<Navigate to="/blog/unbalanced-garage-door-hidden-costs/" replace />} />
            <Route path="post/keep-your-garage-door-running-smoothly-with-our-75-preventative-tune-up-package" element={<Navigate to="/blog/garage-door-preventative-tune-up/" replace />} />
            <Route path="post/the-importance-of-regular-garage-door-inspections-ensuring-safety-and-functionality" element={<Navigate to="/blog/garage-door-inspection-importance/" replace />} />
            <Route path="post/how-to-extend-the-life-of-your-garage-door-after-installation" element={<Navigate to="/blog/extend-garage-door-life-after-installation/" replace />} />
            <Route path="post/from-installation-to-repairs-14-issues-garage-goat-helps-you-address" element={<Navigate to="/blog/common-garage-door-problems/" replace />} />
            <Route path="post/how-to-tell-if-your-garage-door-cable-needs-replacing" element={<Navigate to="/blog/garage-door-cable-replacement-signs/" replace />} />
            <Route path="post/the-hidden-costs-of-diy-garage-door-installation" element={<Navigate to="/blog/diy-garage-door-installation-hidden-costs/" replace />} />
            {/* Catch-all for any other old /post/ URLs */}
            <Route path="post/*" element={<Navigate to="/blog/" replace />} />

            {/* ── Offer Pages (dynamic — supports new offers via CMS) ── */}
            <Route path=":slug" element={<DynamicOfferOrNotFound />} />

            {/* ── 404 ── */}
            <Route path="404" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
