import { PageLayout } from "../PageLayout";

export default function PrivacyPolicyPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Privacy Policy"
      badge="Official Legal Terms"
      description="ZUNTRA is committed to handling personal information responsibly and transparently. This Privacy Policy explains our data collection and protection standards."
      stats={[
  {
    "label": "Last Updated",
    "value": "October 2026"
  },
  {
    "label": "Third-Party Ad Trackers",
    "value": "Zero (0)"
  },
  {
    "label": "GDPR & CCPA",
    "value": "Fully Compliant"
  },
  {
    "label": "Data Monetization",
    "value": "Never"
  }
]}
      features={[
  {
    "title": "Zero Data Sale Guarantee",
    "description": "We never sell, rent, or trade your personal information or your contact network to advertising brokers.",
    "tag": "Commitment"
  },
  {
    "title": "Recipient Data Protection",
    "description": "People who view or scan your card are not fingerprinted, tracked, or forced into unwanted marketing lists.",
    "tag": "Visitor Privacy"
  },
  {
    "title": "Full Data Ownership",
    "description": "You can request complete export or deletion of your cards, captured leads, and account data at any time.",
    "tag": "Control"
  }
]}
      highlights={[
  {
    "title": "Information We Collect",
    "items": [
      "Account registration details (name, email, password hash)",
      "Card profile information you choose to publicly display",
      "Reciprocal lead exchange submissions where consent is given",
      "Aggregated, anonymized scan telemetry for analytics"
    ]
  },
  {
    "title": "Your Privacy Rights",
    "items": [
      "Right to access and review all stored data",
      "Right to rectify inaccurate contact information",
      "Right to complete erasure ('Right to be Forgotten')",
      "Right to data portability in standard JSON/CSV format"
    ]
  }
]}
      sections={[
  {
    "heading": "1. Introduction",
    "body": "This Privacy Policy explains how ZUNTRA and its applicable entities collect, use, and process personal information when you interact with our website, services, events, forms, and digital identity platforms. If you have questions about this policy or wish to exercise an applicable privacy right, please contact us at privacy@zuntra.me."
  },
  {
    "heading": "2. Information We Collect",
    "body": "We collect information that you voluntarily provide when creating an account, designing a digital card, registering for an event, or submitting inquiries. This may include your name, business email, job title, phone numbers, social media links, and company affiliation. When you scan an NFC card or dynamic QR code, we record basic telemetry including timestamp, broad geographic region (city level), and browser user agent to provide scan analytics to the cardholder."
  },
  {
    "heading": "3. How We Use Personal Information",
    "body": "We use your data solely to deliver, maintain, and enhance the Zuntra platform. This includes rendering your public digital card, processing reciprocal lead exchanges, fulfilling orders for physical NFC cards, and preventing fraudulent usage. We do NOT monetize, license, or sell personal data or contact networks to third-party ad networks under any circumstances."
  },
  {
    "heading": "4. Data Security & Storage",
    "body": "All communication between your device and Zuntra is encrypted using Transport Layer Security (TLS 1.3). Data stored at rest is encrypted using AES-256 standard encryption. We enforce strict role-based access controls and principle of least privilege across our internal infrastructure."
  },
  {
    "heading": "5. Contact & Privacy Requests",
    "body": "To exercise any rights under GDPR, CCPA, or applicable local privacy laws, including requests to access, modify, or permanently delete your data, please contact our Data Protection Officer at privacy@zuntra.me or by mail at: ZUNTRA Legal & Privacy, 450 Mission St, San Francisco, CA 94105."
  }
]}
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { PrivacyPolicyPage };
