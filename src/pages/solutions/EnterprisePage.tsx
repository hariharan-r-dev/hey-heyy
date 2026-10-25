import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  Lock,
  Shield,
  Globe
} from 'lucide-react';

export const EnterprisePage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'enterprise',
    category: 'Solutions',
    badge: 'LARGE ORGANIZATIONS',
    title: 'For Enterprise Organizations',
    headline: 'Enterprise-grade digital pass infrastructure and governance.',
    subheadline: 'Built on PostgreSQL and custom zero-trust token authentication. Scale across thousands of employees with dedicated subdomains and bulk management.',
    visual: {
      src: '/marketing/visuals/enterprise-admin-console.webp',
      alt: 'Enterprise governance console with role-based permissions, custom subdomain routing, and audit logs',
      width: 1760,
      height: 1120,
      caption: 'Enterprise security console: role-based access, custom domain, and workspace isolation',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Zero-Trust Architecture', description: 'Row-level security policies ensure workspace data isolation and compliance.', icon: Shield },
      { title: 'Bulk Employee Upload', description: 'Import hundreds of employees via standardized CSV in 30 seconds.', icon: Users },
      { title: 'Custom Subdomains', description: 'Host cards on your company subdomain with dedicated SSL certificates.', icon: Globe },
      { title: 'Zero AI Surveillance Guarantee', description: 'We never transcribe, record, or share your employee conversation notes.', icon: Lock },
    ],
      }}
    />
  );
};

export default EnterprisePage;
