import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = (props: { children: ReactNode }) => {
  const getBrowserLanguage = () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    return savedLanguage || 'pt-BR';
  };

  const [language, setLanguage] = useState(getBrowserLanguage);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
};
