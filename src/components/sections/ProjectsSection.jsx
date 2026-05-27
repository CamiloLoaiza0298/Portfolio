import SectionTitle from '../layout/SectionTitle';
import { Github } from 'lucide-react';
import useInView from '../../hooks/useInView';

const projects = [
  {
    domain: 'Web App',
    title: 'School Elections System',
    imagePath: '/images/first-project.png',
    description: 'A web application designed to allow students to cast their votes securely and efficiently, while providing administrators with tools to monitor voting activity, and generate real-time results.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: 'primary'
  },
  {
    domain: 'E-commerce Web App',
    title: '3D Printing Store',
    imagePath: '/images/second-project.png',
    description: 'A web application mockup designed for managing an online store, including product listings, shopping cart functionality, and a secure checkout process.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Selenium/Python', 'Katalon'],
    color: 'primary'
  },
  {
    domain: 'Web App',
    title: 'Zona Torrida S.A.S. Website',
    imagePath: '/images/third-project.png',
    description: 'A modern website for Zona Torrida S.A.S., featuring a responsive design and easy navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'primary'
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`group bg-surface-container-highest/20 rounded-xl overflow-hidden border border-white/5 hover:border-primary-container/60 transition-all duration-500 ease-out flex flex-col hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-container/10 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`}
      style={{ perspective: '1000px', animationDelay: inView ? `${index * 0.15}s` : '0s' }}
    >
      <div className="h-56 overflow-hidden relative">
        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" data-alt={'' + project.title + ' preview.'} src={project.imagePath} />
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

  return (
    <section id="projects" className="py-20 bg-surface-dim scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>My Projects</SectionTitle>
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
            View My GitHub <Github size={20}/>
          </a>
        </div>

      </div>
    </section>
  );
}