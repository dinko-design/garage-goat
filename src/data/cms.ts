// Data is imported from the build-time generated file.
// To edit content, use the CMS admin at /admin or edit files in content/

import {
  generatedCompanyInfo,
  generatedServices,
  generatedServiceAreas,
  generatedReviews,
  generatedOffers,
  generatedBlogPosts,
} from './cms-generated';

// --- Types ---

export interface Service {
  id: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  introParagraph: string;
  content: string;
  iconName: 'Wrench' | 'Hammer' | 'Cog' | 'ShieldCheck' | 'Clock';
  image: string;
  ctaHeadline: string;
  ctaButtonText: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
  relatedOfferIds: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceArea {
  id: string;
  slug: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  introParagraph: string;
  areaContent: string;
  mapEmbedUrl: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
  relatedOfferIds: string[];
}

export interface Review {
  id: string;
  reviewerName: string;
  city: string;
  rating: number;
  text: string;
  serviceUsed: string;
  date: string;
}

export interface Offer {
  id: string;
  slug: string;
  title: string;
  headline: string;
  discountAmount: string;
  expiration: string;
  disclaimer: string;
  relatedServiceIds: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  tags: string[];
  author: string;
  authorRole: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
}

// --- Data ---

export const companyInfo = generatedCompanyInfo;
export const services: Service[] = generatedServices as unknown as Service[];
export const serviceAreas: ServiceArea[] = generatedServiceAreas as unknown as ServiceArea[];
export const reviews: Review[] = generatedReviews as unknown as Review[];
export const offers: Offer[] = generatedOffers as unknown as Offer[];
export const blogPosts: BlogPost[] = generatedBlogPosts as unknown as BlogPost[];

// --- Cross-Reference Helpers ---

export function getRelatedServices(ids: string[]): Service[] {
  return ids.map(id => services.find(s => s.id === id)).filter(Boolean) as Service[];
}

export function getRelatedBlogPosts(ids: string[]): BlogPost[] {
  return ids.map(id => blogPosts.find(b => b.id === id)).filter(Boolean) as BlogPost[];
}

export function getRelatedOffers(ids: string[]): Offer[] {
  return ids.map(id => offers.find(o => o.id === id)).filter(Boolean) as Offer[];
}

export function getRelatedAreas(serviceId: string): ServiceArea[] {
  return serviceAreas.filter(a => a.relatedServiceIds.includes(serviceId));
}

/** Given any content type, get all cross-references for it */
export function getCrossReferences(type: 'service' | 'area' | 'blog' | 'offer', id: string) {
  switch (type) {
    case 'service': {
      const item = services.find(s => s.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: getRelatedOffers(item.relatedOfferIds),
        areas: getRelatedAreas(id),
      };
    }
    case 'area': {
      const item = serviceAreas.find(a => a.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: getRelatedOffers(item.relatedOfferIds),
        areas: serviceAreas.filter(a => a.id !== id),
      };
    }
    case 'blog': {
      const item = blogPosts.find(b => b.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: offers.slice(0, 2),
        areas: serviceAreas.slice(0, 3),
      };
    }
    case 'offer': {
      const item = offers.find(o => o.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: blogPosts.slice(0, 2),
        offers: offers.filter(o => o.id !== id),
        areas: serviceAreas.slice(0, 3),
      };
    }
  }
}
