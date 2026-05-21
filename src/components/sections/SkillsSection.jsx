export default function SkillsSection() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-headline-lg font-bold text-center text-on-surface mb-12 font-headline-lg">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-medium font-body-md">
                  {skill.name}
                </span>
                <span className="text-on-surface-variant font-body-md">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}