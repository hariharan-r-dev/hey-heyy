import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  QrCode,
  Smartphone,
  Wifi,
  Mail,
  Wallet,
  Shield,
  Users,
  Building2,
  Zap,
  ChevronDown,
  Layers,
  Download,
  Trash2,
  BarChart3,
  Briefcase,
  BookOpen,
  FileText,
  HelpCircle,
  Lock,
  Globe,
  Video
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { MarketingNav } from './MarketingNav';
import { MarketingFooter } from './MarketingFooter';
import { MarketingHeroVisual } from './MarketingHeroVisual';
import { TopicProductVisual, TopicVisualSpec } from './TopicProductVisual';
import { updatePageSEO } from '../../utils/seo';

export interface TopicPageData {
  slug: string;
  category: 'Products' | 'Solutions' | 'Platform' | 'Resources' | 'Company';
  badge: string;
  title: string;
  headline: string;
  subheadline: string;
  visual?: TopicVisualSpec;
  keyFeatures: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  steps?: {
    step: string;
    title: string;
    description: string;
  }[];
  comparison?: {
    legacy: string;
    zuntra: string;
  };
  faqs?: {
    q: string;
    a: string;
  }[];
}

export const TOPIC_PAGES: Record<string, TopicPageData> = {
  // ================= 02 — Product =================
  'product': {
    slug: 'product',
    category: 'Products',
    badge: 'PLATFORM SUITE',
    title: 'Product Overview',
    headline: 'Every tool you need to share, connect, and grow.',
    subheadline: 'A complete suite of digital cards, dynamic QR codes, NFC hardware, mobile wallet passes, and lead capture built around the person receiving your details.',
    keyFeatures: [
      { title: 'Digital Business Cards', description: 'Interactive browser profiles with instant 1-tap address book saving.', icon: Smartphone },
      { title: 'Dynamic QR Codes', description: 'High-contrast codes ready for screens, badges, presentations, and print.', icon: QrCode },
      { title: 'Hardware Tap-to-Share', description: 'Native NFC compatibility across modern iPhones and Android smartphones.', icon: Wifi },
      { title: 'Two-Way Lead Capture', description: 'Recipients exchange their info back, automatically syncing to your lead CRM.', icon: Users },
      { title: 'Email Signatures', description: 'Uniform company signatures with embedded QR codes and direct links.', icon: Mail },
      { title: 'Lockscreen & Offline QR', description: 'Instant offline camera-ready QR retrieval directly from your phone screen.', icon: Smartphone },
      { title: 'Engagement Telemetry', description: 'Real-time card views, link clicks, vCard downloads, and lead attribution.', icon: BarChart3 },
      { title: '30-Day Trash Bin', description: 'Accidental contact deletion protection with instant 1-click restore.', icon: Trash2 },
    ],
  },

  'digital-business-cards': {
    slug: 'digital-business-cards',
    category: 'Products',
    badge: 'CORE IDENTITY',
    title: 'Digital Business Cards',
    headline: 'Modern digital cards your contacts can actually save.',
    subheadline: 'Leave paper behind. Share your full professional profile with an instant 1-tap address book save. Zero app downloads required for your recipients.',
    visual: {
      src: '/marketing/visuals/digital-business-card.webp',
      alt: 'Zuntra digital business card profile showing avatar, title, contact buttons, and one-tap save contact button',
      width: 960,
      height: 1480,
      caption: 'Recipient-first mobile card with instant 1-tap address book save',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Instant 1-Tap vCard Save', description: 'Recipients download your complete vCard directly into Apple Contacts or Google Contacts above the fold.', icon: Download },
      { title: 'Multiple Distinct Profiles', description: 'Maintain separate cards for executive roles, consulting, creative work, or conferences without per-seat paywalls.', icon: Layers },
      { title: 'Reciprocal Lead Exchange', description: 'Recipients can exchange their details back in 1 tap, automatically synced to your workspace lead CRM.', icon: Users },
      { title: 'Dynamic Live Updates', description: 'Change your phone number, job title, or links anytime. Existing shared QR codes and NFC cards update instantly.', icon: Zap },
    ],
    steps: [
      { step: '01', title: 'Build in 60s', description: 'Add your photo, role, verified contact methods, and portfolio links.' },
      { step: '02', title: 'Share Anywhere', description: 'Display your dynamic QR code, tap via NFC, or share your custom URL.' },
      { step: '03', title: '1-Tap Save', description: 'Recipients tap once to save your contact directly into their phone book.' },
    ],
    comparison: {
      legacy: 'Competitors force your contacts to install an app or register before viewing full contact details.',
      zuntra: 'Zuntra runs natively in standard mobile browsers with 1-tap address book download and zero app friction.',
    },
  },

  'qr-business-cards': {
    slug: 'qr-business-cards',
    category: 'Products',
    badge: 'SCAN & CONNECT',
    title: 'QR Code Business Cards',
    headline: 'High-contrast dynamic QR codes engineered for fast camera scans.',
    subheadline: 'Display your QR code from your smartphone lockscreen, wallet, or video call background for effortless contact sharing in any lighting condition.',
    visual: {
      src: '/marketing/visuals/qr-business-card.webp',
      alt: 'High-contrast dynamic QR business card badge with instant camera scan target and crisp corner markers',
      width: 1680,
      height: 1120,
      caption: 'High-contrast dynamic QR badge engineered for instant camera scans',
      treatment: 'device',
    },
    keyFeatures: [
      { title: 'Dynamic Target Routing', description: 'Update your contact details or destination URL anytime without reprinting physical materials.', icon: QrCode },
      { title: 'Lockscreen & Fast Access', description: 'Add your personal QR badge to your phone lockscreen wallpaper for instant access.', icon: Smartphone },
      { title: 'Vector SVG & PNG Export', description: 'Export crisp QR codes ready for business cards, badges, presentation slides, or banners.', icon: Download },
      { title: 'Real-Time Scan Telemetry', description: 'Track how many times your QR code was scanned and how many contacts saved your vCard.', icon: BarChart3 },
    ],
  },

  'nfc-business-cards': {
    slug: 'nfc-business-cards',
    category: 'Products',
    badge: 'HARDWARE TAP-TO-SHARE',
    title: 'NFC Smart Business Cards',
    headline: 'Tap against any modern phone to share your card in milliseconds.',
    subheadline: 'Write your permanent Zuntra link to any standard NFC smart card, metal card, ring, or sticker. No special apps required for the tap to work.',
    visual: {
      src: '/marketing/visuals/nfc-tap.webp',
      alt: 'Physical matte black NFC smart card tapping a smartphone with animated contactless wave signal',
      width: 1680,
      height: 1120,
      caption: 'Hardware tap-to-share: zero apps needed on the recipient phone',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: 'Universal NFC Compatibility', description: 'Works seamlessly with iPhone (XR and newer) and modern Android smartphones.', icon: Wifi },
      { title: 'Standard NTAG Chips', description: 'Compatible with standard NTAG213, NTAG215, and NTAG216 NFC chips and physical cards.', icon: Smartphone },
      { title: 'Never Outdated', description: 'Keep the same physical card for years; your digital destination updates dynamically.', icon: Layers },
      { title: 'Backup QR Code', description: 'Every card includes a QR fallback for older phones without NFC enabled.', icon: QrCode },
    ],
  },

  'email-signatures': {
    slug: 'email-signatures',
    category: 'Products',
    badge: 'EMAIL BRANDING',
    title: 'Professional Email Signatures',
    headline: 'Turn every sent email into an interactive digital handshake.',
    subheadline: 'Generate clean HTML email signatures formatted for Gmail, Apple Mail, Outlook, and Superhuman with integrated QR codes and live profile links.',
    visual: {
      src: '/marketing/visuals/email-signature.webp',
      alt: 'Clean email client composer showing a branded corporate HTML signature with live links and QR badge',
      width: 1720,
      height: 1120,
      caption: 'Clean HTML signature tested across Gmail, Apple Mail, and Outlook',
      treatment: 'device',
    },
    keyFeatures: [
      { title: '1-Click HTML Copy', description: 'Formatted and tested across major desktop and mobile email clients with zero layout breakage.', icon: Mail },
      { title: 'Embedded Dynamic QR', description: 'Recipients can scan your signature QR code with their phone to save your contact immediately.', icon: QrCode },
      { title: 'Consistent Team Branding', description: 'Enforce uniform logo, typography, and disclaimer standards across all employee signatures.', icon: Building2 },
      { title: 'Direct Meeting Links', description: 'Include 1-click links to book meetings, view portfolios, or message on WhatsApp.', icon: Zap },
    ],
  },

  'virtual-backgrounds': {
    slug: 'virtual-backgrounds',
    category: 'Products',
    badge: 'VIDEO CONFERENCING',
    title: 'Virtual Backgrounds with QR Code',
    headline: 'Turn every Zoom, Teams, and Google Meet call into instant connections.',
    subheadline: 'Generate crisp, professional 1920×1080 virtual backgrounds with your company logo and dynamic personal QR code positioned so it never gets blocked by your camera silhouette.',
    visual: {
      src: '/marketing/visuals/virtual-background.webp',
      alt: 'Zoom and Teams 16:9 meeting canvas with branded wallpaper and silhouette-safe QR badge placement',
      width: 1760,
      height: 1040,
      caption: '1080p meeting wallpaper with silhouette-safe QR placement',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: '1-Click High-Res Export', description: 'Download crisp 1080p PNG wallpapers optimized for Zoom, Microsoft Teams, and Google Meet.', icon: Video },
      { title: 'Silhouette-Aware QR Placement', description: 'Your personal dynamic QR badge is positioned high and to the side, visible while you speak.', icon: QrCode },
      { title: 'Consistent Team Branding', description: 'Company logos, department colors, and typography standards enforced across remote teams.', icon: Building2 },
      { title: 'Live Meeting Attribution', description: 'Track how many participants scanned your background code during webinars and presentations.', icon: BarChart3 },
      { title: 'Instant vCard Download', description: 'Webinar attendees scan your video stream with their phone to save your contact immediately.', icon: Download },
      { title: 'Zero Software Plugins', description: 'Upload directly as a virtual background in your existing video conference app.', icon: Check },
    ],
    steps: [
      { step: '01', title: 'Choose Background Style', description: 'Select an executive gradient, minimal solid, or custom branded corporate template.' },
      { step: '02', title: 'Embed Dynamic QR', description: 'Your personal QR code is embedded automatically with crisp camera contrast.' },
      { step: '03', title: 'Upload to Video App', description: 'Upload to Zoom, Teams, or Google Meet settings and start connecting on calls.' },
    ],
    comparison: {
      legacy: 'Pasting links into Zoom chat gets lost in scroll, expires when meeting ends, or requires tedious manual typing.',
      zuntra: 'Your dynamic QR badge stays visible on screen throughout the call, allowing effortless 1-tap phone scans.',
    },
    faqs: [
      { q: 'Will my camera silhouette block the QR code?', a: 'No. Our templates position your dynamic QR code in the upper right or left third of the 16:9 canvas, leaving ample room for standard head-and-shoulder camera framing.' },
      { q: 'Does it work with Zoom, Microsoft Teams, and Google Meet?', a: 'Yes. The exported wallpaper is a standard 1920×1080 image file compatible with all video conferencing platforms that support custom virtual backgrounds.' },
      { q: 'Can attendees scan the QR code off their computer screen?', a: 'Yes! Modern smartphone cameras easily lock onto the high-contrast QR code directly from attendee laptop or desktop monitors.' },
      { q: 'Can our company enforce a uniform background across all employees?', a: 'Yes. Workspace admins can generate standardized team virtual backgrounds with locked brand assets for every team member.' },
    ],
  },

  'digital-wallet': {
    slug: 'digital-wallet',
    category: 'Products',
    badge: 'OFFLINE ACCESS',
    title: 'Lockscreen & Offline QR Badges',
    headline: 'Share your card in 2 seconds with high-contrast lockscreen badges.',
    subheadline: 'Keep your professional identity badge on your smartphone wallpaper or lockscreen. Scans reliably offline even without cellular or Wi-Fi connectivity.',
    visual: {
      src: '/marketing/visuals/digital-wallet-badge.webp',
      alt: 'Smartphone lockscreen displaying high-contrast offline QR pass with quick access widget',
      width: 960,
      height: 1480,
      caption: 'Offline lockscreen badge for instant 2-second access anywhere',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Offline Retrieval', description: 'Display your dynamic QR code even in underground conference halls or airplanes.', icon: Smartphone },
      { title: 'Instant Lockscreen Access', description: 'Access your card in 2 seconds without navigating through apps or menus.', icon: Smartphone },
      { title: 'Dynamic Destination Routing', description: 'Profile edits automatically update where your high-contrast QR barcode leads.', icon: Zap },
      { title: 'Zero Battery Drain', description: 'Standard high-contrast image asset without background battery consumption.', icon: Check },
    ],
  },

  'contact-management': {
    slug: 'contact-management',
    category: 'Products',
    badge: 'ADDRESS BOOK',
    title: 'Contact Management & CRM',
    headline: 'Organize every connection you make in one clean workspace.',
    subheadline: 'All leads captured through your card forms land in your workspace directory with tags, timestamps, source card attribution, and 1-click exports.',
    visual: {
      src: '/marketing/visuals/contact-directory.webp',
      alt: 'Zuntra contact directory interface showing searchable table, tag filters, source attribution, and export actions',
      width: 1760,
      height: 1120,
      caption: 'Private contact directory with source attribution and CSV export',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Centralized Lead Directory', description: 'Search, filter, and group contacts collected across all cards and events.', icon: Users },
      { title: '30-Day Trash Bin', description: 'Accidental deletions can be restored in 1 click. Your data is protected.', icon: Trash2 },
      { title: 'CSV & vCard Export', description: 'Download standardized contact data anytime for HubSpot, Salesforce, or Excel.', icon: Download },
      { title: 'Private Local Notes', description: 'Add notes about conversations that remain private on your device.', icon: Lock },
    ],
  },

  'lead-capture': {
    slug: 'lead-capture',
    category: 'Products',
    badge: 'LEAD GENERATION',
    title: 'Two-Way Contact & Lead Capture',
    headline: 'Collect verified contact info from everyone who scans your card.',
    subheadline: 'Turn your card into an active lead generation tool. Recipients tap "Connect" to send their details straight into your workspace CRM.',
    visual: {
      src: '/marketing/visuals/lead-capture-flow.webp',
      alt: 'Two-way contact exchange: recipient submit form on mobile card connecting to live workspace lead inbox',
      width: 1760,
      height: 1120,
      caption: 'Reciprocal exchange: recipient shares details directly into your workspace',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: 'Friction-Free Form', description: 'Recipients fill out a lightweight form in 15 seconds with zero account creation.', icon: Users },
      { title: 'Real-Time Notification', description: 'Get notified immediately when someone submits their contact details back to you.', icon: Zap },
      { title: 'Instant Lead Attribution', description: 'Track which team member, card profile, or event generated each lead.', icon: BarChart3 },
      { title: 'Export Anywhere', description: 'Sync collected leads with external CRMs or download as a clean CSV.', icon: Download },
    ],
  },

  'analytics': {
    slug: 'analytics',
    category: 'Products',
    badge: 'ENGAGEMENT METRICS',
    title: 'Scan & View Analytics',
    headline: 'See exactly how your cards perform in the real world.',
    subheadline: 'Audit views, QR scans, vCard saves, and link interactions with 7d, 30d, and 90d analytics and department breakdown.',
    visual: {
      src: '/marketing/visuals/analytics-dashboard.webp',
      alt: 'Zuntra analytics telemetry dashboard displaying total card views, unique scans, vCard saves, and engagement trends',
      width: 1760,
      height: 1120,
      caption: 'Real-time engagement telemetry: views, scans, vCard saves, and conversion rate',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Total Card Impressions', description: 'Track unique views and repeat visits across each individual card.', icon: BarChart3 },
      { title: 'vCard Save Conversion', description: 'Monitor how many people actually downloaded your vCard into their address book.', icon: Download },
      { title: 'Team Leaderboards', description: 'See which team members are generating the highest engagement at conferences.', icon: Users },
      { title: 'Privacy-Preserving Telemetry', description: 'Aggregated analytics without invasive fingerprinting or user surveillance.', icon: Shield },
    ],
  },

  // ================= 03 — Solutions =================
  'solutions': {
    slug: 'solutions',
    category: 'Solutions',
    badge: 'ALL SOLUTIONS',
    title: 'Solutions Overview',
    headline: 'Tailored networking architectures for every stage and team.',
    subheadline: 'Whether you network alone or equip hundreds of corporate executives, Zuntra delivers the exact balance of personal identity and administrative control.',
    keyFeatures: [
      { title: 'For Individuals', description: 'Free forever cards for solo professionals, creators, and freelancers.', icon: Users },
      { title: 'For Small Business', description: 'Standardized smart cards without enterprise complexity or price floors.', icon: Briefcase },
      { title: 'For Sales Teams', description: 'High-velocity lead capture with CRM exports and team analytics.', icon: BarChart3 },
      { title: 'For Enterprise', description: 'Zero-trust PostgreSQL architecture, bulk CSV imports, and role permissions.', icon: Building2 },
    ],
  },

  'individuals': {
    slug: 'individuals',
    category: 'Solutions',
    badge: 'SOLO PROFESSIONALS',
    title: 'For Individuals',
    headline: 'One considered link for every introduction you make.',
    subheadline: 'Share who you are, what you do, and how people can reach you. Clean presentation, instant vCard saving, and zero recipient app walls.',
    visual: {
      src: '/marketing/visuals/individual-card-share.webp',
      alt: 'Individual digital card profile with quick share drawer, QR modal, and direct contact actions',
      width: 960,
      height: 1480,
      caption: 'Single professional identity with personal branding and quick share sheet',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Free Forever Tier', description: '2 active cards at $0 with dynamic QR codes and full vCard saving.', icon: Check },
      { title: 'Vanity URL Slug', description: 'Claim a clean link (zuntra.cards/yourname) for social bios and resumes.', icon: Zap },
      { title: 'Custom Payment Badges', description: 'Direct links for Stripe, PayPal, Cash App, or UPI right on your profile.', icon: Wallet },
      { title: '1-Click Cancellation', description: 'Upgrade to Solo Pro ($4.99/mo) and cancel anytime with one click in settings.', icon: Shield },
    ],
  },

  'freelancers': {
    slug: 'freelancers',
    category: 'Solutions',
    badge: 'CREATIVE PROS',
    title: 'For Freelancers & Consultants',
    headline: 'Turn casual introductions into paying client contracts.',
    subheadline: 'Embed design portfolios, client case studies, retainer payment buttons, and direct booking links directly into your interactive card.',
    visual: {
      src: '/marketing/visuals/freelancer-portfolio-card.webp',
      alt: 'Freelancer portfolio card featuring featured client projects, calendar booking button, and direct inquiries',
      width: 960,
      height: 1480,
      caption: 'Portfolio showcase card with direct meeting booking and inquiry actions',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Portfolio Showcase Widgets', description: 'Display recent design work, case study images, and architectural specs.', icon: Layers },
      { title: 'Direct Booking Triggers', description: 'Add your Calendly, Cal.com, or booking links directly to your card header.', icon: Zap },
      { title: 'Fast Lead Exchange', description: 'Potential clients tap once to exchange their phone and email back to you.', icon: Users },
      { title: 'Professional Identity', description: 'Stand out from competitors handing out crumpled paper cards.', icon: Check },
    ],
  },

  'small-business': {
    slug: 'small-business',
    category: 'Solutions',
    badge: 'GROWING COMPANIES',
    title: 'For Small Businesses',
    headline: 'Professional smart cards without enterprise bloat.',
    subheadline: 'Equip your team with unified digital cards in 10 minutes. Shared logo, company colors, and centralized lead collection without per-seat penalty traps.',
    visual: {
      src: '/marketing/visuals/small-business-workspace.webp',
      alt: 'Small business cards dashboard with unified corporate palette, 5 employee cards, and brand consistency',
      width: 1760,
      height: 1120,
      caption: 'Unified brand identity across your entire small team without enterprise bloat',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Flat Team Pricing', description: '$12.99/mo covers up to 10 team cards with zero forced annual contracts.', icon: Check },
      { title: 'Uniform Branding', description: 'Enforce company logos, social handles, and standard typography.', icon: Building2 },
      { title: 'Centralized Lead CRM', description: 'All leads captured by your staff flow directly into your admin console.', icon: Users },
      { title: 'Department Tagging', description: 'Organize cards by Sales, Support, Operations, and Management.', icon: Layers },
    ],
  },

  'teams': {
    slug: 'teams',
    category: 'Solutions',
    badge: 'TEAMS & WORKSPACES',
    title: 'For Teams & Departments',
    headline: 'Unified brand identity and centralized lead CRM for teams.',
    subheadline: 'Deploy standardized smart cards across your organization in minutes. Manage employee cards, locked brand assets, department directories, and lead attribution.',
    visual: {
      src: '/marketing/visuals/teams-card-grid.webp',
      alt: 'Team workspace console showing card deployment grid, department filters, and employee directory',
      width: 1760,
      height: 1120,
      caption: 'Centralized team management with locked templates and department organization',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Multi-Tenant Workspaces', description: 'Manage distinct workspaces for separate subsidiaries, teams, or events.', icon: Building2 },
      { title: 'Locked Brand Assets', description: 'Lock corporate logos, primary colors, and disclaimers from accidental edits.', icon: Lock },
      { title: 'Employee Performance', description: 'See which team members are generating the most card scans and leads.', icon: BarChart3 },
      { title: 'Role-Based Access', description: 'Owner, Admin, and Member permissions to maintain clean governance.', icon: Shield },
    ],
  },

  'enterprise': {
    slug: 'enterprise',
    category: 'Solutions',
    badge: 'LARGE ORGANIZATIONS',
    title: 'For Enterprise Organizations',
    headline: 'Enterprise-grade digital pass infrastructure and governance.',
    subheadline: 'Built on PostgreSQL and custom zero-trust token authentication. Scale across thousands of employees with dedicated subdomains and bulk management.',
    visual: {
      src: '/marketing/visuals/enterprise-admin-console.webp',
      alt: 'Enterprise governance console with role-based permissions, custom subdomain routing, and audit logs',
      width: 1760,
      height: 1120,
      caption: 'Enterprise security console: role-based access, custom domain, and workspace isolation',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Zero-Trust Architecture', description: 'Row-level security policies ensure workspace data isolation and compliance.', icon: Shield },
      { title: 'Bulk Employee Upload', description: 'Import hundreds of employees via standardized CSV in 30 seconds.', icon: Users },
      { title: 'Custom Subdomains', description: 'Host cards on your company subdomain with dedicated SSL certificates.', icon: Globe },
      { title: 'Zero AI Surveillance Guarantee', description: 'We never transcribe, record, or share your employee conversation notes.', icon: Lock },
    ],
  },

  'sales-teams': {
    slug: 'sales-teams',
    category: 'Solutions',
    badge: 'HIGH-VELOCITY SALES',
    title: 'For Enterprise Sales Teams',
    headline: 'Arm your reps with digital cards that capture leads on contact.',
    subheadline: 'Never lose a conference conversation again. Sales reps share cards via QR or NFC, collect prospect details in 1 tap, and export directly into CRM pipelines.',
    visual: {
      src: '/marketing/visuals/sales-pipeline-leads.webp',
      alt: 'Sales team prospect pipeline showing conference lead capture, rep attribution, and CRM export status',
      width: 1760,
      height: 1120,
      caption: 'Sales lead capture with rep attribution and one-click CRM CSV export',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: '1-Tap vCard Download', description: 'Prospects save rep contact info directly into their phonebook without downloading an app.', icon: Download },
      { title: 'Instant Lead Form', description: 'Prospects send their name, email, company, and notes back with one click.', icon: Users },
      { title: 'Event Attribution', description: 'Tag leads by trade show, booth location, or networking dinner.', icon: BarChart3 },
      { title: 'CSV CRM Export', description: 'Export conference leads directly into HubSpot or Salesforce at the end of the day.', icon: Zap },
    ],
  },

  'recruiters-and-networking': {
    slug: 'recruiters-and-networking',
    category: 'Solutions',
    badge: 'TALENT ACQUISITION',
    title: 'For Recruiters & Networking Pros',
    headline: 'Connect with top candidates and industry peers with zero friction.',
    subheadline: 'Make candidate handshakes count. Share your hiring portal, job specs, and contact details with an instant scan at career fairs and meetups.',
    visual: {
      src: '/marketing/visuals/recruiter-candidate-view.webp',
      alt: 'Recruiter candidate capture dashboard with resume links, job requisition tags, and private interview notes',
      width: 1760,
      height: 1120,
      caption: 'Candidate networking: instant resume links, job requisitions, and private interview notes',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Job Board Integration', description: 'Link directly to active career openings and candidate application forms.', icon: Briefcase },
      { title: 'Instant Candidate Capture', description: 'Candidates submit their resume links, portfolio, and contact info in 15 seconds.', icon: Users },
      { title: 'Dynamic QR Badges', description: 'Wear your QR code on conference lanyards for effortless passive scanning.', icon: QrCode },
      { title: 'Private Follow-Up Notes', description: 'Jot down candidate impressions right on the contact record.', icon: Lock },
    ],
  },

  // ================= 04 — Pricing =================
  'pricing': {
    slug: 'pricing',
    category: 'Platform',
    badge: 'TRANSPARENT PLANS',
    title: 'Transparent Pricing',
    headline: 'Simple, honest pricing. No subscription traps.',
    subheadline: 'Start free forever. Upgrade for unlimited cards and team collaboration. Cancel anytime self-serve with zero dark patterns.',
    keyFeatures: [
      { title: 'Free Forever ($0)', description: '2 active digital cards, dynamic high-contrast QR code, and 1-tap vCard downloading.', icon: Check },
      { title: 'Solo Pro ($4.99/mo or $49/yr)', description: 'Unlimited cards, vanity slug, product showcase widgets, 30-day Trash Bin, and CSV exports.', icon: Zap },
      { title: 'Team & Studio ($12.99/mo or $129/yr)', description: 'Up to 10 member cards, shared brand templates, team lead CRM, and role-based access.', icon: Building2 },
      { title: '1-Click Cancellation Guarantee', description: 'Cancel anytime directly in billing settings. No phone calls or hidden menus.', icon: Shield },
    ],
    faqs: [
      { q: 'Are there hidden annual charges?', a: 'No. All plans clearly distinguish between monthly and annual billing. We send automated 72-hour renewal reminders before any annual charge.' },
      { q: 'What happens if I cancel my paid subscription?', a: 'Your account remains fully active until the end of your billing cycle and gracefully transitions to the Free Forever tier without losing your card data.' },
    ],
  },

  // ================= 05 — Resources =================
  'how-it-works': {
    slug: 'how-it-works',
    category: 'Platform',
    badge: 'THE PROCESS',
    title: 'How Zuntra Cards Works',
    headline: 'Three simple steps from signup to an unforgettable connection.',
    subheadline: 'Discover how Zuntra delivers a completely frictionless networking experience for both the sender and the recipient on every smartphone.',
    keyFeatures: [
      { title: '1. Create Your Card in 60s', description: 'Choose from curated archetypes. Add your photo, verified channels, and portfolio links.', icon: Layers },
      { title: '2. Share Anywhere', description: 'Display your high-contrast QR code from your lockscreen, tap an NFC card, or send your link.', icon: QrCode },
      { title: '3. Recipient Saves in 1 Tap', description: 'The recipient taps "Save Contact". A standard vCard lands straight in their phone. No app needed.', icon: Download },
      { title: '4. Exchange & Follow Up', description: 'Recipients submit their details back to you. Leads sync directly to your CRM for instant follow-up.', icon: Users },
    ],
  },

  'resources': {
    slug: 'resources',
    category: 'Resources',
    badge: 'KNOWLEDGE & TOOLS',
    title: 'Resources Hub',
    headline: 'Guides, articles, and documentation to connect better.',
    subheadline: 'Explore our library of networking best practices, NFC card tutorials, QR code design guides, and digital business card case studies.',
    keyFeatures: [
      { title: 'Networking Best Practices', description: 'How to make meaningful professional connections at conferences and trade shows.', icon: BookOpen },
      { title: 'NFC Programming Guides', description: 'How to write your permanent Zuntra link to standard physical NFC tags and cards.', icon: Wifi },
      { title: 'Lockscreen Badge Setup', description: 'How to save your high-contrast QR badge for immediate offline retrieval.', icon: Smartphone },
      { title: 'Team Rollout Strategies', description: 'How enterprise companies deploy digital cards to hundreds of employees.', icon: Building2 },
    ],
  },

  'blog': {
    slug: 'blog',
    category: 'Resources',
    badge: 'STORIES & INSIGHTS',
    title: 'Blog & Editorial',
    headline: 'Insights on modern networking, identity, and privacy.',
    subheadline: 'Read thoughts from our team on the death of paper business cards, recipient-first UX design, and why privacy matters in professional software.',
    keyFeatures: [
      { title: 'Why 70% of Paper Cards Get Trashed', description: 'The environmental and financial case for switching your team to dynamic digital cards.', icon: FileText },
      { title: 'The Problem with Recipient App Walls', description: 'Why forcing people to install an app ruins networking conversations.', icon: Smartphone },
      { title: 'The Science of High-Contrast QR Codes', description: 'How we engineered QR codes that scan instantly even in low-light environments.', icon: QrCode },
      { title: 'Zero-Surveillance Networking', description: 'Why we will never use AI to record or transcribe your confidential business meetings.', icon: Shield },
    ],
  },

  'guides': {
    slug: 'guides',
    category: 'Resources',
    badge: 'HOW-TO GUIDES',
    title: 'Guides & Tutorials',
    headline: 'Step-by-step instructions for hardware, wallets, and teams.',
    subheadline: 'Follow our clear, illustrated guides to get the most out of your digital business cards across every device and operating system.',
    keyFeatures: [
      { title: 'How to Write an NFC Smart Card', description: 'A 2-minute walkthrough using free tools on iOS and Android to encode standard NFC cards.', icon: Wifi },
      { title: 'Lockscreen Badge Installation', description: 'How to save your dynamic QR pass to your mobile lockscreen for instant sharing.', icon: Smartphone },
      { title: 'Email Signature Installation', description: 'How to paste your generated HTML signature into Gmail, Apple Mail, and Outlook.', icon: Mail },
      { title: 'Exporting Leads to CRM', description: 'How to export your collected conference contacts into HubSpot and Salesforce via CSV.', icon: Download },
    ],
  },

  'help': {
    slug: 'help',
    category: 'Resources',
    badge: 'SUPPORT & FAQ',
    title: 'Help Center',
    headline: 'Find quick answers and troubleshooting guides.',
    subheadline: 'Search our knowledge base for assistance with card customization, account recovery, subscription management, and workspace configuration.',
    keyFeatures: [
      { title: 'Account & Recovery', description: 'How to reset passwords, update email addresses, and manage workspace owners.', icon: Lock },
      { title: 'Card Creation & Editing', description: 'How to change profile photos, update contact numbers, and add portfolio widgets.', icon: Layers },
      { title: 'Billing & Subscriptions', description: 'How self-serve cancellation works, managing receipts, and updating credit cards.', icon: Check },
      { title: 'Data Export & Deletion', description: 'How to export your contact book or permanently delete workspace data.', icon: Trash2 },
    ],
  },

  'faq': {
    slug: 'faq',
    category: 'Resources',
    badge: 'COMMON QUESTIONS',
    title: 'Frequently Asked Questions',
    headline: 'Everything you need to know about Zuntra Cards.',
    subheadline: 'Clear answers on card creation, recipient experience, NFC compatibility, privacy, and team management.',
    keyFeatures: [
      { title: 'Zero App Footprint', description: 'Neither you nor your contacts need to install a mobile app to create, view, or save contact details.', icon: Smartphone },
      { title: 'Standard vCard Compatibility', description: 'Supported natively by Apple iOS Contacts, Google Contacts, and Outlook.', icon: Download },
      { title: 'Accidental Deletion Protection', description: 'Contacts moved to trash remain recoverable for 30 days. No accidental permanent losses.', icon: Trash2 },
      { title: 'Strict Privacy Policy', description: 'We do not sell contact data, record microphone conversations, or inject ad trackers.', icon: Shield },
    ],
    faqs: [
      { q: 'Does the recipient need an app or account?', a: 'No. That is our core advantage over legacy platforms. Recipients view your card in their normal browser and tap one button to download your contact details directly into their phone.' },
      { q: 'Can I write my link to an NFC card myself?', a: 'Yes. You can use standard free NFC writing tools (like NFC Tools on iOS or Android) to write your permanent Zuntra link to any NTAG213/215/216 NFC card or tag.' },
      { q: 'How does lead capture work?', a: 'When someone views your card, they can tap "Connect / Exchange Info" to send you their name, email, phone, company, and notes. These leads are immediately synced to your workspace Lead CRM.' },
      { q: 'Can I export my contacts?', a: 'Yes. You can export all captured contacts at any time in standardized CSV or vCard format.' },
    ],
  },

  'contact': {
    slug: 'contact',
    category: 'Resources',
    badge: 'GET IN TOUCH',
    title: 'Contact Support',
    headline: 'We are here to help you connect better.',
    subheadline: 'Have a question about your account, physical NFC cards, or team workspaces? Reach out directly to our support engineering team.',
    keyFeatures: [
      { title: 'Direct Email Support', description: 'Reach our team directly at support@zuntra.cards for rapid technical assistance.', icon: Mail },
      { title: '24-Hour SLA for Paid Plans', description: 'Solo Pro and Team subscribers receive prioritized engineering support.', icon: Zap },
      { title: 'Security Inquiries', description: 'Contact our security team regarding data policies, RLS audits, and compliance.', icon: Shield },
      { title: 'Feature Requests', description: 'Suggest new card templates, integrations, or export formats.', icon: HelpCircle },
    ],
  },

  // ================= 06 — Company and legal =================
  'company': {
    slug: 'company',
    category: 'Company',
    badge: 'WHO WE ARE',
    title: 'Company Overview',
    headline: 'Building recipient-first software for real-world connections.',
    subheadline: 'We started Zuntra with a simple belief: the best business card is the one that actually becomes a contact in someone’s phone without friction or surveillance.',
    keyFeatures: [
      { title: 'Recipient-First Principle', description: 'We design every screen for the person receiving the card, not to force app downloads.', icon: Check },
      { title: 'Zero Surveillance', description: 'We will never record private meetings, eavesdrop on conversations, or sell contact data.', icon: Shield },
      { title: 'Boring, Reliable Tech', description: 'Built with PostgreSQL, Supabase Cloud, and standard vCard 3.0 protocols.', icon: Lock },
      { title: 'Transparent Pricing', description: 'Honest pricing with self-serve 1-click cancellation and zero dark patterns.', icon: Wallet },
    ],
  },

  'about': {
    slug: 'about',
    category: 'Company',
    badge: 'OUR MISSION',
    title: 'About Zuntra Cards',
    headline: 'You made an impression. We make it stay.',
    subheadline: 'Zuntra Cards was created to fix what traditional digital cards broke: app download walls, surprise subscription renewals, and permanent accidental lead deletions.',
    keyFeatures: [
      { title: 'Design That WOWs', description: 'Curated editorial, minimal, and executive layouts that look stunning on any screen.', icon: Layers },
      { title: 'Frictionless Handoff', description: 'Scan, open, tap save. The contact lands where it belongs: in their phone.', icon: Download },
      { title: 'Customer Control', description: 'Your data belongs to you. Export CSV anytime, restore deleted leads, cancel in 1 click.', icon: Trash2 },
      { title: 'Independent Software', description: 'Focused on solving the core networking problem with speed, beauty, and craft.', icon: Zap },
    ],
  },

  'contact-us': {
    slug: 'contact-us',
    category: 'Company',
    badge: 'TALK TO US',
    title: 'Book a Demo & Enterprise Sales',
    headline: 'Equip your organization with modern digital cards.',
    subheadline: 'Speak with our enterprise team about deploying Zuntra Cards across your company, custom domain branding, and centralized lead governance.',
    keyFeatures: [
      { title: 'Custom Subdomain Setup', description: 'Learn how to run cards directly on cards.yourcompany.com with custom SSL.', icon: Globe },
      { title: 'Bulk Employee Onboarding', description: 'Discover automated CSV and API sync workflows for large enterprise rosters.', icon: Users },
      { title: 'Volume Licensing Discounts', description: 'Custom volume pricing for teams with over 50 employees or annual events.', icon: Building2 },
      { title: 'Dedicated Security Review', description: 'Access our security architecture documentation and PostgreSQL RLS policies.', icon: Shield },
    ],
  },

  'careers': {
    slug: 'careers',
    category: 'Company',
    badge: 'JOIN OUR TEAM',
    title: 'Careers at Zuntra',
    headline: 'Help us reinvent the way people connect.',
    subheadline: 'We are a small, focused team building beautiful, reliable software with modern web standards. We value clean code, high aesthetic standards, and deep user respect.',
    keyFeatures: [
      { title: 'Remote-First Culture', description: 'Work from wherever you do your best, most focused thinking.', icon: Globe },
      { title: 'High Craft Standards', description: 'We care deeply about typography, 60fps animations, and zero-compromise UX.', icon: Layers },
      { title: 'Boring Managed Tech', description: 'No convoluted over-engineering. We ship solid, production-grade software.', icon: Lock },
      { title: 'Ownership & Freedom', description: 'Direct ownership of features from design conception to customer deployment.', icon: Zap },
    ],
  },

  'privacy': {
    slug: 'privacy',
    category: 'Company',
    badge: 'USER PRIVACY',
    title: 'Privacy Policy',
    headline: 'Your connections and notes belong to you alone.',
    subheadline: 'We believe professional software should protect your privacy. We do not sell your personal data, inject third-party ad surveillance, or record your private meetings.',
    keyFeatures: [
      { title: 'Zero AI Microphone Surveillance', description: 'Unlike competitors, we do not record, transcribe, or share your private conversations.', icon: Lock },
      { title: 'Local Device Notes', description: 'Private contact notes remain strictly encrypted and isolated in your database.', icon: Shield },
      { title: 'Standard Export Rights', description: 'Export your entire contact book and lead database anytime in CSV or vCard format.', icon: Download },
      { title: 'Complete Account Deletion', description: 'Request account deletion at any time to permanently remove all stored workspace records.', icon: Trash2 },
    ],
  },

  'terms': {
    slug: 'terms',
    category: 'Company',
    badge: 'LEGAL TERMS',
    title: 'Terms of Service',
    headline: 'Fair, transparent terms with zero fine-print traps.',
    subheadline: 'Read our straightforward terms governing subscription billing, self-serve cancellations, data ownership, and acceptable platform use.',
    keyFeatures: [
      { title: '1-Click Self-Serve Cancellation', description: 'You can cancel any paid subscription with one click directly in your account settings.', icon: Check },
      { title: '72-Hour Renewal Notices', description: 'We notify you 72 hours in advance of any annual renewal charges. No surprise rebills.', icon: Zap },
      { title: 'You Own Your Content', description: 'All logos, profile images, contact details, and exported leads remain your property.', icon: Layers },
      { title: '99.9% Uptime Commitment', description: 'Hosted on global CDN infrastructure for reliable 24/7 card resolution.', icon: Globe },
    ],
  },

  'security': {
    slug: 'security',
    category: 'Company',
    badge: 'DATA PROTECTION',
    title: 'Security Architecture',
    headline: 'Zero-trust architecture built on PostgreSQL RLS.',
    subheadline: 'Learn how Zuntra safeguards corporate cards and customer contact data with row-level security policies, encrypted sessions, and isolated multi-tenancy.',
    keyFeatures: [
      { title: 'Row-Level Security (RLS)', description: 'Database policies guarantee that users can only access cards and leads in their workspace.', icon: Shield },
      { title: 'TLS 1.3 & HTTPS Everywhere', description: 'All card views, QR scans, and API transactions are encrypted in transit.', icon: Lock },
      { title: 'Custom Token Recovery', description: 'Cryptographic recovery tokens protect accounts against brute-force takeover.', icon: Zap },
      { title: 'Isolated Multi-Tenant Storage', description: 'Workspaces are logically isolated with strict relational constraints.', icon: Building2 },
    ],
  },
};

