# Personal Portfolio — Visual Design System & Workspace Guidelines

This repository follows the visual identity, token architecture, and component guidelines specified below.

## 1. Design Direction

**Visual identity:** Dark / Premium / Technical / Minimal

The portfolio should feel:
- Sophisticated rather than flashy
- Technical but approachable
- High contrast with controlled use of color
- Spacious and typography-driven
- Motion-rich but never distracting

Avoid:
- Excessive gradients
- Neon-heavy interfaces
- Glassmorphism everywhere
- Too many colors
- Excessive borders
- Large numbers of animated elements competing for attention

---

## 2. Color System

Use a near-black foundation rather than pure black.

### Background

```js
background: {
  DEFAULT: "#08090B",
  primary: "#08090B",
  secondary: "#0D0F12",
  tertiary: "#12151A",
  elevated: "#171A20",
}
```

### Text

```js
text: {
  primary: "#F5F7FA",
  secondary: "#A7ADB7",
  muted: "#6F7682",
  disabled: "#454B55",
}
```

### Accent

Use one primary accent throughout the interface:

```js
accent: {
  DEFAULT: "#7C5CFC",
  hover: "#9278FF",
  muted: "#5B43C7",
  soft: "#A996FF",
}
```

### Supporting Colors

```js
success: "#4ADE80"
warning: "#FBBF24"
error: "#F87171"
info: "#60A5FA"
```

### Borders

```js
border: {
  DEFAULT: "#232730",
  subtle: "#191C22",
  strong: "#303540",
}
```

### Gradients

Gradients should be used primarily for hero visuals and subtle decorative elements:

```css
background: linear-gradient(
  135deg,
  #7C5CFC 0%,
  #4F46E5 50%,
  #2563EB 100%
);
```

Use gradients at low opacity when used as background decoration.

---

## 3. Typography

Use **Inter** as the primary UI font.  
For large display headings, use **Space Grotesk**.

```css
font-family: "Inter", system-ui, sans-serif;
```

Display font:

```css
font-family: "Space Grotesk", "Inter", sans-serif;
```

### Typography Scale

- **Display (Hero large screens):** `72px`, line-height: `1.0`, letter-spacing: `-0.04em`, font-weight: `600`
- **H1:** `60px`, line-height: `1.05`, letter-spacing: `-0.035em`, font-weight: `600`
- **H2:** `48px`, line-height: `1.1`, letter-spacing: `-0.03em`, font-weight: `600`
- **H3:** `30px`, line-height: `1.2`, letter-spacing: `-0.02em`, font-weight: `600`
- **H4:** `22px`, line-height: `1.3`, font-weight: `600`
- **Body Large:** `18px`, line-height: `1.7`, font-weight: `400`
- **Body:** `16px`, line-height: `1.6`, font-weight: `400`
- **Body Small:** `14px`, line-height: `1.5`
- **Caption:** `12px`, line-height: `1.4`, letter-spacing: `0.04em` (use uppercase captions sparingly)

---

## 4. Spacing System

Use an 8px-based spacing system:
`4px (micro)`, `8px (xs)`, `12px (sm)`, `16px (md)`, `24px (lg)`, `32px (xl)`, `48px (2xl)`, `64px (3xl)`, `80px (4xl)`, `96px (5xl)`, `128px (6xl)`, `160px (7xl)`

### Component spacing
- **Cards:** `padding: 24px` (large cards: `32px`)
- **Buttons:** `horizontal: 20px`, `vertical: 12px`
- **Section spacing:** Desktop: `120px – 160px` | Tablet: `96px – 120px` | Mobile: `72px – 96px`

---

## 5. Layout

- Maximum content width: `1280px` (`max-w-7xl mx-auto px-6`)
- Very large displays: max-width up to `1440px`, but keep actual content bounded around `1200–1280px`.

---

## 6. Responsive Breakpoints

Tailwind standard breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`.

- **Mobile (<640px):** Single-column, hero heading 42–48px, reduced section spacing, full-width CTA where appropriate, hide secondary nav, simplify animations.
- **Tablet (768px+):** Two-column where appropriate, hero heading 56px, 2-column card grid.
- **Desktop (1024px+):** Full navigation, 2/3-column layouts, larger whitespace, advanced animations.
- **Large Desktop (1280px+):** Full display typography, generous spacing, advanced GSAP effects.

---

## 7. Buttons

Buttons should feel substantial but minimal.

- **Primary Button:**
  - Background: `#7C5CFC` | Text: `#FFFFFF` | Border radius: `10px` | Padding: `12px 20px` | Font: `14px / 500`
  - Hover: Background `#9278FF`, `transform: translateY(-2px)`, transition `200ms ease`.
- **Secondary Button:**
  - Background: `transparent` | Border: `#303540` | Text: `#F5F7FA`
  - Hover: Background `#12151A`, Border `#454B55`.
- **Text Button:**
  - Low-priority actions, Text: `#A7ADB7`, Hover: `#F5F7FA`.

---

## 8. Cards

- Background: `#0D0F12`
- Border: `#232730`
- Border radius: `16px`
- Padding: `24px` (large cards: `32px`)
- Hover: subtle `translateY(-4px)`, `border-color: #303540`, optional subtle glow `box-shadow: 0 20px 60px rgba(124, 92, 252, 0.08)`. Avoid heavy neon glows.

---

## 9. Project Cards

Structure:
- Image: `aspect-ratio: 16 / 10`, `border-radius: 12px`
- Project Name, short description, tech pills (`React • Next.js • Supabase`), links (`GitHub`, `Live Demo →`).
- Hover: image scale `1.03`, card `translateY(-4px)` with Framer Motion.

---

## 10. Navbar

- Height: `72px`
- Desktop: `max-width: 1280px; margin: auto;`
- Background: `rgba(8, 9, 11, 0.75)` with `backdrop-filter: blur(16px)`
- Border: `1px solid rgba(255, 255, 255, 0.06)`
- Links: `14px`, color `#A7ADB7`, hover `#F5F7FA`, active `#FFFFFF`

---

## 11. Hero

- Minimum height: `min-height: 90vh`
- Left: Heading (`Space Grotesk`, `72px` desktop / `48px` mobile, letter-spacing `-0.04em`), Description, CTA. Accent highlight on key phrases.
- Right: Interactive visual / abstract animation.

---

## 12. Background & Atmosphere

- Base: `#08090B`
- Subtle depth: `radial-gradient(circle at 50% 0%, rgba(124, 92, 252, 0.12), transparent 40%)`
- Noise texture, soft grid, low opacity accent glow. Always feels almost black.

---

## 13. Section Headers

- Small eyebrow label: `12px`, uppercase, `letter-spacing: 0.12em`, color `#7C5CFC`, font-weight `500` (e.g. `01 — ABOUT`).
- Heading: `48px` desktop, `36px` mobile. Short supporting paragraph below.

---

## 14. Tags / Tech Pills

- Background: `#12151A`, Border: `#232730`, Color: `#A7ADB7`, Radius: `999px`, Padding: `6px 10px`, Font: `12px`
- Hover: Border `#7C5CFC`, Color `#F5F7FA`.

---

## 15. Dividers, Border Radius & Shadows

- **Dividers:** `border-color: #191C22` (avoid strong horizontal lines).
- **Radius:** Buttons/Inputs: `10px`, Cards: `16px`, Large feature cards: `24px`, Tags: `999px`.
- **Shadows:** Default: `0 10px 30px rgba(0, 0, 0, 0.20)`, Elevated: `0 24px 80px rgba(0, 0, 0, 0.30)`, Accent glow: `0 20px 60px rgba(124, 92, 252, 0.10)`.

---

## 16. Motion & Animation Responsibilities

- **Durations:** Fast (`150–200ms` for buttons/nav/hover), Medium (`300–500ms` for cards/reveals), Slow (`600–1000ms` for hero/page transitions).
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Framer Motion:** Primary UI animation (fade-in, slide-in, scroll reveals, hovers, project cards).
- **GSAP:** Advanced visual hero timelines, ScrollTrigger, complex sequences, cursor effects.
- **React Spring:** Magnetic buttons, physics-based cursor transforms.

---

## 17. Accessibility & Design Principle

- Minimum body contrast: WCAG AA, visible keyboard focus, semantic HTML, reduced-motion media query handling.
- **Core Principle:** Let typography, spacing, and composition create the premium feeling—not excessive decoration.
