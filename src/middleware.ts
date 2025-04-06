import { defineMiddleware } from "astro:middleware";
import translate from "@translate";

export const onRequest = defineMiddleware((context, next) => {
    const defaultLang = Object.keys(translate)[0]; // Idioma predeterminado (por ejemplo, "en")
    console.log(context.url.pathname.split("/"))
    console.log(context.url.pathname.split("/").length)
    if (context.url.pathname.split("/")[1] === '') {
        return context.redirect(`/${defaultLang}`);
    }

    return next();
});