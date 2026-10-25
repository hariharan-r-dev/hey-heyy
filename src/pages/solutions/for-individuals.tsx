import { PageLayout } from "../PageLayout";

export default function ForIndividualsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Individuals"
      badge="Personal Brand Engine"
      description="Replace stacks of paper business cards with a single interactive digital profile that leaves an unforgettable impression everywhere you go."
      stats={[
  {
    "label": "Setup Time",
    "value": "< 2 Minutes"
  },
  {
    "label": "Cards Run Out",
    "value": "Never"
  },
  {
    "label": "Share Methods",
    "value": "NFC / QR / Wallet / Link"
  },
  {
    "label": "Cost",
    "value": "Free Forever Tier"
  }
]}
      features={[
  {
    "title": "Always Up-to-Date",
    "description": "Changed jobs, phone numbers, or email? Update once, and every card in circulation updates immediately.",
    "tag": "Dynamic"
  },
  {
    "title": "Full-Screen QR Presentation",
    "description": "High-contrast QR code pops up instantly for scanning in dark bars, lounges, or bright outdoor sun.",
    "tag": "Convenient"
  },
  {
    "title": "One-Tap Contact Save",
    "description": "Contacts save your direct vCard (.vcf) with avatar straight into their native phone address book.",
    "tag": "Zero-Friction"
  }
]}
      highlights={[
  {
    "title": "Everything You Need",
    "items": [
      "Personal URL: zuntra.me/yourname",
      "Social links (LinkedIn, X, GitHub, Instagram)",
      "Custom photo, company badge, and bio",
      "Add to Apple Wallet / Google Wallet"
    ]
  },
  {
    "title": "Eco-Friendly Impact",
    "items": [
      "Save an average of 500 paper cards per year",
      "Eliminate reprint waste when contact info changes",
      "Durable NFC card crafted from recycled ocean plastic",
      "Zero paper footprint"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForIndividualsPage };
