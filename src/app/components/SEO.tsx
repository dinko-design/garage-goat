import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../../routes';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
  title,
  description,
  path,
  ogImage = `${BASE_URL}/og-image.jpg`,
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  // Ensure canonical URL always has trailing slash (matches Netlify's pretty-URL behavior)
  const normalizedPath = path === '/' ? path : path.replace(/\/?$/, '/');
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  return (
    <>
      {/* Helmet manages <head> tags at runtime (client-side navigation) */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Garage Goat Garage Doors" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* Hidden element for prerenderer postProcess to extract and inject into <head> */}
      <div
        id="__seo"
        data-title={title}
        data-description={description}
        data-canonical={canonicalUrl}
        data-og-title={title}
        data-og-description={description}
        data-og-url={canonicalUrl}
        data-og-type={ogType}
        data-og-image={ogImage}
        style={{ display: 'none' }}
      />

      {/* JSON-LD rendered directly in body — valid per schema.org spec and captured by prerenderer */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd) }}
        />
      )}
    </>
  );
}
