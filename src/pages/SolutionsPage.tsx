import React, { useEffect, useState } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
import { MarketingBreadcrumb } from "@/components/marketing/MarketingBreadcrumb";
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
import {
  Users,
  Briefcase,
  Building2,
  Shield,
  BarChart3,
  Zap,
  Check,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const A = "/assets";

const audiences = [
  {
    icon: Users,
    title: "For Individuals",
    description: "One card for every version of you. Share your living professional identity with anyone instantly without app friction.",
    href: "/individuals",
    surface: "#eaf6ff",
    accent: "#395afa",
    tag: "Solo Pros",
    features: ["Personal digital card", "Dynamic QR + NFC sharing", "1-tap vCard address book save", "Multiple card styles"],
  },
  {
    icon: Briefcase,
    title: "For Freelancers",
    description: "Stand out at every client meeting. Capture qualified leads and follow up with the people who matter most.",
    href: "/freelancers",
    surface: "#f0fdb3",
    accent: "#92b301",
    tag: "Creative Talent",
    features: ["Custom branding & links", "Two-way lead capture forms", "Email signature generator", "Direct portfolio showcases"],
  },
  {
    icon: Building2,
    title: "For Small Business",
    description: "Equip every employee with a sleek professional card. Keep your brand consistent across the company without per-seat penalty traps.",
    href: "/small-business",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    tag: "Growing Practices",
    features: ["Team management console", "Locked brand assets & logos", "Department grouping", "Shared contact directory"],
  },
  {
    icon: Users,
    title: "For Teams",
    description: "Organize cards by department, track team engagement, and manage employee onboarding from one centralized workspace.",
    href: "/teams",
    surface: "#ffe8dd",
    accent: "#da4d09",
    tag: "Collaborative Teams",
    features: ["Multi-tenant workspace", "Admin card management", "Centralized company roster", "Aggregated lead attribution"],
  },
  {
    icon: Shield,
    title: "For Enterprise",
    description: "Custom subdomain deployment, PostgreSQL zero-trust isolation, compliance controls, and SLA-backed dedicated engineering.",
    href: "/enterprise",
    surface: "#eaf6ff",
    accent: "#395afa",
    tag: "Large Rosters",
    features: ["Zero-trust token security", "Bulk CSV roster sync", "Custom subdomains with SSL", "Dedicated onboarding & SLA"],
  },
  {
    icon: TrendingUp,
    title: "For Sales Teams",
    description: "Never lose a warm introduction again. Turn real-world conferences and meetings into organized inbound CRM pipeline leads.",
    href: "/sales-teams",
    surface: "#f0fdb3",
    accent: "#92b301",
    tag: "Revenue Teams",
    features: ["Instant reciprocal lead capture", "Rep lead attribution", "CSV pipeline export", "Virtual background cards"],
  },
  {
    icon: Users,
    title: "Recruiters & Networking",
    description: "Accelerate hiring outreach and executive networking. Make your contact info memorable and instantly accessible.",
    href: "/recruiters-and-networking",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    tag: "Talent Acquisition",
    features: ["Quick talent contact capture", "Job post link integration", "Personal brand authority", "Calendar booking integration"],
  },
];

const facts: FactItem[] = [
  { title: "Any Device", description: "Seamless on iOS, Android, macOS, and Windows" },
  { title: "Zero Lock-In", description: "Export your contacts anytime in CSV and vCard formats" },
  { title: "Brand Governance", description: "Lock approved logos, typography, and company colors" },
];

const steps: StepItem[] = [
  {
    icon: "b6887.svg",
    title: "1. Choose your workflow",
    body: "Select whether you are setting up an individual card, outfitting an agency team, or deploying an enterprise company roster.",
  },
  {
    icon: "eac73.svg",
    title: "2. Distribute seamlessly",
    body: "Invite team members via email, distribute pre-configured cards, or write live links to physical NFC employee badges.",
  },
  {
    icon: "b9f6f.svg",
    title: "3. Centralize leads & insights",
    body: "Captured contacts flow automatically into your shared directory, giving leaders real-time visibility into networking activity.",
  },
];

const questions: AccordionItem[] = [
  [
    "Can we manage cards across multiple departments?",
    "Yes. Zuntra lets admins create distinct departments (e.g., Sales, Engineering, Leadership), assign department leads, and enforce specific card styles per group.",
  ],
  [
    "What happens when an employee departs the company?",
    "Admins can deactivate the employee's card with one click. The card immediately becomes inactive and can no longer be used to share company credentials.",
  ],
  [
    "How does lead capture route to our existing CRM?",
    "Contacts captured through two-way exchange are stored in your central workspace directory and can be exported as clean CSV or vCard files, or connected via webhook integrations.",
  ],
  [
    "Can individuals upgrade to a team plan later?",
    "Yes. Any personal cards you create can be seamlessly migrated into a team or enterprise workspace at any time without losing URLs or QR codes.",
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

export const SolutionsPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Solutions — Zuntra",
      description:
        "Explore Zuntra solutions tailored for individuals, freelancers, small businesses, high-growth teams, enterprise rosters, and sales organizations.",
      canonicalPath: "/solutions",
    });
  }, []);

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

      <MarketingBreadcrumb current="Solutions" accent="#92b301" />

      <main>
        {/* Solutions Hero */}
        <section
          style={{
            position: "relative",
            minHeight: "640px",
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
            <div>
              <StackedBadge color="#92b301" layerColor="#dcf214" className="mb-4">
                Tailored Workflows
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
              Built for people.
              <br />
              Scaled for teams.
            </h1>

            <p
              style={{
                maxWidth: "620px",
                margin: "0 auto 36px",
                fontSize: "19px",
                lineHeight: 1.6,
                color: "#515148",
                fontFamily: "var(--z-font-support, sans-serif)",
                fontWeight: 500,
              }}
            >
              Whether you are an independent consultant or an enterprise organization outfitting thousands of employees, Zuntra delivers the perfect card and management workflow.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <PillButton href={getAppUrl("/signup")} showArrow>
                Find Your Solution
              </PillButton>
              <PillButton href="/pricing" variant="secondary">
                Compare Pricing Plans
              </PillButton>
            </div>

          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Audience Grid */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <SectionHeading
            title={<>Solutions for every stage of growth</>}
            description="Explore our specialized workflows for individual consultants, high-growth sales teams, and global enterprises."
          />

          <div
            style={{
              maxWidth: "1200px",
              margin: "54px auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {audiences.map((aud) => {
              const IconComp = aud.icon;
              return (
                <a
                  key={aud.title}
                  href={aud.href}
                  style={{
                    backgroundColor: aud.surface,
                    border: "0.8px solid #d3d9e5",
                    borderRadius: "32px",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "340px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.8px",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background: aud.accent,
                          color: "#ffffff",
                        }}
                      >
                        {aud.tag}
                      </span>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(255,255,255,0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: aud.accent,
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3
                      style={{
                        margin: "0 0 12px",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#12141b",
                        lineHeight: 1.25,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {aud.title}
                    </h3>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "#515148",
                      }}
                    >
                      {aud.description}
                    </p>

                    <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "18px" }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {aud.features.map((feat) => (
                          <li key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#34342e" }}>
                            <Check size={14} color={aud.accent} strokeWidth={3} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: "28px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: aud.accent }}>
                    <span>View dedicated workflow</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* How It Works (StepGrid) */}
        <section className="how section" id="how">
          <SectionHeading
            title={
              <>
                Deploy across your organization
                <br />
                in three simple steps.
              </>
            }
            description="From solo onboarding to centralized company rosters with custom branding."
          />
          <StepGrid items={steps} />
        </section>

        {/* Quote Block */}
        <blockquote>
          <span>“Zuntra gives everyone in our organization an approved digital identity while eliminating paper card reprints forever.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            about team
            <br />
            solutions.
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
              Transform how your
              <br />
              team connects.
            </h2>
            <p>
              Set up your workspace today and experience the difference of living, modern digital identities.
            </p>
            <PillButton href={getAppUrl("/signup")} variant="light">
              Start building free
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

export default SolutionsPage;
