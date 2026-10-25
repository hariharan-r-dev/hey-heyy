import React, { useState, useEffect } from "react";
import NavigationMenu4 from "@/components/ui/navigation-menu4";
import {
  Accordion,
  FactStrip,
  PillButton,
  SectionHeading,
  StackedBadge,
  type FactItem,
  type AccordionItem,
} from "@/design-system";
import { getAppUrl } from "@/utils/app-url";
import { updatePageSEO } from "@/utils/seo";
import { Clock, User, X, CheckCircle2, Share2, BookOpen, ArrowRight } from "lucide-react";

const A = "/assets";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
  surface: string;
  accent: string;
}

const posts: BlogPost[] = [
  {
    id: "death-of-paper-cards",
    title: "Why 88% of Paper Business Cards Get Thrown Away Within a Week",
    category: "Industry Research",
    date: "Oct 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    role: "Head of Product Research",
    excerpt:
      "Over 100 billion business cards are printed every year globally, yet 88% land in hotel trash cans. Here is why the browser-first paradigm is replacing paper forever.",
    content: [
      "In a survey of over 1,200 attendees across tech and enterprise summits, an overwhelming 88% admitted that physical business cards collected during conferences are discarded within seven days of returning home.",
      "The core friction is simple: paper requires manual data entry. Even business card scanner apps suffer from OCR typos, blurry contact numbers, and outdated job titles. By contrast, a digital card that exports a direct vCard 3.0 file lands directly into Apple Contacts or Google Contacts in under two seconds with 100% field fidelity.",
      "Furthermore, dynamic links never go stale. When an executive gets promoted or updates their office line, everyone who scanned their card earlier still reaches the correct profile.",
    ],
    takeaways: [
      "Zero manual typing for your recipients",
      "Dynamic real-time profile updates over the air",
      "Instant sync with Apple Contacts, Google Contacts, and vCard address books",
    ],
    surface: "#eaf6ff",
    accent: "#395afa",
  },
  {
    id: "nfc-smart-cards-guide",
    title: "The Complete Technical Guide to NFC Business Cards & NTAG Chips",
    category: "Hardware",
    date: "Sep 2026",
    readTime: "7 min read",
    author: "Marcus Vance",
    role: "Hardware & Protocols Lead",
    excerpt:
      "Everything you need to know about NTAG213, NTAG215, and NTAG216 chips, antenna frequency matching, and iOS/Android native tap compatibility.",
    content: [
      "Near Field Communication (NFC) operates at 13.56 MHz and enables two devices within 4cm of proximity to exchange data. Modern smartphones—including iPhone XR and newer, plus nearly all Android devices from the past six years—have background NFC tag reading enabled by default.",
      "When configuring physical smart cards, choosing between NTAG213 (144 bytes), NTAG215 (504 bytes), and NTAG216 (888 bytes) comes down to payload size. With Zuntra, we use concise cryptographic URL redirects, meaning a cost-effective NTAG213 chip easily fits your permanent card link with rapid read speeds.",
      "Our physical cards also feature laser-etched high-contrast dynamic QR codes on the reverse, providing an effortless fallback for users with protective metal phone cases or older legacy hardware.",
    ],
    takeaways: [
      "iPhone XR+ and modern Android read NFC natively without apps",
      "Concise redirect URLs provide lightning-fast read speeds",
      "Laser-etched QR code backup ensures 100% universal compatibility",
    ],
    surface: "#f0fdb3",
    accent: "#92b301",
  },
  {
    id: "reciprocal-lead-capture",
    title: "The Reciprocal Handshake: How Two-Way Lead Capture Doubles Trade Show ROI",
    category: "Growth & Sales",
    date: "Aug 2026",
    readTime: "6 min read",
    author: "Maya Patel",
    role: "VP of Growth & Partnerships",
    excerpt:
      "Handing someone your card is a one-way broadcast. Discover how reciprocal exchange turns everyday introductions into verified inbound pipeline.",
    content: [
      "The classic conference failure mode: an executive hands out 200 paper business cards, flies home, and waits for prospects to reach out. The problem is that the buyer is just as busy as you are, and manual outreach rarely happens.",
      "With Zuntra's two-way exchange, when someone views your digital card, they are presented with a friendly 'Exchange Details' prompt. They can tap to share their name, company, email, and meeting notes back to you in five seconds.",
      "Their contact information lands immediately in your private workspace CRM with an exact timestamp, location note, and contact card reference. Your reps can trigger automated follow-up sequences before leaving the convention center floor.",
    ],
    takeaways: [
      "Turned outbound sharing into high-converting inbound leads",
      "Eliminates reliance on prospects remembering to email you later",
      "Instant CSV export and webhook sync directly to Salesforce and HubSpot",
    ],
    surface: "#ffb8e7",
    accent: "#fd4ec2",
  },
  {
    id: "enterprise-governance",
    title: "Governing Corporate Identity Across 5,000 Employees Without Lock-In",
    category: "Enterprise",
    date: "Jul 2026",
    readTime: "8 min read",
    author: "Elena Rostova",
    role: "Head of Product Research",
    excerpt:
      "How enterprise marketing directors and CISOs maintain brand consistency, enforce privacy standards, and prevent orphaned cards.",
    content: [
      "As companies scale past 500 team members, brand entropy accelerates. Employees create their own makeshift digital cards with low-resolution logos, personal Gmail addresses, and non-compliant styling.",
      "Zuntra's workspace administration provides unified brand governance. Administrators lock official color palettes, upload verified SVG vectors, and enforce title taxonomies.",
      "When an employee departs the organization, deactivating their profile takes one click, neutralizing the live card and preventing former representatives from speaking on behalf of the company.",
    ],
    takeaways: [
      "Lock company colors, logos, and typography centrally",
      "Instant one-click credential deactivation upon employee departure",
      "Zero-trust tenant isolation with PostgreSQL Row-Level Security",
    ],
    surface: "#ffe8dd",
    accent: "#da4d09",
  },
];

