import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Layers,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'careers',
    category: 'Company',
    badge: 'JOIN OUR TEAM',
    title: 'Careers at Zuntra',
    headline: 'Help us reinvent the way people connect.',
    subheadline: 'We are a small, focused team building beautiful, reliable software with modern web standards. We value clean code, high aesthetic standards, and deep user respect.',
    keyFeatures: [
      { title: 'Remote-First Culture', description: 'Work from wherever you do your best, most focused thinking.', icon: Globe },
      { title: 'High Craft Standards', description: 'We care deeply about typography, 60fps animations, and zero-compromise UX.', icon: Layers },
      { title: 'Boring Managed Tech', description: 'No convoluted over-engineering. We ship solid, production-grade software.', icon: Lock },
      { title: 'Ownership & Freedom', description: 'Direct ownership of features from design conception to customer deployment.', icon: Zap },
    ],
      }}
    />
  );
};

export default CareersPage;
