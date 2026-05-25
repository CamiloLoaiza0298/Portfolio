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

function ExperienceCard({ props }) {
  return (
    <div className="relative pl-20 group">
      <div className={'absolute left-0 top-0 w-16 h-16 bg-surface-container border border-white/10 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:border-' + props.color + '-container transition-colors'}>
        <span className={'material-symbols-outlined text-' + props.color + '-container '}>{props.icon}</span>
      </div>
      <div>
        <span className={'font-code-sm text-code-sm text-' + props.color + '-container mb-2 block'}>{props.period}</span>
        <h4 className="font-headline-md text-headline-md text-on-surface">{props.title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{props.company}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2"><span className="font-bold">Main responsibilities:</span> {props.description}</p>
      </div>
    </div>

  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-12">
            <div className="absolute left-7.75 top-0 bottom-0 w-0.5 bg-white/5"></div>
            {experiences.map((props) => (
              <ExperienceCard key={props.title} props={props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}