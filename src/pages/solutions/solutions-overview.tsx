import { PageLayout } from "../PageLayout";

export default function SolutionsOverviewPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="Solutions Overview"
      badge="Industry Solutions Matrix"
      description="Tailored digital identity architecture for solo professionals, fast-moving startups, high-volume sales forces, and global enterprise organizations."
      stats={[
  {
    "label": "Organizations Powered",
    "value": "1,200+"
  },
  {
    "label": "Team Adoption",
    "value": "96%"
  },
  {
    "label": "Lead Response Time",
    "value": "-65%"
  },
  {
    "label": "Paper Card Costs",
    "value": "-100%"
  }
]}
      features={[
  {
    "title": "Individuals & Creators",
    "description": "Stand out with a modern interactive portfolio and zero-friction contact exchange.",
    "tag": "Solo"
  },
  {
    "title": "Growing Sales Teams",
    "description": "Accelerate pipeline velocity, sync leads to CRM in seconds, and track team networking ROI.",
    "tag": "Sales"
  },
  {
    "title": "Enterprise & Events",
    "description": "Centralized governance, automated directory sync, and unified global brand compliance.",
    "tag": "Enterprise"
  }
]}
      highlights={[
  {
    "title": "Tailored For Every Role",
    "items": [
      "Solopreneurs & independent consultants",
      "B2B account executives and SDRs",
      "Real estate brokers and property showcases",
      "Event organizers and summit directors"
    ]
  },
  {
    "title": "Scalable Architecture",
    "items": [
      "Start free in 2 minutes as an individual",
      "Upgrade to team workspaces anytime with zero downtime",
      "Deploy across 5,000+ employees with SCIM directory sync",
      "Custom SLAs and dedicated account management"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { SolutionsOverviewPage };
