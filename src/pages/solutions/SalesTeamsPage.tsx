import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  BarChart3,
  Download,
  Zap
} from 'lucide-react';

export const SalesTeamsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'sales-teams',
    category: 'Solutions',
    badge: 'HIGH-VELOCITY SALES',
    title: 'For Enterprise Sales Teams',
    headline: 'Arm your reps with digital cards that capture leads on contact.',
    subheadline: 'Never lose a conference conversation again. Sales reps share cards via QR or NFC, collect prospect details in 1 tap, and export directly into CRM pipelines.',
    visual: {
      src: '/marketing/visuals/sales-pipeline-leads.webp',
      alt: 'Sales team prospect pipeline showing conference lead capture, rep attribution, and CRM export status',
      width: 1760,
      height: 1120,
      caption: 'Sales lead capture with rep attribution and one-click CRM CSV export',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: '1-Tap vCard Download', description: 'Prospects save rep contact info directly into their phonebook without downloading an app.', icon: Download },
      { title: 'Instant Lead Form', description: 'Prospects send their name, email, company, and notes back with one click.', icon: Users },
      { title: 'Event Attribution', description: 'Tag leads by trade show, booth location, or networking dinner.', icon: BarChart3 },
      { title: 'CSV CRM Export', description: 'Export conference leads directly into HubSpot or Salesforce at the end of the day.', icon: Zap },
    ],
      }}
    />
  );
};

export default SalesTeamsPage;
