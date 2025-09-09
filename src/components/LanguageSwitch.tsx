import { useLanguage } from '../context/LanguageContext';
import { MdOutlineLanguage } from 'react-icons/md';

const LanguageSwitch = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'pt-BR' ? 'es' : 'pt-BR';
    changeLanguage(newLanguage);
  };

  return (
    <div className="switch-container">
      <button
        className="btn mx-0 px-0"
        onClick={handleLanguageSwitch}
        title={language === 'pt-BR' ? 'Português' : 'Español'}
      >
        <MdOutlineLanguage className="icon text-body" />
        <span className="switch-text text-white p-1">
          {language === 'pt-BR' ? 'Português' : 'Español'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitch;
