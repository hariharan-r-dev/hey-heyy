import React, { useEffect } from 'react';
import {
  ArrowRight,
  CreditCard,
  QrCode,
  Wifi,
  Mail,
  Palette,
  Users,
  BarChart3,
  Layers,
  Zap,
  Shield,
  ArrowUpRight,
  Video
} from 'lucide-react';
import { useAuth } from '../../../lib/auth';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { InteractiveCardShowcase } from '../InteractiveCardShowcase';
import { MarketingHeroVisual } from '../MarketingHeroVisual';
import { updatePageSEO } from '../../../utils/seo';

const features = [
  {
    category: 'Create & Share',
    items: [
      { icon: CreditCard, title: 'Digital Business Cards', description: 'Beautiful, responsive cards that open in any browser. No app required for recipients.', href: '/digital-business-cards' },
      { icon: QrCode, title: 'QR Code Cards', description: 'Dynamic QR codes that update when your card does. Print them anywhere.', href: '/qr-business-cards' },
      { icon: Wifi, title: 'NFC Smart Cards', description: 'Tap-to-share with NFC-enabled physical cards and tags.', href: '/nfc-business-cards' },
      { icon: Mail, title: 'Email Signatures', description: 'Branded email signatures with live links to your digital card.', href: '/email-signatures' },
      { icon: Video, title: 'Virtual Backgrounds', description: 'High-res Zoom, Teams, and Google Meet backgrounds with embedded QR code.', href: '/virtual-backgrounds' },
      { icon: Palette, title: 'Design Studio & Templates', description: '20+ crafted visual layouts that adapt automatically to your brand colors and typography.', href: '/studio' },
    ],
  },
  {
    category: 'Connect & Manage',
    items: [
      { icon: Users, title: 'Contact Management', description: 'Organize every connection you make. Export contacts, add notes, and follow up.', href: '/contact-management' },
      { icon: Layers, title: 'Lead Capture', description: 'Two-way contact exchange turns introductions into actionable leads.', href: '/lead-capture' },
      { icon: BarChart3, title: 'Scan & View Analytics', description: 'See who viewed your card, when, and how they interacted with it.', href: '/analytics' },
    ],
  },
];

const stats = [
  { value: '1-tap', label: 'contact saves' },
  { value: '0', label: 'apps to download' },
  { value: '14+', label: 'card templates' },
  { value: '100%', label: 'always up to date' },
];

export const ProductPage: React.FC = () => {
  const { user } = useAuth();
  const startUrl = user ? '/admin' : '/signup';

  useEffect(() => {
    updatePageSEO({
      title: 'Products & Features — Zuntra Digital Cards',
      description: 'Explore Zuntra’s full suite: native responsive card layouts, dynamic QR codes, NFC tap cards, 2-way lead capture, email signatures, and analytics.',
      canonicalPath: '/product',
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
              <Zap size={13} className="text-brand-blue" />
              <span>Complete Product Suite</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-tight">
              Everything you need<br />to connect seamlessly.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Digital cards, high-contrast QR codes, NFC tap hardware, two-way lead capture, email signatures, virtual backgrounds, and engagement analytics — all in one unified workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={startUrl}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink hover:bg-charcoal text-white text-sm font-semibold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create Your Free Card</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="/how-it-works"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-ink hover:bg-surface text-ink text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See How It Works</span>
              </a>
            </div>
          </div>
          <MarketingHeroVisual kind="product" />
          </div>
        </section>

        {/* Live Interactive Product Demo Showcase */}
        <section className="py-16 lg:py-24 border-b border-hairline bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <InteractiveCardShowcase initialTab="card" />
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-b border-hairline bg-surface-soft">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-blue">{s.value}</p>
                <p className="text-xs text-slate mt-1 uppercase tracking-wider font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Categories */}
        {features.map((group) => (
          <section key={group.category} className="py-16 lg:py-24 border-b border-hairline last:border-0 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  {group.category}
                </h2>
                <span className="text-xs font-mono uppercase text-steel font-bold tracking-wider">
                  {group.items.length} Modules
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group border border-hairline rounded-[24px] p-7 hover:border-ink hover:shadow-md transition-all flex flex-col justify-between gap-4 bg-surface-soft hover:bg-white"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-hairline flex items-center justify-center shadow-xs group-hover:bg-ink group-hover:text-white transition-colors">
                        <item.icon size={22} className="text-brand-blue group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-base font-bold text-ink flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowUpRight size={15} className="text-steel opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-xs text-slate leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn more
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Platform Architecture Highlights */}
        <section className="py-20 lg:py-24 bg-surface-soft border-b border-hairline">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Platform Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Engineered for trust and speed.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[24px] bg-white border border-hairline shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Shield size={20} />
                </div>
                <h3 className="text-lg font-bold text-ink">Privacy-first</h3>
                <p className="text-xs text-slate leading-relaxed">
                  You control exactly which channels appear on your public card. Recipients never need to create an account, log in, or install an app.
                </p>
              </div>
              <div className="p-8 rounded-[24px] bg-white border border-hairline shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-ink">Always current</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Update your card once and every shared link, QR code, NFC tag, and email signature immediately routes to your latest details.
                </p>
              </div>
              <div className="p-8 rounded-[24px] bg-white border border-hairline shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-ink">Built for teams</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Manage employee cards, enforce brand consistency, organize by department, and track engagement across the organization from one console.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-ink text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-2px] leading-tight">
              Ready to upgrade your professional cards?
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              Create your first digital card in under two minutes. Free forever for 2 cards.
            </p>
            <div className="pt-2">
              <a
                href={startUrl}
                className="px-9 py-4 rounded-full bg-brand-blue hover:bg-blue-pressed text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
