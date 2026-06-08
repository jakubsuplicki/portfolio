import altaflipLogo from '@/assets/images/apps/altaflip.png'
import dreamlusiveLogo from '@/assets/images/apps/dreamlusive.png'
import tickmeekLogo from '@/assets/images/apps/tickmeek.png'
import type { AppProject, OpenSourceProject } from '@/types/project'

// Personal mobile apps — solo-built and shipped end to end (design, dev, ASO, marketing, monetisation).
export const apps: AppProject[] = [
  {
    name: 'Altaflip',
    tagline: 'Sauna, cold-plunge & contrast-therapy tracker',
    description:
      'A science-backed sauna, cold-plunge and contrast-therapy tracker with a research-informed sweat-loss algorithm, live activities and wearable integration. Trademark registered in Australia.',
    logo: altaflipLogo,
    year: '2025',
    tools: ['React Native', 'Expo', 'TypeScript', 'HealthKit', 'Live Activities', 'Firebase'],
    links: [
      { url: 'https://altaflip.com', text: 'Website' },
      { url: 'https://apps.apple.com/app/id6756031717', text: 'App Store' },
      { url: 'https://play.google.com/store/apps/details?id=com.jasuplix.altaflip', text: 'Google Play' }
    ]
  },
  {
    name: 'Dreamlusive',
    tagline: 'AI dream-analytics journal',
    description:
      'An AI dream-analytics app with voice and text capture, emotion and theme detection and pattern recognition. Ranked among the top results for “dream journal” on Google Play.',
    logo: dreamlusiveLogo,
    year: '2025',
    badge: 'AI',
    tools: ['React Native', 'Expo', 'TypeScript', 'AI / LLMs', 'Speech-to-Text', 'Firebase'],
    links: [
      { url: 'https://dreamlusive.com', text: 'Website' },
      { url: 'https://apps.apple.com/app/id6753315857', text: 'App Store' },
      { url: 'https://play.google.com/store/apps/details?id=com.jasuplix.dreamlusive', text: 'Google Play' }
    ]
  },
  {
    name: 'Tickmeek',
    tagline: 'Privacy-focused task manager',
    description:
      'My first shipped app — a privacy-focused task manager with smart task tracking, flexible recurring reminders and an offline-first architecture. No ads, no pop-ups, no data selling.',
    logo: tickmeekLogo,
    year: '2025',
    tools: ['React Native', 'TypeScript', 'SQLite', 'Firebase', 'Offline-First'],
    links: [
      { url: 'https://tickmeek.com', text: 'Website' },
      { url: 'https://apps.apple.com/us/app/tickmeek/id6743649903', text: 'App Store' },
      { url: 'https://play.google.com/store/apps/details?id=com.zenzero.tickado', text: 'Google Play' }
    ]
  }
]

