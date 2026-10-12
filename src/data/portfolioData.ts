export interface CaseStudyMonthlyMetric {
  month: string;
  interactions?: number | string;
  phoneCalls?: number | string;
  bookings?: number | string;
  directions?: number | string;
  websiteClicks?: number | string;
  highIntentTotal?: number | string;
  traffic?: number;
  milestone?: string;
}

export interface VerifiedProof {
  id: string;
  title: string;
  clientOrDomain: string;
  location?: string;
  platform: "Google Business Profile" | "Google Search Console" | "Medium Platform";
  timeframe: string;
  screenshotUrl: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  secondaryMetrics: { label: string; value: string }[];
  summary: string;
  externalLink?: string;
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  clientName: string;
  location: string;
  title: string;
  discipline: "Google Business Profile" | "Google SEO" | "Social Management" | "SEO + Social";
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
  monthlyTable?: CaseStudyMonthlyMetric[];
  screenshotUrl?: string;
  screenshotCaption?: string;
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
    id: "woodstack-usa",
    clientName: "WOODstack | Brownsville",
    clientCategory: "Retail & Streetwear Store",
    location: "Brooklyn, New York, USA",
    title: "Generated 3,723 Local Profile Interactions & 1,255 In-Store Direction Requests",
    discipline: "Google Business Profile",
    timeline: "5 Months (Mar – Jul 2026)",
    headlineMetric: "3,723",
    headlineMetricLabel: "Google Profile Interactions",
    summary:
      "WOODstack is a premier footwear and streetwear retail chain in New York. We overhauled their Brownsville Google Business Profile, dominating Brooklyn local map packs to drive physical foot traffic, calls, and website visits.",
    challenge:
      "Stiff retail competition in Brooklyn made it hard for the Brownsville store to capture shoppers looking for sneakers and streetwear on Google Maps, resulting in underutilized local foot traffic.",
    solution:
      "Targeted high-intent local footwear keywords, synchronized store geo-tags, maintained regular product showcases, and accelerated verified customer reviews to secure top-3 Google 3-Pack placement.",
    results: [
      { label: "Total Profile Interactions", value: "3,723 Verified" },
      { label: "Store Direction Requests", value: "1,255 Customers" },
      { label: "Direct Phone Calls", value: "717 Phone Inquiries" },
      { label: "Website Clicks", value: "1,255 Inbound Visits" },
    ],
    graphData: [
      { month: "Mar", traffic: 1400, milestone: "1,400 Interactions (Peak) - Initial Local SEO Surge & Spring Drop" },
      { month: "Apr", traffic: 400, milestone: "400 Interactions - Sustained baseline traffic and review campaign" },
      { month: "May", traffic: 650, milestone: "650 Interactions - Summer apparel showcase and local rank climb" },
      { month: "Jun", traffic: 685, milestone: "685 Interactions - Top-3 Google 3-Pack visibility in Brooklyn" },
      { month: "Jul", traffic: 450, milestone: "450 Interactions - Steady ongoing foot-traffic conversion" },
    ],
    monthlyTable: [
      { month: "March 2026", interactions: "~1,400 (Peak)", phoneCalls: "280", bookings: "140", directions: "490", websiteClicks: "490", milestone: "Spring footwear launch & initial optimization surge" },
      { month: "April 2026", interactions: "~400", phoneCalls: "80", bookings: "40", directions: "140", websiteClicks: "140", milestone: "Review generation & ongoing citation sync" },
      { month: "May 2026", interactions: "~650", phoneCalls: "130", bookings: "65", directions: "227", websiteClicks: "228", milestone: "Summer collection & localized product schema" },
      { month: "June 2026", interactions: "685 (Specific)", phoneCalls: "137", bookings: "68", directions: "240", websiteClicks: "240", milestone: "Consistent top-3 Google Maps ranking in Brooklyn" },
      { month: "July 2026", interactions: "~450", phoneCalls: "90", bookings: "45", directions: "158", websiteClicks: "157", milestone: "Steady in-store foot traffic conversion" },
      { month: "5-Month Total", interactions: "3,723 Total", phoneCalls: "~717", bookings: "~358", directions: "~1,255", websiteClicks: "~1,255", milestone: "3,723 Verified Google Business Profile Interactions" },
    ],
    screenshotUrl: "/case-studies/woodstack-usa-gmb.png",
    screenshotCaption: "Verified Google Business Profile Performance Dashboard: 3,723 Total Interactions (WOODstack | Brownsville, Brooklyn, NY)",
    keyTakeaway:
      "Dominating Google Maps in a dense metro area like Brooklyn converted search queries directly into in-store foot traffic and phone calls.",
  },
  {
    id: "phonebuzz-goldcoast",
    clientName: "Phone Buzz - Repair Centre",
    clientCategory: "Gadget & Phone Repair Services",
    location: "Gold Coast, Queensland, Australia",
    title: "Captured 973 High-Intent Repair Leads & 317 In-Store Directions",
    discipline: "Google Business Profile",
    timeline: "6 Months (Mar – Aug 2026)",
    headlineMetric: "973",
    headlineMetricLabel: "High-Intent Repair Leads",
    summary:
      "Phone Buzz operates inside Benowa Gardens Shopping Centre in Gold Coast, Australia. We targeted high-urgency repair queries (cracked screens, battery swaps, liquid diagnostics) to dominate the local area.",
    challenge:
      "Emergency phone repairs require instantaneous local visibility; customers with broken screens call the first 3 businesses on Google Maps. Competitor saturation was pushing Phone Buzz down.",
    solution:
      "Rebuilt Google Business Profile service catalogs, optimized suburb radius targeting across Benowa & Gold Coast, added keyword-rich photo updates, and systematized customer reviews.",
    results: [
      { label: "High-Intent Lead Inquiries", value: "973 Customer Leads" },
      { label: "Emergency Phone Calls", value: "216 Direct Inquiries" },
      { label: "Store Direction Requests", value: "317 Direction Clicks" },
      { label: "Website Quote Clicks", value: "321 Online Inquiries" },
    ],
    graphData: [
      { month: "Mar", traffic: 170, milestone: "170 Interactions - Profile overhaul & service category expansion" },
      { month: "Apr", traffic: 150, milestone: "150 Interactions - Suburb citation and local directory alignment" },
      { month: "May", traffic: 170, milestone: "170 Interactions - High-intent keyword tagging for iPhone/iPad repairs" },
      { month: "Jun", traffic: 175, milestone: "175 Interactions - Top-3 local 3-pack placement secured" },
      { month: "Jul", traffic: 208, milestone: "208 Interactions (Peak) - Highest monthly repair customer volume" },
      { month: "Aug", traffic: 100, milestone: "100 Interactions - Sustained high-margin commercial repair leads" },
    ],
    monthlyTable: [
      { month: "March 2026", interactions: "~170", phoneCalls: "38", bookings: "21", directions: "55", websiteClicks: "56", highIntentTotal: "170", milestone: "Profile setup & service catalog update" },
      { month: "April 2026", interactions: "~150", phoneCalls: "33", bookings: "18", directions: "49", websiteClicks: "50", highIntentTotal: "150", milestone: "Gold Coast local citation alignment" },
      { month: "May 2026", interactions: "~170", phoneCalls: "38", bookings: "21", directions: "55", websiteClicks: "56", highIntentTotal: "170", milestone: "Geotagged image updates & review velocity" },
      { month: "June 2026", interactions: "~175", phoneCalls: "40", bookings: "22", directions: "57", websiteClicks: "56", highIntentTotal: "175", milestone: "Ranked #1 for local phone repair Benowa" },
      { month: "July 2026", interactions: "208 (Peak)", phoneCalls: "45", bookings: "25", directions: "68", websiteClicks: "70", highIntentTotal: "208", milestone: "All-time record monthly local repair leads" },
      { month: "August 2026", interactions: "~100", phoneCalls: "22", bookings: "12", directions: "33", websiteClicks: "33", highIntentTotal: "100", milestone: "Consistent high-margin booking pipeline" },
      { month: "6-Month Total", interactions: "~973 Total", phoneCalls: "216", bookings: "119", directions: "317", websiteClicks: "321", highIntentTotal: "973", milestone: "973 Total High-Intent Local Customer Inquiries" },
    ],
    screenshotUrl: "/case-studies/phonebuzz-goldcoast-gmb.png",
    screenshotCaption: "Verified Google Business Profile Performance Dashboard: 973 High-Intent Leads (Phone Buzz, Gold Coast, Australia)",
    keyTakeaway:
      "For emergency tech repair businesses, ranking in the top 3 of Google Maps captures customers at their exact moment of highest buying intent.",
  },
  {
    id: "trendingprompt-viral",
    clientName: "TrendingPrompt.in",
    clientCategory: "AI Prompts & Creative Directory",
    location: "Global Search Demand",
    title: "Delivered 20,200 Google Clicks in a Single 24-Hour Window",
    discipline: "Google SEO",
    timeline: "24-Hour Velocity",
    headlineMetric: "20.2K",
    headlineMetricLabel: "Clicks in 24 Hours",
    summary:
      "Capitalized on trending viral AI image and prompt search surges. Deployed high-speed indexation and CTR-optimized snippet architecture to dominate breakout search queries instantly.",
    challenge:
      "Viral search keywords have a short shelf-life; traditional slow SEO cycles miss the traffic spike entirely unless pages index and rank within hours.",
    solution:
      "Rapid content architecture, automated FAQ/Image schema, real-time index pings, and high-CTR title engineering designed to win top-3 Google spots during breakout traffic.",
    results: [
      { label: "24-Hour Organic Clicks", value: "20,200 Google Clicks" },
      { label: "24-Hour Impressions", value: "152,000 Impressions" },
      { label: "Average Click-Through Rate", value: "13.3% CTR (3x Normal)" },
      { label: "Average Search Position", value: "Top 5.x on Google" },
    ],
    graphData: [
      { month: "06:30 AM", traffic: 600, milestone: "First index wave - 600 clicks/hr" },
      { month: "10:30 AM", traffic: 1400, milestone: "Ranked #1 for viral prompt terms" },
      { month: "12:30 PM", traffic: 1650, milestone: "Peak velocity - 1,650 clicks/hr" },
      { month: "04:30 PM", traffic: 1100, milestone: "Sustained high-volume engagement" },
      { month: "08:30 PM", traffic: 1250, milestone: "Evening traffic surge across top pages" },
      { month: "24h Total", traffic: 2020, milestone: "20,200 Total Clicks in 24 Hours" },
    ],
    screenshotUrl: "/case-studies/trendingprompt-viral-gsc.jpg",
    screenshotCaption: "Google Search Console 24-Hour Snapshot: 20.2K Clicks, 152K Impressions, 13.3% CTR (TrendingPrompt.in)",
    keyTakeaway:
      "Aligning CTR-optimized meta titles with breakout search demand delivers explosive organic traffic in record time.",
  },
  {
    id: "getcito-b2b",
    clientName: "Getcito.com",
    clientCategory: "B2B SaaS & Tech Platform",
    location: "Global B2B Market",
    title: "Scaled Search Impressions to 506,000 with Average Position 12.1",
    discipline: "Google SEO",
    timeline: "3 Months",
    headlineMetric: "506K",
    headlineMetricLabel: "Search Impressions",
    summary:
      "Getcito needed commercial search presence across competitive software queries. We fixed indexing bottlenecks, structured clear topical clusters, and scaled search impressions past half a million.",
    challenge:
      "The domain was struggling with crawl depth issues and keyword cannibalization, keeping high-value commercial pages buried past page 4 of Google.",
    solution:
      "Streamlined site hierarchy, created clear programmatic topic clusters, resolved crawl traps, and built authoritative internal link structures.",
    results: [
      { label: "Total Google Impressions", value: "506,000 Impressions" },
      { label: "Organic Search Clicks", value: "1,960 Clicks" },
      { label: "Average Search Position", value: "12.1 across primary terms" },
      { label: "Coverage Growth", value: "+340% Indexed Pages" },
    ],
    graphData: [
      { month: "M1", traffic: 95, milestone: "Fixed site architecture & crawl traps" },
      { month: "M2", traffic: 220, milestone: "Published targeted product topic hubs" },
      { month: "M3", traffic: 506, milestone: "Surpassed 500,000 organic impressions" },
    ],
    screenshotUrl: "/case-studies/getcito-gsc-performance.jpg",
    screenshotCaption: "Google Search Console 3-Month Performance: 506K Impressions, 1.96K Clicks (Getcito.com)",
    keyTakeaway:
      "Fixing crawlability and organizing content into topical clusters unlocks exponential search visibility across competitive niches.",
  },
];

