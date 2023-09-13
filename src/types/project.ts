export type Link = {
    text: string;
    url?: string;
    href?: string;
};

export type Tools = {
    stack?: string[];
} | string[];

export type Achievements = {
    content?: string[];
} | string[];

export type Project = {
    title: string;
    description: string;
    tools: Tools;
    achievements: Achievements;
    links?: Link[] | { urls: Link[] };
};
