import React from 'react';
import { ArrowUpRight, Check, Clock3, Mail, QrCode, ShieldCheck, Users } from 'lucide-react';

type HeroVisualKind = 'product' | 'solutions' | 'pricing' | 'about' | 'blog' | 'contact' | 'topic';

interface MarketingHeroVisualProps {
  kind: HeroVisualKind;
  title?: string;
  items?: string[];
  badge?: string;
  note?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export const MarketingHeroVisual: React.FC<MarketingHeroVisualProps> = ({ kind, title, items = [], badge, note, icon: TopicIcon = QrCode }) => {
  if (kind === 'product') {
    return (
      <div className="marketing-hero-visual hero-visual-product-modern" aria-label="Zuntra complete product ecosystem preview">
        <div className="relative w-full max-w-[480px] mx-auto py-4">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-blue-500/20 via-lime-400/10 to-transparent blur-3xl pointer-events-none" />

          {/* Main Floating Phone Device */}
          <div className="relative z-10 w-[300px] sm:w-[320px] mx-auto rounded-[38px] border-4 border-[#0F172A] bg-white shadow-2xl overflow-hidden p-4 space-y-3.5">
            {/* Dynamic Island */}
            <div className="w-16 h-3.5 bg-[#0F172A] rounded-full mx-auto" />

            {/* Profile Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                <img src="/marketing/assets/elena.jpg" alt="Elena Rostova" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-slate-900 truncate">Elena Rostova</p>
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                </div>
                <p className="text-[11px] text-blue-600 font-semibold truncate">VP Product · Horizon Tech</p>
              </div>
            </div>

            {/* 1-Tap Save Button */}
            <div className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
              <Check size={14} className="text-[#D6F279]" />
              <span>Save Contact (vCard)</span>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold text-slate-600">
              <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">Call</span>
              <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">Email</span>
              <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">LinkedIn</span>
              <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">Share</span>
            </div>
          </div>

          {/* Overlapping Matte Black NFC Card Badge (Left) */}
          <div className="absolute -left-4 sm:-left-8 top-16 z-20 w-[180px] sm:w-[200px] p-3.5 rounded-2xl bg-[#0F172A] text-white shadow-xl border border-slate-700 -rotate-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold">NFC Card</span>
              <span className="text-xs text-[#D6F279] font-bold">)))</span>
            </div>
            <p className="text-xs font-bold truncate">Alex Morgan</p>
            <p className="text-[10px] text-slate-300">Tap to share</p>
          </div>

          {/* Overlapping Dynamic QR Badge (Right) */}
          <div className="absolute -right-4 sm:-right-8 bottom-12 z-20 p-3.5 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-200 rotate-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
              <QrCode size={32} className="text-[#0F172A]" />
            </div>
            <div className="text-left space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-blue-600 font-bold block">Dynamic QR</span>
              <p className="text-xs font-bold leading-tight">Instant Scan</p>
              <p className="text-[10px] text-slate-500">Camera-Ready</p>
            </div>
          </div>

