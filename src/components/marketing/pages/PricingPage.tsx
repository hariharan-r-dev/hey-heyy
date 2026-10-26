import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, ChevronDown, Building2, Zap } from 'lucide-react';
import { useAuth } from '../../../lib/auth';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { updatePageSEO } from '../../../utils/seo';
import { MarketingHeroVisual } from '../MarketingHeroVisual';

const plans = [
  {
    name: 'Free',
    tagline: 'For trying it out',
    monthlyPrice: 0,
    annualPrice: 0,
    cta: 'Get Started Free',
    ctaStyle: 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
    features: {
      'Digital business cards': '2 cards',
      'QR code sharing': true,
      'vCard downloads': true,
      'Curated native layouts': 'Core layouts',
      'Contact exchange': true,
      'NFC tag support': false,
      'Email signature cards': false,
      'Virtual backgrounds': false,
      'Custom branding': false,
      'Lead capture forms': false,
      'Scan & view analytics': false,
      'Team management': false,
      'Department grouping': false,
      'Contact CSV & vCard export': false,
      'Priority support': false,
    },
  },
  {
    name: 'Pro',
    tagline: 'For professionals',
    monthlyPrice: 7.99,
    annualPrice: 4.99,
    popular: true,
    cta: 'Start Pro Trial',
    ctaStyle: 'bg-ink text-white hover:bg-charcoal',
    features: {
      'Digital business cards': 'Unlimited',
      'QR code sharing': true,
      'vCard downloads': true,
      'Curated native layouts': 'All 20+ layouts',
      'Contact exchange': true,
      'NFC tag support': true,
      'Email signature cards': true,
      'Virtual backgrounds': true,
      'Custom branding': true,
      'Lead capture forms': true,
      'Scan & view analytics': true,
      'Team management': false,
      'Department grouping': false,
      'Contact CSV & vCard export': true,
      'Priority support': true,
    },
  },
  {
    name: 'Teams',
    tagline: 'For growing companies',
    monthlyPrice: 5.99,
    annualPrice: 3.99,
    perUser: true,
    cta: 'Start Team Trial',
    ctaStyle: 'bg-brand-blue text-white hover:bg-blue-pressed',
    features: {
      'Digital business cards': 'Unlimited',
      'QR code sharing': true,
      'vCard downloads': true,
      'Curated native layouts': 'All 20+ layouts',
      'Contact exchange': true,
      'NFC tag support': true,
      'Email signature cards': true,
      'Virtual backgrounds': true,
      'Custom branding': true,
      'Lead capture forms': true,
      'Scan & view analytics': true,
      'Team management': true,
      'Department grouping': true,
      'Contact CSV & vCard export': true,
      'Priority support': true,
    },
  },
];

const billingFaqs = [
  { q: 'Can I switch plans at any time?', a: 'Yes. Upgrade or downgrade at any time. Changes take effect immediately and we prorate the difference.' },
  { q: 'Is there a free trial for paid plans?', a: 'Yes. Pro and Teams both include a 14-day free trial. No credit card required to start.' },
  { q: 'What happens to my cards if I downgrade?', a: 'Your cards stay live. You keep all data but lose access to premium features. If you exceed the free card limit, you can choose which cards to keep active.' },
  { q: 'How does team billing work?', a: 'Teams pricing is per active member per month. You only pay for people who have cards. Add or remove members at any time.' },
  { q: 'Do you offer enterprise pricing?', a: 'Yes. We offer custom volume pricing, dedicated onboarding, SSO, and SLA-backed support for organizations with 50+ members.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards via Stripe. Enterprise customers can pay by invoice.' },
];

