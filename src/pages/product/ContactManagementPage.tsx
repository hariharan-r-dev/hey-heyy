import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Users,
  Trash2,
  Download,
  Lock
} from 'lucide-react';

export const ContactManagementPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'contact-management',
    category: 'Products',
    badge: 'ADDRESS BOOK',
    title: 'Contact Management & CRM',
    headline: 'Organize every connection you make in one clean workspace.',
    subheadline: 'All leads captured through your card forms land in your workspace directory with tags, timestamps, source card attribution, and 1-click exports.',
    visual: {
      src: '/marketing/visuals/contact-directory.webp',
      alt: 'Zuntra contact directory interface showing searchable table, tag filters, source attribution, and export actions',
      width: 1760,
      height: 1120,
      caption: 'Private contact directory with source attribution and CSV export',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Centralized Lead Directory', description: 'Search, filter, and group contacts collected across all cards and events.', icon: Users },
      { title: '30-Day Trash Bin', description: 'Accidental deletions can be restored in 1 click. Your data is protected.', icon: Trash2 },
      { title: 'CSV & vCard Export', description: 'Download standardized contact data anytime for HubSpot, Salesforce, or Excel.', icon: Download },
      { title: 'Private Local Notes', description: 'Add notes about conversations that remain private on your device.', icon: Lock },
    ],
      }}
    />
  );
};

export default ContactManagementPage;
