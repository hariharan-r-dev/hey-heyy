# Zuntra Digital Cards — Lead UI/UX Designer Master Handover

> **Document Type:** Product, UX Architecture & UI Design System Master Specification  
> **Target Audience:** Lead UI/UX Designer, Product Design Team, Frontend Engineers  
> **Product Version:** 3.0 (Unified Workspaces, Multi-Product Identity & Event Suite)  
> **Status:** Active Master Reference  

---

## 1. Executive Summary & Design Vision

### 1.1 Product Vision
**Zuntra** is a next-generation professional digital identity and networking SaaS platform. It bridges physical and digital networking by transforming static business cards, event badges, product portfolios, and showcase brochures into interactive, trackable, and live-updated digital experiences.

Zuntra is not merely a "card builder"—it is an **identity and connection operating system** for:
1. **Solo Professionals & Freelancers:** Instant digital presence, NFC/QR sharing, one-tap contact downloads, and lead capture.
2. **Teams & Enterprises:** Centralized brand guardrails, bulk employee provisioning, department hierarchy, role-based governance, and aggregate analytics.
3. **Event Organizers:** End-to-end event lifecycle—landing pages, speaker/VIP profiles, attendee registration, private admission QR passes (Apple/Google Wallet), and real-time staff check-in scanning.
4. **Card & Pass Recipients (Zero-friction public users):** Recipient experience requiring **no app download and no account creation** to save contacts or exchange information.

### 1.2 Core Experience Principles
* **Identity First:** Users must always have immediate visual clarity on which identity, card, and workspace they are currently viewing or modifying.
* **Zero Friction for Recipients (Mobile-First):** Public cards and event passes load instantly on mobile web (<1.5s), formatted for single-thumb usage, with immediate high-contrast CTAs.
* **Progressive Complexity:** Solo creators experience a lightweight, ultra-simple 4-tab interface. When entering an Organization or Enterprise workspace, management controls (Departments, People, Brand Kits, Governance) reveal themselves naturally without cluttering daily workflows.
* **Truthful Capabilities:** Never display mock features (e.g., enterprise SSO, SCIM sync, or Apple Wallet downloads) as fully functional without explicit status indicators or gated setup states.
* **Tactile & Premium Aesthetic:** Built on a geometric, Miro-inspired design language featuring generous whitespace, crisp hairline borders, curated neutral surfaces, and punchy accent interactions.

---

## 2. Personas & Core User Needs

| Persona | Primary Goal | Critical UX Requirement |
|---|---|---|
| **Individual Professional** | Replace paper cards; share via QR/NFC at meetings; capture reciprocal leads. | Setup to shareable card in < 3 minutes; high-converting "Save Contact" button. |
| **Corporate Employee** | Carry company-approved digital identity; network at conferences. | Read-only brand compliance with editable personal bio/socials; instant mobile QR dock. |
| **Workspace / Team Admin** | Enforce company branding, issue 50+ employee cards, organize departments. | Batch invite/CSV import, template locking, department grouping, aggregate lead export. |
| **Event Organizer** | Launch conference landing page, issue attendee passes, scan tickets at the door. | Fast ticket tier builder, high-contrast QR generation, attendee roster management. |
| **Check-in Staff (Door)** | Scan 500+ attendees quickly without training or full admin data access. | Dedicated camera-first scanner UI (`/checkin/:id`), ultra-clear Audio/Haptic Green/Red pass feedback. |
| **Card Recipient (Public)** | Save the presenter's phone/email into phone contacts without hassle. | Standardized `.vcf` download, native dialer integration, and a clean reciprocal "Exchange Info" modal. |

---

## 3. Product Architecture & The 4 Core Product Lines

Zuntra operates on a unified workspace model: **one user account can belong to multiple workspaces (Personal or Organization)**. Every workspace can create and manage any of Zuntra's 4 core product lines:

