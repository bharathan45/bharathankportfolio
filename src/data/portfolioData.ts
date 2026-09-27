import { Project, Experience, Education, SkillGroup, Certification } from '../types/portfolio';

export const personalInfo = {
  name: 'Bharathan K',
  title: 'Frontend Developer · Website Developer · Data Analyst',
  tagline: 'Bridging responsive human-centric interfaces, robust web systems, and data-driven analytical insights.',
  degree: 'B.Tech – Information Technology',
  college: 'P. S. R Engineering College, Sivakasi',
  phone: '8668130425',
  phoneDisplay: '+91 86681 30425',
  email: 'bharathank.data@gmail.com',
  github: 'https://github.com/bharathan45',
  githubHandle: 'github.com/bharathan45',
  linkedin: 'https://linkedin.com/in/bharathank',
  linkedinHandle: 'linkedin.com/in/bharathank',
  location: 'Sivakasi / Bangalore, India',
  avatarImage: '/src/assets/images/bharathan_avatar_1790519847002.jpg',
  objective:
    'B.Tech Information Technology student seeking Frontend/Web Development and Data Analytics opportunities to build responsive, user-friendly web applications. Hands-on exposure to HTML, CSS, JavaScript, Java, Spring Boot, MySQL and real-world web development projects, with additional experience in data analytics and dashboard development.',
  stats: [
    { label: 'Core Projects Built', value: '7+' },
    { label: 'Internships Completed', value: '3' },
    { label: 'Primary Roles Mastered', value: '3' },
    { label: 'Analytics & Dev Tools', value: '14+' },
  ],
  availableFor: [
    'Freelance Projects & Client Development',
    'Frontend Developer Roles',
    'Website / Full-Stack Developer Opportunities',
    'Data Analyst & BI Dashboard Positions',
    'Project-Based & Internship Engagements',
  ],
};

export const roleDescriptions = {
  all: {
    title: 'Full Spectrum Tech Portfolio',
    description: 'A versatile profile spanning clean frontend engineering, structured web application development, and business data analytics.',
    keywords: ['HTML/CSS/JS', 'Spring Boot & REST', 'Python & Power BI', 'MySQL', 'Responsive UI'],
  },
  frontend: {
    title: 'Frontend Developer',
    description: 'Specializing in intuitive, responsive, and performant user interfaces with HTML5, CSS3, modern JavaScript, and component-driven architecture.',
    keywords: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Vercel Deployment', 'UI/UX Workflows'],
  },
  webdev: {
    title: 'Website & Full-Stack Developer',
    description: 'Engineering reliable backend services, RESTful APIs, and database-connected web systems using Java, Spring Boot, MVC patterns, and MySQL.',
    keywords: ['Java', 'Spring Boot', 'REST APIs', 'MVC Architecture', 'MySQL Workbench', 'Microservices'],
  },
  analytics: {
    title: 'Data Analyst',
    description: 'Transforming complex datasets into actionable business intelligence through data cleaning, statistical modeling, and interactive dashboards.',
    keywords: ['Python & Pandas', 'Power BI', 'SQL & Excel', 'Matplotlib', 'Tableau', 'Business Dashboards'],
  },
};

