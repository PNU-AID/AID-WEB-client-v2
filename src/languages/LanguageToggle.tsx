import { useState } from 'react';
import i18next from './i18n';
import { languages } from './languages';

function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <section className="flex">
      {languages.map((lang, index) => (
        <div key={lang.code}>
          <span
            className={`text-sm font-bold cursor-pointer ${
              currentLanguage === lang.code ? 'text-black' : 'text-gray-400'
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.label}
          </span>
          {index < languages.length - 1 && <span className="px-1"> / </span>}
        </div>
      ))}
    </section>
  );
}

export default LanguageToggle;
