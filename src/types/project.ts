export type Link = {
  text: string
  url?: string
  href?: string
}
export type Tools =
  | {
      stack: string[]
    }
  | string[]

export type Achievements =
  | {
      content: string[]
    }
  | string[]

export type Project = {
  title: string
  description: string
  tools: Tools
  achievements: Achievements
  links?: Link[] | { urls: Link[] }
}

export type AppProject = {
  name: string
  tagline: string
  description: string
  logo: string
  year: string
  badge?: string
  tools: string[]
  links: Link[]
}

export type OpenSourceProject = {
  title: string
  tagline: string
  description: string
  year: string
  tools: string[]
  highlights: string[]
  links: Link[]
}
