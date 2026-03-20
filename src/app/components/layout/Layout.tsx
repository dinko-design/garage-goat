import React, { Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
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
      <main className="flex-grow">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}