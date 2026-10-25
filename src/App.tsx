import { FooterPageView, FOOTER_PAGES_REGISTRY, getFooterPage } from "./pages";
import { useEffect, useRef, useState } from "react";
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
import GradualBlur from "./GradualBlur";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const A = "/assets";
const APP_URL = (import.meta as any).env?.VITE_APP_URL || "http://localhost:5180";

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
    label: "Business 3.0",
    surface: "#eaf6ff",
    accent: "#395afa",
    accentSoft: "#bedffe",
    title: "Digital business cards that open doors",
    description:
      "Create an always-current professional profile and share it in seconds by QR code, NFC tap, link, or wallet. Recipients can save your vCard instantly and exchange their details without downloading an app.",
    ctaUrl: `${APP_URL}/signup`,
    demoUrl: `${APP_URL}/card/praneeth-sivala`,
    demoLabel: "Preview Live B2B Card",
  },
  {
    label: "Summit Pass",
    surface: "#f0fdb3",
    accent: "#92b301",
    accentSoft: "#dcf214",
    title: "Event registration, passes, and check-in",
    description:
      "Launch event pages, publish speaker profiles, issue private admission QR passes, and give door staff a fast mobile check-in scanner—all from one organized event workspace.",
    ctaUrl: `${APP_URL}/signup`,
    demoUrl: `${APP_URL}/event/apex-2026`,
    demoLabel: "Live Registration & Passes",
  },
  {
    label: "Showcase",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    accentSoft: "#ffbee8",
    title: "Turn every listing into an experience",
    description:
      "Present properties, vehicles, products, or pitch decks with rich media, key highlights, downloadable brochures, location details, and a direct inquiry or booking form.",
    ctaUrl: `${APP_URL}/signup`,
    demoUrl: `${APP_URL}/card/villa-bellagio`,
    demoLabel: "Preview Luxury Listing",
  },
  {
    label: "Creator 3D",
    surface: "#ffe8dd",
    accent: "#da4d09",
    accentSoft: "#f3a985",
    title: "A portfolio made for your next opportunity",
    description:
      "Bring your work, showreel, social links, studio credits, commissions, and payment links into one memorable creator profile that is effortless to share.",
    ctaUrl: `${APP_URL}/signup`,
    demoUrl: `${APP_URL}/card/julian-reed`,
    demoLabel: "Preview Creator 3D",
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
    href: `${APP_URL}/signup`,
  },
  {
    name: "Team & Pro",
    badge: "Most Popular",
    price: "$19",
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
    href: `${APP_URL}/signup`,
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: "Custom Scale",
    price: "$99",
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
    href: `${APP_URL}/signup`,
  },
];

const footer = [
  [
    "Product",
    "Product Overview",
    "Digital Business Cards",
    "QR Code Cards",
    "NFC Smart Cards",
    "Email Signatures",
    "Virtual Backgrounds",
    "Digital Wallet Cards",
    "Contact Management",
    "Lead Capture CRM",
    "Scan & View Analytics",
  ],
  [
    "Solutions",
    "Solutions Overview",
    "For Individuals",
    "For Freelancers",
    "For Small Business",
    "For Teams",
    "For Enterprise",
    "For Sales Teams",
    "Recruiters & Networking",
  ],
  [
    "Platform",
    "How It Works",
    "Pricing Plans",
    "Card Template Studio",
    "Workspace Admin",
    "Sign In to Dashboard",
    "Create Free Account",
  ],
  [
    "Resources",
    "Resources Hub",
    "Blog & Stories",
    "Guides & Tutorials",
    "Help Center",
    "Frequently Asked Questions",
    "Contact Support",
  ],
  [
    "Company",
    "Company Overview",
    "About Zuntra",
    "Book a Demo",
    "Careers",
    "Privacy Policy",
    "Terms of Service",
    "Security Architecture",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <a href="#" className="brand" aria-label="Zuntra home">
        <img src={`${A}/0ae4f.svg`} alt="Zuntra" />
      </a>
      <nav className={open ? "open" : ""}>
        <NavigationMenu4 onNavigate={() => setOpen(false)} />
      </nav>
      <div className="header-actions">
        <a href={`${APP_URL}/login`}>Log In</a>
        <PillButton href={`${APP_URL}/signup`}>Create Your Card</PillButton>
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

export default function App() {
  const [activePage, setActivePage] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const hash = window.location.hash.replace(/^#\/?/, "");
    const clean = hash.startsWith("page=") ? hash.replace("page=", "") : hash;
    return getFooterPage(clean) ? clean : null;
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const clean = hash.startsWith("page=") ? hash.replace("page=", "") : hash;
      const found = getFooterPage(clean);
      setActivePage(found ? found.slug : null);
      if (found) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateToPage = (slug: string) => {
    window.location.hash = `#page=${slug}`;
    setActivePage(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackHome = () => {
    window.location.hash = "";
    setActivePage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [solution, setSolution] = useState(0);
  const solutionsScrollRef = useRef<HTMLElement>(null);
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

  if (activePage) {
    return <FooterPageView pageSlug={activePage} onBack={handleBackHome} onNavigate={navigateToPage} />;
  }

  return (
    <div className="site">
      <Header />

      <main>
        {/* Hero */}
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
                More than a digital
                <br />
                business card.
              </>
            }
            description="Every scan can become a saved contact, qualified lead, or next action."
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

        {/* Pricing Section */}
        <section className="section" id="pricing" style={{ background: "#fafafa", borderTop: "0.8px solid #d3d9e5", borderBottom: "0.8px solid #d3d9e5" }}>
          <SectionHeading
            title={<>Transparent pricing.<br />For every ambition.</>}
            description="Start free and scale effortlessly from personal cards to enterprise summits."
          />
          <div
            style={{
              maxWidth: "1200px",
              margin: "64px auto 0",
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

        {/* FAQ */}
        <FAQ />

        {/* Closing */}
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
            <PillButton href={`${APP_URL}/signup`} variant="light">
              Start building free
            </PillButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          {footer.map(([title, ...links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map((link, index) => {
                const pageMatch = getFooterPage(link);
                let href = "#";
                let isExternal = false;

                if (link === "Sign In to Dashboard") {
                  href = `${APP_URL}/login`;
                  isExternal = true;
                } else if (link === "Create Free Account") {
                  href = `${APP_URL}/signup`;
                  isExternal = true;
                } else if (pageMatch) {
                  href = `#page=${pageMatch.slug}`;
                }

                return (
                  <a
                    className={title === "Solutions" && index === 0 ? "footer-link-medium" : undefined}
                    href={href}
                    key={link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (!isExternal && pageMatch) {
                        e.preventDefault();
                        navigateToPage(pageMatch.slug);
                      }
                    }}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <img src={`${A}/1c1bb.svg`} alt="Zuntra" />
          <div>
            © 2026 Zuntra Cards. All rights reserved. <span>•</span>{" "}
            <a
              href="#page=privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage("privacy-policy");
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </a>{" "}
            <span>•</span>{" "}
            <a
              href="#page=terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage("terms-of-service");
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </a>{" "}
            <span>•</span>{" "}
            <a
              href="#page=security-architecture"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage("security-architecture");
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