// Aliases for convenience
TOPIC_PAGES['wallet'] = TOPIC_PAGES['digital-wallet'];
TOPIC_PAGES['for-individuals'] = TOPIC_PAGES['individuals'];
TOPIC_PAGES['for-freelancers'] = TOPIC_PAGES['freelancers'];
TOPIC_PAGES['for-small-businesses'] = TOPIC_PAGES['small-business'];
TOPIC_PAGES['business'] = TOPIC_PAGES['teams'];
TOPIC_PAGES['for-teams'] = TOPIC_PAGES['teams'];
TOPIC_PAGES['for-enterprise'] = TOPIC_PAGES['enterprise'];
TOPIC_PAGES['for-enterprises'] = TOPIC_PAGES['enterprise'];
TOPIC_PAGES['help-center'] = TOPIC_PAGES['help'];
TOPIC_PAGES['faqs'] = TOPIC_PAGES['faq'];
TOPIC_PAGES['about-us'] = TOPIC_PAGES['about'];
TOPIC_PAGES['contact-support'] = TOPIC_PAGES['contact'];
TOPIC_PAGES['book-a-demo'] = TOPIC_PAGES['contact-us'];
TOPIC_PAGES['demo'] = TOPIC_PAGES['contact-us'];

function getTopicActions(data: TopicPageData, signedIn: boolean) {
  if (data.category === 'Solutions') {
    const solutionActions: Record<string, { label: string; href: string }> = {
      individuals: { label: 'Create Personal Card', href: signedIn ? '/admin' : '/signup' },
      freelancers: { label: 'Create Freelancer Card', href: signedIn ? '/admin' : '/signup' },
      'small-business': { label: 'Set Up Small Business Cards', href: signedIn ? '/admin' : '/signup' },
      teams: { label: 'Start Team Workspace', href: signedIn ? '/admin' : '/signup' },
      enterprise: { label: 'Contact Enterprise Sales', href: '/contact-us' },
      'sales-teams': { label: 'Equip Your Sales Team', href: signedIn ? '/admin' : '/signup' },
      'recruiters-and-networking': { label: 'Start Candidate Networking', href: signedIn ? '/admin' : '/signup' },
    };
    const act = solutionActions[data.slug] ?? { label: 'Explore Solutions', href: signedIn ? '/admin' : '/signup' };
    return {
      primaryHref: act.href,
      primaryLabel: signedIn && act.href === '/admin' ? 'Open Workspace' : act.label,
      secondaryHref: '/pricing',
      secondaryLabel: 'See Team Pricing',
    };
  }

  if (data.category === 'Products') {
    const productLabels: Record<string, string> = {
      'digital-business-cards': 'Create a Digital Card',
      'qr-business-cards': 'Create a QR Card',
      'nfc-business-cards': 'Set Up an NFC Card',
      'email-signatures': 'Create an Email Signature',
      'virtual-backgrounds': 'Create a Meeting Background',
      'digital-wallet': 'Create a Lockscreen Badge',
      'contact-management': 'Organize My Contacts',
      'lead-capture': 'Start Capturing Leads',
      analytics: 'View My Analytics',
    };
    return {
      primaryHref: signedIn ? '/admin' : '/signup',
      primaryLabel: signedIn ? 'Open Workspace' : (productLabels[data.slug] ?? `Start with ${data.title}`),
      secondaryHref: '/pricing',
      secondaryLabel: 'See Pricing',
    };
  }

  if (data.category === 'Resources') {
    return { primaryHref: '#topic-offer', primaryLabel: `Explore ${data.title}`, secondaryHref: '/contact', secondaryLabel: 'Get Help' };
  }

  if (data.slug === 'privacy' || data.slug === 'terms' || data.slug === 'security') {
    return { primaryHref: '#topic-offer', primaryLabel: `Read ${data.title}`, secondaryHref: '/contact', secondaryLabel: 'Ask a Question' };
  }

  return {
    primaryHref: signedIn ? '/admin' : '/signup',
    primaryLabel: signedIn ? 'Open Workspace' : `Start with ${data.title}`,
    secondaryHref: '/contact-us',
    secondaryLabel: 'Talk to Zuntra',
  };
}

