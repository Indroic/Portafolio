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

type Tecnology = {
    logo: ImageMetadata;
    logoAlt: string;
    name: string;
};

type Tecnologies = {
    section: string;
    tecnologies: Tecnology[];
}

export const tecnologies: Tecnologies[] = [
    {
        section: "Bases de Datos",
        tecnologies: [
            { logo: postgres, logoAlt: "Logo de PostgreSQL", name: "PostgreSQL" },
        ],
    },
    {
        section: "Lenguajes de Programación",
        tecnologies: [
            { logo: python, logoAlt: "Logo de Python", name: "Python" },
            { logo: js, logoAlt: "Logo de JavaScript", name: "JavaScript" },
            { logo: ts, logoAlt: "Logo de TypeScript", name: "TypeScript" },
        ],
    },
    {
        section: "Frameworks",
        tecnologies: [
            { logo: astro, logoAlt: "Logo de Astro", name: "Astro" },
            { logo: react, logoAlt: "Logo de React", name: "React" },
            { logo: next, logoAlt: "Logo de Next", name: "Next" },
            { logo: fastapi, logoAlt: "Logo de FastAPI", name: "FastAPI" },
        ],
    },
];
