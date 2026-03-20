import React, { useState } from 'react';
import { Phone, ArrowRight, AlertTriangle, MapPin, Check, Star, Copy, CheckCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { StarDivider, TripleStarDivider, StarBullet, StarCircle, GarageDoorDivider, ShieldStarWatermark } from '../components/StarAccent';

/* ───────────────────── helpers ───────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto pl-2 flex-shrink-0"
      title="Copy"
    >
      {copied ? <CheckCheck className="w-3.5 h-3.5 text-goat-teal" /> : <Copy className="w-3.5 h-3.5 text-goat-navy/40" />}
    </button>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 pt-16 pb-4">
      <StarDivider className="text-goat-navy/50 mb-4" size="sm" />
      <h2 className="text-goat-navy-dark text-center">{children}</h2>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-goat-navy-deep text-goat-ice text-xs p-4 rounded-lg overflow-x-auto mt-3 leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

/* ───────────────────── Color Data ───────────────────── */

const colorGroups = [
  {
    label: 'Navy (Brand Foundation)',
    colors: [
      { name: 'goat-navy-deep', hex: '#0F1A2E', text: 'text-white' },
      { name: 'goat-navy-dark', hex: '#1E2E3A', text: 'text-white' },
      { name: 'goat-navy', hex: '#2D4A6F', text: 'text-white' },
      { name: 'goat-navy-light', hex: '#3D6B99', text: 'text-white' },
      { name: 'goat-navy-muted', hex: '#5A8AB8', text: 'text-white' },
    ],
  },
  {
    label: 'Red (Brand Warmth)',
    colors: [
      { name: 'goat-red-dark', hex: '#A82325', text: 'text-white' },
      { name: 'goat-red', hex: '#D22D2F', text: 'text-white' },
      { name: 'goat-red-light', hex: '#E84848', text: 'text-white' },
      { name: 'goat-red-glow', hex: '#FF4444', text: 'text-white' },
    ],
  },
  {
    label: 'Teal (Primary CTA)',
    colors: [
      { name: 'goat-teal-deep', hex: '#4A9E98', text: 'text-white' },
      { name: 'goat-teal-dark', hex: '#5FB3AD', text: 'text-goat-navy-deep' },
      { name: 'goat-teal', hex: '#78C9C3', text: 'text-goat-navy-deep' },
      { name: 'goat-teal-light', hex: '#9AD8D3', text: 'text-goat-navy-deep' },
    ],
  },
  {
    label: 'Gold & Silver (Accents)',
    colors: [
      { name: 'goat-gold-dark', hex: '#B8905A', text: 'text-white' },
      { name: 'goat-gold', hex: '#D4A76A', text: 'text-goat-navy-deep' },
      { name: 'goat-silver-dark', hex: '#8A8F92', text: 'text-white' },
      { name: 'goat-silver', hex: '#A9AEB1', text: 'text-goat-navy-deep' },
      { name: 'goat-silver-light', hex: '#C4C8CA', text: 'text-goat-navy-deep' },
    ],
  },
  {
    label: 'Ice & Cream (Backgrounds)',
    colors: [
      { name: 'goat-ice', hex: '#B8D0E4', text: 'text-goat-navy-deep' },
      { name: 'goat-ice-light', hex: '#D4E4F0', text: 'text-goat-navy-deep' },
      { name: 'goat-ice-pale', hex: '#E3EDF5', text: 'text-goat-navy-dark' },
      { name: 'goat-ice-bright', hex: '#F0F5FA', text: 'text-goat-navy-dark' },
      { name: 'goat-cream-warm', hex: '#EDE5D8', text: 'text-goat-navy-dark' },
      { name: 'goat-cream-dark', hex: '#F0EBE3', text: 'text-goat-navy-dark' },
      { name: 'goat-cream', hex: '#FBF8F3', text: 'text-goat-navy-dark' },
    ],
  },
];

/* ───────────────────── Quick-Jump Nav ───────────────────── */

const sections = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'buttons', label: 'Buttons & CTAs' },
  { id: 'components', label: 'Star Components' },
  { id: 'patterns', label: 'CSS Patterns' },
  { id: 'textures', label: 'Textures & Overlays' },
  { id: 'hierarchy', label: 'Color Hierarchy' },
];

