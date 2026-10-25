import { PageLayout } from "../PageLayout";

export default function ContactManagementPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Contact Management"
      badge="Modern Digital Rolodex"
      description="Organize, tag, search, and export every connection you make. Turn spontaneous networking conversations into structured relationships."
      stats={[
  {
    "label": "Max Contacts",
    "value": "Unlimited"
  },
  {
    "label": "Auto-Enrichment",
    "value": "Enabled"
  },
  {
    "label": "Export Formats",
    "value": "CSV / vCard / JSON"
  },
  {
    "label": "Search Latency",
    "value": "< 15ms"
  }
]}
      features={[
  {
    "title": "Reciprocal Lead Capture",
    "description": "When someone receives your card, they can exchange their info back to you with one tap.",
    "tag": "Two-Way"
  },
  {
    "title": "Meeting Notes & Tags",
    "description": "Add private notes, meeting location context, follow-up tags, and interaction timestamps.",
    "tag": "Context"
  },
  {
    "title": "Enrichment & De-duplication",
    "description": "Automatically merges duplicate records and enriches company info, avatars, and social profiles.",
    "tag": "Intelligence"
  }
]}
      highlights={[
  {
    "title": "Power Capabilities",
    "items": [
      "Fast global search across names, tags, and notes",
      "Customizable tag labels (e.g., VIP, Investor, Client)",
      "One-click export to Google Contacts or Outlook",
      "Automatic reminder alerts for follow-up outreach"
    ]
  },
  {
    "title": "Team Collaboration",
    "items": [
      "Shared team contact pools for enterprise plans",
      "Track which sales rep initiated the connection",
      "Granular export permissions for compliance",
      "Complete audit history of contact modifications"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ContactManagementPage };
