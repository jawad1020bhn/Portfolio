
import React, { useState, useEffect } from 'react';
import { RESUME_URL } from '../constants';
import { Menu, X, Download, MessageSquare, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle logo click (scroll to top)
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 85; // Height of the fixed header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b-4 border-dark py-2' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
        {/* Logo / Name */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className={`font-sans font-bold text-xl md:text-2xl tracking-tighter flex flex-col leading-none group z-50 relative transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="group-hover:text-primary transition-colors uppercase">Bahaa Eddine</span>
          <span className="text-secondary uppercase">Gotai.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-6">
            {t.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-sm font-bold hover:text-primary transition-colors hover:underline decoration-4 decoration-primary underline-offset-4 uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex gap-3 items-center">
             <button
               onClick={toggleLanguage}
               className="flex items-center gap-1 font-mono font-bold text-sm border-2 border-dark px-2 py-2 bg-white shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all"
               aria-label="Toggle Language"
             >
               <Languages size={16} />
               <span>{language === 'en' ? 'FR' : 'EN'}</span>
             </button>

             <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark font-bold font-mono px-4 py-2 border-2 border-dark shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all flex items-center gap-2"
            >
              <Download size={16} />
              <span>CV</span>
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-secondary text-white font-bold font-mono px-6 py-2 border-2 border-dark shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              {language === 'en' ? "Let's Talk" : "Discuter"}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex gap-2 items-center z-50">
          <button 
             onClick={toggleLanguage}
             className="p-2 bg-white border-2 border-dark shadow-neo-sm active:translate-y-1 active:shadow-none transition-all font-bold font-mono"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 bg-primary border-2 border-dark shadow-neo-sm active:translate-y-1 active:shadow-none transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full bg-white border-b-4 border-dark shadow-2xl md:hidden pt-24 pb-8 px-6 flex flex-col gap-2"
          >
            {t.nav.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-bold font-sans py-4 border-b-2 border-gray-100 hover:text-secondary hover:border-secondary transition-colors flex items-center justify-between uppercase"
              >
                {item.label}
                <span className="text-sm font-mono text-gray-400">0{idx + 1}</span>
              </a>
            ))}
            
            <div className="flex flex-col gap-4 mt-8">
              <a 
                href={RESUME_URL}
                className="bg-white text-dark text-center font-bold font-mono text-lg px-6 py-4 border-2 border-dark shadow-neo active:translate-y-1 active:shadow-none transition-all flex justify-center items-center gap-2"
              >
                <Download size={20} /> {language === 'en' ? 'Get Resume' : 'Télécharger CV'}
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-secondary text-white text-center font-bold font-mono text-lg px-6 py-4 border-2 border-dark shadow-neo active:translate-y-1 active:shadow-none transition-all flex justify-center items-center gap-2"
              >
                <MessageSquare size={20} /> {language === 'en' ? "Let's Talk" : "Discuter"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
