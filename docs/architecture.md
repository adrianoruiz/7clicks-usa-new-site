# 7clicks USA — Architecture Review

> Revisado em 2026-03-12 | Nuxt 4.3.1 + Vue 3 + Tailwind v4 + daisyUI 5

---

## Stack Summary

| Camada | Escolha | Versao |
|--------|---------|--------|
| Framework | Nuxt 4 (SSR/SSG) | 4.3.1 |
| UI | Vue 3 Composition API | 3.5.28 |
| Linguagem | TypeScript (strict) | 5.9.3 |
| Styling | Tailwind CSS v4 (CSS-first) | 4.2.1 |
| Componentes UI | daisyUI 5 | 5.5.19 |
| Icons | Lucide (tree-shakeable) | latest |
| State | Pinia 3 | 3.0.4 |
| ORM | Drizzle ORM | 0.45.1 |
| DB | PostgreSQL | externo |
| Runtime | Bun | 1.3.9 |
| Deploy | Docker multi-stage | Alpine |
| Testes | Vitest + happy-dom | 4.0.18 |

---

## Estrutura de Arquivos

```
7clicks-usa-new-site/
├── app/
│   ├── app.vue                    # Root: NuxtLayout + NuxtPage + AppToast
│   ├── error.vue                  # Error page global (404/500)
│   ├── assets/css/main.css        # Tailwind v4 + daisyUI + fonts + animacoes
│   ├── components/
│   │   ├── AppNavbar.vue          # Navbar sticky, mobile dropdown, theme toggle
│   │   ├── AppFooter.vue          # Footer com links, social, copyright
│   │   ├── AppToast.vue           # Sistema de notificacoes global
│   │   ├── ThemeToggle.vue        # Light/dark switch (localStorage)
│   │   ├── home/                  # 7 secoes da landing page
│   │   │   ├── HeroSection.vue    # Hero animado com gradient mesh + orbs
│   │   │   ├── ProblemSolution.vue# Comparacao before/after
│   │   │   ├── ServicesGrid.vue   # 3 cards de pricing
│   │   │   ├── ProcessTimeline.vue# 4 steps do processo
│   │   │   ├── PortfolioShowcase.vue # Grid de projetos
│   │   │   ├── SocialProof.vue    # Stats com counter animado
│   │   │   └── ContactCTA.vue     # Form de contato
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.vue
│   │   │   └── BeforeAfter.vue
│   │   └── pricing/
│   │       ├── PricingTable.vue
│   │       └── FAQAccordion.vue
│   ├── composables/
│   │   ├── useCountUp.ts          # Animacao de contagem (rAF + ease-out)
│   │   ├── useScrollAnimation.ts  # IntersectionObserver para scroll-animate
│   │   ├── usePortfolio.ts        # Dados estaticos dos projetos demo
│   │   └── useToast.ts            # Estado global de toasts (useState)
│   ├── layouts/
│   │   └── default.vue            # Navbar + main + Footer
│   ├── pages/
│   │   ├── index.vue              # Home (landing page single-page)
│   │   ├── pricing.vue            # Tabela de precos + FAQ
│   │   ├── contact.vue            # Formulario dedicado
│   │   ├── about.vue              # Sobre a agencia
│   │   └── portfolio/
│   │       ├── index.vue          # Grid de projetos
│   │       └── [slug].vue         # Case study individual
│   ├── plugins/
│   │   └── theme.client.ts        # Carrega tema do localStorage no boot
│   └── stores/
│       └── user.ts                # Pinia store (preparado, nao usado)
├── server/
│   ├── api/
│   │   ├── contact.post.ts        # POST form → log (TODO: Resend)
│   │   └── health.get.ts          # Health check
│   ├── database/
│   │   ├── index.ts               # Drizzle + postgres pool (max:10)
│   │   └── schema.ts              # Tabela users (pgTable)
│   ├── middleware/
│   │   └── log.ts                 # Request logger
│   └── utils/
│       └── db.ts                  # Re-export db
├── Dockerfile                     # Multi-stage Bun build
├── docker-compose.yml             # App container port 3007:3000
├── nuxt.config.ts                 # Config central
└── package.json
```

