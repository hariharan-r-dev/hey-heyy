import { PageLayout } from "../PageLayout";

export default function HelpCenterPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Help Center"
      badge="Support Knowledgebase"
      description="Searchable documentation covering account management, hardware troubleshooting, billing, privacy settings, and feature FAQs."
      stats={[
  {
    "label": "Knowledge Base Articles",
    "value": "200+"
  },
  {
    "label": "First Contact Resolution",
    "value": "94%"
  },
  {
    "label": "Average Search Time",
    "value": "< 5s"
  },
  {
    "label": "Support Availability",
    "value": "24/7 Portal"
  }
]}
      features={[
  {
    "title": "Account & Profile",
    "description": "Changing passwords, custom vanity URLs, editing email addresses, and deleting cards.",
    "tag": "Account"
  },
  {
    "title": "Hardware Troubleshooting",
    "description": "Resolving NFC scan issues, metal phone case interference, and card reprogramming.",
    "tag": "Hardware"
  },
  {
    "title": "Billing & Subscriptions",
    "description": "Upgrading plans, downloading VAT invoices, updating credit cards, and cancellation.",
    "tag": "Billing"
  }
]}
      highlights={[
  {
    "title": "Top Support Topics",
    "items": [
      "Why isn't my phone detecting the NFC card tap?",
      "How do I save a card to my iPhone Apple Wallet?",
      "Can I change my card URL without breaking my physical card?",
      "How do I export captured leads to an Excel spreadsheet?"
    ]
  },
  {
    "title": "Self-Service Diagnostics",
    "items": [
      "Automated NFC compatibility device checker",
      "Instant card URL health and SSL status verification",
      "Subscription status and seat allocation tool",
      "Direct link to submit a ticket to technical support"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { HelpCenterPage };
