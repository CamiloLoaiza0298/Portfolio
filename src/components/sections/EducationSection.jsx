import SectionTitle from '../layout/SectionTitle';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Matrix College of Management, Techonology and Healtcare Inc.',
    city: 'Montreal, Canada',
    year: '2024 - 2026',
    description: 'Relevant coursework: Data Structures, Web Development, Machine Learning',
  },
  {
    degree: 'Electrical Enginnering Diploma',
    school: 'Universidad Nacional de Colombia',
    city: 'Manizales, Colombia',
    year: '2016 - 2022',
    description: 'Focus on mathematics and science',
  },
  {
    degree: 'High School Diploma',
    school: 'High School Name',
    city: 'City, State',
    year: '2016 - 2020',
    description: 'Focus on mathematics and science',
  },
];

function EducationCard({ props }) {
  return (
    <div class="relative space-y-12">
      <div class="absolute left-7.75 top-0 bottom-0 w-0.5 bg-white/5"></div>
      <div class="relative pl-20 group">
        <div class="absolute left-0 top-0 w-16 h-16 bg-surface-container border border-white/10 rounded-lg flex items-center justify-center text-secondary-container shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:border-secondary-container transition-colors">
          <span class="material-symbols-outlined">school</span>
        </div>
        <div>
          <span class="font-code-sm text-code-sm text-secondary-container mb-2 block">{props.year}</span>
          <h4 class="font-headline-md text-headline-md text-on-surface">{props.degree}</h4>
          <p class="font-body-md text-body-md text-on-surface-variant mt-1">{props.school} - {props.city}</p>
          <p class="font-body-md text-body-md text-on-surface-variant mt-2">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div class="relative space-y-12">
            <div class="absolute left-7.75 top-0 bottom-0 w-0.5 bg-white/5"></div>
            {education.map((props) => (
              <EducationCard key={props.degree} props={props} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}