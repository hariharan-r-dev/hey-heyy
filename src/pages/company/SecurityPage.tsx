import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Zap,
  Lock,
  Shield,
  Building2
} from 'lucide-react';

export const SecurityPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'security',
    category: 'Company',
    badge: 'DATA PROTECTION',
    title: 'Security Architecture',
    headline: 'Zero-trust architecture built on PostgreSQL RLS.',
    subheadline: 'Learn how Zuntra safeguards corporate cards and customer contact data with row-level security policies, encrypted sessions, and isolated multi-tenancy.',
    keyFeatures: [
      { title: 'Row-Level Security (RLS)', description: 'Database policies guarantee that users can only access cards and leads in their workspace.', icon: Shield },
      { title: 'TLS 1.3 & HTTPS Everywhere', description: 'All card views, QR scans, and API transactions are encrypted in transit.', icon: Lock },
      { title: 'Custom Token Recovery', description: 'Cryptographic recovery tokens protect accounts against brute-force takeover.', icon: Zap },
      { title: 'Isolated Multi-Tenant Storage', description: 'Workspaces are logically isolated with strict relational constraints.', icon: Building2 },
    ],
      }}
    />
  );
};

export default SecurityPage;