const facts: FactItem[] = [
  { title: "Tactical Guides", description: "In-depth engineering notes on NFC, QR protocols & CRM sync" },
  { title: "Zero Fluff", description: "Actionable playbooks written by real product designers and engineers" },
  { title: "Monthly Updates", description: "Fresh industry research delivered directly to your inbox" },
];

const questions: AccordionItem[] = [
  [
    "Can I republish or quote Zuntra research?",
    "Yes. All of our articles, survey statistics, and technical guides can be cited and quoted with proper attribution and a link back to zuntra.cards.",
  ],
  [
    "How do I submit a guest post or case study?",
    "If your organization has deployed Zuntra cards and doubled conference pipeline, we'd love to feature your story. Reach out to our team at partners@zuntra.com.",
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

export const BlogPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    updatePageSEO({
      title: "Blog & Identity Research — Zuntra",
      description:
        "Tactical playbooks, technical hardware deep-dives on NFC smart cards, and industry research on the transition to living digital business cards.",
      canonicalPath: "/blog",
    });
  }, []);

  const categories = ["all", "Industry Research", "Hardware", "Growth & Sales", "Enterprise"];

  const filteredPosts =
    filter === "all" ? posts : posts.filter((p) => p.category === filter);

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
        {/* Blog Hero */}
        <section
          style={{
            position: "relative",
            minHeight: "560px",
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
              <span style={{ color: "#395afa", fontWeight: 700 }}>Blog & Stories</span>
            </div>

            <div>
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                Research & Tactical Guides
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
              Stories for modern
              <br />
              networking leaders.
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
              Analysis, hardware engineering deep dives, and tactical networking playbooks from the team building living digital business cards.
            </p>

            {/* Filter Pills */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "999px",
                    border: "1px solid #d3d9e5",
                    background: filter === cat ? "#12141b" : "#ffffff",
                    color: filter === cat ? "#ffffff" : "#67675e",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                  }}
                >
                  {cat === "all" ? "All Articles" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Article Cards Grid */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                style={{
                  backgroundColor: post.surface,
                  border: "0.8px solid #d3d9e5",
                  borderRadius: "32px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "340px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: post.accent,
                        color: "#ffffff",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "12px", color: "#67675e", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin: "0 0 14px",
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "#12141b",
                      lineHeight: 1.25,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "#515148",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "18px", marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <strong style={{ display: "block", fontSize: "13px", color: "#12141b" }}>{post.author}</strong>
                    <span style={{ fontSize: "11px", color: "#67675e" }}>{post.role}</span>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: post.accent, display: "flex", alignItems: "center", gap: "4px" }}>
                    Read article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Article Reading Modal */}
        {selectedPost && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setSelectedPost(null)}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "760px",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "#ffffff",
                borderRadius: "32px",
                padding: "40px",
                border: "1px solid #d3d9e5",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: selectedPost.accent,
                    color: "#ffffff",
                  }}
                >
                  {selectedPost.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #d3d9e5",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#12141b", lineHeight: 1.2, margin: "0 0 16px" }}>
                {selectedPost.title}
              </h2>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "13px", color: "#67675e", marginBottom: "32px", borderBottom: "1px solid #eef0f3", paddingBottom: "16px" }}>
                <span>By {selectedPost.author} ({selectedPost.role})</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "16px", lineHeight: 1.7, color: "#34342e", marginBottom: "36px" }}>
                {selectedPost.content.map((par, i) => (
                  <p key={i} style={{ margin: 0 }}>{par}</p>
                ))}
              </div>

              <div style={{ background: "#f8f9fc", borderRadius: "20px", padding: "24px", border: "1px solid #e5e7eb" }}>
                <strong style={{ display: "block", fontSize: "14px", color: "#12141b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  Key Architectural Takeaways:
                </strong>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedPost.takeaways.map((t) => (
                    <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#34342e" }}>
                      <CheckCircle2 size={16} color="#1ba673" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Quote Block */}
        <blockquote>
          <span>“The future of identity is not in app stores. It is wherever people meet.”</span>
        </blockquote>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Questions
            <br />
            about our
            <br />
            research.
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
              Ready to start
              <br />
              networking smarter?
            </h2>
            <p>
              Build your verified card in 60 seconds and experience the difference.
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

export default BlogPage;
