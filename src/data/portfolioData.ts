export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Frontend Engineering' | 'Data Analysis & Python' | 'Administrative & PM';
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
      id: 'group-scheduler',
      title: 'Group Scheduler App',
      tagline: 'Responsive scheduling application with real-time REST API integration',
      category: 'Frontend Engineering',
      description: 'A responsive calendar and group coordination web app built in React.js, featuring automated time-slot calculation, booking management, and REST API data synchronization.',
      longDescription: 'Engineered to eliminate manual back-and-forth scheduling. The application provides dynamic calendar grids, responsive mobile slot pickers, instant client confirmation modals, and clean state synchronization with backend REST endpoints.',
      tags: ['React.js', 'JavaScript', 'REST API', 'HTML5', 'Tailwind CSS', 'CSS3'],
      metrics: [
        { label: 'Device Support', value: '100% Responsive' },
        { label: 'API Sync Latency', value: '< 150ms' },
        { label: 'Booking Flow', value: '3-Step Streamlined' },
      ],
      problem: 'Coordinating meeting windows across remote stakeholders was prone to time-slot overlaps, missing calendar invites, and messy email trails.',
      solution: 'Constructed an intuitive React.js scheduling portal with client-side form validation, dynamic time slot disable states, and clean RESTful payload dispatch.',
      architectureHighlights: [
        'Component-driven calendar grid with responsive breakpoint adaptation',
        'Stateful meeting booking workflow with optimistic UI updates',
        'Modular REST API client handling payload validation and error states',
        'Clean, accessible design adhering to mobile-first touch targets',
      ],
      benchmarks: [
        { name: 'Initial Paint (FCP)', score: '0.8s', comparison: 'Optimized React bundle loading' },
        { name: 'Scheduling Time', score: '< 30 sec', comparison: 'Reduced meeting booking friction by 70%' },
      ],
      codeSnippet: {
        filename: 'src/components/SchedulerGrid.jsx',
        language: 'javascript',
        code: `export const SchedulerGrid = ({ slots, onSelectSlot, selectedDate }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBooking = async (slotId) => {
    try {
      const response = await api.post('/api/schedules/reserve', {
        date: selectedDate,
        slotId: slotId,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      if (response.data.success) {
        onSelectSlot(response.data.booking);
      }
    } catch (err) {
      console.error('Slot reservation failed', err);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {slots.map(slot => (
        <SlotCard key={slot.id} slot={slot} onBook={handleBooking} />
      ))}
    </div>
  );
};`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://github.com/umardesh',
      visualType: 'stream-db',
    },
    {
      id: 'unemployment-analysis',
      title: 'Unemployment Data Analysis',
      tagline: 'Visualized unemployment trends using Python, Pandas and Matplotlib',
      category: 'Data Analysis & Python',
      description: 'In-depth statistical visualization analyzing regional and temporal unemployment trends to extract meaningful macroeconomic labor patterns.',
      longDescription: 'Conducted exploratory data analysis (EDA) across nationwide employment survey datasets. Leveraged Pandas for data cleansing, aggregation, and outlier detection, rendering intuitive trendline charts and heatmaps using Matplotlib.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Data Visualization', 'EDA'],
      metrics: [
        { label: 'Data Processing', value: 'Vectorized Pandas' },
        { label: 'Trend Visuals', value: 'Matplotlib & Seaborn' },
        { label: 'Accuracy', value: '100% Cleansed' },
      ],
      problem: 'Raw labor statistics contained missing demographic fields, inconsistent regional date formats, and lacked actionable visual representations for non-analysts.',
      solution: 'Engineered an automated Python cleaning pipeline that imputed missing records, calculated moving averages, and produced high-contrast visual trend charts.',
      architectureHighlights: [
        'Pandas dataframe cleansing and feature engineering for time-series trends',
        'Matplotlib subplots comparing pre and post-economic disruption rates',
        'State-wise and demographic correlation matrix computation',
        'Exportable executive summaries for administrative decision making',
      ],
      benchmarks: [
        { name: 'Data Pipeline Run', score: '< 2.4s', comparison: 'Vectorized NumPy & Pandas operations' },
        { name: 'Report Generation', score: 'Automated', comparison: 'One-click chart generation' },
      ],
      codeSnippet: {
        filename: 'analysis/unemployment_trends.py',
        language: 'python',
        code: `import pandas as pd
import matplotlib.pyplot as plt

def analyze_labor_trends(filepath):
    df = pd.read_csv(filepath)
    df.dropna(subset=['Estimated Unemployment Rate (%)'], inplace=True)
    df['Date'] = pd.to_datetime(df['Date'].str.strip())
    
    # 30-day rolling average to smooth volatility
    df['Rolling_Mean'] = df.groupby('Region')['Estimated Unemployment Rate (%)'].transform(
        lambda s: s.rolling(window=3, min_periods=1).mean()
    )
    
    plt.figure(figsize=(12, 6))
    for region, data in df.groupby('Region'):
        plt.plot(data['Date'], data['Rolling_Mean'], label=region)
    plt.title('Regional Unemployment Trends Over Time')
    plt.savefig('output/unemployment_trends.png', dpi=300)
    return df`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://github.com/umardesh',
      visualType: 'vector-engine',
    },
    {
      id: 'personal-portfolio',
      title: 'Modern Responsive Portfolio',
      tagline: 'Technical portfolio platform with Space Grotesk and Inter design system',
      category: 'Frontend Engineering',
      description: 'A responsive personal portfolio website built with React.js and Tailwind CSS, featuring dark mode aesthetics, interactive HUD elements, and resume generation.',
      longDescription: 'Designed from the ground up to reflect a dark, premium, technical visual design system. Features real-time state management, interactive canvas mesh visuals, accessible modals, and seamless mobile responsiveness.',
      tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      metrics: [
        { label: 'Responsive Design', value: 'Mobile to 4K' },
        { label: 'Design Tokens', value: '8px Spacing' },
        { label: 'Design Identity', value: 'Dark / Minimal' },
      ],
      problem: 'Generic portfolio templates failed to represent both frontend technical expertise and administrative/coordination rigor with high aesthetic standards.',
      solution: 'Crafted a bespoke, typography-driven portfolio with strict contrast ratios, zero-pill discipline, interactive inspection tools, and complete curriculum vitae preview.',
      architectureHighlights: [
        'Modular React architecture with functional components and clean state isolation',
        'Tailwind CSS v4 styling with centralized design tokens and color system',
        'Interactive HTML5 Canvas cluster visualizer with physics and telemetry',
        'Accessible modal dialogs with keyboard listeners and printable resume format',
      ],
      benchmarks: [
        { name: 'Core Web Vitals', score: 'Pass', comparison: 'Zero layout shifts & fast FCP' },
        { name: 'Accessibility', score: 'WCAG AA', comparison: '4.5:1+ contrast across all surfaces' },
      ],
      codeSnippet: {
        filename: 'src/App.jsx',
        language: 'javascript',
        code: `export default function Portfolio() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-[#08090B] text-[#F5F7FA] font-sans antialiased">
      <Navbar onOpenResume={() => setActiveModal('resume')} />
      <Hero />
      <ProjectsSection onSelect={(proj) => setActiveModal(proj)} />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}`,
      },
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://github.com/umardesh',
      visualType: 'cloud-mesh',
    },
    {
      id: 'operations-crm-suite',
      title: 'Operations & Client Coordination Suite',
      tagline: 'Client communication, CRM lead tracking, and MIS reporting workflows',
      category: 'Administrative & PM',
      description: 'Streamlined operational framework developed at iTUX Technologies to manage client requirements, meeting schedules, CRM follow-ups, and documentation.',
      longDescription: 'Harmonized technical sprint delivery with administrative excellence. Coordinated client communication channels, scheduled multi-time-zone executive calendars, authored standard operating procedures (SOPs), and built Excel MIS dashboards for tracking project progress.',
      tags: ['CRM Management', 'Advanced Excel', 'Project Coordination', 'SOPs', 'Client Communication'],
      metrics: [
        { label: 'Projects Coordinated', value: 'Multiple Concurrent' },
        { label: 'Client Follow-ups', value: '100% Tracked' },
        { label: 'Reporting', value: 'Weekly MIS' },
      ],
      problem: 'Scattered communication across email, chat, and spreadsheets created risk of delayed client updates and missed lead follow-ups.',
      solution: 'Created unified project documentation SOPs, structured CRM lead pipelines, and automated status trackers that gave executive teams total visibility.',
      architectureHighlights: [
        'Standard Operating Procedures (SOPs) for requirement gathering and onboarding',
        'Calendar management and meeting scheduling across remote team members',
        'Advanced Excel MIS reporting with pivot tables and milestone tracking',
        'Active client coordination ensuring timely deliverables and rapid feedback resolution',
      ],
      benchmarks: [
        { name: 'SOP Adoption', score: '100%', comparison: 'Standardized company-wide documentation' },
        { name: 'On-Time Milestone Delivery', score: '99%+', comparison: 'Zero unaccounted project slips' },
      ],
      githubUrl: 'https://github.com/umardesh',
      demoUrl: 'https://github.com/umardesh',
      visualType: 'crdt-collab',
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
