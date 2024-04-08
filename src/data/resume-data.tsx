import {
  MicrosoftLogo,
  EuropeLogo,
  BitGoLogo,
  AmazonLogo,
  ColumbiaLogo,
  UCILogo,
  EthLogo,
  TecnoTreeLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sunny Bakhda",
  initials: "SB",
  location: "California",
  locationLink: "https://www.google.com/maps/place/Irvine",
  about:
    "AI & crypto optimist who cares about safe AGI adoption, decentralization, and secure applications 🚀",
  summary: [
    "Current SaaS projects: LLM evaluation, interpretability research, AI chatbots, agents & RAG architecture",
    "Led EVM team at BitGo to build wallet infra, custody platform for Nike NFTs, Avalanche staking, WBTC improvements.",
    "Columbia 2020 grad experienced in fullstack blockchain and LLM applications, seeking high-impact role at early-stage startup starting June 2024."
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/25540727?s=400&u=51534524ecb35c86b5ef6d318baf635898531ee3&v=4",
  personalWebsiteUrl: "https://sunnybak.github.io/cv/",
  contact: {
    email: "shikharbakhda@gmail.com",
    tel: "",
    calendly: "https://calendly.com/sunnybak",
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
      start: "Aug 2016",
      end: "May 2020",
    },
  ],
  work: [
    {
      company: "Microsoft Azure",
      link: "https://azure.microsoft.com/en-us",
      badges: ["Irvine", "Part-Time / Contract"],
      // title: "Lead Software Engineer",
      logo: MicrosoftLogo,
      start: "Jan 2024",
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
      start: "Mar 2021",
      end: "May 2023",
      description:
        "Architected and built custodial NFT wallets for Nike's Swoosh wallet, resulting in the creation of 300K new wallets ▪ Led the EVM Team to integrate Avalanche, Polygon, BSC into hot/cold wallets enabling AUC to increase by billions ▪ Spearheaded the onboarding of Avalanche's UTXO-based  P-chain to enable staking, leading to millions in revenue ▪ Led the onboarding of ECDSA-based blockchains to Threshold Signature Scheme, an MPC scheme for sharded keypairs ▪ Directly managed a team of 4 fulltime engineers and 3 contractors, reviewed design documents, managed projects ▪ Developed new features for WBTC tokenization engine, including its indexing and notification services ▪ Maintained node infra, implemented indexing strategies, implemented fullstack transaction building for various blockchains ▪ Developed various internal tooling, spoke to customers about bugs, worked in Blockchain Integration, EVM, Custody teams ▪ Concepts: Node, Typescript, React, Express, MongoDB, AWS, Kubernetes, Docker, Java, Solidity, Terraform, C++.",
    },
    {
      company: "Amazon",
      link: "https://www.amazon.com/",
      badges: ["Seattle"],
      title: "Software Engineer",
      logo: AmazonLogo,
      start: "Jul 2020",
      end: "Mar 2021",
      description:
        "Constructed FlowControl, an AWS Fargate service to prevent supply-chain bottlenecks by controlling package flow  ▪ Boosted computational efficiency by simulating mock package traffic and load tests to identify process pain points  ▪ Minimized DAO-layer latency by remodeling DynamoDB schema to Kinesis streams instead of transactions ▪ Identified a horizontal scaling solution for asynchronous SQS polling and SNS topics to expand service availability ▪ Engineered serverless Lambda app using multithreading to reconcile stale entries, increasing WIP accuracy ▪ Deployed load testing service to production for the new Amazon Fulfillment Engine initiative in the Operations org ▪ Concepts: DynamoDB, AWS Lambda, SQS, Java Spring Boot, Load Testing.",
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
  internships: [
    {
      title: "Labor Engine Optimization",
      logo: AmazonLogo,
      techStack: [
        "Amazon",
        "2019"
      ],
      description: "At Amazon, I built an API to automate warehouse staffing to reduce time for fulfilling orders",
      link: {
        label: "amazon.com",
        href: "https://amazon.com/",
      },
    },
    {
      title: "Basic Attention Token (BAT)",
      logo: EthLogo,
      techStack: [
        "Consensys",
        "2017"
      ],
      description: "At ConsenSys, I built an Ethereum smart contract to create an attention-based token to decentralize the ad industry",
      link: {
        label: "basicattentiontoken.org/",
        href: "https://basicattentiontoken.org/",
      },
    },
    {
      title: "Lead-erboard",
      logo: TecnoTreeLogo,
      techStack: [
        "TecnoTree",
        "2018"
      ],
      description: "At TecnoTree, I built a dashboard for ranking incoming sales leads using a regression TensorFlow model",
      link: {
        label: "TecnoTree",
        href: "https://www.tecnotree.com/",
      },
    },
  ],
} as const;
