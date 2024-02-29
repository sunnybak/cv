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
    "driving AI adoption",
  summary: [
    "Hi there! I'm a fullstack engineer with 4 years of experience. After graduating from Columbia University in 2020, I've worked at Amazon (~1y backend) and BitGo (~2y fullstack wallet platform integration with multiple blockchains).",
    "I'm currently getting a Masters degree at UCI (graduating in Jun'24) while working on projects in the LLM space, an HPC product for Microsoft, and a few other tinkerings.",
    "I'm passionate about designing intuitive user experiences, creating robust internet infrastructure, and integrating all my feedback loops with AI.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/25540727?s=400&u=51534524ecb35c86b5ef6d318baf635898531ee3&v=4",
  personalWebsiteUrl: "https://sunnybak.github.io/cv/",
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
      link: "https://azure.microsoft.com/en-us",
      badges: ["Irvine", "Part-Time / Contract"],
      title: "Lead Software Engineer",
      logo: MicrosoftLogo,
      start: "2024",
      end: "present",
      description:
        "Improving control, visibility, and predictability in enterprise HPC workloads for SPICE simulations. ▪ Building a fullstack ML product that generates simulation & HPC settings based on 3 business priorities - time to market, cost, and carbon footprint. ▪ Leading this project with 2 other UCI grad students. ▪ Concepts: React, Tensorflow, Linux, SLURM, Python, Cadence, SPICE.",
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
        "Built crypto wallet platform & infra, signing protocols, on-chain interactions, blockchain indexer for hot, cold, and custodial wallets. ▪ Integrated blockchains such as Avalanche, Ethereum, Polygon, and Tezos into wallet stacks. ▪ Delivered Threshold Signature Scheme signing protocol for NFT custody and transactions on Polygon for clients like Nike. ▪ Developed features for WBTC tokenization indexer and platform integration. ▪ Led a team of 4 engineers to deliver crucial software features, integrations, security updates, and resolve bugs. ▪ Concepts: Node, Typescript, React, Express, MongoDB, AWS, Kubernetes, Docker, Java, Solidity, Terraform, C++.",
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
        "Constructed FlowControl, an AWS Fargate service to prevent supply-chain bottlenecks by controlling package flow. ▪ Boosted computational efficiency by simulating mock package traffic and load tests to identify process pain points. ▪ Minimized DAO-layer latency by remodeling DynamoDB schema to Kinesis streams instead of transactions. ▪ Identified a horizontal scaling solution for asynchronous SQS polling and SNS topics to expand service availability. ▪ Engineered serverless Lambda app using multithreading to reconcile stale entries, increasing WIP accuracy. ▪ Concepts: DynamoDB, AWS Lambda, SQS, Java Spring Boot, Load Testing.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Solidity",
    "Flask/Django",
    "TensorFlow",
    "LlamaIndex/LangChain",
    "AWS",
    "C++",
    "Tech Lead",
    "Hypothesis Testing",
  ],
  projects: [
    {
      title: "SoulChat",
      techStack: [
        "Side Project",
        "LLM",
      ],
      description: "A mental health chat app that helps you vent and get guidance",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Basic Attention Token (BAT)",
      techStack: [
        "Internship",
        "Consensys",
      ],
      description: "An Ethereum smart contract to create an attention-based token to decentralize the ad industry",
      link: {
        label: "basicattentiontoken.org/",
        href: "https://basicattentiontoken.org/",
      },
    },
    {
      title: "Cryptech",
      techStack: [
        "Side Project",
        "Zero Knowledge Proofs",
      ],
      description: "An API that creates a zero-knowledge proof of a real estate transaction and posts the proof to a blockchain",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Labor Engine Optimization",
      techStack: [
        "Amazon",
        "Internship",
      ],
      description: "An API to automate warehouse staffing to reduce time for fulfilling orders",
      link: {
        label: "amazon.com",
        href: "https://amazon.com/",
      },
    },
    {
      title: "Lead-erboard",
      techStack: [
        "Internship",
        "TecnoTree (formerly CognitiveScale)",
      ],
      description: "Built a Hubspot lead ranking regression model using TensorFlow",
      link: {
        label: "TecnoTree",
        href: "https://www.tecnotree.com/",
      },
    },

    {
      title: "Mech Warfare",
      techStack: [
        "Columbia Robotics Club",
        "Arduino",
      ],
      description: "Built competitive remote controlled 4-legged shooting robot using C++ kinematics engine",
    },
  ],
} as const;
