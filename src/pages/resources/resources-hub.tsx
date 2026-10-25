import { PageLayout } from "../PageLayout";

export default function ResourcesHubPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Resources Hub"
      badge="Knowledge & Growth Center"
      description="Explore in-depth playbooks, hardware compatibility lists, customer case studies, and digital networking best practice guides."
      stats={[
  {
    "label": "Articles & Guides",
    "value": "120+"
  },
  {
    "label": "Video Tutorials",
    "value": "45+"
  },
  {
    "label": "Case Studies",
    "value": "30+"
  },
  {
    "label": "Hardware Guides",
    "value": "Complete"
  }
]}
      features={[
  {
    "title": "Hardware Compatibility",
    "description": "Complete database of NFC-enabled iOS and Android smartphones and antenna sweet spots.",
    "tag": "Hardware"
  },
  {
    "title": "Digital Networking Playbooks",
    "description": "Proven strategies for maximizing contact capture rates at trade shows and conferences.",
    "tag": "Strategy"
  },
  {
    "title": "ROI Calculators",
    "description": "Calculate exact monetary and environmental savings from eliminating printed paper cards.",
    "tag": "Tools"
  }
]}
      highlights={[
  {
    "title": "Featured Topics",
    "items": [
      "NFC vs. QR Code: The Ultimate Modern Comparison",
      "How to Train Sales Reps for Trade Show Contact Capture",
      "Deploying 1,000+ Digital Cards with Okta SCIM",
      "The Environmental Impact of Paper Business Cards"
    ]
  },
  {
    "title": "Downloadable Templates",
    "items": [
      "Corporate Email Signature HTML Boilerplates",
      "Conference Lead Capture Qualifying Rubrics",
      "Virtual Background 4K Figma Template Kit",
      "Digital Card Rollout Communication Email Templates"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ResourcesHubPage };
