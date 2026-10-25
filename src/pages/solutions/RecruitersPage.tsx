import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  QrCode,
  Users,
  Lock,
  Briefcase
} from 'lucide-react';

export const RecruitersPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'recruiters-and-networking',
    category: 'Solutions',
    badge: 'TALENT ACQUISITION',
    title: 'For Recruiters & Networking Pros',
    headline: 'Connect with top candidates and industry peers with zero friction.',
    subheadline: 'Make candidate handshakes count. Share your hiring portal, job specs, and contact details with an instant scan at career fairs and meetups.',
    visual: {
      src: '/marketing/visuals/recruiter-candidate-view.webp',
      alt: 'Recruiter candidate capture dashboard with resume links, job requisition tags, and private interview notes',
      width: 1760,
      height: 1120,
      caption: 'Candidate networking: instant resume links, job requisitions, and private interview notes',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Job Board Integration', description: 'Link directly to active career openings and candidate application forms.', icon: Briefcase },
      { title: 'Instant Candidate Capture', description: 'Candidates submit their resume links, portfolio, and contact info in 15 seconds.', icon: Users },
      { title: 'Dynamic QR Badges', description: 'Wear your QR code on conference lanyards for effortless passive scanning.', icon: QrCode },
      { title: 'Private Follow-Up Notes', description: 'Jot down candidate impressions right on the contact record.', icon: Lock },
    ],
      }}
    />
  );
};

export default RecruitersPage;
