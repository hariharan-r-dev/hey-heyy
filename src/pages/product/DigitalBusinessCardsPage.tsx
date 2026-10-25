import React, { useEffect, useState } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
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
import { InteractiveCardShowcase } from "@/components/marketing/InteractiveCardShowcase";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";
import {
  Check,
  X,
  Download,
  Share2,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Smartphone,
  Layers,
  QrCode,
  Wifi,
  ArrowRight,
  TrendingUp,
  Globe2,
} from "lucide-react";

const A = "/assets";

const facts: FactItem[] = [
  {
    title: "<1.2s Load Time",
    description: "Opens instantly in mobile Safari, Chrome, and Android browsers",
  },
  {
    title: "0% App Download",
    description: "Recipients save your contact directly without installing an app",
  },
  {
    title: "1-Tap vCard Save",
    description: "Downloads complete verified details straight into address books",
  },
];

const steps: StepItem[] = [
  {
    icon: "b6887.svg",
    title: "1. Build your profile in 60s",
    body: "Upload your portrait, select an executive layout, and choose which verified numbers, emails, calendar links, and portfolios to publish.",
  },
  {
    icon: "eac73.svg",
    title: "2. Share anywhere with a tap",
    body: "Present your dynamic high-contrast QR code on your phone, tap with a physical NFC smart card, or send your vanity URL by text or email.",
  },
  {
    icon: "b9f6f.svg",
    title: "3. Turn introductions into leads",
    body: "The recipient's phone prompts to save your complete .vcf contact card in one tap, or they can exchange their info back to your CRM.",
  },
];

const capabilities = [
  {
    tag: "Frictionless",
    surface: "#eaf6ff",
    accent: "#395afa",
    accentSoft: "#bedffe",
    title: "Instant 1-Tap vCard Save",
    description:
      "Recipients tap once to download your complete verified contact card directly into Apple Contacts or Google Contacts. No manual typing, no typos, no friction.",
    icon: Download,
  },
  {
    tag: "CRM Inbound",
    surface: "#f0fdb3",
    accent: "#92b301",
    accentSoft: "#dcf214",
    title: "Two-Way Reciprocal Lead Capture",
    description:
      "Turn one-way presentations into real relationships. The recipient can tap 'Exchange Contact' to share their details, landing straight in your workspace pipeline.",
    icon: Users,
  },
  {
    tag: "Versatile",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    accentSoft: "#ffbee8",
    title: "Multi-Identity Personas",
    description:
      "Maintain separate cards for your executive title, consulting practice, startup venture, or conference speaking—all managed seamlessly from one account.",
    icon: Layers,
  },
  {
    tag: "Hardware",
    surface: "#ffe8dd",
    accent: "#da4d09",
    accentSoft: "#f3a985",
    title: "NFC Smart Tap & Dynamic QR",
    description:
      "Pair with sleek matte black, brushed steel, or bamboo NFC smart cards. Tap the back of any modern smartphone to transmit your profile in milliseconds.",
    icon: Wifi,
  },
  {
    tag: "Always Current",
    surface: "#eaf6ff",
    accent: "#395afa",
    accentSoft: "#bedffe",
    title: "Dynamic Real-Time Sync",
    description:
      "Changed your phone number, email domain, or title? Update your profile once in the dashboard, and every previously shared QR code and NFC tap updates live.",
    icon: Zap,
  },
  {
    tag: "Security",
    surface: "#f0fdb3",
    accent: "#92b301",
    accentSoft: "#dcf214",
    title: "Privacy & Channel Controls",
    description:
      "You have full control over what is public. Protect direct mobile numbers behind inquiries, verify corporate emails, and enforce company brand standards.",
    icon: ShieldCheck,
  },
];

const comparisons = [
  {
    feature: "Recipient Experience",
    paper: "Manual retyping of numbers from crumpled paper",
    linktree: "Cluttered link hub filled with third-party ads",
    zuntra: "Clean browser profile with instant 1-tap vCard save",
  },
  {
    feature: "Updating Information",
    paper: "Reprints required; past cards are permanently obsolete",
    linktree: "Links update, but contacts don't save to phone address book",
    zuntra: "Update once; every shared card reflects edits live",
  },
  {
    feature: "Two-Way Lead Exchange",
    paper: "Requires recipient to carry physical paper cards",
    linktree: "Requires third-party forms and extra tools",
    zuntra: "Built-in reciprocal contact exchange lands in your CRM",
  },
  {
    feature: "Hardware Sharing",
    paper: "Physical stack that runs out at conferences",
    linktree: "Manual URL typing or static QR sticker",
    zuntra: "High-contrast dynamic QR + NFC hardware smart tap",
  },
  {
    feature: "Professional Impression",
    paper: "Lost, bent, or discarded within 48 hours",
    linktree: "Casual social media aggregator look",
    zuntra: "Bespoke native layout with your verified workspace branding",
  },
];

