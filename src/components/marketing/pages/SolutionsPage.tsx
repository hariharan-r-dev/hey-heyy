import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Briefcase,
  Building2,
  Shield,
  BarChart3,
  Zap,
  Check
} from 'lucide-react';
import { useAuth } from '../../../lib/auth';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { InteractiveCardShowcase } from '../InteractiveCardShowcase';
import { MarketingHeroVisual } from '../MarketingHeroVisual';
import { updatePageSEO } from '../../../utils/seo';

const audiences = [
  {
    icon: Users,
    title: 'For Individuals',
    description: 'One card for every version of you. Share your professional identity with anyone instantly without app barriers.',
    href: '/individuals',
    features: ['Personal digital card', 'Dynamic QR + NFC sharing', '1-tap vCard address book save', 'Multiple card styles'],
    badge: 'SOLO PROS',
  },
  {
    icon: Briefcase,
    title: 'For Freelancers',
    description: 'Stand out at every client meeting. Capture qualified leads and follow up with the people who matter most.',
    href: '/freelancers',
    features: ['Custom branding & links', 'Two-way lead capture forms', 'Email signature generator', 'Direct portfolio showcases'],
    badge: 'CREATIVE TALENT',
  },
  {
    icon: Building2,
    title: 'For Small Business',
    description: 'Equip every employee with a sleek professional card. Keep your brand consistent across the company without per-seat penalty traps.',
    href: '/small-business',
    features: ['Team management console', 'Locked brand assets & logos', 'Department grouping', 'Shared contact directory'],
    badge: 'GROWING COMPANIES',
  },
  {
    icon: Users,
    title: 'For Teams',
    description: 'Organize cards by department, track team engagement, and manage employee onboarding from one centralized workspace.',
    href: '/teams',
    features: ['Multi-tenant workspace', 'Admin card management', 'Centralized company roster', 'Aggregated lead attribution'],
    badge: 'COLLABORATIVE TEAMS',
  },
  {
    icon: Shield,
    title: 'For Enterprise',
    description: 'Custom subdomain deployment, PostgreSQL zero-trust isolation, compliance controls, and SLA-backed dedicated engineering.',
    href: '/enterprise',
    features: ['Zero-trust token security', 'Bulk CSV roster sync', 'Custom subdomains with SSL', 'Dedicated onboarding & SLA'],
    badge: 'LARGE ROSTERS',
  },
  {
    icon: BarChart3,
    title: 'For Sales Teams',
    description: 'Turn every conference handshake into pipeline. Capture verified prospect contacts in the field and sync directly to your CRM.',
    href: '/sales-teams',
    features: ['Direct CSV & vCard export', 'Real-time scan alerts', 'Card engagement insights', 'Conference badge integration'],
    badge: 'HIGH-VELOCITY SALES',
  },
  {
    icon: Zap,
    title: 'Recruiters & Networking',
    description: 'Exchange details at scale. Perfect for career expos, technical summits, and executive networking events.',
    href: '/recruiters-and-networking',
    features: ['High-volume contact exchange', 'Direct hiring portal links', 'Private interview notes', 'Instant vCard & CSV export'],
    badge: 'TALENT ACQUISITION',
  },
];

export const SolutionsPage: React.FC = () => {
  const { user } = useAuth();
  const startUrl = user ? '/admin' : '/signup';

  useEffect(() => {
    updatePageSEO({
      title: 'Solutions by Role & Team — Zuntra Digital Cards',
      description: 'Zuntra solutions tailored for individuals, freelancers, growing teams, enterprise rosters, and event networking.',
      canonicalPath: '/solutions',
    });
  }, []);

  return (
    <div className="marketing min-h-screen bg-white text-ink flex flex-col font-sans">
      <MarketingNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="marketing-page-hero pt-20 pb-16 lg:pt-28 lg:pb-20 text-center bg-surface-soft border-b border-hairline">
          <div className="marketing-hero-layout">
          <div className="marketing-hero-copy max-w-4xl mx-auto px-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-hairline text-xs font-medium text-slate shadow-2xs">
              <Users size={13} className="text-brand-blue" />
              <span>Tailored Deployment Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-tight">
              Built for how<br />your team works.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Whether you network solo or equip five hundred field reps, Zuntra delivers the exact balance of personal identity and administrative governance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={startUrl}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink hover:bg-charcoal text-white text-sm font-semibold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-ink hover:bg-ink hover:text-white text-ink text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Compare Plans</span>
              </a>
            </div>
          </div>
          <MarketingHeroVisual kind="solutions" />
          </div>
        </section>

        {/* Live Interactive Demo */}
        <section className="py-16 lg:py-24 border-b border-hairline bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <InteractiveCardShowcase initialTab="exchange" />
          </div>
        </section>

        {/* Audience Grid */}
        <section className="py-16 lg:py-24 border-b border-hairline bg-surface-soft">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Role-Based Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Choose the architecture tailored to your goals.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((aud) => (
                <a
                  key={aud.title}
                  href={aud.href}
                  className="group rounded-[24px] border border-hairline p-7 flex flex-col justify-between gap-5 hover:border-ink hover:shadow-md transition-all bg-white hover:bg-surface-soft"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-surface border border-hairline flex items-center justify-center shadow-xs group-hover:bg-ink group-hover:text-white transition-colors">
                        <aud.icon size={22} className="text-brand-blue group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-steel px-2.5 py-0.5 rounded-full bg-surface border border-hairline">
                        {aud.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-ink flex items-center justify-between">
                        <span>{aud.title}</span>
                        <ArrowUpRight size={15} className="text-steel opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-xs text-slate leading-relaxed mt-2">{aud.description}</p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-hairline">
                      {aud.features.map((f) => (
                        <li key={f} className="text-xs text-ink flex items-center gap-2">
                          <Check size={13} className="text-brand-blue shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 pt-2">
                    Explore role details
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison: Individual vs Team */}
        <section className="py-20 lg:py-24 bg-white border-b border-hairline">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Deployment Modes
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Personal vs. team deployment.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-soft rounded-[28px] border border-hairline p-8 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate">Self-Serve</span>
                  <h3 className="text-xl font-bold text-ink">For Solo Professionals</h3>
                </div>
                <p className="text-xs text-slate leading-relaxed">
                  Create your own card in 60 seconds, customize it to match your personal aesthetic, and share it anywhere. Free forever for 2 cards.
                </p>
                <ul className="space-y-2.5 text-xs text-ink border-t border-hairline pt-4">
                  {['Personal workspace with 2 free cards', 'Dynamic QR code & Apple/Google Wallet pass', 'NFC smart card encoding scripts', 'Direct 1-tap vCard address book download', 'Self-serve 1-click cancellation'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-brand-blue shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a href={startUrl} className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:underline">
                    Create personal card free
                  </a>
                </div>
              </div>

              <div className="bg-surface-soft rounded-[28px] border border-ink p-8 space-y-5 ring-1 ring-ink shadow-sm relative">
                <span className="absolute -top-3 right-8 px-3 py-0.5 rounded-full bg-ink text-white text-[10px] font-bold uppercase tracking-wider">
                  Company Choice
                </span>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-brand-blue">Centralized Admin</span>
                  <h3 className="text-xl font-bold text-ink">For Teams & Companies</h3>
                </div>
                <p className="text-xs text-slate leading-relaxed">
                  Manage employee cards, enforce brand guidelines, organize by department, and track organization-wide contact attribution.
                </p>
                <ul className="space-y-2.5 text-xs text-ink border-t border-hairline pt-4">
                  {['Centralized admin workspace console', 'Unlimited employee cards with locked assets', 'Department grouping and team directories', 'Consolidated lead CRM with CSV/CRM exports', 'Role-based access (Owner, Admin, Member)', 'Priority 24h engineering support'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-brand-blue shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a href="/contact-us" className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:underline">
                    Book enterprise team demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-ink text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-2px] leading-tight">
              Find the setup that fits your workflow.
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              Start free today, upgrade whenever you need team collaboration or analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={startUrl}
                className="px-9 py-4 rounded-full bg-brand-blue hover:bg-blue-pressed text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Create Your Card</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="/pricing"
                className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Compare Pricing Plans</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
