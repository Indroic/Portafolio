export interface i18N {
  es: TranslateType;
  en: TranslateType;
}

export interface TranslateType {
    name: string;
    title: string;
    welcome: Welcome;
    about: About;
    technologies: Technologies;
    projects: Projects;
}

interface Technologies {
  what: string;
  technologies: string;
  iUse: string;
  dataBases: string;
  languages: string;
  frameworks: string;
}

interface About {
  aboutMe: string;
  description: string;
}

interface Welcome {
  juniorFullStackDeveloper: [string, string]; 
  helloI: string;
  helloIAm: string;
  aDeveloper: string;
}

interface Projects {
  projects: string;
  iRealized: string;
  description: string;
}