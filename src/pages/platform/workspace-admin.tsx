import { PageLayout } from "../PageLayout";

export default function WorkspaceAdminPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="Workspace Admin"
      badge="Organizational Control"
      description="Centralized console for managing corporate digital identities, employee permissions, card lifecycles, and security governance."
      stats={[
  {
    "label": "Admin Console",
    "value": "Enterprise-Ready"
  },
  {
    "label": "Role Hierarchy",
    "value": "Owner / Admin / Member"
  },
  {
    "label": "Audit Logs",
    "value": "Full Historical Tracking"
  },
  {
    "label": "Deactivation Speed",
    "value": "Instant"
  }
]}
      features={[
  {
    "title": "Department Structuring",
    "description": "Group users by sales, engineering, executive, and international regional hubs.",
    "tag": "Organization"
  },
  {
    "title": "Roster Provisioning",
    "description": "Import staff records from CSV spreadsheets or synchronize via SCIM protocols.",
    "tag": "Provisioning"
  },
  {
    "title": "Security & Access Control",
    "description": "Configure multi-factor authentication, IP restrictions, and administrative roles.",
    "tag": "Governance"
  }
]}
      highlights={[
  {
    "title": "Admin Capabilities",
    "items": [
      "One-click instant card deactivation upon employee departure",
      "Reassign hardware NFC cards to new incoming team members",
      "Enforce mandatory field updates across all company cards",
      "Export consolidated team contact engagement reports"
    ]
  },
  {
    "title": "Billing & Licensing",
    "items": [
      "Unified annual invoicing with purchase order support",
      "Self-service seat additions and license reallocations",
      "Track active vs. unclaimed employee card invitations",
      "Detailed monthly usage breakdown and ROI metrics"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { WorkspaceAdminPage };
