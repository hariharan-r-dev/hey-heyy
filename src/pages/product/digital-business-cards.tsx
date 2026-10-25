import { PageLayout } from "../PageLayout";

export default function DigitalBusinessCardsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Digital Business Cards"
      badge="Business 3.0 Identity"
      description="Upgrade your first impression with interactive, media-rich digital business cards designed for modern executives, founders, and creators."
      stats={[
  {
    "label": "Load Time",
    "value": "<1.2s"
  },
  {
    "label": "App Download Required",
    "value": "0%"
  },
  {
    "label": "Conversion Lift",
    "value": "+34%"
  },
  {
    "label": "Supported Devices",
    "value": "99.8%"
  }
]}
      features={[
  {
    "title": "Native .vcf Download",
    "description": "Recipients tap once to save your complete name, company, direct phone, email, and photo into iOS or Android contacts.",
    "tag": "Frictionless"
  },
  {
    "title": "Multi-Identity Profiles",
    "description": "Switch between your Executive B2B card, Creator portfolio, or personal networking profile in one tap.",
    "tag": "Versatile"
  },
  {
    "title": "Embedded Rich Media",
    "description": "Embed your latest product video, Calendly booking widget, pitch deck PDF, or social links directly onto your card.",
    "tag": "Interactive"
  }
]}
      highlights={[
  {
    "title": "Key Card Features",
    "items": [
      "Tap-to-save contact file (.vcf)",
      "Reciprocal lead exchange popup modal",
      "Custom color palette & font pairings",
      "Full-screen QR code dock for dim lighting"
    ]
  },
  {
    "title": "Zero Friction Design",
    "items": [
      "No app required for anyone receiving the card",
      "Works across iPhone, Android, tablets, and laptops",
      "Automatic dark/light mode detection",
      "Instant offline cache via progressive web app"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { DigitalBusinessCardsPage };
