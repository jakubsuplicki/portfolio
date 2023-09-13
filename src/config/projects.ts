export const projects = [
  {
    title: 'TAFE NSW',
    description:
      'The TAFE NSW project is an advanced online platform designed to streamline and automate student enrolment, encapsulating a seamless, system-guided workflow for the entire admission process.',
    tools: [
      'Typescript',
      'Node',
      'Vue 2',
      'Vue 3',
      'Nuxt 2',
      'Nuxt 3',
      'Pinia',
      'Vuex',
      'Express',
      'Tailwind',
      'Jest',
      'MongoDB',
      'Azure',
      'Bitbucket'
    ],
    achievements: [
      'Spearheaded the launch of a transformative online student enrolment platform, utilising Vue 3 and Nuxt 3 technologies. This achievement was a testament to effective teamwork and agile methodologies, with the successful completion of the project despite stringent deadlines.',
      'Our breakthrough was met with high praise from all stakeholders and earned consistent positive recognition. My engagement in diverse areas of the organisation bolstered my proficiency in our tech stack and development patterns. Displayed proactive ownership by leading multiple initiatives and fostering innovation in our approaches.'
    ],
    links: [{ url: 'https://www.tafensw.edu.au/', text: 'TAFE NSW' }]
  },
  {
    title: 'The West Australian, Perthnow, 7news',
    description:
      'A monorepo of news websites that serves all 3 mastheads and regional sites plus a range of serverless microservices.',
    tools: [
      'Typescript',
      'Node',
      'React',
      'Express/Fastify',
      'Emotion',
      'Jest',
      'VR',
      'PostgreSQL',
      'AWS SDK',
      'Pulumi',
      'Nx',
      'Lambdas',
      'SNS/SQS',
      'Websockets',
      'Sendgrid API'
    ],
    achievements: [
      'Successfully collaborated with the team and delivered multiple projects with a tight deadline. Regularly received very positive feedback from stakeholders, managers, and the team, including shout-outs of the month.',
      'Worked in different areas of the organisation and became knowledgeable across the tech stack and company’s development patterns. Took ownership and lead multiple initiatives.'
    ],
    links: [
      { url: 'https://thewest.com.au', text: 'The West' },
      { url: 'https://perthnow.com.au', text: 'Perthnow' },
      { url: 'https://7news.com.au', text: '7news' }
    ]
  },
  {
    title: 'The Game',
    description: 'React based sports tipping website for AFL and Cricket owned by 7West Media.',
    tools: {
      title: 'Tools',
      stack: [
        'Typescript',
        'Node',
        'React',
        'ReactQuery',
        'Express/Fastify',
        'Emotion',
        'Jest',
        'DynamoDB',
        'AWS SDK',
        'Pulumi',
        'Nx',
        'StepFunctions',
        'Lambdas',
        'Chakra',
        'SNS/SQS'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Delivered several features for the tipping platform, and admin portal for the support team and dramatically improved scoring efficiency and calculation speed.'
      ]
    },
    links: {
      title: 'Link',
      urls: [
        {
          text: 'The Game',
          href: 'https://thegame.com.au'
        }
      ]
    }
  },
  {
    title: 'iSubbie Web Application',
    description:
      'An intuitive platform that provides biddable job leads for tradespeople, featuring a strict and system-assisted workflow for the complete lifecycle of a job.',
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
        'Mongoose ODM',
        'MongoDB Atlas',
        'Git',
        'AWS Beanstalk',
        'AWS S3',
        'Nginx',
        'RESTful API',
        'MVC',
        'PWA',
        'Service Workers',
        'Socket.io',
        'JWT',
        'Passport',
        'Winston',
        'Integration with AroFlo API',
        'Integration with GroupMe API',
        'Integration with Xero API'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Received positive feedback from stakeholders on a project that was successfully delivered on time and on budget. Developed a stable application with no critical or high severity issues in production since go-live. Anticipated increase in business revenue and reduction in cost – circa 40%.',
        'Led the technology strategy and played a key role in the creation of the application. Evaluated and became knowledgeable in new technologies, standards, and trends in web application development.'
      ]
    },
    links: {
      title: 'Link',
      urls: [
        {
          text: 'iSubbie',
          href: 'https://isubbie.com.au'
        }
      ]
    }
  },
  {
    title: 'Breakdowns app',
    description:
      'An automatic system that connects with the AroFlo CRM system through the API, in order to pre-fetch relevant information and quickly generate job breakdowns.',
    tools: {
      title: 'Tools',
      stack: [
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Express',
        'SCSS',
        'Git',
        'AWS EC2',
        'AWS S3',
        'Nginx',
        'RESTful API',
        'MVC',
        'PWA',
        'Service Workers',
        'JWT',
        'Integration with AroFlo API'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'One person can now generate more than 20 breakdowns per day in comparison to 2-3 breakdowns, which is a 90% increase in productivity.'
      ]
    }
  },
  {
    title: 'Bookings app',
    description:
      'The purpose of this project was to create an external system that again connects with the AroFlo CRM system through the API in order to be able to complete the bookings without the need of accessing CRM itself, either with admin access or by uniquely generated URL that can be sent to a client in order to complete the booking.',
    tools: {
      title: 'Tools',
      stack: [
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Express',
        'SCSS',
        'Git',
        'AWS',
        'Nginx',
        'RESTful API',
        'MVC',
        'PWA',
        'JWT',
        'Integration with Google APIs',
        'Integration with AroFlo CRM'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'The speed of making a booking is increased by over 70%, but also allows customers to make their own bookings which saves admin cost and time.'
      ]
    }
  },
  {
    title: 'Internal APIs service',
    description:
      'The idea was to create a dedicated server that consists of internal API endpoints that can be called from within different applications in the company.',
    tools: {
      title: 'Tools',
      stack: [
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Express',
        'SCSS',
        'Git',
        'AWS EC2',
        'AWS S3',
        'Nginx',
        'RESTful API',
        'MVC',
        'PWA',
        'Service Workers',
        'JWT',
        'Google Scripts',
        'API Development',
        'Server Management',
        'Integration with AroFlo CRM',
        'Integration with GroupMe',
        'Integration with Google APIs'
      ]
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Increased the efficiency of developing new applications by exposing secured API endpoints that can be reused across different applications that use similar features such as integration with AroFlo CRM system, GroupMe APIs, Google APIs, etc.'
      ]
    }
  },
  {
    title: 'Online Catalogue',
    description:
      'A WooCommerce website consists of products and services provided by the company. The purpose of this project was to convert a paper-based catalogue into an easily accessible, online-based catalogue that allowed for a quick search or to edit / add an item or a service.',
    tools: {
      title: 'Tools',
      stack: ['jQuery', 'PHP', 'WordPress', 'WooCommerce', 'MySQL']
    },
    achievements: {
      title: 'Achievements',
      content: [
        'Delivered an online catalogue which saves significant time in finding the correct product and price.'
      ]
    }
  },
  {
    title: 'Multiple Customised WordPress Websites',
    description:
      'The purpose was to create multiple landing pages in order to gather more leads and ultimately increase the number of clients.',
    tools: {
      title: 'Tools',
      stack: ['jQuery', 'PHP', 'WordPress']
    },
    achievements: {
      title: 'Achievements',
      content: [
        'The business expanded by at least 50% due to increased reach and job-specific content on each website.'
      ]
    }
  },
  {
    title: 'Automations',
    description:
      'Small projects to automate business processes such as automated group chats creation on the job, or being able to generate a chat transcript into PDF format, etc.',
    tools: {
      title: 'Tools',
      stack: ['Node.js', 'Express', 'Google Scripts', 'AroFlo API', 'GroupMe API', 'AWS S3']
    },
    achievements: {
      title: 'Achievements',
      content: ['Automation helped avoid human errors and ease up many business processes.']
    }
  }
]
