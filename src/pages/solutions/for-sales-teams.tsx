import { PageLayout } from "../PageLayout";

export default function ForSalesTeamsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Sales Teams"
      badge="Revenue Enablement"
      description="Accelerate pipeline velocity, eliminate trade show lead loss, and automatically log in-person interactions directly into Salesforce or HubSpot."
      stats={[
  {
    "label": "Lead Capture Rate",
    "value": "+340%"
  },
  {
    "label": "Follow-up Latency",
    "value": "< 5 Mins"
  },
  {
    "label": "CRM Sync Accuracy",
    "value": "100%"
  },
  {
    "label": "Meeting Close Rate",
    "value": "+22%"
  }
]}
      features={[
  {
    "title": "Two-Way Reciprocal Capture",
    "description": "Prospects tap your card and instantly exchange their contact details right back to your sales rep.",
    "tag": "Capture"
  },
  {
    "title": "Instant CRM Push",
    "description": "Leads automatically flow into Salesforce, HubSpot, or Zoho with custom sales territory tagging.",
    "tag": "Automation"
  },
  {
    "title": "Meeting Scheduling Embed",
    "description": "Include your calendar link right on the card to book demo follow-ups while standing face-to-face.",
    "tag": "Acceleration"
  }
]}
      highlights={[
  {
    "title": "Trade Show Advantage",
    "items": [
      "Never type paper business cards into a spreadsheet again",
      "Qualify leads on the show floor with custom dropdown tags",
      "Automatic trigger of personalized email follow-up sequence",
      "Track which reps generated the most prospect connections"
    ]
  },
  {
    "title": "Sales Management",
    "items": [
      "Team scan telemetry and performance leaderboards",
      "Monitor outbound networking activity in real time",
      "Consistent presentation of current marketing collateral",
      "Unified company pitch decks embedded on reps' cards"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForSalesTeamsPage };
