import { PageLayout } from "../PageLayout";

export default function SignInPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Platform"
      title="Sign In to Dashboard"
      badge="Secure Access"
      description="Access your Zuntra workspace to edit cards, view interaction telemetry, download captured leads, and manage organization settings."
      stats={[
  {
    "label": "Authentication Methods",
    "value": "Password / SSO / Magic Link"
  },
  {
    "label": "Session Security",
    "value": "Encrypted JWT"
  },
  {
    "label": "Multi-Factor Support",
    "value": "TOTP / SMS / WebAuthn"
  },
  {
    "label": "Uptime Guarantee",
    "value": "99.99%"
  }
]}
      features={[
  {
    "title": "Single Sign-On (SSO)",
    "description": "Log in with your corporate Okta, Microsoft Entra ID, or Google Workspace credentials.",
    "tag": "Enterprise"
  },
  {
    "title": "Passwordless Magic Links",
    "description": "Sign in instantly via one-time cryptographically signed email access links.",
    "tag": "Seamless"
  },
  {
    "title": "Biometric Passkey Support",
    "description": "Use Touch ID, Face ID, or Windows Hello for frictionless zero-password login.",
    "tag": "Modern"
  }
]}
      highlights={[
  {
    "title": "What You Can Manage",
    "items": [
      "Edit card bio, job title, phone numbers, and social links",
      "Review recent scan locations and contact save rates",
      "Download reciprocal leads captured at events and conferences",
      "Order replacement NFC smart cards and branded accessories"
    ]
  },
  {
    "title": "Security Controls",
    "items": [
      "Active session management and remote device logout",
      "Two-factor authentication requirement enforcement",
      "Zero plain-text password storage (Argon2id hashing)",
      "Automated anomaly detection and brute-force lockouts"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { SignInPage };
