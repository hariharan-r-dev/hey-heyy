import { PageLayout } from "../PageLayout";

export default function GuidesTutorialsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Guides & Tutorials"
      badge="Step-by-Step Training"
      description="Detailed video and written walkthroughs covering everything from basic card setup to enterprise CRM webhooks and Apple Wallet passes."
      stats={[
  {
    "label": "Setup Guides",
    "value": "24 Step-by-Step"
  },
  {
    "label": "Avg Tutorial Length",
    "value": "3 Minutes"
  },
  {
    "label": "Difficulty Range",
    "value": "Beginner to Dev"
  },
  {
    "label": "Code Snippets",
    "value": "Available"
  }
]}
      features={[
  {
    "title": "iPhone & Android NFC Setup",
    "description": "Learn exact NFC sensor antenna locations on iPhone 12-16 and top Samsung Galaxy devices.",
    "tag": "Hardware"
  },
  {
    "title": "Installing Email Signatures",
    "description": "Step-by-step instructions for copying signatures into Outlook, Gmail, and Apple Mail.",
    "tag": "Email"
  },
  {
    "title": "HubSpot & Salesforce Sync",
    "description": "Configure API tokens, lead mapping fields, and automated lead owner assignment rules.",
    "tag": "CRM"
  }
]}
      highlights={[
  {
    "title": "Popular Walkthroughs",
    "items": [
      "How to create your first digital card in under 3 minutes",
      "Embedding your Calendly widget directly onto your card",
      "Setting up a conference admission ticket scanner on iOS",
      "Using CSV bulk import to issue 50 employee cards at once"
    ]
  },
  {
    "title": "Developer Guides",
    "items": [
      "Consuming Zuntra Webhooks for real-time lead capture",
      "Building custom card themes with CSS variables",
      "REST API authentication and member provisioning",
      "Integrating dynamic QR codes into custom mobile apps"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { GuidesTutorialsPage };
