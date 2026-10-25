import React, { useState, useEffect } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
import {
  Accordion,
  FactStrip,
  PillButton,
  SectionHeading,
  StackedBadge,
  StepGrid,
  type FactItem,
  type StepItem,
  type AccordionItem,
} from "@/design-system";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";
import { Check, X, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

const A = "/assets";

const facts: FactItem[] = [
  { title: "No Credit Card", description: "Get started completely free without payment details" },
  { title: "Cancel Anytime", description: "Flexible monthly or annual plans with zero cancellation fees" },
  { title: "Free Forever", description: "Starter tier never expires for individual networking" },
];

const featureComparisonRows = [
  {
    feature: "Digital Business Cards",
    starter: "1 Card",
    pro: "Up to 25 Cards",
    enterprise: "Unlimited Cards",
  },
  {
    feature: "Dynamic QR Code Sharing",
    starter: "Standard QR",
    pro: "Custom Branded QR",
    enterprise: "High-Contrast Studio QR",
  },
  {
    feature: "vCard (.vcf) Instant Save",
    starter: "Included",
    pro: "Included",
    enterprise: "Included",
  },
  {
    feature: "Two-Way Reciprocal Lead Capture",
    starter: "Basic Form",
    pro: "Full CRM Pipeline",
    enterprise: "Full CRM + Webhooks",
  },
  {
    feature: "NFC Smart Hardware Writing",
    starter: "—",
    pro: "Included",
    enterprise: "Included",
  },
  {
    feature: "Email Signature Generator",
    starter: "—",
    pro: "Included",
    enterprise: "Included",
  },
  {
    feature: "Virtual Meeting Backgrounds",
    starter: "—",
    pro: "Included",
    enterprise: "Included",
  },
  {
    feature: "Curated Layouts & Themes",
    starter: "Core Layouts",
    pro: "All 20+ Layouts",
    enterprise: "Custom Bespoke Layouts",
  },
  {
    feature: "Summit Pass Event Registration",
    starter: "—",
    pro: "Included",
    enterprise: "Unlimited Events + Scanner",
  },
  {
    feature: "Admin Management Console",
    starter: "—",
    pro: "Included",
    enterprise: "Multi-Department + SCIM",
  },
  {
    feature: "CSV & Contact Data Export",
    starter: "—",
    pro: "Included",
    enterprise: "Real-Time Telemetry API",
  },
  {
    feature: "Support & SLA",
    starter: "Community Help",
    pro: "Priority Email",
    enterprise: "24/7 Dedicated Manager",
  },
];

const questions: AccordionItem[] = [
  [
    "Can I use Zuntra for free indefinitely?",
    "Yes. The Starter tier is free forever and includes 1 full digital business card, dynamic QR code sharing, and 1-tap vCard export. There is no trial expiration on free cards.",
  ],
  [
    "How does the Team & Pro 14-day free trial work?",
    "You can test every feature of Team & Pro—including multi-member cards, two-way lead capture, and event registrations—for 14 days without charge. You can cancel or switch plans at any time.",
  ],
  [
    "Can we upgrade or add more seats as our team grows?",
    "Yes. You can add new member seats directly from your workspace admin dashboard. Pricing adjusts pro-rata based on your billing cycle.",
  ],
  [
    "What payment methods do you accept?",
    "We accept all major credit and debit cards (Visa, Mastercard, American Express) through secure Stripe checkout, with invoice billing available for Enterprise contracts.",
  ],
];

const footerNav = [
  {
    title: "Product",
    links: [
      { label: "Product Overview", href: "/product" },
      { label: "Digital Business Cards", href: "/digital-business-cards" },
      { label: "QR Code Cards", href: "/qr-business-cards" },
      { label: "NFC Smart Cards", href: "/nfc-business-cards" },
      { label: "Email Signatures", href: "/email-signatures" },
      { label: "Virtual Backgrounds", href: "/virtual-backgrounds" },
      { label: "Digital Wallet Cards", href: "/digital-wallet" },
      { label: "Contact Management", href: "/contact-management" },
      { label: "Lead Capture CRM", href: "/lead-capture" },
      { label: "Scan & View Analytics", href: "/analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions Overview", href: "/solutions", highlight: true },
      { label: "For Individuals", href: "/individuals" },
      { label: "For Freelancers", href: "/freelancers" },
      { label: "For Small Business", href: "/small-business" },
      { label: "For Teams", href: "/teams" },
      { label: "For Enterprise", href: "/enterprise" },
      { label: "For Sales Teams", href: "/sales-teams" },
      { label: "Recruiters & Networking", href: "/recruiters-and-networking" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Card Template Studio", href: getAppUrl("/studio"), isExternal: true },
      { label: "Workspace Admin", href: getAppUrl("/admin"), isExternal: true },
      { label: "Sign In to Dashboard", href: getAppUrl("/login"), isExternal: true },
      { label: "Create Free Account", href: getAppUrl("/signup"), isExternal: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", href: "/faq" },
      { label: "Blog & Stories", href: "/blog" },
      { label: "Guides & Tutorials", href: "/how-it-works" },
      { label: "Help Center", href: "/faq" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company Overview", href: "/about" },
      { label: "About Zuntra", href: "/about" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security Architecture", href: "/security" },
    ],
  },
];

export const PricingPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [annualBilling, setAnnualBilling] = useState(true);

  useEffect(() => {
    updatePageSEO({
      title: "Pricing Plans & Tiers — Zuntra",
      description:
        "Transparent pricing for individuals, high-growth teams, and enterprise summits. Start free forever or unlock team governance.",
      canonicalPath: "/pricing",
    });
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      badge: "Free Forever",
      price: "$0",
      period: "forever",
      description: "Perfect for individual professionals looking to upgrade from paper cards.",
      features: [
        "1 Digital Business Card",
        "Dynamic QR Code & Share Link",
        "One-Click vCard (.vcf) Export",
        "Basic Profile Views & Analytics",
        "Full Mobile Browser Responsiveness",
      ],
      buttonText: "Create Free Card",
      buttonVariant: "light" as const,
      href: getAppUrl("/signup"),
    },
    {
      name: "Team & Pro",
      badge: "Most Popular",
      price: annualBilling ? "$15" : "$19",
      period: "per month",
      description: "For teams, agencies, and high-volume networking professionals.",
      features: [
        "Up to 25 Member Smart Cards",
        "Two-Way Lead Capture CRM",
        "CSV Export & Realtime Telemetry",
        "Custom Brand Colors & Domain",
        "Summit Pass & Event Registrations",
        "Email Signatures & Virtual Backgrounds",
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonVariant: "primary" as const,
      href: getAppUrl("/signup"),
      highlighted: true,
    },
    {
      name: "Enterprise",
      badge: "Custom Scale",
      price: annualBilling ? "$79" : "$99",
      period: "per month",
      description: "For enterprise companies requiring multi-department governance and security.",
      features: [
        "Unlimited Cards & Multi-Tenancy",
        "Department Provisioning & SCIM",
        "Staff Door Check-in Scanner",
        "Dedicated Account Manager",
        "Custom Templates & Enterprise SLA",
        "Priority 24/7 Concierge Support",
      ],
      buttonText: "Deploy Enterprise",
      buttonVariant: "light" as const,
      href: getAppUrl("/signup"),
    },
  ];

  return (
    <div className="site">
      {/* Header */}
      <header>
        <a href="/" className="brand" aria-label="Zuntra home">
          <img src={`${A}/0ae4f.svg`} alt="Zuntra" />
        </a>
        <nav className={open ? "open" : ""}>
          <NavigationMenu4 onNavigate={() => setOpen(false)} />
        </nav>
        <div className="header-actions">
          <a href={getAppUrl("/login")}>Log In</a>
          <PillButton href={getAppUrl("/signup")}>Create Your Card</PillButton>
        </div>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* Pricing Hero */}
        <section
          style={{
            position: "relative",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            padding: "64px max(5.55vw, 40px) 72px",
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                fontFamily: "var(--z-font-support, sans-serif)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#67675e",
                marginBottom: "20px",
              }}
            >
              <a href="/" style={{ color: "#67675e", textDecoration: "none" }}>
                Home
              </a>
              <span>/</span>
              <span style={{ color: "#395afa", fontWeight: 700 }}>Pricing</span>
            </div>

            <div>
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                Transparent Tiers
              </StackedBadge>
            </div>

            <h1
              style={{
                margin: "20px auto",
                maxWidth: "850px",
                fontSize: "clamp(40px, 5.2vw, 68px)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "-2px",
                color: "#12141b",
                fontFamily: "var(--z-font-body, sans-serif)",
              }}
            >
              Start free.
              <br />
              Scale with your ambition.
            </h1>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 36px",
                fontSize: "19px",
                lineHeight: 1.6,
                color: "#515148",
                fontFamily: "var(--z-font-support, sans-serif)",
                fontWeight: 500,
              }}
            >
              No credit card required to start. Individual professionals can use the Starter plan indefinitely.
            </p>

            {/* Billing Toggle */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#ffffff", padding: "6px 12px", borderRadius: "999px", border: "1px solid #d3d9e5" }}>
              <button
                type="button"
                onClick={() => setAnnualBilling(false)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: 0,
                  background: !annualBilling ? "#12141b" : "transparent",
                  color: !annualBilling ? "#ffffff" : "#67675e",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setAnnualBilling(true)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: 0,
                  background: annualBilling ? "#12141b" : "transparent",
                  color: annualBilling ? "#ffffff" : "#67675e",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Annual billing</span>
                <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px", background: "#dfff52", color: "#12141b" }}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Pricing Cards Grid */}
        <section
          className="section"
          style={{
            background: "#fafafa",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlighted ? "#12141b" : "#ffffff",
                  color: plan.highlighted ? "#ffffff" : "#12141b",
                  border: plan.highlighted ? "1px solid #12141b" : "1px solid #d3d9e5",
                  borderRadius: "32px",
                  padding: "40px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: plan.highlighted ? "0 20px 40px rgba(0,0,0,0.15)" : "none",
                  position: "relative",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: plan.highlighted ? "#dfff52" : "#395afa" }}>
                      {plan.name}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: plan.highlighted ? "rgba(255,255,255,0.15)" : "#f0f2f5",
                        color: plan.highlighted ? "#ffffff" : "#45515e",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", margin: "16px 0 12px" }}>
                    <span style={{ fontSize: "52px", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: "14px", color: plan.highlighted ? "#92969f" : "#67675e" }}>
                      / {plan.period}
                    </span>
                  </div>

                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: plan.highlighted ? "#c9c9c9" : "#67675e", margin: "0 0 28px" }}>
                    {plan.description}
                  </p>

                  <div style={{ borderTop: plan.highlighted ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb", paddingTop: "24px", marginBottom: "32px" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {plan.features.map((feat) => (
                        <li key={feat} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                          <span style={{ color: plan.highlighted ? "#dfff52" : "#1ba673", fontWeight: 700 }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={plan.href}
                  className="pill"
                  style={{
                    width: "100%",
                    backgroundColor: plan.highlighted ? "#dfff52" : "#12141b",
                    color: plan.highlighted ? "#12141b" : "#ffffff",
                    borderColor: plan.highlighted ? "#dfff52" : "#12141b",
                    fontWeight: 700,
                  }}
                >
                  {plan.buttonText} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="section" style={{ background: "#ffffff", borderBottom: "0.8px solid #d3d9e5" }}>
          <SectionHeading
            title={<>Compare all features</>}
            description="Detailed capability breakdown across Starter, Team & Pro, and Enterprise tiers."
          />

          <div
            style={{
              maxWidth: "1100px",
              margin: "54px auto 0",
              overflowX: "auto",
              border: "1px solid #d3d9e5",
              borderRadius: "24px",
              background: "#ffffff",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "#f8f9fa", borderBottom: "1px solid #d3d9e5" }}>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#12141b" }}>Feature</th>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#67675e" }}>Starter ($0)</th>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#005bc5", background: "#f0f7ff" }}>
                    Team & Pro ($19)
                  </th>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#12141b" }}>Enterprise ($99)</th>
                </tr>
              </thead>
              <tbody>
                {featureComparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: idx === featureComparisonRows.length - 1 ? "none" : "1px solid #eef0f3",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <td style={{ padding: "18px 24px", fontWeight: 600, color: "#12141b" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "18px 24px", color: "#67675e" }}>
                      {row.starter === "Included" ? <Check size={16} color="#1ba673" /> : row.starter}
                    </td>
                    <td style={{ padding: "18px 24px", fontWeight: 600, color: "#12141b", background: "#f0f7ff" }}>
                      {row.pro === "Included" ? <Check size={16} color="#1ba673" /> : row.pro}
                    </td>
                    <td style={{ padding: "18px 24px", color: "#12141b", fontWeight: 500 }}>
                      {row.enterprise === "Included" ? <Check size={16} color="#1ba673" /> : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quote Block */}
        <blockquote>
          <span>“The easiest software decision our team made. We started free and scaled to the whole team in 10 minutes.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            about pricing
            <br />
            & billing.
          </h2>
          <Accordion items={questions} />
        </section>

        {/* Closing CTA */}
        <section className="closing">
          <div className="hand-stage hand-stage-yellow" aria-hidden="true">
            <div className="hand-frame hand-frame-yellow">
              <img src={`${A}/73a7b.png`} alt="" />
            </div>
          </div>
          <div className="hand-stage hand-stage-blue" aria-hidden="true">
            <div className="hand-frame hand-frame-blue">
              <img src={`${A}/354bc.png`} alt="" />
            </div>
          </div>
          <div className="closing-copy">
            <h2>
              Start building
              <br />
              your living card
              <br />
              today.
            </h2>
            <p>
              Free forever for individual cards. No credit card required to begin.
            </p>
            <PillButton href={getAppUrl("/signup")} variant="light">
              Create free card now
            </PillButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          {footerNav.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  className={link.highlight ? "footer-link-medium" : undefined}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <img src={`${A}/1c1bb.svg`} alt="Zuntra" />
          <div>
            © 2026 Zuntra Cards. All rights reserved. <span>•</span>{" "}
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>{" "}
            <span>•</span>{" "}
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>{" "}
            <span>•</span>{" "}
            <a href="/security" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
