import { PageLayout } from "../PageLayout";

export default function AboutZuntraPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="About Zuntra"
      badge="Our Story & Vision"
      description="Born from frustration with outdated paper business cards and clunky networking apps, Zuntra was built to make handshakes permanent."
      stats={[
  {
    "label": "Global Handshakes",
    "value": "5.2M+"
  },
  {
    "label": "Team Members",
    "value": "35+"
  },
  {
    "label": "Carbon Offset",
    "value": "100%"
  },
  {
    "label": "Net Promoter Score",
    "value": "76"
  }
]}
      features={[
  {
    "title": "The Problem We Saw",
    "description": "Over 88% of paper business cards are tossed within a week, wasting millions of trees and billions in ad spend.",
    "tag": "Origin"
  },
  {
    "title": "The Modern Alternative",
    "description": "One elegant smart card that lasts for years, updates dynamically in seconds, and saves directly to phone contacts.",
    "tag": "Innovation"
  },
  {
    "title": "Human Connection First",
    "description": "Technology shouldn't get in the way of a conversation—it should quietly ensure that the connection lasts.",
    "tag": "Vision"
  }
]}
      highlights={[
  {
    "title": "Our Core Values",
    "items": [
      "Obsession with simplicity: If it requires a manual, we rebuild it",
      "Respect for privacy: Zero third-party trackers or ad targeting",
      "Sustainable craft: Using recycled ocean plastics and FSC bamboo",
      "Continuous improvement: Weekly feature updates and customer-driven roadmap"
    ]
  },
  {
    "title": "Leadership & Backing",
    "items": [
      "Founded by veteran product designers and enterprise SaaS engineers",
      "Experienced advisors across cybersecurity, events, and retail",
      "Community of over 250,000 cardholders worldwide",
      "Committed 1% of profits to global reforestation projects"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { AboutZuntraPage };
