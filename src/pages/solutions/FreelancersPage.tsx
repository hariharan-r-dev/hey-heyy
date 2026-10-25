import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  Layers,
  Zap,
  Check
} from 'lucide-react';

export const FreelancersPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'freelancers',
    category: 'Solutions',
    badge: 'CREATIVE PROS',
    title: 'For Freelancers & Consultants',
    headline: 'Turn casual introductions into paying client contracts.',
    subheadline: 'Embed design portfolios, client case studies, retainer payment buttons, and direct booking links directly into your interactive card.',
    visual: {
      src: '/marketing/visuals/freelancer-portfolio-card.webp',
      alt: 'Freelancer portfolio card featuring featured client projects, calendar booking button, and direct inquiries',
      width: 960,
      height: 1480,
      caption: 'Portfolio showcase card with direct meeting booking and inquiry actions',
      treatment: 'phone',
    },
    keyFeatures: [
      { title: 'Portfolio Showcase Widgets', description: 'Display recent design work, case study images, and architectural specs.', icon: Layers },
      { title: 'Direct Booking Triggers', description: 'Add your Calendly, Cal.com, or booking links directly to your card header.', icon: Zap },
      { title: 'Fast Lead Exchange', description: 'Potential clients tap once to exchange their phone and email back to you.', icon: Users },
      { title: 'Professional Identity', description: 'Stand out from competitors handing out crumpled paper cards.', icon: Check },
    ],
      }}
    />
  );
};

export default FreelancersPage;
