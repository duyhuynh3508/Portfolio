export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
}