```
                      ┌─────────────────────────────────────┐
                      │          ZUNTRA WORKSPACE           │
                      └──────────────────┬──────────────────┘
                                         │
         ┌──────────────────┬────────────┴───────┬──────────────────┐
         │                  │                    │                  │
         ▼                  ▼                    ▼                  ▼
┌─────────────────┐ ┌───────────────┐ ┌──────────────────┐ ┌────────────────┐
│  Business 3.0   │ │  Summit Pass  │ │     Showcase     │ │   Creator 3D   │
│ (Digital Cards) │ │ (Event Suite) │ │ (Product/Decks)  │ │ (Portfolios)   │
└─────────────────┘ └───────────────┘ └──────────────────┘ └────────────────┘
```

### 3.1 Product Line 1: Business 3.0 (Digital Business Cards)
* **Target:** Executives, sales reps, consultants, field teams.
* **Key Content:** Profile photo/avatar, cover banner, badge icons, full name, pronouns, job title, company name, department, bio summary, tap-to-call, tap-to-email, SMS, WhatsApp, social links (LinkedIn, X, GitHub, Instagram, YouTube), custom web links, embedded video/pitch deck.
* **Public Actions:**
  1. `Save Contact` (downloads native `.vcf` vCard directly into iOS Contacts / Google Contacts).
  2. `Exchange Contact` (opens reciprocal lead capture modal).
  3. `Share Card` (displays full-screen QR code + short URL copy).
* **Templates Available:** Minimalist, Executive, Modern Aurora, Identity Glass, Corporate Split.

### 3.2 Product Line 2: Summit Pass (Event Operations & Attendee Passes)
* **Target:** Conference organizers, summits, corporate retreats, VIP networking events.
* **Architectural Separation (Critical):**
  * **Public Speaker / VIP Profile:** A public-facing networking card freely shared with anyone.
  * **Private Admission Pass:** A private credential issued upon event registration containing an encrypted admission QR code, ticket tier, seat/hall info, and check-in status.
* **Key Capabilities:**
  * Public registration page (`/event/:slug`) with capacity caps and ticket types.
  * Mobile pass view with high-brightness QR presentation for door scanners.
  * Dedicated door staff scanner (`/checkin/:eventId`) with camera viewfinder, instant validation, offline queueing, and duplicate prevention.

### 3.3 Product Line 3: Showcase (Properties & Products)
* **Target:** Real estate agents, luxury auto dealers, architecture firms, agency product demos.
* **Key Content:** Listing name, price guide, high-resolution media gallery/carousel, key bulleted highlights, floorplans/brochures (PDF download), map pin/location, instant booking/inquiry form.

### 3.4 Product Line 4: Creator 3D (Creative & Influencer Identities)
* **Target:** Designers, 3D artists, content creators, photographers, freelancers.
* **Key Content:** Creator handle, discipline tags, studio affiliations, media showreel embed (Vimeo, YouTube, Spotify), commission booking links, tip jar / payment links.

---

## 4. Distribution, Assets & Growth Tools

Every published card powers an entire ecosystem of marketing and distribution assets automatically:

```
                             ┌───────────────────────┐
                             │    PUBLISHED CARD     │
                             └───────────┬───────────┘
                                         │
    ┌────────────────┬───────────────────┼───────────────────┬────────────────┐
    │                │                   │                   │                │
    ▼                ▼                   ▼                   ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌───────────────┐ ┌────────────────┐ ┌──────────────┐
│ Dynamic QR   │ │ Email Sig    │ │ Virtual BGs   │ │ Embed Widget   │ │ Physical NFC │
│ High-res     │ │ HTML snippet │ │ Zoom / Teams  │ │ Iframe/Script  │ │ URL & VCF    │
│ SVG/PNG      │ │ 1-click copy │ │ Branded PNG   │ │ Website badges │ │ Tap pairing  │
└──────────────┘ └──────────────┘ └───────────────┘ └────────────────┘ └──────────────┘
```

