import { PageLayout } from "../PageLayout";

export default function SecurityArchitecturePage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Company"
      title="Security Architecture"
      badge="Enterprise Trust"
      description="Deep dive into Zuntra's multi-layered security infrastructure, encryption protocols, access controls, and compliance certifications."
      stats={[
  {
    "label": "Data Encryption in Transit",
    "value": "TLS 1.3"
  },
  {
    "label": "Data Encryption at Rest",
    "value": "AES-256"
  },
  {
    "label": "SOC-2 Type II",
    "value": "Annual Audit"
  },
  {
    "label": "Penetration Testing",
    "value": "Quarterly"
  }
]}
      features={[
  {
    "title": "Cryptographic Pass Signing",
    "description": "Apple Wallet passes and admission QR codes are signed using elliptic curve digital signatures.",
    "tag": "Signatures"
  },
  {
    "title": "Zero-Knowledge Exchange",
    "description": "Card views and contact downloads execute without storing persistent tracking cookies on recipient phones.",
    "tag": "Zero-Knowledge"
  },
  {
    "title": "SAML 2.0 & SCIM 2.0",
    "description": "Seamless automated integration with corporate Identity Providers (Okta, Microsoft Entra ID, Ping).",
    "tag": "IdP"
  }
]}
      highlights={[
  {
    "title": "Infrastructure Safeguards",
    "items": [
      "Distributed across multi-region high-availability cloud infrastructure",
      "Automated DDoS protection and Web Application Firewall (WAF)",
      "Immutable audit logs of all administrative configuration changes",
      "Nightly automated encrypted backups with geo-redundancy"
    ]
  },
  {
    "title": "Compliance & Auditing",
    "items": [
      "SOC-2 Type II independent security examination reports",
      "Full compliance with GDPR (EU) and CCPA (California)",
      "Quarterly external black-box and white-box penetration testing",
      "Continuous automated vulnerability scanning across dependencies"
    ]
  }
]}
      sections={[
  {
    "heading": "1. Network & Transport Security",
    "body": "All external and internal network traffic is encrypted using modern TLS 1.3 protocols with forward secrecy cipher suites. We enforce HTTP Strict Transport Security (HSTS) with preloading across all *.zuntra.me and custom vanity domains to prevent man-in-the-middle attacks."
  },
  {
    "heading": "2. Data Protection & Cryptography",
    "body": "Customer data at rest is encrypted using industry-standard AES-256 encryption. Cryptographic keys are managed via dedicated Hardware Security Modules (HSMs) with strict separation of duties and automated 90-day rotation cycles."
  },
  {
    "heading": "3. Identity & Access Governance",
    "body": "Enterprise customers can enforce Single Sign-On (SSO) via SAML 2.0 and automated employee deprovisioning via SCIM 2.0. Internal access to production systems requires hardware security keys (FIDO2 WebAuthn), multi-factor authentication, and just-in-time privilege escalation."
  },
  {
    "heading": "4. Vulnerability Disclosure & Bug Bounty",
    "body": "We operate a responsible disclosure program encouraging independent security researchers to report potential vulnerabilities. Please submit security inquiries and responsible disclosure reports to security@zuntra.me."
  }
]}
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { SecurityArchitecturePage };
