import { PageLayout } from "../PageLayout";

export default function CompanyOverviewPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Company Overview"
      badge="The Future of Connection"
      description="Zuntra is pioneering the modern digital identity layer—connecting professionals, high-performing teams, and events with zero paper waste."
      stats={[
  {
    "label": "Founded",
    "value": "2024"
  },
  {
    "label": "Cards Active Globally",
    "value": "250,000+"
  },
  {
    "label": "Countries Represented",
    "value": "85+"
  },
  {
    "label": "Trees Saved Annually",
    "value": "1,400+"
  }
]}
      features={[
  {
    "title": "Our Mission",
    "description": "To make every professional connection seamless, memorable, and environmentally sustainable.",
    "tag": "Mission"
  },
  {
    "title": "Design Excellence",
    "description": "Crafted with obsessively refined aesthetics, tactile hardware, and instant mobile-first web performance.",
    "tag": "Craft"
  },
  {
    "title": "Privacy By Default",
    "description": "We believe your personal network is your most valuable asset and must never be sold or monetized.",
    "tag": "Integrity"
  }
]}
      highlights={[
  {
    "title": "Core Company Principles",
    "items": [
      "Zero friction: Never force recipients to install software or register",
      "Sustainable innovation: Eliminate the 100 billion paper cards printed annually",
      "Enterprise-grade reliability: 99.99% uptime with SOC-2 standard controls",
      "Delightful aesthetics: Beautiful typography, balanced proportions, and fluid motion"
    ]
  },
  {
    "title": "Global Presence",
    "items": [
      "Headquarters in San Francisco, CA with distributed hubs globally",
      "Certified carbon-neutral hardware manufacturing facilities",
      "Trusted by Fortune 500 enterprises and solo founders alike",
      "Backed by leading investors in SaaS and sustainable hardware"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { CompanyOverviewPage };
