import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    year: '2020 - 2024',
    description: 'Relevant coursework: Data Structures, Web Development, Machine Learning',
  },
  {
    degree: 'High School Diploma',
    school: 'High School Name',
    year: '2016 - 2020',
    description: 'Focus on mathematics and science',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-headline-lg font-bold text-center text-on-surface mb-12 font-headline-lg">
          Education
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex gap-4 p-6 bg-surface-dim rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="text-on-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-headline-md font-semibold text-on-surface font-headline-md">
                  {edu.degree}
                </h3>
                <p className="text-body-md text-on-surface-variant font-body-md">{edu.school}</p>
                <p className="text-body-md text-on-surface-variant mt-1 font-body-md">
                  {edu.year}
                </p>
                <p className="text-body-md text-on-surface-variant mt-2 font-body-md">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}