export const projectsData: Project[] = [
  {
    id: 'siva-hospital',
    title: 'Siva Hospital – Appointment & Token Queue System',
    subtitle: 'Full-featured healthcare queue and clinic workflow platform with real-time token management',
    roleTags: ['frontend', 'webdev'],
    categoryLabel: 'Web Application & Real-time Queue',
    timeframe: '2025 – 2026',
    description:
      'Engineered a comprehensive web application for visitor registration, appointment scheduling, and multi-role token queue management. Features role-specific workflows for nurses, doctors, and hospital administrators, complete with real-time TV token displays and emergency re-routing.',
    features: [
      'Multi-role access control for Doctor, Nurse, and Admin with isolated portals',
      'Dynamic token assignment with emergency, normal, and second-round review tiers',
      'Digital Waiting Hall TV Display with real-time active token announcing',
      'Doctor action console to prescribe, mark completed, or request follow-up tests',
      'Administrator statistics dashboard displaying patient throughput and wait times',
      'Fully deployed on Vercel with automated GitHub version control workflows',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'RESTful Endpoints', 'Vercel Deployment', 'GitHub'],
    image: '/src/assets/images/hospital_queue_app_1790519859758.jpg',
    githubUrl: 'https://github.com/bharathan45',
    liveUrl: 'https://siva-hospital.vercel.app/',
    interactiveType: 'hospital',
    metrics: [
      { label: 'Role Portals', value: '3 (Nurse/Doctor/Admin)' },
      { label: 'Average Token Wait', value: '< 8 mins' },
      { label: 'Status', value: 'Deployed on Vercel' },
    ],
  },
  {
    id: 'ecommerce-analytics',
    title: 'Vexa E-Commerce & Customer Analytics Platform',
    subtitle: 'Full-featured modern e-commerce storefront with auth, customer flows, and business analytics',
    roleTags: ['frontend', 'webdev', 'analytics'],
    categoryLabel: 'E-Commerce & Analytics Platform',
    timeframe: '2026',
    description:
      'Engineered an end-to-end e-commerce platform and analytics system with secure authentication, modern catalog browsing, cart operations, and transactional retail reporting. Deployed live with multi-step auth and interactive user flows.',
    features: [
      'Secure user authentication and registration workflows with session management',
      'Dynamic product catalog with category filtering, search, and responsive product cards',
      'Shopping cart state management and checkout order processing pipeline',
      'Analytical data pipeline tracking revenue, customer segments, profit margins, and regional variance',
      'Interactive dashboard embedded with live KPI simulation and conversion metrics',
    ],
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'Auth Workflows', 'Vercel Deployment'],
    image: '/src/assets/images/ecommerce_analytics_dash_1790519872586.jpg',
    githubUrl: 'https://github.com/bharathan45',
    liveUrl: 'https://vexa-e-commerce.vercel.app/auth',
    interactiveType: 'analytics',
    metrics: [
      { label: 'Live Storefront', value: 'Vexa E-Commerce' },
      { label: 'Auth Status', value: 'Deployed on Vercel' },
      { label: 'Key KPIs Tracked', value: '18 Metrics' },
    ],
  },
  {
    id: 'dreamsport',
    title: 'DreamSport – Sports & Fantasy Web Application',
    subtitle: 'Interactive sports platform featuring dynamic team building, match tracking, and responsive UI',
    roleTags: ['frontend', 'webdev'],
    categoryLabel: 'Sports Platform & Web App',
    timeframe: '2025 – 2026',
    description:
      'Developed DreamSport, a sports and gaming web application delivering real-time team selection, match fixtures, player statistics, and leaderboard tracking. Features clean responsive layouts optimized for mobile and desktop screens with seamless Vercel deployment.',
    features: [
      'Interactive sports contest and team roster creation interface',
      'Dynamic player stats, points calculator, and real-time leaderboard ranking',
      'Mobile-first responsive UI crafted with clean semantic components and transitions',
      'Instant cloud deployment on Vercel with automated GitHub CI/CD workflows',
      'Optimized performance with fast page loads and smooth navigation',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'REST API', 'Vercel Deployment', 'GitHub'],
    image: '/src/assets/images/hospital_queue_app_1790519859758.jpg',
    githubUrl: 'https://github.com/bharathan45',
    liveUrl: 'https://dreamsport-eight.vercel.app/',
    metrics: [
      { label: 'Live Application', value: 'DreamSport' },
      { label: 'Platform', value: 'Deployed on Vercel' },
      { label: 'Experience', value: 'Sports UI / UX' },
    ],
  },
  {
    id: 'social-media-engagement',
    title: 'Social Media Engagement & Audience Data Analysis',
    subtitle: 'Data analytics workflow evaluating reach, audience interactions, engagement rates, and peak content timing',
    roleTags: ['analytics'],
    categoryLabel: 'Data Analytics & Insights',
    timeframe: '2026',
    description:
      'Engineered an exploratory data analytics project synthesizing multi-month social media metrics across digital accounts using Python and Pandas. Calculated key engagement performance indicators (impressions, click-through rates, reach, sentiment) and visualized audience distribution trends with Matplotlib.',
    features: [
      'Comprehensive data wrangling and cleaning of multi-channel engagement logs using Python (Pandas)',
      'Calculated core interaction KPIs: engagement rate per post, CTR, follower growth, and virality index',
      'Comparative content performance evaluation across video, photo reels, carousels, and text formats',
      'Audience peak activity heatmaps determining optimal posting schedules and maximum reach windows',
      'Actionable reporting providing content strategy recommendations for brands and creators',
    ],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Exploratory Data Analysis', 'SQL', 'Excel', 'Jupyter'],
    image: '/src/assets/images/ecommerce_analytics_dash_1790519872586.jpg',
    githubUrl: 'https://github.com/bharathan45',
    metrics: [
      { label: 'Role Domain', value: 'Data Analyst' },
      { label: 'Core Tools', value: 'Python, Pandas, Matplotlib' },
      { label: 'Dataset Size', value: '10,000+ Interactions' },
    ],
  },
  {
    id: 'airline-management',
    title: 'Airline Management System',
    subtitle: 'Desktop enterprise software for flight scheduling, passenger ticketing, and database operations',
    roleTags: ['webdev'],
    categoryLabel: 'Java Enterprise Application',
    timeframe: '2024 – 2025',
    description:
      'Developed a desktop management application for airline ticketing and operations. Built using Java Swing for interface controls, JDBC for reliable transactional data access, and a normalized MySQL database schema handling flights, passengers, and boarding passes.',
    features: [
      'Interactive desktop graphical interface with seat selection and ticket generation',
      'Robust JDBC connection layer ensuring transactional database consistency',
      'Relational MySQL schema enforcing foreign key integrity across flights and routes',
      'Cancellation, rescheduling, and passenger lookup search facilities',
    ],
    techStack: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'Relational Database Design'],
    image: '/src/assets/images/qr_food_ordering_app_1790519886092.jpg',
    githubUrl: 'https://github.com/bharathan45',
    metrics: [
      { label: 'Core Language', value: 'Java / Swing' },
      { label: 'Database', value: 'MySQL via JDBC' },
      { label: 'System Type', value: 'Airline Operations' },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: 'interncourse-analytics',
    role: 'Data Analytics Intern',
    company: 'InternCourse',
    duration: '17 May 2026 – 17 Aug 2026',
    roleType: 'analytics',
    highlights: [
      'Executed structured data cleaning, statistical filtering, and exploratory analysis on large datasets using Excel and Python (Pandas/NumPy).',
      'Designed interactive business dashboards and KPI scorecards in Power BI to present key revenue and operational metrics to stakeholders.',
      'Formulated optimized SQL queries for relational data extraction, grouping, and multi-table joins.',
      'Completed a rigorous Data Analytics Training Program with formal institutional documentation and project presentations.',
    ],
    skillsGained: ['Excel', 'SQL', 'Python', 'Pandas', 'Power BI', 'Business Insights', 'Data Cleaning'],
  },
  {
    id: 'blue-ball-web',
    role: 'Web Development Intern',
    company: 'Blue Ball Technologies / BBT',
    duration: 'Dec 2025',
    roleType: 'frontend',
    highlights: [
      'Delivered hands-on frontend web development engineering using HTML5, CSS3, and modern JavaScript for client web properties.',
      'Collaborated on responsive design workflows ensuring flawless viewing across mobile, tablet, and widescreen desktop displays.',
      'Gained direct exposure to backend application flows with Java and MySQL database connectivity.',
      'Participated in code reviews and Git version control practices within a fast-paced development sprint.',
    ],
    skillsGained: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Java Exposure', 'MySQL'],
  },
  {
    id: 'bangalore-internship',
    role: 'Web Development Internship',
    company: 'Web Development Workflows (Bangalore)',
    location: 'Bangalore, India',
    duration: 'Feb 2026 – Apr 2026',
    roleType: 'webdev',
    highlights: [
      'Gained deep practical exposure to end-to-end web development workflows, frontend architecture, and real-world application lifecycles.',
      'Implemented clean semantic markup and modern CSS styling conforming to cross-browser compatibility standards.',
      'Worked with development debugging tools, API testing routines, and modular JavaScript codebases.',
      'Participated in application deployment and agile project tracking.',
    ],
    skillsGained: ['Frontend Implementation', 'Web Workflows', 'Application Deployment', 'JavaScript', 'Cross-browser Testing'],
  },
];

