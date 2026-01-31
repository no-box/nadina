import React, { useEffect, useState } from 'react';
import { HeroToothIllustration } from '../components/icons/DentalIcons';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dental-light via-white to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-dental-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dental-accent/5 rounded-full blur-3xl" />
        <svg
          className="absolute top-40 right-20 w-8 h-8 text-dental-accent/30 animate-float"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
        <svg
          className="absolute bottom-40 left-20 w-6 h-6 text-dental-primary/20 animate-float-slow"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-dental-primary/10 rounded-full"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-2 h-2 bg-dental-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-dental-primary">
                Stomatološka ordinacija Sarajevo
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dental-text leading-tight"
              style={{ transitionDelay: '200ms' }}
            >
              Vaš osmijeh je{' '}
              <span className="text-dental-primary">naša strast</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-dental-text-secondary max-w-xl leading-relaxed"
              style={{ transitionDelay: '300ms' }}
            >
              Profesionalna stomatološka njega u srcu Sarajeva. 
              Za Vas, Vašu obitelj i Vaše bliske. Dijaspore i turisti dobrodošli.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: '400ms' }}
            >
              <button
                onClick={() => scrollToSection('#kontakt')}
                className="px-8 py-4 bg-dental-primary text-white font-semibold rounded-xl
                         transition-all duration-300 hover:bg-dental-primary-dark 
                         hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                Naručite se
              </button>
              <button
                onClick={() => scrollToSection('#o-nama')}
                className="px-8 py-4 bg-white text-dental-primary font-semibold rounded-xl
                         border-2 border-dental-primary/20 transition-all duration-300
                         hover:border-dental-primary hover:bg-dental-primary/5
                         active:scale-[0.98]"
              >
                Saznajte više
              </button>
            </div>

            {/* Trust Badges */}
            <div 
              className="flex flex-wrap gap-6 pt-4"
              style={{ transitionDelay: '500ms' }}
            >
              {[
                { value: '20+', label: 'godina iskustva' },
                { value: '5000+', label: 'zadovoljnih pacijenata' },
                { value: '100%', label: 'posvećenost' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dental-accent/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-dental-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-dental-text">{badge.value}</div>
                    <div className="text-sm text-dental-text-secondary">{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <HeroToothIllustration 
                size={400} 
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] animate-float" 
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-xl shadow-card p-4 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-dental-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-dental-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-dental-text">Moderna oprema</div>
                    <div className="text-sm text-dental-text-secondary">Najnovija tehnologija</div>
                  </div>
                </div>
              </div>

              {/* Another floating element */}
              <div className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-dental-primary text-white rounded-xl shadow-glow p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="font-medium text-sm">Certificirani tim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
