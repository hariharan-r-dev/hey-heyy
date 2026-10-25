import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  QrCode,
  Users,
  Layers,
  Download
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'how-it-works',
    category: 'Platform',
    badge: 'THE PROCESS',
    title: 'How Zuntra Cards Works',
    headline: 'Three simple steps from signup to an unforgettable connection.',
    subheadline: 'Discover how Zuntra delivers a completely frictionless networking experience for both the sender and the recipient on every smartphone.',
    keyFeatures: [
      { title: '1. Create Your Card in 60s', description: 'Choose from curated archetypes. Add your photo, verified channels, and portfolio links.', icon: Layers },
      { title: '2. Share Anywhere', description: 'Display your high-contrast QR code from your lockscreen, tap an NFC card, or send your link.', icon: QrCode },
      { title: '3. Recipient Saves in 1 Tap', description: 'The recipient taps "Save Contact". A standard vCard lands straight in their phone. No app needed.', icon: Download },
      { title: '4. Exchange & Follow Up', description: 'Recipients submit their details back to you. Leads sync directly to your CRM for instant follow-up.', icon: Users },
    ],
      }}
    />
  );
};

export default HowItWorksPage;
