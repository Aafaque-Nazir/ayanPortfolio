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

export interface ProofHighlight {
  label: string;
  value: string;
  explanation: string;
}

export interface CaseStudyProofExplainer {
  dashboardUrl: string;
  platformName: string;
  whatItShows: string;
  plainEnglishMeaning: string;
  whyItMatters: string;
  highlights: ProofHighlight[];
}

export interface CaseMilestone {
  period: string;
  value: string;
  detail: string;
}

export interface VerifiedProof {
  id: string;
  title: string;
  clientOrDomain: string;
  clientCategory?: string;
  location?: string;
  platform: "Google Business Profile" | "Google Search Console" | "Medium Platform";
  timeframe: string;
  screenshotUrl: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  secondaryMetrics: { label: string; value: string }[];
  summary: string;
  plainEnglishImpact?: string;
  externalLink?: string;
  challenge?: string;
  strategy?: string[];
  milestones?: CaseMilestone[];
  commercialTakeaway?: string;
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
  proofExplainer?: CaseStudyProofExplainer;
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
    proofExplainer: {
      dashboardUrl: "business.google.com/performance/phonebuzz-goldcoast",
      platformName: "Google Business Profile",
      whatItShows: "Real customer actions captured inside Google Maps for the Benowa Gardens Shopping Centre repair shop.",
      plainEnglishMeaning: "Nobody plans a cracked screen. When a customer breaks their phone, they urgently search Google Maps for 'repair near me'. Ranking in the top 3 captured 973 emergency jobs.",
      whyItMatters: "Capturing urgent repair demand at the exact moment of distress delivers immediate high-margin store revenue.",
      highlights: [
        { label: "317 Store Walk-Ins", value: "317", explanation: "Customers clicked Google Maps directions straight to the shop counter at Benowa Gardens." },
        { label: "216 Urgent Calls", value: "216", explanation: "Immediate phone calls asking for screen replacement and repair price quotes." },
        { label: "321 Online Quotes", value: "321", explanation: "Clicks to the booking and diagnostic request page on the website." },
        { label: "Top-3 Map Pack", value: "Top 3", explanation: "Outranked competitor repair shops across Gold Coast suburbs to secure prime visibility." },
      ],
    },
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
    proofExplainer: {
      dashboardUrl: "search.google.com/search-console/trendingprompt",
      platformName: "Google Search Console",
      whatItShows: "Real-time 24-hour Google Search Console report showing viral organic traffic spikes.",
      plainEnglishMeaning: "Shows how many people searched on Google, saw this website in search results, and clicked to open it in a single 24-hour window.",
      whyItMatters: "20,200 real visitors in one day with zero ad spend — 13.3% CTR is more than 3x higher than average industry click-through rates.",
      highlights: [
        { label: "20,200 Clicks / 24h", value: "20,200", explanation: "20,200 individual searchers visited the website from Google within 24 hours." },
        { label: "152,000 Impressions", value: "152K", explanation: "Website showed up on Google's page 1 for over 152,000 search queries." },
        { label: "13.3% Click Rate", value: "13.3%", explanation: "1 out of every 7 searchers clicked this link instead of competitor sites." },
        { label: "$0 Spent on Ads", value: "$0", explanation: "100% free organic search engine traffic generated through smart SEO." },
      ],
    },
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
    proofExplainer: {
      dashboardUrl: "search.google.com/search-console/getcito",
      platformName: "Google Search Console",
      whatItShows: "3-month Google Search Console dashboard tracking B2B software buyer visibility.",
      plainEnglishMeaning: "Measures how often Google recommends this B2B platform to corporate decision-makers actively searching for tech solutions.",
      whyItMatters: "Over half a million impressions created high-value enterprise pipeline visibility without recurring pay-per-click ad bills.",
      highlights: [
        { label: "506,000 Impressions", value: "506K", explanation: "Google displayed the software in front of 506,000 prospective enterprise buyers." },
        { label: "1,960 B2B Inquiries", value: "1.96K", explanation: "High-intent corporate professionals clicked through to evaluate the platform." },
        { label: "12.1 Avg Position", value: "12.1", explanation: "Climbed steadily toward top page 1 rankings across competitive B2B keywords." },
        { label: "Clean Crawl Health", value: "100%", explanation: "Eliminated indexing bottlenecks, ensuring all product features are discoverable." },
      ],
    },
    keyTakeaway:
      "Fixing crawlability and organizing content into topical clusters unlocks exponential search visibility across competitive niches.",
  },
];