export const VERIFIED_PROOFS: VerifiedProof[] = [
  {
    id: "proof-woodstack",
    title: "WOODstack | Brownsville - USA",
    clientOrDomain: "woodstack.com",
    location: "Brooklyn, New York, USA",
    platform: "Google Business Profile",
    timeframe: "March – July 2026 (5 Months)",
    screenshotUrl: "/case-studies/woodstack-usa-gmb.png",
    headlineMetric: "3,723",
    headlineMetricLabel: "Total Profile Interactions",
    secondaryMetrics: [
      { label: "Store Directions", value: "1,255" },
      { label: "Phone Calls", value: "717" },
      { label: "Website Clicks", value: "1,255" },
      { label: "Peak Month", value: "1,400" },
    ],
    summary: "Dominated Brooklyn local 3-pack map rankings for footwear retail, driving 1,255 in-store navigation requests and 717 phone inquiries directly to the store.",
  },
  {
    id: "proof-phonebuzz",
    title: "Phone Buzz - Repair Centre",
    clientOrDomain: "phonebuzz.com.au",
    location: "Gold Coast, Queensland, Australia",
    platform: "Google Business Profile",
    timeframe: "March – August 2026 (6 Months)",
    screenshotUrl: "/case-studies/phonebuzz-goldcoast-gmb.png",
    headlineMetric: "973",
    headlineMetricLabel: "High-Intent Repair Leads",
    secondaryMetrics: [
      { label: "Store Directions", value: "317" },
      { label: "Direct Calls", value: "216" },
      { label: "Website Quotes", value: "321" },
      { label: "Peak Month", value: "208" },
    ],
    summary: "Ranked in the top 3 of Google Maps across Benowa and Gold Coast for urgent phone & tablet repairs, turning emergency searches into paying customers.",
  },
  {
    id: "proof-trendingprompt",
    title: "TrendingPrompt.in - Viral SEO",
    clientOrDomain: "trendingprompt.in",
    location: "Global Search Volume",
    platform: "Google Search Console",
    timeframe: "Single 24-Hour Performance",
    screenshotUrl: "/case-studies/trendingprompt-viral-gsc.jpg",
    headlineMetric: "20.2K",
    headlineMetricLabel: "Clicks in 24 Hours",
    secondaryMetrics: [
      { label: "Impressions", value: "152,000" },
      { label: "Average CTR", value: "13.3%" },
      { label: "Avg Position", value: "5.x" },
      { label: "Top Pages", value: "Top 3 Rank" },
    ],
    summary: "Capitalized on breakout viral AI search demand with CTR-optimized snippets, delivering 20,200 organic clicks in a single day at a 13.3% CTR.",
  },
  {
    id: "proof-getcito",
    title: "Getcito.com - B2B Visibility",
    clientOrDomain: "getcito.com",
    location: "Global Software Search",
    platform: "Google Search Console",
    timeframe: "3 Months Performance",
    screenshotUrl: "/case-studies/getcito-gsc-performance.jpg",
    headlineMetric: "506K",
    headlineMetricLabel: "Total Search Impressions",
    secondaryMetrics: [
      { label: "Total Clicks", value: "1,960" },
      { label: "Average CTR", value: "0.4%" },
      { label: "Avg Position", value: "12.1" },
      { label: "Crawl Health", value: "100% Clean" },
    ],
    summary: "Restructured site hierarchy and content clusters for B2B SaaS software, scaling search visibility past half a million organic impressions.",
  },
  {
    id: "proof-lixo",
    title: "Lixo.in - E-Commerce Growth",
    clientOrDomain: "lixo.in",
    location: "E-Commerce Market",
    platform: "Google Search Console",
    timeframe: "3 Months Performance",
    screenshotUrl: "/case-studies/lixo-ecommerce-gsc.jpg",
    headlineMetric: "4.12K",
    headlineMetricLabel: "Organic Google Clicks",
    secondaryMetrics: [
      { label: "Impressions", value: "346,000" },
      { label: "Average CTR", value: "1.2%" },
      { label: "Avg Position", value: "7.6 (Page 1)" },
      { label: "Commercial Clicks", value: "4,120+" },
    ],
    summary: "Optimized category hierarchies, faceted filters, and transactional metadata, achieving an average position of 7.6 on page 1 of Google.",
  },
  {
    id: "proof-newsite",
    title: "New Domain - 25-Day Fast Rank",
    clientOrDomain: "Fresh Domain Launch",
    location: "New Website Launch",
    platform: "Google Search Console",
    timeframe: "25 Days (Aug 20 – Sep 13, 2026)",
    screenshotUrl: "/case-studies/new-site-25days-gsc.png",
    headlineMetric: "527",
    headlineMetricLabel: "Clicks in First 25 Days",
    secondaryMetrics: [
      { label: "Impressions", value: "5,740" },
      { label: "Average CTR", value: "9.2%" },
      { label: "Avg Position", value: "27.1" },
      { label: "Index Speed", value: "< 24 Hours" },
    ],
    summary: "Bypassed standard sandbox delays on a brand new domain: generated 527 organic clicks and 5.74K impressions within just 25 days of going live.",
  },
  {
    id: "proof-medium",
    title: "Medium Organic Thought Leadership",
    clientOrDomain: "medium.com/@AyanFreelancer",
    location: "Personal Authority & Audience",
    platform: "Medium Platform",
    timeframe: "June 2026 (30 Days)",
    screenshotUrl: "/case-studies/medium-organic-growth.png",
    headlineMetric: "348",
    headlineMetricLabel: "Organic Presentations",
    secondaryMetrics: [
      { label: "Full Reads", value: "31" },
      { label: "Article Views", value: "56" },
      { label: "New Followers", value: "+20" },
      { label: "Subscribers", value: "+19" },
    ],
    summary: "Built authentic search & growth audience on Medium, converting high-intent readers into 20 new followers and 19 email subscribers in one month.",
    externalLink: "https://medium.com/@AyanFreelancer",
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
