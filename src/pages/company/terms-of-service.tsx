import { PageLayout } from "../PageLayout";

export default function TermsOfServicePage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Terms of Service"
      badge="Official Legal Terms"
      description="These Terms of Service govern your access to and use of Zuntra cards, software, hardware, event suites, and organizational workspaces."
      stats={[
  {
    "label": "Effective Date",
    "value": "October 2026"
  },
  {
    "label": "Governing Law",
    "value": "State of California"
  },
  {
    "label": "Service Uptime SLA",
    "value": "99.99%"
  },
  {
    "label": "Commercial Terms",
    "value": "Binding"
  }
]}
      features={[
  {
    "title": "Acceptable Use Policy",
    "description": "You agree not to use Zuntra cards for phishing, impersonation, unsolicited spam, or harmful activities.",
    "tag": "Compliance"
  },
  {
    "title": "Intellectual Property",
    "description": "You retain 100% full ownership of all logos, trademarks, and content uploaded to your digital card.",
    "tag": "Ownership"
  },
  {
    "title": "Subscription & Cancellation",
    "description": "Subscriptions renew automatically each billing cycle. You may cancel anytime with zero cancellation fees.",
    "tag": "Billing"
  }
]}
      highlights={[
  {
    "title": "Key Provisions",
    "items": [
      "Account eligibility and security responsibilities",
      "Custom domain hosting terms and SSL certificates",
      "Hardware warranty and replacement policies (1-year manufacturer guarantee)",
      "Workspace admin authority over company-issued cards"
    ]
  },
  {
    "title": "Enterprise Service Level Agreement",
    "items": [
      "99.99% monthly service uptime commitment for enterprise workspaces",
      "Financial credits provided for verified unscheduled downtime",
      "Scheduled maintenance conducted during low-traffic weekend windows",
      "24/7 emergency incident response for critical service outages"
    ]
  }
]}
      sections={[
  {
    "heading": "1. Acceptance of Terms",
    "body": "By creating an account, ordering NFC hardware, or utilizing any Zuntra service, you agree to be bound by these Terms of Service and our Privacy Policy. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity."
  },
  {
    "heading": "2. User Accounts & Responsibilities",
    "body": "You must provide accurate, current, and complete registration information. You are solely responsible for safeguarding your login credentials and for any activities or actions conducted under your account. You agree to immediately notify Zuntra of any unauthorized use or security breach."
  },
  {
    "heading": "3. Acceptable Use & Conduct",
    "body": "You agree not to use the Service to publish misleading, defamatory, fraudulent, or infringing material. You may not impersonate any person or entity, or falsely state or misrepresent your affiliation with a brand. Violation of acceptable use policies may result in immediate suspension or termination of your account without notice."
  },
  {
    "heading": "4. Physical Hardware Warranty",
    "body": "Zuntra NFC smart cards are backed by a 12-month manufacturer replacement warranty covering functional defects in the embedded NTAG chip. Warranty does not cover normal wear-and-tear, severe physical bending, water immersion beyond specified IP ratings, or intentional damage."
  },
  {
    "heading": "5. Limitation of Liability",
    "body": "To the maximum extent permitted by applicable law, Zuntra and its officers, directors, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to access the service."
  }
]}
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { TermsOfServicePage };
