import React, { useEffect, useRef, useState } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
import {
  Accordion,
  FactStrip,
  PillButton,
  ProductCard,
  SectionHeading,
  StepGrid,
  type AccordionItem,
  type FactItem,
  type ProductCardData,
  type StepItem,
} from "@/design-system";
import GradualBlur from "@/GradualBlur";
import ScrollStack, { ScrollStackItem } from "@/ScrollStack";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";

const A = "/assets";

const steps: StepItem[] = [
  {
    icon: "b6887.svg",
    title: "Create your identity",
    body: "Build a digital business card, event pass, showcase, or creator portfolio in under 3 minutes.",
  },
  {
    icon: "eac73.svg",
    title: "Share it anywhere",
    body: "Share by dynamic QR code, NFC smart tap, direct link, email signature, or digital wallet.",
  },
  {
    icon: "b9f6f.svg",
    title: "Turn scans into leads",
    body: "Let recipients download your vCard with 1 click or exchange details while Zuntra tracks every connection.",
  },
];

const cards: ProductCardData[] = [
  {
    label: "Digital Business Cards",
    surface: "#eaf6ff",
    accent: "#395afa",
    accentSoft: "#bedffe",
    title: "Digital business cards that open doors",
    description:
      "Create an always-current professional profile and share it in seconds by QR code, NFC tap, link, or wallet. Recipients can save your vCard instantly and exchange their details without downloading an app.",
    ctaUrl: getAppUrl("/signup"),
    demoUrl: getAppUrl("/card/praneeth-sivala"),
    demoLabel: "Preview Live B2B Card",
  },
  {
    label: "Dynamic QR",
    surface: "#f0fdb3",
    accent: "#92b301",
    accentSoft: "#dcf214",
    title: "A dynamic QR code that stays current",
    description:
      "Share a high-contrast QR code anywhere and update the destination without reprinting. Export it for screens, badges, presentations, and physical materials.",
    ctaUrl: getAppUrl("/signup"),
    demoUrl: "/qr-business-cards",
    demoLabel: "Explore Dynamic QR",
  },
  {
    label: "NFC Tap",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    accentSoft: "#ffbee8",
    title: "Share your profile with one NFC tap",
    description:
      "Pair your live Zuntra profile with a compatible NFC card, ring, or sticker. Recipients tap with their phone and open your latest details instantly.",
    ctaUrl: getAppUrl("/signup"),
    demoUrl: "/nfc-business-cards",
    demoLabel: "Explore NFC Tap",
  },
  {
    label: "2-Way Lead Form",
    surface: "#ffe8dd",
    accent: "#da4d09",
    accentSoft: "#f3a985",
    title: "Turn introductions into two-way connections",
    description:
      "Let recipients share their name, email, phone, company, and context directly through your card so every new connection is ready for follow-up.",
    ctaUrl: getAppUrl("/signup"),
    demoUrl: "/lead-capture",
    demoLabel: "Explore Lead Capture",
  },
];

const questions: AccordionItem[] = [
  [
    "What is a Zuntra digital business card?",
    "It is an always-current professional profile you can share by QR code, NFC tap, link, email signature, or wallet. Recipients can view it and save your contact without an app.",
  ],
  [
    "Does a recipient need the Zuntra app?",
    "No. Public cards and profiles open in the mobile browser they already use, with no account required to view or save your contact.",
  ],
  [
    "Can I use Zuntra with an NFC business card?",
    "Yes. Pair a compatible physical NFC card with your live Zuntra profile and share your latest details with a tap.",
  ],
  [
    "What can teams and companies manage?",
    "Admins can manage team cards, departments, shared templates, brand controls, contacts, permissions, and aggregate analytics from one workspace.",
  ],
  [
    "How does two-way lead capture work?",
    "A recipient can share their name, email, phone, company, and context through your card. The new lead appears in your contact pipeline.",
  ],
  [
    "What is the difference between a card QR and an event pass?",
    "A card QR opens a public professional profile. An event pass is a private admission credential for one event.",
  ],
  [
    "Can Zuntra manage event registration and check-in?",
    "Yes. Summit Pass supports event pages, attendee registration, private QR admission passes, rosters, and a staff check-in scanner.",
  ],
  [
    "Can I update a card after sharing it?",
    "Yes. Edit the live profile once and the same QR code, NFC card, and personal link keep opening the latest information.",
  ],
];

const facts: FactItem[] = [
  { title: "No recipient app", description: "Open profiles in any modern mobile browser" },
  { title: "QR, NFC, or link", description: "Share one live identity across every channel" },
  { title: "Built-in lead capture", description: "Turn introductions into organized contacts" },
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

function Header() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}

function FAQ() {
  return (
    <section className="faq section" id="faq">
      <h2>
        Questions
        <br />
        before you
        <br />
        share.
      </h2>
      <Accordion items={questions} />
    </section>
  );
}

