import React from 'react';
import { Link } from 'react-router';
import { companyInfo } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';

export function Terms() {
  return (
    <span className="contents">
      <SEO
        title="Terms of Service | Garage Goat Garage Doors"
        description={`Terms of service for ${companyInfo.name}. Understand the terms and conditions that apply to our garage door services.`}
        path="/terms"
      />

      <div className="bg-goat-navy-deep text-white py-12 lg:py-16 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <Breadcrumbs variant="dark" center items={[{ label: 'Terms of Service' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Terms of <span className="text-goat-red">Service</span>
          </h1>
        </div>
      </div>

      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-goat-cream-dark">
            <p className="text-goat-navy/50 text-sm mb-8">Last updated: March 1, 2026</p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Agreement to Terms
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              By using our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Services
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              {companyInfo.name} provides garage door repair, installation, and maintenance services in the greater {companyInfo.city}, {companyInfo.state} area. All services are subject to availability and are performed by licensed and insured technicians ({companyInfo.licenseName} {companyInfo.licenseNumber}).
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Estimates & Pricing
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              All estimates provided by {companyInfo.shortName} are free and non-binding. Final pricing will be confirmed before any work begins. The customer must authorize all work and associated costs. Pricing is valid for 30 days from the date of the estimate unless otherwise noted.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Payment
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              Payment is due upon completion of services unless a financing arrangement has been agreed upon. We accept cash, check, and all major credit cards. A late fee of 1.5% per month may be applied to overdue balances.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Warranty
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              Our warranty covers labor ({companyInfo.warranty.labor}), parts ({companyInfo.warranty.parts}), and springs ({companyInfo.warranty.springs}). Full warranty terms are available on our <a href="/warranty/" className="text-goat-red hover:underline">Warranty page</a>. The warranty is void if modifications are made by anyone other than {companyInfo.shortName}.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Cancellation Policy
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              You may cancel a scheduled appointment at no charge with at least 4 hours' notice. Cancellations with less than 4 hours' notice may be subject to a service call fee.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Limitation of Liability
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              {companyInfo.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Intellectual Property
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              All content on this website, including text, images, logos, and design, is the property of {companyInfo.name} and is protected by applicable intellectual property laws. You may not reproduce or redistribute any content without written permission.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Contact
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed">
              Questions about these terms? Contact us at <a href={`mailto:${companyInfo.email}`} className="text-goat-red hover:underline">{companyInfo.email}</a> or call <a href={`tel:${companyInfo.phoneRaw}`} className="text-goat-red hover:underline">{companyInfo.phone}</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-goat-navy/50 mt-8">
        See also our <Link to="/privacy/" className="text-goat-red hover:text-goat-red-dark underline">Privacy Policy</Link>
      </div>
    </span>
  );
}
