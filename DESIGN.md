---
name: "Android Device Lab Dossier"
description: "A precise, evidence-first portfolio system for Android engineering work."
colors:
  canvas: "#f2f3ef"
  surface: "#e8eae5"
  ink: "#141815"
  muted: "#56605a"
  line: "#bfc5bf"
  line-strong: "#747d76"
  signal-orange: "#c83f28"
  signal-on-orange: "#ffffff"
  inverse: "#171b18"
  inverse-ink: "#f4f5f1"
  focus: "#c83f28"
  selection: "#ffc6b8"
  dark-canvas: "#121513"
  dark-surface: "#1b201c"
  dark-ink: "#eef1ec"
  dark-muted: "#aab2ac"
  dark-line: "#39423b"
  dark-line-strong: "#78827a"
  dark-signal-orange: "#f06a4d"
  dark-signal-on-orange: "#17120f"
  dark-inverse: "#e9ede8"
  dark-inverse-ink: "#171a18"
  dark-focus: "#ff8b70"
  dark-selection: "#733322"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(3.6rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.7rem, 5.7vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.04em"
rounded:
  dossier: "4px"
  pill: "999px"
spacing:
  micro: "8px"
  compact: "12px"
  control-x: "18px"
  inset: "24px"
  section-min: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.signal-on-orange}"
    rounded: "{rounded.dossier}"
    padding: "12px 18px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.dossier}"
    padding: "12px 18px"
    height: "50px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.dossier}"
    size: "44px"
  profile-sheet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "22px"
  metadata-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
---

# Design System: Android Device Lab Dossier

## Overview

**Creative North Star: "The Android Device Lab Dossier"**

The portfolio behaves like a device-compatibility dossier: calm at a distance, exact on inspection, and organized around verifiable engineering evidence. Cold neutral surfaces create the feeling of a lab bench or inspection sheet, while signal orange marks the few facts and actions that need immediate attention.

The system is editorial rather than dashboard-like. Large, tightly set sans-serif headlines establish confidence; ruled records, square sheets, numbered evidence, and compact mono metadata make the content feel tested and attributable. Motion is a restrained reveal mechanism, never decoration, and disappears under reduced-motion preferences.

**Key Characteristics:**

- Cold neutral light and dark themes with one signal-orange accent.
- Oversized editorial headlines paired with compact mono evidence labels.
- Flat, ruled dossier surfaces with nearly square corners.
- Wide desktop evidence grids that collapse cleanly into one-column mobile records.
- Visible recruiter actions and accessible interaction states.

## Colors

The palette uses mineral neutrals for the working surface and a scarce, high-visibility orange for status, verification, hover, and primary action.

### Primary

