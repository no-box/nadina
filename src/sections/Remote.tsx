import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TourismIllustration, CheckmarkIcon } from '../components/icons/DentalIcons';

const Remote: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const features = [
    'Besplatna virtualna konzultacija',
    'Organizacija smještaja u Sarajevu',
    'Transfer iz aerodroma',
    'Personalizirani tretmanski plan',
    'Engleski, njemački, talijanski govorni osoblje',
    'Ušteda do 70% na dentalnim tretmanima',
  ];

  const benefits = [
    {
      title: 'Virtualna konzultacija',
      description: 'Zakažite besplatnu video konzultaciju i saznajte više o tretmanu prije dolaska.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: 'Organizacija smještaja',
      description: 'Pomažemo Vam pronaći smještaj u blizini ordinacije po povoljnim cijenama.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Transfer',
      description: 'Organiziramo preuzimanje s aerodroma i prijevoz do ordinacije.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="remote"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dental-accent/20 rounded-full">
              <span className="text-sm font-medium text-dental-accent-dark">
                Dental turizam
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dental-text leading-tight">
              Remote konzultacije{' '}
              <span className="text-dental-primary">za dijasporu</span>
            </h2>

            <p className="text-lg text-dental-text-secondary leading-relaxed">
              Specijalno prilagođeno za našu dijasporu i dentalne turiste. 
              Uštedite do 70% na dentalnim tretmanima uz vrhunsku kvalitetu. 
              Sarajevo je idealna destinacija za dentalni turizam - 
              kvalitetna usluga, povoljne cijene i prelijep grad.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckmarkIcon size={24} className="flex-shrink-0 w-6 h-6" />
                  <span className="text-dental-text">{feature}</span>
                </div>
              ))}
            </div>

            {/* Package Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-dental-primary to-dental-primary-light rounded-xl text-white transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Dental turizam paket</div>
                <div className="text-sm text-white/80">Uštedite do 70%</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <TourismIllustration 
              size={500} 
              className="w-full max-w-[400px] lg:max-w-[500px] mx-auto" 
            />
          </div>
        </div>

        {/* Benefits Cards */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-dental-text text-center mb-12">
            Kako funkcionira dental turizam?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-dental-light rounded-2xl p-8 transition-all duration-300 
                         hover:shadow-card hover:-translate-y-2 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-dental-primary/10 flex items-center justify-center mx-auto mb-6 
                              group-hover:bg-dental-primary group-hover:text-white text-dental-primary transition-all duration-300">
                  {benefit.icon}
                </div>

                <h4 className="text-xl font-semibold text-dental-text mb-3">
                  {benefit.title}
                </h4>

                <p className="text-dental-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-dental-text-secondary mb-4">
            Dostupni smo na više jezika:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Hrvatski', 'Bosanski', 'Srpski', 'English', 'Deutsch', 'Italiano'].map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-dental-text
                         hover:border-dental-primary hover:text-dental-primary transition-colors duration-300"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remote;
