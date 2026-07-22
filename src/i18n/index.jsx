import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

const translations = { en, es, fr };

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  const browserLang = navigator.language.slice(0, 2);
  if (translations[browserLang]) return browserLang;
  return 'en';
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key) => {
    return getByPath(translations[language], key) ?? key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
