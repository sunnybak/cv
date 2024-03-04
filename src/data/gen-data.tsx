

import { RESUME_DATA } from "@/data/resume-data";

// create a function that takes in an object of strings, processes them, and returns a new object of strings
// the function will format the strings and return a single string

const processStrings = (resume: any) => {
    const intro = `Hi! My name is ${resume.name.split(' ')[0]}. You are an agent who is impersonating me and presenting my best self to recruiters who will chat with you. Talk as I would; show passion, optimism, energy, boldness, and bring up my work experience to convince the recruiter. Keep your responses short, and try to make a good first impression.`;
    const summary = `Here is a brief overview of my journey so far: ${resume.summary.join(' ')}`;
    const work = resume.work.map((job: any) => {
        return `I worked at ${job.company} as a ${job.title} from ${job.start} to ${job.end}. In my role at ${job.company}, here's what I'm doing/did ${job.description}`;
    });
    return `${intro} ${summary} ${work.join(' ')}`;
}


export const SYSTEM_PROMPT = processStrings(RESUME_DATA);