export const VERIFIED_PROOFS: VerifiedProof[] = [
  {
    id: "proof-phonebuzz",
    title: "Phone Buzz — Phone & Tablet Repair",
    clientOrDomain: "phonebuzz.com.au",
    clientCategory: "Phone Repair Centre",
    location: "Gold Coast, Australia",
    platform: "Google Business Profile",
    timeframe: "6 Months (Mar – Aug 2026)",
    screenshotUrl: "/case-studies/phonebuzz-goldcoast-gmb.png",
    headlineMetric: "973",
    headlineMetricLabel: "Urgent Repair Leads",
    secondaryMetrics: [
      { label: "Store Walk-Ins", value: "317" },
      { label: "Direct Calls", value: "216" },
      { label: "Website Quotes", value: "321" },
      { label: "Map Rank", value: "Top 3" },
    ],
    summary: "Ranked in Google Maps top 3 for urgent phone and screen repairs, capturing 973 high-intent customer leads at their moment of need.",
    plainEnglishImpact: "Captured 973 urgent repair jobs (cracked screens & battery swaps) right when customers broke their devices.",
    challenge: "People with broken screens call the first 3 shops on Google Maps. Phone Buzz was buried below competitors and missing emergency repair jobs.",
    strategy: [
      "Overhauled Google service categories for cracked screens and battery swaps",
      "Targeted nearby suburbs across the Gold Coast shopping radius",
      "Systematized verified reviews to boost local trust and map rank",
    ],
    commercialTakeaway: "Captured 973 urgent local repair jobs, driving 317 customers directly to the shopping centre counter.",
  },
  {
    id: "proof-trendingprompt",
    title: "TrendingPrompt.in — Viral Search Spike",
    clientOrDomain: "trendingprompt.in",
    clientCategory: "AI Prompts Directory",
    location: "Global Search",
    platform: "Google Search Console",
    timeframe: "Single 24-Hour Spike",
    screenshotUrl: "/case-studies/trendingprompt-viral-gsc.jpg",
    headlineMetric: "20.2K",
    headlineMetricLabel: "Clicks in 24 Hours",
    secondaryMetrics: [
      { label: "Impressions", value: "152,000" },
      { label: "Click Rate (CTR)", value: "13.3%" },
      { label: "Avg Position", value: "Top 5" },
      { label: "Ad Spend", value: "$0" },
    ],
    summary: "Captured a viral AI search trend with fast indexation and high-CTR title tags, generating 20,200 Google clicks in a single day.",
    plainEnglishImpact: "20,200 people clicked from Google to the website in one day at a 13.3% click rate — completely free.",
    challenge: "Viral search terms surge and disappear quickly. Slow SEO cycles miss the traffic entirely unless pages rank within hours.",
    strategy: [
      "Built lightweight pages with automated FAQ and image schema",
      "Pushed instant indexing requests to Google within hours of the trend",
      "Wrote high-CTR title tags that won clicks over bigger sites",
    ],
    commercialTakeaway: "Brought in 20,200 free Google clicks in 24 hours, peaking at 1,650 clicks per hour with zero ad cost.",
  },
  {
    id: "proof-getcito",
    title: "Getcito.com — B2B Software Visibility",
    clientOrDomain: "getcito.com",
    clientCategory: "B2B SaaS Platform",
    location: "Global B2B Market",
    platform: "Google Search Console",
    timeframe: "3 Months",
    screenshotUrl: "/case-studies/getcito-gsc-performance.jpg",
    headlineMetric: "506K",
    headlineMetricLabel: "Search Impressions",
    secondaryMetrics: [
      { label: "Organic Clicks", value: "1,960" },
      { label: "Avg Position", value: "12.1" },
      { label: "Crawl Health", value: "100%" },
      { label: "Ad Spend", value: "$0" },
    ],
    summary: "Fixed technical crawl bottlenecks and organized pages into clear topic hubs, scaling search impressions past half a million.",
    plainEnglishImpact: "Google showed this software over 506,000 times to corporate buyers, generating 1,960 high-intent inquiries.",
    challenge: "The software platform had crawl depth issues and duplicate topics, leaving high-value commercial pages buried past page 4 of Google.",
    strategy: [
      "Fixed technical crawl errors and cleaned up URL structure",
      "Grouped content into clear topic hubs with smart internal links",
      "Targeted commercial software terms used by business decision-makers",
    ],
    commercialTakeaway: "Generated 506,000 search impressions and 1,960 B2B inquiries without paying for recurring LinkedIn or Google ads.",
  },
  {
    id: "proof-lixo",
    title: "Lixo.in — E-Commerce Category SEO",
    clientOrDomain: "lixo.in",
    clientCategory: "E-Commerce & Retail",
    location: "E-Commerce Market",
    platform: "Google Search Console",
    timeframe: "3 Months",
    screenshotUrl: "/case-studies/lixo-ecommerce-gsc.jpg",
    headlineMetric: "4.12K",
    headlineMetricLabel: "Organic Google Clicks",
    secondaryMetrics: [
      { label: "Impressions", value: "346,000" },
      { label: "Avg Position", value: "7.6 (Page 1)" },
      { label: "Click Rate", value: "1.2%" },
      { label: "Ad Spend", value: "$0" },
    ],
    summary: "Structured clean product category hierarchies and transactional snippets, ranking on Page 1 of Google to drive 4,120+ organic shoppers.",
    plainEnglishImpact: "Ranked on Google Page 1 (average position 7.6), sending 4,120 shoppers straight to product pages.",
    challenge: "High competition in e-commerce left product categories invisible on Google, forcing heavy reliance on paid ads.",
    strategy: [
      "Organized clean category navigation and fixed duplicate filter URLs",
      "Added structured product schema for rich search snippets",
      "Optimized category copy for high-intent shopping queries",
    ],
    commercialTakeaway: "Achieved average position 7.6 on Page 1 of Google, driving 4,120+ shoppers directly to product checkout pages.",
  },
  {
    id: "proof-newsite",
    title: "New Domain — Fast Index & Rank",
    clientOrDomain: "Fresh Domain Launch",
    clientCategory: "New Site Launch",
    location: "Global Search",
    platform: "Google Search Console",
    timeframe: "First 25 Days",
    screenshotUrl: "/case-studies/new-site-25days-gsc.png",
    headlineMetric: "527",
    headlineMetricLabel: "Clicks in First 25 Days",
    secondaryMetrics: [
      { label: "Impressions", value: "5,740" },
      { label: "Click Rate (CTR)", value: "9.2%" },
      { label: "Index Speed", value: "< 24 Hours" },
      { label: "Avg Position", value: "27.1" },
    ],
    summary: "Bypassed typical 6-month Google sandbox delays on a brand-new website, generating 527 organic clicks within 25 days of launch.",
    plainEnglishImpact: "Skipped standard sandbox delays, earning 527 clicks and top-30 rankings in under 4 weeks.",
    challenge: "Brand-new domains usually take 3 to 6 months to get noticed and indexed by Google with almost zero early organic traffic.",
    strategy: [
      "Verified brand entity and submitted clean XML sitemaps directly to Google",
      "Built tight topical authority before going live",
      "Optimized technical performance for sub-1s load times",
    ],
    commercialTakeaway: "Bypassed standard sandbox delays, earning 527 verified clicks and top-30 rankings across target terms in just 25 days.",
  },
  {
    id: "proof-medium",
    title: "Medium — Organic Content Growth",
    clientOrDomain: "medium.com/@AyanFreelancer",
    clientCategory: "Content & Audience",
    location: "Medium Platform",
    platform: "Medium Platform",
    timeframe: "30 Days (June 2026)",
    screenshotUrl: "/case-studies/medium-organic-growth.png",
    headlineMetric: "348",
    headlineMetricLabel: "Organic Readers",
    secondaryMetrics: [
      { label: "Full Reads", value: "31" },
      { label: "Followers", value: "+20" },
      { label: "Subscribers", value: "+19" },
      { label: "Ad Spend", value: "$0" },
    ],
    summary: "Wrote practical SEO breakdowns that attracted 348 targeted readers, converting them into 20 followers and 19 email subscribers in one month.",
    plainEnglishImpact: "Turned 348 organic readers into 31 complete reads, 20 followers, and 19 email newsletter subscribers.",
    challenge: "Starting with zero followers on Medium and needing to build an audience without paid promotion.",
    strategy: [
      "Published concise, practical SEO case studies and workflows",
      "Targeted search topics with clear, high-intent headlines",
      "Added simple newsletter callouts that converted readers into subscribers",
    ],
    commercialTakeaway: "Turned 348 readers into 31 full reads, 20 followers, and 19 email subscribers in 30 days without paid promotion.",
    externalLink: "https://medium.com/@AyanFreelancer",
  },
];

