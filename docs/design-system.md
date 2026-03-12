# 7clicks Design System

Design System oficial da 7clicks, baseado nas cores extraídas da logo.

---

## 1. Paleta de Cores

### Cores Primárias (da logo)

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Cyan Light** | `#6DD3E8` | rgb(109, 211, 232) | Destaques, hover states, badges |
| **Blue Medium** | `#1B8DBF` | rgb(27, 141, 191) | Links, botões secundários, ícones |
| **Blue Dark** | `#0A5E8A` | rgb(10, 94, 138) | Botões primários, headers, CTAs |
| **Navy** | `#064569` | rgb(6, 69, 105) | Backgrounds escuros, nav, footer |

### Cores Neutras

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Gray 900** | `#1A1A2E` | rgb(26, 26, 46) | Texto principal |
| **Gray 700** | `#4A4A5A` | rgb(74, 74, 90) | Texto secundário |
| **Gray 500** | `#8E8E9A` | rgb(142, 142, 154) | Texto desabilitado, placeholders |
| **Gray 300** | `#C4C4CC` | rgb(196, 196, 204) | Bordas, divisores |
| **Gray 100** | `#EEEEF2` | rgb(238, 238, 242) | Backgrounds sutis |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Background principal |

### Cores Semânticas

| Nome | Hex | Uso |
|------|-----|-----|
| **Success** | `#10B981` | Confirmações, badges de sucesso |
| **Warning** | `#F59E0B` | Alertas, avisos |
| **Error** | `#EF4444` | Erros, validação |
| **Info** | `#1B8DBF` | Informações (usa Blue Medium) |

### Gradientes

```css
/* Gradiente principal (segue a diagonal da logo "7") */
--gradient-primary: linear-gradient(135deg, #6DD3E8 0%, #0A5E8A 100%);

/* Gradiente sutil para backgrounds */
--gradient-subtle: linear-gradient(180deg, #F8FBFD 0%, #FFFFFF 100%);

/* Gradiente hero/dark */
--gradient-dark: linear-gradient(135deg, #064569 0%, #0A5E8A 50%, #1B8DBF 100%);
```

---

## 2. Tipografia

### Font Stack

```css
--font-heading: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
--font-body: 'Inter', 'SF Pro Text', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Escala Tipográfica

| Nome | Tamanho | Line Height | Weight | Uso |
|------|---------|-------------|--------|-----|
| **Display** | 56px / 3.5rem | 1.1 | 700 | Hero headline |
| **H1** | 40px / 2.5rem | 1.2 | 700 | Títulos de página |
| **H2** | 32px / 2rem | 1.25 | 600 | Títulos de seção |
| **H3** | 24px / 1.5rem | 1.3 | 600 | Subtítulos |
| **H4** | 20px / 1.25rem | 1.4 | 600 | Card headers |
| **Body LG** | 18px / 1.125rem | 1.6 | 400 | Texto destaque |
| **Body** | 16px / 1rem | 1.6 | 400 | Texto padrão |
| **Body SM** | 14px / 0.875rem | 1.5 | 400 | Texto auxiliar |
| **Caption** | 12px / 0.75rem | 1.4 | 500 | Labels, badges |

### Pesos

| Nome | Valor | Uso |
|------|-------|-----|
| Regular | 400 | Corpo de texto |
| Medium | 500 | Labels, captions, navegação |
| Semibold | 600 | Subtítulos, botões |
| Bold | 700 | Headlines, CTAs |

---

## 3. Espaçamento

Baseado em escala de 4px.

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Gaps mínimos |
| `--space-2` | 8px | Padding interno de ícones |
| `--space-3` | 12px | Gap entre items inline |
| `--space-4` | 16px | Padding de botões, gap de cards |
| `--space-5` | 20px | Padding de inputs |
| `--space-6` | 24px | Gap de grid, margin de seções pequenas |
| `--space-8` | 32px | Padding de cards |
| `--space-10` | 40px | Gap entre seções |
| `--space-12` | 48px | Margin de seções |
| `--space-16` | 64px | Padding de seções (mobile) |
| `--space-20` | 80px | Padding de seções (desktop) |
| `--space-24` | 96px | Padding de hero |

---

## 4. Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, tags |
| `--radius-md` | 8px | Inputs, botões |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Modais, containers |
| `--radius-2xl` | 24px | Cards destaque |
| `--radius-full` | 9999px | Avatars, pills |

---

## 5. Sombras

```css
/* Sutil - cards em repouso */
--shadow-sm: 0 1px 2px rgba(10, 94, 138, 0.05);

/* Padrão - cards com hover, dropdowns */
--shadow-md: 0 4px 12px rgba(10, 94, 138, 0.08);

/* Elevação - modais, popovers */
--shadow-lg: 0 8px 24px rgba(10, 94, 138, 0.12);

/* Destaque - CTAs flutuantes */
--shadow-xl: 0 16px 48px rgba(10, 94, 138, 0.16);