export const educationData: Education[] = [
  {
    id: 'btech-it',
    degree: 'B.Tech – Information Technology',
    institution: 'P. S. R Engineering College, Sivakasi',
    period: '2024 – Present',
    details: 'Focus on Data Structures, Web Development, Database Management Systems, Object-Oriented Programming, and Software Engineering.',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'SRMS Matriculation Higher Secondary School, Sinthalakarai',
    period: 'Completed 2024',
    details: 'Strong foundational academics with mathematics and computer science track.',
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'SRMS Matriculation Higher Secondary School, Sinthalakarai',
    period: 'Completed 2022',
    details: 'High academic distinction across all foundational subjects.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend Development',
    roleAssociation: 'frontend',
    description: 'Crafting responsive, accessible, and high-performance user interfaces.',
    skills: [
      { name: 'HTML5', level: 'Advanced', experienceContext: 'Semantic markup, accessibility, audio/video APIs' },
      { name: 'CSS3', level: 'Advanced', experienceContext: 'Flexbox, CSS Grid, animations, responsive media queries' },
      { name: 'JavaScript', level: 'Proficient', experienceContext: 'ES6+, DOM manipulation, fetch/REST consumption, async/await' },
      { name: 'Responsive UI Design', level: 'Advanced', experienceContext: 'Mobile-first layouts, cross-device breakpoints' },
      { name: 'Vercel & Web Deployment', level: 'Proficient', experienceContext: 'Continuous deployment, production hosting' },
    ],
  },
  {
    category: 'Backend & Web Architecture',
    roleAssociation: 'webdev',
    description: 'Designing robust server services, REST endpoints, and architectural patterns.',
    skills: [
      { name: 'Java', level: 'Proficient', experienceContext: 'Core Java, OOP principles, collections, exception handling' },
      { name: 'Spring Boot', level: 'Proficient', experienceContext: 'REST controllers, dependency injection, service layer' },
      { name: 'REST APIs & MVC', level: 'Proficient', experienceContext: 'Model-View-Controller design, endpoint structuring' },
      { name: 'Microservices Concept', level: 'Working Knowledge', experienceContext: 'Decoupled service interaction and routing' },
      { name: 'Python', level: 'Proficient', experienceContext: 'Scripting, algorithmic logic, backend routines' },
      { name: 'C / C++ (basic)', level: 'Foundational', experienceContext: 'Memory concepts, procedural programming fundamentals' },
    ],
  },
  {
    category: 'Data Analytics & Business Intelligence',
    roleAssociation: 'analytics',
    description: 'Unlocking insights through statistical analysis, cleaning pipelines, and dashboards.',
    skills: [
      { name: 'Power BI', level: 'Advanced', experienceContext: 'Interactive report generation, DAX measures, KPI cards' },
      { name: 'Python (Pandas & NumPy)', level: 'Advanced', experienceContext: 'Data wrangling, cleansing, aggregation, transformation' },
      { name: 'SQL', level: 'Proficient', experienceContext: 'Complex SELECTs, joins, aggregations, database views' },
      { name: 'Microsoft Excel', level: 'Advanced', experienceContext: 'Pivot tables, VLOOKUP/XLOOKUP, formulas, data hygiene' },
      { name: 'Matplotlib', level: 'Proficient', experienceContext: 'Exploratory data visualization, trend graphs, histograms' },
      { name: 'Tableau', level: 'Proficient', experienceContext: 'Visual data exploration and executive storyboards' },
    ],
  },
  {
    category: 'Databases & Data Management',
    roleAssociation: 'core',
    description: 'Structuring reliable schemas and executing relational queries.',
    skills: [
      { name: 'MySQL', level: 'Proficient', experienceContext: 'Relational schema design, indexes, transactional queries' },
      { name: 'MySQL Workbench', level: 'Proficient', experienceContext: 'EER diagrams, schema modeling, query optimization' },
      { name: 'JDBC', level: 'Proficient', experienceContext: 'Java database connectivity, statement handling, result sets' },
    ],
  },
  {
    category: 'Development Tools & Environments',
    roleAssociation: 'core',
    description: 'Daily developer toolchains, version control, and IDEs.',
    skills: [
      { name: 'GitHub & Git', level: 'Proficient', experienceContext: 'Version control, branch management, collaborative workflows' },
      { name: 'VS Code', level: 'Advanced', experienceContext: 'Primary web & script editing suite, extensions' },
      { name: 'Eclipse IDE', level: 'Proficient', experienceContext: 'Java enterprise development, project builds' },
      { name: 'Android Studio', level: 'Working Knowledge', experienceContext: 'XML UI drafting, Android SDK emulation' },
      { name: 'AI Coding Tools', level: 'Advanced', experienceContext: 'Prompt engineering, accelerated prototyping, code auditing' },
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    title: 'Python Certification',
    issuer: 'Recognized Technical Assessment',
    status: 'Certified',
    highlight: 'Comprehensive coverage of core Python syntax, data structures, file handling, and algorithmic programming.',
    category: 'analytics',
  },
  {
    title: 'CCNA & Cyber Security Training',
    issuer: 'Professional Networking Program',
    status: 'Training Completed',
    highlight: 'Network topologies, IP addressing, routing protocols, perimeter security basics, and defense principles.',
    category: 'core',
  },
  {
    title: 'Data Analytics Internship Training Program',
    issuer: 'InternCourse',
    status: 'Completed with Documentation',
    highlight: 'Intensive immersion in data analysis methodologies, Excel analytics, SQL querying, and Power BI visualization.',
    category: 'analytics',
  },
];
