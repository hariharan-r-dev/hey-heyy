import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  BarChart3,
  Download,
  Zap
} from 'lucide-react';

export const LeadCapturePage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'lead-capture',
    category: 'Products',
    badge: '2-Way Lead Form',
    badgeColor: '#da4d09',
    badgeLayerColor: '#f3a985',
    title: 'Two-Way Contact & Lead Capture',
    headline: 'Collect verified contact info from everyone who scans your card.',
    subheadline: 'Turn your card into an active lead generation tool. Recipients tap "Connect" to send their details straight into your workspace CRM.',
    visual: {
      src: '/marketing/visuals/lead-capture-flow.webp',
      alt: 'Two-way contact exchange: recipient submit form on mobile card connecting to live workspace lead inbox',
      width: 1760,
      height: 1120,
      caption: 'Reciprocal exchange: recipient shares details directly into your workspace',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: 'Friction-Free Form', description: 'Recipients fill out a lightweight form in 15 seconds with zero account creation.', icon: Users },
      { title: 'Real-Time Notification', description: 'Get notified immediately when someone submits their contact details back to you.', icon: Zap },
      { title: 'Instant Lead Attribution', description: 'Track which team member, card profile, or event generated each lead.', icon: BarChart3 },
      { title: 'Export Anywhere', description: 'Sync collected leads with external CRMs or download as a clean CSV.', icon: Download },
    ],
      }}
    />
  );
};

export default LeadCapturePage;
