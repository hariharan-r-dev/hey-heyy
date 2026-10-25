import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  Shield,
  Globe,
  Building2
} from 'lucide-react';

export const BookDemoPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'contact-us',
    category: 'Company',
    badge: 'TALK TO US',
    title: 'Book a Demo & Enterprise Sales',
    headline: 'Equip your organization with modern digital cards.',
    subheadline: 'Speak with our enterprise team about deploying Zuntra Cards across your company, custom domain branding, and centralized lead governance.',
    keyFeatures: [
      { title: 'Custom Subdomain Setup', description: 'Learn how to run cards directly on cards.yourcompany.com with custom SSL.', icon: Globe },
      { title: 'Bulk Employee Onboarding', description: 'Discover automated CSV and API sync workflows for large enterprise rosters.', icon: Users },
      { title: 'Volume Licensing Discounts', description: 'Custom volume pricing for teams with over 50 employees or annual events.', icon: Building2 },
      { title: 'Dedicated Security Review', description: 'Access our security architecture documentation and PostgreSQL RLS policies.', icon: Shield },
    ],
      }}
    />
  );
};

export default BookDemoPage;
