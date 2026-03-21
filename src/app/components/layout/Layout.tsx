import React, { Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OfferBar } from '../OfferBar';
import { Outlet, useLocation } from 'react-router';
import { offers } from '../../../data/cms';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-goat-navy-deep relative" style={{ fontFamily: "var(--font-body)" }}>
      {/* Dark concrete texture frame — visible between sections */}
      <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      <ScrollToTop />
      {/* SVG Noise Filter Definition (invisible, referenced by CSS) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="noise-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
        </defs>
      </svg>

      <Header />
      <main className="flex-grow relative z-[1]">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {offers[0] && <OfferBar offer={offers[0]} />}
    </div>
  );
}