1. **Dynamic Vector QR Codes:** Customizable with brand color accents, logo center-embedding, and high-res export (SVG, PNG, PDF print-ready).
2. **Email Signature Generator:** Live WYSIWYG generator transforming card data into formatted HTML signatures with presets for Gmail, Outlook, Apple Mail, and Yahoo.
3. **Virtual Meeting Backgrounds:** 1920x1080 branded desktop wallpapers featuring company logo, cardholder name, title, and a scannable corner QR code for Zoom, Google Meet, and Microsoft Teams.
4. **Website Embed Widgets:** Interactive floating badge or embeddable iframe card for portfolio sites.
5. **Physical NFC Card Pairing:** Write-to-chip protocol pairing the physical card tap to the user's live public slug.

---

## 5. Contacts & Lead Capture (Mini-CRM Pipeline)

Whenever a recipient views a public card and taps **"Connect / Share your info"**, a lead is generated:
* **Captured Data:** Full Name, Email, Phone Number, Company, Job Title, Note/Context, Source Card ID, Timestamp.
* **Lead Dashboard (`/app/:workspaceId/contacts`):**
  * Reverse-chronological feed with search, card filter, and date ranges.
  * Status Pipeline: `New` → `Contacted` → `Qualified` → `Archived`.
  * Inline quick actions: 1-click email launch, phone dialer, copy info.
  * Secure CSV Export with spreadsheet formula-injection neutralization (`=`, `@`, `+`, `-` sanitization).

---

## 6. Complete Information Architecture & Route Sitemap

```
ZUNTRA SITEMAP
│
├── PUBLIC MARKETING & PREVIEWS
│   ├── /                          Marketing Home (Hero, Product Showcase, Features, Pricing, Trust)
│   ├── /studio                    Interactive Design Studio (Public card sandbox & template preview)
│   ├── /pricing                   Transparent Pricing Tiers (Free, Pro, Teams, Enterprise)
│   └── /login | /signup           Authentication & Registration
│
├── RECIPIENT & PUBLIC EXPERIENCES (No Auth Needed)
│   ├── /card/:slug                Public Digital Business Card (aliases: /p/:slug)
│   ├── /event/:slug               Public Event Registration & Schedule
│   └── /pass/:ticketId            Private Attendee Admission Pass
│
├── OPERATIONAL STAFF PORTAL
│   └── /checkin/:eventId          Dedicated Door Staff Scanner (Camera view, manual search, audit log)
│
└── AUTHENTICATED WORKSPACE APP (/app/:workspaceId/...)
    │
    ├── 1. HOME
    │   └── /home                  Dashboard Overview, Action Queue, Top Stats, Recent Leads
    │
    ├── 2. CONTENT & CARDS
    │   ├── /content               Card Library (Grid / Table view, Filter by Type & Department)
    │   ├── /content/new           Creation Entry (Choose: Business, Summit, Showcase, Creator)
    │   ├── /content/:id           Card Overview & Performance Stats
    │   ├── /content/:id/edit      3-Step Card Editor (Details -> Appearance -> Publish)
    │   └── /content/:id/share     Distribution Hub (QR Code, Direct Link, NFC, Signature, Wallet)
    │
    ├── 3. CONTACTS & LEADS
    │   ├── /contacts              Captured Leads Feed & Status Tracker
    │   └── /contacts/:leadId      Detailed Contact Record & Interaction Notes
    │
    ├── 4. EVENTS (If enabled)
    │   ├── /events                Organizer Events List
    │   ├── /events/new            Create New Event Wizard
    │   ├── /events/:id            Event Dashboard (Roster, Pass distribution, Door metrics)
    │   └── /events/:id/attendees  Attendee Management & Manual Registration
    │
    ├── 5. INSIGHTS & ANALYTICS
    │   └── /insights              Metrics (Card Views, QR Scans, Contact Saves, CTR, Geo)
    │
    └── 6. WORKSPACE ADMINISTRATION (Admins & Owners Only)
        ├── /people                Team Members, Invitations & Role Assignments
        ├── /departments           Department Groups (Sales, Engineering, Exec) & Card Assignment
        ├── /settings/brand        Global Brand Kit (Logos, Color Palettes, Locked Templates)
        ├── /settings/governance   Enterprise Security & Role Policies
        ├── /account/billing       Subscription Tier, Seats, Invoice History
        └── /account/profile       Personal Credentials, Recovery Codes, Active Sessions
```

---

## 7. End-to-End User Journeys (UX Step Maps)

### Journey A: Public Recipient (Mobile-First Card Encounter)
```
[Tap NFC Card / Scan QR]
           │
           ▼
[Public Card Web Page (/card/:slug)] ─── Loads in < 1.5s
           │
     ┌─────┴─────────────────────────┐
     ▼                               ▼
[Tap "Save Contact"]         [Tap "Exchange Details"]
     │                               │
     ▼                               ▼
Downloads `.vcf` vCard       Modal: Name, Email, Phone, Note
Direct to iOS/Android Phone         │
                             [Tap "Send Info"]
                                     │
                             Instant Confirmation Checkmark
                             (Data sent to Owner's Contacts tab)
```

### Journey B: Solo User Onboarding & First Card Creation
```
[Sign Up (/signup)] ──> [Choose "Just Me"] ──> [Save Backup Recovery Code]
                                                      │
                                                      ▼
[3-Step Card Creation Wizard]
  ├─ Step 1: Details (Name, Role, Company, Avatar, Direct Contacts)
  ├─ Step 2: Appearance (Choose Template, Accent Color, Cover Banner, Live Preview)
  └─ Step 3: Review & Publish (Set Custom Slug: zuntra.me/card/alex)
                                                      │
                                                      ▼
[Publish Success Modal] ──> [Instant Share Sheet: Copy Link / Download QR]
```

### Journey C: Team Administrator Card Rollout
```
[Create Org Workspace] ──> [Upload Company Logo & Hex Colors in Brand Settings]
                                      │
                                      ▼
                        [Lock Brand Card Template]
                                      │
                                      ▼
                        [Bulk Invite / Add Employees]
                   (Set Email, Job Title, Assign Department)
                                      │
                                      ▼
             [Employees Receive Welcome Email & Card Link]
         (Employee can customize bio/links; Brand styling locked)
```

### Journey D: Event Organizer & Door Staff Flow
```
[Create Event (/events/new)] ──> [Set Capacity, Venue, Dates & Ticket Types]
                                      │
                                      ▼
                        [Publish Event Page (/event/:slug)]
                                      │
                                      ▼
                         [Attendees Register Online]
                                      │
                                      ▼
       [Attendee Receives Private Pass with Dynamic Admission QR]
                                      │
                                      ▼
   [Door Staff Opens /checkin/:eventId on Phone -> Points Camera at Pass]
                                      │
         ┌────────────────────────────┴───────────────────────────┐
         ▼                                                        ▼
  [VALID TICKET]                                           [ALREADY USED / INVALID]
  Big Green Check, Haptic buzz,                            Big Red Warning, Audio alert,
  Displays Attendee Name & Badge Tier                      Displays Check-in Timestamp
```

---

## 8. UI Design System & Component Guidelines

The visual aesthetic of Zuntra is adapted from modern Scandinavian and geometric SaaS design (Miro reference): **restrained, clean, high-contrast, and purposeful**.

### 8.1 Color Palette & Token Architecture
* **Canvas / Background:** `#FFFFFF` (Pure white primary) and `#F9FAFB` (Subtle off-white background `bg-surface`).
* **Text / Typography Ink:**
  * Primary Headings & Dark UI: `#111827` (Near-black Ink).
  * Body Text: `#374151` (Dark Slate).
  * Supporting / Muted: `#6B7280` (Muted Steel).
  * Border / Hairlines: `#E5E7EB` (`border-hairline` / 1px crisp outline).
* **Brand Accents:**
  * Primary Brand Yellow: `#FDE047` / `#EAB308` (Used for brand marks, selected badges, and marketing highlights).
  * Interactive Blue / Focus: `#2563EB` (Used strictly for links, keyboard focus rings, and active state indicators).
* **Semantic Signals:**
  * Success: `#10B981` (Emerald).
  * Warning: `#F59E0B` (Amber).
  * Error / Danger: `#EF4444` (Crimson).