/* Glow sutil para elementos interativos em focus */
--shadow-glow: 0 0 0 3px rgba(109, 211, 232, 0.3);
```

---

## 6. Breakpoints

| Nome | Valor | Uso |
|------|-------|-----|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop pequeno |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop grande |

### Container

```css
--container-max: 1280px;
--container-padding: 16px; /* mobile */
--container-padding-md: 24px; /* tablet */
--container-padding-lg: 32px; /* desktop */
```

---

## 7. Componentes

### Botões

#### Primary
```css
.btn-primary {
  background: #0A5E8A;
  color: #FFFFFF;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: #1B8DBF;
  box-shadow: 0 4px 12px rgba(10, 94, 138, 0.2);
}
```

#### Secondary
```css
.btn-secondary {
  background: transparent;
  color: #0A5E8A;
  border: 1.5px solid #0A5E8A;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
}
.btn-secondary:hover {
  background: #0A5E8A;
  color: #FFFFFF;
}
```

#### Ghost
```css
.btn-ghost {
  background: transparent;
  color: #1B8DBF;
  font-weight: 500;
  padding: 12px 24px;
}
.btn-ghost:hover {
  background: rgba(27, 141, 191, 0.08);
  border-radius: 8px;
}
```

#### Tamanhos

| Tamanho | Padding | Font Size | Min Height |
|---------|---------|-----------|------------|
| SM | 8px 16px | 14px | 36px |
| MD | 12px 24px | 16px | 44px |
| LG | 16px 32px | 18px | 52px |

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #EEEEF2;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 2px rgba(10, 94, 138, 0.05);
  transition: all 0.2s ease;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(10, 94, 138, 0.08);
  border-color: #C4C4CC;
}
.card--featured {
  border-color: #6DD3E8;
  border-width: 2px;
}
```

### Inputs

```css
.input {
  border: 1.5px solid #C4C4CC;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #1A1A2E;
  background: #FFFFFF;
  transition: border-color 0.2s ease;
}
.input:focus {
  border-color: #1B8DBF;
  box-shadow: 0 0 0 3px rgba(109, 211, 232, 0.3);
  outline: none;
}
.input::placeholder {
  color: #8E8E9A;
}
```

### Badges

```css
.badge {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
}
.badge--primary {
  background: rgba(109, 211, 232, 0.15);
  color: #0A5E8A;
}
.badge--success {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
}
```

---

## 8. Iconografia

- Biblioteca: **Lucide Icons**
- Tamanho padrão: 20px
- Stroke width: 1.5px
- Cor padrão: herda do texto (`currentColor`)

| Contexto | Tamanho |
|----------|---------|
| Inline com texto | 16px |
| Botões | 20px |
| Cards / features | 24px |
| Hero / destaque | 32px–48px |

---

## 9. Animações e Transições

```css
/* Transição padrão */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Easing curves */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Diretrizes
- Hover em botões/links: `200ms ease`
- Abertura de menus/dropdowns: `200ms ease-out`
- Scroll animations (AOS): `600ms ease-out`
- Evitar animações em `prefers-reduced-motion: reduce`

---

## 10. Tokens CSS (Custom Properties)

```css
:root {
  /* Colors - Primary */
  --color-cyan-light: #6DD3E8;
  --color-blue-medium: #1B8DBF;
  --color-blue-dark: #0A5E8A;
  --color-navy: #064569;

  /* Colors - Neutral */
  --color-gray-900: #1A1A2E;
  --color-gray-700: #4A4A5A;
  --color-gray-500: #8E8E9A;
  --color-gray-300: #C4C4CC;
  --color-gray-100: #EEEEF2;
  --color-white: #FFFFFF;

  /* Colors - Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #1B8DBF;

  /* Typography */
  --font-heading: 'Inter', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Spacing */
  --space-unit: 4px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(10, 94, 138, 0.05);
  --shadow-md: 0 4px 12px rgba(10, 94, 138, 0.08);
  --shadow-lg: 0 8px 24px rgba(10, 94, 138, 0.12);
  --shadow-xl: 0 16px 48px rgba(10, 94, 138, 0.16);
  --shadow-glow: 0 0 0 3px rgba(109, 211, 232, 0.3);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## 11. Tailwind CSS Mapping

Para uso com Tailwind v4 no projeto:

```css
/* app.css ou tailwind config */
@theme {
  --color-cyan-light: #6DD3E8;
  --color-blue-medium: #1B8DBF;
  --color-blue-dark: #0A5E8A;
  --color-navy: #064569;
  --color-gray-900: #1A1A2E;
  --color-gray-700: #4A4A5A;
  --color-gray-500: #8E8E9A;
  --color-gray-300: #C4C4CC;
  --color-gray-100: #EEEEF2;
}
```

**Uso em classes:**
```html
<button class="bg-blue-dark hover:bg-blue-medium text-white font-semibold py-3 px-6 rounded-lg">
  Get Started
</button>

<div class="bg-navy text-white">
  <h2 class="text-cyan-light">Section Title</h2>
</div>
```

---

## 12. Dark Mode

| Token | Light | Dark |
|-------|-------|------|
| Background | `#FFFFFF` | `#0F172A` |
| Surface | `#EEEEF2` | `#1E293B` |
| Text primary | `#1A1A2E` | `#F1F5F9` |
| Text secondary | `#4A4A5A` | `#94A3B8` |
| Border | `#C4C4CC` | `#334155` |
| Primary | `#0A5E8A` | `#6DD3E8` |
| Primary hover | `#1B8DBF` | `#8CDFF0` |

---

## 13. Acessibilidade

### Contraste mínimo (WCAG AA)
- Texto normal: ratio 4.5:1
- Texto grande (>18px bold): ratio 3:1
- `#0A5E8A` sobre branco: **4.7:1** (passa AA)
- `#064569` sobre branco: **7.3:1** (passa AAA)
- `#6DD3E8` sobre navy `#064569`: **5.8:1** (passa AA)

### Focus States
- Todos elementos interativos devem ter `--shadow-glow` no focus
- Nunca remover `outline` sem alternativa visível
- Tab order lógico e previsível

---

*Design System v1.0 — 7clicks USA*
