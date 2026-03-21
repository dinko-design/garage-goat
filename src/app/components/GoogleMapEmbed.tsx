import React from 'react';
import { MapPin } from 'lucide-react';

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122333.5213629779!2d-95.69666022087286!3d29.939962389140913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa75cf7010a1ee95b%3A0x2c9420ff2da3c16a!2sGarage%20Goat!5e0!3m2!1sen!2sus!4v1774078420696!5m2!1sen!2sus';

interface GoogleMapEmbedProps {
  height?: number;
  className?: string;
  variant?: 'default' | 'sidebar';
}

export function GoogleMapEmbed({ height = 250, className = '', variant = 'default' }: GoogleMapEmbedProps) {
  if (variant === 'sidebar') {
    return (
      <div className={`bg-white rounded-lg border border-goat-cream-dark overflow-hidden ${className}`}>
        <div className="px-5 pt-4 pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-goat-red flex-shrink-0" />
            <h4
              className="text-goat-navy-dark text-sm"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Our Location
            </h4>
          </div>
        </div>
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Garage Goat location on Google Maps"
        />
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden border border-goat-cream-dark ${className}`}>
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        style={{ border: 0, minHeight: height }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Garage Goat location on Google Maps"
      />
    </div>
  );
}
