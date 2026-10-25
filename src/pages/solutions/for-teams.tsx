import { PageLayout } from "../PageLayout";

export default function ForTeamsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Teams"
      badge="Workspaces & Departments"
      description="Scalable team workspace management with locked brand templates, bulk CSV employee provisioning, and department-level governance."
      stats={[
  {
    "label": "Bulk Invite Speed",
    "value": "500 Users / min"
  },
  {
    "label": "Brand Compliance",
    "value": "100%"
  },
  {
    "label": "Department Groups",
    "value": "Unlimited"
  },
  {
    "label": "Team Lead Pool",
    "value": "Centralized"
  }
]}
      features={[
  {
    "title": "Locked Template Studio",
    "description": "Design corporate templates with locked logo, disclaimer, and colors while letting staff edit their bio.",
    "tag": "Governance"
  },
  {
    "title": "CSV & Directory Sync",
    "description": "Invite dozens or hundreds of employees at once with automatic card generation from CSV rosters.",
    "tag": "Efficiency"
  },
  {
    "title": "Department Partitioning",
    "description": "Segment by Engineering, Sales, Marketing, and Regional branches with designated sub-admins.",
    "tag": "Structure"
  }
]}
      highlights={[
  {
    "title": "Team Management Features",
    "items": [
      "Role-based access (Owner, Admin, Member)",
      "One-click card deactivation upon employee departure",
      "Aggregated team lead export to CSV or CRM",
      "Team analytics leaderboard and top performers"
    ]
  },
  {
    "title": "Unified Onboarding",
    "items": [
      "Welcome email invitations with instant magic links",
      "Employees claim and customize their card in seconds",
      "Automatic Apple Wallet pass download link",
      "Bulk NFC card orders delivered pre-programmed"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForTeamsPage };
