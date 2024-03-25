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
    "driving AI adoption with optimism 🚀",
  summary: [
    "I'm an AI optimist and want to help society adopt AI faster and safer. I believe that distributed trustless networks like blockchains are the the most robust internet infra for our financial, social, and technological systems and will play a vital role in AGI security. I scale myself by learning, building, and measuring all my feedback loops. I'm interested in AI alignment, ZK-circuits, and mech interpretability.",
    "In 2022, I joined BitGo, an institutional crypto custody Series B (now C) startup, where I scaled and led the newly formed EVM Integration Team by working on Threshold Signature Scheme wallets, fullstack wallet integration, and maintaining blockchain infra. I worked here for 2 years and left to go to grad school.",
    "I'm currently working on several personal projects in the AI and crypto space. You can find more about these on my blog."
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
      title: "Lead Software Engineer",
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
        "Built crypto wallet platform & infra, signing protocols, on-chain interactions, blockchain indexer for hot, cold, and custodial wallets. ▪ Integrated blockchains such as Avalanche, Ethereum, Polygon, and Tezos into wallet stacks. ▪ Delivered Threshold Signature Scheme signing protocol for NFT custody and transactions on Polygon for clients like Nike. ▪ Developed features for WBTC tokenization indexer and platform integration. ▪ Led a team of 4 engineers to deliver crucial software features, integrations, security updates, and resolve bugs. ▪ Concepts: Node, Typescript, React, Express, MongoDB, AWS, Kubernetes, Docker, Java, Solidity, Terraform, C++.",
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
