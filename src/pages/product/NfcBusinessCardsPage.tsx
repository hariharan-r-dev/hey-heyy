import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Smartphone,
  QrCode,
  Wifi,
  Layers
} from 'lucide-react';

export const NfcBusinessCardsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'nfc-business-cards',
    category: 'Products',
    badge: 'NFC Tap',
    badgeColor: '#fd4ec2',
    badgeLayerColor: '#ffbee8',
    title: 'NFC Smart Business Cards',
    headline: 'Tap against any modern phone to share your card in milliseconds.',
    subheadline: 'Write your permanent Zuntra link to any standard NFC smart card, metal card, ring, or sticker. No special apps required for the tap to work.',
    visual: {
      src: '/marketing/visuals/nfc-tap.webp',
      alt: 'Physical matte black NFC smart card tapping a smartphone with animated contactless wave signal',
      width: 1680,
      height: 1120,
      caption: 'Hardware tap-to-share: zero apps needed on the recipient phone',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: 'Universal NFC Compatibility', description: 'Works seamlessly with iPhone (XR and newer) and modern Android smartphones.', icon: Wifi },
      { title: 'Standard NTAG Chips', description: 'Compatible with standard NTAG213, NTAG215, and NTAG216 NFC chips and physical cards.', icon: Smartphone },
      { title: 'Never Outdated', description: 'Keep the same physical card for years; your digital destination updates dynamically.', icon: Layers },
      { title: 'Backup QR Code', description: 'Every card includes a QR fallback for older phones without NFC enabled.', icon: QrCode },
    ],
      }}
    />
  );
};

export default NfcBusinessCardsPage;