---

## O Que Esta Bem Feito

### 1. Arquitetura de Componentes — Limpa e Bem Organizada
A separacao por dominio (`home/`, `portfolio/`, `pricing/`) e excelente. Cada componente tem responsabilidade unica. Nao tem "god components" com 500 linhas. Facil de manter e navegar.

### 2. Tailwind v4 CSS-First — Decisao Correta
Usar `@tailwindcss/vite` direto ao inves do modulo `@nuxtjs/tailwindcss` e a abordagem certa para Tailwind v4. O `main.css` com `@plugin "daisyui"` e `@theme` esta alinhado com as best practices.

### 3. Composables Bem Definidos
- `useCountUp` — animacao performatica com rAF e ease-out cubic
- `useScrollAnimation` — IntersectionObserver ao inves de scroll listener (performante)
- `useToast` — estado global via `useState` (SSR-safe)
- `usePortfolio` — dados centralizados, facil de migrar para API/DB depois

### 4. TypeScript Strict + Type Check no Build
`typescript.strict: true` e `typeCheck: 'build'` no nuxt.config garante que erros de tipo sao pegos antes do deploy. Boa pratica.

### 5. Docker Multi-Stage
O Dockerfile produz uma imagem minima (so `.output`). Bom para deploy rapido e seguro. O container roda com Bun, mantendo consistencia dev→prod.

### 6. SEO Bem Implementado
JSON-LD (Organization, AggregateOffer), `useSeoMeta` em cada pagina, favicons SVG/ICO, meta tags OG. A fundacao de SEO esta solida.

### 7. Theming com daisyUI
Light/dark via `data-theme` com persistencia em localStorage e plugin client-side para evitar flash. Implementacao correta.

---

## O Que Pode Melhorar

### 1. Contact API — Sem Integracao Real
O `contact.post.ts` apenas loga no console. Sem envio de email, sem persistencia, sem notificacao. Os leads se perdem se o server reiniciar.

**Recomendacao:** Integrar Resend (ja mencionado no TODO) + salvar no PostgreSQL como backup. Adicionar rate limiting basico.

### 2. Sem Validacao Server-Side Robusta
O endpoint de contato faz validacao minima (campos required + regex de email). Nao tem:
- Sanitizacao HTML (risco de XSS se os dados forem exibidos em algum painel)
- Rate limiting (vulneravel a spam/abuse)
- CSRF protection
- Honeypot ou reCAPTCHA

**Recomendacao:** Adicionar `zod` para validacao server-side. Implementar rate limit simples (IP-based) no middleware Nitro.

### 3. Database Schema Definido Mas Nao Usado
A tabela `users` e a conexao PostgreSQL existem mas nao sao consumidas por nenhuma API route. O pool de 10 conexoes esta sendo aberto sem necessidade.

**Recomendacao:** Ou remover temporariamente (YAGNI) ou conectar ao contact form para persistir leads. A conexao nao deveria ser inicializada se nao ha uso.

### 4. Portfolio com Dados Hardcoded
Os projetos em `usePortfolio.ts` sao estaticos no codigo. Para adicionar/editar projetos, precisa alterar codigo e fazer redeploy.

**Recomendacao:** Para o momento, esta OK (3 projetos demo). Quando escalar, migrar para:
- Arquivos Markdown com `@nuxt/content` (sem DB)
- Ou tabela no PostgreSQL com painel admin simples

### 5. User Store Sem Uso
O `stores/user.ts` define um store de autenticacao completo mas nao e usado em lugar nenhum. Codigo morto no projeto.

**Recomendacao:** Remover ate que autenticacao seja realmente necessaria. Evita confusao.

### 6. Sem Testes
Vitest configurado, mas zero arquivos de teste. Para um site agency isso pode ser aceitavel no MVP, mas as APIs (especialmente contact) deveriam ter ao menos testes unitarios.

**Recomendacao:** No minimo, testar `contact.post.ts` (validacao, edge cases) e `usePortfolio.ts` (dados corretos).

