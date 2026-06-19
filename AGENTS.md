# AGENTS.md — Instructions for AI Coding Agents

> This file guides AI coding agents (GitHub Copilot, Cursor, Claude Code, etc.) working on the BYOK AI Chat landing site codebase.

## Project Overview

BYOK AI Chat is a **static single-page marketing/landing site** for a free, open-source Chrome extension of the same name. The site is deployed on Netlify at `https://byok-ai-chat-site.netlify.app/`. It has no backend, no build step, no framework, and no server-side logic — just static HTML, CSS, and vanilla JavaScript.

The Chrome extension itself lives in a separate repository: https://github.com/alvescrafter/byok-ai-chat

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom styles, no preprocessor, no Tailwind, no framework
- **Vanilla JavaScript** — No dependencies, no npm, no bundler, no build tools
- **Deployment** — Netlify (static hosting)

## File Structure

```
byok-ai-chat-site/
├── index.html          # Main landing page (single page, all sections)
├── css/
│   └── style.css       # All styling (themes, responsive, animations)
├── js/
│   └── main.js         # Navigation toggle, smooth scroll, scroll animations
├── images/             # Icons and screenshots
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── screenshot-2026-06-19.png
├── robots.txt          # Crawler directives (AI bots explicitly allowed)
├── sitemap.xml         # XML sitemap
├── sitemap.md          # Markdown sitemap for AI agents
├── llms.txt            # AI agent summary file
├── content.md          # Full page content in Markdown for AI ingestion
├── AGENTS.md           # This file
├── brand.txt            # Brand identity guidelines
├── ai.txt              # AI permissions declaration
├── ai.json             # Structured content map + permissions
├── PRIVACY.md          # Privacy policy
├── _headers            # Netlify HTTP headers (Link, Content-Signal, X-Robots-Tag)
├── netlify.toml        # Netlify config (MIME types, headers)
└── .well-known/
    └── agents.json     # A2A agent discovery
```

## Conventions

### HTML
- Use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- All interactive elements must have `aria-label` or `aria-labelledby` attributes
- All images must have descriptive `alt` text
- JSON-LD structured data goes in `<head>` — maintain existing blocks when editing
- Keep the skip-link as the first focusable element in `<body>`

### CSS
- No CSS frameworks — all custom CSS in `css/style.css`
- Use CSS custom properties (variables) for theming
- Mobile-first responsive design with media queries
- 5 themes: dark, light, midnight, forest, sunset

### JavaScript
- No external dependencies — vanilla JS only
- No analytics, no telemetry, no tracking — never add tracking scripts
- Use `IntersectionObserver` for scroll animations
- Keep JS minimal — this is a landing page, not an app

### AI Agent Discovery Files
- `llms.txt` — Curated summary, 10-30 key links, factual tone (no marketing copy)
- `content.md` — Full content mirror in Markdown, kept in sync with `index.html`
- `robots.txt` — Explicitly allow all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `ai.txt` / `ai.json` — AI permissions (training: allowed, search: allowed, citation: allowed)
- `brand.txt` — Canonical name is "BYOK AI Chat" (not "BYOK", not "BYOKAI", not "BYOK AI")
- `_headers` — Netlify HTTP headers with `Link`, `Content-Signal`, `X-Robots-Tag`

## How to Modify

### Adding a new section to the landing page
1. Add the `<section>` to `index.html` inside `<main>`
2. Add corresponding styles to `css/style.css`
3. Add the section to `sitemap.md`
4. Update `content.md` with the new section's content in Markdown
5. Update `llms.txt` if it's a key page
6. Update `sitemap.xml` if it's a new URL
7. Update `ai.json` content map if needed

### Updating content
- **HTML content** → Edit `index.html`
- **Markdown mirror** → Update `content.md` to match
- **llms.txt summary** → Update if the product description or key facts change
- **brand.txt** → Update if brand name, tone, or product names change
- **JSON-LD** → Update `dateModified` field in `index.html` when content changes

### Deployment
- Push to the main branch — Netlify auto-deploys from Git
- No build step required — files are served as-is
- Verify new files are accessible via their URLs after deployment

## Key Facts to Maintain

- **Product name:** BYOK AI Chat
- **Author:** alvescrafter
- **License:** MIT
- **Price:** Free
- **Providers:** OpenAI, Anthropic, Google Gemini, Ollama, LM Studio, Custom API
- **Privacy stance:** No analytics, no telemetry, no tracking — this is a core principle, never compromise it
- **Chrome Web Store URL:** https://chromewebstore.google.com/detail/byok-ai-chat/kdhfcegaomdocmngcgnoiijppginbegg
- **GitHub URL:** https://github.com/alvescrafter/byok-ai-chat
- **Site URL:** https://byok-ai-chat-site.netlify.app/

## Do NOT

- Do not add analytics, tracking pixels, or telemetry
- Do not add npm, bundlers, or build tools — this is a static site
- Do not add JavaScript frameworks (React, Vue, etc.)
- Do not add CSS frameworks (Tailwind, Bootstrap, etc.)
- Do not remove or weaken AI crawler allowances in `robots.txt`
- Do not add marketing copy to `llms.txt` — keep it factual
- Do not break the Markdown mirror (`content.md`) — it must stay in sync with `index.html`