- **Signal Orange** (#c83f28): The sole light-theme accent for primary actions, verified status, dates, metadata emphasis, and selected interaction feedback.
- **Signal on Orange** (#ffffff): The high-contrast foreground used on the light-theme accent.

### Neutral

- **Cold Canvas** (#f2f3ef): The default light-theme page field.
- **Inspection Surface** (#e8eae5): The slightly darker light-theme layer used for profile and experience sheets.
- **Lab Ink** (#141815): The primary light-theme text and the primary-button hover fill.
- **Instrument Gray** (#56605a): Secondary copy and supporting metadata.
- **Rule Line** (#bfc5bf): Hairline dividers inside records.
- **Strong Rule** (#747d76): Higher-emphasis section and record boundaries.
- **Inverse Bench** (#171b18): The dark contact band in the light theme.
- **Inverse Ink** (#f4f5f1): The foreground on the light-theme contact band.
- **Signal Focus** (#c83f28): The source color for light-theme focus outlines.
- **Warm Selection** (#ffc6b8): The light-theme text-selection field.
- **Dark Canvas** (#121513): The dark-theme page field.
- **Dark Inspection Surface** (#1b201c): The dark-theme tonal layer.
- **Dark Ink** (#eef1ec): The dark-theme primary text.
- **Dark Instrument Gray** (#aab2ac): The dark-theme supporting text.
- **Dark Rule** (#39423b): Dark-theme internal dividers.
- **Dark Strong Rule** (#78827a): Dark-theme section and record boundaries.
- **Dark Signal Orange** (#f06a4d): The brighter dark-theme accent.
- **Dark Signal on Orange** (#17120f): The foreground on the dark-theme accent.
- **Dark Inverse Bench** (#e9ede8): The inverted contact field in the dark theme.
- **Dark Inverse Ink** (#171a18): The foreground on the dark-theme inverse field.
- **Dark Signal Focus** (#ff8b70): The source color for dark-theme focus outlines.
- **Dark Warm Selection** (#733322): The dark-theme text-selection field.

### Named Rules

**The One Signal Rule.** Orange is the only expressive hue; use it for decisions and evidence, never as broad decoration.

**The Theme-Pair Rule.** Every semantic color role keeps the same job across light and dark themes even when its literal value changes.

## Typography

**Display Font:** Outfit (with sans-serif fallback)  
**Body Font:** Outfit (with sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Outfit gives the dossier a modern technical voice without looking like terminal software. JetBrains Mono is deliberately rationed to dates, statuses, technology labels, IDs, and verification notes.

### Hierarchy

- **Display** (600, fluid 3.6rem–6rem, 0.94): Hero statements; mobile narrows the fluid floor to preserve impact.
- **Headline** (600, fluid 2.7rem–5.5rem, 0.98): Major section openings with balanced wrapping.
- **Title** (600, 20px, 1.25): Evidence headings and compact component titles.
- **Body** (400, 16px, 1.55): Default copy; explanatory passages typically grow to 17–18px and remain around 52–75 characters wide.
- **Label** (400, 10px, 0.04em tracking, uppercase): Machine-like metadata, statuses, field names, and provenance notes.

### Named Rules

**The Mono Means Evidence Rule.** Never use the mono face for general prose or display headlines; it signals data, status, time, or provenance.

**The Tight Headline Rule.** Large headings use compact line-height and negative tracking so they read as deliberate blocks, not airy marketing copy.

## Layout

The main wrapper is capped at 1280px and keeps 24px gutters on desktop, 16px below 768px, and 12px below 391px. Sections use a large fluid vertical rhythm with a 6rem minimum, allowing the evidence to breathe without turning the page into a card grid.

Desktop compositions use unequal two-column grids: the hero favors the value statement, while project, experience, education, and contact sections balance narrative against proof. At 1080px, navigation moves behind a menu and major two-column records collapse to one column. At 767px, actions stretch to full width and metadata grids simplify. At 390px, the last constrained structures stack.

**The Ruled Record Rule.** Section and record boundaries are created by full-width hairlines and tonal bands, not floating containers.

## Elevation & Depth

The system is flat by design and uses no box shadows. Depth comes from tonal separation, strong and soft rules, an inverse contact band, and a translucent sticky header with 14px backdrop blur. Hover motion lifts text controls by only 2px; it does not simulate floating cards.

### Named Rules

**The Flat Lab Bench Rule.** Keep content surfaces physically flat; communicate hierarchy with field color, borders, and spacing.

## Shapes

Interactive controls and the brand mark use a restrained 4px radius. Dossier sheets and evidence records stay square, and 1px rules articulate internal structure. The only fully rounded shape is the native scrollbar thumb, where the pill silhouette is functional rather than brand-defining.

**The Near-Square Rule.** Do not soften the dossier into friendly rounded cards; the small control radius is the upper limit for branded UI.

## Components

### Buttons

- **Shape:** Compact near-square corners, 50px minimum height, and 12px by 18px internal padding.
- **Primary:** Signal-orange fill with high-contrast text; hover inverts to ink on canvas and lifts 2px.
- **Secondary:** Transparent fill with a strong rule; hover adds the inspection-surface tone.
- **Inverse:** Light inverse fill within the contact band; hover returns to signal orange.
- **Focus / Active:** All controls receive a visible offset focus outline; active state scales to 0.98.

### Cards / Containers

- **Corner Style:** Square for dossier and evidence surfaces.
- **Background:** Inspection Surface for the profile sheet and the experience section; Cold Canvas elsewhere.
- **Shadow Strategy:** None; tonal fields and rules provide separation.
- **Border:** Strong outer rules and lighter internal dividers.
- **Internal Padding:** The profile sheet uses 22px on desktop and 18px on mobile.

### Navigation

Desktop navigation is quiet 14px medium-weight text that changes from muted gray to signal orange on hover. The sticky header uses a translucent canvas field and a lower rule. Mobile navigation becomes a full-screen canvas sheet below the header, with large 600-weight links separated by rules; Escape closes it and focus returns to the trigger.

### Action Links

Evidence links are underlined, medium-bold actions with a compact external-arrow icon. Their underline and text both change to signal orange on hover, preserving a visible affordance without button chrome.

### Profile Sheet

The signature dossier component is a square, ruled surface containing a mono header, two-column definition rows, and a strong final action rule. On mobile, every field stacks label above value, keeping evidence order intact.

### Evidence Records

Project and experience entries are long-form records, not cards. Large titles establish identity; problem, solution, role, contribution, technology, and verification are separated through grid placement, numbered lists, and horizontal rules.

## Do's and Don'ts

### Do:

- **Do** lead with evidence, readable hierarchy, and explicit verification states.
- **Do** reserve signal orange for primary actions, status, time, metadata emphasis, and interaction response.
- **Do** use Outfit for human-readable hierarchy and JetBrains Mono only for data-like annotations.
- **Do** preserve the flat ruled-sheet construction in both light and dark themes.
- **Do** keep focus states visible and honor reduced-motion preferences.

### Don't:

- **Don't** introduce gradients, ornamental shadows, glass cards, or extra accent hues.
- **Don't** round dossier records into soft card tiles or break evidence into a generic bento grid.
- **Don't** use mono typography for paragraphs or oversized display copy.
- **Don't** turn missing evidence into decorative placeholders or invented product claims.
- **Don't** let animation obscure content order or become required for comprehension.
