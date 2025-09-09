import { createContext, useContext } from 'react';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  changeLanguage: () => {},
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  return context;
};
