import { BASE_URL } from '../routes';
import {
  companyInfo,
  serviceAreas,
  type Service,
  type ServiceArea,
  type Review,
  type BlogPost,
  type Offer,
} from './cms';

// --- LocalBusiness (Home + Service Area pages) ---

export function buildLocalBusinessSchema(areaServedCities?: string[]) {
  const cities = areaServedCities ?? serviceAreas.map(a => a.cityName);

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressLocality: companyInfo.city,
      addressRegion: companyInfo.state,
      postalCode: companyInfo.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(companyInfo.googleRating),
      reviewCount: String(companyInfo.totalReviews),
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: cities.map(city => ({
      '@type': 'City',
      name: city,
    })),
    priceRange: '$$',
    foundingDate: String(companyInfo.foundedYear),
    sameAs: [
      'https://www.facebook.com/profile.php?id=61555203315954',
      'https://www.instagram.com/garagegoat01',
      'https://www.tiktok.com/@garagegoat281',
      'https://nextdoor.com/pages/garage-goat-cypress-tx',
    ],
  };
}

// --- Service (Service detail pages) ---

export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    url: `${BASE_URL}/${service.slug}/`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
    },
    areaServed: serviceAreas.map(a => ({
      '@type': 'City',
      name: a.cityName,
    })),
    image: service.image,
  };
}

// --- FAQPage (FAQ page + service detail pages with FAQs) ---

export function buildFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// --- Review + AggregateRating (Reviews page) ---

export function buildReviewsSchema(reviews: Review[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: companyInfo.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(companyInfo.googleRating),
      reviewCount: String(companyInfo.totalReviews),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.reviewerName,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
      },
    })),
  };
}

// --- BlogPosting (Blog detail pages) ---

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.featuredImage,
    url: `${BASE_URL}/blog/${post.slug}/`,
    author: {
      '@type': 'Person',
      name: 'Cesar Salazar',
      jobTitle: post.authorRole,
      worksFor: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#business`,
      name: companyInfo.name,
    },
  };
}

// --- BreadcrumbList ---

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path.replace(/\/?$/, '/')}`,
    })),
  };
}

// --- Offer (Offer detail pages) ---

export function buildOfferSchema(offer: Offer) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: offer.title,
    description: offer.headline,
    offeredBy: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
    },
    url: `${BASE_URL}/${offer.slug}/`,
  };
}

// --- ServiceArea (combines LocalBusiness + area-specific info) ---

export function buildServiceAreaSchema(area: ServiceArea) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: companyInfo.name,
    telephone: companyInfo.phone,
    url: `${BASE_URL}/${area.slug}/`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressLocality: companyInfo.city,
      addressRegion: companyInfo.state,
      postalCode: companyInfo.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: area.cityName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(companyInfo.googleRating),
      reviewCount: String(companyInfo.totalReviews),
      bestRating: '5',
    },
  };
}
