import SectionTitle from '../layout/SectionTitle';

function SkillBox({ title, icon, iconColor, iconBackground, skills }) {
  return (
    <div class={'bg-surface-container border border-white/5 p-8 rounded-xl backdrop-blur-md hover:border-primary-container/30 transition-all group'}>
      <div class={'w-12 h-12 ' + iconColor + ' ' + iconBackground + '/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'}>
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-4">{title}</h3>
      <ul class="space-y-3">
        {skills.map((skill) => (
          <li key={skill.name} class="flex items-center gap-2 text-on-surface-variant font-code-sm text-code-sm">
            <span class={'w-1.5 h-1.5 ' + iconBackground + ' rounded-full'}></span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    { category: 'Web & Frontend', skills: [{ name: 'HTML/CSS' }, { name: 'JavaScript' }, { name: 'React' }, { name: 'Tailwind CSS' }] },
    { category: 'Programming & Tools', skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'MySQL' }, { name: 'Git' }, { name: 'Testing & Debugging: Selenium, Katalon' }] },
    { category: 'Hardware & Engineering', skills: [{ name: 'Electronics' }, { name: '3D Modeling' }, { name: '3D Printing' }, { name: 'Computer Architecture' }] },
  ];

  return (
    <section id="skills" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/50">
      <div className="max-w-[1280px] mx-auto">

        <SectionTitle>My Skills</SectionTitle>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-sm"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web & Frontend */}
          <SkillBox title="Web & Frontend" icon="html" iconColor="text-primary-container" iconBackground="bg-primary-container" skills={skills[0].skills} />
          {/* Programming & Tools */}
          <SkillBox title="Software & Logic" icon="data_object" iconColor="text-secondary-fixed" iconBackground="bg-secondary-fixed" skills={skills[1].skills} />
          {/* Hardware & Engineering */}
          <SkillBox title="Hardware & Engineering" icon="memory" iconColor="text-tertiary-fixed" iconBackground="bg-tertiary-fixed" skills={skills[2].skills} />
        </div>
      </div>
    </section>
  );
}