//Bases de datos
import postgres from "../assets/logos/postgres.svg";

//Lenguajes de Programación
import python from "../assets/logos/python.svg";
import js from "../assets/logos/js.svg";
import ts from "../assets/logos/ts.svg";

//Frameworks
import astro from "../assets/logos/astro.svg";
import react from "../assets/logos/react.svg";
import next from "../assets/logos/nextjs.svg";
import fastapi from "../assets/logos/fastapi.svg";
import django from "../assets/logos/django.svg";


import type { TranslateType } from "../i18n";

type Tecnology = {
  logo: ImageMetadata;
  logoAlt: string;
  name: string;
};

type Tecnologies = {
  section: (translate: TranslateType) => string;
  tecnologies: Tecnology[];
};

export const tecnologies: Tecnologies[] = [
  {
    section: (translate) => translate.technologies.dataBases,
    tecnologies: [
      { logo: postgres, logoAlt: "Logo de PostgreSQL", name: "PostgreSQL" },
    ],
  },
  {
    section: (translate) => translate.technologies.languages,
    tecnologies: [
      { logo: python, logoAlt: "Logo de Python", name: "Python" },
      { logo: js, logoAlt: "Logo de JavaScript", name: "JavaScript" },
      { logo: ts, logoAlt: "Logo de TypeScript", name: "TypeScript" },
    ],
  },
  {
    section: (translate) => translate.technologies.frameworks,
    tecnologies: [
      { logo: astro, logoAlt: "Logo de Astro", name: "Astro" },
      { logo: react, logoAlt: "Logo de React", name: "React" },
      { logo: next, logoAlt: "Logo de Next", name: "Next" },
      { logo: fastapi, logoAlt: "Logo de FastAPI", name: "FastAPI" },
      { logo: django, logoAlt: "Logo de Django", name: "Django" },
    ],
  },
];
