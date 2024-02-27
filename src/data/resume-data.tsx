import {
  MicrosoftLogo,
  BitGoLogo,
  AmazonLogo,
  ColumbiaLogo,
  UCILogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sunny Bakhda",
  initials: "SB",
  location: "California",
  locationLink: "https://www.google.com/maps/place/Irvine",
  about:
    "building robust and performant fullstack applications",
  summary:
    "I'm a fullstack engineer with 4 years of experience. I'm passionate about designing intuitive user experiences, creating robust internet infrastructure, and integrating all my feedback loops with AI.",
  avatarUrl: "https://avatars.githubusercontent.com/u/25540727?s=400&u=51534524ecb35c86b5ef6d318baf635898531ee3&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "shikharbakhda@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sunnybak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shikharbakhda/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sunnybak_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "UC Irvine",
      logo: UCILogo,
      degree: "Master's Degree in EECS; Focus: HPC and LLMs",
      start: "Sep 2023",
      end: "Jun 2024",
    },
    {
      school: "Columbia University",
      logo: ColumbiaLogo,
      degree: "Bachelor's Degree in Computer Science; Focus: AI and Crypto",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Microsoft Azure",
      link: "https://bitgo.com",
      badges: ["Irvine", "Part-Time"],
      title: "Lead Software Engineer",
      logo: MicrosoftLogo,
      start: "2023",
      end: "present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "BitGo",
      link: "https://bitgo.com",
      badges: ["San Francisco"],
      title: "Software Engineer → Lead Software Engineer",
      logo: BitGoLogo,
      start: "2021",
      end: "2023",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Amazon",
      link: "https://www.amazon.com/",
      badges: ["Seattle"],
      title: "Software Engineer",
      logo: AmazonLogo,
      start: "2020",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "SoulChat",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Labor Engine Optimization",
      techStack: [
        "Internship",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Cryptech",
      techStack: [
        "Side Project",

      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Lead-erboard @ CognitiveScale",
      techStack: [
        "Internship",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Basic Attention Token @ Consensys",
      techStack: [
        "Internship",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Mech Warfare @ Columbia",
      techStack: [
        "Robotics Club",
        "Leadership",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
