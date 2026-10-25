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
import { Building2, MessageSquare, Mail, Send, Check } from "lucide-react";

const A = "/assets";

const contactReasons = [
  {
    icon: Building2,
    title: "Enterprise & Sales",
    description: "Custom multi-tenant deployments, bulk NFC hardware orders, SSO provisioning, and SLA agreements.",
    cta: "Book sales demo",
    href: "mailto:sales@zuntra.com",
    surface: "#eaf6ff",
    accent: "#395afa",
    tag: "Commercial",
  },
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "Questions about your active cards, account configuration, vCard downloads, or billing assistance.",
    cta: "Ask customer engineering",
    href: "mailto:support@zuntra.com",
    surface: "#f0fdb3",
    accent: "#92b301",
    tag: "24/7 Help",
  },
  {
    icon: Mail,
    title: "Partnerships & Press",
    description: "Integration partners, conference badge collaborations, affiliate programs, and media inquiries.",
    cta: "Connect with partnerships",
    href: "mailto:partners@zuntra.com",
    surface: "#ffb8e7",
    accent: "#fd4ec2",
    tag: "Alliances",
  },
];

const facts: FactItem[] = [
  { title: "<2h Response", description: "Dedicated customer engineering team based globally" },
  { title: "Direct Contact", description: "Talk directly with product engineers and architects" },
  { title: "Enterprise Concierge", description: "Custom onboarding and dedicated account managers" },
];

const questions: AccordionItem[] = [
  [
    "How quickly does your team respond to inquiries?",
    "Our customer support and engineering teams operate across multiple time zones and typically respond within two hours during standard business days.",
  ],
  [
    "Can you provide a custom walkthrough for our executive leadership?",
    "Yes. Fill out the contact form or select 'Enterprise & Sales' to schedule a live 20-minute video demonstration tailored to your organization's specific requirements.",
  ],
  [
    "Do you offer custom NFC card printing with our company branding?",
    "Yes. For teams and enterprise accounts, we manufacture custom physical NFC cards in matte black, bamboo, and recycled stainless steel with precision laser engraving or full-color UV print.",
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

export const ContactPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });

  useEffect(() => {
    updatePageSEO({
      title: "Contact Us — Zuntra",
      description:
        "Get in touch with the Zuntra team for enterprise inquiries, sales demos, account support, or partnership opportunities.",
      canonicalPath: "/contact",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setForm({ name: "", email: "", company: "", subject: "general", message: "" });
    }, 1200);
  };

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
        {/* Contact Hero */}
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
              <span style={{ color: "#395afa", fontWeight: 700 }}>Contact Us</span>
            </div>

            <div>
              <StackedBadge color="#395afa" layerColor="#bedffe" className="mb-4">
                We're Here to Help
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
              Let's talk.
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
              Whether you are exploring living cards for your sales team, need assistance with your active account, or want to collaborate, we are here.
            </p>
          </div>
        </section>

        {/* Fact Strip */}
        <FactStrip items={facts} />

        {/* Contact Reason Cards */}
        <section
          className="section"
          style={{
            background: "#fbfbfb",
            borderBottom: "0.8px solid #d3d9e5",
          }}
        >
          <SectionHeading
            title={<>Choose how you'd like to connect</>}
            description="Our specialized teams are available directly to provide prompt, knowledgeable responses."
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
            {contactReasons.map((reason) => {
              const IconComp = reason.icon;
              return (
                <div
                  key={reason.title}
                  style={{
                    backgroundColor: reason.surface,
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
                          background: reason.accent,
                          color: "#ffffff",
                        }}
                      >
                        {reason.tag}
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
                          color: reason.accent,
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
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "#515148",
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>

                  <div style={{ marginTop: "24px" }}>
                    <a
                      href={reason.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: reason.accent,
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      <span>{reason.cta}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section" style={{ background: "#ffffff", borderBottom: "0.8px solid #d3d9e5" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <SectionHeading
              title={<>Send a direct message</>}
              description="Fill out the details below and an identity specialist will be in touch shortly."
            />

            <div
              style={{
                marginTop: "48px",
                background: "#fafafa",
                border: "1px solid #d3d9e5",
                borderRadius: "32px",
                padding: "40px",
              }}
            >
              {formState === "sent" ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "#e5f8ee",
                      color: "#147b52",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 8px", color: "#12141b" }}>
                    Message Sent Successfully
                  </h3>
                  <p style={{ fontSize: "15px", color: "#67675e", margin: "0 0 24px" }}>
                    Thank you for reaching out. We have received your note and will reply within two hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="pill"
                    style={{ minHeight: "44px", padding: "10px 24px", fontSize: "14px" }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#12141b", marginBottom: "6px" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Brooks"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "14px", border: "1px solid #d3d9e5", background: "#ffffff", fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#12141b", marginBottom: "6px" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@meridian.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "14px", border: "1px solid #d3d9e5", background: "#ffffff", fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#12141b", marginBottom: "6px" }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Meridian Capital"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "14px", border: "1px solid #d3d9e5", background: "#ffffff", fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#12141b", marginBottom: "6px" }}>
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "14px", border: "1px solid #d3d9e5", background: "#ffffff", fontSize: "14px" }}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Enterprise Pricing</option>
                        <option value="support">Customer Support</option>
                        <option value="partners">Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#12141b", marginBottom: "6px" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can assist you..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "14px", border: "1px solid #d3d9e5", background: "#ffffff", fontSize: "14px", resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="pill"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "12px",
                      opacity: formState === "sending" ? 0.7 : 1,
                    }}
                  >
                    <Send size={15} />
                    <span>{formState === "sending" ? "Transmitting note..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq section" id="faq">
          <h2>
            Frequently
            <br />
            asked
            <br />
            questions.
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
              your business cards?
            </h2>
            <p>
              Join thousands of professionals sharing living identities with zero app friction.
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

export default ContactPage;
