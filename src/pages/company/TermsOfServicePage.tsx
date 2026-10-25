import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Layers,
  Zap,
  Check,
  Globe
} from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'terms',
    category: 'Company',
    badge: 'LEGAL TERMS',
    title: 'Terms of Service',
    headline: 'Fair, transparent terms with zero fine-print traps.',
    subheadline: 'Read our straightforward terms governing subscription billing, self-serve cancellations, data ownership, and acceptable platform use.',
    keyFeatures: [
      { title: '1-Click Self-Serve Cancellation', description: 'You can cancel any paid subscription with one click directly in your account settings.', icon: Check },
      { title: '72-Hour Renewal Notices', description: 'We notify you 72 hours in advance of any annual renewal charges. No surprise rebills.', icon: Zap },
      { title: 'You Own Your Content', description: 'All logos, profile images, contact details, and exported leads remain your property.', icon: Layers },
      { title: '99.9% Uptime Commitment', description: 'Hosted on global CDN infrastructure for reliable 24/7 card resolution.', icon: Globe },
    ],
      }}
    />
  );
};

export default TermsOfServicePage;