### 7. Sem Error Boundary Alem do error.vue
Se uma API falha ou um componente quebra, o tratamento e basico. Nao tem retry, fallback UI, ou error tracking.

**Recomendacao:** Para MVP e aceitavel. Pre-producao, adicionar Sentry ou similar para error tracking.

### 8. Fonts Carregando via API Externa
As fontes Satoshi e General Sans carregam via `api.fontshare.com`. Se o Fontshare cair, o site perde a tipografia.

**Recomendacao:** Baixar os font files e servir localmente de `public/fonts/`. Melhora performance (elimina request externo) e confiabilidade.

### 9. Imagens Placeholder
Os componentes de portfolio usam icones Lucide (Monitor) como placeholder ao inves de screenshots reais. Isso funciona para dev, mas o site precisa de imagens reais antes do launch.

### 10. `lucide-vue-next: "latest"` no package.json
Usar `latest` como versao e perigoso — um breaking change no Lucide pode quebrar o build sem warning.

**Recomendacao:** Fixar a versao atual (ex: `^0.460.0` ou qualquer que seja).

---

## Fluxos Principais

### Scroll Animation Flow
```
User scroll → IntersectionObserver (threshold: 0.1)
  → adiciona .scroll-visible → CSS transition 0.6s ease
  → delays escalonados (.delay-100 a .delay-400)
```

### Contact Form Flow
```
User preenche form → validacao client-side
  → POST /api/contact → validacao server (regex email)
  → console.log (TODO: Resend) → response success
  → toast notification → form reset
```

### Theme Toggle Flow
```
User clica ThemeToggle → checkbox change
  → document.documentElement.setAttribute('data-theme', theme)
  → localStorage.setItem('theme', theme)
  → Na proxima visita: theme.client.ts carrega do localStorage
```

### Stats Counter Flow
```
User scrolla ate SocialProof → IntersectionObserver (threshold: 0.3)
  → useCountUp.animate() → rAF loop com ease-out cubic
  → numeros animam de 0 ao target em ~2s
```

---

## Deploy Architecture

```
[Bun Build] → [Docker Multi-Stage]
  Stage 1: bun install --frozen-lockfile
  Stage 2: bun run build → .output/
  Stage 3: bun .output/server/index.mjs

[docker-compose] → port 3007:3000
  → DATABASE_URL → PostgreSQL externo
  → NODE_ENV=production
  → restart: unless-stopped
```

**Nitro preset:** `node-server` (compativel com Bun runtime)

---

## Dependencias Externas

| Servico | Status | Uso |
|---------|--------|-----|
| Fontshare API | Ativo | Fontes Satoshi + General Sans |
| PostgreSQL | Configurado | Schema definido, nao consumido |
| Resend | TODO | Envio de emails do contact form |
| Hostinger VPS | Planejado | Deploy Docker |

---

## Metricas de Qualidade do Codigo

| Metrica | Status |
|---------|--------|
| TypeScript strict | ON |
| ESLint | Configurado |
| Testes | 0 arquivos |
| Type check no build | ON |
| Code splitting | Automatico (Nuxt) |
| SSR-safe code | Sim (import.meta.server checks) |
| Tree-shaking icons | Sim (lucide imports individuais) |

---

## Veredicto

**O projeto esta bem arquitetado para o que se propoe** — um site agency com landing page de alta conversao. A stack e moderna, as decisoes tecnicas sao solidas, e a organizacao de codigo e limpa.

**Prioridades antes do launch:**

1. **Integrar Resend no contact.post.ts** — sem isso, leads se perdem
2. **Fixar versao do lucide-vue-next** — `latest` e bomba relogio
3. **Self-host as fontes** — elimina dependencia do Fontshare
4. **Remover user store** (ou usar) — codigo morto confunde
5. **Adicionar rate limiting ao /api/contact** — protecao basica contra spam
6. **Lazy-load conexao do PostgreSQL** — nao abrir pool se nao ha uso

**Para depois do launch:**

- Testes unitarios nas APIs
- Error tracking (Sentry)
- Analytics (Plausible ou similar)
- Migrar portfolio para @nuxt/content ou DB
- i18n EN/PT-BR
- OG images por pagina
