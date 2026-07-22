import { useState } from 'react';
import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n';

const icons = ['verified', 'workspace_premium', 'school'];
const images = ['/images/webapp-cert.png', '/images/python-cert.png', '/images/electrical-cert.png'];

function CertificationCard({ icon, title, institution, year, index, inView, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative pl-20 text-left w-full group transition-all duration-300 ${
        inView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-5'
      } ${isSelected ? 'scale-[1.02]' : ''}`}
      style={{ animationDelay: inView ? `${0.15 + index * 0.2}s` : '0s' }}
    >
      <div
        className={`absolute left-0 top-0 w-16 h-16 border rounded-lg flex items-center justify-center transition-all duration-300 ${
          isSelected
            ? 'bg-surface-container-high border-primary-container text-primary-container shadow-[0_0_15px_rgba(0,240,255,0.15)]'
            : 'bg-surface-container border-white/10 text-primary-container group-hover:border-primary-container/60'
        }`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div
        className={`p-4 rounded-xl border transition-all duration-300 ${
          isSelected
            ? 'bg-primary-container/5 border-primary-container/30'
            : 'bg-surface-container/50 border-transparent group-hover:border-white/10'
        }`}
      >
        <span className="font-code-sm text-code-sm text-primary-container mb-2 block">{title}</span>
        <h4 className="font-headline-md text-headline-md text-on-surface">{year}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{institution}</p>
      </div>
    </button>
  );
}

export default function CertificationsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);
  const { t } = useLanguage();

  const certifications = t('certifications.items').map((item, i) => ({
    ...item,
    id: i + 1,
    icon: icons[i],
    image: images[i],
  }));

  const handleSelect = (cert) => {
    setSelectedCert((prev) => (prev?.id === cert.id ? null : cert));
  };

  return (
    <section id="certifications" className="py-20 bg-surface-container-low/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>{t('certifications.title')}</SectionTitle>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Lista de certificaciones */}
          <div className="w-full md:w-2/5">
            <div className="relative space-y-6">
              <div
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-container to-white/5"
                style={{
                  height: inView ? '100%' : '0',
                  transition: 'height 0.8s ease-out 0.3s',
                }}
              />
              {certifications.map((cert, i) => (
                <CertificationCard
                  key={cert.id}
                  {...cert}
                  index={i}
                  inView={inView}
                  isSelected={selectedCert?.id === cert.id}
                  onClick={() => handleSelect(cert)}
                />
              ))}
            </div>
          </div>

          {/* Panel de imagen */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            {selectedCert ? (
              <div
                key={selectedCert.id}
                className="animate-slide-in-right w-full"
              >
                <div className="bg-surface-container border border-white/10 rounded-xl p-4 shadow-[0_0_20px_rgba(0,240,255,0.08)]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain max-h-[500px]"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-headline-md text-headline-md text-on-surface">{selectedCert.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">{selectedCert.institution}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center py-20 text-on-surface-variant/50">
                <span className="material-symbols-outlined text-5xl mb-4">image</span>
                <p className="font-body-md text-body-md">{t('certifications.selectPlaceholder')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
