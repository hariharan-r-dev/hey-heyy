import { PageLayout } from "../PageLayout";

export default function ProductOverviewPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Product Overview"
      badge="Connected Identity Suite"
      description="The complete infrastructure for digital business cards, event summit passes, smart NFC hardware, and two-way reciprocal lead capture."
      stats={[
  {
    "label": "Active Cards Issued",
    "value": "250K+"
  },
  {
    "label": "Paper Saved (Lbs)",
    "value": "48,000+"
  },
  {
    "label": "Contact Save Rate",
    "value": "87%"
  },
  {
    "label": "CRM Sync Latency",
    "value": "< 1.2s"
  }
]}
      features={[
  {
    "title": "Digital Card Engine",
    "description": "Zero-friction mobile cards loading in <1.2s with tap-to-dial, email, and native .vcf download.",
    "tag": "Core"
  },
  {
    "title": "Smart NFC Hardware",
    "description": "Tap any modern smartphone to instantly broadcast your verified profile without requiring an app.",
    "tag": "Physical"
  },
  {
    "title": "Enterprise Governance",
    "description": "Centralized workspace admin with locked templates, SCIM provisioning, and department permissions.",
    "tag": "Admin"
  }
]}
      highlights={[
  {
    "title": "Everything Included",
    "items": [
      "Unlimited digital card updates anytime",
      "Dynamic QR codes with real-time redirection",
      "Apple Wallet and Google Wallet passes",
      "Native HubSpot and Salesforce CRM integration"
    ]
  },
  {
    "title": "Security & Privacy",
    "items": [
      "End-to-end TLS 1.3 encryption",
      "SOC-2 Type II readiness",
      "Zero tracking of recipient personal devices",
      "GDPR and CCPA full compliance"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ProductOverviewPage };
