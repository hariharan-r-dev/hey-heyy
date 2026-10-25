import { PageLayout } from "../PageLayout";

export default function Careers(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Careers"
      badge="We're Hiring"
      description="Join us in redefining the future of digital identity, sustainable hardware, and professional human connection. We are a remote-first team."
      stats={[
  {
    "label": "Team Distribution",
    "value": "100% Remote"
  },
  {
    "label": "Open Positions",
    "value": "8 Roles"
  },
  {
    "label": "PTO Policy",
    "value": "Flexible & Unlimited"
  },
  {
    "label": "Equity Grants",
    "value": "Every Full-Time Role"
  }
]}
      features={[
  {
    "title": "Remote-First Freedom",
    "description": "Work from wherever you are happiest and most productive, with a generous home office setup stipend.",
    "tag": "Culture"
  },
  {
    "title": "High-Impact Ownership",
    "description": "Small, autonomous squads where your code and designs ship to hundreds of thousands of users every week.",
    "tag": "Impact"
  },
  {
    "title": "Comprehensive Health & Wellness",
    "description": "Top-tier health, dental, vision coverage, mental wellness allowance, and 401(k) retirement matching.",
    "tag": "Benefits"
  }
]}
      highlights={[
  {
    "title": "Open Roles",
    "items": [
      "Senior Full-Stack Engineer (React, TypeScript, Node.js)",
      "Staff Hardware & Industrial Designer (NFC & sustainable materials)",
      "Product Marketing Manager - Enterprise Solutions",
      "Lead UX/UI Designer (Design Systems & Mobile Web)",
      "Enterprise Account Executive - East Coast",
      "Customer Success Specialist (Global Remote)"
    ]
  },
  {
    "title": "Our Hiring Process",
    "items": [
      "1. Initial 30-min culture & values conversation",
      "2. Deep-dive technical or portfolio review with squad lead",
      "3. Paid practical take-home or collaborative session",
      "4. Founder chat & competitive offer package"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { Careers };
