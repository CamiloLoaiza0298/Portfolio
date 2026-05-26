import SectionTitle from '../layout/SectionTitle';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Resident Site Engineer',
    company: 'Conercom S.A.S.',
    period: 'Sept. 2023 - Dec. 2023',
    description: 'Supervise and manage electrical projects on construction sites or industrial installations, ensuring that electrical systems are built according to specifications, comply with regulations and safety standards, and resolving technical issues during the construction process.',
    icon: 'bolt',
    color: 'primary',
  },
  {
    title: 'Production Engineer',
    company: 'Noatec S.A.S.',
    period: 'July 2022 - Aug. 2023',
    description: 'Analyze, design, and modify manufacturing methods, techniques, tools, and equipment using technology to improve product quality and reduce manufacturing time and costs.',
    icon: 'engineering',
    color: 'secondary',
  },
];

function ExperienceCard({ icon, title, company, period, description, color }) {
  const colorClasses = {
    borderClass: color === 'primary' ? 'group-hover:border-primary-container' : 'group-hover:border-secondary-container',
    textClass: color === 'primary' ? 'text-primary-container' : 'text-secondary-container',
  };

  return (
    <div className="relative pl-20 group">
      <div className={`absolute left-0 top-0 w-16 h-16 bg-surface-container border border-white/10 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] ${colorClasses.borderClass} transition-colors`}>
        <span className={`material-symbols-outlined ${colorClasses.textClass}`}>{icon}</span>
      </div>
      <div>
        <span className={`font-code-sm text-code-sm ${colorClasses.textClass} mb-2 block`}>{period}</span>
        <h4 className="font-headline-md text-headline-md text-on-surface">{title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{company}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2"><span className="font-bold">Main responsibilities:</span> {description}</p>
      </div>
    </div>

  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-surface-dim scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-12">
            <div className="absolute left-7.75 top-0 bottom-0 w-0.5 bg-white/5"></div>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}