import { PageLayout } from "../PageLayout";

export default function ForFreelancersPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="For Freelancers"
      badge="Portfolio & Client Magnet"
      description="Combine your portfolio, client testimonials, booking calendar, and contact card into one seamless mobile landing page."
      stats={[
  {
    "label": "Client Inquiries",
    "value": "+42%"
  },
  {
    "label": "Booking Speed",
    "value": "1-Click"
  },
  {
    "label": "Media Showcases",
    "value": "Unlimited"
  },
  {
    "label": "Direct Payments",
    "value": "Stripe / PayPal"
  }
]}
      features={[
  {
    "title": "Embedded Work Showcase",
    "description": "Feature your design portfolio, GitHub repos, photography carousels, or video showreels.",
    "tag": "Portfolio"
  },
  {
    "title": "Calendar Booking Embed",
    "description": "Allow prospective clients to book discovery calls on your Calendly or Cal.com directly from the card.",
    "tag": "Conversion"
  },
  {
    "title": "Payment & Tip Links",
    "description": "Accept deposits or freelance payments via Stripe, Venmo, PayPal, or Buy Me a Coffee.",
    "tag": "Monetization"
  }
]}
      highlights={[
  {
    "title": "Freelance Toolkit",
    "items": [
      "Client inquiry form with email notifications",
      "Custom brand color palettes and typography",
      "Case study PDF download buttons",
      "Showcase recent awards and client reviews"
    ]
  },
  {
    "title": "Friction-Free Pitching",
    "items": [
      "Share in Zoom chats, LinkedIn DMs, or in-person",
      "Clients never need to download an app",
      "Fast 60fps scrolling and mobile-first layout",
      "Track how many prospects view your portfolio links"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ForFreelancersPage };
