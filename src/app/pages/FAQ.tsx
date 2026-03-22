import React, { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, Phone, HelpCircle, Wrench, DollarSign, Shield, Clock, Tag, ArrowRight } from 'lucide-react';
import { services, companyInfo } from '../../data/cms';
import { SEO } from '../components/SEO';
import { buildFAQPageSchema } from '../../data/structured-data';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';
import { TrustStrip } from '../components/TrustBadges';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  faqs: FAQItem[];
}

const generalFAQs: FAQItem[] = [
  { question: 'What areas do you serve?', answer: 'We proudly serve Cypress, Tomball, The Woodlands, Spring, Magnolia, Hockley, and Northwest Houston. Our headquarters are in Cypress, TX, and we can typically reach anywhere in our service area within 60 minutes.' },
  { question: 'Are you licensed and insured?', answer: `Yes! We are fully licensed by the Texas Department of Licensing and Regulation (${companyInfo.licenseName} ${companyInfo.licenseNumber}) and carry comprehensive general liability and workers' compensation insurance.` },
  { question: 'Do you provide estimates?', answer: 'We provide upfront quotes for all services. Our technician will diagnose the issue, explain your options, and give you an honest price before any work begins.' },
  { question: 'What brands do you work with?', answer: 'We service all major brands including LiftMaster, Chamberlain, Genie, Craftsman, Clopay, Amarr, Wayne Dalton, and more. If you have a garage door, we can fix it.' },
  { question: 'Do you offer warranties?', answer: `Yes. We provide a ${companyInfo.warranty.labor} warranty on labor, ${companyInfo.warranty.parts} warranty on parts, and a ${companyInfo.warranty.springs} warranty on springs. See our Warranty page for full details.` },
  { question: 'How do I know if I need a repair or a full replacement?', answer: 'As a rule of thumb, if your door is less than 15 years old and the issue is mechanical (springs, cables, opener), a repair is usually the best value. If the door itself is severely damaged, rusted through, or outdated, a replacement may be more cost-effective. We\'ll give you honest advice either way.' },
];

const pricingFAQs: FAQItem[] = [
  { question: 'How much does a typical repair cost?', answer: 'Most common repairs range from $150 to $450 depending on the issue. Spring replacements typically run $200–$400, opener repairs $150–$350, and off-track corrections $125–$250. We always provide an upfront quote first.' },
  { question: 'Do you charge for after-hours or emergency calls?', answer: 'No. We don\'t believe in gouging people when they\'re in a bind. Our pricing is the same 24/7 — nights, weekends, and holidays included.' },
  { question: 'Do you offer financing?', answer: 'Yes! We offer flexible financing options for larger projects like new door installations. Visit our Financing page for details or ask your technician about available plans.' },
  { question: 'Is there a service call fee?', answer: 'We do not charge a service call fee when you proceed with the recommended repair. If you choose not to have the work done, there is a small diagnostic fee.' },
];

const schedulingFAQs: FAQItem[] = [
  { question: 'How quickly can you get to my house?', answer: 'For emergencies in our primary service area (Cypress, Tomball, The Woodlands), we typically arrive within 60 minutes. For standard appointments, we offer same-day and next-day availability in most cases.' },
  { question: 'Do I need to be home during the repair?', answer: 'We prefer that an adult (18+) be present during the repair to authorize any work and review the final result. If that\'s not possible, we can make arrangements on a case-by-case basis.' },
  { question: 'How long does a typical repair take?', answer: 'Most repairs are completed in 1–2 hours. A new door installation typically takes 3–5 hours. We\'ll give you a time estimate when we provide your quote.' },
];

function AccordionItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-lg border border-goat-cream-dark overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-goat-ice-bright/50"
      >
        <span className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
          {faq.question}
        </span>
        <ChevronDown className={`w-5 h-5 text-goat-navy/40 flex-shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-goat-navy/70 text-sm leading-relaxed border-t border-goat-cream-dark pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Combine service-specific FAQs
  const serviceFAQs: FAQItem[] = services.flatMap(s => s.faqs);

  const categories: FAQCategory[] = [
    { title: 'General Questions', icon: HelpCircle, faqs: generalFAQs },
    { title: 'Pricing & Payment', icon: DollarSign, faqs: pricingFAQs },
    { title: 'Scheduling & Service', icon: Clock, faqs: schedulingFAQs },
    { title: 'Service-Specific Questions', icon: Wrench, faqs: serviceFAQs },
  ];

  return (
    <span className="contents">
      <SEO
        title="Frequently Asked Questions | Garage Goat Garage Doors"
        description="Find answers to common questions about garage door repair, spring replacement, opener installation, pricing, and scheduling. Garage Goat serves Cypress, TX."
        path="/faq"
        jsonLd={buildFAQPageSchema([...generalFAQs, ...pricingFAQs, ...schedulingFAQs, ...serviceFAQs])}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <Breadcrumbs variant="dark" center items={[{ label: 'FAQ' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Frequently Asked <span className="text-goat-red">Questions</span>
          </h1>
          <p className="text-goat-ice/70 mt-4 max-w-2xl mx-auto">
            Got questions? We've got honest answers. If you don't see what you're looking for, give us a call.
          </p>
        </div>
      </div>

      <TrustStrip />

      {/* FAQ Content */}
      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-4xl">
          {categories.map((cat, catIdx) => (
            <div key={cat.title} className={catIdx > 0 ? 'mt-12' : ''}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-goat-red/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-goat-red" />
                </div>
                <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {cat.title}
                </h2>
              </div>
              <div className="space-y-3">
                {cat.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`;
                  return (
                    <AccordionItem
                      key={key}
                      faq={faq}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          {/* Helpful Resources */}
          <div className="mt-16 mb-16">
            <h2 className="text-goat-navy-dark mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Helpful <span className="text-goat-red">Resources</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: '/services/', icon: Wrench, title: 'Our Services', desc: 'Browse all garage door services we offer' },
                { to: '/financing/', icon: DollarSign, title: 'Financing Options', desc: 'Flexible payment plans for bigger projects' },
                { to: '/warranty/', icon: Shield, title: 'Warranty Info', desc: 'Learn about our industry-leading warranty coverage' },
                { to: '/offers/', icon: Tag, title: 'Special Offers', desc: 'Current deals and coupons' },
              ].map((card) => (
                <div key={card.to} className="bg-white rounded-lg p-5 border border-goat-cream-dark">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-goat-red/10 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-5 h-5 text-goat-red" />
                    </div>
                    <Link
                      to={card.to}
                      className="text-goat-navy-dark hover:text-goat-red transition-colors flex items-center gap-1.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {card.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-goat-navy/60 text-sm ml-12">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-goat-navy-dark rounded-lg p-8 text-center text-white relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                Still Have Questions?
              </h3>
              <p className="text-goat-ice/70 mt-2 mb-6">
                Our friendly team is standing by to help. No question is too small.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-6 py-3 rounded transition-all flex items-center justify-center gap-2 shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Phone className="w-4 h-4" /> Call {companyInfo.phone}
                </a>
                <Link
                  to="/contact/"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}