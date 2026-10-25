import { PageLayout } from "../PageLayout";

export default function CreateAccountPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="Create Free Account"
      badge="Get Started in 60s"
      description="Claim your personalized digital business card URL, configure your profile, and start networking smarter today—no credit card required."
      stats={[
  {
    "label": "Time to First Card",
    "value": "< 60 Seconds"
  },
  {
    "label": "Credit Card Required",
    "value": "Never"
  },
  {
    "label": "Free Plan Duration",
    "value": "Lifetime Free"
  },
  {
    "label": "Setup Wizard",
    "value": "3 Simple Steps"
  }
]}
      features={[
  {
    "title": "Claim Your Custom URL",
    "description": "Secure your unique handle: zuntra.me/yourname before someone else claims it.",
    "tag": "Identity"
  },
  {
    "title": "Instant QR Generation",
    "description": "Get your high-resolution dynamic QR code immediately upon account creation.",
    "tag": "Instant"
  },
  {
    "title": "Zero Commitment",
    "description": "Start with our generous free tier and upgrade only when your team needs advanced features.",
    "tag": "Risk-Free"
  }
]}
      highlights={[
  {
    "title": "What's Included in Free Plan",
    "items": [
      "1 fully interactive digital business card",
      "Native .vcf contact file generation",
      "Social media and custom website link buttons",
      "High-contrast dynamic QR code",
      "Apple Wallet and Google Wallet pass download"
    ]
  },
  {
    "title": "Why Choose Zuntra",
    "items": [
      "Used by over 250,000 forward-thinking professionals",
      "Zero app downloads required for anyone you meet",
      "Beautiful, modern aesthetic engineered by top designers",
      "Sustainable, zero-paper environmental impact"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { CreateAccountPage };
