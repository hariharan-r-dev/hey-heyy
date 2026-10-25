import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Smartphone,
  Zap,
  Check,
  Lock
} from 'lucide-react';

export const DigitalWalletPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'digital-wallet',
    category: 'Products',
    badge: 'OFFLINE ACCESS',
    title: 'Lockscreen & Offline QR Badges',
    headline: 'Share your card in 2 seconds with high-contrast lockscreen badges.',
    subheadline: 'Keep your professional identity badge on your smartphone wallpaper or lockscreen. Scans reliably offline even without cellular or Wi-Fi connectivity.',
    visual: {
      src: '/marketing/visuals/digital-wallet-badge.webp',
      alt: 'Smartphone lockscreen displaying high-contrast offline QR pass with quick access widget',
      width: 960,
      height: 1480,
      caption: 'Offline lockscreen badge for instant 2-second access anywhere',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Offline Retrieval', description: 'Display your dynamic QR code even in underground conference halls or airplanes.', icon: Smartphone },
      { title: 'Instant Lockscreen Access', description: 'Access your card in 2 seconds without navigating through apps or menus.', icon: Smartphone },
      { title: 'Dynamic Destination Routing', description: 'Profile edits automatically update where your high-contrast QR barcode leads.', icon: Zap },
      { title: 'Zero Battery Drain', description: 'Standard high-contrast image asset without background battery consumption.', icon: Check },
    ],
      }}
    />
  );
};

export default DigitalWalletPage;
