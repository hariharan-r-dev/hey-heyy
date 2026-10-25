import { PageLayout } from "../PageLayout";

export default function LeadCaptureCrmPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Lead Capture CRM"
      badge="Pipeline Acceleration"
      description="Direct real-time synchronization between in-person interactions and your sales CRM. Never lose a conference lead again."
      stats={[
  {
    "label": "CRM Sync Time",
    "value": "< 2 Seconds"
  },
  {
    "label": "Supported CRMs",
    "value": "HubSpot / Salesforce / Zoho"
  },
  {
    "label": "Field Customization",
    "value": "Unlimited"
  },
  {
    "label": "Lead Capture Rate",
    "value": "3.4x"
  }
]}
      features={[
  {
    "title": "Native CRM Connectors",
    "description": "Seamless bidirectional syncing with HubSpot, Salesforce, Pipedrive, and Zapier.",
    "tag": "Integrations"
  },
  {
    "title": "Custom Intake Fields",
    "description": "Ask custom qualifying questions (e.g. Budget, Project Timeline, Company Size) on the spot.",
    "tag": "Qualification"
  },
  {
    "title": "Instant Notification Webhooks",
    "description": "Send immediate Slack or email alerts to reps whenever a qualified lead submits information.",
    "tag": "Real-time"
  }
]}
      highlights={[
  {
    "title": "Sales Workflow",
    "items": [
      "Capture photo, name, email, phone, and LinkedIn URL",
      "Auto-assign leads based on geographic territory",
      "Trigger automated follow-up email drip sequences",
      "Eliminate manual business card data entry forever"
    ]
  },
  {
    "title": "Enterprise Compliance",
    "items": [
      "Explicit opt-in consent checkboxes for GDPR",
      "Encrypted storage of sensitive contact data",
      "SOC-2 compliant data transit pipeline",
      "Customizable data retention and deletion policies"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { LeadCaptureCrmPage };
