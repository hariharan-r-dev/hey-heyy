import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MessageSquare, Building2, Clock, MapPin, Send } from 'lucide-react';
import { useAuth } from '../../../lib/auth';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { updatePageSEO } from '../../../utils/seo';
import { MarketingHeroVisual } from '../MarketingHeroVisual';

const contactReasons = [
  { icon: Building2, title: 'Enterprise & Sales', description: 'Custom pricing, SSO, and dedicated onboarding for 50+ seats.', cta: 'Book a demo', href: 'mailto:sales@zuntra.com' },
  { icon: MessageSquare, title: 'Support', description: 'Technical questions, account issues, or billing help.', cta: 'Get help', href: '/help' },
  { icon: Mail, title: 'Partnerships', description: 'Integration partners, affiliates, and co-marketing opportunities.', cta: 'Email us', href: 'mailto:partners@zuntra.com' },
];

export const ContactPage: React.FC = () => {
  const { user } = useAuth();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: user?.email || '', company: '', subject: 'general', message: '' });

  useEffect(() => {
    updatePageSEO({
      title: 'Contact Us — Zuntra Digital Cards',
      description: 'Get in touch with the Zuntra team for enterprise inquiries, sales demos, account support, or partnership opportunities.',
      canonicalPath: '/contact-us',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulated submit
    setTimeout(() => setFormState('sent'), 1200);
  };

  return (
    <div className="marketing min-h-screen bg-white text-ink flex flex-col font-sans">
      <MarketingNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="marketing-page-hero pt-20 pb-12 lg:pt-28 lg:pb-16 bg-surface-soft border-b border-hairline">
          <div className="marketing-hero-layout">
          <div className="marketing-hero-copy max-w-4xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-hairline text-xs font-medium text-slate shadow-2xs">
              <Mail size={13} className="text-brand-blue" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-tight">
              Let's talk.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Whether you're exploring Zuntra for your team or need help with your account, we're here.
            </p>
          </div>
          <MarketingHeroVisual kind="contact" />
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 lg:py-16 border-b border-hairline">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {contactReasons.map((r) => (
                <div key={r.title} className="border border-hairline rounded-2xl p-6 space-y-4 hover:border-ink transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                    <r.icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{r.description}</p>
                  <a href={r.href} className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1">
                    {r.cta} <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Send us a message</h2>
                <p className="text-sm text-slate mb-8">We typically respond within one business day.</p>

                {formState === 'sent' ? (
                  <div role="status" aria-live="polite" className="rounded-2xl border border-hairline bg-success-bg p-10 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-hairline mx-auto flex items-center justify-center">
                      <Send size={20} className="text-success-text" />
                    </div>
                    <h3 className="text-lg font-semibold text-success-text">Message sent</h3>
                    <p className="text-xs text-slate">Thanks for reaching out. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-full-name" className="text-xs font-medium text-slate">Full Name *</label>
                        <input
                          id="contact-full-name"
                          name="name"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl border border-hairline-strong text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-work-email" className="text-xs font-medium text-slate">Work Email *</label>
                        <input
                          id="contact-work-email"
                          name="email"
                          autoComplete="email"
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-hairline-strong text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-company" className="text-xs font-medium text-slate">Company</label>
                        <input
                          id="contact-company"
                          name="organization"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 rounded-xl border border-hairline-strong text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-subject" className="text-xs font-medium text-slate">Subject *</label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-hairline-strong text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="enterprise">Enterprise & Demo</option>
                          <option value="support">Account Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="press">Press & Media</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-medium text-slate">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can help…"
                        className="w-full px-4 py-3 rounded-xl border border-hairline-strong text-sm bg-white resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="px-8 py-3.5 rounded-full bg-ink hover:bg-charcoal text-white text-sm font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formState === 'sending' ? 'Sending…' : 'Send Message'}
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>

              {/* Info Sidebar */}
              <div className="lg:col-span-2 space-y-8 lg:pt-12">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Clock size={15} className="text-brand-blue" />
                    Response time
                  </h3>
                  <p className="text-xs text-slate leading-relaxed">
                    We respond to most inquiries within 24 hours on business days. Enterprise and demo requests are prioritized.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <MapPin size={15} className="text-brand-blue" />
                    Where we are
                  </h3>
                  <p className="text-xs text-slate leading-relaxed">
                    Zuntra is a remote-first company. Our team works across time zones to ship a product that works everywhere.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Mail size={15} className="text-brand-blue" />
                    Direct email
                  </h3>
                  <p className="text-xs text-slate leading-relaxed">
                    Prefer email? Reach us at <a href="mailto:hello@zuntra.com" className="text-brand-blue font-medium hover:underline">hello@zuntra.com</a>
                  </p>
                </div>

                <div className="rounded-2xl bg-surface-soft border border-hairline p-6 space-y-3">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue font-bold">Enterprise?</p>
                  <p className="text-sm font-semibold">Book a personalized demo</p>
                  <p className="text-xs text-slate leading-relaxed">
                    See how Zuntra works for teams of 50+, with SSO, admin controls, and volume pricing.
                  </p>
                  <a
                    href="mailto:sales@zuntra.com"
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    Schedule a call <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
