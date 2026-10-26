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
import { InteractiveCardShowcase } from "@/components/marketing/InteractiveCardShowcase";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";
import {
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
  ArrowRight,
  Video,
  Check,
} from "lucide-react";

const A = "/assets";

const productGroups = [
  {
    category: "Create & Share",
    items: [
      {
        icon: CreditCard,
        title: "Digital Business Cards",
        description: "Responsive living profiles that open natively in any browser with 1-tap vCard save.",
        href: "/digital-business-cards",
        surface: "#eaf6ff",
        accent: "#395afa",
        tag: "Core Identity",
      },
      {
        icon: QrCode,
        title: "Dynamic QR Codes",
        description: "High-contrast dynamic QR codes that update when your details do. Print anywhere.",
        href: "/qr-business-cards",
        surface: "#f0fdb3",
        accent: "#92b301",
        tag: "Scan Target",
      },
      {
        icon: Wifi,
        title: "NFC Smart Cards",
        description: "Tap-to-share physical matte black, metal, or bamboo cards. Instantly routes to your live profile.",
        href: "/nfc-business-cards",
        surface: "#ffb8e7",
        accent: "#fd4ec2",
        tag: "Hardware Tap",
      },
      {
        icon: Mail,
        title: "Email Signatures",
        description: "Branded email signatures with live links to your digital card for every outgoing message.",
        href: "/email-signatures",
        surface: "#ffe8dd",
        accent: "#da4d09",
        tag: "Desktop & Mobile",
      },
      {
        icon: Video,
        title: "Virtual Backgrounds",
        description: "High-res Zoom, Teams, and Google Meet backgrounds with embedded QR code.",
        href: "/virtual-backgrounds",
        surface: "#eaf6ff",
        accent: "#395afa",
        tag: "Remote Meetings",
      },
      {
        icon: Palette,
        title: "Curated Layout Studio",
        description: "20+ crafted visual layouts that adapt automatically to your brand colors and typography.",
        href: getAppUrl("/studio"),
        isExternal: true,
        surface: "#f0fdb3",
        accent: "#92b301",
        tag: "Bespoke Styles",
      },
    ],
  },
  {
    category: "Connect & Manage",
    items: [
      {
        icon: Users,
        title: "Contact Management",
        description: "Organize every connection you make. Export contacts, add notes, and track follow-ups.",
        href: "/contact-management",
        surface: "#ffb8e7",
        accent: "#fd4ec2",
        tag: "Directory",
      },
      {
        icon: Layers,
        title: "Two-Way Lead Capture",
        description: "Two-way contact exchange turns introductions into actionable leads inside your workspace.",
        href: "/lead-capture",
        surface: "#ffe8dd",
        accent: "#da4d09",
        tag: "Inbound CRM",
      },
      {
        icon: BarChart3,
        title: "Scan & View Analytics",
        description: "See who viewed your card, when, and how they interacted with your links.",
        href: "/analytics",
        surface: "#eaf6ff",
        accent: "#395afa",
        tag: "Real-Time Telemetry",
      },
    ],
  },
];

const facts: FactItem[] = [
  { title: "1-Tap Save", description: "Direct vCard export into Apple & Google address books" },
  { title: "Zero Apps", description: "Recipients never need to install software or register" },
  { title: "Always Live", description: "Update once; every shared QR and NFC card updates instantly" },
];

const steps: StepItem[] = [
  {
    icon: "b6887.svg",
    title: "1. Build your suite in minutes",
    body: "Create your primary digital business card, upload your logo and hex brand colors, and generate matching email signatures.",
  },
  {
    icon: "eac73.svg",
    title: "2. Deploy across all touchpoints",
    body: "Use dynamic QR codes, NFC smart cards, lockscreen wallet badges, and virtual video meeting backgrounds.",
  },
  {
    icon: "b9f6f.svg",
    title: "3. Track engagement & capture leads",
    body: "Monitor view counts and vCard saves in real time while incoming reciprocal contacts sync straight to your directory.",
  },
];

