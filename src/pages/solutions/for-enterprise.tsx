import { PageLayout } from "../PageLayout";

export default function ForEnterprisePage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Enterprise"
      badge="Mission-Critical Governance"
      description="Enterprise-grade digital identity infrastructure with Okta/Azure SSO, automated SCIM provisioning, custom domains, and SOC-2 compliance."
      stats={[
  {
    "label": "SLA Guarantee",
    "value": "99.99%"
  },
  {
    "label": "Security Compliance",
    "value": "SOC-2 Ready"
  },
  {
    "label": "SSO Protocol",
    "value": "SAML 2.0 / OIDC"
  },
  {
    "label": "Dedicated Support",
    "value": "24/7 Priority"
  }
]}
      features={[
  {
    "title": "Automated SCIM Sync",
    "description": "Auto-provision cards when new hires join in Okta, Workday, or Azure AD, and revoke instantly upon exit.",
    "tag": "Identity"
  },
  {
    "title": "Custom Enterprise Domain",
    "description": "Host all cards on your own verified corporate domain (e.g., cards.yourcompany.com).",
    "tag": "White-label"
  },
  {
    "title": "Dedicated Solution Architect",
    "description": "Personal onboarding specialist, custom integration engineering, and enterprise SLAs.",
    "tag": "White-Glove"
  }
]}
      highlights={[
  {
    "title": "Enterprise Security",
    "items": [
      "SAML 2.0 Single Sign-On (Okta, Microsoft Entra ID)",
      "Role-Based Access Control (RBAC) with audit logs",
      "Data residency options (US, EU, APAC regions)",
      "Annual third-party penetration testing reports"
    ]
  },
  {
    "title": "Global Deployment",
    "items": [
      "Support for 10,000+ employees across 50 countries",
      "Centralized corporate billing and procurement invoicing",
      "Custom laser-engraved metal NFC cards with Pantone matching",
      "Dedicated executive review sessions and roadmap input"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForEnterprisePage };
