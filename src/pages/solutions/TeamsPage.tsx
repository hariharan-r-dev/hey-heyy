import React from 'react';
import { TopicPageLayout } from '../TopicPageLayout';
import {
  BarChart3,
  Lock,
  Shield,
  Building2
} from 'lucide-react';

export const TeamsPage: React.FC = () => {
  return (
    <TopicPageLayout
      {...{
        slug: 'teams',
    category: 'Solutions',
    badge: 'TEAMS & WORKSPACES',
    title: 'For Teams & Departments',
    headline: 'Unified brand identity and centralized lead CRM for teams.',
    subheadline: 'Deploy standardized smart cards across your organization in minutes. Manage employee cards, locked brand assets, department directories, and lead attribution.',
    visual: {
      src: '/marketing/visuals/teams-card-grid.webp',
      alt: 'Team workspace console showing card deployment grid, department filters, and employee directory',
      width: 1760,
      height: 1120,
      caption: 'Centralized team management with locked templates and department organization',
      treatment: 'dashboard',
    },
    keyFeatures: [
      { title: 'Multi-Tenant Workspaces', description: 'Manage distinct workspaces for separate subsidiaries, teams, or events.', icon: Building2 },
      { title: 'Locked Brand Assets', description: 'Lock corporate logos, primary colors, and disclaimers from accidental edits.', icon: Lock },
      { title: 'Employee Performance', description: 'See which team members are generating the most card scans and leads.', icon: BarChart3 },
      { title: 'Role-Based Access', description: 'Owner, Admin, and Member permissions to maintain clean governance.', icon: Shield },
    ],
      }}
    />
  );
};

export default TeamsPage;
