export const profile = {
  name: 'Dang Le Minh Duy',
  role: 'Software Developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'duydl9803@gmail.com',
  github: 'https://github.com/happy-bmo',
  repo: 'https://github.com/happy-bmo/task-manager-microservice',
}

export const about = {
  lines: [
    'Two years building business',
    'systems with C#, .NET, React,',
    'and SQL Server. Now focused',
    'on Java backend engineering',
    'with Spring Boot.',
  ],
  note: 'I care about clear business logic, dependable APIs, and interfaces people can use without a manual.',
  disciplines: ['Java Backend', 'Spring Boot', 'Enterprise Systems'],
}

export const experience = {
  company: 'KIDO Group',
  role: 'Software Developer',
  period: 'Apr 2024 – Jul 2026',
  location: 'Ho Chi Minh City',
  summary:
    'Worked across business applications, from database logic and desktop UI to a React frontend and post-release support.',
  contributions: [
    {
      title: 'Factory Management System',
      meta: 'Business application / internal',
      summary:
        'Developed assigned modules for a factory management platform using C#/.NET, ASP.NET Web API, DevExpress WinForms, and SQL Server.',
      points: [
        'Implemented business logic, database queries, and stored procedures.',
        'Built business-oriented UI for operational users.',
        'Collaborated with developers and business stakeholders.',
      ],
      tech: ['C#', '.NET', 'ASP.NET Web API', 'DevExpress WinForms', 'SQL Server'],
    },
    {
      title: 'Internal Meeting Room Booking System',
      meta: 'Web application / internal',
      summary:
        'Gathered requirements with users and delivered a React/TypeScript frontend, from UI/UX input through deployment and post-release support.',
      points: [
        'Contributed to UI/UX design with users and the team.',
        'Integrated frontend screens with backend APIs.',
        'Participated in CI/CD, deployment, and user support after release.',
      ],
      tech: ['React', 'TypeScript', 'REST APIs', 'CI/CD'],
    },
  ],
}

export const featured = {
  title: ['TASK', 'MANAGEMENT'],
  eyebrow: 'Microservices',
  year: '2026',
  repo: profile.repo,
  caption: 'Task Management Microservices',
  summary:
    'A personal backend project built to explore service boundaries, stateless authentication, and reliable asynchronous messaging.',
  decisions: [
    {
      label: 'Security',
      title: 'Stateless authentication',
      text: 'Spring Security with JWT access tokens for authentication and authorization. Refresh tokens live in Redis so sessions can be rotated and revoked, and Redis also handles caching without server-side session state.',
    },
    {
      label: 'Consistency',
      title: 'Outbox before Kafka',
      text: 'Business writes and outbox records happen together; Kafka publishing follows. The pattern keeps asynchronous messages from drifting away from the source transaction.',
    },
    {
      label: 'Interface',
      title: 'APIs built to be inspected',
      text: 'Task and group endpoints are documented with Swagger/OpenAPI and exercised in Postman. JUnit covers service behavior.',
    },
    {
      label: 'Delivery',
      title: 'Containerised services',
      text: 'Docker packages the services. CI/CD experience comes from KIDO; this repository is a personal project, not a production deployment.',
    },
  ],
  note: 'Personal project. It demonstrates architecture and engineering decisions; it is not presented as production-hardened.',
  stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Redis', 'Kafka', 'Outbox Pattern', 'Docker', 'Swagger/OpenAPI', 'Postman', 'JUnit'],
}

export type WorkItem = {
  id: string
  title: string
  type: string
  period: string
  role: string
  stack: string[]
  summary: string
  points: string[]
  link?: string
  linkLabel?: string
  art?: boolean
}

export const workItems: WorkItem[] = [
  {
    id: '01',
    title: 'Task Management Microservices',
    type: 'Personal project',
    period: '2026',
    role: 'Backend architecture, API design, authentication, messaging, containerisation.',
    stack: featured.stack,
    summary: featured.summary,
    points: [
      'Task and group management APIs with Spring Boot.',
      'Spring Security and JWT authentication and authorization; refresh tokens managed in Redis with caching.',
      'Kafka asynchronous communication using the Outbox Pattern.',
      'Swagger/OpenAPI documentation, Postman collections, JUnit tests, and Docker packaging.',
    ],
    link: profile.repo,
    linkLabel: 'View source on GitHub',
    art: true,
  },
  {
    id: '02',
    title: 'Factory Management System',
    type: 'Professional',
    period: '2024 – 2026',
    role: 'Software developer at KIDO Group.',
    stack: ['C#', '.NET', 'ASP.NET Web API', 'DevExpress WinForms', 'SQL Server'],
    summary:
      'A factory management platform used by operational teams. I developed assigned modules across business logic, database queries, stored procedures, and desktop UI.',
    points: [
      'Implemented business rules and database access for assigned modules.',
      'Wrote queries and stored procedures in SQL Server.',
      'Built business-oriented WinForms screens with DevExpress.',
      'Worked with developers and business stakeholders to clarify requirements.',
    ],
  },
  {
    id: '03',
    title: 'Internal Meeting Room Booking System',
    type: 'Professional',
    period: '2024 – 2026',
    role: 'Software developer at KIDO Group, with frontend ownership.',
    stack: ['React', 'TypeScript', 'REST APIs', 'CI/CD'],
    summary:
      'An internal booking tool for meeting rooms. I gathered requirements with users, shaped the interface, built the React frontend, integrated APIs, and supported the release.',
    points: [
      'Gathered requirements directly with users.',
      'Contributed to UI/UX design decisions.',
      'Developed the React/TypeScript frontend and integrated backend APIs.',
      'Participated in CI/CD, deployment, and post-release user support.',
    ],
  },
]

export type Skill = {
  id: string
  title: string
  items: string
  detail: string
}

export const skills: Skill[] = [
  {
    id: '01',
    title: 'Programming',
    items: 'Java, JavaScript/TypeScript, C#',
    detail: 'Java is my current focus. C# and TypeScript come from two years of enterprise delivery.',
  },
  {
    id: '02',
    title: 'Frontend',
    items: 'React',
    detail: 'Built the React/TypeScript frontend for KIDO’s internal meeting room booking system.',
  },
  {
    id: '03',
    title: 'Backend',
    items: 'Spring Boot, Spring Security, RESTful API',
    detail: 'The core of my current backend work: stateless security, clear service boundaries, and documented REST APIs.',
  },
  {
    id: '04',
    title: 'Database & Messaging',
    items: 'SQL Server, Redis, Kafka',
    detail: 'SQL Server through KIDO’s factory management system. Redis and Kafka through the task management microservices project.',
  },
  {
    id: '05',
    title: 'Testing & API',
    items: 'JUnit, Postman, Swagger/OpenAPI',
    detail: 'JUnit and Postman for project verification; Swagger/OpenAPI for readable, inspectable API contracts.',
  },
  {
    id: '06',
    title: 'DevOps',
    items: 'Docker, GitHub Actions',
    detail: 'Docker for the task management services. GitHub Actions and deployment from CI/CD work at KIDO.',
  },
]
