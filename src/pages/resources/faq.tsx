import { PageLayout } from "../PageLayout";

export default function FaqPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Frequently Asked Questions"
      badge="Got Questions?"
      description="Clear answers to the most common questions about Zuntra digital business cards, smart NFC hardware, privacy, and team rollouts."
      stats={[
  {
    "label": "Top Questions Answered",
    "value": "18 FAQs"
  },
  {
    "label": "Customer Satisfaction",
    "value": "99.1%"
  },
  {
    "label": "Average Read Time",
    "value": "4 Minutes"
  },
  {
    "label": "Live Chat Support",
    "value": "Available"
  }
]}
      features={[
  {
    "title": "Do recipients need an app?",
    "description": "No. Anyone with a smartphone can view your card and save your contact instantly in their web browser.",
    "tag": "Zero App"
  },
  {
    "title": "Will NFC work through phone cases?",
    "description": "Yes. Our high-power NTAG216 chips transmit through standard leather, silicone, and plastic cases.",
    "tag": "NFC"
  },
  {
    "title": "What if I lose my physical card?",
    "description": "You can instantly deactivate or reprogram your card from your web dashboard with one click.",
    "tag": "Security"
  }
]}
      highlights={[
  {
    "title": "Compatibility & Hardware FAQs",
    "items": [
      "Which phones support tap-to-share? (iPhone XS and newer, almost all modern Androids)",
      "Do I need to charge my NFC card? (No, it is 100% battery-free)",
      "Can I use QR code if their phone lacks NFC? (Yes, every card includes dynamic QR)",
      "How long do the physical cards last? (Rated for over 100,000 taps)"
    ]
  },
  {
    "title": "Privacy & Data FAQs",
    "items": [
      "Is my contact information public to search engines? (Configurable by user)",
      "Does Zuntra sell personal data? (Never, zero data monetization)",
      "Are captured leads GDPR compliant? (Yes, explicit consent checkboxes included)",
      "Can enterprise admins see personal employee contacts? (No, strict privacy separation)"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { FaqPage };
