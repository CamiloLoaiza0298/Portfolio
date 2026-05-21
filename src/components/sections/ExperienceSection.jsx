import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Developed responsive web applications using React and modern CSS frameworks.',
  },
  {
    title: 'Junior Developer',
    company: 'Company Name',
    period: '2022 - 2023',
    description: 'Assisted in building and maintaining web applications with JavaScript and HTML/CSS.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-headline-lg font-bold text-center text-on-surface mb-12 font-headline-lg">
          Experience
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="flex gap-4 p-6 bg-surface-container rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="text-on-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-headline-md font-semibold text-on-surface font-headline-md">
                  {exp.title}
                </h3>
                <p className="text-body-md text-on-surface-variant font-body-md">{exp.company}</p>
                <p className="text-body-md text-on-surface-variant mt-1 font-body-md">
                  {exp.period}
                </p>
                <p className="text-body-md text-on-surface-variant mt-2 font-body-md">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}