const questions: AccordionItem[] = [
  [
    "How do all the Zuntra products work together?",
    "Everything connects through your live digital profile. Your QR codes, NFC hardware cards, email signatures, and virtual backgrounds all route to your always-current card and sync leads back to your central directory.",
  ],
  [
    "Can team admins manage employee cards centrally?",
    "Yes. From the workspace admin console, admins can provision employee accounts, enforce locked brand colors and logos, group by department, and export all captured leads.",
  ],
  [
    "Do recipients need any special software to scan or save?",
    "No. Standard camera apps on iPhone and Android scan the QR code and open the card directly in the browser with 1-tap contact saving.",
  ],
  [
    "Can I pair multiple NFC cards with one digital profile?",
    "Yes. You can write your Zuntra link to multiple physical NFC cards, keyfobs, or badges, allowing you to keep a card in your wallet, one on your phone case, or distribute cards across your team.",
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

export const ProductPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Products & Complete Suite — Zuntra",
      description:
        "Explore Zuntra’s full suite: living digital business cards, dynamic QR codes, NFC tap cards, 2-way lead capture, email signatures, and real-time analytics.",
      canonicalPath: "/product",
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

      <MarketingBreadcrumb current="Products" />

      <main>
        {/* Hero Section */}
        <section
          className="product-overview-hero"
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
            className="product-overview-hero-grid"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr)",
              gap: "56px",
              alignItems: "center",
            }}
          >
            <div className="product-overview-hero-copy" style={{ maxWidth: "760px" }}>
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                Complete Identity Suite
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
                Everything you need
                <br />
                to connect seamlessly.
              </h1>

              <p
                style={{
                  maxWidth: "520px",
                  margin: "0 0 32px",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#515148",
                  fontFamily: "var(--z-font-support, sans-serif)",
                  fontWeight: 500,
                }}
              >
                Living digital business cards, dynamic QR codes, NFC tap cards, two-way lead capture, email signatures, virtual meeting backgrounds, and real-time telemetry—all in one unified workspace.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <PillButton href={getAppUrl("/signup")} showArrow>
                  Create Your Free Card
                </PillButton>
                <PillButton href="/how-it-works" variant="secondary">
                  See How It Works
                </PillButton>
              </div>

            </div>

            {/* Right Interactive Simulator Preview */}
            <div className="product-overview-hero-preview" style={{ display: "flex", justifyContent: "center" }}>
              <InteractiveCardShowcase />
            </div>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Feature Groups */}
        {productGroups.map((group) => (
          <section
            key={group.category}
            className="section"
            style={{
              background: "#fbfbfb",
              borderBottom: "0.8px solid #d3d9e5",
            }}
          >
            <SectionHeading
              title={<>{group.category}</>}
              description="Engineered for high performance, intuitive networking, and brand consistency."
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
              {group.items.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noreferrer" : undefined}
                    style={{
                      backgroundColor: item.surface,
                      border: "0.8px solid #d3d9e5",
                      borderRadius: "32px",
                      padding: "36px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "260px",
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
                            background: item.accent,
                            color: "#ffffff",
                          }}
                        >
                          {item.tag}
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
                            color: item.accent,
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
                        {item.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "#515148",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: item.accent }}>
                      <span>Explore details</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        {/* How It Works (StepGrid) */}
        <section className="how section" id="how">
          <SectionHeading
            title={
              <>
                From setup to first scan
                <br />
                in three simple steps.
              </>
            }
            description="Equip yourself or your entire team with modern digital identities in minutes."
          />
          <StepGrid items={steps} />
        </section>

        {/* Quote Block */}
        <blockquote>
          <span>“The best digital identity turns every introduction into a lasting connection.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            before you
            <br />
            choose.
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
              Ready to upgrade
              <br />
              your professional
              <br />
              presence?
            </h2>
            <p>
              Create your verified digital card in 60 seconds and start sharing via QR, NFC, link, or digital wallet.
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

export default ProductPage;