export const PLAYBOOK_STEPS: PlaybookStep[] = [
  {
    step: "01",
    title: "Audit & Fix",
    tagline: "Find what's hurting your traffic.",
    details:
      "I inspect your site speed, crawl errors, and current Google rankings to spot quick fixes.",
    tactics: [
      "Fix technical & speed errors",
      "Audit search rankings & competitors",
      "Clear priority action plan",
    ],
  },
  {
    step: "02",
    title: "Target Keywords",
    tagline: "Find terms that buyers actually search.",
    details:
      "We focus on high-intent search terms that bring ready-to-buy customers, not empty clicks.",
    tactics: [
      "Target low-competition buyer keywords",
      "Plan clean monthly content topics",
      "Structure pages for Page 1 ranking",
    ],
  },
  {
    step: "03",
    title: "Execute & Optimize",
    tagline: "Hands-off work done for you.",
    details:
      "I update your pages, fix metadata, and handle technical SEO so you don't have to.",
    tactics: [
      "Optimize titles, headers & copy",
      "Improve page speed & mobile experience",
      "Build trusted search authority",
    ],
  },
  {
    step: "04",
    title: "Get Real Leads",
    tagline: "Turn visitors into paying customers.",
    details:
      "Traffic is only useful if it converts. We focus on getting you direct phone calls and inquiries.",
    tactics: [
      "Optimize pages for calls & form fills",
      "Track real ranking gains and leads",
      "Short, plain-English monthly report",
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
