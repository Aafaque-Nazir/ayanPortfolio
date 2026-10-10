export interface CaseStudy {
  id: string;
  clientCategory: string;
  title: string;
  discipline: "Google SEO" | "Social Management" | "SEO + Social";
  timeline: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  graphData: {
    month: string;
    traffic: number;
    milestone?: string;
  }[];
  keyTakeaway: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  cadence: string;
}

export interface PlaybookStep {
  step: string;
  title: string;
  tagline: string;
  details: string;
  tactics: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "b2b-saas-indexing",
    clientCategory: "Software (B2B SaaS)",
    title: "Grew Monthly Google Traffic from 110K to 580K",
    discipline: "Google SEO",
    timeline: "6 Months",
    headlineMetric: "580,000",
    headlineMetricLabel: "Monthly Google Visitors",
    summary:
      "A software company had thousands of duplicate pages slowing down their site and confusing Google. We cleaned up errors, rebuilt page hierarchy, and ranked their core product pages.",
    challenge:
      "Over 100,000 auto-generated empty pages were confusing search crawlers, while their core product pages were stuck past page 3 on Google.",
    solution:
      "Deleted 85,000 dead URLs, fixed site speed issues, and restructured all primary product pages around search terms that software buyers actually look for.",
    results: [
      { label: "Monthly Google Visits", value: "580K (up from 110K)" },
      { label: "Top 3 Google Rankings", value: "+148 Keywords" },
      { label: "Site Crawl Speed", value: "84% Faster" },
      { label: "New Pipeline Created", value: "$420K in Sales Leads" },
    ],
    graphData: [
      { month: "M1", traffic: 110, milestone: "Deleted dead pages & fixed speed" },
      { month: "M2", traffic: 140 },
      { month: "M3", traffic: 215, milestone: "New high-intent pages went live" },
      { month: "M4", traffic: 325 },
      { month: "M5", traffic: 460, milestone: "Jumped to page 1 on core keywords" },
      { month: "M6", traffic: 580, milestone: "Stable #1 spot on primary search terms" },
    ],
    keyTakeaway:
      "Cleaning up junk pages gave Google a clear path to rank the pages that actually generate revenue.",
  },
  {
    id: "d2c-social-virality",
    clientCategory: "D2C Brand & Online Store",
    title: "Scaled Organic Social Reach to 4.2 Million Impressions",
    discipline: "Social Management",
    timeline: "90 Days",
    headlineMetric: "4.2M+",
    headlineMetricLabel: "Organic Social Reach",
    summary:
      "Took over full day-to-day management of their Instagram and LinkedIn accounts. Built a consistent content calendar, optimized their bio funnels, and engaged daily with target communities.",
    challenge:
      "The brand had dormant social accounts with irregular posting, low engagement below 1%, and practically zero traffic coming into their website from social.",
    solution:
      "Managed the accounts end-to-end: planned monthly content pillars, wrote engaging copy & educational carousels, revamped bio links, and engaged in community comments and DMs daily.",
    results: [
      { label: "Organic Social Reach", value: "4,200,000+ Impressions" },
      { label: "Engagement Rate", value: "5.8% (up from 0.8%)" },
      { label: "Qualified Followers", value: "+34,000 Active" },
      { label: "Website Referral Clicks", value: "+310% Jump" },
    ],
    graphData: [
      { month: "M1", traffic: 80, milestone: "Revamped profiles, bio funnels & content plan" },
      { month: "M2", traffic: 180, milestone: "Daily posting & community engagement started" },
      { month: "M3", traffic: 340, milestone: "Breakout educational carousels went wide" },
      { month: "M4", traffic: 520 },
      { month: "M5", traffic: 710, milestone: "Consistent monthly inbound inquiry flow" },
      { month: "M6", traffic: 850, milestone: "Established as the go-to authority brand" },
    ],
    keyTakeaway:
      "Consistency and active community engagement beat random posting every single time.",
  },
  {
    id: "fintech-algorithm-recovery",
    clientCategory: "Finance & Advisory",
    title: "Recovered Traffic After Google Update & Tripled Leads",
    discipline: "SEO + Social",
    timeline: "5 Months",
    headlineMetric: "2.4x",
    headlineMetricLabel: "More Inbound Leads",
    summary:
      "A financial advisory firm lost 45% of its search traffic after a Google update. We proved trust to Google, consolidated thin pages, and managed a weekly social thought-leadership strategy.",
    challenge:
      "Old generic blog posts lacked author proof, triggering algorithmic penalties and dropping their rankings across major search queries.",
    solution:
      "Added real advisor credentials, combined 30 thin articles into comprehensive guides, and synchronized their social media to amplify every research piece.",
    results: [
      { label: "Traffic Recovery", value: "100% Back + 38% New Record" },
      { label: "Booked Client Calls", value: "+140% More Calls" },
      { label: "Industry Authority", value: "24 Trusted Media Mentions" },
      { label: "Keyword Positions", value: "Back on Page 1" },
    ],
    graphData: [
      { month: "M1", traffic: 85, milestone: "Audited site & added author proof" },
      { month: "M2", traffic: 98 },
      { month: "M3", traffic: 145, milestone: "Combined 30 weak posts into guides" },
      { month: "M4", traffic: 190 },
      { month: "M5", traffic: 240, milestone: "Google rewarded the site with page 1" },
      { month: "M6", traffic: 290, milestone: "All-time high client bookings" },
    ],
    keyTakeaway:
      "When your search content and social presence align with real authority, rankings and trust come back quickly.",
  },
];

