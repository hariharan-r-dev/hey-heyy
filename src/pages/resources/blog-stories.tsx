import { PageLayout } from "../PageLayout";

export default function BlogStoriesPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Blog & Stories"
      badge="Thought Leadership"
      description="Insights on future of work, event technology, sustainable corporate practices, and high-conversion networking tactics."
      stats={[
  {
    "label": "Monthly Readers",
    "value": "65,000+"
  },
  {
    "label": "Publish Cadence",
    "value": "Weekly"
  },
  {
    "label": "Author Network",
    "value": "Design & Tech Leaders"
  },
  {
    "label": "Topics Covered",
    "value": "Sales / Tech / Design"
  }
]}
      features={[
  {
    "title": "Modern Work & Identity",
    "description": "How distributed teams maintain strong personal connections in a digital-first era.",
    "tag": "Future of Work"
  },
  {
    "title": "Event Tech In-Depth",
    "description": "Behind-the-scenes engineering of door check-in scanners and high-traffic summit passes.",
    "tag": "Event Tech"
  },
  {
    "title": "Customer Success Spotlights",
    "description": "Interviews with founders and sales VPs who doubled their trade show pipeline with Zuntra.",
    "tag": "Case Studies"
  }
]}
      highlights={[
  {
    "title": "Recent Articles",
    "items": [
      "Why 90% of Paper Business Cards End Up in the Trash in 7 Days",
      "The Anatomy of a High-Converting Digital Business Card",
      "How We Scaled Our Door Scanner to 10,000 Attendees with Zero Lag",
      "Digital Wallet Passes: The Underutilized Lockscreen Channel"
    ]
  },
  {
    "title": "Subscribe to Our Newsletter",
    "items": [
      "Curated bi-weekly digests of modern sales and networking tactics",
      "Exclusive early access to new template releases and hardware finishes",
      "Invitations to live design workshops and product webinars",
      "Unsubscribe anytime with a single click"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { BlogStoriesPage };
