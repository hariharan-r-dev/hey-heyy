import { PageLayout } from "../PageLayout";

export default function ContactSupportPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Resources"
      title="Contact Support"
      badge="We're Here to Help"
      description="Get in touch with our product specialists, technical support engineers, or enterprise hardware deployment architects."
      stats={[
  {
    "label": "Average Response Time",
    "value": "< 15 Mins"
  },
  {
    "label": "Customer Satisfaction",
    "value": "98.7%"
  },
  {
    "label": "Channels",
    "value": "Email / Chat / Phone"
  },
  {
    "label": "Enterprise SLA",
    "value": "1 Hour"
  }
]}
      features={[
  {
    "title": "Live In-App Chat",
    "description": "Chat with a human specialist directly inside your dashboard for fast real-time troubleshooting.",
    "tag": "Live Chat"
  },
  {
    "title": "Email Support Desk",
    "description": "Send complex technical integration queries or bulk order questions to support@zuntra.me.",
    "tag": "Email"
  },
  {
    "title": "Enterprise Dedicated Hotline",
    "description": "24/7 dedicated telephone assistance for customers on Enterprise Workspace plans.",
    "tag": "Enterprise"
  }
]}
      highlights={[
  {
    "title": "How We Can Help",
    "items": [
      "Custom NFC card hardware design and proof review",
      "Assistance configuring Okta or Azure AD SAML/SCIM",
      "Troubleshooting CRM webhook and Zapier triggers",
      "Ordering custom bulk hardware accessories and signage"
    ]
  },
  {
    "title": "Global Support Hours",
    "items": [
      "North America: 24/7 continuous coverage",
      "Europe & UK: 07:00 - 22:00 CET",
      "Asia-Pacific: 09:00 - 18:00 SGT",
      "Critical incident emergency escalations 24/7/365"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ContactSupportPage };
