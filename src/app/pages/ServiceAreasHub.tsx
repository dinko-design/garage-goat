import React from 'react';
import { Link } from 'react-router';
import { serviceAreas, services, companyInfo } from '../../data/cms';
import { MapPin, Phone, ArrowRight, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StarDivider } from '../components/StarAccent';
import { TrustStrip } from '../components/TrustBadges';
import { buildLocalBusinessSchema } from '../../data/structured-data';

export function ServiceAreasHub() {
  return (
    <>
      <SEO
        title="Garage Door Service Areas | NW Houston & Cypress, TX | Garage Goat"
        description="Garage Goat provides garage door repair, spring replacement, and new door installation across Cypress, Tomball, The Woodlands, Spring, Magnolia, Hockley, and NW Houston, TX."
        path="/areas"
        jsonLd={buildLocalBusinessSchema()}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-16 lg:py-24 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute top-20 right-20 text-goat-red/5 text-[200px] leading-none hidden xl:block" style={{ fontFamily: "var(--font-heading)" }}>★</div>
        <div className="container mx-auto text-center relative z-10">
          <Breadcrumbs variant="dark" center items={[{ label: 'Service Areas' }]} />
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-goat-red" />
            <span className="text-goat-red">★</span>
            <div className="h-px w-12 bg-goat-red" />
          </div>
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}
          >
            Garage Door Service Areas in{' '}
            <span className="text-goat-red">NW Houston</span>
          </h1>
          <p className="text-xl text-goat-ice/70 max-w-2xl mx-auto">
            Locally owned and operated, Garage Goat proudly serves homeowners across the greater Northwest Houston metro area with same-day garage door repair and installation.
          </p>
        </div>
      </div>

      <TrustStrip />

      {/* Areas Grid */}
      <div className="bg-goat-cream py-16 lg:py-24 relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceAreas.map((area) => {
              const areaServices = services.filter(s => area.relatedServiceIds.includes(s.id));
              return (
                <div
                  key={area.id}
                  className="bg-white rounded-lg overflow-hidden border border-goat-cream-dark flex flex-col grit-card"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-goat-red flex-shrink-0" />
                      <h2
                        className="text-xl text-goat-navy-dark"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                      >
                        {area.cityName}
                      </h2>
                    </div>
                    <p className="text-goat-navy/60 text-sm leading-relaxed mb-4 flex-grow">
                      {area.introParagraph.slice(0, 160)}...
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {areaServices.slice(0, 3).map(svc => (
                        <span
                          key={svc.id}
                          className="text-xs bg-goat-cream text-goat-navy px-2 py-0.5 rounded"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                        >
                          {svc.name}
                        </span>
                      ))}
                      {areaServices.length > 3 && (
                        <span className="text-xs text-goat-navy/40">+{areaServices.length - 3} more</span>
                      )}
                    </div>
                    <Link
                      to={`/${area.slug}/`}
                      className="inline-flex items-center gap-1.5 text-goat-red hover:text-goat-red-dark text-sm transition-colors"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600, textTransform: 'uppercase' }}
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fleet Photo */}
          <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-goat-navy-deep/10">
            <img
              src="/images/brand/truck-wrap.png"
              alt="Garage Goat branded service trucks"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* SEO Content Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <StarDivider className="text-goat-navy/20 mb-8" />
            <div className="bg-white rounded-lg p-8 lg:p-10 border border-goat-cream-dark">
              <h2
                className="text-2xl lg:text-3xl text-goat-navy-dark mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Your Local Garage Door Experts Across{' '}
                <span className="text-goat-red">Northwest Houston</span>
              </h2>
              <div className="text-goat-navy/70 space-y-4 leading-relaxed">
                <p>
                  Garage Goat is headquartered in <strong>Cypress, TX</strong> and provides full-service garage door repair,
                  spring replacement, opener installation, and new garage door sales to homeowners across the NW Houston metro.
                  Our service trucks are fully stocked and GPS-dispatched, allowing us to reach most locations in our coverage
                  area within 60 minutes for emergency calls.
                </p>
                <p>
                  <strong>Why local expertise matters for garage doors:</strong> Houston's heat, humidity, and occasional severe
                  weather take a toll on garage door systems. Springs corrode faster, openers work harder in extreme temps, and
                  wind damage from storms requires immediate attention. Our technicians live in the communities they serve — they
                  understand these challenges firsthand and carry the right parts for local conditions on every truck.
                </p>
                <p>
                  We proudly serve the following cities and surrounding neighborhoods:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 my-4">
                  {serviceAreas.map(area => (
                    <li key={area.id}>
                      <Link
                        to={`/${area.slug}/`}
                        className="flex items-center gap-2 text-goat-navy-dark hover:text-goat-red transition-colors"
                        style={{ fontWeight: 600 }}
                      >
                        <MapPin className="w-4 h-4 text-goat-red flex-shrink-0" />
                        {area.cityName}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p>
                  From the master-planned communities of <strong>Bridgeland</strong> and <strong>Towne Lake</strong> in Cypress
                  to the established neighborhoods around <strong>Tomball's historic downtown</strong>, from the upscale
                  enclaves of <strong>The Woodlands</strong> to the growing communities of <strong>Magnolia</strong> and{' '}
                  <strong>Hockley</strong> — Garage Goat is your neighbor and your go-to garage door company.
                </p>
                <p>
                  Every service call includes the same commitment: upfront pricing, quality parts, skilled technicians, and
                  industry-leading warranty coverage ({companyInfo.warranty.labor} labor, {companyInfo.warranty.parts} parts,{' '}
                  {companyInfo.warranty.springs} springs). No matter which city you're in, you get the full Garage Goat experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                {[
                  { icon: Clock, text: '60-Min Emergency Response' },
                  { icon: CheckCircle2, text: 'Same-Day Service Available' },
                  { icon: MapPin, text: `${serviceAreas.length} Cities Served` },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-goat-cream p-3 rounded border border-goat-cream-dark">
                    <item.icon className="w-5 h-5 text-goat-red flex-shrink-0" />
                    <span className="text-goat-navy-dark text-sm" style={{ fontWeight: 600 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-goat-red" />
              <span className="text-goat-red">★</span>
              <div className="h-px w-12 bg-goat-red" />
            </div>
            <h2
              className="text-2xl lg:text-3xl text-goat-navy-dark text-center mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
            >
              Services Available <span className="text-goat-red">Everywhere</span>
            </h2>
            <p className="text-goat-navy/60 text-center max-w-xl mx-auto mb-8">
              All of our garage door services are available across every city we serve.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}/`}
                  className="group flex items-center gap-3 bg-white p-4 rounded-lg border border-goat-cream-dark hover:border-goat-red/30 transition-colors"
                >
                  <div className="w-9 h-9 bg-goat-cream rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-goat-red/10 transition-colors">
                    <Wrench className="w-4 h-4 text-goat-red" />
                  </div>
                  <span
                    className="text-goat-navy-dark group-hover:text-goat-red transition-colors text-sm flex-grow"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-goat-navy/30 group-hover:text-goat-red transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 max-w-3xl mx-auto bg-goat-navy-dark rounded-lg p-8 md:p-12 text-center text-white relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
              >
                Need Garage Door Service?
              </h2>
              <p className="text-goat-ice/70 mb-8 max-w-xl mx-auto">
                No matter where you are in NW Houston, we can be there fast. Call now for same-day service or schedule online.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-goat-teal hover:bg-goat-teal-dark text-goat-navy-deep px-8 py-4 rounded transition-all shadow-lg shadow-goat-teal/30"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </a>
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded transition-all"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  Schedule Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
