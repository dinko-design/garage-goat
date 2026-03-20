import { services, serviceAreas, offers, blogPosts } from './data/cms';

export const BASE_URL = 'https://www.garagegoatdoors.com';

// Static pages
const STATIC_ROUTES = [
  '/',
  '/services',
  '/contact',
  '/reviews',
  '/about',
  '/offers',
  '/blog',
  '/faq',
  '/gallery',
  '/financing',
  '/warranty',
  '/privacy',
  '/terms',
  '/sitemap',
  '/pricing',
];

// Dynamic routes derived from CMS data
const SERVICE_ROUTES = services.map(s => `/${s.slug}`);
const AREA_ROUTES = serviceAreas.map(a => `/${a.slug}`);
const OFFER_ROUTES = offers.map(o => `/${o.slug}`);
const BLOG_ROUTES = blogPosts.map(b => `/blog/${b.slug}`);

export const ALL_ROUTES: string[] = [
  ...STATIC_ROUTES,
  ...SERVICE_ROUTES,
  ...AREA_ROUTES,
  ...OFFER_ROUTES,
  ...BLOG_ROUTES,
];
