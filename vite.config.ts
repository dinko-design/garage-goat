import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// Read routes from the generated JSON file (built by scripts/build-cms.mjs)
const ALL_ROUTES: string[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'src/data/routes-generated.json'), 'utf-8')
)

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

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router', 'react-router-dom', 'lucide-react', 'sonner', 'react-helmet-async'],
        },
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
