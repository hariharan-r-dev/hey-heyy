import { PageLayout } from "../PageLayout";

export default function ForSmallBusinessPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Small Business"
      badge="Local Brand Consistency"
      description="Equip your staff with professional digital cards, collect 5-star Google reviews on the spot, and project a unified, modern brand presence."
      stats={[
  {
    "label": "Google Review Lift",
    "value": "+3.8x"
  },
  {
    "label": "Staff Card Deployment",
    "value": "5 Minutes"
  },
  {
    "label": "Annual Cost Savings",
    "value": "70%"
  },
  {
    "label": "Customer Engagement",
    "value": "+55%"
  }
]}
      features={[
  {
    "title": "Instant Review Tap",
    "description": "Program cards or counter QR stands to open your Google Business review page in one tap.",
    "tag": "Reputation"
  },
  {
    "title": "Unified Brand Styling",
    "description": "Ensure every employee displays the exact official logo, colors, font, and legal company details.",
    "tag": "Professional"
  },
  {
    "title": "Centralized Billing",
    "description": "Single simple monthly or annual invoice for your entire team with easy seat reassignments.",
    "tag": "Simplified"
  }
]}
      highlights={[
  {
    "title": "Small Business Advantages",
    "items": [
      "No more waiting 2 weeks for print shops",
      "Instant card reissuing when employees change roles",
      "Countertop QR stands for retail checkouts",
      "Track which employees generate the most customer reviews"
    ]
  },
  {
    "title": "Local Storefront Tools",
    "items": [
      "Direct maps navigation link to your shop location",
      "WhatsApp direct message button for orders",
      "Daily specials and promotional discount banner",
      "Contactless menu and price sheet embeds"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForSmallBusinessPage };
