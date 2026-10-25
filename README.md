# Zuntra Platform — Developer Guide

This repository is organized into two completely decoupled projects to ensure that edits to the marketing website never break or disturb the core application code:

1. **Marketing Site (`hey`)**: Public landing page, product showcase, interactive card stack, pricing, solutions, and FAQ.
2. **Card Application (`zuntracards-main`)**: SaaS platform containing the Admin portal, business card profiles (`/card/:slug`), event pass registration, QR check-in scanner, and Supabase authentication.

---

## Project Structure & Architecture

```text
D:\Zuntra\hey hey\
├── hey\                 # 🌐 Marketing Website (Vite + React + Tailwind)
│   ├── src/             # Landing page components, design system, interactive stacks
│   ├── public/assets/   # Images, product graphics, SVGs
│   └── package.json     # Site dependencies
│
└── zuntracards-main\    # 📱 Card SaaS Application (Vite + React + Supabase)
    ├── src/
    │   ├── components/  # admin, auth, card, events
    │   ├── lib/         # auth, store, supabase client
    │   └── types/       # TypeScript schemas
    └── package.json     # Application dependencies
```

---

## Local Development URLs & Ports

| Project | Folder Path | Role | Dev URL | Port |
| :--- | :--- | :--- | :--- | :--- |
| **Marketing Site** | `D:\Zuntra\hey hey\hey` | Marketing landing page | [http://localhost:5173](http://localhost:5173/) | `5173` |
| **Card Application** | `D:\Zuntra\hey hey\zuntracards-main` | Dedicated SaaS Application | [http://localhost:5180](http://localhost:5180/) | `5180` |

---

## Connected Live Pages & Archetypes

The marketing site (`hey`) connects directly to all live pages on the card application (`zuntracards-main`):

| Page / Archetype | Live Application Route | Description |
| :--- | :--- | :--- |
| **Corporate B2B Card** | [`/card/praneeth-sivala`](http://localhost:5180/card/praneeth-sivala) | Executive smart card with 1-click vCard download |
| **VIP Summit Pass** | [`/card/dr-aris-thorne`](http://localhost:5180/card/dr-aris-thorne) | Event & keynote speaker badge with dynamic QR |
| **Summit Registration** | [`/event/apex-2026`](http://localhost:5180/event/apex-2026) | Attendee registration for Apex AI Summit |
| **Staff Check-In Scanner** | [`/checkin/apex-2026`](http://localhost:5180/checkin/apex-2026) | Mobile door camera pass code validator |
| **Luxury Showcase** | [`/card/villa-bellagio`](http://localhost:5180/card/villa-bellagio) | High-value architectural real estate portfolio |
| **Creator 3D Portfolio** | [`/card/julian-reed`](http://localhost:5180/card/julian-reed) | 3D visual artist spatial identity |
| **Authentication** | [`/login`](http://localhost:5180/login) & [`/signup`](http://localhost:5180/signup) | Database & Supabase user account access |
| **Admin Workspace** | [`/admin`](http://localhost:5180/admin) | Multi-tenant team cards, lead CRM, and analytics |
| **Pricing Section** | [`#pricing`](http://localhost:5173/#pricing) | Starter ($0), Team ($19/mo), Enterprise ($99/mo) |

---

## First-Time Setup

Run `npm install` inside both directories before running the development servers for the first time:

```powershell
# 1. Install Marketing Site dependencies
cd "D:\Zuntra\hey hey\hey"
npm install

# 2. Install Application dependencies
cd "D:\Zuntra\hey hey\zuntracards-main"
npm install
```

---

## How to Run Both Servers

Open **two separate terminal windows** (e.g. in VS Code or PowerShell):

### Terminal 1: Run Marketing Site
```powershell
cd "D:\Zuntra\hey hey\hey"
npm run dev
```
> Opens at **`http://localhost:5173/`**

### Terminal 2: Run Card Application
```powershell
cd "D:\Zuntra\hey hey\zuntracards-main"
npm run dev
```
> Opens at **`http://localhost:5180/`**

---

## How to Compile & Build for Production

Both projects use TypeScript and Vite. You can verify and build production bundles independently:

### Build Marketing Site
```powershell
cd "D:\Zuntra\hey hey\hey"
npm run build
```
*(Outputs optimized bundle to `hey/dist/`)*

### Build Card Application
```powershell
cd "D:\Zuntra\hey hey\zuntracards-main"
npm run build
```
*(Outputs type-checked bundle to `zuntracards-main/dist/`)*

---

## How to Make Changes

### 1. Making Changes to the Marketing Site
Edit files inside `D:\Zuntra\hey hey\hey\`:
- **Page Layout & Copy**: Edit `src/App.tsx`
- **Navigation Menus**: Edit `src/components/ui/navigation-menu4.tsx`
- **Design Tokens & Colors**: Edit `src/design-system/tokens.css`
- **Images & Icons**: Add or replace files in `public/assets/`
- **Animations / Blur**: `src/ScrollStack.jsx`, `src/GradualBlur.jsx`

*Any edits here only affect the marketing site and will never affect the card database, authentication, or admin dashboard.*

### 2. Making Changes to the Application
Edit files inside `D:\Zuntra\hey hey\zuntracards-main\`:
- **Card Views & .VCF generator**: `src/components/card/`
- **Admin Dashboard**: `src/components/admin/`
- **Auth (Login/Signup)**: `src/components/auth/LoginPage.tsx`
- **Event Passes & QR Scanner**: `src/components/events/`
- **Supabase & Local Data Store**: `src/lib/`

---

## Environment Variables & Cross-Linking

The two apps link to each other seamlessly using environment variables with sensible local defaults:

### In `hey` (`.env` or `.env.local` optional):
```bash
# URL of the card application that CTAs ("Log In", "Create Card") point to
VITE_APP_URL=http://localhost:5180
```

### In `zuntracards-main` (`.env` or `.env.local` optional):
```bash
# URL of the marketing website that "Back to Website" links point to
VITE_MARKETING_URL=http://localhost:5173

# Supabase backend credentials
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
