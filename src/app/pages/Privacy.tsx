import React from 'react';
import { Link } from 'react-router';
import { companyInfo } from '../../data/cms';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';

export function Privacy() {
  return (
    <span className="contents">
      <SEO
        title="Privacy Policy | Garage Goat Garage Doors"
        description={`Privacy policy for ${companyInfo.name}. Learn how we collect, use, and protect your personal information.`}
        path="/privacy"
      />

      <div className="bg-goat-navy-deep text-white py-12 lg:py-16 relative overflow-hidden noise-overlay">
        <div className="container mx-auto relative z-10">
          <Breadcrumbs variant="dark" center items={[{ label: 'Privacy Policy' }]} />
          <StarDivider size="sm" className="text-goat-ice/30 mb-4" />
          <h1 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
            Privacy <span className="text-accent-red">Policy</span>
          </h1>
        </div>
      </div>

      <div className="py-16 bg-goat-cream noise-overlay-light">
        <div className="container mx-auto relative z-10 max-w-3xl">
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-goat-cream-dark prose-goat">
            <p className="text-goat-navy/50 text-sm mb-8">Last updated: March 1, 2026</p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Information We Collect
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-4">
              When you contact {companyInfo.name} through our website, phone, or email, we may collect the following information:
            </p>
            <ul className="text-goat-navy/70 text-sm space-y-1 mb-8 list-disc pl-5">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address</li>
              <li>Details about the service you're requesting</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              How We Use Your Information
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="text-goat-navy/70 text-sm space-y-1 mb-8 list-disc pl-5">
              <li>Provide and schedule garage door services</li>
              <li>Communicate with you about your service appointment</li>
              <li>Send invoices and process payments</li>
              <li>Follow up on service satisfaction</li>
              <li>Send occasional promotional offers (you can opt out at any time)</li>
            </ul>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Information Sharing
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service partners only as necessary to complete your service (e.g., parts suppliers, payment processors).
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Cookies & Analytics
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. This information helps us improve your experience. You can disable cookies in your browser settings at any time.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Data Security
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Your Rights
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed mb-8">
              You have the right to request access to, correction of, or deletion of your personal information. To make a request, contact us at <a href={`mailto:${companyInfo.email}`} className="text-goat-red hover:underline">{companyInfo.email}</a> or call <a href={`tel:${companyInfo.phoneRaw}`} className="text-goat-red hover:underline">{companyInfo.phone}</a>.
            </p>

            <h2 className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              Contact Us
            </h2>
            <p className="text-goat-navy/70 text-sm leading-relaxed">
              If you have questions about this privacy policy, please contact us:
            </p>
            <p className="text-goat-navy/70 text-sm leading-relaxed mt-2">
              {companyInfo.name}<br />
              {companyInfo.address}<br />
              {companyInfo.city}, {companyInfo.state} {companyInfo.zip}<br />
              Phone: <a href={`tel:${companyInfo.phoneRaw}`} className="text-goat-red hover:underline">{companyInfo.phone}</a><br />
              Email: <a href={`mailto:${companyInfo.email}`} className="text-goat-red hover:underline">{companyInfo.email}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-goat-navy/50 mt-8">
        See also our <Link to="/terms" className="text-goat-red hover:text-goat-red-dark underline">Terms of Service</Link>
      </div>
    </span>
  );
}
