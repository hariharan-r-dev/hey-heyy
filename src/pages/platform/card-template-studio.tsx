import { PageLayout } from "../PageLayout";

export default function CardTemplateStudioPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="Card Template Studio"
      badge="Design Freedom"
      description="A flexible, real-time visual editor to craft high-impact digital cards that match your exact brand identity and aesthetic standards."
      stats={[
  {
    "label": "Base Templates",
    "value": "5 Distinct Layouts"
  },
  {
    "label": "Custom Fonts",
    "value": "Google Fonts Library"
  },
  {
    "label": "Color Systems",
    "value": "HEX / RGB / Gradients"
  },
  {
    "label": "Real-time Live Preview",
    "value": "60 FPS"
  }
]}
      features={[
  {
    "title": "5 Layout Archetypes",
    "description": "Minimalist, Executive B2B, Modern Aurora, Identity Glass, and Corporate Split.",
    "tag": "Styles"
  },
  {
    "title": "Real-Time Mobile Sandbox",
    "description": "See changes instantly reflected on an accurate iPhone 16 mockup as you type.",
    "tag": "Interactive"
  },
  {
    "title": "Component Reordering",
    "description": "Drag and drop links, videos, contact buttons, and photo galleries into any order.",
    "tag": "Flexibility"
  }
]}
      highlights={[
  {
    "title": "Studio Capabilities",
    "items": [
      "Upload custom cover banners and circular or square avatars",
      "Curated font pairings with optical sizing adjustments",
      "Custom badge icons (e.g. Verified Executive, VIP Speaker)",
      "Dark mode, light mode, and dynamic system auto-switching"
    ]
  },
  {
    "title": "Admin Locking Tools",
    "items": [
      "Lock logo position and legal footer across all employee cards",
      "Restrict color palettes to approved corporate brand kits",
      "Make specific fields mandatory (e.g., Department, Work Phone)",
      "Preview how templates appear across various screen sizes"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { CardTemplateStudioPage };
