import SectionTitle from '../layout/SectionTitle';
import useInView from '../../hooks/useInView';

const education = [
  {
    degree: 'LEA.CQ Computer Science Technology - Software Testing ACS',
    school: 'Matrix College of Management, Techonology and Healtcare Inc.',
    city: 'Montreal, Canada',
    year: '2024 - 2026',
    icon: 'computer',
  },
  {
    degree: 'Electrical Enginnering Diploma',
    school: 'Universidad Nacional de Colombia',
    city: 'Manizales, Colombia',
    year: '2016 - 2022',
    icon: 'engineering',
  },
  {
    degree: 'High School Diploma',
    school: 'Colegio Seminario Redentorista',
    city: 'Manizales, Colombia',
    year: '2015',
    icon: 'school',
  },
];

function EducationCard({ icon, degree, school, city, year, index, inView }) {
  return (
    <div
      className={`relative pl-20 group ${inView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-5'}`}
      style={{ animationDelay: inView ? `${0.15 + index * 0.2}s` : '0s' }}
    >
      <div className="absolute left-0 top-0 w-16 h-16 bg-surface-container border border-white/10 rounded-lg flex items-center justify-center text-secondary-container shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:border-secondary-container transition-colors">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <span className="font-code-sm text-code-sm text-secondary-container mb-2 block">{year}</span>
        <h4 className="font-headline-md text-headline-md text-on-surface">{degree}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{school}</p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 italic">{city}</p>
      </div>
    </div>
  )
}

export default function EducationSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-surface-container-low/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}>
          <SectionTitle>Education</SectionTitle>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="relative space-y-12">
            <div
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-secondary-container to-white/5"
              style={{
                height: inView ? '100%' : '0',
                transition: 'height 0.8s ease-out 0.3s',
              }}
            ></div>
            {education.map((item, i) => (
              <EducationCard key={item.degree} {...item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}