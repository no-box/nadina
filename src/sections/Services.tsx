import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  ServiceCheckupIcon,
  ServiceCosmeticIcon,
  ServiceOrthoIcon,
  ServiceSurgeryIcon,
  ServiceEndoIcon,
  ServiceProstheticsIcon,
} from '../components/icons/DentalIcons';

const Services: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const services = [
    {
      icon: ServiceCheckupIcon,
      title: 'Redoviti pregledi',
      description: 'Preventivna njega i redoviti pregledi za održavanje zdravlja zubi. Rano otkrivanje problema štedi vrijeme i novac.',
      features: ['Pregled zuba', 'Čišćenje zuba', 'Fluoridacija'],
    },
    {
      icon: ServiceCosmeticIcon,
      title: 'Estetska stomatologija',
      description: 'Transformirajte svoj osmijeh s našim estetskim tretmanima. Izbjeljivanje, ljuskice i puno više.',
      features: ['Izbjeljivanje', 'Keramičke ljuskice', 'Kompozitni ispun'],
    },
    {
      icon: ServiceOrthoIcon,
      title: 'Ortodoncija',
      description: 'Ispravite položaj zubi i zagrize. Nudimo fiksne i mobilne proteze te Invisalign tretmane.',
      features: ['Fiksne proteze', 'Mobilne proteze', 'Invisalign'],
    },
    {
      icon: ServiceSurgeryIcon,
      title: 'Oralna kirurgija',
      description: 'Stručna oralna kirurgija uz minimalnu nelagodu. Vađenje zuba, implantati i korekcije.',
      features: ['Vađenje zuba', 'Dentalni implantati', 'Korekcija desni'],
    },
    {
      icon: ServiceEndoIcon,
      title: 'Endodoncija',
      description: 'Liječenje korijena kanala kako bismo spasili Vaš zub i uklonili bol. Precizna i sigurna procedura.',
      features: ['Liječenje korijena', 'Revizija kanala', 'Apikalna kirurgija'],
    },
    {
      icon: ServiceProstheticsIcon,
      title: 'Protetika',
      description: 'Vratite funkcionalnost i estetiku Vašeg osmijeha. Krune, mostovi i totalne proteze.',
      features: ['Keramičke krune', 'Mostovi', 'Totalne proteze'],
    },
  ];

  return (
    <section
      id="usluge"
      ref={sectionRef}
      className="py-20 md:py-28 bg-dental-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dental-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-dental-primary">
              Naše usluge
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dental-text mb-6">
            Kompletna stomatološka{' '}
            <span className="text-dental-primary">njega</span>
          </h2>

          <p className="text-lg text-dental-text-secondary">
            Nudimo širok spektar stomatoloških usluga za cijelu obitelj. 
            Od redovitih pregleda do složenih procedura, tu smo za Vas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 transition-all duration-500 
                         hover:shadow-card hover:-translate-y-1
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent size={64} className="w-16 h-16" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-dental-text mb-3 group-hover:text-dental-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-dental-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-dental-text-secondary">
                      <svg 
                        className="w-4 h-4 text-dental-accent flex-shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-dental-text-secondary mb-6">
            Imate pitanja o našim uslugama? Slobodno nas kontaktirajte.
          </p>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-dental-primary text-white font-semibold rounded-xl
                     transition-all duration-300 hover:bg-dental-primary-dark hover:shadow-glow
                     hover:scale-[1.02] active:scale-[0.98]"
          >
            Kontaktirajte nas
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
