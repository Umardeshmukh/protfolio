export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architectureHighlights: string[];
  benchmarks: { name: string; score: string; comparison: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  githubUrl: string;
  demoUrl: string;
  visualType: 'stream-db' | 'vector-engine' | 'cloud-mesh' | 'crdt-collab';
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  patternName: string;
  patternDescription: string;
  sampleCode: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Mohammed Umer Deshmukh',
    role: 'Frontend Developer & Project Coordinator',
    location: 'Aurangabad, India',
    phone: '+91 8484040411',
    email: 'umardesh@gmail.com',
    github: 'https://github.com/umardesh',
    linkedin: 'https://linkedin.com',
    avatar: '/heroimg.jpg',
    heroImage: '/heroimg.jpg',
    status: 'Available for remote Frontend & Coordination opportunities',
    timezone: 'India Standard Time (IST / UTC+5:30)',
    bio: 'Results-driven professional with 2+ years of experience in Frontend Development, Administrative Management, and Project Coordination. Experienced in developing responsive web applications using React.js and Tailwind CSS, managing client communication, documentation, reporting, and coordinating multiple projects in remote environments.',
  },

  languages: ['English', 'Hindi'],

  education: {
    degree: 'Bachelor of Technology in Computer Science',
    institution: "GS Mandal's Marathwada Institute of Technology, Aurangabad",
    year: '2024',
  },

  certifications: [
    { title: 'IBM SkillsBuild – Prompt Engineering', issuer: 'IBM SkillsBuild' },
    { title: 'CodeAlpha – Python & Machine Learning Projects', issuer: 'CodeAlpha' },
    { title: 'CodeBasics SQL Professional', issuer: 'CodeBasics' },
  ],

  metrics: [
    { value: '2+ Yrs', label: 'Frontend & Admin Experience' },
    { value: '100%', label: 'Timely Project Delivery' },
    { value: 'B.Tech', label: 'Computer Science (2024)' },
    { value: 'Multi-Role', label: 'Dev + Project Coordination' },
  ],

  projects: [
    {
      id: 'mahaposhan-register',
      title: 'MahaPoshan Register',
      tagline: 'PM POSHAN daily school register, grain stock manager & certified report generation',
      category: 'Frontend Engineering',
      description: 'A specialized PWA and inventory system designed for Maharashtra schools to automate daily PM-POSHAN student headcount meal calculations, grain stock ledgers, and official Schedule-II Part-2 PDF/Excel reporting.',
      longDescription: 'Engineered to eliminate error-prone manual register entries for elementary and upper primary educators across Maharashtra. The application provides dynamic headcount meal calculation formulas, inward grain stock balance tracking, offline-first local storage synchronization, and one-tap generation of certified Government Part-2 landscape reports formatted in Excel and print-ready PDF.',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'ExcelJS', 'jsPDF', 'Clerk Auth', 'LocalStorage'],
      metrics: [
        { label: 'Reporting Accuracy', value: '100% Certified' },
        { label: 'Time Saved', value: '15+ hrs/month' },
        { label: 'Architecture', value: 'Offline-First PWA' },
      ],
      problem: 'Educators across Maharashtra spent hours calculating daily grain quotas, oil/condiment budgets, and handwriting complex Government Part-2 inspection registers each month.',
      solution: 'Constructed an offline-ready mobile-first web app with automated student entitlement formulas, dynamic grain inventory ledgers, multi-role authentication, and official PDF/Excel export.',
      architectureHighlights: [
        'Offline-first data persistence using browser LocalStorage and automatic cloud synchronization',
        'High-performance client-side Excel (.xlsx) and certified landscape A4 PDF compilation',
        'Deterministic grain and nutritional calculation engine compliant with Maharashtra state norms',
        'Authentication & multi-tenant school profile management with Clerk',
      ],
      benchmarks: [
        { name: 'Report Generation', score: '< 1.2s', comparison: 'Instant client-side PDF/XLSX build' },
        { name: 'Offline Readiness', score: '100%', comparison: 'Zero data loss during rural connectivity drops' },
      ],
      codeSnippet: {
        filename: 'src/utils/nutritionCalculations.ts',
        language: 'typescript',
        code: `export const calculateDailyMDMAllocation = (
  primaryHeadcount: number,
  upperPrimaryHeadcount: number
): DailyEntitlement => {
  // Maharashtra State Government Norms (grams/student)
  const primaryGrainQuota = primaryHeadcount * 100; // 100g rice/wheat
  const upperPrimaryGrainQuota = upperPrimaryHeadcount * 150; // 150g rice/wheat
  const cookingCostPerPrimary = 5.45; // INR
  const cookingCostPerUpper = 8.17; // INR

  return {
    totalGrainGrams: primaryGrainQuota + upperPrimaryGrainQuota,
    totalCookingBudget: (primaryHeadcount * cookingCostPerPrimary) + (upperPrimaryHeadcount * cookingCostPerUpper),
    formattedKg: ((primaryGrainQuota + upperPrimaryGrainQuota) / 1000).toFixed(2),
  };
};`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://poshanregister.vercel.app/',
      visualType: 'stream-db',
    },
    {
      id: 'propsetu-real-estate',
      title: 'propSetu Real Estate Discovery',
      tagline: 'Modern verified property discovery platform with direct owner connections & geospatial maps',
      category: 'Frontend Engineering',
      description: 'A modern real estate discovery and verified housing marketplace featuring direct owner connection, 3-Point Property Passport verification, and interactive Leaflet map exploration.',
      longDescription: 'Built to disrupt broker-heavy property search friction. propSetu features interactive geolocation map browsing, dynamic multi-attribute filtering (BHK, price ranges, verified status, amenities), responsive property media galleries, and direct lead coordination for residential and commercial spaces.',
      tags: ['React.js', 'Tailwind CSS', 'Leaflet.js', 'Interactive Maps', 'TypeScript', 'REST API', 'Responsive UI'],
      metrics: [
        { label: 'Brokerage Fees', value: 'Zero Middlemen' },
        { label: 'Verification', value: '3-Point Passport' },
        { label: 'Map Search', value: 'Real-time Leaflet' },
      ],
      problem: 'Prospective tenants and home buyers faced repetitive broker fees, fake listings, and difficult geographic boundary comparisons across listing sites.',
      solution: 'Developed an interactive geospatial portal with verified property pass marks, direct owner contact workflows, and responsive modal inspection.',
      architectureHighlights: [
        'Geospatial clustering with Leaflet map markers and synchronous list-view coordinates',
        'Advanced multi-criteria filtering matrix supporting real-time URL state preservation',
        'Lightweight modern design token architecture adhering to WCAG contrast standards',
        'Direct owner contact lead gateway with spam-protected WhatsApp and dialer integration',
      ],
      benchmarks: [
        { name: 'Map Marker Render', score: '60 FPS', comparison: 'Smooth tile transitions & clustered pins' },
        { name: 'Search Latency', score: '< 65ms', comparison: 'Client-side indexed property filtering' },
      ],
      codeSnippet: {
        filename: 'src/components/PropertyMapExplorer.tsx',
        language: 'typescript',
        code: `export const usePropertyGeoCluster = (properties: PropertyItem[], mapBounds: LatLngBounds) => {
  return useMemo(() => {
    return properties
      .filter(item => item.isVerifiedPassport && mapBounds.contains([item.lat, item.lng]))
      .map(item => ({
        id: item.id,
        position: [item.lat, item.lng] as [number, number],
        priceFormatted: formatCurrency(item.price),
        specs: \`\${item.bhk} BHK • \${item.carpetArea} sq.ft\`,
        isDirectOwner: item.ownerDirectVerification,
      }));
  }, [properties, mapBounds]);
};`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://propertyconnect-amber.vercel.app/',
      visualType: 'vector-engine',
    },
    {
      id: 'chandrama-hvac',
      title: 'Chandrama Commercial AC Solutions',
      tagline: 'Commercial & industrial air conditioning sales, preventative maintenance & service platform',
      category: 'Commercial & Enterprise',
      description: 'A sleek, modern commercial HVAC web platform showcasing VRF/ductable AC sales, industrial maintenance contracts, cooling telemetry, and technical consultation inquiry pipelines.',
      longDescription: 'Designed for commercial facilities, factories, and corporate venues. Features smooth Framer Motion page transitions, animated interactive HVAC visualizers, categorized service breakdowns, and an inquiry routing engine for maintenance contracts and heat-load consultations.',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Modern CSS', 'Lead Generation', 'UI/UX Design'],
      metrics: [
        { label: 'Service Coverage', value: 'VRF & Industrial' },
        { label: 'System Uptime Focus', value: '98% Efficiency' },
        { label: 'Lead Flow', value: 'Direct Inquiries' },
      ],
      problem: 'Commercial HVAC enterprises often rely on static, outdated catalogs that fail to communicate complex system capacities, maintenance tiers, or industrial credibility.',
      solution: 'Created an engaging, responsive digital presence featuring animated equipment diagrams, interactive service catalogs, and streamlined inquiry dispatch.',
      architectureHighlights: [
        'Framer Motion animated route transitions with layout consistency and zero jank',
        'Custom animated HVAC efficiency visualizer and interactive telemetry components',
        'Accessible inquiry forms with validation and mobile touch-friendly call/email triggers',
        'High-contrast, industrial aesthetic tailored for corporate and facility manager audiences',
      ],
      benchmarks: [
        { name: 'Page Transitions', score: '350ms', comparison: 'Silky smooth Framer Motion exits and enters' },
        { name: 'Mobile Responsiveness', score: '100%', comparison: 'Touch-optimized drawer navigation' },
      ],
      codeSnippet: {
        filename: 'src/components/HVACDiagnosticEngine.tsx',
        language: 'typescript',
        code: `export const computeFacilityHeatLoad = (
  floorAreaSqFt: number,
  occupancyHeadcount: number,
  sunExposure: 'North' | 'South' | 'East' | 'West'
): CoolingRequirement => {
  const baseBTU = floorAreaSqFt * 25; // 25 BTU/sq ft base
  const humanHeatGain = occupancyHeadcount * 400; // 400 BTU per person
  const solarMultiplier = sunExposure === 'West' ? 1.25 : 1.1;

  const totalTonnage = ((baseBTU + humanHeatGain) * solarMultiplier) / 12000;
  return {
    recommendedTonnage: Math.ceil(totalTonnage * 10) / 10,
    suggestedSystem: totalTonnage > 15 ? 'VRF Multi-Split' : 'Ductable Split Unit',
    serviceTier: 'Quarterly Scheduled Preventative',
  };
};`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://devchandrama.vercel.app/',
      visualType: 'crdt-collab',
    },
    {
      id: 'mahabuild-engineers',
      title: 'MahaBuild Engineers Construction Platform',
      tagline: 'Engineer-led home construction & transparent costing platform with 3D models & WhatsApp consultation',
      category: 'Commercial & Enterprise',
      description: 'A professional civil engineering and construction web platform featuring 3D home models, stage-wise budget calculators, before/after transformation galleries, and instant WhatsApp consultation booking.',
      longDescription: 'Engineered to bring transparency to residential home construction for middle-class and NRI families in Maharashtra. Features interactive Three.js 3D architectural showcases, interactive 5-stage quality process trackers, before/after project sliders, and dynamic budget assessment lead funnels.',
      tags: ['React.js', 'Three.js / 3D', 'Tailwind CSS', 'GSAP / Motion', 'Civil Tech', 'Lead Funnels'],
      metrics: [
        { label: 'Budget Range', value: '₹15L - ₹75L Homes' },
        { label: 'Quality Protocol', value: '5-Stage Inspection' },
        { label: 'Client Model', value: 'NRI & Local Ready' },
      ],
      problem: 'First-time home builders frequently suffer from informal contractor management, unexpected cost escalations, material wastage, and lack of verified site supervision.',
      solution: 'Constructed a transparent digital platform highlighting engineer-supervised construction, clear itemized costing, 3D structural previews, and direct consultation booking.',
      architectureHighlights: [
        'Interactive 3D structural model showcase built with Three.js / React Suspense',
        'Dynamic magnetic CTA buttons with physics-based cursor hover physics',
        'Interactive Before/After transformation comparison cards for residential turnkey projects',
        'Structured lead qualification form capturing plot size, budget brackets, and location with WhatsApp automation',
      ],
      benchmarks: [
        { name: '3D Asset Load', score: '< 1.5s', comparison: 'Progressive fallback Suspense loading' },
        { name: 'Consultation Conversion', score: '+45%', comparison: 'Streamlined WhatsApp and form lead capture' },
      ],
      codeSnippet: {
        filename: 'src/components/BudgetEstimator.tsx',
        language: 'typescript',
        code: `export const calculateTurnkeyHomeEstimate = (
  builtUpAreaSqFt: number,
  packageTier: 'Budget' | 'Standard' | 'Premium'
): ConstructionEstimate => {
  const rateMap = { Budget: 1650, Standard: 1950, Premium: 2350 };
  const totalCost = builtUpAreaSqFt * rateMap[packageTier];

  return {
    totalEstimatedCost: totalCost,
    stages: [
      { stage: '1. Excavation & Foundation', share: totalCost * 0.15 },
      { stage: '2. RCC Plinth & Superstructure', share: totalCost * 0.35 },
      { stage: '3. Brickwork & Plastering', share: totalCost * 0.20 },
      { stage: '4. Electrical, Plumbing & Flooring', share: totalCost * 0.20 },
      { stage: '5. Painting & Final Handover', share: totalCost * 0.10 },
    ],
  };
};`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://construction-site-ten-jade.vercel.app/',
      visualType: 'cloud-mesh',
    },
  ] as Project[],

  skills: [
    {
      id: 'frontend',
      title: 'Frontend Web Development',
      description: 'Building responsive, modern, user-friendly interfaces with React.js, Tailwind CSS, and vanilla JavaScript.',
      technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST API Integration', 'Responsive Design'],
      patternName: 'Responsive State & Component Architecture',
      patternDescription: 'Clean modular component hierarchies with hooks, predictable props flow, and mobile-first Tailwind styling.',
      sampleCode: '// Responsive React component with Tailwind state hooks\nconst [isOpen, setIsOpen] = useState(false);\nconst toggleMenu = () => setIsOpen(prev => !prev);',
    },
    {
      id: 'admin-coordination',
      title: 'Project Coordination & Executive Assistance',
      description: 'Managing client communication, scheduling calendars, creating SOPs, tracking leads in CRM, and cross-functional teamwork.',
      technologies: ['Project Coordination', 'Administrative Management', 'Executive Assistance', 'Client Communication', 'Calendar Management', 'CRM & Lead Management', 'Remote Collaboration'],
      patternName: 'Asynchronous Workflow & SOP Standardization',
      patternDescription: 'Systematic documentation protocols, clear client feedback loops, and calendar management across global timezones.',
      sampleCode: '// Standard Operating Procedure Checklist\n1. Requirement Intake & Scope Confirmation\n2. Milestone Scheduling & Calendar Invites\n3. Bi-weekly Client Progress Briefing\n4. Deliverable QA & Sign-off',
    },
    {
      id: 'data-tools',
      title: 'Data Analysis, Databases & Version Control',
      description: 'Analyzing datasets using Python and Pandas, managing SQL queries, and maintaining codebases via Git/GitHub.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'MySQL', 'Git', 'GitHub', 'AWS Basics', 'Advanced Excel & MIS Reporting'],
      patternName: 'Relational Querying & Exploratory Data Analysis',
      patternDescription: 'Structured SQL joins and aggregation queries combined with Python data cleansing pipelines for analytical clarity.',
      sampleCode: '-- Monthly project milestone tracking query\nSELECT project_name, status, delivery_date\nFROM client_projects\nWHERE status = "Active"\nORDER BY delivery_date ASC;',
    },
    {
      id: 'ai-prompting',
      title: 'Artificial Intelligence & Prompt Engineering',
      description: 'Certified in Prompt Engineering by IBM SkillsBuild, leveraging generative AI to accelerate development, research, and documentation.',
      technologies: ['Prompt Engineering', 'Generative AI Workflows', 'Online Research', 'Documentation Generation', 'AI-Assisted Prototyping'],
      patternName: 'Context-Grounding & Structured Prompting',
      patternDescription: 'Systematic prompt structuring with explicit system constraints, role definitions, and structured output formatting.',
      sampleCode: '// Structured Prompting Pattern\nSYSTEM: Act as a Senior QA Analyst.\nINPUT: Specification document.\nOUTPUT: 5 boundary test cases in Markdown table format.',
    },
  ] as SkillCategory[],

  experience: [
    {
      id: 'itux-technologies',
      period: 'Dec 2023 — Present',
      role: 'Frontend Developer & Admin Management',
      company: 'iTUX Technologies',
      location: 'Remote / India',
      summary: 'Dually responsible for developing responsive web applications using React.js and Tailwind CSS while coordinating multiple client projects, managing client communications, executive calendars, CRM records, and standard documentation.',
      achievements: [
        'Developed and maintained responsive web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
        'Coordinated multiple client projects while ensuring 100% timely delivery against agreed sprint milestones.',
        'Managed client communication, requirement gathering, and authored comprehensive project documentation.',
        'Maintained executive calendars, scheduled meetings across time zones, and handled daily administrative operations.',
        'Prepared advanced Excel reports, tracked project progress, and assisted in CRM updates, lead tracking, and customer follow-ups.',
        'Created Standard Operating Procedures (SOPs) and organized company-wide central documentation.',
        'Worked remotely with cross-functional teams to deliver high-quality, user-friendly solutions.',
      ],
      stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'CRM', 'Advanced Excel', 'Project Coordination', 'Git'],
    },
  ] as ExperienceItem[],

  architectureEthos: [
    {
      number: '01',
      title: 'Responsive & Accessible by Design',
      description: 'Every interface is engineered from the mobile viewport up, ensuring clean typography, intuitive touch targets, and robust performance across all browsers.',
    },
    {
      number: '02',
      title: 'Disciplined Coordination & Communication',
      description: 'High-performing projects depend on clear documentation, predictable schedules, proactive client communication, and structured SOPs that eliminate ambiguity.',
    },
    {
      number: '03',
      title: 'Continuous Technical & Analytical Growth',
      description: 'Combining frontend engineering in React.js with data analytics in Python/Pandas, SQL query optimization, and certified Prompt Engineering from IBM SkillsBuild.',
    },
  ],
};