// Self-directed AI engineering & open-source builds.
export const openSource: OpenSourceProject[] = [
  {
    title: 'Codument',
    tagline: 'Docs-backed workflow for AI coding agents',
    description:
      'An npm dev-dependency that installs an agent-neutral delivery workflow for Codex, Claude Code and future coding agents: shared instructions, portable workflow skills, source-to-doc registry, docs scaffolding, profile updates and proof benchmarks.',
    year: '2026',
    tools: [
      'TypeScript',
      'Node.js',
      'Commander',
      'npm',
      'Codex',
      'Claude Code',
      'Agentic Workflows',
      'Docs Registry',
      'Benchmarks'
    ],
    highlights: [
      'Designed and built the core cross-agent delivery loop: grill requests against docs, plan durable work, approve scope, implement, verify, document, review, commit and repeat.',
      'Built profile-aware CLI commands for init, scan, adopt and update, installing Codex/generic assets (`AGENTS.md`, `.agents/skills`) and Claude-specific skills, rules, hooks and subagents when selected.',
      'Added deterministic proof benchmarks for registry-guided context routing and quality scoring, including fixture setup, final-state checks, docs updates, registry coverage and source-boundary validation.'
    ],
    links: [
      { url: 'https://github.com/jakubsuplicki/codument', text: 'jakubsuplicki/codument' },
      { url: 'https://www.npmjs.com/package/codument', text: 'npm' }
    ]
  },
  {
    title: 'AI Protector',
    tagline: 'Self-hosted AI prompt-DLP browser extension',
    description:
      'Forked and adapted an open-source LLM security engine into a self-hosted browser DLP workflow: a Chromium extension intercepts ChatGPT and Claude prompts, scans them locally for PII, secrets and policy risks, then blocks or warns before sensitive data leaves the browser.',
    year: '2026',
    tools: [
      'WXT',
      'TypeScript',
      'Bun',
      'Chromium MV3',
      'Python',
      'FastAPI',
      'Presidio',
      'Docker Compose',
      'PostgreSQL',
      'Redis'
    ],
    highlights: [
      'Refactored the upstream engine for local scan-only protection: FastAPI /v1/scan endpoint, Docker Compose services, PostgreSQL-backed policies/request logs and Redis policy cache.',
      'Built the WXT/TypeScript Chromium MV3 extension for ChatGPT and Claude: MAIN-world fetch interception, service-worker relay to /v1/scan, browser-storage settings and toolbar health checks.',
      'Implemented the prompt-risk UX: Strict/Ask/Observe modes, policy/site/engine-URL controls, Presidio-backed PII detection, masked Shadow DOM warnings and Bun test coverage for relay, risk and warning flows.'
    ],
    links: [
      {
        url: 'https://github.com/jakubsuplicki/ai-protector-web-extension',
        text: 'jakubsuplicki/ai-protector-web-extension'
      }
    ]
  },
  {
    title: 'Local Jarvis',
    tagline: 'Pure-local AI workspace',
    description:
      'Re-architected a cloud-capable browser AI app into a pure-local desktop workspace with no cloud LLM providers, API-key storage or telemetry by default. Started as a public collaboration with a friend, then evolved into a private product repo while the public release link is pending.',
    year: '2026',
    tools: ['Tauri', 'Rust', 'Nuxt', 'FastAPI', 'Python', 'Ollama', 'SQLite / FTS5', 'Local Embeddings'],
    highlights: [
      'Built a Tauri + Rust shell that bundles and supervises a Nuxt frontend, FastAPI/Python sidecar and Ollama local inference runtime.',
      'Implemented hardware-tiered model setup, first-run orchestration, model probes, warmup states and memory-pressure fallbacks.',
      'Added hybrid graph retrieval over a SQLite/FTS5 + local-embeddings store, conversation-replay evals, latency/ingest benchmarks and context compaction.',
      'Shipped commercial readiness: Ed25519 offline license signing, entitlement gates, third-party notices and notarised macOS release builds.'
    ],
    links: [{ url: 'https://github.com/Szesnasty/Jarvis', text: 'Szesnasty/Jarvis' }]
  },
  {
    title: 'Huelooks',
    tagline: 'AI color-analysis backend for fashion',
    description:
      'A computer-vision pipeline that extracts individual garments from product photos, classifies them, analyses their dominant colours and matches them to a 12-season colour-analysis system for personalised recommendations.',
    year: '2025',
    tools: ['Python', 'FastAPI', 'Grounding DINO', 'SAM 2.1', 'DeepSeek', 'Google Vision', 'PostgreSQL / Supabase', 'CIELAB'],
    highlights: [
      'Built an automated ingest pipeline that detects and segments clothing from affiliate product feeds using Grounding DINO + SAM 2.1, with transparent-background garment extraction.',
      'Implemented a 12-season professional colour-analysis system with HSV/CIELAB colour-space matching to map products to personalised palettes.',
      'Added batch processing with GPU acceleration and stored ranked recommendations in PostgreSQL/Supabase.'
    ],
    links: [{ url: 'https://github.com/jakubsuplicki/huelooks', text: 'jakubsuplicki/huelooks' }]
  }
]

