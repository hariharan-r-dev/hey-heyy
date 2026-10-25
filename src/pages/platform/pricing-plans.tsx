import { PageLayout } from "../PageLayout";

export default function PricingPlansPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="Pricing Plans"
      badge="Transparent Tiers"
      description="Simple, predictable plans designed for individual professionals, scaling businesses, and multinational enterprises."
      stats={[
  {
    "label": "Starter Tier",
    "value": "Free Forever"
  },
  {
    "label": "Pro Monthly",
    "value": "$8 / mo"
  },
  {
    "label": "Team Plan",
    "value": "$15 / user / mo"
  },
  {
    "label": "Contract Requirement",
    "value": "Cancel Anytime"
  }
]}
      features={[
  {
    "title": "Starter (Free)",
    "description": "1 Digital Business Card, standard QR code, social links, and native .vcf download. Free forever.",
    "tag": "Free"
  },
  {
    "title": "Pro ($8/mo)",
    "description": "Unlimited cards, custom color themes, video embeds, basic scan telemetry, and reciprocal lead capture.",
    "tag": "Popular"
  },
  {
    "title": "Team ($15/seat/mo)",
    "description": "Centralized workspace admin, locked brand templates, CSV bulk provisioning, and CRM integrations.",
    "tag": "Business"
  }
]}
      highlights={[
  {
    "title": "Enterprise Custom Tier",
    "items": [
      "Custom volume pricing for 50+ users",
      "SAML 2.0 Single Sign-On (Okta / Entra ID)",
      "Automated SCIM user provisioning",
      "Custom corporate domain hosting",
      "Dedicated account manager and SLAs"
    ]
  },
  {
    "title": "Frequently Asked Pricing Questions",
    "items": [
      "Can I switch plans anytime? Yes, prorated immediately.",
      "Do recipients pay anything? Never. All card views are 100% free.",
      "Are physical NFC cards included? Available as add-on or in bundles.",
      "Is there a non-profit discount? Yes, 25% off for verified non-profits."
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { PricingPlansPage };
