import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../components/icons/DentalIcons';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Početna' },
    { href: '#o-nama', label: 'O nama' },
    { href: '#usluge', label: 'Usluge' },
    { href: '#remote', label: 'Remote' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 64 64"
                fill="none"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M32 8 C40 8, 48 12, 48 26 C48 32, 46 36, 44 40 C42 48, 44 56, 44 62 C44 66, 40 68, 36 68 C34 68, 32 66, 32 62 C32 66, 30 68, 28 68 C24 68, 20 66, 20 62 C20 56, 22 48, 20 40 C18 36, 16 32, 16 26 C16 12, 24 8, 32 8"
                  fill="#1E5A6B"
                />
                <ellipse cx="26" cy="24" rx="6" ry="10" fill="white" opacity="0.3" />
              </svg>
              <span className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-dental-text' : 'text-dental-text'
              }`}>
                Dental Care
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-dental-text-secondary hover:text-dental-primary'
                      : 'text-dental-text-secondary hover:text-dental-primary'
                  } group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dental-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#kontakt')}
                className="px-5 py-2.5 bg-dental-primary text-white text-sm font-medium rounded-lg 
                         transition-all duration-300 hover:bg-dental-primary-dark hover:shadow-glow
                         hover:scale-[1.02] active:scale-[0.98]"
              >
                Naručite se
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-dental-text hover:text-dental-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Zatvori menu' : 'Otvori menu'}
            >
              {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-400 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-400 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-lg font-medium text-dental-text hover:text-dental-primary 
                           transition-colors py-2 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#kontakt')}
                className="mt-4 w-full px-5 py-3 bg-dental-primary text-white font-medium rounded-lg 
                         transition-all duration-300 hover:bg-dental-primary-dark"
              >
                Naručite se
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
