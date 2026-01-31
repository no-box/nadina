import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TeamIllustration } from '../components/icons/DentalIcons';

const About: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const teamMembers = [
    {
      name: 'Dr. Amra Hadžić',
      specialty: 'Oralna kirurgija',
      description: '15 godina iskustva u oralnoj kirurgiji i implantologiji.',
    },
    {
      name: 'Dr. Edin Smajlović',
      specialty: 'Ortodoncija',
      description: 'Specijalist za fiksne i mobilne proteze, Invisalign tretmane.',
    },
    {
      name: 'Dr. Lejla Kovač',
      specialty: 'Estetska stomatologija',
      description: 'Stručnjak za izbjeljivanje, keramičke ljuskice i estetske zahvate.',
    },
  ];

  const stats = [
    { value: '20+', label: 'godina iskustva' },
    { value: '5000+', label: 'zadovoljnih pacijenata' },
    { value: '3', label: 'specijalista' },
    { value: '100%', label: 'posvećenost' },
  ];

  return (
    <section
      id="o-nama"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Illustration */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <TeamIllustration 
              size={500} 
              className="w-full max-w-[400px] lg:max-w-[500px] mx-auto" 
            />
          </div>

          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dental-primary/10 rounded-full">
              <span className="text-sm font-medium text-dental-primary">
                Upoznajte naš tim
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dental-text leading-tight">
              Stručnjaci posvećeni{' '}
              <span className="text-dental-primary">Vašem osmijehu</span>
            </h2>

            <p className="text-lg text-dental-text-secondary leading-relaxed">
              Naš tim iskusnih stomatologa posvećen je pružanju vrhunske dentalne njege. 
              Koristimo najmoderniju tehnologiju i individualni pristup svakom pacijentu. 
              Vaše zadovoljstvo i zdravlje zubi su naš prioritet.
            </p>

            <p className="text-lg text-dental-text-secondary leading-relaxed">
              Ordinacija je osnovana s vizijom da pacijentima pružimo bezbrižno iskustvo 
              u ugodnom okruženju. Vjerujemo da svatko zaslužuje zdrav i lijep osmijeh.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-dental-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-dental-text text-center mb-12">
            Naš tim stručnjaka
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-dental-light rounded-2xl p-8 transition-all duration-300 
                         hover:shadow-card hover:-translate-y-2"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-dental-primary/10 flex items-center justify-center mb-6 
                              group-hover:bg-dental-primary/20 transition-colors duration-300">
                  <svg 
                    className="w-10 h-10 text-dental-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                <h4 className="text-xl font-semibold text-dental-text mb-2">
                  {member.name}
                </h4>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-dental-accent/20 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-dental-accent rounded-full" />
                  <span className="text-sm font-medium text-dental-accent-dark">
                    {member.specialty}
                  </span>
                </div>

                <p className="text-dental-text-secondary leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
