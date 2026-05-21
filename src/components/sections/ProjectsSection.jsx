import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: '#',
    live: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-headline-lg font-bold text-center text-on-surface mb-12 font-headline-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface-container rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-headline-md font-semibold text-on-surface mb-2 font-headline-md">
                {project.title}
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4 font-body-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-container text-on-primary-container text-code-sm rounded-full font-code-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary"
                >
                  <ExternalLink size={18} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}