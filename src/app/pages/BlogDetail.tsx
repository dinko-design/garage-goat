import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { blogPosts, companyInfo, services, offers, getRelatedServices, getRelatedBlogPosts } from '../../data/cms';
import { Calendar, ArrowLeft, ArrowRight, Phone, Tag } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedServices, RelatedBlogs, RelatedOffers } from '../components/RelatedContent';
import { SEO } from '../components/SEO';
import { OptimizedImage } from '../components/OptimizedImage';
import { buildBlogPostingSchema } from '../../data/structured-data';

export function BlogDetail() {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const post = blogPosts.find(p => p.slug === blogSlug);

  if (!post) {
    return <Navigate to="/404/" replace />;
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id);
  const relatedServices = getRelatedServices(post.relatedServiceIds);
  const relatedBlogs = getRelatedBlogPosts(post.relatedBlogIds);

  return (
    <>
      <SEO
        title={`${post.title} | Garage Goat`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogImage={post.featuredImage}
        ogType="article"
        jsonLd={buildBlogPostingSchema(post)}
      />

      {/* Hero */}
      <div className="bg-goat-navy-deep text-white py-12 lg:py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 texture-concrete-heavy opacity-[0.35] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <OptimizedImage src={post.featuredImage} alt={post.title} className="w-full h-full object-cover opacity-15" loading="eager" sizes="100vw" width={1080} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-goat-navy-deep via-goat-navy-deep/80 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10 max-w-3xl">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Blog', href: '/blog/' },
              { label: post.title }
            ]}
          />
          <div className="flex items-center gap-2 text-goat-ice/50 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>By {post.author}</span>
          </div>
          <h1
            className="text-3xl lg:text-5xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-goat-ice/70">{post.excerpt}</p>
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-white/10 text-goat-ice/60 px-2.5 py-1 rounded-full border border-white/10">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16 bg-goat-cream relative overflow-hidden noise-overlay-light">
        <div className="absolute inset-0 texture-concrete opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 texture-twill opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg border border-goat-cream-dark">
                <OptimizedImage src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" sizes="(max-width: 1024px) 100vw, 66vw" width={800} height={256} />
                <div className="cms-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Author Bio */}
              <div className="mt-10 bg-white p-6 rounded-lg border border-goat-cream-dark flex items-start gap-4">
                <div className="w-12 h-12 bg-goat-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>CS</span>
                </div>
                <div>
                  <div className="text-goat-navy-dark" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Cesar Salazar
                  </div>
                  <div className="text-goat-navy/60 text-sm">{post.authorRole}</div>
                  <p className="text-goat-navy/70 text-sm mt-2">
                    Cesar founded Garage Goat in 2010 and has personally overseen 10,000+ garage door repairs and installations across the Cypress, TX area. TDLR Licensed ({companyInfo.licenseNumber}).
                  </p>
                </div>
              </div>

              {/* Related Services from this blog post */}
              {relatedServices.length > 0 && (
                <div className="mt-10">
                  <RelatedServices services={relatedServices} title="Services Mentioned" />
                </div>
              )}

              {/* Other posts */}
              {otherPosts.length > 0 && (
                <div className="mt-10">
                  <RelatedBlogs posts={otherPosts} title="More Articles" />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                {/* CTA */}
                <div className="bg-goat-red rounded-lg p-7 text-white shadow-xl shadow-goat-red/20 relative overflow-hidden noise-overlay">
                  <div className="relative z-10">
                    <h2 className="text-xl mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}>
                      Need Help?
                    </h2>
                    <p className="opacity-90 text-sm mb-5">Our experts can diagnose issues over the phone. Call anytime — 24/7.</p>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="block w-full bg-white text-goat-red text-center py-3 rounded transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase' }}
                    >
                      <Phone className="w-5 h-5" /> {companyInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Current Offer */}
                {offers[0] && (
                  <Link to={`/${offers[0].slug}/`} className="block bg-goat-navy-deep rounded-lg p-6 text-white border-2 border-dashed border-goat-navy relative overflow-hidden noise-overlay hover:border-goat-red/50 transition-colors">
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center gap-1 text-goat-red text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        <Tag className="w-3 h-3" /> Special Offer
                      </div>
                      <div className="text-3xl text-white mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {offers[0].discountAmount}
                      </div>
                      <div className="text-goat-ice/70 text-sm">{offers[0].title}</div>
                    </div>
                  </Link>
                )}

                {/* Related Services in Sidebar */}
                {relatedServices.length > 0 && (
                  <div className="bg-white rounded-lg p-6 border border-goat-cream-dark">
                    <RelatedServices services={relatedServices} variant="compact" title="Related Services" />
                  </div>
                )}

                {/* Popular Services */}
                <div className="bg-white rounded-lg p-6 border border-goat-cream-dark">
                  <h4 className="text-goat-navy-dark text-sm mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Popular Services
                  </h4>
                  <div className="space-y-2">
                    {services.slice(0, 4).map(s => (
                      <Link key={s.id} to={`/${s.slug}/`} className="flex items-center gap-2 text-goat-navy/80 hover:text-goat-red text-sm transition-colors">
                        <span className="text-goat-red text-xs">★</span> {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}