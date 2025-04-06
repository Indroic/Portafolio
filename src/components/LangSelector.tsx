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

      // Obtener la ruta actual sin el prefijo del idioma
      const currentPath = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
      // Redirigir a la nueva ruta con el idioma seleccionado
      window.location.href = `/${newLang}${currentPath}`;
    }
  };

  return (
    <select
      className="border rounded px-2 py-1 text-black-pearl-100 border-transparent"
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
