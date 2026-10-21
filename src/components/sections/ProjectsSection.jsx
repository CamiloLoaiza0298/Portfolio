import { useState } from 'react';
import SectionTitle from '../layout/SectionTitle';
import ProjectCarousel from '../layout/ProjectCarousel';
import { Github } from 'lucide-react';
import { SiReact, SiJavascript, SiTailwindcss, SiVite, SiPython, SiFlask, SiSqlite, SiSelenium } from 'react-icons/si';
import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n';

const iconMap = {
  'React': SiReact,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'Python': SiPython,
  'Flask': SiFlask,
  'SQLite': SiSqlite,
  'Selenium': SiSelenium,
};

const projectsData = [
  {
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: 'primary',
    imagePath: '/images/first-project.png',
  },
  {
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Selenium/Python', 'Katalon'],
    color: 'primary',
    imagePath: '/images/second-project.png',
  },
  {
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'primary',
    imagePath: '/images/third-project.png',
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`group bg-surface-container-highest/20 rounded-xl overflow-hidden border border-white/5 hover:border-primary-container/60 transition-all duration-500 ease-out flex flex-col hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-container/10 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`}
      style={{ perspective: '1000px', animationDelay: inView ? `${index * 0.15}s` : '0s' }}
    >
      <div className="h-56 overflow-hidden relative">
        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" data-alt={project.title + ' preview.'} src={project.imagePath} />
        <div className="absolute top-4 left-4 bg-primary-container/20 backdrop-blur-md border border-primary-container/30 px-3 py-1 rounded-full">
          <span className="font-code-sm text-code-sm text-primary-container">{project.domain}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-3">{project.title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span className="bg-primary-container/10 text-primary-container px-2 py-0.5 rounded font-code-sm text-[11px] uppercase" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState('atmosfera');

  const projects = t('projects.items').map((item, i) => ({
    ...item,
    ...projectsData[i],
  }));

  const active = t(`projects.featured.${selectedProject}`);
  const featuredKeys = ['atmosfera', 'elecciones'];

  const carouselSlides = active.carousel.map((item, i) => {
    const prefix = selectedProject === 'elecciones' ? 'votaciones' : 'atmosfera';
    return {
      image: `/images/${prefix}/${prefix}${i + 1}.png`,
      caption: item.caption,
    };
  });

  return (
    <section id="projects" className="py-20 bg-surface-dim scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>{t('projects.title')}</SectionTitle>
        </div>

        {/* Project selector tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {featuredKeys.map((key) => {
            const project = t(`projects.featured.${key}`);
            const isActive = selectedProject === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedProject(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 font-label-md text-label-md cursor-pointer ${
                  isActive
                    ? 'border-primary-container bg-primary-container/10 text-primary-container shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                    : 'border-white/10 bg-surface-container text-on-surface-variant hover:border-primary-container/40 hover:text-primary-container'
                }`}
              >
                <img
                  src={project.logo}
                  alt={project.buttonLabel}
                  className="w-8 h-8 object-contain rounded"
                />
                <span>{project.buttonLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Featured project content */}
        <div key={selectedProject} className="animate-fade-in-up mb-12">
          <p className="text-body-lg text-on-surface-variant text-center mb-8">
            {active.carouselTitle}
          </p>
          <ProjectCarousel slides={carouselSlides} />

          <p className="text-body-md text-on-surface-variant text-center mt-8 mb-2 font-bold">
            {t('projects.technologies')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {active.tech.map((tech) => {
              const Icon = iconMap[tech] || null;
              return (
                <span
                  key={tech}
                  className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-code-sm text-[12px] flex items-center gap-1.5 hover:bg-primary-container/20 transition-all duration-300 hover:scale-105"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px grow bg-white/50"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-2xl shrink-0">
            {t('projects.subtitle')}
          </h2>
          <div className="h-px grow bg-white/50 relative">
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <div className="max-w-md mt-12 text-center mx-auto">
          <a
            href="https://github.com/CamiloLoaiza0298"
            className="bg-primary-container text-on-primary-container px-4 py-3 rounded font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2 justify-center mx-auto"
            target="_blank" rel="noopener noreferrer"
          >
            {t('projects.viewGithub')} <Github size={20}/>
          </a>
        </div>

      </div>
    </section>
  );
}