function getOfferHeading(data: TopicPageData) {
  if (data.category === 'Products') return `What you get with ${data.title}`;
  if (data.category === 'Solutions') return `What we offer ${data.title.toLowerCase()}`;
  if (data.category === 'Resources') return `Explore ${data.title}`;
  return `What ${data.title} covers`;
}

function getClosingHeading(data: TopicPageData) {
  if (data.category === 'Solutions') return `Ready to equip ${data.title.replace(/^For /, '').toLowerCase()}?`;
  if (data.category === 'Resources') return `Ready to explore ${data.title}?`;
  if (data.category === 'Company') return `Want to know more about ${data.title}?`;
  return `Ready to use ${data.title}?`;
}

export const TopicPageView: React.FC<{ slug: string }> = ({ slug }) => {
  const data = TOPIC_PAGES[slug] || TOPIC_PAGES['digital-business-cards'];
  const { user } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const actions = getTopicActions(data, Boolean(user));
  const steps = data.steps ?? [];
  const comparison = data.comparison;
  const faqs = data.faqs ?? [];
  const PrimaryFeatureIcon = data.keyFeatures[0]?.icon ?? Layers;

  React.useEffect(() => {
    updatePageSEO({
      title: `${data.headline} | Zuntra Cards`,
      description: data.subheadline,
      canonicalPath: `/${slug}`,
    });
  }, [slug, data.headline, data.subheadline]);

  return (
    <div className="marketing min-h-screen bg-white text-ink flex flex-col justify-between font-sans selection:bg-brand-blue/20 selection:text-ink">
      {/* Shared Header Navigation */}
      <MarketingNav />

      {/* Main Topic Page Content */}
      <main className="flex-1">
        {/* Topic Hero Section */}
        <section className="marketing-page-hero hero relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-hairline bg-surface-soft">
          <div className="marketing-hero-layout">
          <div className="marketing-hero-copy max-w-5xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-hairline text-xs font-medium text-slate shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>{data.category} • {data.title}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-ink font-semibold tracking-[-2px] leading-tight">
              {slug === 'faq' ? <>Everything you need to<br />know about Zuntra Cards.</> : data.headline}
            </h1>

            <p className="text-base sm:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={actions.primaryHref}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink hover:bg-charcoal text-white text-sm font-semibold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{actions.primaryLabel}</span>
                <ArrowRight size={15} />
              </a>
              <a
                href={actions.secondaryHref}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-ink hover:bg-ink hover:text-white text-ink text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{actions.secondaryLabel}</span>
              </a>
            </div>

          </div>
          {data.visual ? (
            <TopicProductVisual visual={data.visual} priority={true} />
          ) : (
            <MarketingHeroVisual
              kind="topic"
              title={data.title}
              badge={data.badge}
              note={`${data.keyFeatures.length} capabilities included`}
              icon={PrimaryFeatureIcon}
              items={data.keyFeatures.map(feature => feature.title)}
            />
          )}
          </div>
        </section>

        {/* The exact offer for this route — no cross-product demo or generic metrics. */}
        <section id="topic-offer" className="topic-offer-section border-b border-hairline bg-white">
          <div className={`topic-offer-shell topic-offer-${data.category.toLowerCase()}`}>
            <div className="topic-offer-intro">
              <div className="topic-offer-icon"><PrimaryFeatureIcon size={28} /></div>
              <span>{data.badge}</span>
              <h2>{getOfferHeading(data)}</h2>
              <p>{data.subheadline}</p>
            </div>
            <div className="topic-offer-list">
              {data.keyFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <article key={feature.title}>
                    <div><IconComponent size={20} /></div>
                    <p><strong>{feature.title}</strong><span>{feature.description}</span></p>
                    <Check size={17} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3-Step Walkthrough */}
        {steps.length > 0 && <section className="py-20 lg:py-24 border-b border-hairline bg-surface-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-[-1px] mt-2">
                Built for zero friction at every touchpoint.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((st, i) => (
                <div key={i} className="p-8 rounded-[24px] bg-white border border-hairline shadow-2xs space-y-3">
                  <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-mono font-bold">
                    {st.step}
                  </span>
                  <h3 className="text-lg font-bold text-ink">{st.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {/* Contrast with Legacy Apps */}
        {comparison && <section className="py-16 border-b border-hairline bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-[28px] border border-hairline bg-surface-soft">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-bold">
                  Legacy Card Platforms & Paper
                </span>
                <p className="text-xs text-slate leading-relaxed">
                  {comparison.legacy}
                </p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-hairline pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold flex items-center gap-1">
                  <Check size={14} /> Zuntra Recipient-First Difference
                </span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  {comparison.zuntra}
                </p>
              </div>
            </div>
          </div>
        </section>}

        {/* Topic Specific FAQs Accordion */}
        {faqs.length > 0 && <section className="py-20 lg:py-24 border-b border-hairline bg-surface-soft">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Questions & Answers
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-[-1px]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white border border-hairline rounded-[20px] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-ink">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-steel transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-ink' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate leading-relaxed border-t border-hairline pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>}

        {/* Closing Conversion CTA */}
        <section className="py-20 lg:py-28 bg-ink text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-2px] leading-tight">
              {getClosingHeading(data)}
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              {data.subheadline}
            </p>
            <div className="pt-2">
              <a
                href={actions.primaryHref}
                className="px-9 py-4 rounded-full bg-brand-blue hover:bg-blue-pressed text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{actions.primaryLabel}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer Navigation */}
      <MarketingFooter />
    </div>
  );
};
