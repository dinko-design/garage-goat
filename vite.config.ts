import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// All routes to prerender at build time
const ALL_ROUTES = [
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
  '/garage-door-repair',
  '/garage-door-spring-repair',
  '/garage-door-opener-repair',
  '/new-garage-doors',
  '/emergency-garage-door-repair',
  '/garage-door-repair-cypress-tx',
  '/garage-door-repair-tomball-tx',
  '/garage-door-repair-katy-tx',
  '/garage-door-repair-spring-tx',
  '/garage-door-repair-houston-tx',
  '/75-off-garage-door-repair',
  '/special-offers',
  '/new-door-special',
  '/pricing',
  '/blog/garage-door-repair-cost-cypress-tx',
  '/blog/signs-garage-door-spring-breaking',
  '/blog/new-garage-door-cost-cypress-tx',
  '/blog/garage-door-opener-not-working',
  '/blog/torsion-vs-extension-springs-garage-door',
  '/blog/how-long-garage-door-springs-last',
  '/blog/garage-door-wont-close',
  '/blog/best-garage-door-styles-texas-homes',
  '/blog/garage-door-safety-checklist',
  '/blog/garage-door-maintenance-checklist',
  '/blog/repair-vs-replace-garage-door',
  '/blog/why-garage-door-loud-how-to-fix',
  '/blog/smart-garage-door-opener-worth-it',
  '/blog/garage-door-insulation-texas',
  '/blog/how-to-choose-garage-door-repair-company',
  '/blog/hurricane-garage-door-prep-cypress-tx',
]

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    prerender({
      routes: ALL_ROUTES,
      renderer: new PuppeteerRenderer({
        renderAfterTime: 3000,
        headless: true,
      }),
      postProcess(renderedRoute) {
        // Extract SEO data from hidden #__seo element and inject into <head>
        const seoMatch = renderedRoute.html.match(/<div id="__seo"([^>]*)><\/div>/)
        if (seoMatch) {
          const attrs = seoMatch[1]
          const get = (name: string) => {
            const m = attrs.match(new RegExp(`data-${name}="([^"]*)"`, 'i'))
            return m ? m[1] : ''
          }

          const title = get('title')
          const description = get('description')
          const canonical = get('canonical')
          const ogTitle = get('og-title')
          const ogDescription = get('og-description')
          const ogUrl = get('og-url')
          const ogType = get('og-type')
          const ogImage = get('og-image')

          // Replace <title>
          if (title) {
            renderedRoute.html = renderedRoute.html.replace(
              /<title>[^<]*<\/title>/,
              `<title>${title}</title>`
            )
          }

          // Replace or inject meta description
          if (description) {
            renderedRoute.html = renderedRoute.html.replace(
              /<meta name="description" content="[^"]*">/,
              `<meta name="description" content="${description}">`
            )
          }

          // Replace OG tags
          if (ogTitle) {
            renderedRoute.html = renderedRoute.html.replace(
              /<meta property="og:title" content="[^"]*">/,
              `<meta property="og:title" content="${ogTitle}">`
            )
          }
          if (ogDescription) {
            renderedRoute.html = renderedRoute.html.replace(
              /<meta property="og:description" content="[^"]*">/,
              `<meta property="og:description" content="${ogDescription}">`
            )
          }
          if (ogUrl) {
            renderedRoute.html = renderedRoute.html.replace(
              /<meta property="og:url" content="[^"]*">/,
              `<meta property="og:url" content="${ogUrl}">`
            )
          }
          if (ogType) {
            renderedRoute.html = renderedRoute.html.replace(
              /<meta property="og:type" content="[^"]*">/,
              `<meta property="og:type" content="${ogType}">`
            )
          }

          // Inject canonical link (add before </head> if not present)
          if (canonical) {
            if (renderedRoute.html.includes('rel="canonical"')) {
              renderedRoute.html = renderedRoute.html.replace(
                /<link rel="canonical" href="[^"]*">/,
                `<link rel="canonical" href="${canonical}">`
              )
            } else {
              renderedRoute.html = renderedRoute.html.replace(
                '</head>',
                `<link rel="canonical" href="${canonical}">\n</head>`
              )
            }
          }

          // Inject Twitter Card meta (add before </head>)
          renderedRoute.html = renderedRoute.html.replace(
            '</head>',
            `<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${ogTitle}">\n<meta name="twitter:description" content="${ogDescription}">\n<meta name="twitter:image" content="${ogImage}">\n</head>`
          )

          // Remove the hidden #__seo element from the output
          renderedRoute.html = renderedRoute.html.replace(seoMatch[0], '')
        }

        return renderedRoute
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Resolve Figma Make asset imports to local asset files
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
