import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  QrCode,
  Mail,
  Zap,
  Building2
} from 'lucide-react';

export const EmailSignaturesPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'email-signatures',
    category: 'Products',
    badge: 'EMAIL BRANDING',
    title: 'Professional Email Signatures',
    headline: 'Turn every sent email into an interactive digital handshake.',
    subheadline: 'Generate clean HTML email signatures formatted for Gmail, Apple Mail, Outlook, and Superhuman with integrated QR codes and live profile links.',
    visual: {
      src: '/marketing/visuals/email-signature.webp',
      alt: 'Clean email client composer showing a branded corporate HTML signature with live links and QR badge',
      width: 1720,
      height: 1120,
      caption: 'Clean HTML signature tested across Gmail, Apple Mail, and Outlook',
      treatment: 'device',
    },
    keyFeatures: [
      { title: '1-Click HTML Copy', description: 'Formatted and tested across major desktop and mobile email clients with zero layout breakage.', icon: Mail },
      { title: 'Embedded Dynamic QR', description: 'Recipients can scan your signature QR code with their phone to save your contact immediately.', icon: QrCode },
      { title: 'Consistent Team Branding', description: 'Enforce uniform logo, typography, and disclaimer standards across all employee signatures.', icon: Building2 },
      { title: 'Direct Meeting Links', description: 'Include 1-click links to book meetings, view portfolios, or message on WhatsApp.', icon: Zap },
    ],
      }}
    />
  );
};

export default EmailSignaturesPage;