/* ───────────────────── Page ───────────────────── */

export function DesignSystem() {
  return (
    <span className="contents">
      <SEO
        title="Design System | Garage Goat Garage Doors"
        description="The visual language of Garage Goat — Americana grit meets clean professionalism. Every token, pattern, and component that builds our brand."
        path="/design-system"
      />

      {/* ────── Hero ────── */}
      <section className="relative bg-goat-navy-deep text-white py-20 overflow-hidden noise-overlay">
        <div className="sunburst sunburst-bright" />
        <div className="container mx-auto text-center relative z-10">
          <StarCircle size="lg" className="mx-auto mb-4 border-goat-teal/30 bg-goat-teal/10" />
          <h1 className="text-goat-ice mb-3">
            Design <span className="text-accent-red">System</span>
          </h1>
          <p className="text-goat-ice/70 max-w-2xl mx-auto">
            The visual language of Garage Goat — Americana grit meets clean professionalism.
            Every token, pattern, and component that builds our brand.
          </p>
          <GarageDoorDivider className="text-goat-teal mt-8" />
        </div>
      </section>

      {/* ────── Quick-Jump Nav ────── */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-goat-cream-dark shadow-sm">
        <div className="container mx-auto py-3 flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 rounded text-sm whitespace-nowrap text-goat-navy hover:bg-goat-ice-bright hover:text-goat-red transition-colors"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-goat-cream">
        <div className="container mx-auto pb-24">

          {/* ════════════════════ COLORS ════════════════════ */}
          <SectionTitle id="colors">Color Palette</SectionTitle>
          <p className="text-goat-navy/60 text-center max-w-xl mx-auto mb-10">
            All custom Tailwind tokens are prefixed with <code className="text-goat-red bg-goat-red/10 px-1.5 py-0.5 rounded text-sm">goat-</code>.
            Use them like any other Tailwind color utility.
          </p>

          {colorGroups.map(group => (
            <div key={group.label} className="mb-10">
              <h3 className="text-goat-navy-dark mb-4">{group.label}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.colors.map(c => (
                  <div key={c.name} className="group rounded-lg overflow-hidden shadow-sm border border-goat-cream-dark hover:shadow-md transition-shadow">
                    <div
                      className={`h-20 flex items-end p-3 ${c.text}`}
                      style={{ backgroundColor: c.hex }}
                    >
                      <span className="text-xs opacity-80" style={{ fontFamily: 'var(--font-heading)' }}>{c.hex}</span>
                    </div>
                    <div className="bg-white px-3 py-2 flex items-center">
                      <span className="text-xs text-goat-navy" style={{ fontFamily: 'var(--font-body)' }}>{c.name}</span>
                      <CopyButton text={`bg-${c.name}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <CodeBlock>{`<!-- Usage -->
<div className="bg-goat-navy-dark text-goat-ice">...</div>
<div className="bg-goat-teal text-goat-navy-deep">...</div>
<span className="text-goat-red">★</span>
<div className="border-goat-gold">...</div>`}</CodeBlock>


          {/* ════════════════════ TYPOGRAPHY ════════════════════ */}
          <SectionTitle id="typography">Typography</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Heading font */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-goat-navy-deep text-white text-xs rounded" style={{ fontFamily: 'var(--font-heading)' }}>Heading</span>
                <span className="text-goat-navy/50 text-sm">Outfit (Variable, 100–900)</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)' }}>
                <p className="text-goat-navy-dark mb-1" style={{ fontSize: 'clamp(1.875rem, 1.25rem + 2.5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  H1 — Hero Text
                </p>
                <p className="text-goat-navy-dark mb-1" style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 3rem)', fontWeight: 700, lineHeight: 1.2, textTransform: 'uppercase' }}>
                  H2 — Section Title
                </p>
                <p className="text-goat-navy-dark mb-1" style={{ fontSize: 'clamp(1.25rem, 1rem + 0.75vw, 1.75rem)', fontWeight: 600, lineHeight: 1.3 }}>
                  H3 — Card Heading
                </p>
                <p className="text-goat-navy-dark" style={{ fontSize: 'clamp(1.1rem, 0.95rem + 0.4vw, 1.4rem)', fontWeight: 600, lineHeight: 1.4 }}>
                  H4 — Sub-heading
                </p>
              </div>
            </div>

            {/* Body font */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-goat-navy text-white text-xs rounded" style={{ fontFamily: 'var(--font-heading)' }}>Body</span>
                <span className="text-goat-navy/50 text-sm">Inter (Variable, 100–900)</span>
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }}>
                <p className="text-goat-navy-dark mb-3">
                  Body text uses Inter at the root fluid size: <code className="bg-goat-cream-dark px-1 rounded text-sm">clamp(16px, 14px + 0.35vw, 21px)</code>.
                  Clean, highly legible, and professional.
                </p>
                <p className="text-goat-navy/60 text-sm mb-2">
                  Small text (text-sm) — for captions, labels, and supporting copy.
                </p>
                <p className="text-goat-navy/40 text-xs">
                  Extra-small (text-xs) — badges, meta info, timestamps.
                </p>
              </div>
            </div>
          </div>

          {/* Text accent demos */}
          <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm mb-4">
            <h4 className="text-goat-navy-dark mb-4">Text Accent Utilities</h4>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.text-accent-red</span>
                <h2 className="text-goat-navy-dark">
                  Fast <span className="text-accent-red">Garage Door</span> Repair
                </h2>
              </div>
              <div>
                <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.accent-underline</span>
                <h3 className="text-goat-navy-dark">
                  <span className="accent-underline">Trusted</span> Since Day One
                </h3>
              </div>
            </div>
          </div>

          <CodeBlock>{`<!-- Heading with red accent -->
<h1>Fast <span className="text-accent-red">Garage Door</span> Repair</h1>

<!-- Underline accent -->
<h3><span className="accent-underline">Trusted</span> Since Day One</h3>

<!-- Font families -->
style={{ fontFamily: "var(--font-heading)" }}
style={{ fontFamily: "var(--font-body)" }}`}</CodeBlock>


          {/* ════════════════════ BUTTONS & CTAS ════════════════════ */}
          <SectionTitle id="buttons">Buttons & CTAs</SectionTitle>

          <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm space-y-8">
            {/* Primary row */}
            <div>
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-heading)' }}>
                Primary — Teal (Main CTA)
              </span>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  <Phone className="w-4 h-4" /> Call Now
                </button>
                <button
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Get Free Estimate <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-5 py-2.5 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30 text-sm"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Secondary row */}
            <div>
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-heading)' }}>
                Secondary — Navy (Navigation, Fallback)
              </span>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-goat-navy-dark hover:bg-goat-navy text-white px-6 py-3 rounded transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="border-2 border-goat-navy-dark text-goat-navy-dark hover:bg-goat-navy-dark hover:text-white px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Danger / Emergency */}
            <div>
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-heading)' }}>
                Emergency / Red Accent
              </span>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-goat-red hover:bg-goat-red-dark text-white px-6 py-3 rounded transition-colors flex items-center gap-2 shadow-lg shadow-goat-red/20"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  <AlertTriangle className="w-4 h-4" /> 24/7 Emergency
                </button>
                <button
                  className="bg-white text-goat-red border-2 border-goat-red hover:bg-goat-red hover:text-white px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Claim Offer
                </button>
              </div>
            </div>

            {/* Dark background buttons */}
            <div className="bg-goat-navy-deep rounded-lg p-6 -mx-2">
              <span className="text-xs text-goat-ice/40 uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-heading)' }}>
                On Dark Backgrounds
              </span>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all flex items-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  <Phone className="w-4 h-4" /> Call Now
                </button>
                <button
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Explore Services
                </button>
                <button
                  className="bg-goat-red hover:bg-goat-red-dark text-white px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Emergency Call
                </button>
              </div>
            </div>
          </div>

          <CodeBlock>{`<!-- Primary CTA (Teal) -->
<a className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep 
  px-6 py-3 rounded shadow-lg shadow-goat-teal/30">
  Call Now
</a>

<!-- Secondary (Navy) -->
<a className="bg-goat-navy-dark hover:bg-goat-navy text-white 
  px-6 py-3 rounded">
  View All Services
</a>

<!-- Emergency (Red) -->
<a className="bg-goat-red hover:bg-goat-red-dark text-white 
  px-6 py-3 rounded shadow-lg shadow-goat-red/20">
  24/7 Emergency
</a>`}</CodeBlock>


          {/* ════════════════════ STAR COMPONENTS ════════════════════ */}
          <SectionTitle id="components">Star & Brand Components</SectionTitle>
          <p className="text-goat-navy/60 text-center max-w-xl mx-auto mb-10">
            Shared components from <code className="text-goat-red bg-goat-red/10 px-1.5 py-0.5 rounded text-sm">StarAccent.tsx</code> that
            bring the Americana star motif and logo-inspired marks across the site.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* StarDivider */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>StarDivider</span>
              <div className="space-y-4 py-4">
                <StarDivider size="sm" className="text-goat-navy" />
                <StarDivider size="md" className="text-goat-navy" />
                <StarDivider size="lg" className="text-goat-navy" />
              </div>
              <p className="text-xs text-goat-navy/50 mt-2">Sizes: sm, md, lg</p>
            </div>

            {/* TripleStarDivider */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>TripleStarDivider</span>
              <div className="py-6">
                <TripleStarDivider className="text-goat-navy" />
              </div>
              <p className="text-xs text-goat-navy/50 mt-2">Bolder section header accent</p>
            </div>

            {/* StarCircle */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>StarCircle</span>
              <div className="flex items-center gap-4 py-4 justify-center">
                <StarCircle size="sm" />
                <StarCircle size="md" />
                <StarCircle size="lg" />
              </div>
              <p className="text-xs text-goat-navy/50 mt-2">Logo "O" star — hero focal mark</p>
            </div>

            {/* StarBullet */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>StarBullet</span>
              <div className="space-y-2 py-2">
                <StarBullet>Licensed & insured technicians</StarBullet>
                <StarBullet>Same-day service available</StarBullet>
                <StarBullet>Lifetime warranty on springs</StarBullet>
              </div>
            </div>

            {/* GarageDoorDivider */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>GarageDoorDivider</span>
              <div className="py-4">
                <GarageDoorDivider className="text-goat-navy" />
                <div className="h-4" />
                <GarageDoorDivider className="text-goat-red" />
                <div className="h-4" />
                <GarageDoorDivider className="text-goat-teal" />
              </div>
              <p className="text-xs text-goat-navy/50 mt-2">Logo garage-door panel lines</p>
            </div>

            {/* ShieldStarWatermark */}
            <div className="bg-white rounded-xl p-6 border border-goat-cream-dark shadow-sm relative overflow-hidden">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest mb-4 block relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>ShieldStarWatermark</span>
              <ShieldStarWatermark className="w-32 h-32 text-goat-navy/5 mx-auto" />
              <p className="text-xs text-goat-navy/50 mt-2 relative z-10">Background watermark decoration</p>
            </div>
          </div>

          <CodeBlock>{`import { StarDivider, TripleStarDivider, StarBullet, 
  StarCircle, GarageDoorDivider, ShieldStarWatermark 
} from '../components/StarAccent';

<StarDivider size="md" className="text-goat-navy" />
<TripleStarDivider className="text-goat-navy" />
<StarCircle size="lg" className="mx-auto mb-4" />
<StarBullet>Licensed & insured</StarBullet>
<GarageDoorDivider className="text-goat-teal" />
<ShieldStarWatermark className="w-40 h-40 text-goat-navy/5" />`}</CodeBlock>


          {/* ════════════════════ CSS PATTERNS ════════════════════ */}
          <SectionTitle id="patterns">CSS Patterns & Decorations</SectionTitle>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Ribbon Banner */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.ribbon-banner</span>
              <div className="py-4">
                <span className="ribbon-banner text-sm">Special Offer</span>
              </div>
            </div>

            {/* Shield Badge */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.shield-badge</span>
              <div className="shield-badge w-28 h-32">
                <div className="text-center">
                  <Star className="w-6 h-6 text-goat-gold fill-goat-gold mx-auto mb-1" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>Trusted</span>
                </div>
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.gradient-divider</span>
              <div className="w-full max-w-xs">
                <div className="gradient-divider w-full" />
              </div>
              <p className="text-xs text-goat-navy/50">Navy &rarr; Red &rarr; Gold sweep</p>
            </div>

            {/* Star Divider (CSS) */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.star-divider (CSS)</span>
              <div className="star-divider text-goat-red w-full max-w-xs">
                <span>★</span>
              </div>
              <p className="text-xs text-goat-navy/50">Pure CSS star with ruled lines</p>
            </div>

            {/* Diagonal Stripes */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.diagonal-stripes</span>
              <div className="diagonal-stripes w-full h-24 rounded-lg border border-goat-cream-dark" />
              <div className="diagonal-stripes-bold w-full h-24 rounded-lg border border-goat-cream-dark" />
              <p className="text-xs text-goat-navy/50">Subtle &amp; bold truck-wrap stripes</p>
            </div>

            {/* Grit Card */}
            <div className="bg-white rounded-xl p-8 border border-goat-cream-dark shadow-sm flex flex-col items-center justify-center gap-4">
              <span className="text-xs text-goat-navy/40 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>.grit-card</span>
              <div className="grit-card bg-goat-ice-bright rounded-lg p-6 border border-goat-cream-dark cursor-pointer w-full max-w-xs text-center">
                <Check className="w-6 h-6 text-goat-teal mx-auto mb-2" />
                <p className="text-goat-navy-dark text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Hover me!</p>
                <p className="text-goat-navy/50 text-xs mt-1">Lift + shadow on hover</p>
              </div>
            </div>
          </div>


          {/* ════════════════════ TEXTURES ════════════════════ */}
          <SectionTitle id="textures">Textures & Overlays</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Noise overlay */}
            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="noise-overlay bg-goat-navy-dark h-32 flex items-center justify-center">
                <span className="text-white text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>.noise-overlay</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">SVG fractal noise, 3.5% opacity</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="noise-overlay noise-overlay-strong bg-goat-cream h-32 flex items-center justify-center">
                <span className="text-goat-navy-dark text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>.noise-overlay-strong</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">6% opacity variant</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="noise-overlay noise-overlay-light bg-goat-ice-bright h-32 flex items-center justify-center">
                <span className="text-goat-navy-dark text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>.noise-overlay-light</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">2% opacity — very subtle</p>
              </div>
            </div>

            {/* Sunburst */}
            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="relative bg-goat-navy-deep h-32 flex items-center justify-center overflow-hidden">
                <div className="sunburst sunburst-bright" />
                <span className="text-white text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>.sunburst</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">Teal conic-gradient rays from logo</p>
              </div>
            </div>

            {/* Speed arcs */}
            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="relative bg-goat-cream-warm h-32 flex items-center justify-center overflow-hidden speed-arcs text-goat-navy">
                <span className="text-goat-navy-dark text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>.speed-arcs</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">Curved arcs from logo shield corners</p>
              </div>
            </div>

            {/* Combined */}
            <div className="rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="relative bg-goat-navy-dark noise-overlay h-32 flex items-center justify-center overflow-hidden diagonal-stripes">
                <div className="sunburst" />
                <span className="text-goat-ice text-sm relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>Combined Stack</span>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-goat-navy/50">noise + sunburst + stripes</p>
              </div>
            </div>
          </div>

          <CodeBlock>{`<!-- Noise texture (add to any section) -->
<section className="noise-overlay bg-goat-navy-dark">
  <div className="relative z-10">Content above noise</div>
</section>

<!-- Sunburst rays (absolute positioned child) -->
<div className="relative overflow-hidden">
  <div className="sunburst sunburst-bright" />
  <div className="relative z-10">Content</div>
</div>

<!-- Speed arcs (decorative corner arcs) -->
<div className="relative speed-arcs text-goat-navy">...</div>

<!-- Stack them for maximum texture -->
<section className="relative bg-goat-navy-dark noise-overlay diagonal-stripes overflow-hidden">
  <div className="sunburst" />
  <div className="relative z-10">...</div>
</section>`}</CodeBlock>


          {/* ════════════════════ COLOR HIERARCHY ════════════════════ */}
          <SectionTitle id="hierarchy">Color Hierarchy & Usage Guide</SectionTitle>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Teal */}
            <div className="bg-white rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="bg-goat-teal p-6 text-center">
                <Phone className="w-8 h-8 text-goat-navy-deep mx-auto mb-2" />
                <span className="text-goat-navy-deep text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Click This
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-goat-navy-dark mb-2">Teal = Action</h4>
                <ul className="text-goat-navy/60 text-sm space-y-1.5">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-teal flex-shrink-0 mt-0.5" /> Phone CTA buttons</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-teal flex-shrink-0 mt-0.5" /> Form submit buttons</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-teal flex-shrink-0 mt-0.5" /> "Claim Offer" actions</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-teal flex-shrink-0 mt-0.5" /> Primary conversion points</li>
                </ul>
              </div>
            </div>

            {/* Red */}
            <div className="bg-white rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="bg-goat-red p-6 text-center">
                <Star className="w-8 h-8 text-white mx-auto mb-2 fill-white" />
                <span className="text-white text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Brand Warmth
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-goat-navy-dark mb-2">Red = Warmth</h4>
                <ul className="text-goat-navy/60 text-sm space-y-1.5">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-red flex-shrink-0 mt-0.5" /> Text accent on headings</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-red flex-shrink-0 mt-0.5" /> Star dividers & motifs</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-red flex-shrink-0 mt-0.5" /> Decorative borders</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-red flex-shrink-0 mt-0.5" /> Footer CTA bar</li>
                </ul>
              </div>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-xl overflow-hidden border border-goat-cream-dark shadow-sm">
              <div className="bg-goat-gold p-6 text-center">
                <MapPin className="w-8 h-8 text-goat-navy-deep mx-auto mb-2" />
                <span className="text-goat-navy-deep text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Warm Accent
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-goat-navy-dark mb-2">Gold = Accent</h4>
                <ul className="text-goat-navy/60 text-sm space-y-1.5">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-gold flex-shrink-0 mt-0.5" /> Review stars & ratings</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-gold flex-shrink-0 mt-0.5" /> Emergency service highlight</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-gold flex-shrink-0 mt-0.5" /> Special offers tags</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-goat-gold flex-shrink-0 mt-0.5" /> Warm supporting tone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Closing note */}
          <div className="mt-16 text-center">
            <GarageDoorDivider className="text-goat-navy mb-6" />
            <p className="text-goat-navy/50 text-sm max-w-lg mx-auto">
              This design system is the single source of truth for the Garage Goat brand.
              All tokens are defined in <code className="bg-goat-cream-dark px-1 rounded">theme.css</code>,
              fonts in <code className="bg-goat-cream-dark px-1 rounded">fonts.css</code>,
              and shared components in <code className="bg-goat-cream-dark px-1 rounded">StarAccent.tsx</code>.
            </p>
            <TripleStarDivider className="text-goat-navy/40 mt-6" />
          </div>

        </div>
      </div>
    </span>
  );
}