export const PLAYBOOK_STEPS: PlaybookStep[] = [
  {
    step: "01",
    title: "Website & Social Media Audit",
    tagline: "Finding what is broken and blocking your growth.",
    details:
      "I review your website technical health, search rankings, and audit your social profiles (branding, bio, posting schedule, and audience engagement).",
    tactics: [
      "Find slow pages and technical errors hurting your Google rank",
      "Audit existing social profiles, bio links, and highlight funnels",
      "Analyze your past social posts to see what worked and what didn't",
      "Deliver a clean, prioritized action plan for both channels",
    ],
  },
  {
    step: "02",
    title: "Keyword & Social Content Plan",
    tagline: "Planning content that ranks and builds your brand.",
    details:
      "We map out high-intent search terms for your website and create weekly social media content pillars that attract your exact target audience.",
    tactics: [
      "Find search keywords your competitors missed",
      "Build a monthly social calendar with clear weekly pillars",
      "Organize website pages so Google understands your expertise",
      "Draft engaging captions, carousel ideas, and brand posts",
    ],
  },
  {
    step: "03",
    title: "Full Account Management & Posting",
    tagline: "Day-to-day management so you don't have to worry.",
    details:
      "I manage your social profiles: scheduling posts, formatting graphics and carousels, writing compelling captions, and actively engaging with your community.",
    tactics: [
      "Regular scheduled posting on Instagram, LinkedIn, or X",
      "Daily reply to comments and community engagement",
      "Optimizing hashtags, tags, and posting time for maximum reach",
      "Consistent brand voice across all active platforms",
    ],
  },
  {
    step: "04",
    title: "Turn Traffic & Followers into Customers",
    tagline: "Making sure visitors and followers actually buy.",
    details:
      "Traffic and followers mean nothing if nobody buys. We optimize your website calls-to-action and social bio funnels so people book calls or buy products.",
    tactics: [
      "Optimized bio links and landing pages to capture leads",
      "Simple, fast contact forms that don't lose inquiries",
      "Monthly plain-English reports showing real growth and leads",
      "Ongoing tweaks so your growth keeps compounding every month",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "seo-architecture",
    number: "01",
    title: "Monthly Google SEO Growth",
    tagline: "Rank on page 1 of Google and get steady customer traffic.",
    description:
      "Complete hands-on SEO for your website. I fix technical errors, optimize your pages, write keyword plans, and help you get trusted links.",
    deliverables: [
      "Full technical audit and ongoing site speed fixes",
      "Keyword research focused on buyers, not vanity clicks",
      "On-page optimization for title tags, headers, and content",
      "Google Search Console & analytics tracking",
      "Monthly plain-English report on rankings and leads",
    ],
    bestFor: "Businesses wanting steady, free Google traffic without paying for ads",
    cadence: "Monthly Retainer",
  },
  {
    id: "social-management",
    number: "02",
    title: "Full Social Media Management",
    tagline: "Hands-off management for your Instagram, LinkedIn, or X channels.",
    description:
      "I handle your social media presence end-to-end: monthly content strategy, writing posts and carousels, daily community management, and audience growth.",
    deliverables: [
      "Monthly content calendar with 16–20 curated posts & carousels",
      "Engaging copywriting tailored to your brand voice",
      "Bio, profile links, and highlight funnel optimization",
      "Daily community engagement and comment monitoring",
      "Monthly analytics report on reach, engagement, and follower growth",
    ],
    bestFor: "Brands, founders, and businesses who want an active, growing social presence without spending hours managing it themselves",
    cadence: "Monthly Management Plan",
  },
  {
    id: "forensic-audit",
    number: "03",
    title: "SEO & Social Media Audit",
    tagline: "A complete diagnosis of your website and social profiles.",
    description:
      "A thorough review of your Google rankings, website speed, and social media channels. You get an actionable, prioritized roadmap of what to fix to start growing.",
    deliverables: [
      "Full crawl of every page on your website",
      "Social profile audit (branding, bio, posting cadence, engagement)",
      "Competitor gap report showing where you can win",
      "Step-by-step prioritized action checklist",
      "60-minute 1-on-1 strategy call to review findings together",
    ],
    bestFor: "Websites that lost traffic or brands needing a clear roadmap to reboot their social channels",
    cadence: "One-Time Project (2 Weeks)",
  },
];
