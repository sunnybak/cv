import {
    EuropeLogo,
} from "@/images/logos";

export const BLOG_DATA = {
    backpacking: {
        title: 'Solo Backpacking',
        subtitle: "Travel & Personal Development",
        logo: EuropeLogo,
        start: "Jun 2023",
        end: "Aug 2023",
        content:
            "Stayed in youth hostels in 15 cities across 8 countries for 2 months with a backpack. ▪ Met 1000 people from various backgrounds and went on adventures with them. ▪ Ran with the bulls in Pamplona, Spain.",
    },
    groq: {
        title: 'Groq',
        subtitle: 'Research Review',
        logo: EuropeLogo,
        start: "Jan 2024",
        end: "Mar 2022",
        content:
            "Researched Groq, a new AI chip startup. ▪ Wrote a 10-page report on Groq's architecture and performance. ▪ Presented findings to the class.",
    },
    supervisedCompression: {
        title: 'Supervised Compression',
        subtitle: 'Research Review',
        logo: EuropeLogo,
        start: "Jan 2024",
        end: "Mar 2022",
        content:
            "Researched supervised compression algorithms. ▪ Researched how CNNs can be partially distilled into variational autoencoders for improved performance. ▪ Presented results from state-of-the-art approaches to class.",
    },
    soulchat: {
        title: 'SoulChat',
        subtitle: 'Startup',
        logo: EuropeLogo,
        start: "Jan 2024",
        end: "Mar 2022",
        content:
            "Co-founded SoulChat, a mental health chatbot startup. ▪ Currently beta testing.",
    },
    gazaTelehealth: {
        title: 'Gaza Telehealth',
        subtitle: 'Nonprofit',
        logo: EuropeLogo,
        start: "Jan 2024",
        end: "Mar 2022",
        content:
            "Leading technical development at Gaza Telehealth, a nonprofit providing telehealth services for civilians in Gaza. ▪ Built a telehealth platform that connects 10,000 patients with over 100 doctors.",
    },
    sentinel: {
        title: 'Sentinel',
        subtitle: 'Research at UCI IASL',
        logo: EuropeLogo,
        start: "Mar 2024",
        content:
            "Researching the application of knowledge distillation to LLMs. ▪ Attempting to distill Mistral 7B into Llama 3B. ▪ Aiming to train a cluster of small LLMs using whitebox open source LLMs.",
    },
    stealth: {
        title: 'Stealth',
        subtitle: 'Startup',
        logo: EuropeLogo,
        start: "Mar 2024",
        content:
            "Co-founding a startup that explores the use of LLMs for market research.",
    },
    cryptech: {
        title: 'Cryptech',
        subtitle: 'dApp',
        logo: EuropeLogo,
        start: "May 2018",
        end: "Aug 2018",
        content:
            "Built an API that creates a zero-knowledge proof of a real estate transaction and posts the proof to a blockchain",
    },
    mechWarfare: {
        title: 'Mech Warfare',
        subtitle: 'Robotics Competition',
        logo: EuropeLogo,
        start: "Jan 2017",
        end: "Mar 2017",
        content:
            "Built competitive remote controlled 4-legged shooting robot using C++ kinematics engine",
    }
} as const;