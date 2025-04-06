import { defineMiddleware } from "astro:middleware";
import translate from "@translate";

export const onRequest = defineMiddleware((context, next) => {
    const defaultLang = Object.keys(translate)[0]; // Idioma predeterminado (por ejemplo, "en")
    const path = context.url.pathname;

    // Verificar si la ruta no tiene un prefijo de idioma
    if (!path.match(/^\/[a-z]{2}(\/|$)/)) {
        // Redirigir agregando el idioma predeterminado al final de la ruta
        return context.redirect(`${path.replace(/\/$/, "")}/${defaultLang}`);
    }

    return next();
});