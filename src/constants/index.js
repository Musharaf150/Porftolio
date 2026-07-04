export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'Hope Foundation - NGO SaaS & Admin Dashboard',
    desc: 'Hope Foundation is a transparent SaaS donation platform enabling global users to support campaigns, participate in humanitarian programs, and purchase charity event tickets seamlessly.',
    subdesc:
      'Engineered with Next.js 14, TypeScript, Tailwind CSS, Shadcn UI, Clerk for authentication, and Stripe for secure global payment processing. Architected for optimal server-side rendering, transactional safety, and responsive administration.',
    href: 'https://github.com/Musharaf150/FYP_Hope',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Shadcn', path: '/assets/shadcn.svg' },
      { id: 5, name: 'Clerk', path: '/assets/clerk.png' },
      { id: 6, name: 'Stripe', path: '/assets/stripe.png' },
    ],
  },
  {
    title: 'PromptCraft - Collaborative AI Prompt Repository',
    desc: 'PromptCraft is an optimized micro-social platform that enables prompt engineers to discover, publish, edit, and categorize complex AI prompts with full database search integration.',
    subdesc: 'Built with Next.js 14, Tailwind CSS, JavaScript, and MongoDB. Optimized database queries using MongoDB indexes, and secured dynamic API routes using NextAuth session management.',
    href: 'https://github.com/Musharaf150/promptmaker',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'JavaScript', path: '/assets/javaScript.png' },
    ],
  },
  {
    title: 'FitFlow - Cross-Platform Fitness App',
    desc: 'FitFlow is a responsive mobile application designed to track user workouts, monitor weekly metrics, and suggest customizable exercise routines with offline capabilities.',
    subdesc: 'Built with React Native, TypeScript, Expo, and Zustand for state management. Optimized application rendering performance to maintain a fluid 60 FPS on both iOS and Android devices.',
    href: 'https://github.com/Musharaf150',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#0F1E19',
      border: '0.2px solid #142F24',
      boxShadow: '0px 0px 60px 0px #1E6B4F4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React Native', path: '/assets/react.svg' },
      { id: 2, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Global Remote Contracting',
    pos: 'Software Engineer (Contract)',
    duration: '2023 - Present',
    title: "Deliver high-performance web and mobile products for international startups. Architect modular React Native packages, optimize Next.js core web vitals, and coordinate CI/CD pipelines to streamline deployment velocity.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Vantage Digital',
    pos: 'Full-Stack Developer',
    duration: '2022 - 2023',
    title: "Developed dynamic client applications using the MERN stack. Integrated robust database models in MongoDB and PostgreSQL, and custom headless CMS platforms (Strapi, Sanity) to empower content creation workflows.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'AppLabs Studio',
    pos: 'Software Developer',
    duration: '2021 - 2022',
    title: "Collaborated on designing secure RESTful API integrations and interactive frontend features. Implemented JWT authentication patterns and managed application-level state structures using Redux Toolkit.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];