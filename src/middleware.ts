import { defineMiddleware } from "astro:middleware";
import translate from "@translate"

export const onRequest = defineMiddleware((context, next) => {
    if (context.url.pathname === "/Portafolio") {
        return context.redirect(`/Portafolio/${Object.keys(translate)[0]}`);
    }
    if (context.url.pathname === "/") {
        return context.redirect(`/${Object.keys(translate)[0]}`);
    }

    return next();
});