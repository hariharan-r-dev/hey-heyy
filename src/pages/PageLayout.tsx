import type { FC, ReactNode } from "react";

export interface PageLayoutProps {
  category: "Product" | "Solutions" | "Platform" | "Resources" | "Company";
  title: string;
  badge?: string;
  description: string;
  stats?: { label: string; value: string }[];
  features?: { title: string; description: string; tag?: string }[];
  highlights?: { title: string; items: string[] }[];
  sections?: { heading: string; body: string | string[] }[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  children?: ReactNode;
  onBack?: () => void;
  onNavigate?: (slug: string) => void;
}

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { name: "Product Overview", slug: "product-overview" },
      { name: "Digital Business Cards", slug: "digital-business-cards" },
      { name: "QR Code Cards", slug: "qr-code-cards" },
      { name: "NFC Smart Cards", slug: "nfc-smart-cards" },
      { name: "Email Signatures", slug: "email-signatures" },
      { name: "Virtual Backgrounds", slug: "virtual-backgrounds" },
      { name: "Digital Wallet Cards", slug: "digital-wallet-cards" },
      { name: "Contact Management", slug: "contact-management" },
      { name: "Lead Capture CRM", slug: "lead-capture-crm" },
      { name: "Scan & View Analytics", slug: "scan-analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Solutions Overview", slug: "solutions-overview" },
      { name: "For Individuals", slug: "for-individuals" },
      { name: "For Freelancers", slug: "for-freelancers" },
      { name: "For Small Business", slug: "for-small-business" },
      { name: "For Teams", slug: "for-teams" },
      { name: "For Enterprise", slug: "for-enterprise" },
      { name: "For Sales Teams", slug: "for-sales-teams" },
      { name: "Recruiters & Networking", slug: "recruiters-networking" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "How It Works", slug: "how-it-works" },
      { name: "Pricing Plans", slug: "pricing-plans" },
      { name: "Card Template Studio", slug: "card-template-studio" },
      { name: "Workspace Admin", slug: "workspace-admin" },
      { name: "Sign In to Dashboard", slug: "sign-in", isExternal: true, href: "http://localhost:5180/login" },
      { name: "Create Free Account", slug: "create-account", isExternal: true, href: "http://localhost:5180/signup" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Resources Hub", slug: "resources-hub" },
      { name: "Blog & Stories", slug: "blog-stories" },
      { name: "Guides & Tutorials", slug: "guides-tutorials" },
      { name: "Help Center", slug: "help-center" },
      { name: "Frequently Asked Questions", slug: "faq" },
      { name: "Contact Support", slug: "contact-support" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Company Overview", slug: "company-overview" },
      { name: "About Zuntra", slug: "about-zuntra" },
      { name: "Book a Demo", slug: "book-demo" },
      { name: "Careers", slug: "careers" },
      { name: "Privacy Policy", slug: "privacy-policy" },
      { name: "Terms of Service", slug: "terms-of-service" },
      { name: "Security Architecture", slug: "security-architecture" },
    ],
  },
];

