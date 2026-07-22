import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n';

const languages = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'es', label: 'ES', full: 'Español' },
  { code: 'fr', label: 'FR', full: 'Français' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === language);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 my-3 px-3 py-1.5 bg-surface-container border border-white/10 rounded-lg font-label-md text-[13px] text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all duration-200"
      >
        <span className="material-symbols-outlined text-[18px]">translate</span>
        <span>{current.label}</span>
        <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-36 bg-surface-container-high border border-white/10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.15s' }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-4 py-2.5 font-label-md text-[13px] transition-colors ${
                language === lang.code
                  ? 'bg-primary-container/10 text-primary-container'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
              }`}
            >
              {lang.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
