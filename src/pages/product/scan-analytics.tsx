import { PageLayout } from "../PageLayout";

export default function ScanAnalyticsPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Product"
      title="Scan & View Analytics"
      badge="Interaction Telemetry"
      description="Measure the ROI of every handshake, conference booth, and sales meeting with privacy-first scan telemetry and team performance leaderboards."
      stats={[
  {
    "label": "Telemetry Latency",
    "value": "Real-Time"
  },
  {
    "label": "Unique Visitors Tracked",
    "value": "100%"
  },
  {
    "label": "City-Level Precision",
    "value": "Global"
  },
  {
    "label": "Top Link Tracking",
    "value": "Enabled"
  }
]}
      features={[
  {
    "title": "Geographic Heatmaps",
    "description": "Visualize exactly where around the world your cards and QR passes are being scanned.",
    "tag": "Spatial"
  },
  {
    "title": "Link Click Breakdown",
    "description": "Discover which links (Portfolio, Calendly, LinkedIn, Pitch Deck) recipients click most frequently.",
    "tag": "Engagement"
  },
  {
    "title": "Team Performance Benchmarks",
    "description": "Rank team members by active connections, contact saves, and reciprocal leads generated.",
    "tag": "Leaderboard"
  }
]}
      highlights={[
  {
    "title": "Analytics Metrics",
    "items": [
      "Total impressions vs. unique visitor counts",
      "Save Contact (.vcf) button conversion rate",
      "Device breakdown (iOS vs. Android vs. Desktop)",
      "Peak networking hour and day-of-week trends"
    ]
  },
  {
    "title": "Privacy First",
    "items": [
      "No invasive cookies or device fingerprinting",
      "Aggregated, anonymized IP geolocation data",
      "Zero selling or monetization of analytics data",
      "One-click CSV data export for internal reporting"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { ScanAnalyticsPage };
