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
import { Heart, Shield, Sparkles, Globe, Check, ArrowRight } from "lucide-react";

const A = "/assets";

const values = [
  {
    icon: Heart,
    title: "Recipient-First",
    description: "Every decision starts with the person receiving the card. They should never need an app, an account, or an explanation.",
    surface: "#eaf6ff",
    accent: "#395afa",
    tag: "Core Belief",
  },
  {
    icon: Shield,
    title: "Privacy by Default",
    description: "You choose what to share. Recipients choose whether to engage. No tracking pixels, no spam, no predatory telemetry.",
    surface: "#f0fdb3",
    accent: "#92b301",
    tag: "Integrity",
  },
  {
    icon: Sparkles,
    title: "Simplicity over Cleverness",
    description: "A digital card should be faster than a paper card, not harder. If it needs instructions, we go back and redesign it.",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    tag: "Design Standard",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Browser-first architecture means it works on every phone, tablet, and operating system without walled-garden app stores.",
    surface: "#ffe8dd",
    accent: "#da4d09",
    tag: "Universal Access",
  },
];

const milestones: StepItem[] = [
  {
    icon: "b6887.svg",
    title: "2024 / The Problem",
    body: "Frustrated by clunky digital card apps that forced recipients to register or download software just to save an email, the Zuntra prototype was created.",
  },
  {
    icon: "eac73.svg",
    title: "2025 / The Breakthrough",
    body: "Engineered browser-first 1-tap vCard saving directly into Apple & Google Contacts, proving digital cards could be faster than paper.",
  },
  {
    icon: "b9f6f.svg",
    title: "2026 / The Platform",
    body: "Zuntra launched publicly with dynamic QR codes, NFC hardware smart cards, two-way lead capture, Summit Pass check-in, and team workspaces.",
  },
];

const facts: FactItem[] = [
  { title: "2026 Launch", description: "Modern living identity platform built for the future" },
  { title: "Zero Ads", description: "We make money from premium team tools, not selling your data" },
  { title: "1-Tap Save", description: "Direct native address book export for Apple & Android" },
];

const questions: AccordionItem[] = [
  [
    "Where is Zuntra based?",
    "Zuntra is built by a globally distributed team of engineers and designers dedicated to elevating professional introductions through elegant software.",
  ],
  [
    "What makes Zuntra different from link aggregators?",
    "Link aggregators create casual social media link trees. Zuntra creates a living executive identity that downloads your verified vCard directly into the recipient's phone book and provides two-way lead capture.",
  ],
  [
    "How does Zuntra protect corporate brand standards?",
    "Workspace administrators can lock company color palettes, enforce official logos, standardize job titles, and prevent unauthorized visual edits across all employee cards.",
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

export const AboutPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "About Zuntra — Built for Meaningful Connections",
      description:
        "Zuntra was built on a simple premise: the best business card is the one people actually keep. Recipient-first, browser-first, privacy-by-default.",
      canonicalPath: "/about",
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

      <main>
        {/* About Hero */}
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
              <span style={{ color: "#395afa", fontWeight: 700 }}>About Us</span>
            </div>

            <div>
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                Our Mission & Principles
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
              The best business card
              <br />
              is the one people keep.
            </h1>

            <p
              style={{
                maxWidth: "640px",
                margin: "0 auto 36px",
                fontSize: "19px",
                lineHeight: 1.6,
                color: "#515148",
                fontFamily: "var(--z-font-support, sans-serif)",
                fontWeight: 500,
              }}
            >
              Every year, over 10 billion paper business cards are printed worldwide, and nearly 88% are thrown away within a week. We built Zuntra to replace waste with lasting, living professional connections.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <PillButton href={getAppUrl("/signup")} showArrow>
                Join the Movement
              </PillButton>
              <a
                href="/contact"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#12141b",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Company Values Grid */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <SectionHeading
            title={<>How we build at Zuntra</>}
            description="Our core convictions guide every feature, interaction, and design decision we make."
          />

          <div
            style={{
              maxWidth: "1200px",
              margin: "54px auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  style={{
                    backgroundColor: val.surface,
                    border: "0.8px solid #d3d9e5",
                    borderRadius: "32px",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "260px",
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
                          background: val.accent,
                          color: "#ffffff",
                        }}
                      >
                        {val.tag}
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
                          color: val.accent,
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
                      {val.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "#515148",
                      }}
                    >
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Milestones (StepGrid) */}
        <section className="how section" id="how">
          <SectionHeading
            title={
              <>
                The journey so far
              </>
            }
            description="From a frustration with awkward digital card apps to an enterprise identity platform."
          />
          <StepGrid items={milestones} />
        </section>

        {/* Quote Block */}
        <blockquote>
          <span>“Design every step for the person receiving it. Zero apps. Zero friction.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            about our
            <br />
            company.
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
              Ready to make
              <br />
              better connections?
            </h2>
            <p>
              Create your living digital card in 60 seconds and start sharing without limits.
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

export default AboutPage;
