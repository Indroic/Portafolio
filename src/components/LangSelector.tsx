import { useState } from "react";
import translate from "@translate";

const langs = Object.keys(translate);

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function LangSelector({ currentLang }: { currentLang?: string }) {
  const [selectedLang, setSelectedLang] = useState(currentLang);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    if (newLang !== selectedLang) {
      setSelectedLang(newLang);

      // Obtener la ruta actual
      const currentPath = window.location.pathname;

      // Verificar si la ruta ya tiene un prefijo de idioma
      const newPath = currentPath.match(/\/[a-z]{2}(\/|$)/)
        ? currentPath.replace(/\/[a-z]{2}(\/|$)/, `/${newLang}/`) // Reemplazar el idioma existente
        : `${currentPath.replace(/\/$/, "")}/${newLang}`; // Agregar el idioma al final si no existe

      // Redirigir a la nueva ruta
      window.location.href = newPath;
    }
  };

  return (
    <select
      className="border rounded px-2 py-1 text-black-pearl-50 border-transparent aspect-auto"
      value={selectedLang}
      onChange={handleLanguageChange}
    >
      {languages.map((lang) => (
        <option className="text-black-pearl-900" key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
