import { useState } from 'react';
import i18next from './i18n';

function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div>
      {currentLanguage === 'en' ? (
        <button onClick={() => changeLanguage('ko')}>한국어</button>
      ) : (
        <button onClick={() => changeLanguage('en')}>English</button>
      )}
    </div>
  );
}

export default LanguageToggle;