export const projects = [
  {
    title: 'TAFE NSW — Student Enrolment Platform',
    description:
      'Senior contractor on a large student-enrolment platform, leading delivery of user-facing features and the migration of the legacy system to a modern Nuxt 3 / Vue 3 / TypeScript / Node.js stack.',
    tools: [
      'TypeScript',
      'Vue 3',
      'Nuxt 3',
      'Node',
      'Pinia',
      'Express',
      'Tailwind',
      'Jest',
      'MongoDB',
      'Azure',
      'Bitbucket'
    ],
    achievements: [
      'Spearheaded the launch of a system-guided online enrolment platform on Vue 3 and Nuxt 3, delivered to deadline and consistently praised by stakeholders.',
      'Migrated and upgraded legacy components into the new environment, applying updated design patterns and best practices.',
      'Drove software architecture and coding standards across both legacy and new systems, with high automated-test coverage to protect quality and delivery speed.'
    ],
    links: [{ url: 'https://www.tafensw.edu.au/', text: 'TAFE NSW' }]
  },
  {
    title: 'Navitas — Project Athena (Serverless Integrations)',
    description:
      'Technical lead on Project Athena, a serverless integrations platform automating business processes across the organisation. Promoted to Technical Lead within three months of joining.',
    tools: [
      'TypeScript',
      'Node',
      'AWS Lambda',
      'Step Functions',
      'SNS/SQS',
      'Serverless',
      'Hexagonal Architecture',
      'Monorepo',
      'Salesforce'
    ],
    achievements: [
      'Led the strategic migration to a serverless, monorepo, hexagonal architecture, significantly improving integration efficiency and scalability.',
      'Delivered seamless integrations with external services including Salesforce, StudyLink and Navigate via robust, scalable serverless solutions.',
      'Mentored engineers on serverless and hexagonal architecture; promoted to Technical Lead within three months of joining.',
      'Planned deeply technical work, coached senior developers in technical leadership, and articulated timelines, risks and trade-offs to stakeholders.'
    ],
    links: [{ url: 'https://www.navitas.com/', text: 'Navitas' }]
  },
  {
    title: 'Seven West Media — News Platform & The Game',
    description:
      'Cloud-native development across a monorepo serving The West Australian, PerthNow, 7NEWS and regional mastheads, plus internal serverless microservices and The Game, a React-based AFL/cricket tipping platform.',
    tools: [
      'TypeScript',
      'Node',
      'React',
      'React Query',
      'Express/Fastify',
      'Emotion',
      'Jest',
      'PostgreSQL',
      'DynamoDB',
      'AWS SDK',
      'Pulumi',
      'Nx',
      'Step Functions',
      'Lambdas',
      'SNS/SQS'
    ],
    achievements: [
      'Built reusable, sustainable features and microservices, supporting the stability of high-traffic production news systems.',
      'Delivered features for The Game, a React-based AFL/cricket tipping platform, and dramatically improved scoring efficiency and calculation speed.',
      'Regularly recognised by stakeholders and management, including monthly shout-outs.'
    ],
    links: [
      { url: 'https://thewest.com.au', text: 'The West' },
      { url: 'https://perthnow.com.au', text: 'PerthNow' },
      { url: 'https://7news.com.au', text: '7NEWS' }
    ]
  },
  {
    title: 'iSubbie — Job-Bidding Lifecycle PWA',
    description:
      'A job-bidding and lifecycle PWA for tradespeople with payments, chat, notifications and CRM/accounting integrations, featuring a system-assisted workflow for the complete lifecycle of a job.',
    tools: {
      title: 'Tools',
      stack: [
        'Nuxt.js',
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Jest',
        'Express',
        'SCSS',
        'MongoDB',
        'Mongoose',
        'MongoDB Atlas',
        'AWS Beanstalk',
        'AWS S3',
        'Nginx',
        'PWA',
        'Service Workers',
        'Socket.io',
        'JWT',
        'AroFlo API',
        'GroupMe API',
        'Xero API'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Delivered on time and on budget, contributing to ~40% revenue uplift and cost reduction. Developed a stable application with no critical or high severity issues in production since go-live.',
        'Led the technology strategy and played a key role in the creation of the application, including defining and implementing the CI/CD strategy.'
      ]
    }
  },
  {
    title: 'Automated Job-Breakdown System',
    description:
      'An automated system that connects with the AroFlo CRM through its API to pre-fetch relevant information and quickly generate job breakdowns, integrating CRM and accounting via AWS.',
    tools: {
      title: 'Tools',
      stack: ['Vue.js', 'Node.js', 'TypeScript', 'Express', 'AWS', 'Nginx', 'RESTful API', 'JWT', 'AroFlo API']
    },
    achievements: {
      title: 'Achievements',
      content: [
        'One person can now generate more than 20 breakdowns per day compared to 2-3 previously — a ~90% increase in productivity.'
      ]
    }
  },
  {
    title: 'Bookings App',
    description:
      'A Google Places–powered bookings app connecting to the AroFlo CRM through its API, letting bookings be completed without accessing the CRM directly — via admin access or a uniquely generated URL sent to a client.',
    tools: {
      title: 'Tools',
      stack: ['Vue.js', 'Node.js', 'TypeScript', 'Express', 'AWS', 'Nginx', 'RESTful API', 'PWA', 'JWT', 'Google Places API', 'AroFlo API']
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Increased booking speed by ~70% and cut admin costs by letting customers make their own bookings.'
      ]
    }
  },
  {
    title: 'Internal APIs Service',
    description:
      'A dedicated server of internal API endpoints callable from across the company’s applications, exposing reusable integrations with AroFlo CRM, GroupMe and Google APIs.',
    tools: {
      title: 'Tools',
      stack: ['Node.js', 'TypeScript', 'Express', 'AWS EC2', 'AWS S3', 'Nginx', 'RESTful API', 'JWT', 'Google Scripts', 'AroFlo API', 'GroupMe API', 'Google APIs']
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Increased the efficiency of building new applications by exposing secured, reusable API endpoints for features shared across apps.'
      ]
    }
  }
]
