import { PageLayout } from "../PageLayout";

export default function DigitalWalletCardsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Digital Wallet Cards"
      badge="Apple & Google Wallet"
      description="Issue native Apple Wallet (.pkpass) and Google Wallet passes so contacts and attendees can save your card right onto their mobile lock screens."
      stats={[
  {
    "label": "Pass Type",
    "value": "Apple & Google"
  },
  {
    "label": "Lockscreen Availability",
    "value": "Instant"
  },
  {
    "label": "Offline Storage",
    "value": "100%"
  },
  {
    "label": "Push Updates",
    "value": "Supported"
  }
]}
      features={[
  {
    "title": "Native Apple Wallet (.pkpass)",
    "description": "Cryptographically signed passes compatible with iOS Wallet and Apple Watch.",
    "tag": "Apple"
  },
  {
    "title": "Google Wallet Passes",
    "description": "Instant save to Google Wallet on Android with high-contrast QR display.",
    "tag": "Android"
  },
  {
    "title": "Geo-Fenced Alerts",
    "description": "Optionally notify the attendee when they enter the conference hall or meeting venue.",
    "tag": "Proximity"
  }
]}
      highlights={[
  {
    "title": "Lock Screen Convenience",
    "items": [
      "Double-click side button to present card QR",
      "No cellular connection needed to display pass",
      "Automatic brightness boost for scanner readability",
      "Live updates when phone or title changes"
    ]
  },
  {
    "title": "Event Admission Passes",
    "items": [
      "Turn any ticket into an Apple Wallet boarding pass",
      "Seat number, zone, and tier verification",
      "Single-use cryptographic admission codes",
      "Fast check-in scanner compatibility"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { DigitalWalletCardsPage };
