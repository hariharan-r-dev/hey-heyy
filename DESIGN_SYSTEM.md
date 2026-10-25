# Zuntra Landing Page Design System

## Purpose

This design system captures the reusable visual language of the Zuntra marketing landing page. It is the source of truth for extending the existing site without changing its geometric, tactile, mobile-first character.

The implementation lives in `src/design-system/`:

- `tokens.css` — shared color, typography, spacing, radius, shadow, motion, and layout tokens.
- `components.tsx` — typed React components used by the landing page.
- `index.ts` — public exports for consuming the design system.

Import components from `@/design-system` and keep page-specific composition in the page or feature file.

## Principles

1. **Identity first:** Make the active identity, product, or audience immediately clear.
2. **Zero friction:** Keep primary actions direct, readable, and usable without explanation.
3. **Progressive complexity:** Reveal supporting detail after the core message and action.
4. **Premium utility:** Use generous whitespace, crisp borders, strong typography, and purposeful color.
5. **Mobile first:** Maintain at least 44 × 44 px touch targets and avoid horizontal overflow.

## Foundations

### Color

| Token | Value | Usage |
| --- | --- | --- |
| `--z-color-ink` | `#12141b` | Primary text, dark buttons, footer |
| `--z-color-canvas` | `#fbfbfb` | Page background |
| `--z-color-surface` | `#ffffff` | Raised and sticky surfaces |
| `--z-color-text-muted` | `#67675e` | Supporting copy |
| `--z-color-border` | `#d3d9e5` | Hairline card borders |
| `--z-color-border-strong` | `#717171` | Structural borders |
| `--z-color-brand-blue` | `#3151ff` | Brand statement surfaces |
| `--z-color-link-blue` | `#005bc5` | Selected and interactive states |
| `--z-color-lime` | `#dfff52` | People solution panel |
| `--z-color-sky` | `#a5cefd` | Team solution panel |
| `--z-color-mint` | `#99eeb8` | Event solution panel |

Use product-specific accent colors only inside a product context. Never use color as the sole carrier of meaning.

### Typography

- Primary family: DM Sans.
- Supporting family: Manrope.
- Large display headings use semibold weight, tight tracking, and compact line-height.
- Body copy uses 16–20 px with comfortable line-height.
- Labels remain short, medium weight, and high contrast.

Use `--z-font-display-size` for hero-scale text and `--z-font-section-size` for section headings. Avoid adding more font families.

### Spacing

Spacing follows a 4 px base scale. Prefer the named tokens from `--z-space-1` through `--z-space-30`. Main desktop sections use `--z-space-30`; mobile sections reduce to approximately 76 px vertically.

### Shape and elevation

- Pills: `--z-radius-pill`
- Standard panels: `--z-radius-md` or `--z-radius-lg`
- Feature cards: `--z-radius-card`
- Borders: 0.8–1 px hairlines
- Shadows: subtle and low contrast; use `--z-shadow-card`

## Components

### `PillButton`

Primary CTA link with `primary` and `light` variants.

```tsx
<PillButton href="#create" showArrow>Create your card</PillButton>
<PillButton href="#demo" variant="light">Book a demo</PillButton>
```

Use one dominant primary action per section. Button text should begin with a verb.

### `SectionHeading`

Centered section title and optional supporting description.

```tsx
<SectionHeading
  title={<>Four products.<br />One workspace.</>}
  description="Build every Zuntra experience in one place."
/>
```

### `FactStrip`

Three concise proof points separated by hairline rules. It becomes a single column on small screens.

```tsx
<FactStrip items={facts} />
```

### `StepGrid`

Three equal workflow steps with icon, title, and description. It stacks vertically below 760 px.

```tsx
<StepGrid items={steps} />
```

### `StackedBadge`

Product label with three overlapping color layers. The layer color should be a softer tint of the main accent.

```tsx
<StackedBadge color="#395afa" layerColor="#bedffe">
  Business 3.0
</StackedBadge>
```

### `ProductCard`

Large product storytelling card composed from `StackedBadge` and `PillButton`. Supply a `ProductCardData` object rather than rebuilding the markup.

```tsx
<ProductCard item={product} index={0} />
```

### `Accordion`

Single-open FAQ disclosure. Questions are real buttons with `aria-expanded`, and the icon is decorative.

```tsx
<Accordion items={questions} defaultOpen={0} />
```

## Responsive rules

- Desktop: 1101 px and above.
- Compact/tablet: 761–1100 px.
- Mobile: 760 px and below.
- Keep body content usable down to 320 px.
- Convert horizontal grids to vertical stacks on mobile.
- Keep buttons and disclosure rows comfortably tappable.
- Use fluid heading tokens instead of fixed display sizes in new components.

## Accessibility

- Text contrast must meet WCAG AA.
- Interactive controls require visible focus styles and semantic elements.
- Decorative images use an empty `alt` value.
- Meaningful images require concise descriptive alternative text.
- Do not place essential text inside images.
- Respect the content order when a desktop grid collapses on mobile.

## Adding a component

1. Confirm the pattern repeats or represents a stable product primitive.
2. Add any reusable visual values to `tokens.css`.
3. Add a typed component to `components.tsx` and export it from `index.ts`.
4. Reuse existing CSS class names when extracting an existing page pattern.
5. Document its purpose, API, and usage here.
6. Validate the production build at desktop and mobile breakpoints.

Page-specific sections, copy, data, and one-off artwork should remain outside the design system.
