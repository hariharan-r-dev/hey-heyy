import React, { useEffect } from 'react';
import { ArrowRight, Heart, Globe, Sparkles, Shield, Users, Zap } from 'lucide-react';
import { useAuth } from '../../../lib/auth';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { updatePageSEO } from '../../../utils/seo';
import { MarketingHeroVisual } from '../MarketingHeroVisual';

const values = [
  {
    icon: Heart,
    title: 'Recipient-first',
    description: 'Every decision starts with the person on the other side of the card. They should never need an app, an account, or an explanation.',
  },
  {
    icon: Shield,
    title: 'Privacy by default',
    description: 'You choose what to share. Recipients choose whether to engage. No tracking pixels, no hidden data collection.',
  },
  {
    icon: Sparkles,
    title: 'Simple over clever',
    description: 'A digital card should be easier than a paper one, not harder. If it needs instructions, we redesign it.',
  },
  {
    icon: Globe,
    title: 'Works everywhere',
    description: 'Browser-first means it works on every phone, every OS, every meeting. No platform lock-in.',
  },
];

const milestones = [
  { year: '2024', event: 'Idea born — frustrated by clunky digital card apps that force recipients to download software.' },
  { year: '2025', event: 'First prototype — a card that opens in the browser and saves to contacts in one tap.' },
  { year: '2026', event: 'Public launch — Zuntra Cards ships with QR, NFC, email signatures, event passes, and team workspaces.' },
];

const stats = [
  { value: '14+', label: 'Card templates' },
  { value: '1-tap', label: 'Contact save' },
  { value: '0', label: 'Apps to download' },
  { value: '3', label: 'Sharing methods' },
];

export const AboutPage: React.FC = () => {
  const { user } = useAuth();
  const startUrl = user ? '/admin' : '/signup';

  useEffect(() => {
    updatePageSEO({
      title: 'About Zuntra — Built for Meaningful Connections',
      description: 'Zuntra was built on a simple premise: the best business card is the one people actually keep. Recipient-first, browser-first, privacy-by-default.',
      canonicalPath: '/about',
    });
  }, []);

  return (
    <div className="marketing min-h-screen bg-white text-ink flex flex-col font-sans">
      <MarketingNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="marketing-page-hero pt-20 pb-16 lg:pt-28 lg:pb-20 bg-surface-soft border-b border-hairline">
          <div className="marketing-hero-layout">
          <div className="marketing-hero-copy max-w-4xl mx-auto px-6 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-hairline text-xs font-medium text-slate shadow-2xs">
              <Zap size={13} className="text-brand-blue" />
              <span>About Zuntra</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-tight">
              The card people<br />actually keep.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Zuntra builds digital business cards designed around the person receiving them. No app downloads, no stale details, no friction.
            </p>
          </div>
          <MarketingHeroVisual kind="about" />
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue font-bold">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  Make professional introductions feel as natural as saying hello.
                </h2>
                <p className="text-sm text-slate leading-relaxed">
                  Paper cards get lost. Most digital card apps ask the person you just met to download something. That's not a connection — it's a hurdle.
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  Zuntra takes a different approach: your card opens in the browser they already have. One tap saves your details to their phone. That's it. The technology disappears, and the connection stays.
                </p>
              </div>
              <div className="bg-surface-soft rounded-2xl border border-hairline p-10 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-ink text-white flex items-center justify-center font-bold text-3xl shadow-lg">
                  Z
                </div>
                <p className="text-xl font-semibold tracking-tight">Zuntra Cards</p>
                <p className="text-xs text-slate">Digital identities made for the moment people meet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-hairline bg-white">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-brand-blue">{s.value}</p>
                <p className="text-xs text-slate mt-1 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 bg-surface-soft">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12 space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue font-bold">What We Believe</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Principles, not features.
              </h2>
              <p className="text-sm text-slate max-w-xl mx-auto">
                Features ship when these principles demand them, not the other way around.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-hairline p-7 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                    <v.icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12 space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue font-bold">Our Journey</p>
              <h2 className="text-3xl font-semibold tracking-tight">How we got here.</h2>
            </div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-hairline mt-2" />}
                  </div>
                  <p className="text-sm text-slate leading-relaxed pt-2.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Note */}
        <section className="py-16 lg:py-20 bg-surface-soft border-t border-hairline">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
            <Users size={28} className="mx-auto text-brand-blue" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              A small team with a clear focus.
            </h2>
            <p className="text-sm text-slate leading-relaxed max-w-xl mx-auto">
              Zuntra is built by a small, product-focused team. We ship fast, listen closely, and believe every feature should earn its place. If you want to help us build the future of professional networking, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="/careers"
                className="px-7 py-3 rounded-full bg-ink hover:bg-charcoal text-white text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>See Open Roles</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-white border border-ink hover:bg-surface text-ink text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-ink text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-2px] leading-tight">
              Ready to upgrade your introduction?
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              Create your first digital card in under two minutes. Free forever for 2 cards.
            </p>
            <div className="pt-2">
              <a
                href={startUrl}
                className="px-9 py-4 rounded-full bg-brand-blue hover:bg-blue-pressed text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Create Your Card</span>
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
