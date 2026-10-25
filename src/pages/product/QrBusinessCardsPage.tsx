import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Smartphone,
  QrCode,
  BarChart3,
  Download,
  Lock
} from 'lucide-react';

export const QrBusinessCardsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'qr-business-cards',
    category: 'Products',
    badge: 'Dynamic QR',
    badgeColor: '#92b301',
    badgeLayerColor: '#dcf214',
    title: 'QR Code Business Cards',
    headline: 'High-contrast dynamic QR codes engineered for fast camera scans.',
    subheadline: 'Display your QR code from your smartphone lockscreen, wallet, or video call background for effortless contact sharing in any lighting condition.',
    visual: {
      src: '/marketing/visuals/qr-business-card.webp',
      alt: 'High-contrast dynamic QR business card badge with instant camera scan target and crisp corner markers',
      width: 1680,
      height: 1120,
      caption: 'High-contrast dynamic QR badge engineered for instant camera scans',
      treatment: 'device',
    },
    keyFeatures: [
      { title: 'Dynamic Target Routing', description: 'Update your contact details or destination URL anytime without reprinting physical materials.', icon: QrCode },
      { title: 'Lockscreen & Fast Access', description: 'Add your personal QR badge to your phone lockscreen wallpaper for instant access.', icon: Smartphone },
      { title: 'Vector SVG & PNG Export', description: 'Export crisp QR codes ready for business cards, badges, presentation slides, or banners.', icon: Download },
      { title: 'Real-Time Scan Telemetry', description: 'Track how many times your QR code was scanned and how many contacts saved your vCard.', icon: BarChart3 },
    ],
      }}
    />
  );
};

export default QrBusinessCardsPage;