### 8.2 Typography Hierarchy
* **Font Family:** `DM Sans` (Primary UI geometric sans-serif) + `Inter` (Secondary fallback) + `JetBrains Mono` (Slugs, IDs, Code snippets).
* **Scale:**
  * Display 1 (Marketing Hero): `48px`–`56px`, Bold (`font-bold`), `-0.02em` tracking.
  * H1 (Page Title): `28px`–`32px`, Semi-bold (`font-semibold`).
  * H2 (Section Header): `20px`–`24px`, Semi-bold.
  * H3 / Card Title: `16px`–`18px`, Medium (`font-medium`).
  * Body Text: `14px`, Regular (`text-sm`, `leading-relaxed`).
  * Caption & Metadata: `12px`, Regular (`text-xs text-slate`).
  * Micro Badges: `11px`, Medium uppercase (`text-[11px] uppercase tracking-wider`).

### 8.3 Elevation, Border Radii & Surfaces
* **Corner Radii:**
  * Small Badges / Buttons: `rounded-lg` (`8px`) or `rounded-full` (Pill buttons).
  * Form Inputs / Selects: `rounded-xl` (`12px`).
  * Cards / Containers: `rounded-2xl` (`16px`).
  * Modals & Drawers: `rounded-3xl` (`24px`).
* **Shadows:**
  * Neutral Elevation 1: `shadow-2xs` (`0 1px 2px 0 rgb(0 0 0 / 0.05)`).
  * Neutral Elevation 2: `shadow-md` (`0 4px 6px -1px rgb(0 0 0 / 0.07)`).
  * Floating Modals: `shadow-2xl` (`0 25px 50px -12px rgb(0 0 0 / 0.15)`).

### 8.4 Form & Input Design Standards
* All inputs must feature explicit `<label>` tags above the field.
* Focus states must use an accessible 2px ring: `focus:ring-2 focus:ring-blue-500 focus:outline-hidden`.
* Inline validation errors appear below fields in `#EF4444` (`text-xs`).

---

## 9. Critical UI/UX Flaws Requiring Immediate Redesign

Based on recent engineering and visual audits, the Lead Designer must address and resolve these 7 specific UX regressions:

### 1. Fix Modal Footer Floating & Vertical Clipping
* **Issue:** In `BusinessCardEditorModal` and `WidgetEditorModal`, fixed footers (`Save` / `Cancel` buttons) float over form fields, cutting off input boxes and hiding embed code copy buttons.
* **Design Requirement:** Every editor modal must be constructed with a strictly defined 3-tier layout:
  1. Fixed Header (Title + Close X button).
  2. Independent Scrollable Body (`overflow-y-auto`).
  3. Fixed Action Footer (`bg-surface`, `border-t border-hairline`, primary & ghost CTAs).

### 2. Dual Responsive Table-to-Card Layout on Mobile
* **Issue:** Desktop data tables (Employee roster, Lead list, Attendees) break horizontally on screens `<768px`, pushing action buttons off-screen.
* **Design Requirement:**
  * Desktop (`≥768px`): Clean tabular layout with sortable columns.
  * Mobile (`<768px`): Automatically transform rows into responsive, self-contained **Mobile Cards** with tap-friendly action sheets.

### 3. Eliminate Inconsistent Emojis in Enterprise Controls
* **Issue:** Random OS emojis (`🗂️`, `🎟️`, `🏢`, `⚙️`) are used as section badges, rendering inconsistently across Windows, iOS, and Android.
* **Design Requirement:** Standardize strictly on **Lucide SVG Icons** (e.g., `<CreditCard />`, `<Ticket />`, `<Building2 />`, `<Settings />`).

### 4. Remove Random Pastel Tiles in Overview Dashboard
* **Issue:** Stat counters currently use mismatched pastel backgrounds (pale pink, peach, cyan, yellow).
* **Design Requirement:** Standardize on crisp white cards with hairline borders, dark ink numerals, and subtle, meaningful status indicators.

