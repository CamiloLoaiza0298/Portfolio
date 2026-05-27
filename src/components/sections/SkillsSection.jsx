import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';

const skills = [
    { category: 'Web & Frontend', skills: [{ name: 'HTML/CSS' }, { name: 'JavaScript' }, { name: 'React' }, { name: 'Tailwind CSS' }] },
    { category: 'Programming & Tools', skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'MySQL' }, { name: 'Git' }, { name: 'Testing & Debugging: Selenium, Katalon' }] },
    { category: 'Hardware & Engineering', skills: [{ name: 'Electronics' }, { name: '3D Modeling' }, { name: '3D Printing' }, { name: 'Computer Architecture' }] },
  ];

function SkillBox({ title, icon, iconColor, iconBackground, skills, index, inView }) {
  return (
    <div
      className={`bg-surface-container border border-white/5 p-8 rounded-xl backdrop-blur-md hover:border-primary-container/30 transition-all group hover:scale-[1.02] hover:shadow-xl ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`}
      style={{ animationDelay: inView ? `${index * 0.15}s` : '0s' }}
    >
      <div className={'w-12 h-12 ' + iconColor + ' ' + iconBackground + '/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-2 text-on-surface-variant font-code-sm text-code-sm">
            <span className={'w-1.5 h-1.5 ' + iconBackground + ' rounded-full'}></span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/50 scroll-mt-16">
      <div className="max-w-[1280px] mx-auto" ref={ref}>

        <div className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>My Skills</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillBox title="Web & Frontend" icon="html" iconColor="text-primary-container" iconBackground="bg-primary-fixed" skills={skills[0].skills} index={0} inView={inView} />
          <SkillBox title="Software & Logic" icon="data_object" iconColor="text-secondary-container" iconBackground="bg-secondary-fixed" skills={skills[1].skills} index={1} inView={inView} />
          <SkillBox title="Hardware & Engineering" icon="memory" iconColor="text-tertiary-container" iconBackground="bg-tertiary-fixed" skills={skills[2].skills} index={2} inView={inView} />
        </div>
      </div>
    </section>
  );
}