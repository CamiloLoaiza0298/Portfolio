import SectionTitle from '../layout/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    domain: 'Web App',
    title: 'School Elections System',
    imagePath: '../../../public/images/first-project.png',
    description: 'A web application designed to allow students to cast their votes securely and efficiently, while providing administrators with tools to monitor voting activity, and generate real-time results.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: 'primary'
  },
  {
    domain: 'E-commerce Web App',
    title: '3D Printing Store',
    imagePath: '../../../public/images/second-project.png',
    description: 'A web application mockup designed for managing an online store, including product listings, shopping cart functionality, and a secure checkout process.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Selenium/Python', 'Katalon'],
    color: 'primary'
  },
  {
    domain: 'Web App',
    title: 'Zona Torrida S.A.S. Website',
    imagePath: '../../../public/images/third-project.png',
    description: 'A modern website for Zona Torrida S.A.S., featuring a responsive design and easy navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'primary'
  },
];

function ProjectCard({ project }) {
  return (
    <div className={'group bg-surface-container-highest/20 rounded-xl overflow-hidden border border-white/5 hover:border-' + project.color + '-container/40 transition-all duration-500 flex flex-col'}>
      <div className="h-56 overflow-hidden relative">
        <img className={'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100'} data-alt={'' + project.title + ' preview.'} src={project.imagePath} />
        <div className={'absolute top-4 left-4 bg-' + project.color + '-container/20 backdrop-blur-md border border-' + project.color + '-container/30 px-3 py-1 rounded-full'}>
          <span className={'font-code-sm text-code-sm text-' + project.color + '-container'}>{project.domain}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-3">{project.title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span className={'bg-' + project.color + '-container/10 text-' + project.color + '-container px-2 py-0.5 rounded font-code-sm text-[11px] uppercase'} key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

}




export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="max-w-md mt-12 text-center mx-auto">
          <a
            href="https://github.com/CamiloLoaiza0298"
            className="bg-primary-container text-on-primary-container px-4 py-3 rounded font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2 justify-center mx-auto"
            target="_blank"
          >
            View My GitHub <Github size={20}/>
          </a>
        </div>

      </div>
    </section>
  );
}