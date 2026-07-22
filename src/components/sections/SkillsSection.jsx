import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n';

const skillsData = [
    { icon: 'html', iconColor: 'text-primary-container', iconBackground: 'bg-primary-fixed', titleKey: 'skills.frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { icon: 'data_object', iconColor: 'text-secondary-container', iconBackground: 'bg-secondary-fixed', titleKey: 'skills.software', skills: ['Python', 'Java', 'MySQL', 'Git', 'Testing & Debugging: Selenium, Katalon'] },
    { icon: 'memory', iconColor: 'text-tertiary-container', iconBackground: 'bg-tertiary-fixed', titleKey: 'skills.hardware', skills: ['Electronics', '3D Modeling', '3D Printing', 'Computer Architecture'] },
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
          <li key={skill} className="flex items-center gap-2 text-on-surface-variant font-code-sm text-code-sm">
            <span className={'w-1.5 h-1.5 ' + iconBackground + ' rounded-full'}></span> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/50 scroll-mt-16">
      <div className="max-w-[1280px] mx-auto" ref={ref}>

        <div className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>{t('skills.title')}</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, i) => (
            <SkillBox key={skill.titleKey} title={t(skill.titleKey)} icon={skill.icon} iconColor={skill.iconColor} iconBackground={skill.iconBackground} skills={skill.skills} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
