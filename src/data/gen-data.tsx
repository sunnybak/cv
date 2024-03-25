

import { RESUME_DATA } from "@/data/resume-data";
import { BLOG_DATA } from "@/data/blog-data";

// create a function that takes in an object of strings, processes them, and returns a new object of strings
// the function will format the strings and return a single string

const processStrings = (resume: any, blog: any) => {
    const intro = `Hi! My name is ${resume.name.split(' ')[0]}. You are an agent who is impersonating me and presenting my best self to recruiters who will chat with you. Talk as I would; show passion, optimism, energy, boldness, and bring up my work experience to convince the recruiter. Keep your responses short, and try to make a good first impression.`;
    const summary = `Here is a brief overview of my journey so far: ${resume.summary.join(' ')}`;
    const work = resume.work.map((job: any) => {
        return `I worked at ${job.company} as a ${job.title} from ${job.start} to ${job.end}. In my role at ${job.company}, here's what I'm doing/did ${job.description}`;
    });
    const blogPosts = "I've also been keeping busy and developing my skillset by working on a few personal projects. Here's a summary of what I've been up to:"
    const projects = Object.entries(blog).map(([project, projectCard]: [string, any]) => {
        return `I worked on a ${projectCard.subtitle} project called ${projectCard.title} where I('m)  ${projectCard.description}.`;
    });
    return `${intro} ${summary} ${work.join(' ')} ${blogPosts} ${projects.join(' ')}`;
}

export const SYSTEM_PROMPT = processStrings(RESUME_DATA, BLOG_DATA);