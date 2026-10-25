import { PageLayout } from "../PageLayout";

export default function QrCodeCardsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="QR Code Cards"
      badge="Dynamic Telemetry"
      description="Generate high-contrast, scan-optimized dynamic QR codes that update instantly without reprinting physical collateral."
      stats={[
  {
    "label": "Scan Recognition Speed",
    "value": "240ms"
  },
  {
    "label": "Dynamic Redirects",
    "value": "Unlimited"
  },
  {
    "label": "Print Formats",
    "value": "SVG / PNG / EPS"
  },
  {
    "label": "Custom Error Correction",
    "value": "Level H (30%)"
  }
]}
      features={[
  {
    "title": "Dynamic Routing",
    "description": "Change where your QR code points anytime without reprinting your flyers, signage, or stickers.",
    "tag": "Dynamic"
  },
  {
    "title": "Custom Brand Embeds",
    "description": "Incorporate company logos, custom hex colors, rounded corners, and personalized CTA frames.",
    "tag": "Branding"
  },
  {
    "title": "Scan Telemetry & Heatmaps",
    "description": "Track timestamps, geographic cities, and device OS types for every single QR scan.",
    "tag": "Analytics"
  }
]}
      highlights={[
  {
    "title": "Use Cases",
    "items": [
      "Conference badges & lanyards",
      "Brochures, pop-up banners, and print ads",
      "Storefront window decals & menus",
      "Presentation slides & keynote decks"
    ]
  },
  {
    "title": "Vector Precision",
    "items": [
      "High-res SVG and EPS vector downloads",
      "Optimized micro-dots for camera autofocus",
      "High contrast in low-light environments",
      "Configurable error correction resilience"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { QrCodeCardsPage };