          {/* Floating Telemetry Pill (Bottom Center) */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-[11px] font-bold shadow-lg flex items-center gap-2 border border-slate-700 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Real-Time Scans & 1-Tap Saves</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'solutions') {
    return (
      <div className="marketing-hero-visual hero-visual-solutions-modern" aria-label="Role-based solutions architecture preview">
        <div className="relative w-full max-w-[500px] mx-auto py-4">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-blue-600/20 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

          {/* Central Workspace Card */}
          <div className="relative z-10 w-full rounded-[32px] border-2 border-slate-200 bg-white shadow-2xl overflow-hidden p-5 space-y-4">
            {/* Top Workspace Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-bold text-slate-900">Meridian Workspace</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                24 Active Passes
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Brand Adoption</span>
                <p className="text-xl font-black text-slate-900">96.4%</p>
                <span className="text-[10px] text-emerald-600 font-bold">100% Locked Palette</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Contacts Captured</span>
                <p className="text-xl font-black text-blue-600">1,420</p>
                <span className="text-[10px] text-slate-500 font-semibold">Synced to CRM</span>
              </div>
            </div>

            {/* Team Roster Sample */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Active Roster</span>
                <span>Department</span>
              </div>
              {[
                { name: 'Elena Brooks', role: 'Head of Product', dept: 'Leadership', img: '/marketing/assets/elena-b.jpg' },
                { name: 'David Chen', role: 'VP Engineering', dept: 'Engineering', img: '/marketing/assets/david.jpg' },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">{m.name}</p>
                      <p className="text-[10px] text-slate-500">{m.role}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px]">
                    {m.dept}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Left Pill: Solo Pro Card (Sophie Laurent) */}
          <div className="absolute -left-4 sm:-left-8 top-12 z-20 p-3 rounded-2xl bg-[#0F172A] text-white shadow-xl border border-slate-700 -rotate-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-400 shrink-0">
              <img src="/marketing/assets/sophie.jpg" alt="Sophie Laurent" className="w-full h-full object-cover" />
            </div>
            <div className="text-left space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-[#D6F279] font-bold block">Solo Pro</span>
              <p className="text-xs font-bold leading-tight">Sophie Laurent</p>
              <p className="text-[10px] text-slate-400">1-Tap Address Book</p>
            </div>
          </div>

          {/* Floating Right Pill: Field Sales Live Lead Alert */}
          <div className="absolute -right-4 sm:-right-8 bottom-12 z-20 p-3 rounded-2xl bg-[#0F172A] text-white shadow-xl border border-slate-700 rotate-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div className="text-left space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block">New CRM Lead</span>
              <p className="text-xs font-bold leading-tight">Elena Rostova</p>
              <p className="text-[10px] text-slate-400">Synced to Salesforce</p>
            </div>
          </div>

          {/* Floating Bottom Pill: Governance Guarantee */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white text-slate-900 text-[11px] font-bold shadow-lg flex items-center gap-2 border border-slate-200 whitespace-nowrap">
            <Users size={13} className="text-blue-600" />
            <span>One brand. Every introduction. Zero app friction.</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'pricing') {
    return (
      <div className="marketing-hero-visual hero-visual-pricing" aria-label="Compact comparison of Zuntra pricing plans">
        <p>Choose your fit</p>
        <div className="hero-price-row"><span>Free</span><strong>$0</strong><small>2 cards</small></div>
        <div className="hero-price-row is-featured"><span>Pro</span><strong>$4.99</strong><small>Unlimited</small></div>
        <div className="hero-price-row"><span>Teams</span><strong>$3.99</strong><small>per member</small></div>
        <div className="hero-price-note"><Check size={14} /> No credit card to start</div>
      </div>
    );
  }

  if (kind === 'about') {
    return (
      <div className="marketing-hero-visual hero-visual-about" aria-label="Zuntra founding principle">
        <span className="hero-about-year">2024—now</span>
        <blockquote>“Design for the person receiving the card.”</blockquote>
        <div><span>01</span><p>Open in any browser</p></div>
        <div><span>02</span><p>Save in one tap</p></div>
        <div><span>03</span><p>Keep details current</p></div>
      </div>
    );
  }

  if (kind === 'blog') {
    return (
      <div className="marketing-hero-visual hero-visual-blog" aria-label="Featured article">
        <div className="hero-article-cover"><QrCode /><span>Field notes № 18</span></div>
        <small>Featured · 5 min read</small>
        <strong>Why great introductions should end in a saved contact.</strong>
        <a href="#latest-stories">Read the latest <ArrowUpRight size={15} /></a>
      </div>
    );
  }

  if (kind === 'contact') {
    return (
      <div className="marketing-hero-visual hero-visual-contact" aria-label="Ways to contact Zuntra">
        <div><Mail size={18} /><p><small>Sales and partnerships</small><strong>hello@zuntra.cards</strong></p></div>
        <div><Clock3 size={18} /><p><small>Typical response</small><strong>Within one business day</strong></p></div>
        <div><ShieldCheck size={18} /><p><small>Enterprise demos</small><strong>Security and rollout planning</strong></p></div>
        <a href="mailto:hello@zuntra.cards">Start a conversation <ArrowUpRight size={15} /></a>
      </div>
    );
  }

  return (
    <div className="marketing-hero-visual hero-visual-topic" aria-label={`${title ?? 'Zuntra'} capabilities`}>
      <div className="hero-topic-heading"><span>{badge ?? 'Built into Zuntra'}</span><TopicIcon size={24} /></div>
      <strong>{title}</strong>
      <div className="hero-topic-list">
        {items.slice(0, 3).map((item, index) => (
          <div key={item}><span>0{index + 1}</span><p>{item}</p><Check size={15} /></div>
        ))}
      </div>
      <small>{note ?? 'Focused tools for this offer'}</small>
    </div>
  );
};
