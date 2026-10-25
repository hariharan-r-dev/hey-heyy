import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Zap,
  Check,
  Shield,
  Wallet
} from 'lucide-react';

export const IndividualsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'individuals',
    category: 'Solutions',
    badge: 'SOLO PROFESSIONALS',
    title: 'For Individuals',
    headline: 'One considered link for every introduction you make.',
    subheadline: 'Share who you are, what you do, and how people can reach you. Clean presentation, instant vCard saving, and zero recipient app walls.',
    visual: {
      src: '/marketing/visuals/individual-card-share.webp',
      alt: 'Individual digital card profile with quick share drawer, QR modal, and direct contact actions',
      width: 960,
      height: 1480,
      caption: 'Single professional identity with personal branding and quick share sheet',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Free Forever Tier', description: '2 active cards at $0 with dynamic QR codes and full vCard saving.', icon: Check },
      { title: 'Vanity URL Slug', description: 'Claim a clean link (zuntra.cards/yourname) for social bios and resumes.', icon: Zap },
      { title: 'Custom Payment Badges', description: 'Direct links for Stripe, PayPal, Cash App, or UPI right on your profile.', icon: Wallet },
      { title: '1-Click Cancellation', description: 'Upgrade to Solo Pro ($4.99/mo) and cancel anytime with one click in settings.', icon: Shield },
    ],
      }}
    />
  );
};

export default IndividualsPage;
