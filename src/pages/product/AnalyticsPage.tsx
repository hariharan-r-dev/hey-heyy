import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  BarChart3,
  Download,
  Shield
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'analytics',
    category: 'Products',
    badge: 'ENGAGEMENT METRICS',
    title: 'Scan & View Analytics',
    headline: 'See exactly how your cards perform in the real world.',
    subheadline: 'Audit views, QR scans, vCard saves, and link interactions with 7d, 30d, and 90d analytics and department breakdown.',
    visual: {
      src: '/marketing/visuals/analytics-dashboard.webp',
      alt: 'Zuntra analytics telemetry dashboard displaying total card views, unique scans, vCard saves, and engagement trends',
      width: 1760,
      height: 1120,
      caption: 'Real-time engagement telemetry: views, scans, vCard saves, and conversion rate',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Total Card Impressions', description: 'Track unique views and repeat visits across each individual card.', icon: BarChart3 },
      { title: 'vCard Save Conversion', description: 'Monitor how many people actually downloaded your vCard into their address book.', icon: Download },
      { title: 'Team Leaderboards', description: 'See which team members are generating the highest engagement at conferences.', icon: Users },
      { title: 'Privacy-Preserving Telemetry', description: 'Aggregated analytics without invasive fingerprinting or user surveillance.', icon: Shield },
    ],
      }}
    />
  );
};

export default AnalyticsPage;
