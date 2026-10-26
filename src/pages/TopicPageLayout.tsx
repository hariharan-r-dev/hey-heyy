import React, { useState, useEffect } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
import { MarketingBreadcrumb } from "@/components/marketing/MarketingBreadcrumb";
import {
  Accordion,
  FactStrip,
  PillButton,
  SectionHeading,
  StackedBadge,
  StepGrid,
  type AccordionItem,
  type FactItem,
  type StepItem,
} from "@/design-system";
import { TopicProductVisual, TopicVisualSpec } from "../components/marketing/TopicProductVisual";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";
import { Check, X, ArrowRight, Layers } from "lucide-react";

const A = "/assets";

export interface TopicPageConfig {
  slug: string;
  category: "Products" | "Solutions" | "Platform" | "Resources" | "Company";
  badge: string;
  badgeColor?: string;
  badgeLayerColor?: string;
  title: string;
  headline: React.ReactNode;
  subheadline: string;
  visual?: TopicVisualSpec;
  keyFeatures: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  steps?: {
    step: string;
    title: string;
    description: string;
  }[];
  comparison?: {
    legacy: string;
    zuntra: string;
  };
  faqs?: {
    q: string;
    a: string;
  }[];
}

const pastelTones = [
  { surface: "#eaf6ff", accent: "#395afa", accentSoft: "#bedffe", tag: "Essential" },
  { surface: "#f0fdb3", accent: "#92b301", accentSoft: "#dcf214", tag: "Seamless" },
  { surface: "#ffb8e7", accent: "#fd4ec2", accentSoft: "#ffbee8", tag: "Smart" },
  { surface: "#ffe8dd", accent: "#da4d09", accentSoft: "#f3a985", tag: "Connected" },
  { surface: "#eaf6ff", accent: "#395afa", accentSoft: "#bedffe", tag: "Always Live" },
  { surface: "#f0fdb3", accent: "#92b301", accentSoft: "#dcf214", tag: "Verified" },
];

function getCategoryTone(category: string) {
  switch (category) {
    case "Products":
      return { color: "#395afa", layer: "#bedffe" };
    case "Solutions":
      return { color: "#92b301", layer: "#dcf214" };
    default:
      return { color: "#fd4ec2", layer: "#ffbee8" };
  }
}

function getTopicActions(data: TopicPageConfig) {
  if (data.category === "Solutions") {
    return {
      primaryHref: getAppUrl("/signup"),
      primaryLabel: `Equip ${data.title.replace(/^For /, "")}`,
      secondaryHref: "/solutions",
      secondaryLabel: "All Solutions",
    };
  }

  if (data.category === "Products") {
    return {
      primaryHref: getAppUrl("/signup"),
      primaryLabel: `Start with ${data.title}`,
      secondaryHref: "/product",
      secondaryLabel: "All Products",
    };
  }

  return {
    primaryHref: getAppUrl("/signup"),
    primaryLabel: "Create Your Card Free",
    secondaryHref: "/pricing",
    secondaryLabel: "See Pricing Plans",
  };
}

function getOfferHeading(data: TopicPageConfig) {
  if (data.category === "Products") return `What you get with ${data.title}`;
  if (data.category === "Solutions") return `How Zuntra powers ${data.title.toLowerCase()}`;
  if (data.category === "Resources") return `Explore ${data.title}`;
  return `What ${data.title} delivers`;
}

function getClosingHeading(data: TopicPageConfig) {
  if (data.category === "Solutions") return `Ready to equip ${data.title.replace(/^For /, "").toLowerCase()}?`;
  if (data.category === "Resources") return `Ready to explore ${data.title}?`;
  if (data.category === "Company") return `Want to know more about ${data.title}?`;
  return `Ready to experience ${data.title}?`;
}

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

