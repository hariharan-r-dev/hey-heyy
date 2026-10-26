import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  Smartphone,
  Trash2,
  Download,
  Shield
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'faq',
    category: 'Resources',
    badge: 'COMMON QUESTIONS',
    title: 'Frequently Asked Questions',
    headline: <>Everything you need to<br />know about Zuntra Cards.</>,
    subheadline: 'Clear answers on card creation, recipient experience, NFC compatibility, privacy, and team management.',
    keyFeatures: [
      { title: 'Zero App Footprint', description: 'Neither you nor your contacts need to install a mobile app to create, view, or save contact details.', icon: Smartphone },
      { title: 'Standard vCard Compatibility', description: 'Supported natively by Apple iOS Contacts, Google Contacts, and Outlook.', icon: Download },
      { title: 'Accidental Deletion Protection', description: 'Contacts moved to trash remain recoverable for 30 days. No accidental permanent losses.', icon: Trash2 },
      { title: 'Strict Privacy Policy', description: 'We do not sell contact data, record microphone conversations, or inject ad trackers.', icon: Shield },
    ],
    faqs: [
      { q: 'Does the recipient need an app or account?', a: 'No. That is our core advantage over legacy platforms. Recipients view your card in their normal browser and tap one button to download your contact details directly into their phone.' },
      { q: 'Can I write my link to an NFC card myself?', a: 'Yes. You can use standard free NFC writing tools (like NFC Tools on iOS or Android) to write your permanent Zuntra link to any NTAG213/215/216 NFC card or tag.' },
      { q: 'How does lead capture work?', a: 'When someone views your card, they can tap "Connect / Exchange Info" to send you their name, email, phone, company, and notes. These leads are immediately synced to your workspace Lead CRM.' },
      { q: 'Can I export my contacts?', a: 'Yes. You can export all captured contacts at any time in standardized CSV or vCard format.' },
    ],
      }}
    />
  );
};

export default FaqPage;
