import React from 'react';
import { FacebookIcon, InstagramIcon } from '../components/icons/DentalIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#hero', label: 'Početna' },
    { href: '#o-nama', label: 'O nama' },
    { href: '#usluge', label: 'Usluge' },
    { href: '#remote', label: 'Remote' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    'Redoviti pregledi',
    'Estetska stomatologija',
    'Ortodoncija',
    'Oralna kirurgija',
    'Endodoncija',
    'Protetika',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dental-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                fill="none"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M32 8 C40 8, 48 12, 48 26 C48 32, 46 36, 44 40 C42 48, 44 56, 44 62 C44 66, 40 68, 36 68 C34 68, 32 66, 32 62 C32 66, 30 68, 28 68 C24 68, 20 66, 20 62 C20 56, 22 48, 20 40 C18 36, 16 32, 16 26 C16 12, 24 8, 32 8"
                  fill="#2A7A8C"
                />
                <ellipse cx="26" cy="24" rx="6" ry="10" fill="white" opacity="0.3" />
              </svg>
              <span className="font-semibold text-xl">Dental Care</span>
            </a>
            <p className="text-white/70 leading-relaxed mb-6">
              Profesionalna stomatološka njega u srcu Sarajeva. 
              Vaš osmijeh je naša strast.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
                         hover:bg-dental-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
                         hover:bg-dental-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Brzi linkovi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors duration-300 
                             hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Usluge</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#usluge"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#usluge');
                    }}
                    className="text-white/70 hover:text-white transition-colors duration-300 
                             hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-dental-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/70">
                  Maršala Tita 15<br />
                  71000 Sarajevo, BiH
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-dental-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+38733123456" className="text-white/70 hover:text-white transition-colors">
                  +387 33 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-dental-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@dentalcare.ba" className="text-white/70 hover:text-white transition-colors">
                  info@dentalcare.ba
                </a>
              </li>
            </ul>

            {/* Language Switcher Placeholder */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/50 mb-3">Jezik / Language</p>
              <div className="flex flex-wrap gap-2">
                {['HR', 'BS', 'SR', 'EN', 'DE', 'IT'].map((lang, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded transition-all duration-300 ${
                      lang === 'HR'
                        ? 'bg-dental-primary text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Dental Care Sarajevo. Sva prava pridržana.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Politika privatnosti
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Uslovi korištenja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
