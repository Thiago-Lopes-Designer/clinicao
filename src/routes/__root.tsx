/// <reference types="vite/client" />
import {
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import type { ReactNode } from 'react'
import indexCss from '../index.css?url'

/**
 * Pre-paint theme script. Runs synchronously in <head> BEFORE first paint, so
 * the document renders in the correct theme on the very first frame — no flash.
 * Dark mode is a single `.dark` class on <html>; the token values in index.css
 * flip under it. Persisted to localStorage, falls back to system preference.
 */
const themeInitScript = ''

const queryClient = new QueryClient()

/**
 * Root route — owns the HTML document (SSR), global <head> (SEO-ready),
 * and the app-wide providers.
 *
 * NO app chrome (sidebar/top bar) is applied here by default, so every app —
 * landing pages, marketing sites, content, games — renders FULL-BLEED.
 * Building a SaaS / dashboard app? The sidebar shell already ships at
 * `src/routes/app.tsx` (mounted at the real `/app` segment) with pages under
 * `src/routes/app/` — add pages there. Never create a pathless `src/routes/_app.tsx`:
 * it adds no URL segment, so it (or its `index.tsx`) collides with the root index
 * route at "/". Keep this root bare — don't add chrome here.
 *
 * SEO/AEO: <HeadContent /> renders the merged head() output (title, meta,
 * Open Graph, links) on the server, so crawlers and AI bots receive a
 * fully-rendered, indexable document on the first request. Per-page routes
 * override title/description via their own head().
 *
 * SSR: this document (and every route) is server-rendered/prerendered. A child
 * that reads browser-only state at render — `blink.auth`/`onAuthStateChanged`,
 * `localStorage`, `window` — must be wrapped in `<BlinkClientBoundary>`
 * (`src/components/BlinkClientBoundary.tsx`), which also covers a whole-page
 * client tree, or the page ships blank / hydration-mismatched. Do NOT use the
 * route's `ssr: false` — a client-only route in this template hits Start's
 * server-context `node:async_hooks` path (a throwing browser stub) and ships a
 * BLANK preview ("AsyncLocalStorage is not a constructor"). Do NOT read SDK/auth here.
 */
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'CliniCão & Gatos | Clínica Veterinária e Pet Shop em Marabá' },
      { name: 'description', content: 'Clínica veterinária e pet shop em Marabá. Consultas, vacinas, exames, ultrassonografia, cirurgias, internação, banho, tosa e cuidados completos para cães e gatos.' },
      { name: 'theme-color', content: '#2457a6' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'CliniCão & Gatos | Clínica Veterinária e Pet Shop em Marabá' },
      { property: 'og:description', content: 'Amor, cuidado e saúde para o seu pet em Marabá.' },
      { property: 'og:site_name', content: 'CliniCão & Gatos' },
      { property: 'og:locale', content: 'pt_BR' },
      // TODO: troque SEU-DOMINIO.com.br pelo domínio real assim que publicar.
      { property: 'og:image', content: 'https://SEU-DOMINIO.com.br/images/gallery4.jpg' },
      { property: 'og:url', content: 'https://SEU-DOMINIO.com.br/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://SEU-DOMINIO.com.br/images/gallery4.jpg' },
    ],
    links: [
      { rel: 'stylesheet', href: indexCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // TODO: troque SEU-DOMINIO.com.br pelo domínio real assim que publicar.
      { rel: 'canonical', href: 'https://SEU-DOMINIO.com.br/' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* MUST be first: sets the theme class before paint so there is no
            flash-of-wrong-theme. Do not move below <HeadContent />. */}
        {themeInitScript && <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />}
        <HeadContent />
        {/*
          WebSite + Organization entity (rendered on every page, once at the root).
          Gives Google's Knowledge Graph + AI answer engines explicit, machine-
          readable identity. Replace name/url and add the brand's real profile
          links to `sameAs` (LinkedIn, GitHub, X, Crunchbase) per app.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              // TODO: troque SEU-DOMINIO.com.br pelo domínio real assim que publicar.
              '@graph': [
                { '@type': 'WebSite', name: 'CliniCão & Gatos', url: 'https://SEU-DOMINIO.com.br/' },
                { '@type': 'Organization', name: 'CliniCão & Gatos', url: 'https://SEU-DOMINIO.com.br/', sameAs: ['https://www.instagram.com/clinicaoegatosmaraba/'] },
              ],
            }),
          }}
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider delayDuration={0}>
            <Toaster />
            {/*
              Full-bleed by default — NO app chrome. Child routes render directly.
              SaaS / dashboard app? The sidebar shell already exists at
              `src/routes/app.tsx` (the real `/app` segment) — add pages under
              `src/routes/app/`. Landing pages, marketing sites, content, and games
              stay full-bleed (delete `src/routes/app.tsx` + `src/routes/app/`).
            */}
            {children}
          </TooltipProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
