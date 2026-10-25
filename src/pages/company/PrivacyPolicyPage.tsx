import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Trash2,
  Download,
  Lock,
  Shield
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'privacy',
    category: 'Company',
    badge: 'USER PRIVACY',
    title: 'Privacy Policy',
    headline: 'Your connections and notes belong to you alone.',
    subheadline: 'We believe professional software should protect your privacy. We do not sell your personal data, inject third-party ad surveillance, or record your private meetings.',
    keyFeatures: [
      { title: 'Zero AI Microphone Surveillance', description: 'Unlike competitors, we do not record, transcribe, or share your private conversations.', icon: Lock },
      { title: 'Local Device Notes', description: 'Private contact notes remain strictly encrypted and isolated in your database.', icon: Shield },
      { title: 'Standard Export Rights', description: 'Export your entire contact book and lead database anytime in CSV or vCard format.', icon: Download },
      { title: 'Complete Account Deletion', description: 'Request account deletion at any time to permanently remove all stored workspace records.', icon: Trash2 },
    ],
      }}
    />
  );
};

export default PrivacyPolicyPage;
