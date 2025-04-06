import { defineMiddleware } from "astro:middleware";
import translate from "@translate";

export const onRequest = defineMiddleware((context, next) => {
    const defaultLang = Object.keys(translate)[0];
    if (context.url.pathname.split("/")[1] === '') {
        return context.redirect(`/${defaultLang}`);
    }

    return next();
});