import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';

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

function ExperienceCard({ icon, title, company, period, description, color, index, inView }) {
  const isPrimary = color === 'primary';
  const borderHoverClass = isPrimary ? 'group-hover:border-primary-container' : 'group-hover:border-secondary-container';
  const textClass = isPrimary ? 'text-primary-container' : 'text-secondary-container';

  return (
    <div
      className={`relative pl-20 group ${inView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-5'}`}
      style={{ animationDelay: inView ? `${0.15 + index * 0.2}s` : '0s' }}
    >
      <div className={`absolute left-0 top-0 w-16 h-16 bg-surface-container border border-white/10 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] ${borderHoverClass} transition-colors`}>
        <span className={`material-symbols-outlined ${textClass}`}>{icon}</span>
      </div>
      <div>
        <span className={`font-code-sm text-code-sm ${textClass} mb-2 block`}>{period}</span>
        <h4 className="font-headline-md text-headline-md text-on-surface">{title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{company}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2"><span className="font-bold">Main responsibilities:</span> {description}</p>
      </div>
    </div>

  )
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-surface-dim scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>Experience</SectionTitle>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-12">
            <div
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-container to-white/5"
              style={{
                height: inView ? '100%' : '0',
                transition: 'height 0.8s ease-out 0.3s',
              }}
            ></div>
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} {...exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}