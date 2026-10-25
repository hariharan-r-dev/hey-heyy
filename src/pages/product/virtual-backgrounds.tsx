import { PageLayout } from "../PageLayout";

export default function VirtualBackgroundsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Virtual Backgrounds"
      badge="Remote Meeting Networking"
      description="Transform your Zoom, Teams, and Google Meet calls into high-converting lead opportunities with custom branded backgrounds and live QR codes."
      stats={[
  {
    "label": "Resolution",
    "value": "1080p / 4K"
  },
  {
    "label": "Supported Platforms",
    "value": "Zoom/Teams/Meet"
  },
  {
    "label": "Leads Captured in Calls",
    "value": "3.2x Higher"
  },
  {
    "label": "Custom Styles",
    "value": "24+ Themes"
  }
]}
      features={[
  {
    "title": "Live Embedded QR Dock",
    "description": "Positioned perfectly in the top right or bottom corner so your video feed never obscures the scannable code.",
    "tag": "Smart Placement"
  },
  {
    "title": "Studio Light & Dark Themes",
    "description": "Modern minimalist, architectural loft, blurred corporate gradient, and tech aurora backgrounds.",
    "tag": "Aesthetics"
  },
  {
    "title": "Instant Export",
    "description": "Download in exact Zoom and Microsoft Teams 1920x1080 resolution with optimized crisp typography.",
    "tag": "Ready"
  }
]}
      highlights={[
  {
    "title": "Meeting Advantages",
    "items": [
      "Prospects scan your card directly off the call screen",
      "Reinforces team credibility and unified branding",
      "No awkward link dropping into chat threads",
      "Collect inquiries during live webinars and demos"
    ]
  },
  {
    "title": "Customization Controls",
    "items": [
      "Your name, company, and title clearly legibile",
      "Corporate brand colors and logo watermark",
      "Configurable blur intensity",
      "Download individual or team-wide packages"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { VirtualBackgroundsPage };