export const PageLayout: FC<PageLayoutProps> = ({
  category,
  title,
  badge,
  description,
  stats,
  features,
  highlights,
  sections,
  ctaPrimary = { label: "Create Free Card", href: "http://localhost:5180/signup" },
  ctaSecondary = { label: "Explore Platform", href: "#" },
  children,
  onBack,
  onNavigate,
}) => {
  const handleNavigate = (targetSlug: string) => {
    if (onNavigate) {
      onNavigate(targetSlug);
    } else {
      window.location.hash = `#page=${targetSlug}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = "";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <div className="min-h-screen bg-[#0d0f15] text-[#f2f4f8] font-sans selection:bg-[#7952ff] selection:text-white flex flex-col justify-between">
      <div>
        {/* Top Header / Breadcrumbs Bar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#12141b]/95 border-b border-[#232733] px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleHomeClick}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#92969f] hover:text-white bg-[#1a1d26] hover:bg-[#252a38] border border-[#2b3040] rounded-full transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#6e7382]">
                <button
                  onClick={handleHomeClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <button
                  onClick={() => handleNavigate(`${category.toLowerCase()}-overview`)}
                  className="text-[#a1a6b6] hover:text-white transition-colors cursor-pointer"
                >
                  {category}
                </button>
                <span>/</span>
                <span className="text-[#8ef087] font-medium">{title}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="http://localhost:5180/login"
                className="text-xs text-[#92969f] hover:text-white transition-colors"
              >
                Sign In
              </a>
              <a
                href="http://localhost:5180/signup"
                className="px-3.5 py-1.5 text-xs font-semibold bg-[#7952ff] hover:bg-[#6840f5] text-white rounded-full transition-all shadow-md"
              >
                Launch App
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 px-6 border-b border-[#1f2330]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(121,82,255,0.18),rgba(255,255,255,0))]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#1e2333] border border-[#30374e] text-[#b4b9cc] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ef087]" />
              {badge || `${category} Feature`}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-[#9ea3b5] max-w-2xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={ctaPrimary.href}
                className="px-6 py-3 rounded-full bg-[#8ef087] hover:bg-[#7ce275] text-[#0d0f15] font-semibold text-sm transition-all shadow-lg hover:shadow-[0_0_20px_rgba(142,240,135,0.3)]"
              >
                {ctaPrimary.label}
              </a>
              <a
                href={ctaSecondary.href}
                className="px-6 py-3 rounded-full bg-[#1b1f2b] hover:bg-[#252b3d] text-white border border-[#2c3247] font-semibold text-sm transition-all"
              >
                {ctaSecondary.label}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Counter Bar (Optional) */}
        {stats && stats.length > 0 && (
          <section className="border-b border-[#1f2330] bg-[#10131b] py-8 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#151823] border border-[#222736]">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-[#7e8496] uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Body Grid */}
        <main className="max-w-5xl mx-auto px-6 py-16">
          {/* Feature Cards Grid */}
          {features && features.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-2">Capabilities &amp; Highlights</h2>
              <p className="text-sm text-[#878d9e] mb-8">Engineered for frictionless digital sharing and brand consistency.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#141722] border border-[#232838] hover:border-[#384059] transition-all flex flex-col justify-between"
                  >
                    <div>
                      {f.tag && (
                        <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider text-[#8ef087] bg-[#8ef087]/10 rounded mb-3">
                          {f.tag}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                      <p className="text-sm text-[#959bad] leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights List (2 column) */}
          {highlights && highlights.length > 0 && (
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#131620] border border-[#212635]">
                  <h3 className="text-xl font-bold text-white mb-4">{h.title}</h3>
                  <ul className="space-y-3">
                    {h.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#9ea3b5]">
                        <svg className="w-4 h-4 text-[#8ef087] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Sections / Legal / Technical Text */}
          {sections && sections.length > 0 && (
            <div className="space-y-10 mb-16">
              {sections.map((sec, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#12151f] border border-[#202535]">
                  <h3 className="text-xl font-bold text-white mb-4">{sec.heading}</h3>
                  {Array.isArray(sec.body) ? (
                    <div className="space-y-3">
                      {sec.body.map((p, pIdx) => (
                        <p key={pIdx} className="text-sm sm:text-base text-[#989fb0] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-[#989fb0] leading-relaxed whitespace-pre-line">
                      {sec.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Optional Custom Children */}
          {children}

          {/* Bottom CTA Block */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1b1f2e] via-[#151926] to-[#0e111a] border border-[#2f364d] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Step Into the Next Generation of Identity
              </h2>
              <p className="text-sm sm:text-base text-[#9aa0b3] max-w-xl mx-auto mb-8">
                Join thousands of professionals, high-performing sales teams, and forward-thinking enterprises using Zuntra Cards.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="http://localhost:5180/signup"
                  className="px-8 py-3.5 rounded-full bg-[#8ef087] hover:bg-[#7ce275] text-[#0d0f15] font-bold text-sm transition-all"
                >
                  Create Your Card Free
                </a>
                <button
                  onClick={handleHomeClick}
                  className="px-6 py-3.5 rounded-full bg-[#202536] hover:bg-[#2b3248] text-white text-sm font-semibold transition-all cursor-pointer"
                >
                  Return to Main Site
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Complete Connected 5-Column Footer */}
      <footer className="mt-20 pt-16 pb-12 border-t border-[#232733] bg-[#12141b] text-[#f2f4f8] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const isCurrent = link.slug === currentSlug;
                    return (
                      <li key={link.name}>
                        <a
                          href={link.isExternal ? link.href : `#page=${link.slug}`}
                          target={link.isExternal ? "_blank" : undefined}
                          rel={link.isExternal ? "noreferrer" : undefined}
                          onClick={(e) => {
                            if (!link.isExternal) {
                              e.preventDefault();
                              handleNavigate(link.slug);
                            }
                          }}
                          className={`text-sm block transition-colors ${
                            isCurrent
                              ? "text-[#8ef087] font-semibold"
                              : "text-[#92969f] hover:text-white"
                          }`}
                        >
                          {isCurrent && <span className="mr-1.5 text-[#8ef087]">•</span>}
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#232733] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858993]">
            <div className="flex items-center gap-3">
              <span className="font-bold text-white tracking-wider text-sm">ZUNTRA CARDS</span>
              <span className="text-[#4b5162]">|</span>
              <span>© 2026 Zuntra Cards. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#page=privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("privacy-policy");
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <span>•</span>
              <a
                href="#page=terms-of-service"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("terms-of-service");
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms
              </a>
              <span>•</span>
              <a
                href="#page=security-architecture"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("security-architecture");
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
