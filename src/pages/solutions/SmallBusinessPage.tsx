import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  Layers,
  Check,
  Building2
} from 'lucide-react';

export const SmallBusinessPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'small-business',
    category: 'Solutions',
    badge: 'GROWING COMPANIES',
    title: 'For Small Businesses',
    headline: 'Professional smart cards without enterprise bloat.',
    subheadline: 'Equip your team with unified digital cards in 10 minutes. Shared logo, company colors, and centralized lead collection without per-seat penalty traps.',
    visual: {
      src: '/marketing/visuals/small-business-workspace.webp',
      alt: 'Small business cards dashboard with unified corporate palette, 5 employee cards, and brand consistency',
      width: 1760,
      height: 1120,
      caption: 'Unified brand identity across your entire small team without enterprise bloat',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Flat Team Pricing', description: '$12.99/mo covers up to 10 team cards with zero forced annual contracts.', icon: Check },
      { title: 'Uniform Branding', description: 'Enforce company logos, social handles, and standard typography.', icon: Building2 },
      { title: 'Centralized Lead CRM', description: 'All leads captured by your staff flow directly into your admin console.', icon: Users },
      { title: 'Department Tagging', description: 'Organize cards by Sales, Support, Operations, and Management.', icon: Layers },
    ],
      }}
    />
  );
};

export default SmallBusinessPage;
