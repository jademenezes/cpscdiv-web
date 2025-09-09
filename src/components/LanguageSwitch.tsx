import { useLanguage } from '../context/LanguageContext';
import { MdOutlineLanguage } from 'react-icons/md';

const LanguageSwitch = () => {
  const { language, changeLanguage } = useLanguage();

  console.log('LanguageSwitch current language:', language); // Add this

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'pt-BR' ? 'es' : 'pt-BR';
    changeLanguage(newLanguage);
  };

  return (
    <button
      className="btn"
      onClick={handleLanguageSwitch}
      title={language === 'pt-BR' ? 'Português' : 'Español'}
    >
      <MdOutlineLanguage className="icon text-body" />
      <span className="p-1 text-white">
        {language === 'pt-BR' ? 'Português' : 'Español'}
      </span>
    </button>
  );
};

export default LanguageSwitch;
