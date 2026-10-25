import { PageLayout } from "../PageLayout";

export default function EmailSignaturesPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Email Signatures"
      badge="Omnichannel Brand Hub"
      description="Generate consistent, clickable HTML email signatures with embedded digital card QR codes, social icons, and promotional banners for your entire team."
      stats={[
  {
    "label": "Supported Clients",
    "value": "Gmail/Outlook/Apple"
  },
  {
    "label": "Setup Time",
    "value": "60 Seconds"
  },
  {
    "label": "Team Consistency",
    "value": "100%"
  },
  {
    "label": "Click-Through Lift",
    "value": "+28%"
  }
]}
      features={[
  {
    "title": "One-Click Install",
    "description": "Simply copy-paste into Apple Mail, Google Workspace, Microsoft 365, or Superhuman.",
    "tag": "Universal"
  },
  {
    "title": "Dynamic Sync",
    "description": "When an employee updates their phone number or title, their email signature updates automatically.",
    "tag": "Automated"
  },
  {
    "title": "Clickable Promotional Banners",
    "description": "Add announcement banners for upcoming product launches, webinars, or funding news.",
    "tag": "Marketing"
  }
]}
      highlights={[
  {
    "title": "Signature Components",
    "items": [
      "High-res headshot or company avatar",
      "Direct tap-to-call and meeting booking links",
      "Customized corporate legal disclaimers",
      "Live digital business card thumbnail link"
    ]
  },
  {
    "title": "Admin Management",
    "items": [
      "Central template enforcement across all staff",
      "Google Workspace directory integration",
      "Automatic role and phone variable substitution",
      "Track aggregate clicks across team emails"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { EmailSignaturesPage };
