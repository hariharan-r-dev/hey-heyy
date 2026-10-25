import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  QrCode,
  BarChart3,
  Download,
  Check,
  Video,
  Building2
} from 'lucide-react';

export const VirtualBackgroundsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'virtual-backgrounds',
    category: 'Products',
    badge: 'VIDEO CONFERENCING',
    title: 'Virtual Backgrounds with QR Code',
    headline: 'Turn every Zoom, Teams, and Google Meet call into instant connections.',
    subheadline: 'Generate crisp, professional 1920×1080 virtual backgrounds with your company logo and dynamic personal QR code positioned so it never gets blocked by your camera silhouette.',
    visual: {
      src: '/marketing/visuals/virtual-background.webp',
      alt: 'Zoom and Teams 16:9 meeting canvas with branded wallpaper and silhouette-safe QR badge placement',
      width: 1760,
      height: 1040,
      caption: '1080p meeting wallpaper with silhouette-safe QR placement',
      treatment: 'scene',
    },
    keyFeatures: [
      { title: '1-Click High-Res Export', description: 'Download crisp 1080p PNG wallpapers optimized for Zoom, Microsoft Teams, and Google Meet.', icon: Video },
      { title: 'Silhouette-Aware QR Placement', description: 'Your personal dynamic QR badge is positioned high and to the side, visible while you speak.', icon: QrCode },
      { title: 'Consistent Team Branding', description: 'Company logos, department colors, and typography standards enforced across remote teams.', icon: Building2 },
      { title: 'Live Meeting Attribution', description: 'Track how many participants scanned your background code during webinars and presentations.', icon: BarChart3 },
      { title: 'Instant vCard Download', description: 'Webinar attendees scan your video stream with their phone to save your contact immediately.', icon: Download },
      { title: 'Zero Software Plugins', description: 'Upload directly as a virtual background in your existing video conference app.', icon: Check },
    ],
    steps: [
      { step: '01', title: 'Choose Background Style', description: 'Select an executive gradient, minimal solid, or custom branded corporate template.' },
      { step: '02', title: 'Embed Dynamic QR', description: 'Your personal QR code is embedded automatically with crisp camera contrast.' },
      { step: '03', title: 'Upload to Video App', description: 'Upload to Zoom, Teams, or Google Meet settings and start connecting on calls.' },
    ],
    comparison: {
      legacy: 'Pasting links into Zoom chat gets lost in scroll, expires when meeting ends, or requires tedious manual typing.',
      zuntra: 'Your dynamic QR badge stays visible on screen throughout the call, allowing effortless 1-tap phone scans.',
    },
    faqs: [
      { q: 'Will my camera silhouette block the QR code?', a: 'No. Our templates position your dynamic QR code in the upper right or left third of the 16:9 canvas, leaving ample room for standard head-and-shoulder camera framing.' },
      { q: 'Does it work with Zoom, Microsoft Teams, and Google Meet?', a: 'Yes. The exported wallpaper is a standard 1920×1080 image file compatible with all video conferencing platforms that support custom virtual backgrounds.' },
      { q: 'Can attendees scan the QR code off their computer screen?', a: 'Yes! Modern smartphone cameras easily lock onto the high-contrast QR code directly from attendee laptop or desktop monitors.' },
      { q: 'Can our company enforce a uniform background across all employees?', a: 'Yes. Workspace admins can generate standardized team virtual backgrounds with locked brand assets for every team member.' },
    ],
      }}
    />
  );
};

export default VirtualBackgroundsPage;
