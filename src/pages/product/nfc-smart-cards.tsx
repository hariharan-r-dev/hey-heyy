import { PageLayout } from "../PageLayout";

export default function NfcSmartCardsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="NFC Smart Cards"
      badge="Tap-to-Share Hardware"
      description="Precision-crafted matte PVC, recycled ocean plastic, brushed stainless steel, and bamboo wood smart cards that share your profile with a single tap."
      stats={[
  {
    "label": "Tap Transfer Time",
    "value": "0.2s"
  },
  {
    "label": "NFC Chip Longevity",
    "value": "100K+ Taps"
  },
  {
    "label": "Battery Required",
    "value": "Never"
  },
  {
    "label": "Compatible Phones",
    "value": "99.4%"
  }
]}
      features={[
  {
    "title": "Zero Contact Battery-Free",
    "description": "Powered entirely by the recipient's phone radio field. Never needs charging or battery replacement.",
    "tag": "Hardware"
  },
  {
    "title": "Dual NFC + Dynamic QR",
    "description": "Every card features an integrated NTAG216 chip plus an engraved dynamic backup QR code on the back.",
    "tag": "Universal"
  },
  {
    "title": "Sustainable Materials",
    "description": "Choose between recycled ocean-bound plastics, certified sustainable bamboo, or aircraft-grade metal.",
    "tag": "Eco"
  }
]}
      highlights={[
  {
    "title": "Hardware Finishes",
    "items": [
      "Matte Soft-Touch Black PVC",
      "Sustainably Harvested Bamboo Wood",
      "Brushed Matte Black Stainless Steel",
      "24K Gold Plated Luxury Edition"
    ]
  },
  {
    "title": "Enterprise Bulk Orders",
    "items": [
      "Custom Pantone color matching",
      "Laser-engraved individual employee names",
      "Drop-shipping direct to remote workers worldwide",
      "Remote card locking in case of loss or theft"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { NfcSmartCardsPage };