const questions: AccordionItem[] = [
  [
    "How does someone save my digital business card?",
    "When a recipient opens your card, a prominent 'Save Contact' button downloads a verified vCard (.vcf) file. Their phone's native address book (Apple Contacts or Google Contacts) opens automatically with your photo, phone, email, company, and links pre-filled.",
  ],
  [
    "Does the person I meet need to download an app?",
    "No. Zuntra cards run natively in mobile Safari, Chrome, Samsung Internet, and Edge. Anyone with a smartphone camera or web browser can open your card, save your details, or send their info back without installing an app or registering.",
  ],
  [
    "Can I pair my digital card with a physical NFC card?",
    "Yes. Zuntra works seamlessly with standard NFC cards, keyfobs, and stickers. A single tap to an iPhone or Android immediately opens your live profile. If your details change, your physical NFC card updates automatically.",
  ],
  [
    "What happens when I change my phone number or job title?",
    "You update it once in your Zuntra workspace. Because your QR code and NFC card point to your dynamic live profile, everyone who opens your card will immediately see your latest information.",
  ],
  [
    "Can I maintain separate cards for different roles?",
    "Yes. You can manage multiple distinct profiles—for example, your primary executive role, a board advisory seat, and personal consulting—and choose which one to share depending on the setting.",
  ],
  [
    "How does reciprocal two-way contact exchange work?",
    "Your card includes an 'Exchange Contact' option. The person you meet can submit their name, email, phone number, and a quick note. The lead is instantly saved in your private workspace directory with timestamp and meeting context.",
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

export function DigitalBusinessCardsPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Digital Business Cards — Zuntra",
      description:
        "Modern digital business cards your contacts can actually save. Share via dynamic QR, NFC tap, or direct link with instant 1-tap address book vCard save.",
      canonicalPath: "/digital-business-cards",
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
        {/* Product Hero Section */}
        <section
          style={{
            position: "relative",
            minHeight: "680px",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Copy Column */}
            <div>
              {/* Breadcrumb */}
              <div
                style={{
                  display: "flex",
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
                <a href="/product" style={{ color: "#67675e", textDecoration: "none" }}>
                  Product
                </a>
                <span>/</span>
                <span style={{ color: "#395afa", fontWeight: 700 }}>Digital Cards</span>
              </div>

              {/* Stacked Badge */}
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                Business 3.0 Identity
              </StackedBadge>

              <h1
                style={{
                  margin: "20px 0",
                  fontSize: "clamp(42px, 5vw, 68px)",
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: "-2px",
                  color: "#12141b",
                  fontFamily: "var(--z-font-body, sans-serif)",
                }}
              >
                Digital business cards.
                <br />
                Built to open doors.
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
                Upgrade your first impression with interactive, media-rich digital business cards designed for modern executives, founders, and creators. Recipients save your complete contact in one tap—zero app required.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <PillButton href={getAppUrl("/signup")} showArrow>
                  Create Your Card Free
                </PillButton>
                <a
                  href={getAppUrl("/card/praneeth-sivala")}
                  target="_blank"
                  rel="noreferrer"
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
                  <span>Preview Live B2B Card</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginTop: "28px",
                  fontSize: "12px",
                  color: "#67675e",
                  fontWeight: 500,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Check size={14} color="#1ba673" strokeWidth={3} /> No app required for recipients
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Check size={14} color="#1ba673" strokeWidth={3} /> 1-Tap Apple & Google Contacts save
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Check size={14} color="#1ba673" strokeWidth={3} /> Dynamic QR & NFC enabled
                </span>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "440px",
                  background: "#ffffff",
                  border: "1px solid #d3d9e5",
                  borderRadius: "36px",
                  padding: "32px",
                  boxShadow: "0 20px 48px -12px rgba(18, 20, 27, 0.12)",
                }}
              >
                {/* Visual Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: "#12141b",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      PS
                    </div>
                    <div>
                      <strong style={{ display: "block", fontSize: "16px", color: "#12141b", lineHeight: 1.2 }}>
                        Praneeth Sivala
                      </strong>
                      <span style={{ fontSize: "12px", color: "#67675e" }}>
                        Chief Executive Officer & Co-founder
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: "#eaf6ff",
                      color: "#395afa",
                    }}
                  >
                    Verified
                  </span>
                </div>

                {/* Card Preview Visual */}
                <div
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    marginBottom: "24px",
                    background: "#f8f9fc",
                  }}
                >
                  <img
                    src="/marketing/visuals/digital-business-card.webp"
                    alt="Zuntra digital business card interface preview"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* Quick Action Dock */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <a
                    href={getAppUrl("/signup")}
                    className="pill"
                    style={{
                      minHeight: "44px",
                      padding: "10px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      justifyContent: "center",
                    }}
                  >
                    <Download size={14} /> Save Contact
                  </a>
                  <a
                    href={getAppUrl("/card/praneeth-sivala")}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      minHeight: "44px",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      border: "1px solid #d3d9e5",
                      background: "#ffffff",
                      color: "#12141b",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <Share2 size={14} /> Share Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Live Interactive Experience Simulator */}
        <section className="section" style={{ background: "#ffffff", borderBottom: "0.8px solid #d3d9e5" }}>
          <SectionHeading
            title={
              <>
                Test the recipient experience.
                <br />
                Directly in your browser.
              </>
            }
            description="See how your contacts view, download your vCard, and exchange details in real time."
          />
          <div style={{ maxWidth: "1080px", margin: "48px auto 0" }}>
            <InteractiveCardShowcase compact={true} />
          </div>
        </section>

        {/* How It Works (StepGrid) */}
        <section className="how section" id="how">
          <SectionHeading
            title={
              <>
                From introduction
                <br />
                to saved contact.
              </>
            }
            description="Three friction-free steps that turn brief introductions into permanent professional connections."
          />
          <StepGrid items={steps} />
        </section>

        {/* Capabilities Grid (Pastel Design System Cards) */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderTop: "0.8px solid #d3d9e5",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <SectionHeading
            title={
              <>
                Engineered for executives.
                <br />
                Loved by recipients.
              </>
            }
            description="Everything required to build trust, make sharing seamless, and keep information synchronized."
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
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.title}
                  style={{
                    backgroundColor: cap.surface,
                    border: "0.8px solid #d3d9e5",
                    borderRadius: "32px",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "280px",
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
                          background: cap.accent,
                          color: "#ffffff",
                        }}
                      >
                        {cap.tag}
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
                          color: cap.accent,
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
                      {cap.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "#515148",
                      }}
                    >
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section" style={{ background: "#ffffff", borderBottom: "0.8px solid #d3d9e5" }}>
          <SectionHeading
            title={
              <>
                Why modern professionals
                <br />
                retire paper business cards.
              </>
            }
            description="Paper cards get lost. Link-in-bio trees look casual. Zuntra is built for real client meetings."
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
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#67675e" }}>Paper Business Card</th>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#67675e" }}>Static Link Hub</th>
                  <th style={{ padding: "18px 24px", fontWeight: 700, color: "#005bc5", background: "#f0f7ff" }}>
                    Zuntra Living Card
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: idx === comparisons.length - 1 ? "none" : "1px solid #eef0f3",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <td style={{ padding: "18px 24px", fontWeight: 600, color: "#12141b" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "18px 24px", color: "#67675e", lineHeight: 1.5 }}>
                      <span style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <X size={15} color="#ef4444" style={{ flexShrink: 0, marginTop: "3px" }} />
                        {row.paper}
                      </span>
                    </td>
                    <td style={{ padding: "18px 24px", color: "#67675e", lineHeight: 1.5 }}>
                      <span style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <X size={15} color="#d97706" style={{ flexShrink: 0, marginTop: "3px" }} />
                        {row.linktree}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontWeight: 600,
                        color: "#12141b",
                        background: "#f0f7ff",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <Check size={16} color="#1ba673" style={{ flexShrink: 0, marginTop: "3px" }} />
                        {row.zuntra}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Editorial Quote */}
        <blockquote>
          <span>“The best digital card is the one that actually becomes a saved contact in their address book.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            about digital
            <br />
            cards.
          </h2>
          <Accordion items={questions} />
        </section>

        {/* Closing Call To Action */}
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
              Make your next
              <br />
              introduction
              <br />
              unforgettable.
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
}

export default DigitalBusinessCardsPage;