### 5. Lead Card CRM-Style Redesign
* **Issue:** Captured contacts currently render with oversized artificial textarea boxes and floating copy buttons.
* **Design Requirement:** Redesign each lead into a sleek contact card: Avatar initials, Contact Name, Company tag, 1-click icon actions (Email, Phone, Copy, Status selector).

### 6. Anonymous Showcase Fixture Fallback
* **Issue:** The landing page section *"Test drive deployed live passes"* renders a blank white gap when visitors are signed out.
* **Design Requirement:** Provide high-fidelity, interactive mock cards for anonymous visitors (Corporate Executive, VIP Event Pass, Creative Director, Real Estate Showcase).

### 7. Clarify Custom Auth & Recovery Flow
* **Issue:** The recovery screen previously promised an "email reset link", but Zuntra uses cryptographic backup recovery codes.
* **Design Requirement:** Design clear onboarding cards instructing users to download/copy their emergency recovery code, with an intuitive "Forgot Password" flow utilizing Email + Recovery Code.

---

## 10. Lead UI/UX Designer Deliverable Roadmap

The Lead UI/UX Designer should organize their Figma / design tool deliverables according to this phased roadmap:

### Phase 1: Core Design System & Component Library (Figma)
- [ ] Typography scale & styles (`DM Sans`, `Inter`, `JetBrains Mono`).
- [ ] Color tokens (Light canvas, Ink, Slates, Brand Yellow, Accents, Semantics).
- [ ] Component Kit: Buttons (Primary, Secondary, Ghost, Danger), Inputs, Selects, Toggles, Badges, Tabs, Avatar chips.
- [ ] Modal shell templates (Standard, Drawer, Confirmation dialog).

### Phase 2: Public Mobile Experience (The "Recipient Flow")
- [ ] Mobile Card viewport (390px iPhone standard).
- [ ] Public Card Themes (Minimalist, Executive, Modern Aurora, Event Pass).
- [ ] Floating Action Dock (`Save Contact`, `Exchange Info`, `Share`).
- [ ] Reciprocal Lead Capture bottom sheet.
- [ ] Full-screen QR presentation modal.

### Phase 3: Authenticated Workspace Shell
- [ ] Desktop layout (Left navigation sidebar, Workspace switcher, User profile).
- [ ] Mobile layout (Sticky top bar + 4-item bottom navigation dock).
- [ ] Role switcher & Personal vs Organization workspace indicator.
- [ ] Global Action Bar / Create Drawer.

### Phase 4: Card & Asset Creation Experience
- [ ] 3-Step Creation Wizard (Details, Appearance, Review & Publish).
- [ ] Side-by-side Desktop Live Mobile Preview frame.
- [ ] Email Signature Builder & Live Copy modal.
- [ ] QR Code customization panel (Colors, Logo embed, Frame styles).

### Phase 5: Event Suite & Check-in Experience
- [ ] Public Event Landing & Registration page (`/event/:slug`).
- [ ] Private Attendee Admission Pass (with brightness-boosted QR).
- [ ] Staff Door Scanner interface (`/checkin/:eventId`) with valid/invalid state overlays and manual search fallback.

### Phase 6: Contacts & Analytics Dashboards
- [ ] Lead Management table (Desktop) & Card List (Mobile).
- [ ] Lead Detail drawer with status dropdown & notes feed.
- [ ] Analytics graphs (Card views, QR scans, lead conversion rate).

---

## 11. Developer Handoff Standards

To ensure zero friction during frontend implementation:
1. **Name Matching:** Use identical naming between Figma components and TypeScript components (e.g., `CardShell`, `ActionDock`, `EmployeeEditorModal`, `StatusBadge`).
2. **Responsive Breakpoints:**
   * Mobile: `390px` (min-width `360px`).
   * Tablet: `768px`.
   * Desktop: `1024px` / `1280px` / `1440px`.
3. **Accessibility:** Ensure all text contrast meets WCAG AA standards (minimum 4.5:1 for body text). All interactive touch targets must be at least `44x44px` on mobile viewports.