export const TopicPageLayout: React.FC<TopicPageConfig> = (props) => {
  const [open, setOpen] = useState(false);
  const actions = getTopicActions(props);
  const tone = getCategoryTone(props.category);

  useEffect(() => {
    updatePageSEO({
      title: `${props.title} — Zuntra`,
      description: props.subheadline,
      canonicalPath: `/${props.slug}`,
    });
  }, [props.slug, props.title, props.subheadline]);

  const facts: FactItem[] = [
    {
      title: "<1.2s Load Time",
      description: "Opens instantly in mobile Safari, Chrome, and Android",
    },
    {
      title: "0% App Download",
      description: "Recipients save your contact directly without installing an app",
    },
    {
      title: "100% In Sync",
      description: "Update details once; all shared cards and QR codes reflect edits",
    },
  ];

  const defaultStepIcons = ["b6887.svg", "eac73.svg", "b9f6f.svg"];
  const stepItems: StepItem[] = (props.steps ?? []).map((s, i) => ({
    icon: defaultStepIcons[i % defaultStepIcons.length],
    title: `${s.step} / ${s.title}`,
    body: s.description,
  }));

  const faqItems: AccordionItem[] = (props.faqs ?? [
    {
      q: `Do recipients need an app to view or save ${props.title}?`,
      a: "No. Everything opens natively in standard mobile web browsers. Recipients can view your profile, save your contact vCard in 1 tap, or exchange their details without creating an account.",
    },
    {
      q: `How do I share ${props.title} in real-world meetings?`,
      a: "You can present your dynamic QR code, tap with a physical NFC smart card, add a badge to your phone wallet, or share your custom short link by text or email.",
    },
    {
      q: `Can I update ${props.title} after distributing it?`,
      a: "Yes. Edit your contact details, portfolio links, or roles once in the dashboard. The same QR code, NFC card, and links automatically load your latest information.",
    },
  ]).map((f) => [f.q, f.a]);

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

      <MarketingBreadcrumb current={props.title} parent={{ label: props.category }} accent={tone.color} />

      <main>
        {/* Product / Topic Hero Section */}
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
              display: "grid",
              gridTemplateColumns: props.visual ? "repeat(auto-fit, minmax(320px, 1fr))" : "1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Hero Copy Column */}
            <div>
              {/* Stacked Badge */}
              <StackedBadge
                color={props.badgeColor || tone.color}
                layerColor={props.badgeLayerColor || tone.layer}
                className="mb-4"
              >
                {props.badge || `${props.category} Model`}
              </StackedBadge>

              <h1
                style={{
                  margin: "20px 0",
                  fontSize: "clamp(38px, 4.8vw, 64px)",
                  lineHeight: 1.06,
                  fontWeight: 600,
                  letterSpacing: "-2px",
                  color: "#12141b",
                  fontFamily: "var(--z-font-body, sans-serif)",
                }}
              >
                {props.headline}
              </h1>

              <p
                style={{
                  maxWidth: "540px",
                  margin: "0 0 32px",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#515148",
                  fontFamily: "var(--z-font-support, sans-serif)",
                  fontWeight: 500,
                }}
              >
                {props.subheadline}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <PillButton href={actions.primaryHref} showArrow>
                  {actions.primaryLabel}
                </PillButton>
                <PillButton href={actions.secondaryHref} variant="secondary">
                  {actions.secondaryLabel}
                </PillButton>
              </div>

            </div>

            {/* Hero Visual Column */}
            {props.visual && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "480px",
                    background: "#ffffff",
                    border: "1px solid #d3d9e5",
                    borderRadius: "36px",
                    padding: "24px",
                    boxShadow: "0 20px 48px -12px rgba(18, 20, 27, 0.12)",
                  }}
                >
                  <TopicProductVisual visual={props.visual} priority={true} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Capabilities Grid (Design System Pastel Cards) */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <SectionHeading
            title={
              <>
                {getOfferHeading(props)}
              </>
            }
            description="Engineered for frictionless digital sharing, verified branding, and zero recipient friction."
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
            {props.keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              const cardTone = pastelTones[idx % pastelTones.length];
              return (
                <div
                  key={feat.title}
                  style={{
                    backgroundColor: cardTone.surface,
                    border: "0.8px solid #d3d9e5",
                    borderRadius: "32px",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "260px",
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
                          background: cardTone.accent,
                          color: "#ffffff",
                        }}
                      >
                        {cardTone.tag}
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
                          color: cardTone.accent,
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
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "#515148",
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3-Step Walkthrough (if steps provided) */}
        {stepItems.length > 0 && (
          <section className="how section" id="how">
            <SectionHeading
              title={
                <>
                  From introduction
                  <br />
                  to lasting connection.
                </>
              }
              description="Three simple steps that turn real-world touchpoints into permanent connections."
            />
            <StepGrid items={stepItems} />
          </section>
        )}

        {/* Comparison Section (if comparison provided) */}
        {props.comparison && (
          <section className="section" style={{ background: "#ffffff", borderBottom: "0.8px solid #d3d9e5" }}>
            <SectionHeading
              title={
                <>
                  Why modern professionals
                  <br />
                  switch to Zuntra.
                </>
              }
              description="Paper gets discarded. Cluttered link aggregators feel casual. Zuntra is built for real client meetings."
            />
            <div
              style={{
                maxWidth: "960px",
                margin: "48px auto 0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  padding: "36px",
                  borderRadius: "28px",
                  background: "#fafafa",
                  border: "1px solid #d3d9e5",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <X size={18} color="#ef4444" strokeWidth={3} />
                  <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#ef4444" }}>
                    Traditional Paper & Legacy Tools
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#67675e" }}>
                  {props.comparison.legacy}
                </p>
              </div>

              <div
                style={{
                  padding: "36px",
                  borderRadius: "28px",
                  background: "#f0f7ff",
                  border: "1px solid #bedffe",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <Check size={18} color="#1ba673" strokeWidth={3} />
                  <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#005bc5" }}>
                    Zuntra Recipient-First Advantage
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#12141b", fontWeight: 500 }}>
                  {props.comparison.zuntra}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Editorial Quote */}
        <blockquote>
          <span>“The best digital identity is the one that turns an introduction into an immediate next step.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            before you
            <br />
            share.
          </h2>
          <Accordion items={faqItems} />
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
              {getClosingHeading(props)}
            </h2>
            <p>
              {props.subheadline}
            </p>
            <PillButton href={actions.primaryHref} variant="light">
              Start building free
            </PillButton>
          </div>
        </section>
      </main>

      {/* Connected 5-Column Footer */}
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

export default TopicPageLayout;