export function HomePage() {
  useEffect(() => {
    updatePageSEO({
      title: "Zuntra — Digital Business Cards & Smart Identity Platform",
      description:
        "Create modern digital business cards, event passes, and portfolios that recipients can open, save, and exchange instantly—no app required.",
      canonicalPath: "/",
    });
  }, []);

  const [solution, setSolution] = useState(0);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);
  const solutions = ["For people", "For teams", "For events"];
  const solutionColors = ["#dfff52", "#a5cefd", "#99eeb8"];

  useEffect(() => {
    let frame = 0;
    const updateSolution = () => {
      frame = 0;
      const section = solutionsScrollRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      setSolution(Math.min(solutions.length - 1, Math.floor(progress * solutions.length)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateSolution);
    };
    updateSolution();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [solutions.length]);

  return (
    <div className="site">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <img
            className="hero-art"
            src={`${A}/7d27e.png`}
            alt="Colorful digital cards surrounding a phone"
          />
          <div className="hero-copy">
            <h1>
              Your digital
              <br />
              identity. Built
              <br />
              to connect.
            </h1>
            <p>
              Create a digital business card, event pass, product showcase, or creator portfolio people can open, save, and act on instantly—no app required.
            </p>
            <PillButton href="#cards" showArrow>
              Explore Zuntra profiles
            </PillButton>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* How It Works */}
        <section className="how section" id="how">
          <SectionHeading
            title={
              <>
                From first hello
                <br />
                to lasting connection.
              </>
            }
            description="Create, share, and capture every opportunity in three simple steps."
          />
          <StepGrid items={steps} />
        </section>

        {/* Product Cards Stack */}
        <section className="cards section" id="cards">
          <SectionHeading
            title={
              <>
                Four products.
                <br />
                One Zuntra workspace.
              </>
            }
            description="Build every digital identity, event pass, showcase, and portfolio in one place."
          />
          <ScrollStack
            className="product-list"
            itemDistance={150}
            itemStackDistance={22}
            stackPosition={108}
            itemScale={0.025}
            baseScale={0.9}
            dimAmount={0}
            holdDistance={240}
            smoothScroll={false}
            useWindowScroll
          >
            {cards.map((card, i) => (
              <ScrollStackItem key={card.label} itemClassName="product-stack-item">
                <ProductCard item={card} index={i} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </section>

        {/* Gallery */}
        <section className="gallery section-dark">
          <SectionHeading
            title={
              <>
                More than a prettier
                <br />
                QR code.
              </>
            }
            description="Zuntra carries the relationship beyond the first scan."
          />
          <div className="gallery-grid">
            <div className="gallery-left">
              <div className="gallery-pair">
                <img src={`${A}/d79d5.png`} alt="Sharing link interface" />
                <img src={`${A}/19347.png`} alt="Saved contact interface" />
              </div>
              <img src={`${A}/ad498.png`} alt="Public contact settings" />
            </div>
            <div className="gallery-right">
              <img src={`${A}/3a7d9.png`} alt="Living professional identity" />
              <img src={`${A}/b6772.png`} alt="Business card layouts" />
            </div>
          </div>
        </section>

        {/* Solutions */}
        <div className="solutions-scroll" id="solutions" ref={solutionsScrollRef}>
          <section className="solutions section">
            <div className="solution-tabs">
              {solutions.map((name, i) => (
                <button
                  className={solution === i ? "active" : ""}
                  onClick={() => setSolution(i)}
                  key={name}
                >
                  {name}
                  {solution === i && (
                    <span>
                      {[
                        "Create a professional profile, portfolio, or showcase that is always current and ready to share.",
                        "Deploy branded team cards, manage departments, protect templates, and measure engagement at scale.",
                        "Run registration, issue private QR passes, publish speaker profiles, and check in guests quickly.",
                      ][i]}
                    </span>
                  )}
                </button>
              ))}
              {solution < solutions.length - 1 && (
                <GradualBlur
                  position="bottom"
                  height="14rem"
                  strength={1.6}
                  layers={8}
                  curve="bezier"
                  exponential
                  tint="rgba(255,255,255,.55)"
                  zIndex={4}
                />
              )}
            </div>
            <article className="solution-panel" style={{ backgroundColor: solutionColors[solution] }}>
              <h2>
                {[
                  "One link for every version of you.",
                  "One brand across every team member.",
                  "One platform for the complete event.",
                ][solution]}
              </h2>
              <p>
                {[
                  "Share your contact details, work, social links, and preferred ways to connect from one live profile.",
                  "Give every employee an approved digital identity while admins manage access, branding, and analytics.",
                  "Connect event discovery, attendee registration, admission passes, profiles, and door check-in.",
                ][solution]}
              </p>
            </article>
          </section>
        </div>

        {/* Quote */}
        <blockquote>
          <span>“The best digital identity turns every introduction into a next step.”</span>
        </blockquote>

        {/* FAQ Section */}
        <FAQ />

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
              Make every
              <br />
              connection easier
              <br />
              to continue.
            </h2>
            <p>
              Create your Zuntra identity, share it instantly, and turn real-world meetings into organized opportunities.
            </p>
            <PillButton href={getAppUrl("/signup")} variant="light">
              Start building free
            </PillButton>
          </div>
        </section>
      </main>

      {/* Footer with Connected Routing */}
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

export default HomePage;
