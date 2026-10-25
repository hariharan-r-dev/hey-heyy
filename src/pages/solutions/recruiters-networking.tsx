import { PageLayout } from "../PageLayout";

export default function RecruitersNetworkingPage(props: { onBack?: () => void; onNavigate?: (slug: string) => void }) {
  return (
    <PageLayout
      category="Solutions"
      title="Recruiters & Networking"
      badge="Talent Acquisition"
      description="Streamline campus recruiting, executive search, and career fairs. Collect candidate resumes and contact details in seconds."
      stats={[
  {
    "label": "Candidate Intake Time",
    "value": "15s"
  },
  {
    "label": "Resume Uploads",
    "value": "Direct PDF"
  },
  {
    "label": "Campus Fair Lead Lift",
    "value": "+280%"
  },
  {
    "label": "ATS Integrations",
    "value": "Greenhouse / Lever"
  }
]}
      features={[
  {
    "title": "Instant Candidate Intake",
    "description": "Candidates scan your QR badge to submit their LinkedIn URL, portfolio link, and resume PDF.",
    "tag": "Intake"
  },
  {
    "title": "Job Board Showcase",
    "description": "Feature your company's open requisitions and department hiring pages directly on your card.",
    "tag": "Careers"
  },
  {
    "title": "Batch Candidate Export",
    "description": "Export entire career fair cohorts into your ATS (Greenhouse, Lever, Ashby) with one click.",
    "tag": "Pipeline"
  }
]}
      highlights={[
  {
    "title": "Recruiting Workflows",
    "items": [
      "Candidate rating and interview note tags",
      "Automated 'Great meeting you' email confirmation",
      "Custom qualification questions (Graduation Year, Role)",
      "Eliminate lost paper resumes and disorganized binders"
    ]
  },
  {
    "title": "Brand Impression",
    "items": [
      "Showcases company culture, perks, and glassdoor rating",
      "High-tech first impression for tech and design candidates",
      "Shareable recruiter cards for alumni networking events",
      "Zero paper waste on campus visits"
    ]
  }
]}
      
      onBack={props.onBack}
      onNavigate={props.onNavigate}
    />
  );
}

export { RecruitersNetworkingPage };