export const PricingPage: React.FC = () => {
  const { user } = useAuth();
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const startUrl = user ? '/admin' : '/signup';

  useEffect(() => {
    updatePageSEO({
      title: 'Pricing Plans — Zuntra Digital Cards',
      description: 'Simple, honest pricing. Start free forever with 2 active cards. Upgrade to Pro or Teams for unlimited cards, NFC writing, and team management.',
      canonicalPath: '/pricing',
    });
  }, []);

  const featureKeys = Object.keys(plans[0].features);

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
              <span>Simple, transparent pricing</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-tight">
              Start free.<br />Scale when ready.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Every plan includes unlimited sharing, QR codes, and contact exchange. Upgrade for analytics, NFC, team management, and more.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <span className={`text-sm font-medium ${!annual ? 'text-ink' : 'text-steel'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-brand-blue' : 'bg-hairline-strong'}`}
                aria-label="Toggle annual billing"
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? 'left-[26px]' : 'left-0.5'}`} />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-ink' : 'text-steel'}`}>
                Annual
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-success-bg text-success-text text-[10px] font-bold uppercase">Save 37%</span>
              </span>
            </div>
          </div>
          <MarketingHeroVisual kind="pricing" />
          </div>
        </section>

        {/* Plan Cards */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const price = annual ? plan.annualPrice : plan.monthlyPrice;
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl border p-7 flex flex-col ${
                      plan.popular
                        ? 'border-ink shadow-lg ring-1 ring-ink'
                        : 'border-hairline'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-ink text-white text-[10px] font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold">{plan.name}</h3>
                      <p className="text-xs text-slate mt-1">{plan.tagline}</p>
                    </div>
                    <div className="mb-6">
                      <span className="text-4xl font-semibold tracking-tight">
                        {price === 0 ? 'Free' : `$${price}`}
                      </span>
                      {price > 0 && (
                        <span className="text-sm text-slate ml-1">
                          /{plan.perUser ? 'user/' : ''}mo
                        </span>
                      )}
                      {annual && price > 0 && (
                        <p className="text-xs text-steel mt-1">Billed annually</p>
                      )}
                    </div>
                    <a
                      href={startUrl}
                      className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all inline-block cursor-pointer ${plan.ctaStyle}`}
                    >
                      {plan.cta}
                    </a>
                    <ul className="mt-6 pt-6 border-t border-hairline space-y-3 flex-1">
                      {Object.entries(plan.features).map(([feature, value]) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs">
                          {value === false ? (
                            <X size={14} className="text-hairline-strong shrink-0 mt-0.5" />
                          ) : (
                            <Check size={14} className="text-brand-blue shrink-0 mt-0.5" />
                          )}
                          <span className={value === false ? 'text-stone' : 'text-ink'}>
                            {feature}
                            {typeof value === 'string' && (
                              <span className="ml-1 text-brand-blue font-medium">({value})</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table (desktop) */}
        <section className="py-16 bg-surface-soft border-y border-hairline hidden lg:block">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
              Full feature comparison
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-3 pr-4 text-xs text-slate font-medium uppercase tracking-wider w-2/5">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className="py-3 text-center text-xs font-semibold uppercase tracking-wider">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((feature) => (
                  <tr key={feature} className="border-b border-hairline last:border-0">
                    <td className="py-3 pr-4 text-slate">{feature}</td>
                    {plans.map((plan) => {
                      const val = plan.features[feature as keyof typeof plan.features];
                      return (
                        <td key={plan.name} className="py-3 text-center">
                          {val === false ? (
                            <X size={14} className="inline text-hairline-strong" />
                          ) : val === true ? (
                            <Check size={14} className="inline text-brand-blue" />
                          ) : (
                            <span className="text-brand-blue font-medium text-xs">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-2xl bg-ink text-white p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider">
                  <Building2 size={13} />
                  <span>Enterprise</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Need cards for 50+ people?
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-lg">
                  Custom pricing, SSO, dedicated onboarding, admin controls, priority SLA support, and volume discounts for larger organizations.
                </p>
              </div>
              <a
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-white text-ink text-sm font-semibold hover:bg-surface transition-all inline-flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Book a Demo</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Billing FAQs */}
        <section className="py-16 lg:py-20 bg-surface-soft border-t border-hairline">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
              Billing questions
            </h2>
            <div className="space-y-3">
              {billingFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white border border-hairline rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-ink">{faq.q}</span>
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
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
