import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../../i18n';

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [leftRef, leftInView] = useInView({ threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const now = new Date();
    const timeField = formRef.current.querySelector('input[name="time"]');
    if (timeField) {
      const locale = language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : 'en-US';
      timeField.value = now.toLocaleString(locale, {
        dateStyle: 'full',
        timeStyle: 'long',
      });
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
      .then(() => {
        setSent(true);
        formRef.current.reset();
      })
      .catch(() => {
        setError(t('contact.error'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-surface-container scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={leftInView || rightInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>{t('contact.title')}</SectionTitle>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Contact info */}
          <div
            ref={leftRef}
            className={leftInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}
            style={{ animationDelay: leftInView ? '0.1s' : '0s' }}
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 text-3xl">{t('contact.heading')}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              {t('contact.description')}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="font-code-sm text-code-sm text-on-surface-variant uppercase opacity-60">{t('contact.email')}</div>
                  <div className="font-body-md text-body-md text-on-surface">ingjcloaiza@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/10 flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="font-code-sm text-code-sm text-on-surface-variant uppercase opacity-60">{t('contact.location')}</div>
                  <div className="font-body-md text-body-md text-on-surface">Manizales, Caldas, Colombia</div>
                </div>
              </div>
              
              <div className="max-w-md mt-5 text-center mx-auto">
                <a
                  href="https://www.linkedin.com/in/juan-camilo-loaiza-alarcón-1702a628a"
                  className="border border-primary-container/50 text-primary-container px-8 py-4 rounded font-label-md text-label-md hover:bg-primary-container/10 backdrop-blur-sm transition-all flex items-center gap-2 justify-center mx-auto"
                  target="_blank" rel="noopener noreferrer"
                >
                  {t('contact.viewLinkedin')} <Linkedin size={20}/>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div
            ref={rightRef}
            className={`bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden ${rightInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`}
            style={{ animationDelay: rightInView ? '0.3s' : '0s' }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">terminal</span>
            </div>

            {sent ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
                <span className="material-symbols-outlined text-6xl text-primary-container mb-4">check_circle</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{t('contact.messageSent')}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {t('contact.thankYou')}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary-container underline font-label-md text-label-md hover:opacity-80"
                >
                  {t('contact.sendAnother')}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="relative z-10 space-y-6">
                <input type="hidden" name="time" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="font-label-md text-label-md text-on-surface-variant uppercase">{t('contact.name')}</label>
                    <input
                      id="user_name"
                      name="user_name"
                      type="text"
                      required
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full bg-surface-container-low border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary-container transition-colors text-on-surface"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="font-label-md text-label-md text-on-surface-variant uppercase">{t('contact.emailLabel')}</label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full bg-surface-container-low border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary-container transition-colors text-on-surface"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant uppercase">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    rows="4"
                    className="w-full bg-surface-container-low border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary-container transition-colors text-on-surface"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 font-body-md text-body-md text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('contact.sending') : t('contact.sendButton')}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
