import { PageLayout } from "../PageLayout";

export default function BookDemoPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Book a Demo"
      badge="Enterprise Walkthrough"
      description="Schedule a personalized 25-minute consultation with an enterprise solutions architect to explore custom hardware and team rollouts."
      stats={[
  {
    "label": "Duration",
    "value": "25 Minutes"
  },
  {
    "label": "Format",
    "value": "Live Zoom / Meet"
  },
  {
    "label": "Includes",
    "value": "Custom Hardware Mockup"
  },
  {
    "label": "Tailored For",
    "value": "Teams of 10+"
  }
]}
      features={[
  {
    "title": "Live Workspace Walkthrough",
    "description": "See locked brand template governance, department grouping, and CSV bulk member onboarding in action.",
    "tag": "Console"
  },
  {
    "title": "Custom Hardware Proof",
    "description": "Our design team will prepare a 3D digital proof of your company's custom metal or bamboo NFC cards.",
    "tag": "Design"
  },
  {
    "title": "Security & Procurement Review",
    "description": "Discuss SAML SSO, automated SCIM provisioning, custom domain setup, and enterprise SLA pricing.",
    "tag": "Procurement"
  }
]}
      highlights={[
  {
    "title": "What We Will Cover",
    "items": [
      "Assessment of your current business card spending and waste",
      "Demonstration of two-way reciprocal CRM lead capture into Salesforce/HubSpot",
      "Evaluation of door check-in scanner and summit pass suite for corporate events",
      "Custom volume pricing and sample hardware shipping"
    ]
  },
  {
    "title": "Direct Contact Information",
    "items": [
      "Email: enterprise@zuntra.me",
      "Direct Phone: +1 (800) 555-ZUNTRA",
      "Headquarters: 450 Mission St, San Francisco, CA",
      "Available Monday - Friday across all global timezones"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { BookDemoPage };
