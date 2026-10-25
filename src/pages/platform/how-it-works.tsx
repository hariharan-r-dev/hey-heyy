import { PageLayout } from "../PageLayout";

export default function HowItWorksPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="How It Works"
      badge="Frictionless Architecture"
      description="Discover how Zuntra transforms physical networking into verified digital connections in three simple, intuitive steps."
      stats={[
  {
    "label": "Step 1 Time",
    "value": "60 Seconds"
  },
  {
    "label": "Step 2 Action",
    "value": "Tap or Scan"
  },
  {
    "label": "Step 3 Result",
    "value": "Contact Saved"
  },
  {
    "label": "Recipient App Required",
    "value": "Zero"
  }
]}
      features={[
  {
    "title": "1. Create Your Profile",
    "description": "Choose your layout template, upload your avatar, add your direct contact details, and link your key media.",
    "tag": "Setup"
  },
  {
    "title": "2. Tap or Present QR",
    "description": "Tap your NFC card on any smartphone or present your dynamic high-contrast QR code.",
    "tag": "Share"
  },
  {
    "title": "3. Frictionless Exchange",
    "description": "The recipient taps 'Save Contact' to download your .vcf file, and can optionally send their info right back.",
    "tag": "Connect"
  }
]}
      highlights={[
  {
    "title": "The Zero-App Advantage",
    "items": [
      "Recipients do NOT need to download Zuntra or create an account",
      "Works instantly via standard mobile web browsers (Safari, Chrome)",
      "Instant native dialer, SMS, WhatsApp, and email integration",
      "Cached for instant performance even in poor conference Wi-Fi"
    ]
  },
  {
    "title": "Continuous Synchronicity",
    "items": [
      "Edit your phone or job title anytime in the dashboard",
      "Every card already shared updates automatically in real time",
      "View scan counts and visitor engagement telemetry",
      "Export new leads directly to CRM or spreadsheets"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { HowItWorksPage };
